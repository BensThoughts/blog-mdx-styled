import styled from '@emotion/styled';

const Title = styled.div<{
  reversed: boolean
}>`
display: flex;
align-items: center;
z-index: -1;
position: relative;
margin: 10px 0px 40px;
width: 100%;
white-space: nowrap;
font-size: 1.5rem;
/* backdrop-filter: var(--app-backdrop-filter); */
color: rgb(var(--color-text-secondary));

  &::after {
  content: "";
  display: ${(props) => props.reversed ? 'none' : 'block'};
  position: relative;
  top: 0px;
  width: 100%;
  height: 2px;
  margin-left: 20px;
  background-color: rgb(var(--color-app-secondary));
  z-index: -1;
  /* backdrop-filter: var(--app-backdrop-filter); */
  }

  &::before {
  content: "";
  display: ${(props) => props.reversed ? 'block' : 'none'};
  position: relative;
  top: 0px;
  width: 100%;
  height: 2px;
  margin-right: 20px;
  background-color: rgb(var(--color-app-secondary));
  z-index: -1;
  /* backdrop-filter: var(--app-backdrop-filter); */
  }
`;

type ProjectTitleProps = {
  title: string,
  reversed: boolean,
}

export default function ProjectTitle({title, reversed}: ProjectTitleProps) {
  return (
    <Title reversed={reversed}>{title}</Title>
  );
}
