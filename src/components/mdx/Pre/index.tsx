import styled from '@emotion/styled';

const PreWrapper = styled.pre`
  /* grid-column: 1 / -1;
  @media (min-width: 768px) {
    grid-column: 2 / 3;
  } */
`;

type PreProps = {
  children: React.ReactNode;
}

export default function Pre({children}: PreProps) {
  return (
    <PreWrapper>
      {children}
    </PreWrapper>
  );
}
