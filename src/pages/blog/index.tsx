import type {GetStaticProps} from 'next';

import {getSortedDirectoryData} from '@app/utils/blogPosts';
import BlogListLayout from '@app/components/mdx/BlogListLayout';
import {BlogArticleMetaData} from './[...slug]';

export const getStaticProps: GetStaticProps = async () => {
  const {directories, mdxArticles} = getSortedDirectoryData<BlogArticleMetaData>();
  return {
    props: {
      directories,
      mdxArticles,
    },
  };
};

interface BlogArticleListProps {
  directories: {
    slug: string,
    mtimeDate: string,
  }[],
  mdxArticles: {
    slug: string,
    metadata: {
      date: string;
    } & BlogArticleMetaData
  }[]
}

export default function BlogArticleListPage({directories, mdxArticles}: BlogArticleListProps) {
  return (
    <BlogListLayout
      directories={directories}
      mdxArticles={mdxArticles}
    />
  );
};
