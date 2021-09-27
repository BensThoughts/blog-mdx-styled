import {forwardRef} from 'react';
import styled from '@emotion/styled';
import {useUID} from 'react-uid';

const Stop1 = styled.stop`
  stop-color: rgb(var(--color-gradient-primary));
`;

const Stop2 = styled.stop`
  stop-color: rgb(var(--color-gradient-secondary));
`;

type IconProps = {
  size?: number,
  // stroke?: string,
  // fill?: string,
  gradient?: boolean,
} & React.SVGAttributes<SVGElement>

const FeatherIcon = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  gradient = false,
  stroke,
  fill,
  viewBox = '0 0 24 24',
  children,
  ...rest
}: IconProps, ref) => {
  const UUID = useUID();

  if (!gradient && !stroke) {
    stroke = 'currentColor';
  }

  if (!gradient && !fill) {
    fill = 'currentColor';
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={fill ? fill : `url(#${UUID})`}
      stroke={stroke ? stroke : `url(#${UUID})` }
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox={viewBox}
      preserveAspectRatio="xMidYMid meet"
      ref={ref}
      {...rest}
    >
      {gradient &&
        <defs>
          <linearGradient id={UUID} x1="0" y1="0" x2="1" y2="0">
            <Stop1 offset="0.1" />
            <Stop2 offset="1" />
          </linearGradient>
        </defs>
      }
      {children}
    </svg>
  );
});

FeatherIcon.displayName = 'FeatherIcon';

export default FeatherIcon;
