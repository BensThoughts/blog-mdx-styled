import {Monitor} from '@app/components/Icons';

type LogoProps = React.HTMLAttributes<HTMLSpanElement>;

export default function Logo({
  className,
}: LogoProps) {
  return (
    <span className={className}>
      <Monitor className="text-icon-secondary" />
    </span>
  );
}
