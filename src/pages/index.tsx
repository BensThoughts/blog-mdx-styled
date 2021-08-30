import { ReactNode } from 'react';
import type { GetStaticProps } from 'next';
import Link from 'next/link';
import styled from "@emotion/styled";

import { getSortedPostsData } from '@app/utils/blogPosts';
import { H1 } from '@app/components/mdx';
import Card from '@app/components/Card';

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
for (let i=0; i < 9; i++) {
  testCards.push(<div key={i}><Card title="Test Card" /></div>);
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 40px auto 40px;
  grid-template-rows: 40px 40rem 40px;

  /* justify-content: center;
  padding-top: 35vh; */
`;

const Box = styled.div`
  grid-column: 2;
  grid-row: 2;
`;

export default function Home(props: HomeProps) {
  return (
    <main>
      <Container>
        <Box>
          Test
        </Box>
      </Container>
    </main>
  );
};
