import { GetStaticPaths, GetStaticProps } from 'next';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
// import Image from 'next/image';
import Head from 'next/head';
import styled from '@emotion/styled';
import { NextSeo } from 'next-seo';

import {
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

const GridContainer = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: minmax(0, 1fr);
  align-items: center;
  max-width: 100%;
`;

const components = {
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
  source: MDXRemoteSerializeResult;
  metaInformation: {
    title: string,
    date: string,
    readTime: number,
    tags: string[],
    ogTitle: string,
    ogDescription: string,
    ogImage: string,
    twitterTitle: string,
    twitterDescription: string,
    twitterImage: string
  };
};

export default function PostsPage({
  source,
  metaInformation
}: PostProps) {
  const { 
    title,
    date,
    readTime,
    tags,
    ogTitle,
    ogDescription,
    ogImage,
    twitterTitle,
    twitterDescription,
    twitterImage
  } = metaInformation;
  return (
    <>
      <NextSeo 
        title={ogTitle}
        description={ogDescription}
        openGraph={{
          title: ogTitle,
          description: ogDescription,
          url: 'https://bensthoughts.netlify.app/blog/google-gke-cleanup',
          type: 'article',
          article: {
            publishedTime: '2017-06-21T23:04:13Z',
            modifiedTime: '2018-01-21T18:04:43Z',
            expirationTime: '2022-12-21T22:04:11Z',
            section: 'Web Development',
            authors: ['https://twitter.com/bensthoughts'],
            tags: tags,
          },
          images: [{
            url: ogImage,
            width: 810,
            height: 456,
            alt: 'Terminal Image'
          }],
          site_name: 'BensThoughts Blog'
        }}
        twitter={{
          handle: '@bensthoughts',
          site: '@bensthoughts',
          cardType: 'summary_large_image'
        }}
      />
      <MaxWidthWrapper>
  
        <GridContainer>
          <div className="w-full max-w-4xl m-auto">
            <H1>
              {title}
            </H1>
            <div className="flex flex-row justify-between">
              <Date dateString={date} />
              <p className="italic">
                Read time: {readTime} min.
              </p>
            </div>
          </div>
          <MDXRemote {...source} components={components} />
        </GridContainer>
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
  const { content, data } = await getPostData(params!.id as string);
  const mdxSource = await serialize(content,{
    mdxOptions: {
      rehypePlugins: [
        require('rehype-code-title')
      ]
    }
  });

  return {
    props: {
      source: mdxSource,
      metaInformation: data
    }
  };
};
