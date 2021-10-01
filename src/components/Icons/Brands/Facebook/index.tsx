// #f772d4
// #ad6cf6
import FeatherIcon from '../../FeatherIcon';

type IconProps = {
  size?: number,
  color?: string,
  fill?: string,
  gradient?: boolean,
} & React.SVGAttributes<SVGElement>

export default function Facebook({
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
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </FeatherIcon>
  );
}
