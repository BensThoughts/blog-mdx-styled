import styled from '@emotion/styled';
import {ExternalLink} from '@app/components/Icons';
import AnimatedUnderline from '@app/components/AnimatedUnderline';

const Anchor = styled.a`
  &:hover ${AnimatedUnderline}::after {
    transform: scaleX(1);
    opacity: 1;
  }
`;

type AProps = {
  children: string;
  href: string;
}

export default function A({href, children}: AProps) {
  return (
    <Anchor
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="inline-block text-secondary"
    >
      <AnimatedUnderline
        className="mr-2 text-icon-secondary"
      >
        {children}
      </AnimatedUnderline>
      <span className="inline-block pb-1 align-middle">
        <ExternalLink size={20} />
      </span>
    </Anchor>

  );
}
