// #f772d4
// #ad6cf6
// import styled from '@emotion/styled';

// const Stop1 = styled.stop`
//   --color-gradient-primary: 247, 114, 212;
//   --color-gradient-secondary: 173, 108, 246;
//   stop-color: rgb(var(--color-gradient-primary));
// `;

// const Stop2 = styled.stop`
//   --color-gradient-primary: 247, 114, 212;
//   --color-gradient-secondary: 173, 108, 246;
//   stop-color: rgb(var(--color-gradient-secondary));
// `;

type IconProps = {
  size?: number,
  color?: string
}

export default function CloudMoon({
  size = 24,
  color = 'url(#CloudMoonGradient)',
  ...rest
}: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 590 512"
      preserveAspectRatio="xMidYMid meet"
      id="CloudMoonIcon"
      {...rest}
    >
      <defs>
        <linearGradient id="CloudMoonGradient" x1="0" y1="0" x2="1" y2="0" gradientTransform="rotate(45)">
          <stop offset="0" stopColor="#f772d4" />
          <stop offset="1" stopColor="#ad6cf6" />
        </linearGradient>
      </defs>
      <path fill="url(#CloudMoonGradient)" d="M342.8 352.7c5.7-9.6 9.2-20.7 9.2-32.7 0-35.3-28.7-64-64-64-17.2 0-32.8 6.9-44.3 17.9-16.3-29.6-47.5-49.9-83.7-49.9-53 0-96 43-96 96 0 2 .5 3.8.6 5.7C27.1 338.8 0 374.1 0 416c0 53 43 96 96 96h240c44.2 0 80-35.8 80-80 0-41.9-32.3-75.8-73.2-79.3zm222.5-54.3c-93.1 17.7-178.5-53.7-178.5-147.7 0-54.2 29-104 76.1-130.8 7.3-4.1 5.4-15.1-2.8-16.7C448.4 1.1 436.7 0 425 0 319.1 0 233.1 85.9 233.1 192c0 8.5.7 16.8 1.8 25 5.9 4.3 11.6 8.9 16.7 14.2 11.4-4.7 23.7-7.2 36.4-7.2 52.9 0 96 43.1 96 96 0 3.6-.2 7.2-.6 10.7 23.6 10.8 42.4 29.5 53.5 52.6 54.4-3.4 103.7-29.3 137.1-70.4 5.3-6.5-.5-16.1-8.7-14.5z" />

    </svg>
  );
};
