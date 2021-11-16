import type {GetStaticProps} from 'next';

import {DirectoryTree, DirectoryData, Recussion} from '@app/utils/blogPosts';
import BlogListLayout from '@app/components/mdx/BlogListLayout';
import {BlogArticleMetaData} from './[...slug]';
import BlogListLayoutArr from '@app/components/mdx/BlogListLayoutArr';

export const getStaticProps: GetStaticProps = async () => {
  const {directory} = await new Recussion<BlogArticleMetaData>().getPageData({options: {dirReturnType: 'array', reSortArray: true, shallow: false}});

  return {
    props: {
      directory,
    },
  };
};

interface BlogArticleListProps {
  directory: {
    data: DirectoryTree<BlogArticleMetaData> | DirectoryData<BlogArticleMetaData>[];
  };
}

export default function BlogArticleListPage({directory}: BlogArticleListProps) {
  const {data} = directory;
  if (Array.isArray(data)) {
    return (
      <BlogListLayoutArr
        dirArr={data}
      />
    );
  } else {
    return (
      <BlogListLayout
        dirTree={data}
      />
    );
  }
};
