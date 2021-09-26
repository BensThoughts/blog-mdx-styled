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

export default function LinkedIn({
  size = 24,
  color = 'url(#LinkedInGradient)',
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
        <linearGradient id="LinkedInGradient" x1="0" y1="0" x2="1" y2="0" gradientTransform="rotate(45)">
          <Stop1 offset="0" />
          <Stop2 offset="1" />
        </linearGradient>
      </defs>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
