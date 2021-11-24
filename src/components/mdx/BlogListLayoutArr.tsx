import React from 'react';
import styled from '@emotion/styled';

import BlogCard from '@app/components/BlogCard';
// import MaxWidthWrapper from '@app/components/MaxWidthWrapper';
import GridWrapper from '@app/components/GridWrapper';
import SectionTitle from '@app/components/SectionTitle';
import {BlogArticleMetaData} from '@app/pages/blog/[...slug]';
import {DirectoryData} from 'next-mdx-filesystem';
// import GridWrapper from '../GridWrapper';

const GridContainer = styled.div`
  display: grid;
  height: 100%;
  row-gap: 3rem;
  grid-template-columns: 1fr;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-auto-flow: row;
    gap: 5rem;
    a {
      grid-column: auto;
      grid-row: auto;
    }
  }
`;


type BlogArticleListProps = {
  dirArr: DirectoryData<BlogArticleMetaData>[]
}

function createTitle(dirName: string) {
  return dirName.split('-').map((word) => `${word[0].toLocaleUpperCase()}${word.slice(1)}`).join(' ');
}

export default function BlogListLayoutArr({dirArr}: BlogArticleListProps) {
  return (
    <GridWrapper charWidth={120}>
      {/* <GridWrapper charWidth={100}> */}
      {dirArr.map((dir) => {
        if (dir.mdxFiles.length > 0) {
          return (
            <React.Fragment key={dir.dirMetadata.title}>
              <SectionTitle>
                <span className="text-icon-secondary">[&nbsp;</span>
                {createTitle(dir.dirMetadata.title)}
                <span className="text-icon-secondary">&nbsp;]</span>
              </SectionTitle>
              <div>
                <GridContainer>
                  {dir.mdxFiles.map(({metadata}) => (
                    <BlogCard
                      key={metadata.slug}
                      slug={metadata.slug}
                      title={metadata.title}
                      date={metadata.date}
                      tags={metadata.tags}
                      description={metadata.longDescription}
                      className="grid"
                    />
                  ))}
                </GridContainer>
              </div>
            </React.Fragment>
          );
        }
      })}
      {/* </GridWrapper> */}
    </GridWrapper>
  );
};
