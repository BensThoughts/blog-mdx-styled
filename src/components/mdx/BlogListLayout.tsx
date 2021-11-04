import styled from '@emotion/styled';

import BlogCard from '@app/components/BlogCard';
import MaxWidthWrapper from '@app/components/MaxWidthWrapper';
import SectionTitle from '@app/components/SectionTitle';

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
interface BlogArticleListProps {
  allPostsData: {
    slug: string,
    title: string,
    longDescription: string,
    date: string,
    tags: string[]
  }[]
}

export default function BlogListLayout({allPostsData}: BlogArticleListProps) {
  // console.log(allPostsData);
  return (
    <MaxWidthWrapper>
      <SectionTitle className="mb-12">
        <span className="text-icon-secondary">[&nbsp;</span>
          Blog
        <span className="text-icon-secondary">&nbsp;]</span>
      </SectionTitle>
      <GridContainer>
        {allPostsData.map(({
          slug,
          title,
          date,
          longDescription,
          tags,
        }, idx) => {
          return (
            <BlogCard
              key={slug}
              slug={slug}
              title={title}
              date={date}
              tags={tags}
              description={longDescription}
            />
          );
        })}

      </GridContainer>
    </MaxWidthWrapper>
  );
};
