import type {GetStaticProps} from 'next';

import {getAllSortedDirectoryData, getSortedDirectoryArray, DirectoryTree, DirectoryArray} from '@app/utils/blogPosts';
// import BlogListLayout from '@app/components/mdx/BlogListLayout';
import {BlogArticleMetaData} from './[...slug]';
import BlogListLayoutArr from '@app/components/mdx/BlogListLayoutArr';

export const getStaticProps: GetStaticProps = async () => {
  const dirTree = getAllSortedDirectoryData<BlogArticleMetaData>();
  const dirArr = getSortedDirectoryArray<BlogArticleMetaData>();

  return {
    props: {
      dirTree,
      dirArr,
    },
  };
};

interface BlogArticleListProps {
  dirTree: DirectoryTree<BlogArticleMetaData>,
  dirArr: DirectoryArray<BlogArticleMetaData>,
}

export default function BlogArticleListPage({dirTree, dirArr}: BlogArticleListProps) {
  return (
    // <BlogListLayout
    //   dirTree={dirTree}
    // />
    <BlogListLayoutArr
      dirArr={dirArr}
    />
  );
};
