import styled from '@emotion/styled';

const Header = styled.h1`
display: flex;
align-items: center;
z-index: -1;
position: relative;
margin: 10px 0px 40px;
width: 100%;
white-space: nowrap;
font-size: 1.5rem;
backdrop-filter: var(--app-backdrop-filter);

@media (min-width: 768px) {
  font-size: 2rem;
}

&::before {
  position: relative;
  bottom: 0px;
  content: ">";
  margin-right: 10px;
  color: rgb(--color-text-primary);
  font-weight: 400;
  font-family: monospace;
  z-index: -1;
  backdrop-filter: var(--app-backdrop-filter);
}

&::after {
  content: "";
  display: block;
  position: relative;
  top: 0px;
  width: 100%;
  height: 2px;
  margin-left: 20px;
  background-color: rgb(var(--color-app-secondary));
  z-index: -1;
  backdrop-filter: var(--app-backdrop-filter);

  @media (min-width: 768px) {
    width: 300px;
  }
}
`;

const InverseHeader = styled.h1`
display: flex;
align-items: center;
justify-content: right;
position: relative;
margin: 10px 0px 40px;
width: 100%;
white-space: nowrap;
font-size: 1.5rem;
backdrop-filter: var(--app-backdrop-filter);

@media (min-width: 768px) {
  font-size: 2rem;
}

&::after {
  position: relative;
  bottom: 0px;
  content: "<";
  margin-left: 10px;
  color: rgb(--color-text-primary);
  font-weight: 400;
  font-family: monospace;
  backdrop-filter: var(--app-backdrop-filter);
}

&::before {
  content: "";
  display: block;
  position: relative;
  top: 0px;
  width: 100%;
  height: 1px;
  margin-right: 20px;
  background-color: rgb(var(--color-app-secondary));
  backdrop-filter: var(--app-backdrop-filter);

  @media (min-width: 768px) {
    width: 300px;
  }
}
`;

type TitleHeaderProps = {
  text: string;
  inverse?: boolean;
}

export default function TitleHeader({text, inverse = false}: TitleHeaderProps) {
  return (
    <>
      {inverse ?
        <InverseHeader>{text}</InverseHeader> :
        <Header>{text}</Header>
      }
    </>
  );
}
