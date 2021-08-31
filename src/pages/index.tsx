import { ReactNode } from 'react';
import type { GetStaticProps } from 'next';
import Link from 'next/link';
import styled from "@emotion/styled";

import { getSortedPostsData } from '@app/utils/blogPosts';
import { H1 } from '@app/components/mdx';
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
interface HomeProps {
  allPostsData: {
    date: string,
    title: string,
    id: string,
    children?: ReactNode
  }[]
}

const testCards: ReactNode[] = [];
for (let i=0; i < 13; i++) {
  const cardNum = i + 1;
  const title = 'Test Card ' + cardNum;
  testCards.push(
    <div key={i}>
      <Card title={title} subTitle="2021-03-04" className="max-w-sm md">
        Some lengthy blog content goes here, just some generic content.
        Some lengthy blog content goes here, just some generic content.
      </Card>
    </div>
  );
}

const Container = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr;
  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    gap: 32px;
  }
  /* justify-content: center;
  padding-top: 35vh; */
`;

const Box = styled.div`
  grid-column: 2;
  grid-row: 2;
`;

const StartBox = styled.div`
  grid-column: 1 / 2;
  grid-row: 1;
`;

const EndBox = styled.div`
  grid-column: auto;
  grid-row: auto;
`;

const ContentPreviewGrid = styled.div`

`;

export default function Home(props: HomeProps) {
  return (
    <MaxWidthWrapper>
      <ContentPreviewGrid>
        <Container>
        {testCards}
        </Container>
      </ContentPreviewGrid>
    </MaxWidthWrapper>
  );
};
