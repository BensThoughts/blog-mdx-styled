import { ReactNode } from 'react';
import type { GetStaticProps } from 'next';
import Link from 'next/link';
import styled from "@emotion/styled";

import { getSortedPostsData } from '@app/utils/blogPosts';
import { H1, H2 } from '@app/components/mdx';
import Card from '@app/components/Card';

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  };
};

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
interface HomeProps {
  allPostsData: {
    date: string,
    title: string,
    id: string,
    children?: ReactNode
  }[]
}

export default function Home(props: HomeProps) {
  return (
    <>
    <Container>
      <main>
        <section>
          <H1>Blog</H1>
            <div className="gap-4">
              {props.allPostsData.map(({ id, title, date}) => (
              <span key={id} className="gap-4">
                <Link href={`/blog/${id}`}>
                  <a><Card title={title} subTitle={date} /></a>
                </Link>
              </span>
              ))}
          </div>
        </section>
      </main>
    </Container>
    </>
  );
};
