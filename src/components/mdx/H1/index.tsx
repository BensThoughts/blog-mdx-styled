import { HTMLAttributes, ReactChild, ReactElement, ReactNode } from 'react';
import styled from '@emotion/styled';

// const Test = styled(Heading)`
//   font-family: 'Press Start 2P', cursive;
// `;

const Heading = styled.h1`
  color: var(--color-text-secondary);
`;

type H1Props = {
  children: string;
} & React.HTMLAttributes<HTMLHeadingElement>;

export default function H1({ children, className }: H1Props) {
  return (
    <Heading className={`font-bold text-2xl md:text-4xl ${className}`}>
      {children}
    </Heading>
  );
};
