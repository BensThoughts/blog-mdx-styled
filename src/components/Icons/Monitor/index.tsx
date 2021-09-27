// #f772d4
// #ad6cf6
import FeatherIcon from '../FeatherIcon';

type IconProps = {
  size?: number,
  color?: string,
  gradient?: boolean,
} & React.SVGAttributes<SVGElement>

export default function Monitor({
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
      <rect x={2} y={3} width={20} height={14} rx={2} ry={2} />
      <path d="M8 21h8M12 17v4" />
    </FeatherIcon>
  );
}
