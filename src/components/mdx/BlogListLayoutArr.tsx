import styled from '@emotion/styled';

import BlogCard from '@app/components/BlogCard';
import MaxWidthWrapper from '@app/components/MaxWidthWrapper';
import SectionTitle from '@app/components/SectionTitle';
import {BlogArticleMetaData} from '@app/pages/blog/[...slug]';
import {DirectoryData} from '@app/utils/blogPosts';
// import GridWrapper from '../GridWrapper';

const GridContainer = styled.div`
  display: grid;
  height: 100%;
  gap: 32px;
  grid-template-columns: 1fr;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-auto-flow: row;
    gap: 32px;
  }

  *{
    grid-column: auto;
    grid-row: auto;
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
    <MaxWidthWrapper>
      {/* <GridWrapper charWidth={100}> */}
      {dirArr.map((dir) => {
        if (dir.mdxArticles.length > 0) {
          return (
            <div key={dir.dirMetadata.title}>
              <SectionTitle className="mb-12">
                <span className="text-icon-secondary">[&nbsp;</span>
                {createTitle(dir.dirMetadata.title)}
                <span className="text-icon-secondary">&nbsp;]</span>
              </SectionTitle>
              <GridContainer>
                {dir.mdxArticles.map(({metadata}) => (
                  <BlogCard
                    key={metadata.slug}
                    slug={metadata.slug}
                    title={metadata.title}
                    date={metadata.date}
                    tags={metadata.tags}
                    description={metadata.longDescription}
                  />
                ))}
              </GridContainer>
            </div>
          );
        }
      })}
      {/* </GridWrapper> */}
    </MaxWidthWrapper>
  );
};
