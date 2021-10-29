import ExcitedSmiley from '@app/components/Icons/ExcitedSmiley';
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
    <Background className={`w-full max-w-2xl z-10 rounded-sm border-2 border-solid  border-secondary p-4 shadow-sm ${className}`}>
      <div>
        <p className="my-2 leading-7">
        &nbsp;&nbsp;&nbsp;&nbsp;
          <strong>
            A list of the technologies I have been excited about&nbsp;
            <ExcitedSmiley size={30} className="inline-block pb-1 text-icon-secondary" />
            &nbsp;and working with recently.
          </strong>
          &nbsp;&nbsp;Click on the links to go to the home page and learn more about a given technology.
        </p>
      </div>
    </Background>
  );
}
