import AnchorContainer from '@app/components/AnchorCard';
import {Package} from '@app/components/Icons';

type PackageCardProps = {
  href: string;
  title: string;
  description: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

export default function PackageCard({
  href,
  title,
  description,
  ...rest
}: PackageCardProps) {
  return (
    <AnchorContainer href={href} target="_blank" rel="noreferrer noopener" {...rest}>
      <div className="flex flex-col gap-4 justify-start px-2 py-4 h-full md:p-4">
        <div className="flex justify-between">
          <h1 className="text-2xl text-primary">
            {title}
          </h1>
          <Package className="text-secondary" size={32} />
        </div>
        {description && <p>{description}</p>}
      </div>
    </AnchorContainer>
  );
};
