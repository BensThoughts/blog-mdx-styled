import styled from '@emotion/styled';
import {motion} from 'framer-motion';

const MyPath = styled.path`
  opacity: 0;
  animation: blinking 2s infinite;
  
  @keyframes blinking {
    50% {
      opacity: 1;
    }
  }
`;

const variants = {
  hidden: {
    pathLength: 0,
    fill: 'rgba(55, 113, 200, 0)',
  },
  visible: {
    pathLength: 1,
    fill: 'rgba(55, 113, 200, 0.6)',
  },
};

export default function SVGTerminal({...props}: React.SVGAttributes<HTMLOrSVGElement>) {
  return (
    <svg
      width={70}
      height={70}
      viewBox="0 0 42.708 31.554"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <path id="prefix__a" d="M44.374 332.007h103.761v60.196H44.374z" />
      </defs>
      <motion.path
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{
          default: {duration: 2, ease: 'easeInOut'},
          fill: {duration: 2, ease: [1, 0, 0.8, 1]},
        }}
        fillRule="evenodd"
        stroke="#000"
        strokeWidth={0.344}
        d="M.264.265h42.18V31.29H.263z"
      />
      <MyPath fill="#00112b" d="M13.064 2.546h5.45v12.17h-5.45z" />
      <text
        transform="matrix(.23925 0 0 .56856 -8.694 -193.13)"
        fontWeight={400}
        fontSize={40}
        fontFamily="sans-serif"
        stroke="#000"
        strokeWidth={0.717}
      >
        <tspan x={44.373} y={367.398}>
          &gt;
        </tspan>
      </text>
    </svg>
  );
}
