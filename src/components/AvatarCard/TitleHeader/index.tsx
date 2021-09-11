import styled from '@emotion/styled';

const Header = styled.h1`
display: flex;
align-items: center;
position: relative;
margin: 10px 0px 40px;
width: 100%;
white-space: nowrap;
font-size: 1.5rem;

@media (min-width: 768px) {
  font-size: 2rem;
}

&:before {
  position: relative;
  bottom: 0px;
  content: ">";
  margin-right: 10px;
  color: rgb(--color-text-primary);
  font-weight: 400;
  font-family: monospace;
}

&:after {
  content: "";
  display: block;
  position: relative;
  top: 0px;
  width: 100%;
  height: 1px;
  margin-left: 20px;
  background-color: rgb(var(--color-app-secondary));

  @media (min-width: 768px) {
    width: 300px;
  }
}
`;

type TitleHeaderProps = {
  text: string;
}

export default function TitleHeader({ text }: TitleHeaderProps) {
  return (
    <Header>{text}</Header>
  );
}