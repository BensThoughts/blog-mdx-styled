// import Link from 'next/link';
import styled from '@emotion/styled';
import React from 'react';
import Link from 'next/link';

const AnchorContainer = styled.a`
  display: block;
  height: 100%;
  width: 100%;
  border-radius: 5px;
  border: 2px solid rgb(var(--color-app-secondary));
  background-color: rgba(var(--color-app-primary), 0.8);
  transition-property: background, color, transform;
  transition-duration: 300ms;
  transition-timing-function: ease-in-out;
  will-change: background, color, transform;
  position: relative;
  transform: translateY(0px);

  &::before {
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
    background-color: rgba(255, 255, 255, 0);
    transition: background-color 250ms;
  }

  &:hover::before,
  &:focus::before {
    background-color:  rgba(255, 255, 255, 0.1); 
  }

  &:hover,
  &:focus {
    transform: translateY(-10px);
  }
`;

type LinkCardProps = {
  slug: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export default function LinkCard({slug, children, ...rest}: LinkCardProps) {
  return (
    <Link href={`/blog${slug}`} scroll={true} passHref>
      <AnchorContainer {...rest}>
        {children}
      </AnchorContainer>
    </Link>
  );
}
