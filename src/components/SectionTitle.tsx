import styled from '@emotion/styled';

const Header = styled.h1`
display: flex;
align-items: center;
height: 100%;
width: 100%;
z-index: -1;
position: relative;
white-space: nowrap;
font-family: monospace;
font-size: 1.5rem;
backdrop-filter: var(--app-backdrop-filter);

@media (min-width: 768px) {
  font-size: 2rem;
}

&::before {
  content: "";
  position: relative;
  top: 0px;
  width: 100%;
  height: 2px;
  margin-right: 20px;
  background-color: rgb(var(--color-app-secondary));
  z-index: -1;
  backdrop-filter: var(--app-backdrop-filter);
}

&::after {
  content: "";
  position: relative;
  top: 0px;
  width: 100%;
  height: 2px;
  margin-left: 20px;
  background-color: rgb(var(--color-app-secondary));
  z-index: -1;
  backdrop-filter: var(--app-backdrop-filter);

  /* @media (min-width: 768px) {
    width: 300px;
  } */
}
`;


type SectionTitleProps = {
  reversed?: boolean;
} & React.HTMLAttributes<HTMLDivElement>

export default function SectionTitleHeader({
  reversed = false,
  className,
  children,
  ...rest
}: SectionTitleProps) {
  return (
    <div className={`flex items-center my-2 h-full ${className}`} {...rest}>
      <Header>{children}</Header>
    </div>
  );
}
