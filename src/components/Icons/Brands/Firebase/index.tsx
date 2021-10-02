import FasIcon from '../../FasIcon';

type IconProps = {
  size?: number,
  color?: string,
  gradient?: boolean,
} & React.SVGAttributes<SVGElement>

export default function Firebase({
  size = 24,
  color,
  gradient,
  ...rest
}: IconProps) {
  return (
    <FasIcon
      size={size}
      fill={color}
      gradient={gradient}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M3.89 15.672L6.255.461A.542.542 0 017.27.288l2.543 4.771zm16.794 3.692l-2.25-14a.54.54 0 00-.919-.295L3.316 19.365l7.856 4.427a1.621 1.621 0 001.588 0zM14.3 7.147l-1.82-3.482a.542.542 0 00-.96 0L3.53 17.984z"/>
    </FasIcon>
  );
}