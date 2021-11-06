import type {GetStaticProps} from 'next';

import {getSortedPageData} from '@app/utils/blogPosts';
import BlogListLayout from '@app/components/mdx/BlogListLayout';
import {BlogArticleMetaData} from './[...slug]';

export const getStaticProps: GetStaticProps = async () => {
  const sortedPostsData = getSortedPageData();
  return {
    props: {
      sortedPostsData,
    },
  };
};

interface BlogArticleListProps {
  sortedPostsData: {
    isDirectory: boolean,
    date: string,
    slug: string,
    metadata: BlogArticleMetaData
  }[]
}

export default function BlogArticleListPage({sortedPostsData}: BlogArticleListProps) {
  return (
    <BlogListLayout
      data={sortedPostsData}
    />
  );
};
