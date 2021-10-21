import {ReactNode} from 'react';
import type {GetStaticProps} from 'next';
import styled from '@emotion/styled';

import {getSortedPostsData} from '@app/utils/blogPosts';
import BlogCard from '@app/components/BlogCard';
import MaxWidthWrapper from '@app/components/MaxWidthWrapper';
import TitleHeader from '@app/components/TitleHeader';


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
    children?: ReactNode
  }[]
}

export default function BlogArticleListPage({allPostsData}: BlogArticleListProps) {
  return (
    <MaxWidthWrapper>
      <TitleHeader>
        <span className="text-icon-secondary">[&nbsp;</span>
          Blog
        <span className="text-icon-secondary">&nbsp;]</span>
      </TitleHeader>
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


{/* <motion.div
key={id}
initial={{ opacity: 0, y: '100%' }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.4, delay: (idx / 2) - ((idx - 1) / 4) }}
>

</motion.div> */}

