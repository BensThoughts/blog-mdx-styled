import { ReactNode } from 'react';
import type { GetStaticProps } from 'next';
import Link from 'next/link';
import styled from "@emotion/styled";
import { NextSeo } from 'next-seo';

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
    <>
      <NextSeo
        title="BensThoughts Blog"
        description="My personal dev blog."
        openGraph={{
          url: 'https://bensthoughts.netlify.app',
          title: 'BensThoughts Blog',
          description: 'My (Benjamin Blumenfeld-Jones) personal dev blog.',
          images: [
            {
              url: 'https://res.cloudinary.com/bensthoughts/image/upload/v1630537753/blog/articles-headers/google-gke-cleanup_ihphxz.jpg',
              width: 810,
              height: 456,
              alt: 'Computer Terminal'
            }
          ],
          site_name: 'BensThoughts Blog'
        }}
        twitter={{
          handle: '@bensthoughts',
          site: '@bensthoughts',
          cardType: 'summary_large_image'
        }}
      />
      <MaxWidthWrapper>
        <ContentPreviewGrid>
          <Container>
          {testCards}
          </Container>
        </ContentPreviewGrid>
      </MaxWidthWrapper>
    </>
  );
};
