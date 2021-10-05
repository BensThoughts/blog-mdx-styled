import styled from '@emotion/styled';

const Background = styled.div`
  transition-property: background, color;
  transition-duration: 300ms;
  transition-timing-function: ease-in-out;
  will-change: background, color;
`;

type AboutBoxProps = {
  className?: string;
}

export default function TechnologiesBox({className}: AboutBoxProps) {
  return (
    <Background className={`bg-terminal bg-opacity-50 w-full max-w-2xl z-10 rounded-sm border-2 border-solid border-opacity-30 p-4 border-secondary shadow-sm ${className}`}>
      <div>
        <p className="my-2">
        &nbsp;&nbsp;&nbsp;&nbsp;A non-exhaustive but...pretty exhaustive list of the technologies I have been working with recently.
        Click on the links to go to the home page of a given technology.
        </p>
      </div>
    </Background>
  );
}
