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
  children: ReactNode;
}

export default function ArticleWrapper(props: MaxWidthWrapperProps) {
  return (
    <Wrapper>
      {props.children}
    </Wrapper>
  )
}