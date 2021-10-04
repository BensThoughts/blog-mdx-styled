import FasIcon from '../../FasIcon';

type IconProps = {
  size?: number,
  color?: string,
  gradient?: boolean,
} & React.SVGAttributes<SVGElement>

export default function GoogleTagManager({
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
      <path d="M12.003 0a3 3 0 00-2.121 5.121l6.865 6.865-4.446 4.541 1.745 1.836a3.432 3.432 0 01.7.739l.012.011-.001.002a3.432 3.432 0 01.609 1.953 3.432 3.432 0 01-.09.78l7.75-7.647c.031-.029.067-.05.098-.08.023-.023.038-.052.06-.076a2.994 2.994 0 00-.06-4.166l-9-9A2.99 2.99 0 0012.003 0zM8.63 2.133L.88 9.809a2.998 2.998 0 000 4.238l7.7 7.75a3.432 3.432 0 01-.077-.729 3.432 3.432 0 013.431-3.431 3.432 3.432 0 01.826.101l-5.523-5.81 4.371-4.373-2.08-2.08c-.903-.904-1.193-2.183-.898-3.342zm3.304 16.004a2.932 2.932 0 00-2.931 2.931A2.932 2.932 0 0011.934 24a2.932 2.932 0 002.932-2.932 2.932 2.932 0 00-2.932-2.931z" />
    </FasIcon>
  );
}
