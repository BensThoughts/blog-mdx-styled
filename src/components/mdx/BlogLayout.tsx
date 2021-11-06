import {MDXRemote, MDXRemoteSerializeResult} from 'next-mdx-remote';
import {NextSeo} from 'next-seo';
import {buildImageUrl} from 'cloudinary-build-url';

import {
  A,
  ArticleHeader,
  ArticleFooter,
  Blockquote,
  CommandLine,
  Code,
  Date,
  Em,
  Hr,
  H1,
  H2,
  HeaderImage,
  Img,
  InlineCode,
  P,
  Pre,
  Strong,
} from '@app/components/mdx/';
import BlogCard from '@app/components/BlogCard';
import MaxWidthWrapper from '@app/components/MaxWidthWrapper';
import GridWrapper from '@app/components/GridWrapper';

const components = {
  a: A,
  blockquote: Blockquote,
  code: Code,
  date: Date,
  em: Em,
  hr: Hr,
  h1: H1,
  h2: H2,
  img: Img,
  inlineCode: InlineCode,
  p: P,
  pre: Pre,
  strong: Strong,
  // ArticleHeader,
  BlogCard,
  CommandLine,
  // HeaderImage,
  // Video,
};

type PostProps = {
  content: MDXRemoteSerializeResult;
  url: string;
  metadata: {
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
  };
};

export default function BlogLayout({
  content,
  url,
  metadata,
}: PostProps) {
  const {
    title,
    shortDescription,
    longDescription,
    date,
    readTime,
    tags,
    cloudinaryImgPath,
    imgWidth,
    imgHeight,
    imgAlt,
  } = metadata;

  let ogImageUrl;
  if (cloudinaryImgPath) {
    ogImageUrl = buildImageUrl(cloudinaryImgPath, {
      cloud: {
        cloudName: 'bensthoughts',
      },
    });
  }

  return (
    <>
      <NextSeo
        title={title}
        description={longDescription}
        openGraph={{
          title: title,
          description: shortDescription,
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
            url: ogImageUrl ? ogImageUrl : '',
            width: imgWidth,
            height: imgHeight,
            alt: imgAlt,
          }],
          site_name: 'BensThoughts Developer Blog',
        }}
        twitter={{
          handle: '@bensthoughts',
          site: '@bensthoughts',
          cardType: ogImageUrl ? 'summary_large_image' : 'summary',
        }}
      />
      <MaxWidthWrapper>
        <article>
          <GridWrapper>
            <ArticleHeader
              title={title}
              date={date}
              readTime={readTime}
              permaLink={url}
              tags={tags}
              className="mt-10"
            />
            {cloudinaryImgPath && imgWidth && imgHeight && imgAlt ?
              (
                <HeaderImage
                  imgPath={cloudinaryImgPath}
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
            <ArticleFooter
              title={title}
              permaLink={url}
              tags={tags}
            />
          </GridWrapper>
        </article>
      </MaxWidthWrapper>
    </>
  );
};
