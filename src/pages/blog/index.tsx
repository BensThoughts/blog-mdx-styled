import {ReactNode} from 'react';
import type {GetStaticProps} from 'next';
import Link from 'next/link';
import styled from '@emotion/styled';

import {getSortedPostsData} from '@app/utils/blogPosts';
import Card from '@app/components/Card';
import MaxWidthWrapper from '@app/components/MaxWidthWrapper';
import TitleHeader from '@app/components/Home/TitleHeader';


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
    id: string,
    longTitle: string,
    shortDescription: string,
    date: string,
    tags: string[]
    children?: ReactNode
  }[]
}

export default function BlogArticleListPage({allPostsData}: BlogArticleListProps) {
  return (
    <MaxWidthWrapper>
      <section>
        <TitleHeader>
          <span className="text-icon-secondary">[&nbsp;</span>
          Blog
          <span className="text-icon-secondary">&nbsp;]</span>
        </TitleHeader>
        <GridContainer>
          {allPostsData.map(({
            id,
            longTitle,
            date,
            shortDescription,
            tags,
          }, idx) => {
            return (
              <Link href={`/blog/${id}`} scroll={false} key={id}>
                <a>
                  <Card
                    title={longTitle}
                    subTitle={date}
                    tags={tags}
                    className="md:h-64 shadow-md"
                  >
                    <article>
                      {shortDescription}
                    </article>
                  </Card>
                </a>
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

