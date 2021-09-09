import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TransitionColor from '@app/components/Transitions/TransitionColor';

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
        <a href="https://github.com/bensthoughts" target="_blank" rel="noreferrer">
          <TransitionColor className="rounded-xl shadow-xl border-2 border-icon-primary border-opacity-50 border-solid bg-primary bg-opacity-50">
            <IconContainer icon={['fab', 'github']} size="3x" className="p-2 rounded-full text-icon-secondary" />
          </TransitionColor>
        </a>
      </div>
      <div className="mx-3">
        <a href="https://twitter.com/bensthoughts" target="_blank" rel="noreferrer">
          <TransitionColor className="rounded-xl shadow-xl border-2 border-icon-primary border-opacity-50 border-solid bg-primary bg-opacity-50">
            <IconContainer icon={['fab', 'twitter']} size="3x" className="p-2 rounded-full text-icon-secondary" />
          </TransitionColor>
        </a>
      </div>

      <div className="mx-3">
        <a href="https://www.linkedin.com/in/benjaminblumenfeldjones" target="_blank" rel="noreferrer">
          <TransitionColor className="rounded-xl shadow-xl border-2 border-icon-primary border-opacity-50 border-solid bg-primary bg-opacity-50">
            <IconContainer icon={['fab', 'linkedin']} size="3x" className="p-2 mx-1 rounded-full text-icon-secondary" />
          </TransitionColor>
        </a>
      </div>
      <div className="mx-3">
        <a href="https://www.facebook.com/benjamin.blumenfeldjones.9" target="_blank" rel="noreferrer">
          <TransitionColor className="rounded-xl shadow-xl border-2 border-icon-primary border-opacity-50 border-solid bg-primary bg-opacity-50">
            <IconContainer icon={['fab', 'facebook']} size="3x" className="p-2 rounded-full text-icon-secondary" />
          </TransitionColor>
        </a>
      </div>

    </TransitionColor>
  );
}