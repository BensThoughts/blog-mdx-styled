import {GetStaticPaths, GetStaticProps} from 'next';
import {useRouter} from 'next/router';
import {serialize} from 'next-mdx-remote/serialize';
import {MDXRemoteSerializeResult} from 'next-mdx-remote';
// import {NextSeo} from 'next-seo';
// import {buildImageUrl} from 'cloudinary-build-url';
import BlogLayout from '@app/components/mdx/BlogLayout';
import BlogListLayout from '@app/components/mdx/BlogListLayout';
import {
  getAllPages,
  getPageData,
  // SortedPostData,
} from '@app/utils/blogPosts';
import seoConfig from '@app/utils/seo.config';

export type BlogArticleMetaData = {
  slug: string,
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
}

type PostProps = {
  directory: boolean;
  content?: MDXRemoteSerializeResult,
  metadata?: BlogArticleMetaData[],
}

export default function PostsPage({
  directory,
  content,
  metadata,
}: PostProps) {
  const router = useRouter();
  const currentRoute = router.asPath;

  if (!metadata) {
    return null;
  }

  if (directory) {
    return <BlogListLayout
      metadata={metadata}
      directorySlug={currentRoute.split('/')}
    />;
  } else {
    return (
      <>
        {content && <BlogLayout
          content={content}
          url={`${seoConfig.openGraph.url}${currentRoute}`}
          metadata={metadata[0]}
        />}
      </>
    );
  }
};

export const getStaticPaths: GetStaticPaths = async (params) => {
  const pages = getAllPages();
  return {
    paths: pages,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({params}) => {
  if (!params) {
    throw new Error(`No params in getStaticProps: ${params}`);
  }

  if (!params.slug) {
    throw new Error(`No slug on params object: ${params.slug}`);
  }

  const slug = params.slug as string[];
  const {directory, content, metadata} = await getPageData(slug);

  if (directory) {
    return {
      props: {
        directory,
        metadata,
      },
    };
  } else {
    const mdxSource = await serialize(content ? content : '');
    return {
      props: {
        directory,
        content: mdxSource,
        metadata,
      },
    };
  }
}
;
