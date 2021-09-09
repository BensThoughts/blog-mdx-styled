import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TransitionColor from '@app/components/Transitions/TransitionColor';
import SocialIcon from './SocialIcon';

const Container = styled.footer`
  transition-property: background, color;
  transition-duration: 300ms;
  transition-timing-function: ease-in-out;
  will-change: background, color;
`;

const IconContainer = styled(FontAwesomeIcon)`
  transition-property: background, color;
  transition-duration: 300ms;
  transition-timing-function: ease-in-out;
  will-change: background, color;
`;

type FooterProps = {
  className?: string;
}

export default function Footer({ className }: FooterProps) {
  return (
    <TransitionColor className={`bg-primary w-full flex flex-row justify-center items-center ${className}`}>
      <div className="mx-3">
        <SocialIcon iconName="github" url="https://github.com/bensthoughts" />
      </div>
      <div className="mx-3">
        <SocialIcon iconName="twitter" url="https://twitter.com/bensthoughts" />
      </div>
      <div className="mx-3">
        <SocialIcon iconName="linkedin" url="https://www.linkedin.com/in/benjaminblumenfeldjones" className="mx-1" />
      </div>
      <div className="mx-3">
        <SocialIcon iconName="facebook" url="https://www.facebook.com/benjamin.blumenfeldjones.9" />
      </div>
    </TransitionColor>
  );
}