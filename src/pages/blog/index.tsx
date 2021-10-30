import type {GetStaticProps} from 'next';
import styled from '@emotion/styled';

import {getSortedPostsData} from '@app/utils/blogPosts';
import BlogCard from '@app/components/BlogCard';
import MaxWidthWrapper from '@app/components/MaxWidthWrapper';
import SectionTitle from '@app/components/SectionTitle';

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

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
    id: string,
    title: string,
    longDescription: string,
    date: string,
    tags: string[]
    children?: React.ReactNode
  }[]
}

export default function BlogArticleListPage({allPostsData}: BlogArticleListProps) {
  return (
    <MaxWidthWrapper>
      <SectionTitle className="mb-12">
        <span className="text-icon-secondary">[&nbsp;</span>
          Blog
        <span className="text-icon-secondary">&nbsp;]</span>
      </SectionTitle>
      <GridContainer>
        {allPostsData.map(({
          id,
          title,
          date,
          longDescription,
          tags,
        }, idx) => {
          return (
            <BlogCard
              key={id}
              id={id}
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
