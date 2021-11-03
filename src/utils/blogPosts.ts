import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import seoConfig from './seo.config';

const postsDirectory = path.join(process.cwd(), 'src/posts-mdx');
const excludedProdRoutes: string[] = ['drafts'];

type RoutePath = string[]

function getRoutePaths(
    dir: string,
    pathList: RoutePath[],
    basePath: string,
    extPath: string | undefined
): RoutePath[] {
  const dirents = fs.readdirSync(dir, {withFileTypes: true});
  pathList = pathList || [];

  const excludedRoutes = process.env.NODE_ENV === 'production' ? excludedProdRoutes : [];

  dirents.forEach((dirent) => {
    if (dirent.isDirectory() && !excludedRoutes.includes(dirent.name)) {
      pathList = getRoutePaths(basePath + '/' + dirent.name + '/', pathList, basePath, dirent.name);
    } else if (!dirent.isDirectory()) {
      if (extPath) {
        pathList.push([extPath, dirent.name]);
      } else {
        pathList.push([dirent.name]);
      }
    };
  });

  return pathList;
};

export function getSortedPostsData() {
  const routePaths = getRoutePaths(postsDirectory, [], postsDirectory, undefined);
  const allPostsData = routePaths.map((routePath) => {
    const slug = routePath.join('/').replace(/\.mdx$/, '');
    const fullPath = path.join(postsDirectory, ...routePath);

    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);

    return {
      slug,
      ...(matterResult.data as {
        date: string,
        title: string,
        longDescription: string,
        tags: string[],
      }),
    };
  });

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostSlugs() {
  const routePaths = getRoutePaths(postsDirectory, [], postsDirectory, undefined);

  return routePaths.map((routePath) => {
    const endOfRoute = routePath.length - 1;
    routePath[endOfRoute] = routePath[endOfRoute].replace(/\.mdx$/, '');
    return {
      params: {
        slug: routePath,
      },
    };
  });
};

function buildUrl(slug: string) {
  return `${seoConfig.openGraph.url}/blog/${slug}`;
}

export async function getPostData(routePath: string[]) {
  const slug = routePath.join('/');
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const rawFileSource = fs.readFileSync(fullPath);
  const {content, data} = matter(rawFileSource);
  return {
    content: content,
    metaData: data,
    url: buildUrl(slug),
  };
}
