export default function Temp() {
  return (
    <div></div>
  );
}
// import {forwardRef} from 'react';
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

// type IconProps = {
//   size?: number,
//   color?: string
// } & React.SVGAttributes<SVGElement>

// const FeatherIcon = forwardRef<SVGSVGElement, IconProps>(({
//   size = 24,
//   color = 'url(#gradient)',
//   children,
//   viewBox = '0 0 24 24',
//   id,
//   ...rest
// }: IconProps, ref) => {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width={size}
//       height={size}
//       fill="none"
//       stroke={color}
//       strokeWidth={2}
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       viewBox={viewBox}
//       preserveAspectRatio="xMidYMid meet"
//       ref={ref}
//       id={id}
//       {...rest}
//     >
//       <defs>
//         <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="0" gradientTransform="rotate(45)">
//           <Stop1 offset="0" />
//           <Stop2 offset="1" />
//         </linearGradient>
//       </defs>
//       {children}
//     </svg>
//   );
// });

// FeatherIcon.displayName = 'FeatherIcon';

// export default FeatherIcon;
