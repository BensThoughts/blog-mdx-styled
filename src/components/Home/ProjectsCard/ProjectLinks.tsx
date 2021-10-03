import {ExternalLink} from '@app/components/Icons';
import {Github} from '@app/components/Icons/Brands';

type ProjectLinksProps = {
  liveLink: string,
  githubLink: string,
}

export default function ProjectLinks({
  liveLink,
  githubLink,
}: ProjectLinksProps) {
  return (
    <div className="pt-2 px-2">
      <div className="flex gap-4 font-mono">
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-2"
        >
          <span className="text-primary">repo</span>
          <Github className="text-secondary" />
        </a>
        <a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-2"
        >
          <span className="text-primary">site</span>
          <ExternalLink className="text-secondary" />
        </a>
      </div>
    </div>
  );
}
