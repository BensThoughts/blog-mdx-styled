export {};
// import fs from 'fs';
// import path from 'path';
// import matter from 'gray-matter';
// import config from '../../mdx-filesystem';
// import yaml from 'js-yaml';
// const POSTS_DIR = config.postsDirectory as string;
// const EXCLUDED_DIRS = config.excludedProdDirs as string[];
// const DIR_INDEX_FILE = 'index.yaml';

// type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;
// // type ExpandRecursively<T> = T extends object
// //   ? T extends infer O ? { [K in keyof O]: ExpandRecursively<O[K]> } : never
// //   : T;

// /**
//  * Functions to get a directory listing or a single mdx article
//  */

// export type DirectoryTree<T> = DirectoryData<T> & {
//   directories: DirectoryTree<T>[];
// }

// export interface DirectoryData<T> {
//     dirName: string;
//     dirMtimeDate: string;
//     dirMetadata: {
//       title: string;
//       date: string;
//       slug: string;
//       description: string | null;
//     }
//     mdxArticles: MdxArticleData<T>[]
//   }


// export interface MdxArticleData<T> {
//   fileName: string;
//   mtimeDate: string;
//   content?: string;
//   metadata: {
//     title: string;
//     date: string;
//     slug: string;
//   } & T;
// }

// export interface PageData<T, R extends 'tree' | 'array' = 'tree'> {
//   isDirectory: boolean;
//   directory?: {
//     data: R extends 'tree' ? DirectoryTree<T> : DirectoryData<T>[];
//   },
//   article?: MdxArticleData<T>;
// }

// export class Recussion<T> {
//   async getPageData<R extends 'tree' | 'array' = 'tree'>(args?: {
//     slugArray?: string[],
//     options?: {
//       dirReturnType?: R,
//       shallow?: boolean,
//       reSortArray?: boolean,
//     },
//   }): Promise<Expand<PageData<T, R>>> {
//     const dirReturnType = args?.options?.dirReturnType || 'tree';
//     const shallow = args?.options?.shallow ? args.options.shallow : false;
//     const reSortArray = args?.options?.reSortArray ? args.options.reSortArray : true;


//     const slug = args?.slugArray ? slugArrayToString(args.slugArray) : '';
//     const cwd = path.join(POSTS_DIR, slug);

//     const pathWithoutExtension = path.join(POSTS_DIR, slug);
//     const pathExists = fs.existsSync(pathWithoutExtension);
//     if (pathExists && fs.statSync(pathWithoutExtension).isDirectory()) {
//       if (dirReturnType === 'tree') {
//         return {
//           isDirectory: true,
//           directory: {
//             data: getDirectoryTree<T>(cwd, shallow),
//           },
//         } as any;
//       } else {
//         return {
//           isDirectory: true,
//           directory: {
//             data: getDirectoryArray<T>(cwd, shallow, reSortArray),
//           },
//         } as any;
//       }
//     } else {
//       const pathWithExtension = `${pathWithoutExtension}.mdx`;
//       const mdxPathExists = fs.existsSync(pathWithExtension);
//       if (mdxPathExists && fs.statSync(pathWithExtension).isFile()) {
//         const mdxData = getBlogPostData<T>(pathWithExtension, true);
//         return {
//           isDirectory: false,
//           article: mdxData,
//         };
//       } else {
//         throw new Error(`Error in getPageData, slugPath gave neither a valid directory or a valid *.mdx file: ${slug}`);
//       }
//     }
//   }
// }

// function getDirectoryTreeNode<T>(cwd: string): DirectoryTree<T> {
//   const dirData: DirectoryTree<T> = {
//     dirName: getFileName(cwd),
//     dirMtimeDate: getFileModifiedDate(cwd),
//     dirMetadata: getDirectoryMetadata(cwd),
//     mdxArticles: [],
//     directories: [],
//   };
//   try {
//     const dirents = fs.readdirSync(cwd, {withFileTypes: true});
//     dirents.forEach((dirent) => {
//       const {
//         isMdx,
//         isDirectory,
//         isExcludedPath,
//         fullPath,
//         slugPath,
//       } = getDirentData(cwd, dirent);

//       if (isDirectory && !isExcludedPath) {
//         const {
//           title,
//           date,
//           description,
//         } = getDirectoryMetadata(fullPath);
//         const dirMtimeDate = getFileModifiedDate(fullPath);
//         dirData.directories.push({
//           dirName: getFileName(fullPath),
//           dirMtimeDate,
//           dirMetadata: {
//             title,
//             date,
//             slug: slugPath,
//             description,
//           },
//           directories: [],
//           mdxArticles: [],
//         });
//       } else if (!isDirectory && isMdx) {
//         const mdxArticleData = getBlogPostData<T>(fullPath, false);
//         dirData.mdxArticles.push(mdxArticleData);
//       };
//     });
//   } catch (e) {
//     console.error(`There was an error reading from ${cwd}: ${e}`);
//   }

//   dirData.directories.sort((a, b) => (a.dirMetadata.title < b.dirMetadata.title) ? 1 : -1);
//   dirData.mdxArticles.sort((a, b) => (a.metadata.date < b.metadata.date) ? 1 : -1);

//   return dirData;
// }


// function getDirectoryTree<T>(
//     cwd?: string,
//     shallow = false,
//     directoryData?: DirectoryTree<T>,
// ): DirectoryTree<T> {
//   cwd = cwd || POSTS_DIR;
//   directoryData = directoryData || {
//     dirName: getFileName(cwd),
//     dirMtimeDate: getFileModifiedDate(cwd),
//     dirMetadata: getDirectoryMetadata(cwd),
//     directories: [],
//     mdxArticles: [],
//   };
//   const newDirectoryData = getDirectoryTreeNode<T>(cwd);
//   directoryData.directories.push(...newDirectoryData.directories);
//   directoryData.mdxArticles.push(...newDirectoryData.mdxArticles);
//   if (!shallow) {
//     directoryData.directories.forEach((directory) => {
//       const newCwd = path.join(POSTS_DIR, directory.dirMetadata.slug);
//       getDirectoryTree(newCwd, shallow, directory);
//     });
//   }
//   return directoryData;
// }

// /**
//  * Directory Array functions to turn Directory Tree into an array
//  */

// function getDirectoryArray<T>(cwd?: string, shallow = false, reSortArr = true) {
//   cwd = cwd || POSTS_DIR;
//   const dirTree = getDirectoryTree<T>(cwd, shallow);
//   const dirArr = getDirectoryArrayFromTree<T>(dirTree);
//   if (reSortArr) {
//     return dirArr.sort((a, b) => (a.dirMetadata.title > b.dirMetadata.title) ? 1 : -1);
//   } else {
//     return dirArr;
//   }
// }


// function getDirectoryArrayFromTree<T>(
//     dirTree: DirectoryTree<T>,
//     dirArray?: DirectoryData<T>[]
// ): DirectoryData<T>[] {
//   const {dirName, dirMtimeDate, dirMetadata, directories, mdxArticles} = dirTree;
//   dirArray = dirArray || [];
//   dirArray.push(
//       {
//         dirName,
//         dirMtimeDate,
//         dirMetadata,
//         mdxArticles,
//       }
//   );
//   directories.forEach((nextDirTree) => {
//     getDirectoryArrayFromTree(nextDirTree, dirArray);
//   });

//   return dirArray;
// }

// function getBlogPostData<T>(fullPath: string, includeContent: boolean): MdxArticleData<T> {
//   const rawFileSource = fs.readFileSync(fullPath);
//   const slug = getFileSlug(fullPath);
//   const mtimeDate = getFileModifiedDate(fullPath);
//   const fileName = getFileName(fullPath);
//   const {content, data} = matter(rawFileSource);
//   let {date, title} = data;
//   date = date || mtimeDate;
//   title = title || fileName;

//   if (includeContent) {
//     return {
//       fileName,
//       mtimeDate,
//       metadata: {
//         ...data as T,
//         date,
//         title,
//         slug,
//       },
//       content,
//     };
//   } else {
//     return {
//       fileName,
//       mtimeDate,
//       metadata: {
//         ...data as T,
//         date,
//         title,
//         slug,
//       },
//     };
//   }
// }

// function getDirectoryMetadata(fullPath: string) {
//   const dirName = path.basename(fullPath);
//   const indexPath = path.join(fullPath, DIR_INDEX_FILE);
//   const indexExists = fs.existsSync(indexPath);
//   if (!indexExists) {
//     return {
//       title: dirName,
//       date: getFileModifiedDate(fullPath),
//       slug: getFileSlug(fullPath),
//       description: null,
//     };
//   } else {
//     const indexYaml = fs.readFileSync(indexPath, 'utf8');
//     const parsedYaml = yaml.load(indexYaml) as {
//       title: string,
//       date: string,
//       description: string,
//     };
//     return {
//       title: parsedYaml.title ? parsedYaml.title : dirName,
//       date: parsedYaml.date ? parsedYaml.date : getFileModifiedDate(fullPath),
//       slug: getFileSlug(fullPath),
//       description: parsedYaml.description ? parsedYaml.description : null,
//     };
//   }
// }


// /**
//  * Functions to get all slugs recursively
//  */

// type SlugData = {
//   directories: Expand<StaticPath>[],
//   mdxArticles: Expand<StaticPath>[],
// }

// type StaticPath = {
//   params: {
//     slug: string[]
//   }
// }

// function getSlugsInDir(cwd: string): SlugData {
//   const slugData: SlugData = {
//     directories: [],
//     mdxArticles: [],
//   };
//   const dirents = fs.readdirSync(cwd, {withFileTypes: true});
//   dirents.forEach((dirent) => {
//     const {
//       isDirectory,
//       isMdx,
//       isExcludedPath,
//       slugPath,
//     } = getDirentData(cwd, dirent);

//     if (!isDirectory && isMdx) {
//       slugData.mdxArticles.push({
//         params: {
//           slug: slugStringToArray(slugPath),
//         },
//       });
//     } else if (isDirectory && !isExcludedPath) {
//       slugData.directories.push({
//         params: {
//           slug: slugStringToArray(slugPath),
//         },
//       });
//     };
//   });

//   return slugData;
// }

// function getAllSlugs({
//   cwd,
//   slugData,
// }: {
//   cwd: string;
//   slugData: SlugData;
// }): SlugData {
//   const {directories, mdxArticles} = getSlugsInDir(cwd);
//   slugData.directories.push(...directories);
//   slugData.mdxArticles.push(...mdxArticles);
//   directories.forEach(({params: {slug}}) => {
//     const nextDir = path.parse(slugArrayToString(slug));
//     const nextCwd = path.join(cwd, nextDir.name);
//     slugData = getAllSlugs({
//       cwd: nextCwd,
//       slugData,
//     });
//   });

//   return slugData;
// };

// /**
//  * *Exported Function
//  * Get all of the slugs in POSTS_DIR recursively all
//  * the way down the file system tree.
//  * @returns {params: {slug: string[]}}[]
//  */

// export function getSlugs(): Expand<StaticPath>[] {
//   const {directories, mdxArticles} = getAllSlugs({
//     cwd: POSTS_DIR,
//     slugData: {
//       directories: [],
//       mdxArticles: [],
//     },
//   });

//   return [...directories, ...mdxArticles];
// };


// /**
//  * Helper Functions
//  *
// */

// function getFileModifiedDate(path: fs.PathLike) {
//   try {
//     const fullDate = fs.statSync(path).mtime;
//     const date = `${fullDate.getUTCFullYear()}-${fullDate.getUTCMonth() + 1}-${fullDate.getUTCDate()}`;
//     return date;
//   } catch (e) {
//     throw new Error('Error in getFileModifiedDate, failed to access ' + path + ':' + e);
//   }
// }

// function slugStringToArray(slugString: string) {
//   const slugPath = path.parse(slugString);
//   if (slugPath.dir === '') {
//     return [slugPath.name];
//   } else {
//     return [...slugPath.dir.split(path.sep), slugPath.name];
//   }
// }

// function slugArrayToString(slugPath: string[]) {
//   return path.join(...slugPath);
// }

// function getFileSlug(fullPath: string) {
//   return fullPath.replace(POSTS_DIR, '').split(path.sep).join('/').replace('.mdx', '');
// }

// function getFileName(fullPath: string) {
//   return path.basename(fullPath);
// }

// function getDirentData(cwd: string, dirent: fs.Dirent) {
//   const fullPath = path.join(cwd, dirent.name);
//   const slugPath = getFileSlug(fullPath);
//   const isMdx = path.extname(fullPath) === '.mdx';
//   const isDirectory = dirent.isDirectory();
//   const excludedRoutes = process.env.NODE_ENV === 'production' ? EXCLUDED_DIRS : [];
//   const isExcludedPath = excludedRoutes.includes(dirent.name);
//   return {
//     fullPath,
//     slugPath,
//     isMdx,
//     isDirectory,
//     isExcludedPath,
//   };
// }


/**
 * OLD FUNCTIONS
 */

//  export async function getPageData<T>({
//   slugArray,
//   options = {
//     returnType: 'tree',
//     shallow: false,
//     resortArray: true,
//   },
// } : {
//   slugArray?: string[],
//   options: {
//     returnType?: 'tree' | 'array',
//     shallow?: boolean,
//     resortArray?: boolean,
//   }
// }): Promise<Expand<PageData<T>>> {
//   // const {slugArray, options} = args;
//   const {returnType, shallow, resortArray} = options;
//   const slug = slugArray ? slugArrayToString(slugArray) : '';
//   const cwd = path.join(POSTS_DIR, slug);
//   // const returnFunc = returnType === 'tree' ? getDirectoryTree : getDirectoryArray;

//   const pathWithoutExtension = path.join(POSTS_DIR, slug);
//   const pathExists = fs.existsSync(pathWithoutExtension);
//   if (pathExists && fs.statSync(pathWithoutExtension).isDirectory()) {
//     return {
//       isDirectory: true,
//       directory: {
//         tree: returnType === 'tree' ? getDirectoryTree<T>(cwd, shallow) : null,
//         array: returnType === 'array' ? getDirectoryArray<T>(cwd, shallow, resortArray) : null,
//       },
//     };
//   } else {
//     const pathWithExtension = `${pathWithoutExtension}.mdx`;
//     const mdxPathExists = fs.existsSync(pathWithExtension);
//     if (mdxPathExists && fs.statSync(pathWithExtension).isFile()) {
//       const mdxData = getBlogPostData<T>(pathWithExtension, true);
//       return {
//         isDirectory: false,
//         article: mdxData,
//       };
//     } else {
//       throw new Error(`Error in getPageData, slugPath gave neither a valid directory or a valid *.mdx file: ${slug}`);
//     }
//   }
// }
