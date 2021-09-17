import {
  Twitter,
  Facebook,
  Linkedin,
  GitHub,
} from 'react-feather';

import TransitionColor from '@app/components/Transitions/TransitionColor';
// import SocialIcon from './SocialIcon';
import AnimatedLinkIcon from '@app/components/AnimatedLinkIcon';

// const Container = styled.footer`
//   transition-property: background, color;
//   transition-duration: 300ms;
//   transition-timing-function: ease-in-out;
//   will-change: background, color;
// `;

// const IconContainer = styled(FontAwesomeIcon)`
//   transition-property: background, color;
//   transition-duration: 300ms;
//   transition-timing-function: ease-in-out;
//   will-change: background, color;
// `;

type FooterProps = {
  className?: string;
}

export default function Footer({className}: FooterProps) {
  return (
    <TransitionColor className={`bg-primary w-full flex flex-row justify-center items-center ${className}`}>
      <div className="mx-3">
        <AnimatedLinkIcon href="https://github.com/bensthoughts">
          <GitHub className="text-secondary" />
        </AnimatedLinkIcon>
      </div>
      <div className="mx-3">
        <AnimatedLinkIcon href="https://twitter.com/bensthoughts">
          <Twitter className="text-secondary" />
        </AnimatedLinkIcon>
        {/* <SocialIcon iconName="twitter" url="https://twitter.com/bensthoughts" /> */}
      </div>
      <div className="mx-3">
        <AnimatedLinkIcon href="https://www.linkedin.com/in/benjaminblumenfeldjones">
          <Linkedin className="text-secondary" />
        </AnimatedLinkIcon>
      </div>
      <div className="mx-3">
        <AnimatedLinkIcon href="https://www.facebook.com/benjamin.blumenfeldjones.9">
          <Facebook className="text-secondary" />
        </AnimatedLinkIcon>
      </div>
    </TransitionColor>
  );
}
