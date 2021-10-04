import FasIcon from '../../FasIcon';

type IconProps = {
  size?: number,
  color?: string,
  gradient?: boolean,
} & React.SVGAttributes<SVGElement>

export default function FramerMotion({
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
      <path d="M4 0h16v8h-8zm0 8h8l8 8H4zm0 8h8v8z" />
    </FasIcon>
  );
}
