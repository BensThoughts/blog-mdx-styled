import type {GetStaticProps} from 'next';
import BlogListLayout from '@app/components/mdx/BlogListLayout';
import {BlogArticleMetaData} from './[...slug]';
import BlogListLayoutArr from '@app/components/mdx/BlogListLayoutArr';

import {MdxFilesystem, DirectoryTree, DirectoryData} from 'next-mdx-filesystem';
const mdxFilesystem = new MdxFilesystem<BlogArticleMetaData>();

export const getStaticProps: GetStaticProps = async () => {
  const {directory} = await mdxFilesystem.getPageData({dirOptions: {returnType: 'array'}});

  return {
    props: {
      directory,
    },
  };
};

interface BlogArticleListProps {
  directory: DirectoryTree<BlogArticleMetaData> | DirectoryData<BlogArticleMetaData>[];
}

export default function BlogArticleListPage({directory}: BlogArticleListProps) {
  if (Array.isArray(directory)) {
    return (
      <BlogListLayoutArr
        dirArr={directory}
      />
    );
  } else {
    return (
      <BlogListLayout
        dirTree={directory}
      />
    );
  }
};
