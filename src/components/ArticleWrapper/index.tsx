/**
* This component should only be used as a wrapper around an entire Next.js page
*/
import { ReactNode } from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr min(90ch, 100%) 1fr;
  * {
    grid-column: 2;
  }
`;

interface MaxWidthWrapperProps {
  className?: string,
  children: ReactNode;
}

export default function ArticleWrapper({
  className,
  children
}: MaxWidthWrapperProps) {
  return (
    <Wrapper className={className}>
      {children}
    </Wrapper>
  )
}