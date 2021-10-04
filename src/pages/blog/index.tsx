import {ReactNode} from 'react';
import type {GetStaticProps} from 'next';
import Link from 'next/link';
import styled from '@emotion/styled';

import {getSortedPostsData} from '@app/utils/blogPosts';
import {H1} from '@app/components/mdx';
import Card from '@app/components/Card';
import MaxWidthWrapper from '@app/components/MaxWidthWrapper';


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
  gap: 16px;
  grid-template-columns: 1fr;
  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    gap: 32px;
  }
`;
interface BlogArticleListProps {
  allPostsData: {
    ogTitle: string,
    date: string,
    description: string,
    id: string,
    children?: ReactNode
  }[]
}

export default function BlogArticleListPage({allPostsData}: BlogArticleListProps) {
  return (
    <MaxWidthWrapper>
      <section>
        <H1 className="mb-3 mt-10 md:mb-6">Blog</H1>
        <GridContainer>
          {allPostsData.map(({id, ogTitle, date, description}, idx) => {
            return (
              <Link href={`/blog/${id}`} scroll={false} key={id}>
                <a><Card title={ogTitle} subTitle={date} className="md:h-64 shadow-md"><article>{description}</article></Card></a>
              </Link>
            );
          })}
        </GridContainer>
      </section>
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

