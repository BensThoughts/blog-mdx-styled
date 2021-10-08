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
    shortTitle: string,
    longTitle: string,
    shortDescription: string,
    longDescription: string,
    date: string,
    modifiedDate: string,
    readTime: number,
    tags: string[],
    imgPath: string,
    imgWidth: number,
    imgHeight: number,
    imgAlt: string,
    ogImagePath: string,
    ogImageWidth: number,
    ogImageHeight: number,
    ogImageAlt: string,
  };
};

export default function PostsPage({
  content,
  url,
  metaData,
}: PostProps) {
  const {
    shortTitle,
    longTitle,
    shortDescription,
    longDescription,
    date,
    modifiedDate,
    readTime,
    tags,
    imgPath,
    imgWidth,
    imgHeight,
    imgAlt,
    ogImagePath,
    ogImageWidth,
    ogImageHeight,
    ogImageAlt,
  } = metaData;
  const ogImageUrl = buildImageUrl(ogImagePath, {
    cloud: {
      cloudName: 'bensthoughts',
    },
  });
  return (
    <>
      <NextSeo
        title={shortTitle}
        description={shortDescription}
        openGraph={{
          title: longTitle,
          description: longDescription,
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
            alt: ogImageAlt,
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
            title={longTitle}
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
