import { ReactNode } from 'react';
import type { GetStaticProps } from 'next';
import Link from 'next/link';
import styled from "@emotion/styled";

import { getSortedPostsData } from '../utils/posts';
import { H2 } from '@app/components/mdx';

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  };
};

// const Header = dynamic(() => import('@app/components/Header'), {
//   ssr: false
// });

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
        <h1>Next.js dark mode toggle</h1>
        <h4>Dark mode is more than just a gimmick, right?!</h4>
        <section>
          <H2>Blog</H2>
            <ul>
              {props.allPostsData.map(({ id, title, date}) => (
              <li key={id}>
                <Link href={`/posts/${id}`}>
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
