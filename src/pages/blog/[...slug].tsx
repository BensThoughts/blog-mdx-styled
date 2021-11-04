import {GetStaticPaths, GetStaticProps} from 'next';
import {serialize} from 'next-mdx-remote/serialize';
import {MDXRemoteSerializeResult} from 'next-mdx-remote';
// import {NextSeo} from 'next-seo';
// import {buildImageUrl} from 'cloudinary-build-url';
import BlogLayout from '@app/components/mdx/BlogLayout';
import BlogListLayout from '@app/components/mdx/BlogListLayout';
import {getAllPostSlugs, getPostData, getSortedPostsData} from '@app/utils/blogPosts';

type PostProps = {
  directory: boolean;
  directoryData: {
    allPostsData: {
      slug: string,
      title: string,
      longDescription: string,
      date: string,
      tags: string[]
    }[]
  };
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
      allPostsData={directoryData.allPostsData}
    />;
  } else if (content && url && metaData) {
    // const {
    //   title,
    //   shortDescription,
    //   longDescription,
    //   date,
    //   readTime,
    //   tags,
    //   cloudinaryImgPath,
    //   imgWidth,
    //   imgHeight,
    //   imgAlt,
    // } = metaData;

    // let ogImageUrl;
    // if (cloudinaryImgPath) {
    //   ogImageUrl = buildImageUrl(cloudinaryImgPath, {
    //     cloud: {
    //       cloudName: 'bensthoughts',
    //     },
    //   });
    // }

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
  const pages = getAllPostSlugs();
  // const paths = pages.map((page) => page.params.slug);
  return {
    paths: pages,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({params}) => {
  const {directory, content, url, metaData} = await getPostData(params?.slug as string[]);

  if (directory) {
    const allPostsData = getSortedPostsData(params?.slug as string[]);

    return {
      props: {
        directory,
        directoryData: {
          allPostsData,
        },
      },
    };
  } else {
    const mdxSource = await serialize(content);

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
