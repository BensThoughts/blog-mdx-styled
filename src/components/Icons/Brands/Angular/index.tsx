// #f772d4
// #ad6cf6
import FasIcon from '../../FasIcon';

type IconProps = {
  size?: number,
  color?: string,
  gradient?: boolean,
} & React.SVGAttributes<SVGElement>

export default function Angular({
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
      <path d="M9.931 12.645h4.138l-2.07-4.908m0-7.737L.68 3.982l1.726 14.771L12 24l9.596-5.242L23.32 3.984 11.999.001zm7.064 18.31h-2.638l-1.422-3.503H8.996l-1.422 3.504h-2.64L12 2.65z" />

    </FasIcon>
  );
};
