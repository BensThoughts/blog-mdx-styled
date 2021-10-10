import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import seoConfig from './seo.config';

const postsDirectory = path.join(process.cwd(), 'src/posts-mdx');

function getFileNames() {
  if (process.env.NODE_ENV === 'production') {
    return fs.readdirSync(postsDirectory).filter((fileName => !fileName.startsWith('_')));
  }
  return fs.readdirSync(postsDirectory);
}

export function getSortedPostsData() {
  const fileNames = getFileNames();
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.mdx$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);

    return {
      id,
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

export function getAllPostIds() {
  const fileNames = getFileNames();

  return fileNames.map((fileName: string) => {
    return {
      params: {
        id: fileName.replace(/\.mdx$/, ''),
      },
    };
  });
};

function buildUrl(id: string) {
  return `${seoConfig.openGraph.url}/blog/${id}`;
}

export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.mdx`);
  const rawFileSource = fs.readFileSync(fullPath);
  const {content, data} = matter(rawFileSource);
  return {
    content: content,
    metaData: data,
    url: buildUrl(id),
  };
}
