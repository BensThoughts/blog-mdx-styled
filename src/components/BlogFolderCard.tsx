import Link from 'next/link';
import LinkCard from '@app/components/LinkCard';
import {Folder} from '@app/components/Icons';

type BlogFolderCardProps = {
  slug: string;
  title: string;
  description: string;
}

export default function BlogFolderCard({
  slug,
  title,
  description,
}: BlogFolderCardProps) {
  return (
    <Link href={`/blog/${slug}`} scroll={true} passHref>
      <LinkCard>
        <div className="h-full px-2 py-4 md:p-4 flex flex-col justify-start gap-4">
          <div className="flex justify-between">
            <h1 className="text-2xl text-primary">
              {title}
            </h1>
            <Folder className="text-secondary" />
          </div>
          {description && <p>{description}</p>}
        </div>


      </LinkCard>
    </Link>

  );
};
