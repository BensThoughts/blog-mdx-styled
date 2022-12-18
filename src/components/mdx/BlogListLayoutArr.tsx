import React from 'react';
import BlogCard from '@app/components/BlogCard';
import SectionTitle from '@app/components/SectionTitle';
import {BlogArticleMetaData} from '@app/pages/blog/[...slug]';
import {DirectoryData} from 'next-mdx-filesystem';


type BlogArticleListProps = {
  dirArr: DirectoryData<BlogArticleMetaData>[]
}

function createTitle(dirName: string) {
  return dirName.split('-').map((word) => `${word[0].toLocaleUpperCase()}${word.slice(1)}`).join(' ');
}

export default function BlogListLayoutArr({dirArr}: BlogArticleListProps) {
  return (
    <div
      className={`grid px-4 md:px-8 mx-auto justify-center items-center
                  gap-y-12 md:gap-y-20 gap-x-0 grid-cols-[1fr,min(140ch,100%),1fr]`}
    >
      {dirArr.map((dir) => {
        if (dir.mdxFiles.length > 0) {
          return (
            <React.Fragment key={dir.dirMetadata.title}>
              <SectionTitle className="col-span-full md:[grid-column:2]">
                <span className="text-icon-secondary">[&nbsp;</span>
                {createTitle(dir.dirMetadata.title)}
                <span className="text-icon-secondary">&nbsp;]</span>
              </SectionTitle>
              <div className="col-span-full md:[grid-column:2]">
                <div className="grid h-full gap-y-12 grid-cols-[1fr] md:grid-cols-[1fr,1fr] md:grid-rows-[auto] md:grid-flow-row md:gap-20">
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
                </div>
              </div>
            </React.Fragment>
          );
        }
      })}
    </div>
  );
};
