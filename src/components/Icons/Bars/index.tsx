// #f772d4
// #ad6cf6
import FeatherIcon from '../FeatherIcon';

type IconProps = {
  size?: number,
  color?: string
} & React.SVGAttributes<SVGElement>

export default function Bars({
  size = 24,
  color,
  fill = 'none',
  ...rest
}: IconProps) {
  return (
    <FeatherIcon size={size} stroke={color} fill={fill} {...rest}>
      <path d="M3 12h18M3 6h18M3 18h18" />
    </FeatherIcon>
  );
}
