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
  Li,
  P,
  // Pre,
  Strong,
  Ul,
} from '@app/components/mdx/';
import BlogCard from '@app/components/BlogCard';
import {BlogArticleMetaData} from '@app/pages/blog/[...slug]';

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
      <article>
        <div className="grid-wrapper">
          <ArticleHeader
            title={title}
            date={date}
            readTime={readTime}
            permaLink={url}
            tags={tags}
            className="mt-10 col-span-full md:[grid-column:2]"
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
          <MDXRemote
            components={{
              a: A,
              blockquote: Blockquote,
              code: Code,
              date: Date,
              em: Em,
              hr: Hr,
              h1: H1,
              h2: H2,
              img: Img,
              li: Li,
              p: P,
              // pre: Pre,
              strong: Strong,
              ul: Ul,
              ArticleHeader,
              BlogCard,
              CommandLine,
              HeaderImage,
              // Video,
            }}
            {...content}
            // compiledSource={}
          />
          <ArticleFooter
            title={title}
            permaLink={url}
            tags={tags}
          />
        </div>
      </article>
      {/* </MaxWidthWrapper> */}
    </>
  );
};
