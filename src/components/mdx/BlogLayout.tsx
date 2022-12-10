import {MDXRemote, MDXRemoteSerializeResult} from 'next-mdx-remote';
import {NextSeo} from 'next-seo';
import {buildImageUrl} from 'cloudinary-build-url';
import {Inter} from '@next/font/google';
// eslint-disable-next-line new-cap
const inter = Inter({subsets: ['latin']});
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
  Li,
  P,
  Pre,
  Strong,
  Ul,
} from '@app/components/mdx/';
import BlogCard from '@app/components/BlogCard';
import GridWrapper from '@app/components/GridWrapper';
import {BlogArticleMetaData} from '@app/pages/blog/[...slug]';

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
  li: Li,
  p: P,
  pre: Pre,
  strong: Strong,
  ul: Ul,
  // ArticleHeader,
  BlogCard,
  CommandLine,
  // HeaderImage,
  // Video,
};

type PostProps = {
  content: MDXRemoteSerializeResult;
  url: string;
  metadata: BlogArticleMetaData;
};

export default function BlogLayout({
  content,
  url,
  metadata,
}: PostProps) {
  const {
    date,
    title,
    shortDescription,
    longDescription,
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
      {/* <MaxWidthWrapper> */}
      <article className={inter.className}>
        <GridWrapper>
          <ArticleHeader
            title={title}
            date={date}
            readTime={readTime}
            permaLink={url}
            tags={tags}
            className="mt-10"
          />
          {cloudinaryImgPath && imgWidth && imgHeight && imgAlt
            ? (
                <HeaderImage
                  imgPath={cloudinaryImgPath}
                  alt={imgAlt}
                  width={imgWidth}
                  height={imgHeight}
                />
            ) : (
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
      {/* </MaxWidthWrapper> */}
    </>
  );
};
