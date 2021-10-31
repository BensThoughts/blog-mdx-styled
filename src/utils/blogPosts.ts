import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import seoConfig from './seo.config';

const postsDirectory = path.join(process.cwd(), 'src/posts-mdx');

function getFileNames() {
  if (process.env.NODE_ENV === 'production') {
    return fs.readdirSync(postsDirectory).filter(((fileName) => !fileName.startsWith('_')));
  }
  return fs.readdirSync(postsDirectory);
}

export function getSortedPostsData() {
  const fileNames = getFileNames();
  const allPostsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, '');
    const fullPath = path.join(postsDirectory, fileName);

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
  const fileNames = getFileNames();

  return fileNames.map((fileName: string) => {
    return {
      params: {
        slug: fileName.replace(/\.mdx$/, ''),
      },
    };
  });
};

function buildUrl(id: string) {
  return `${seoConfig.openGraph.url}/blog/${id}`;
}

export async function getPostData(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const rawFileSource = fs.readFileSync(fullPath);
  const {content, data} = matter(rawFileSource);
  return {
    content: content,
    metaData: data,
    url: buildUrl(slug),
  };
}
