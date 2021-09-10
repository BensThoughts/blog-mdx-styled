import { ReactNode } from 'react';
import type { GetStaticProps } from 'next';
import Link from 'next/link';
import styled from "@emotion/styled";
import { useTimeout } from 'react-use';

import { getSortedPostsData } from '@app/utils/blogPosts';
import { H1, H2 } from '@app/components/mdx';
import Card from '@app/components/Card';
import MaxWidthWrapper from '@app/components/MaxWidthWrapper';


export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
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

export default function BlogArticleListPage({ allPostsData }: BlogArticleListProps) {
  return (
    <>
      <MaxWidthWrapper>
      <main>
        <section>
          <H1 className="mb-3 md:mb-6">Blog</H1>
          <GridContainer>
              {allPostsData.map(({ id, ogTitle, date, description}, idx) => {
                return (
                  <div key={id} style={{ animation: `fadeIn 1s, flyIn 1s` }}>
                    <Link href={`/blog/${id}`}>
                      <a><Card title={ogTitle} subTitle={date} className="md:h-64 shadow-md"><article>{description}</article></Card></a>
                    </Link>
                  </div>
                )
              })}
          </GridContainer>
        </section>
      </main>
      </MaxWidthWrapper>
    </>
  );
};
