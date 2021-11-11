import type {GetStaticProps} from 'next';

import {getAllSortedDirectoryData, DirectoryTree} from '@app/utils/blogPosts';
import BlogListLayout from '@app/components/mdx/BlogListLayout';
import {BlogArticleMetaData} from './[...slug]';

export const getStaticProps: GetStaticProps = async () => {
  const dirData = getAllSortedDirectoryData<BlogArticleMetaData>();
  return {
    props: {
      dirTree: dirData,
    },
  };
};

interface BlogArticleListProps {
  dirTree: DirectoryTree<BlogArticleMetaData>
}

export default function BlogArticleListPage({dirTree}: BlogArticleListProps) {
  return (
    <BlogListLayout
      dirData={dirTree}
    />
  );
};
