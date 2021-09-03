import { GetStaticPaths, GetStaticProps } from 'next';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
// import Image from 'next/image';
import Head from 'next/head';
import styled from '@emotion/styled';
import { NextSeo } from 'next-seo';

import {
  A,
  Blockquote,
  Hr,
  Code,
  Date,
  H1,
  H2,
  HeaderImage,
  P
} from '@app/components/mdx/';

import CommandLine from '@app/components/CommandLine';

import { getAllPostIds, getPostData } from '@app/utils/blogPosts';

import MaxWidthWrapper from '@app/components/MaxWidthWrapper';
import ArticleWrapper from '@app/components/ArticleWrapper';

// const GridContainer = styled.div`
//   display: grid;
//   gap: 16px;
//   grid-template-columns: minmax(0, 1fr);
//   align-items: center;
//   max-width: 100%;
// `;

const components = {
  a: A,
  code: Code,
  blockquote: Blockquote,
  hr: Hr,
  date: Date,
  h1: H1,
  h2: H2,
  p: P,
  CommandLine,
  HeaderImage,
  // Image
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
        title={ogTitle}
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
        <ArticleWrapper>
          <div className="w-full max-w-4xl m-auto">
            <H1 className=" md:my-3">
              {title}
            </H1>
            <div className="mt-3 mb-4 flex flex-row justify-between md:flex-col">
              <Date dateString={date} />
              <p className="italic font-light">
                Read time: {readTime} min.
              </p>
            </div>
          </div>
          <MDXRemote {...content} components={components} />
        </ArticleWrapper>
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
