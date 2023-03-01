import {ExternalLink} from '@app/components/Icons';
import {Github} from '@app/components/Icons/Brands';
import UnderlineLinkWithIcon from '@app/components/UnderlineLinkWithIcon';

type ProjectLinksProps = {
  liveLink: string,
  githubLink?: string,
}

export default function ProjectLinks({
  liveLink,
  githubLink,
}: ProjectLinksProps) {
  return (
    <div className="pt-4">
      <div className="flex gap-4 font-mono">
        <UnderlineLinkWithIcon
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          text="site"
          className="text-secondary"
          icon={<ExternalLink className="text-secondary" />}
        />
        {githubLink &&
          <UnderlineLinkWithIcon
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            text="repo"
            className="text-secondary"
            icon={<Github className="text-secondary" />}
          />
        }
      </div>
    </div>
  );
}
