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
  dirData: DirectoryTree<BlogArticleMetaData>
  // directorySlug?: string[];
  // directories: {
  //   slug: string;
  //   dirMtimeDate: string;
  //   dirMetadata: {
  //     title: string;
  //     date: string;
  //     description: string | null;
  //   }
  // }[],
  // mdxArticles: {
  //   slug: string;
  //   mtimeDate: string;
  //   metadata: {
  //     date: string;
  //   } & BlogArticleMetaData;
  // }[]
}


export default function BlogListLayout({dirData}: BlogArticleListProps) {
  const {name, directories, mdxArticles} = dirData;
  let title = '';
  if (name && name?.length > 0) {
    title = name.split('-').map((word) => `${word[0].toLocaleUpperCase()}${word.slice(1)}`).join(' ');
  }
  return (
    <MaxWidthWrapper>
      <SectionTitle className="mb-12">
        <span className="text-icon-secondary">[&nbsp;</span>
          Blog {name && <span>&nbsp;-&nbsp;{title}</span>}
        <span className="text-icon-secondary">&nbsp;]</span>
      </SectionTitle>
      <GridContainer>
        {directories.map((directory) => (
          <BlogFolderCard
            key={directory.slug}
            slug={directory.slug}
            title={directory.dirMetadata.title}
            // date={directory.metadata.date}
            // tags={[]}
            description={directory.dirMetadata.description ? directory.dirMetadata.description : 'A folder'}
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
