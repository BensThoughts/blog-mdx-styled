import { ReactNode } from 'react';
import styled from '@emotion/styled';

// const Test = styled(Heading)`
//   font-family: 'Press Start 2P', cursive;
// `;

const Heading = styled.h1`
  color: var(--color-text-secondary);
`;

export default function H1(props: { children: ReactNode }) {
  return (
    <Heading className="font-bold text-2xl md:text-4xl">
      {props.children}
    </Heading>
  );
};
