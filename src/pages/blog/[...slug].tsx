import {GetStaticPaths, GetStaticProps} from 'next';
import {useRouter} from 'next/router';
import {serialize} from 'next-mdx-remote/serialize';
import {MDXRemoteSerializeResult} from 'next-mdx-remote';
// import {NextSeo} from 'next-seo';
// import {buildImageUrl} from 'cloudinary-build-url';
import BlogLayout from '@app/components/mdx/BlogLayout';
import BlogListLayout from '@app/components/mdx/BlogListLayout';
import BlogListLayoutArr from '@app/components/mdx/BlogListLayoutArr';
import {
  getSlugs,
  Recussion,
  DirectoryTree,
  DirectoryData,
  // SortedPostData,
} from '@app/utils/blogPosts';
import seoConfig from '@app/utils/seo.config';

export type BlogArticleMetaData = {
  slug: string,
  date: string,

  // slug: string,
  title: string,
  shortDescription: string,
  longDescription: string,
  // date: string,
  readTime: number,
  tags: string[],
  cloudinaryImgPath: string,
  imgWidth: number,
  imgHeight: number,
  imgAlt: string,
}

type PostProps = {
  isDirectory: boolean;
  directory?: {
    data: DirectoryTree<BlogArticleMetaData> | DirectoryData<BlogArticleMetaData>[],
  }
  article?: {
    content: MDXRemoteSerializeResult,
    metadata: BlogArticleMetaData,
  }

}

export default function PostsPage({
  isDirectory,
  directory,
  article,
}: PostProps) {
  const router = useRouter();
  const currentRoute = router.asPath;

  if (isDirectory && directory) {
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
  } else if (article) {
    return (
      <BlogLayout
        content={article.content}
        url={`${seoConfig.openGraph.url}${currentRoute}`}
        metadata={article.metadata}
      />
    );
  }
};

export const getStaticPaths: GetStaticPaths = async (params) => {
  const slugs = getSlugs();
  return {
    paths: slugs,
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

  const slugArray = params.slug as string[];
  const {isDirectory, directory, article} =
    await new Recussion<BlogArticleMetaData>().getPageData({
      slugArray: slugArray,
      options: {
        dirReturnType: 'tree',
        shallow: false,
      },
    });

  if (isDirectory) {
    return {
      props: {
        isDirectory,
        directory,
      },
    };
  } else {
    const mdxSource = await serialize(article?.content ? article.content : '');
    return {
      props: {
        isDirectory,
        article: {
          content: mdxSource,
          metadata: article?.metadata,
        },
      },
    };
  }
};
