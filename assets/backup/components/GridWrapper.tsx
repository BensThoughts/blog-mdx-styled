import React, {ReactNode} from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.div<{
  charWidth?: number
}>`
  display: grid;
  flex-direction: column;
  padding-right: 1rem;
  padding-left: 1rem;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  row-gap: 3rem;
  column-gap: 0;
  grid-template-columns: ${({charWidth = 90}) => `1fr min(${charWidth}ch, 100%) 1fr`};
  * {
    grid-column: 1 / -1;
  }
  @media (min-width: 768px) {
    display: grid;
    margin-left: auto;
    margin-right: auto;
    grid-template-columns: ${({charWidth = 90}) => `1fr min(${charWidth}ch, 100%) 1fr`};
    padding-right: 2rem;
    padding-left: 2rem;
    row-gap: 5rem;
    * {
      grid-column: 2;
    }
  }
`;

type GridWrapperProps = {
  charWidth?: number
  className?: string,
  children: ReactNode;
} & React.HTMLAttributes<HTMLDivElement>

export default function GridWrapper({
  charWidth = 80,
  className,
  children,
  ...rest
}: GridWrapperProps) {
  return (
    <Wrapper
      charWidth={charWidth}
      // className={`grid flex-col px-4 md:px-8 mx-auto items-center
      //             gap-y-12 md:gap-y-20 gap-x-0 grid-cols-[1fr,min(90ch,100%),1fr]
      //             ${className}`}
      {...rest}
    >
      {children}
    </Wrapper>
  );
}
