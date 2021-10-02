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
      <div className="flex gap-4">
        <a href={githubLink} target="_blank" rel="noopener noreferrer"><Github /></a>
        <a href={liveLink} target="_blank" rel="noopener noreferrer"><ExternalLink /></a>
      </div>
    </div>
  );
}
