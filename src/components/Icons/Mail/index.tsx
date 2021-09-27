// #f772d4
// #ad6cf6
import FeatherIcon from '../FeatherIcon';

type IconProps = {
  size?: number,
  color?: string,
  gradient?: boolean,
} & React.SVGAttributes<SVGElement>

export default function Mail({
  size = 24,
  color,
  gradient,
  fill = 'none',
  ...rest
}: IconProps) {
  return (
    <FeatherIcon
      size={size}
      stroke={color}
      fill={fill}
      gradient={gradient}
      {...rest}
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </FeatherIcon>
  );
}
