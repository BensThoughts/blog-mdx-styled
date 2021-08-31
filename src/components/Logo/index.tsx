import Image from 'next/image';

type LogoProps = React.HTMLAttributes<HTMLSpanElement>;

export default function Logo({
  className
}: LogoProps) {
  return (
    <span className={className}>
      <Image src="/assets/logo/logo.png" alt="logo" width="25" height="25" className="inline-block" />
    </span>
  );
}