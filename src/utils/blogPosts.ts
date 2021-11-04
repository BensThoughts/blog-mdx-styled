import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import seoConfig from './seo.config';

const postsDirectory = path.join(process.cwd(), 'src', 'posts-mdx', path.sep);
const excludedProdDirs: string[] = ['drafts'];

type SlugPath = string[];

type BlogPage = {
  slugPath: SlugPath,
  directory: boolean,
}

function getBlogPages({
  cwd,
  blogPages,
  basePath,
}: {
  cwd: string,
  basePath: string,
  blogPages: BlogPage[],
}): BlogPage[] {
  const dirents = fs.readdirSync(cwd, {withFileTypes: true});
  blogPages = blogPages || [];

  const excludedRoutes = process.env.NODE_ENV === 'production' ? excludedProdDirs : [];

  dirents.forEach((dirent) => {
    // const extendedPath = extendedPath2 ? path.join(cwd.replace(basePath, ''), extendedPath2, dirent.name) : path.join(cwd.replace(basePath, ''), dirent.name);
    const extendedPath = path.join(
        cwd.replace(basePath, ''),
        dirent.name
    );
    const slugPath = getSlugPath(path.parse(extendedPath));
    if (dirent.isDirectory() && !excludedRoutes.includes(dirent.name)) {
      blogPages.push({
        slugPath: slugPath,
        directory: true,
      });
      blogPages = getBlogPages({
        cwd: path.join(cwd, dirent.name),
        blogPages,
        basePath,
      });
    } else if (!dirent.isDirectory()) {
      blogPages.push({
        slugPath: slugPath,
        directory: false,
      });
    };
  });
  return blogPages;
};

function getSlugPath(absPath: path.ParsedPath) {
  if (absPath.dir === '') {
    return [absPath.name];
  } else {
    return [...absPath.dir.split(path.sep), absPath.name];
  }
}

export type SortedPostData = {
  slug: string,
  directory: boolean,
  date?: string,
  title?: string,
  longDescription?: string,
  tags?: string[]
}

export function getSortedPostsData(searchSlug?: string[]): SortedPostData[] {
  const searchDir = searchSlug ? path.join(postsDirectory, ...searchSlug) : postsDirectory;
  const blogPages = getBlogPages({
    basePath: searchDir,
    cwd: searchDir,
    blogPages: [],
  });
  const allPostsData = blogPages
      .filter(({directory}) => !directory)
      .map(({slugPath, directory}) => {
        const parsedPath = path.parse(path.join(...slugPath));
        const slug = searchSlug ? path.join(...searchSlug, parsedPath.dir, parsedPath.name) : path.join(parsedPath.dir, parsedPath.name);
        // const slug = path.join(parsedPath.dir, parsedPath.name);

        // TODO: use of !
        const fullPath = path.join(searchDir!, ...slugPath) + '.mdx';
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const matterResult = matter(fileContents);

        return {
          slug,
          directory: directory,
          ...(matterResult.data as {
          date: string,
          title: string,
          longDescription: string,
          tags: string[],
        }),
        };
      });

  if (allPostsData) {
    return allPostsData.sort((a, b) => {
      if (a.date < b.date) {
        return 1;
      } else {
        return -1;
      }
    });
  } else {
    return [];
  }
}

export function getAllPostSlugs() {
  const blogPages = getBlogPages({
    basePath: postsDirectory,
    cwd: postsDirectory,
    blogPages: [],
  });
  return blogPages.map(({slugPath, directory}) => {
    const fullPath = path.parse(path.join(...slugPath));
    return {
      params: {
        slug: getSlugPath(fullPath),
      },
    };
  });
};

function buildUrl(slug: string) {
  return `${seoConfig.openGraph.url}/blog/${slug}`;
}

export async function getPostData(slugPath: string[]) {
  const pathWithoutExtension = path.join(postsDirectory, ...slugPath);
  const pathExists = fs.existsSync(pathWithoutExtension);
  if (pathExists && fs.statSync(pathWithoutExtension).isDirectory()) {
    return {
      directory: true,
      url: buildUrl(pathWithoutExtension),
      content: '',
      metaData: {
        dir: '',
      },
    };
  } else {
    const fullPath = `${pathWithoutExtension}.mdx`;
    const rawFileSource = fs.readFileSync(fullPath, {});
    const {content, data} = matter(rawFileSource);
    return {
      directory: false,
      content: content,
      metaData: data,
      url: buildUrl(pathWithoutExtension),
    };
  }
}


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


