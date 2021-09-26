import styled from '@emotion/styled';
// import {useState} from 'react';

const Circle = styled.circle`
  stroke: black;
  fill: transparent;
  transform: scale(1);
`;

const Line = styled.line`
  stroke: black;
  transform: rotate(0deg) translateY(0px);
`;

export default function Magnify({...props}) {
  // const [lineLength, setLineLength] = useState(300);
  // const [viewBoxX, setViewBoxX] = useState(300);
  return (
    <svg
      className="magnifier"
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${300} 34`}
      {...props}
    >
      <Circle className="cls-1" cx={12.1} cy={12.1} r={11.6} />
      <Line className="cls-1" x1="20.5" y1="20" x2={300} y2="32.6"/>
    </svg>
  );
}
