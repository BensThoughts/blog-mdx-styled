import BlogCard from '@app/components/BlogCard';
import SectionTitle from '@app/components/SectionTitle';
import {BlogArticleMetaData} from '@app/pages/blog/[...slug]';
import BlogFolderCard from '../BlogFolderCard';
import {DirectoryTree} from 'next-mdx-filesystem';

type BlogArticleListProps = {
  dirTree: DirectoryTree<BlogArticleMetaData>
}

function createTitle(dirName: string) {
  return dirName.split('-').map((word) => `${word[0].toLocaleUpperCase()}${word.slice(1)}`).join(' ');
}


export default function BlogListLayout({dirTree}: BlogArticleListProps) {
  const {dirMetadata, directories, mdxFiles} = dirTree;
  const title = createTitle(dirMetadata.title);
  return (
    <div
      // charWidth={charWidth}
      className={`grid flex-col px-4 md:px-8 mx-auto items-center
                  gap-y-12 md:gap-y-20 gap-x-0 grid-cols-[1fr,min(140ch,100%),1fr]`}
    >
      <SectionTitle className="col-span-full md:[grid-column:2]">
        <span className="text-icon-secondary">[&nbsp;</span>
          Blog <span>&nbsp;-&nbsp;{title}</span>
        <span className="text-icon-secondary">&nbsp;]</span>
      </SectionTitle>
      <div className="grid h-full gap-y-12 grid-cols-[1fr] col-span-full md:[grid-column:2] md:grid-cols-[1fr,1fr] md:grid-rows-[auto] md:grid-flow-row md:gap-20">
        {directories.map(({dirMetadata}) => (
          <BlogFolderCard
            key={dirMetadata.slug}
            slug={dirMetadata.slug}
            title={createTitle(dirMetadata.title)}
            description={dirMetadata.description ? dirMetadata.description : `Articles about ${createTitle(dirMetadata.title)}`}
          />
        ))}
        {mdxFiles.map(({metadata}) => (
          <BlogCard
            key={metadata.slug}
            slug={metadata.slug}
            title={metadata.title}
            date={metadata.date}
            tags={metadata.tags}
            description={metadata.longDescription}
          />
        ))}
      </div>
    </div>
  );
};
