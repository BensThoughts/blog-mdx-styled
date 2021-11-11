import styled from '@emotion/styled';

import BlogCard from '@app/components/BlogCard';
import MaxWidthWrapper from '@app/components/MaxWidthWrapper';
import SectionTitle from '@app/components/SectionTitle';
import {BlogArticleMetaData} from '@app/pages/blog/[...slug]';
import BlogFolderCard from '../BlogFolderCard';
import {DirectoryTree} from '@app/utils/blogPosts';

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
  dirTree: DirectoryTree<BlogArticleMetaData>
}

function createTitle(dirName: string) {
  return dirName.split('-').map((word) => `${word[0].toLocaleUpperCase()}${word.slice(1)}`).join(' ');
}


export default function BlogListLayout({dirTree}: BlogArticleListProps) {
  const {dirMetadata, directories, mdxArticles} = dirTree;
  const title = createTitle(dirMetadata.title);
  return (
    <MaxWidthWrapper>
      <SectionTitle className="mb-12">
        <span className="text-icon-secondary">[&nbsp;</span>
          Blog <span>&nbsp;-&nbsp;{title}</span>
        <span className="text-icon-secondary">&nbsp;]</span>
      </SectionTitle>
      <GridContainer>
        {directories.map(({dirMetadata}) => (
          <BlogFolderCard
            key={dirMetadata.slug}
            slug={dirMetadata.slug}
            title={createTitle(dirMetadata.title)}
            description={dirMetadata.description ? dirMetadata.description : `Articles about ${createTitle(dirMetadata.title)}`}
          />
        ))}
        {mdxArticles.map(({slug, metadata}) => (
          <BlogCard
            key={slug}
            slug={slug}
            title={metadata.title}
            date={metadata.date}
            tags={metadata.tags}
            description={metadata.longDescription}
          />
        ))}
      </GridContainer>
    </MaxWidthWrapper>
  );
};
