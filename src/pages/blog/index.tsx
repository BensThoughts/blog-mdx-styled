import type {GetStaticProps} from 'next';

import {getSortedPostsData} from '@app/utils/blogPosts';
import BlogListLayout from '@app/components/mdx/BlogListLayout';

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
interface BlogArticleListProps {
  allPostsData: {
    slug: string,
    title: string,
    longDescription: string,
    date: string,
    tags: string[]
    children?: React.ReactNode
  }[]
}

export default function BlogArticleListPage({allPostsData}: BlogArticleListProps) {
  return (
    <BlogListLayout
      allPostsData={allPostsData}
    />
  );
};
