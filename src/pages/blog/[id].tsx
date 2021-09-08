import { GetStaticPaths, GetStaticProps } from 'next';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { NextSeo } from 'next-seo';

import {
  A,
  ArticleHeader,
  CommandLine,
  Blockquote,
  Hr,
  Code,
  Date,
  H1,
  H2,
  HeaderImage,
  P
} from '@app/components/mdx/';
import { getAllPostIds, getPostData } from '@app/utils/blogPosts';
import MaxWidthWrapper from '@app/components/MaxWidthWrapper';
import GridWrapper from '@app/components/GridWrapper';

const components = {
  a: A,
  code: Code,
  blockquote: Blockquote,
  hr: Hr,
  date: Date,
  h1: H1,
  h2: H2,
  p: P,
  ArticleHeader,
  CommandLine,
  HeaderImage,
};

type PostProps = {
  content: MDXRemoteSerializeResult;
  url: string;
  metaData: {
    title: string,
    date: string,
    modifiedDate: string,
    readTime: number,
    tags: string[],
    imgPathTiny: string,
    imgPathLarge: string,
    imgWidth: number,
    imgHeight: number,
    imgAlt: string,
    ogTitle: string,
    ogDescription: string,
    ogImageUrl: string,
    ogImageWidth: number,
    ogImageHeight: number,
    ogImageAlt: string,
  };
};

export default function PostsPage({
  content,
  url,
  metaData
}: PostProps) {
  const { 
    title,
    date,
    modifiedDate,
    readTime,
    tags,
    imgPathTiny,
    imgPathLarge,
    imgWidth,
    imgHeight,
    imgAlt,
    ogTitle,
    ogDescription,
    ogImageUrl,
    ogImageWidth,
    ogImageHeight,
    ogImageAlt,
  } = metaData;
  return (
    <>
      <NextSeo 
        title={title}
        description={ogDescription}
        openGraph={{
          title: ogTitle,
          description: ogDescription,
          url: url,
          type: 'article',
          article: {
            publishedTime: date,
            modifiedTime: modifiedDate,
            section: 'Web Development',
            authors: ['https://twitter.com/bensthoughts'],
            tags: tags,
          },
          images: [{
            url: ogImageUrl,
            width: ogImageWidth,
            height: ogImageHeight,
            alt: ogImageAlt
          }],
          site_name: 'BensThoughts Developer Blog'
        }}
        twitter={{
          handle: '@bensthoughts',
          site: '@bensthoughts',
          cardType: 'summary_large_image'
        }}
      />
      <MaxWidthWrapper>
        <GridWrapper>
          <ArticleHeader title={ogTitle} date={date} readTime={readTime} />
          {imgPathLarge && imgWidth && imgHeight && imgAlt ?
            (
              <HeaderImage
                imgPathTiny={imgPathTiny}
                imgPathLarge={imgPathLarge}
                alt={ogImageAlt}
                width={imgWidth}
                height={imgHeight}
                className="mb-3 md:mb-6"
              />
            ) : 
            (
              <></>
            )
          }
          <MDXRemote {...content} components={components} />
        </GridWrapper>
      </MaxWidthWrapper>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { content, url, metaData } = await getPostData(params!.id as string);
  const mdxSource = await serialize(content,{
    mdxOptions: {
      rehypePlugins: [
        require('rehype-code-title')
      ]
    }
  });

  return {
    props: {
      content: mdxSource,
      url: url,
      metaData: metaData,
    }
  };
};
