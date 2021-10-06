import {ExternalLink} from '@app/components/Icons';
import styled from '@emotion/styled';

const AnimatedUnderline = styled.span`
  position: relative;
  padding: 0.3em 0;
  overflow: hidden;
  text-decoration: none;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.2em;
    background-color: rgb(var(--color-app-secondary));
    opacity: 0;
    transform: scale(0);
    transform-origin: center;
    transition: opacity 300ms, transform 300ms;
  }

  &:hover::after {
    opacity: 1;
    transform: scale(1);
  }
`;

const Anchor = styled.a`
  &:hover ${AnimatedUnderline}::after {
    transform: scale(1);
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

      <span className="inline-block align-middle pb-1 mr-2">
        <ExternalLink size={20} />
      </span>
    </Anchor>

  );
}
