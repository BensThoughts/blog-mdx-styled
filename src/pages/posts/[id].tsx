import { GetStaticPaths, GetStaticProps } from 'next';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

import {
  H1,
  Date
} from '@app/components/mdx/';

// import Blockquote from '@app/components/mdx/Blockquote';


import { getAllPostIds, getPostData } from '../../utils/posts';

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
  h1: H1,
  // Date,
};

const Post = (props: PostProps) => {
  return (
    <div className="flex flex-col items-center">
      <div>
        <H1>
          {props.metaInformation.title}
        </H1>
        <div className="flex-row justify-between">
          <Date dateString={props.metaInformation.date} />
          <p className="italic">
            Read time: {props.metaInformation.readTime} min.
          </p>
        </div>
      </div>
      <MDXRemote {...props.source} components={components} />
    </div>
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

export default Post;