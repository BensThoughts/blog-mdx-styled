import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import config from '../../next-filesystem-reader';
import yaml from 'js-yaml';
const POSTS_DIR = config.postsDirectory as string;
const EXCLUDED_DIRS = config.excludedProdDirs as string[];
const DIR_INDEX_FILE = 'index.yaml';

type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;

/**
 * Functions to get a directory listing or a single mdx article
 */

type DirectoryData<T> = {
  directories: {
    slug: string,
    dirMtimeDate: string,
    dirMetadata: {
      title: string,
      date: string,
      description: string | null,
    }
  }[],
  mdxArticles: {
    slug: string,
    mtimeDate: string,
    metadata: {
      date: string
    } & T
  }[]
}

export type PageData<T> = {
  isDirectory: boolean,
  directory?: {
    data: Expand<DirectoryData<T>>
  },
  article?: {
    content: string,
    metadata: {date: string} & T
  }
}

// type ExpandRecursively<T> = T extends object
//   ? T extends infer O ? { [K in keyof O]: ExpandRecursively<O[K]> } : never
//   : T;

function getDirectoryMetadata(cwd: string, dirent: fs.Dirent) {
  const fullPath = path.join(cwd, dirent.name);
  const indexPath = path.join(fullPath, DIR_INDEX_FILE);
  const indexExists = fs.existsSync(indexPath);
  if (!indexExists) {
    return {
      title: dirent.name,
      date: getFileModifiedDate(fullPath),
      description: null,
    };
  } else {
    const indexYaml = fs.readFileSync(indexPath, 'utf8');
    const parsedYaml = yaml.load(indexYaml) as {
      title: string,
      date: string,
      description: string,
    };
    return {
      title: parsedYaml.title ? parsedYaml.title : dirent.name,
      date: parsedYaml.date ? parsedYaml.date : getFileModifiedDate(fullPath),
      description: parsedYaml.description ? parsedYaml.description : null,
    };
  }
}

function getDirectoryListing<T>(cwd: string): DirectoryData<T> {
  const slugData: DirectoryData<T> = {
    directories: [],
    mdxArticles: [],
  };
  try {
    const dirents = fs.readdirSync(cwd, {withFileTypes: true});
    dirents.forEach((dirent) => {
      const {
        isMdx,
        isDirectory,
        isExcludedPath,
        fullPath,
        slugPath,
      } = getPathData(cwd, dirent);

      if (isDirectory && !isExcludedPath) {
        const {
          title,
          date,
          description,
        } = getDirectoryMetadata(cwd, dirent);
        const dirMtimeDate = getFileModifiedDate(fullPath);
        slugData.directories.push({
          slug: slugPath,
          dirMtimeDate,
          dirMetadata: {
            title,
            date,
            description,
          },
        });
      } else if (!isDirectory && isMdx) {
        const metadata = getBlogPostMetadata<T>(fullPath);
        const mtimeDate = getFileModifiedDate(fullPath);
        slugData.mdxArticles.push({
          slug: slugPath,
          mtimeDate,
          metadata,
        });
      };
    });
  } catch (e) {
    console.error(`There was an error reading from ${cwd}: ${e}`);
  }

  return slugData;
}

export function getSortedDirectoryData<T>(currentSlugPath?: string): DirectoryData<T> {
  const searchDir = currentSlugPath ? path.join(POSTS_DIR, currentSlugPath) : POSTS_DIR;
  const allSlugs = getDirectoryListing<T>(searchDir);
  const directories = allSlugs.directories.sort((a, b) => (a.dirMetadata.title > b.dirMetadata.title) ? 1 : -1);
  const mdxArticles = allSlugs.mdxArticles.sort((a, b) => (a.metadata.date < a.metadata.date) ? 1 : -1);
  return {
    directories,
    mdxArticles,
  };
}

function getAllDirectoryData<T>({
  cwd,
  directoryData,
}:{
  cwd: string,
  directoryData: DirectoryData<T>
}): DirectoryData<T> {
  directoryData = directoryData ? directoryData : {
    directories: [],
    mdxArticles: [],
  };
  const newDirectoryData = getDirectoryListing<T>(cwd);
  directoryData.directories.push(...newDirectoryData.directories);
  directoryData.mdxArticles.push(...newDirectoryData.mdxArticles);
  directoryData.directories.forEach((dir) => {
    const nextPath = path.join(POSTS_DIR, dir.slug);
    directoryData = getAllDirectoryData({
      cwd: nextPath,
      directoryData: directoryData,
    });
  });

  return directoryData;
}

export function getAllSortedDirectoryData<T>(): DirectoryData<T> {
  const allDirectoryData = getAllDirectoryData<T>({
    cwd: POSTS_DIR,
    directoryData: {
      directories: [],
      mdxArticles: [],
    },
  });
  const directories = allDirectoryData.directories.sort((a, b) => (a.dirMetadata.title > b.dirMetadata.title) ? 1 : -1);
  const mdxArticles = allDirectoryData.mdxArticles.sort((a, b) => (a.metadata.date < a.metadata.date) ? 1 : -1);
  return {
    directories,
    mdxArticles,
  };
}


export async function getPageData<T>(slugArray: string[]): Promise<PageData<T>> {
  const slug = slugArrayToString(slugArray);
  const pathWithoutExtension = path.join(POSTS_DIR, slug);
  const pathExists = fs.existsSync(pathWithoutExtension);
  if (pathExists && fs.statSync(pathWithoutExtension).isDirectory()) {
    const data = getSortedDirectoryData<T>(slug);
    return {
      isDirectory: true,
      directory: {
        data: data,
      },
    };
  } else {
    const pathWithExtension = `${pathWithoutExtension}.mdx`;
    const mdxPathExists = fs.existsSync(pathWithExtension);
    if (mdxPathExists && fs.statSync(pathWithExtension).isFile()) {
      const {content, data} = getBlogPost<T>(pathWithExtension);
      return {
        isDirectory: false,
        article: {
          content: content,
          metadata: data,
        },
      };
    } else {
      throw new Error(`Error in getPageData, slugPath gave neither a valid directory or a valid *.mdx file: ${slug}`);
    }
  }
}

function getBlogPost<T>(path: fs.PathLike): {content: string, data: {date: string} & T} {
  const rawFileSource = fs.readFileSync(path);
  const {content, data} = matter(rawFileSource);
  let date = data.date;
  if (!date) {
    date = getFileModifiedDate(path);
  }
  return {
    content,
    data: {
      ...data as T,
      slug: path.toLocaleString().replace(POSTS_DIR, ''),
      date,
    },
  };
}


function getBlogPostMetadata<T>(path: fs.PathLike): {date: string} & T {
  const rawFileSource = fs.readFileSync(path);
  const {data} = matter(rawFileSource);
  let date = data.date;
  if (!date) {
    date = getFileModifiedDate(path);
  }
  return {
    ...data as T,
    date,
  };
}


/**
 * Functions to get all slugs recursively
 */

type SlugData = {
  directories: {
    params: {
      slug: string[]
    }
  }[],
  mdxArticles: {
    params: {
      slug: string[]
    }
  }[],
}

function getSlugsInDir(cwd: string): SlugData {
  const slugData: SlugData = {
    directories: [],
    mdxArticles: [],
  };
  const dirents = fs.readdirSync(cwd, {withFileTypes: true});
  dirents.forEach((dirent) => {
    const {
      isDirectory,
      isMdx,
      isExcludedPath,
      slugPath,
    } = getPathData(cwd, dirent);

    if (!isDirectory && isMdx) {
      slugData.mdxArticles.push({
        params: {
          slug: slugStringToArray(slugPath),
        },
      });
    } else if (isDirectory && !isExcludedPath) {
      slugData.directories.push({
        params: {
          slug: slugStringToArray(slugPath),
        },
      });
    };
  });

  return slugData;
}

function getAllSlugs({
  cwd,
  slugData,
}: {
  cwd: string;
  slugData: SlugData;
}): SlugData {
  const {directories, mdxArticles} = getSlugsInDir(cwd);
  slugData.directories.push(...directories);
  slugData.mdxArticles.push(...mdxArticles);
  directories.forEach(({params: {slug}}) => {
    const nextDir = path.parse(slugArrayToString(slug));
    const nextCwd = path.join(cwd, nextDir.name);
    slugData = getAllSlugs({
      cwd: nextCwd,
      slugData,
    });
  });

  return slugData;
};

export function getAllPages(): {params: {slug: string[]}}[] {
  const {directories, mdxArticles} = getAllSlugs({
    cwd: POSTS_DIR,
    slugData: {
      directories: [],
      mdxArticles: [],
    },
  });

  return [...directories, ...mdxArticles];
};


/**
 * Helper Functions
 *
*/

function getFileModifiedDate(path: fs.PathLike) {
  try {
    const fullDate = fs.statSync(path).mtime;
    const date = `${fullDate.getUTCFullYear()}-${fullDate.getUTCMonth() + 1}-${fullDate.getUTCDate()}`;
    return date;
  } catch (e) {
    throw new Error(`Error in getFileModifiedDate, failed to access ${path}: ${e}`);
  }
}

function slugStringToArray(slugString: string) {
  const slugPath = path.parse(slugString);
  if (slugPath.dir === '') {
    return [slugPath.name];
  } else {
    return [...slugPath.dir.split(path.sep), slugPath.name];
  }
}

function slugArrayToString(slugPath: string[]) {
  return path.join(...slugPath);
}

function getPathData(cwd: string, dirent: fs.Dirent) {
  const excludedRoutes = process.env.NODE_ENV === 'production' ? EXCLUDED_DIRS : [];
  const fullPath = path.join(cwd, dirent.name);
  const isMdx = path.extname(fullPath) === '.mdx';
  const isDirectory = dirent.isDirectory();
  const isExcludedPath = excludedRoutes.includes(dirent.name);
  const slugPath = fullPath.replace(POSTS_DIR, '').split(path.sep).join('/').replace('.mdx', '');
  return {
    isMdx,
    isDirectory,
    isExcludedPath,
    fullPath,
    slugPath,
  };
}
