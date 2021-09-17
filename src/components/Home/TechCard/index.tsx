import styled from '@emotion/styled';

import TitleHeader from '@app/components/Home/TitleHeader';
import IconPill from '@app/components/IconPill';

const TransitionColor = styled.div`
  transition-property: background, color;
  transition-duration: 300ms;
  transition-timing-function: ease-in-out;
  will-change: background, color;
`;

const DoubleCard = styled.div`
  position: relative;
  display: flex;
  border: 2px solid rgb(var(--color-app-secondary), 0.3);
  border-radius: 10px;
  font-size: 1rem;
  z-index: 1;
  transition: transform 300ms;

  margin-top: 7.5rem;
  width: 80%;
  height: 15rem;
  transform: translate(0, 0);
  @media (min-width: 768px) {
      margin-top: 0;
      width: 70%;
      height: 20rem;
      transform: translate(0, 0);
  }

  &:hover {
    transform: translate(0, 100px);

    @media (min-width: 768px) {
      transform: translate(0, 0);
    }
  }

  &::after {
    text-align: center;
    padding: 1rem;
    background-color: rgb(var(--color-app-primary));
    content: "These are some of the technologies I have studied and used.";
    /* filter: drop-shadow(0px 2px rgba(130,130,130,1)); */
    /* box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75); */
    --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    position: absolute;
    display: flex;
    align-items: center;
    border: 2px solid rgb(var(--color-app-secondary), 0.3);
    border-radius: 10px;
    transition: transform 300ms;

    top: -50%;
    left: -5%;
    width: 110%;
    height: 15rem;
    transform: translate(0, 0);
    @media (min-width: 768px) {
      top: -5%;
      left: 0;
      width: 40%;
      height: 110%;
      transform: translate(-90%, 0);
    }
  }

  &:hover::after {
    transform: translate(0, -100px);

    @media (min-width: 768px) {
      transform: translate(-90%, 0);
    }
  }
`;

type TechCardProps = {
  className: string,
}

export default function TechCard({className}: TechCardProps) {
  return (
    <TransitionColor className={className}>
      <TitleHeader inverse text="Technology Stack" />
      <div className="flex items-center justify-center">
        <DoubleCard className="shadow-lg flex items-center justify-center">
          <div>
            <IconPill />

          </div>
        </DoubleCard>
      </div>

    </TransitionColor>
  );
}
