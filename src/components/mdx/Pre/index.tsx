import styled from '@emotion/styled';
import { ReactChildren } from 'react';

const PreWrapper = styled.pre`
  grid-column: 1 / -1;
  @media (min-width: 768px) {
    grid-column: 2 / 3;
  }
`;

type PreProps = {
  children: ReactChildren;
}

export default function Pre({ children }: PreProps) {
  return (
    <PreWrapper>
      {children}
    </PreWrapper>
  );
}