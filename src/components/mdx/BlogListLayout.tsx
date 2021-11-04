import styled from '@emotion/styled';

import BlogCard from '@app/components/BlogCard';
import MaxWidthWrapper from '@app/components/MaxWidthWrapper';
import SectionTitle from '@app/components/SectionTitle';
import {SortedPostData} from '@app/utils/blogPosts';

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
  sortedPostsData: SortedPostData[]
}


export default function BlogListLayout({sortedPostsData, directorySlug}: BlogArticleListProps) {
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
        {sortedPostsData.map((postData) => {
          return (
            <BlogCard
              key={postData.slug}
              slug={postData.slug}
              title={postData.blogArticleMetaData.title}
              date={postData.blogArticleMetaData.date}
              tags={postData.blogArticleMetaData.tags}
              description={postData.blogArticleMetaData.longDescription}
            />
          );
        })}
      </GridContainer>
    </MaxWidthWrapper>
  );
};
