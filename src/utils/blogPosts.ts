import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import config from '../../next-filesystem-reader';
const POSTS_DIR = config.postsDirectory as string;
const EXCLUDED_DIRS = config.excludedProdDirs as string[];

export type PageData<T> = {
  isDirectory: boolean,
  // slug?: string,
  directory?: {
    data: {
      isDirectory: boolean,
      date: string,
      slug: string,
      metadata?: T
    }[]
  },
  article?: {
    content: string,
    metadata: T
  }
}

type SlugData = {
  isDirectory: boolean,
  slug: string,
}

function getDirectoryListing(cwd: string): SlugData[] {
  const slugData: SlugData[] = [];
  const excludedRoutes = process.env.NODE_ENV === 'production' ? EXCLUDED_DIRS : [];
  try {
    const dirents = fs.readdirSync(cwd, {withFileTypes: true});
    dirents.forEach((dirent) => {
      const slug = path.join(
          cwd.replace(POSTS_DIR, ''),
          dirent.name,
      );
      if (dirent.isDirectory() && !excludedRoutes.includes(dirent.name)) {
        slugData.push({
          isDirectory: true,
          slug,
        });
      } else {
        slugData.push({
          isDirectory: false,
          slug: slug.replace('.mdx', ''),
        });
      };
    });
  } catch (e) {
    console.error(`There was an error reading from ${cwd}: ${e}`);
  }

  return slugData;
}

function getAllSlugs({
  cwd,
  slugData,
}: {
  cwd: string;
  slugData: SlugData[];
}): SlugData[] {
  const newSlugData = getDirectoryListing(cwd);
  slugData.push(...newSlugData);
  newSlugData.forEach(({isDirectory, slug}) => {
    if (isDirectory) {
      const nextDir = path.parse(slug);
      const nextCwd = path.join(cwd, nextDir.name);
      slugData = getAllSlugs({
        cwd: nextCwd,
        slugData,
      });
    }
  });

  return slugData;
};


export function getSortedPageData<T>(currentSlugPath?: string): {isDirectory: boolean, date: string, slug: string, metadata?: T}[] {
  const searchDir = currentSlugPath ? path.join(POSTS_DIR, currentSlugPath) : POSTS_DIR;
  const allSlugs = getDirectoryListing(searchDir);
  const allPostsData = allSlugs
      // .filter(({isDirectory}) => !isDirectory)
      .map(({slug, isDirectory}) => {
        if (isDirectory) {
          const fullDirPath = path.join(POSTS_DIR, slug);
          const date = fs.statSync(fullDirPath).mtime.toISOString();
          return {
            isDirectory,
            slug,
            date,
          };
        } else {
          const fullFilePath = path.join(POSTS_DIR, slug) + '.mdx';
          const metadata = getBlogPostMetadata<T>(fullFilePath);
          const date = fs.statSync(fullFilePath).mtime.toISOString();

          return {
            isDirectory,
            slug,
            date,
            metadata: {...metadata},
          };
        }
      });

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPages() {
  const slugData = getAllSlugs({
    cwd: POSTS_DIR,
    slugData: [],
  });

  return slugData.map(({slug}) => {
    return {
      params: {
        slug: slugStringToArray(path.parse(slug)),
      },
    };
  });
};


export async function getPageData<T>(slugArray: string[]): Promise<PageData<T>> {
  const slug = slugArrayToString(slugArray);
  const pathWithoutExtension = path.join(POSTS_DIR, slug);
  const pathExists = fs.existsSync(pathWithoutExtension);
  if (pathExists && fs.statSync(pathWithoutExtension).isDirectory()) {
    const data = getSortedPageData<T>(slug);
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


function getBlogPost<T>(path: fs.PathLike): {content: string, data: T} {
  const rawFileSource = fs.readFileSync(path);
  const {content, data} = matter(rawFileSource);
  return {
    content,
    data: {
      ...data as T,
      slug: path.toLocaleString().replace(POSTS_DIR, ''),
    },
  };
}


function getBlogPostMetadata<T>(path: fs.PathLike): T {
  const rawFileSource = fs.readFileSync(path);
  const {data} = matter(rawFileSource);
  return {
    ...data as T,
  };
}


function slugStringToArray(slugPath: path.ParsedPath) {
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


