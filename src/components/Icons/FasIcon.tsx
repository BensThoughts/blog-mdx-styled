import {forwardRef} from 'react';
import {useUID} from 'react-uid';

type IconProps = {
  size?: number,
  gradient?: boolean,
} & React.SVGAttributes<SVGElement>

const FasIcon = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  gradient = false,
  fill,
  viewBox = '0 0 512 512',
  children,
  ...rest
}: IconProps, ref) => {
  const UUID = useUID();

  if (!gradient && !fill) {
    fill = 'currentColor';
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={fill ? fill : `url(#${UUID})`}
      viewBox={viewBox}
      preserveAspectRatio="xMidYMid meet"
      ref={ref}
      {...rest}
    >
      {gradient && <defs>
        <linearGradient id={UUID} x1="0" y1="0" x2="1" y2="0" gradientTransform="rotate(45)">
          <stop className="[stop-color:rgb(var(--color-gradient-primary))]" offset="0" />
          <stop className='[stop-color:rgb(var(--color-gradient-secondary))]' offset="1" />
        </linearGradient>
      </defs>}

      {children}
    </svg>
  );
});

FasIcon.displayName = 'FasIcon';

export default FasIcon;
