import styled from '@emotion/styled';

import BlogCard from '@app/components/BlogCard';
import MaxWidthWrapper from '@app/components/MaxWidthWrapper';
import SectionTitle from '@app/components/SectionTitle';
import {BlogArticleMetaData} from '@app/pages/blog/[...slug]';

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
  directorySlug?: string[];
  directories: {
    slug: string;
    mtimeDate: string;
    metadata: {
      title: string;
      date: string;
      description: string | null;
    }
  }[],
  mdxArticles: {
    slug: string;
    mtimeDate: string;
    metadata: {
      date: string;
    } & BlogArticleMetaData;
  }[]
}


export default function BlogListLayout({directorySlug, directories, mdxArticles}: BlogArticleListProps) {
  let slug = '';
  if (directorySlug && directorySlug?.length > 0) {
    slug = directorySlug[directorySlug.length - 1].split('-').map((word) => `${word[0].toLocaleUpperCase()}${word.slice(1)}`).join(' ');
  }
  return (
    <MaxWidthWrapper>
      <SectionTitle className="mb-12">
        <span className="text-icon-secondary">[&nbsp;</span>
          Blog {directorySlug && <span>&nbsp;-&nbsp;{slug}</span>}
        <span className="text-icon-secondary">&nbsp;]</span>
      </SectionTitle>
      <GridContainer>
        {directories.map((directory) => (
          <BlogCard
            key={directory.slug}
            slug={directory.slug}
            title={directory.metadata.title}
            date={directory.metadata.date}
            tags={[]}
            description={directory.metadata.description ? directory.metadata.description : 'A folder'}
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
