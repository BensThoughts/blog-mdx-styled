
import { Monitor } from 'react-feather';

type LogoProps = React.HTMLAttributes<HTMLSpanElement>;

export default function Logo({
  className
}: LogoProps) {
  return (
    <span className={className}>
      <Monitor className={`text-icon-secondary ${className}`} />
    </span>
  );
}