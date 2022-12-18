import {GetStaticPaths, GetStaticProps} from 'next';
import {useRouter} from 'next/router';
import {serialize} from 'next-mdx-remote/serialize';
import {MDXRemoteSerializeResult} from 'next-mdx-remote';
import seoConfig from '@app/utils/seo.config';
// import {NextSeo} from 'next-seo';
// import {buildImageUrl} from 'cloudinary-build-url';
import BlogLayout from '@app/components/mdx/BlogLayout';
import BlogListLayout from '@app/components/mdx/BlogListLayout';
import BlogListLayoutArr from '@app/components/mdx/BlogListLayoutArr';
import {
  MdxFilesystem,
  DirectoryTree,
  DirectoryData,
  MdxMetadata,
} from 'next-mdx-filesystem';
const mdxFilesystem = new MdxFilesystem<BlogArticleMetaData>();

export type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;

export interface BlogArticleMetaData {
  slug: string,
  title: string,
  date: string,
  shortDescription?: string,
  longDescription?: string,
  readTime?: number,
  tags?: string[],
  cloudinaryImgPath?: string,
  imgWidth?: number,
  imgHeight?: number,
  imgAlt?: string,
}

type PostProps = {
  isDirectory: boolean;
  directory?: DirectoryTree<BlogArticleMetaData> | DirectoryData<BlogArticleMetaData>[],
  mdxFile?: {
    content: MDXRemoteSerializeResult,
    metadata: Expand<MdxMetadata<BlogArticleMetaData>>,
  }
}

export default function PostsPage({
  isDirectory,
  directory,
  mdxFile,
}: PostProps) {
  const router = useRouter();
  const currentRoute = router.asPath;

  if (isDirectory && directory) {
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
  } else if (mdxFile) {
    return (
      <BlogLayout
        content={mdxFile.content}
        url={`${seoConfig.openGraph.url}${currentRoute}`}
        metadata={mdxFile.metadata}
      />
    );
  }
};

export const getStaticPaths: GetStaticPaths = (params) => {
  const slugs = mdxFilesystem.getSlugs();
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
  const {isDirectory, directory, mdxFile} =
    await mdxFilesystem.getPageData({
      slugArray,
      dirOptions: {
        returnType: 'array',
        shallow: false,
        reSortArray: true,
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
    const mdxSource = await serialize(mdxFile?.content ? mdxFile.content : '');
    const metadata = mdxFile?.metadata || null;
    return {
      props: {
        isDirectory,
        mdxFile: {
          content: mdxSource,
          metadata,
        },
      },
    };
  }
};
