import { ReactNode } from 'react';
import type { GetStaticProps } from 'next';
import Link from 'next/link';
import styled from "@emotion/styled";

import { getSortedPostsData } from '@app/utils/blogPosts';
import { H1 } from '@app/components/mdx';

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
  padding-top: 35vh;
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
            <ul>
              {props.allPostsData.map(({ id, title, date}) => (
              <li key={id}>
                <Link href={`/blog/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small>
                  {date}
                </small>
              </li>
              ))}
          </ul>
        </section>
      </main>
    </Container>
    </>
  );
};
