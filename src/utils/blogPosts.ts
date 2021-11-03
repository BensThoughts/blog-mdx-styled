import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import seoConfig from './seo.config';

const postsDirectory = path.join(process.cwd(), 'src', 'posts-mdx', path.sep);
const excludedProdDirs: string[] = ['drafts'];

type SlugPath = string[];

function getSlugPaths({
  cwd,
  pathList,
  basePath,
}: {
  cwd: string,
  basePath: string,
  pathList: SlugPath[],
}): SlugPath[] {
  const dirents = fs.readdirSync(cwd, {withFileTypes: true});
  pathList = pathList || [];

  const excludedRoutes = process.env.NODE_ENV === 'production' ? excludedProdDirs : [];

  dirents.forEach((dirent) => {
    if (dirent.isDirectory() && !excludedRoutes.includes(dirent.name)) {
      pathList = getSlugPaths({
        cwd: path.join(cwd, dirent.name),
        pathList,
        basePath,
      });
    } else if (!dirent.isDirectory()) {
      const extendedPath = path.join(
          cwd.replace(basePath, ''),
          dirent.name
      );
      const slugPath = getSlugPath(path.parse(extendedPath));
      pathList.push(slugPath);
    };
  });
  return pathList;
};

function getSlugPath(absPath: path.ParsedPath) {
  if (absPath.dir === '') {
    return [absPath.name];
  } else {
    return [...absPath.dir.split(path.sep), absPath.name];
  }
}

export function getSortedPostsData() {
  const slugPaths = getSlugPaths({
    basePath: postsDirectory,
    cwd: postsDirectory,
    pathList: [],
  });
  const allPostsData = slugPaths.map((slugPath) => {
    const fullPath = path.join(postsDirectory, ...slugPath) + '.mdx';
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    const parsedPath = path.parse(path.join(...slugPath));
    const slug = path.join(parsedPath.dir, parsedPath.name);

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
  const slugPaths = getSlugPaths({
    basePath: postsDirectory,
    cwd: postsDirectory,
    pathList: [],
  });
  return slugPaths.map((slugPath) => {
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
  const slug = path.join(...slugPath);
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const rawFileSource = fs.readFileSync(fullPath);
  const {content, data} = matter(rawFileSource);
  return {
    content: content,
    metaData: data,
    url: buildUrl(slug),
  };
}
