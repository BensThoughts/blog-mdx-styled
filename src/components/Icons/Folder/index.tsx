// #f772d4
// #ad6cf6
import FeatherIcon from '../FeatherIcon';

type IconProps = {
  size?: number,
  color?: string,
  gradient?: boolean,
  fillSecondary?: string,
  fillPrimary?: string,
} & React.SVGAttributes<SVGElement>

export default function Folder({
  size = 24,
  color,
  gradient,
  fillSecondary = '#FFC36E',
  fillPrimary = '#ffd782',
  fill = 'none',
  stroke = 'transparent',
  ...rest
}: IconProps) {
  return (
    <FeatherIcon
      size={size}
      stroke={stroke}
      fill={fill}
      gradient={gradient}
      viewBox="0 0 512 512"
      {...rest}
    >
      <path
        d="M183.295 123.586H55.05a17.654 17.654 0 01-15.791-9.76l-12.776-25.55 12.776-25.55a17.652 17.652 0 0115.791-9.76h128.246a17.654 17.654 0 0115.791 9.76l12.775 25.55-12.776 25.55a17.652 17.652 0 01-15.791 9.76z"
        fill={fillSecondary}
      />
      <path
        d="M485.517 70.621H26.483a8.829 8.829 0 00-8.828 8.828v44.138h476.69V79.448a8.828 8.828 0 00-8.828-8.827z"
        fill="#eff2fa"
      />
      <path fill="#e1e6f2" d="M17.655 105.931h476.69v17.655H17.655z" />
      <path
        d="M494.345 88.276H217.318a8.827 8.827 0 00-7.895 4.879l-10.336 20.671a17.655 17.655 0 01-15.791 9.76H55.05a17.654 17.654 0 01-15.791-9.76L28.922 93.155a8.827 8.827 0 00-7.895-4.879h-3.372C7.904 88.276 0 96.18 0 105.931v335.448c0 9.751 7.904 17.655 17.655 17.655h476.69c9.751 0 17.655-7.904 17.655-17.655V105.931c0-9.751-7.904-17.655-17.655-17.655z"
        fill={fillPrimary}
      />
      <path
        d="M485.517 441.379H26.483a8.829 8.829 0 010-17.656h459.034a8.828 8.828 0 010 17.656z"
        fill={fillSecondary}
      />
      <path
        d="M326.621 220.69h132.414a8.829 8.829 0 008.828-8.828v-70.621a8.829 8.829 0 00-8.828-8.828H326.621a8.829 8.829 0 00-8.828 8.828v70.621a8.829 8.829 0 008.828 8.828z"
        fill="#eff2fa"
      />
      <path
        d="M441.379 167.724h-97.103a8.829 8.829 0 010-17.656h97.103a8.828 8.828 0 010 17.656z"
        fill="#c7cfe2"
      />
      <path
        d="M441.379 203.034h-97.103a8.829 8.829 0 010-17.656h97.103a8.828 8.828 0 010 17.656z"
        fill="#d7deed"
      />
    </FeatherIcon>
  );
}
