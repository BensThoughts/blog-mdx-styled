import {GetStaticPaths, GetStaticProps} from 'next';
import {serialize} from 'next-mdx-remote/serialize';
import {MDXRemote, MDXRemoteSerializeResult} from 'next-mdx-remote';
import {NextSeo} from 'next-seo';
import {buildImageUrl} from 'cloudinary-build-url';

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
  InlineCode,
  P,
  Pre,
  Strong,
} from '@app/components/mdx/';
import {getAllPostIds, getPostData} from '@app/utils/blogPosts';
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
  inlinecode: InlineCode,
  p: P,
  pre: Pre,
  strong: Strong,
  ArticleHeader,
  CommandLine,
  HeaderImage,
};

type PostProps = {
  content: MDXRemoteSerializeResult;
  url: string;
  metaData: {
    title: string,
    shortDescription: string,
    longDescription: string,
    date: string,
    readTime: number,
    tags: string[],
    imgPath: string,
    imgWidth: number,
    imgHeight: number,
    imgAlt: string,
  };
};

export default function PostsPage({
  content,
  url,
  metaData,
}: PostProps) {
  const {
    title,
    shortDescription,
    longDescription,
    date,
    readTime,
    tags,
    imgPath,
    imgWidth,
    imgHeight,
    imgAlt,
  } = metaData;
  const ogImageUrl = buildImageUrl(imgPath, {
    cloud: {
      cloudName: 'bensthoughts',
    },
  });
  return (
    <>
      <NextSeo
        title={title}
        description={shortDescription}
        openGraph={{
          title: title,
          description: longDescription,
          url: url,
          type: 'article',
          article: {
            publishedTime: date,
            modifiedTime: date,
            section: 'Web Development',
            authors: ['https://twitter.com/bensthoughts'],
            tags: tags,
          },
          images: [{
            url: ogImageUrl,
            width: imgWidth,
            height: imgHeight,
            alt: imgAlt,
          }],
          site_name: 'BensThoughts Developer Blog',
        }}
        twitter={{
          handle: '@bensthoughts',
          site: '@bensthoughts',
          cardType: 'summary_large_image',
        }}
      />
      <MaxWidthWrapper>
        <GridWrapper>
          <ArticleHeader
            title={title}
            date={date}
            readTime={readTime}
            permaLink={url}
            className="mt-10"
          />
          {imgPath && imgWidth && imgHeight && imgAlt ?
            (
              <HeaderImage
                imgPath={imgPath}
                alt={imgAlt}
                width={imgWidth}
                height={imgHeight}
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
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({params}) => {
  const {content, url, metaData} = await getPostData(params!.id as string);
  const mdxSource = await serialize(content);

  return {
    props: {
      content: mdxSource,
      url: url,
      metaData: metaData,
    },
  };
};
