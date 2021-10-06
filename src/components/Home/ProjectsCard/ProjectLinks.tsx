import styled from '@emotion/styled';
import {ExternalLink} from '@app/components/Icons';
import {Github} from '@app/components/Icons/Brands';
import AnimatedUnderline from '@app/components/AnimatedUnderline';

const AnimationController = styled.a`
  &:hover ${AnimatedUnderline}::after {
    opacity: 1;
    transform: scale(1);
  }
`;

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
        <AnimationController
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-2"
        >
          <AnimatedUnderline
            className="text-primary animated-underline"
          >repo
          </AnimatedUnderline>
          <Github className="text-secondary" />
        </AnimationController>
        <AnimationController
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-2"
        >
          <AnimatedUnderline className="text-primary animated-underline">site</AnimatedUnderline>
          <ExternalLink className="text-secondary" />
        </AnimationController>
      </div>
    </div>
  );
}
