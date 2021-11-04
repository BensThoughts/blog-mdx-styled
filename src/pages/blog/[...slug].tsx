import {GetStaticPaths, GetStaticProps} from 'next';
import {serialize} from 'next-mdx-remote/serialize';
import {MDXRemoteSerializeResult} from 'next-mdx-remote';
// import {NextSeo} from 'next-seo';
// import {buildImageUrl} from 'cloudinary-build-url';
import BlogLayout from '@app/components/mdx/BlogLayout';
import BlogListLayout from '@app/components/mdx/BlogListLayout';
import {getAllSlugs, getPageData, getSortedPostsData, SortedPostData} from '@app/utils/blogPosts';

type PostProps = {
  directory: boolean;
  directoryData: {
    sortedPostsData: SortedPostData[]
    directorySlug: string[],
  }
  url: string;
  content?: MDXRemoteSerializeResult;
  metaData?: {
    title: string,
    shortDescription: string,
    longDescription: string,
    date: string,
    readTime: number,
    tags: string[],
    cloudinaryImgPath: string,
    imgWidth: number,
    imgHeight: number,
    imgAlt: string,
  };
}

export default function PostsPage({
  directory,
  directoryData,
  content,
  url,
  metaData,
}: PostProps) {
  if (directory) {
    return <BlogListLayout
      sortedPostsData={directoryData.sortedPostsData}
      directorySlug={directoryData.directorySlug}
    />;
  } else if (content && url && metaData) {
    return (
      <BlogLayout
        content={content}
        url={url}
        metaData={metaData}
      />
    );
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  const pages = getAllSlugs();
  // const paths = pages.map((page) => page.params.slug);
  return {
    paths: pages,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({params}) => {
  const slug = params?.slug;
  const {directory, content, url, metaData} = await getPageData(slug as string[]);

  if (directory) {
    const allPostsData = getSortedPostsData(slug as string[]);

    return {
      props: {
        directory,
        directoryData: {
          directorySlug: slug,
          sortedPostsData: allPostsData,
        },
      },
    };
  } else {
    const mdxSource = await serialize(content ? content : '');

    return {
      props: {
        directory,
        content: mdxSource,
        url: url,
        metaData: metaData,
      },
    };
  }
}
;
