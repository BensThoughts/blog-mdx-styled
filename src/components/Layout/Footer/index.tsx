import {
  Mail,
} from '@app/components/Icons';

import {
  Twitter,
  LinkedIn,
  Github,
  Facebook,
} from '@app/components/Icons/Brands';

import AnimatedLinkIcon from '@app/components/AnimatedLinkIcon';

type FooterProps = {
  className?: string;
}

export default function Footer({className}: FooterProps) {
  return (
    <div className={`flex flex-row justify-center items-center w-full bg-app-bg ${className}`}>
      <div className="mx-3">
        <AnimatedLinkIcon href="mailto:benjamin@bensthoughts.dev" aria-label="email me at benjamin@bensthoughts.dev">
          <Mail className="text-secondary" />
        </AnimatedLinkIcon>
      </div>
      <div className="mx-3">
        <AnimatedLinkIcon href="https://github.com/bensthoughts" aria-label="Github">
          <Github className="text-secondary" />
        </AnimatedLinkIcon>
      </div>
      <div className="mx-3">
        <AnimatedLinkIcon href="https://twitter.com/bensthoughts" aria-label="Twitter">
          <Twitter className="text-secondary" />
        </AnimatedLinkIcon>
      </div>
      <div className="mx-3">
        <AnimatedLinkIcon href="https://www.linkedin.com/in/benjaminblumenfeldjones" aria-label="LinkedIn">
          <LinkedIn className="text-secondary" />
        </AnimatedLinkIcon>
      </div>
      <div className="mx-3">
        <AnimatedLinkIcon href="https://www.facebook.com/benjamin.blumenfeldjones.9" aria-label="Facebook">
          <Facebook className="text-secondary" />
        </AnimatedLinkIcon>
      </div>
    </div>
  );
}
