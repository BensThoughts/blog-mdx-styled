import type {GetStaticProps} from 'next';

import {getSortedPostsData, SortedPostData} from '@app/utils/blogPosts';
import BlogListLayout from '@app/components/mdx/BlogListLayout';

export const getStaticProps: GetStaticProps = async () => {
  const sortedPostsData = getSortedPostsData();
  return {
    props: {
      sortedPostsData,
    },
  };
};
interface BlogArticleListProps {
  sortedPostsData: SortedPostData[]
}

export default function BlogArticleListPage({sortedPostsData}: BlogArticleListProps) {
  return (
    <BlogListLayout
      sortedPostsData={sortedPostsData}
    />
  );
};
