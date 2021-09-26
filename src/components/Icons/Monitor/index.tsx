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

export default function Monitor({
  size = 24,
  color = 'url(#MonitorGradient)',
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
      {...rest}
    >
      <defs>
        <linearGradient id="MonitorGradient" x1="0" y1="0" x2="1" y2="0" gradientTransform="rotate(45)">
          <Stop1 offset="0" />
          <Stop2 offset="1" />
        </linearGradient>
      </defs>
      <rect x={2} y={3} width={20} height={14} rx={2} ry={2} />
      <path d="M8 21h8M12 17v4" />
    </svg>
  );
}
