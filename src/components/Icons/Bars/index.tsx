// import {forwardRef} from 'react';
// import FeatherIcon from '../FeatherIcon';

import styled from '@emotion/styled';

const Stop1 = styled.stop`
  stop-color: rgb(var(--color-gradient-primary));
`;

const Stop2 = styled.stop`
  stop-color: rgb(var(--color-gradient-secondary));
`;

type IconProps = {
  size?: number,
  color?: string
} & React.SVGAttributes<SVGElement>

export default function Bars({
  size = 24,
  color = 'url(#MenuGradient)',
  ...rest
}: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
      preserveAspectRatio="xMidYMid meet"
      // ref={ref}
      // id={id}
      {...rest}
    >
      <defs>
        <linearGradient id="MenuGradient" x1="0" y1="0" x2="1" y2="0" gradientTransform="rotate(45)">
          <Stop1 offset="0" />
          <Stop2 offset="1" />
        </linearGradient>
      </defs>
      <path d="M3 12h18M3 6h18M3 18h18" />
    </svg>
  );
}
