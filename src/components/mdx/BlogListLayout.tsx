import styled from '@emotion/styled';

import BlogCard from '@app/components/BlogCard';
import MaxWidthWrapper from '@app/components/MaxWidthWrapper';
import SectionTitle from '@app/components/SectionTitle';
import {BlogArticleMetaData} from '@app/pages/blog/[...slug]';

const GridContainer = styled.div`
  display: grid;
  height: 100%;
  gap: 32px;
  grid-template-columns: 1fr;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-auto-flow: row;
    gap: 32px;
  }

  *{
    grid-column: auto;
    grid-row: auto;
  }
`;


type BlogArticleListProps = {
  directorySlug?: string[],
  metadata: BlogArticleMetaData[]
}


export default function BlogListLayout({metadata, directorySlug}: BlogArticleListProps) {
  let slug = '';
  if (directorySlug && directorySlug?.length > 0) {
    slug = directorySlug[directorySlug.length - 1].split('-').map((word) => `${word[0].toLocaleUpperCase()}${word.slice(1)}`).join(' ');
  }
  return (
    <MaxWidthWrapper>
      <SectionTitle className="mb-12">
        <span className="text-icon-secondary">[&nbsp;</span>
          Blog {directorySlug && <span>&nbsp;-&nbsp;{slug}</span>}
        <span className="text-icon-secondary">&nbsp;]</span>
      </SectionTitle>
      <GridContainer>
        {metadata.map((postData) => {
          return (
            postData.slug && <BlogCard
              key={postData.slug}
              slug={postData.slug}
              title={postData.title}
              date={postData.date}
              tags={postData.tags}
              description={postData.longDescription}
            />
          );
        })}
      </GridContainer>
    </MaxWidthWrapper>
  );
};
