import styled from '@emotion/styled';
import React from 'react';

const TransitionWrap = styled.div`
  transition-property: background, color;
  transition-duration: 300ms;
  transition-timing-function: ease-in-out;
  will-change: background, color;
`;

type TransitionColorProps = {
  className?: string;
  children: React.ReactNode;
}
export default function TransitionColor({children, className = '', ...rest}: TransitionColorProps) {
  return (
    <TransitionWrap {...rest} className={className}>
      {children}
    </TransitionWrap>
  );
}
