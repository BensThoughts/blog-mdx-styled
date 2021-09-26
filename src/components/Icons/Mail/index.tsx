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

export default function Mail({
  size = 24,
  color = 'url(#MailGradient)',
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
        <linearGradient id="MailGradient" x1="0" y1="0" x2="1" y2="0" gradientTransform="rotate(45)">
          <Stop1 offset="0" />
          <Stop2 offset="1" />
        </linearGradient>
      </defs>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}
