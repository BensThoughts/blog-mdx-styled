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
    <LinkCard slug={slug}>
      <div className="flex flex-col gap-4 justify-start px-2 py-4 h-full md:p-4">
        <div className="flex justify-between">
          <h1 className="text-2xl text-primary">
            {title}
          </h1>
          <Folder className="text-secondary" />
        </div>
        {description && <p>{description}</p>}
      </div>
    </LinkCard>
  );
};
