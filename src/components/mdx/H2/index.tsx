import styled from '@emotion/styled';

const H2Styled = styled.h2`
  position: relative;
  padding: 0.2em 0;
  overflow: hidden;
  text-decoration: none;
  color: rgb(var(--color-text-secondary));

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.05rem;
    background-color: rgb(var(--color-app-secondary));
  }
`;

type H2Props = {
  children: string;
} & React.HTMLAttributes<HTMLHeadingElement>;

export default function H2({children, className}: H2Props) {
  return (
    <H2Styled className={`text-xl md:text-2xl mx-auto text-secondary ${className}`}>
      {children}
    </H2Styled>
  );
};
