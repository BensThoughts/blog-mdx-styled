import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import config from '../../next-filesystem-reader';
const POSTS_DIR = config.postsDirectory as string;
const EXCLUDED_DIRS = config.excludedProdDirs as string[];

type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;

// type SlugData = {
//   isDirectory: boolean,
//   slug: string,
//   mtimeDate: string,
// }

type DirectoryData<T> = {
  directories: {
    slug: string,
    mtimeDate: string,
  }[],
  mdxArticles: {
    slug: string,
    metadata: {
      date: string
    } & T
  }[]
  // metadata?: {date: string} & T
}

export type PageData<T> = {
  isDirectory: boolean,
  directory?: {
    data: DirectoryData<T>
  },
  article?: {
    content: string,
    metadata: {date: string} & T
  }
}

// type ExpandRecursively<T> = T extends object
//   ? T extends infer O ? { [K in keyof O]: ExpandRecursively<O[K]> } : never
//   : T;

function getDirectoryListing<T>(cwd: string): DirectoryData<T> {
  const slugData: DirectoryData<T> = {
    directories: [],
    mdxArticles: [],
  };
  const excludedRoutes = process.env.NODE_ENV === 'production' ? EXCLUDED_DIRS : [];
  try {
    const dirents = fs.readdirSync(cwd, {withFileTypes: true});
    dirents.forEach((dirent) => {
      const fullPath = path.join(cwd, dirent.name);
      const slug = fullPath.replace(POSTS_DIR, '').split(path.sep).join('/').replace('.mdx', '');
      if (dirent.isDirectory() && !excludedRoutes.includes(dirent.name)) {
        const mtimeDate = getFileModifiedDate(fullPath);
        slugData.directories.push({
          mtimeDate,
          slug,
        });
      } else {
        // const fullFilePath = path.join(POSTS_DIR, slug) + '.mdx';
        const metadata = getBlogPostMetadata<T>(fullPath);

        slugData.mdxArticles.push({
          slug: slug,
          metadata,
        });
      };
    });
  } catch (e) {
    console.error(`There was an error reading from ${cwd}: ${e}`);
  }

  return slugData;
}

function getAllSlugs<T>({
  cwd,
  slugData,
}: {
  cwd: string;
  slugData: DirectoryData<T>;
}): DirectoryData<T> {
  const {directories, mdxArticles} = getDirectoryListing<T>(cwd);
  slugData.directories.push(...directories);
  slugData.mdxArticles.push(...mdxArticles);
  directories.forEach(({slug}) => {
    const nextDir = path.parse(slug);
    const nextCwd = path.join(cwd, nextDir.name);
    slugData = getAllSlugs({
      cwd: nextCwd,
      slugData,
    });
  });

  return slugData;
};


export function getSortedDirectoryData<T>(currentSlugPath?: string): DirectoryData<T> {
  const searchDir = currentSlugPath ? path.join(POSTS_DIR, currentSlugPath) : POSTS_DIR;
  const allSlugs = getDirectoryListing<T>(searchDir);
  const directories = allSlugs.directories.sort((a, b) => (a.mtimeDate < b.mtimeDate) ? 1 : -1);
  const mdxArticles = allSlugs.mdxArticles.sort((a, b) => (a.metadata.date < a.metadata.date) ? 1 : -1);
  return {
    directories,
    mdxArticles,
  };
}

export function getAllPages(): {params: {slug: string[]}}[] {
  const slugData = getAllSlugs({
    cwd: POSTS_DIR,
    slugData: {
      directories: [],
      mdxArticles: [],
    },
  });

  const directorySlugs = slugData.directories.map(({slug}) => {
    return {
      params: {
        slug: slugStringToArray(slug),
      },
    };
  });
  const mdxSlugs = slugData.mdxArticles.map(({slug}) => {
    return {
      params: {
        slug: slugStringToArray(slug),
      },
    };
  });

  return [...directorySlugs, ...mdxSlugs];
};


export async function getPageData<T>(slugArray: string[]): Promise<Expand<PageData<T>>> {
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

function getFileModifiedDate(path: fs.PathLike) {
  try {
    const fullDate = fs.statSync(path).mtime;
    const date = `${fullDate.getUTCFullYear()}-${fullDate.getUTCMonth() + 1}-${fullDate.getUTCDate()}`;
    return date;
  } catch (e) {
    throw new Error(`Error in getFileModifiedDate, failed to access ${path}: ${e}`);
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


// function checkIfPathExists(path: fs.PathLike): {pathExists: boolean, error?: string} {
//   try {
//     const pathExists = fs.existsSync(path);
//     return {pathExists};
//   } catch (e) {
//     return {
//       pathExists: false,
//       error: `Error in checkIfPathExists, at ${path}: ${e}`
//     };
//   }
// }

// /* Helper Functions */
// function isDirectory(path: fs.PathLike): {isDirectory: boolean, error?: string} {
//   try {
//     const pathStats = fs.statSync(path);
//     return {
//       isDirectory: pathStats.isDirectory()
//     };
//   } catch (e) {
//     return {
//       isDirectory: false,
//       error: `Error in isDirectory, trying to access ${path}: ${e}`
//     };
//   }
// }

// function isFile(path: fs.PathLike): boolean | Error {
//   try {
//     const pathStats = fs.statSync(path);
//     return pathStats.isFile();
//   } catch (e) {
//     return new Error(`Error in isFile, trying to access ${path}: ${e}`);
//   }
// }

// function readFile(path: fs.PathLike): {content: string, error?: string} {
//   try {
//     const buffer = fs.readFileSync(path, 'utf8');
//     return {
//       content: buffer
//     };
//   } catch (e) {
//     return {
//       content: '',
//       error: `Error in readFile, trying to access ${path}: ${e}`
//     };
//   }
// }

// function readDirectory(path: fs.PathLike): fs.Dirent[] | Error {
//   try {
//     const dirents = fs.readdirSync(path, {withFileTypes: true});
//     return dirents;
//   } catch (e) {
//     return new Error(`Error in readDirectory, trying to access ${path}: ${e}`);
//   }
// }


// function getSlugPaths({
//   cwd,
//   pathList,
//   basePath,
// }: {
//   cwd: string,
//   basePath: string,
//   pathList: SlugPath[],
// }): SlugPath[] {
//   const dirents = fs.readdirSync(cwd, {withFileTypes: true});
//   pathList = pathList || [];

//   const excludedRoutes = process.env.NODE_ENV === 'production' ? excludedProdDirs : [];

//   dirents.forEach((dirent) => {
//     if (dirent.isDirectory() && !excludedRoutes.includes(dirent.name)) {
//       pathList = getSlugPaths({
//         cwd: path.join(cwd, dirent.name),
//         pathList,
//         basePath,
//       });
//     } else if (!dirent.isDirectory()) {
//       const extendedPath = path.join(
//           cwd.replace(basePath, ''),
//           dirent.name
//       );
//       const slugPath = getSlugPath(path.parse(extendedPath));
//       pathList.push(slugPath);
//     };
//   });
//   return pathList;
// };

// function getSlugPath(absPath: path.ParsedPath) {
//   if (absPath.dir === '') {
//     return [absPath.name];
//   } else {
//     return [...absPath.dir.split(path.sep), absPath.name];
//   }
// }

// export function getSortedPostsData() {
//   const slugPaths = getSlugPaths({
//     basePath: postsDirectory,
//     cwd: postsDirectory,
//     pathList: [],
//   });
//   const allPostsData = slugPaths.map((slugPath) => {
//     const fullPath = path.join(postsDirectory, ...slugPath) + '.mdx';
//     const fileContents = fs.readFileSync(fullPath, 'utf8');
//     const matterResult = matter(fileContents);

//     const parsedPath = path.parse(path.join(...slugPath));
//     const slug = path.join(parsedPath.dir, parsedPath.name);

//     return {
//       slug,
//       ...(matterResult.data as {
//         date: string,
//         title: string,
//         longDescription: string,
//         tags: string[],
//       }),
//     };
//   });

//   return allPostsData.sort((a, b) => {
//     if (a.date < b.date) {
//       return 1;
//     } else {
//       return -1;
//     }
//   });
// }

// export function getAllPostSlugs() {
//   const slugPaths = getSlugPaths({
//     basePath: postsDirectory,
//     cwd: postsDirectory,
//     pathList: [],
//   });
//   return slugPaths.map((slugPath) => {
//     const fullPath = path.parse(path.join(...slugPath));
//     return {
//       params: {
//         slug: getSlugPath(fullPath),
//       },
//     };
//   });
// };

// function buildUrl(slug: string) {
//   return `${seoConfig.openGraph.url}/blog/${slug}`;
// }

// export async function getPostData(slugPath: string[]) {
//   const slug = path.join(...slugPath);
//   const fullPath = path.join(postsDirectory, `${slug}.mdx`);
//   const rawFileSource = fs.readFileSync(fullPath);
//   const {content, data} = matter(rawFileSource);
//   return {
//     content: content,
//     metaData: data,
//     url: buildUrl(slug),
//   };
// }


