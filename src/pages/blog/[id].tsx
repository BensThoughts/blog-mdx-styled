import { GetStaticPaths, GetStaticProps } from 'next';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import Image from 'next/image';
import styled from '@emotion/styled';

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

type PostProps = {
  source: MDXRemoteSerializeResult;
  metaInformation: {
    title: string,
    date: string,
    readTime: number,
    tags: string[]
  };
};

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
  Image
};

export default function PostsPage(props: PostProps) {
  return (
    <MaxWidthWrapper>

      <GridContainer>
        <div className="w-full max-w-4xl m-auto">
          <H1>
            {props.metaInformation.title}
          </H1>
          <div className="flex flex-row justify-between">
            <Date dateString={props.metaInformation.date} />
            <p className="italic">
              Read time: {props.metaInformation.readTime} min.
            </p>
          </div>
        </div>
        <MDXRemote {...props.source} components={components} />
      </GridContainer>
    </MaxWidthWrapper>

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
