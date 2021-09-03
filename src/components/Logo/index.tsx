// import Image from 'next/image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type LogoProps = React.HTMLAttributes<HTMLSpanElement>;

export default function Logo({
  className
}: LogoProps) {
  return (
    <span className={className}>
      <FontAwesomeIcon icon={['fas', 'desktop']} size="lg" className="text-icon-secondary" />
      {/* <img src="/assets/logo/logo.png" alt="logo" width="25" height="25" className="object-cover inline-block" /> */}
    </span>
  );
}