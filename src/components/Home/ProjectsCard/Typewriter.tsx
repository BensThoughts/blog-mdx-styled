import {useEffect, useState} from 'react';
// wordsArr = ['I, ', 'am', ' a', ' developer']
// import styled from '@emotion/styled';
import {Code} from '@app/components/mdx';

// const Cursor = styled.div<{
//   blinking?: boolean
// }>`
//   opacity: 0;
//   border: 1px solid black;
//   width: 10px;
//   height: 20px;
//   background-color: black;
//   animation: blinkingCursor 1s infinite;
//   animation-iteration-count: ${(props) => props.blinking ? 'infinite' : 1};
//   @keyframes blinkingCursor {
//     50% {
//       opacity: 1;
//     }
//   }
// `;


const words2 =
`import test from 'testPackage'

export default function Nothing() {
  return (
    <div></div>
  );
}
`;

export default function Typewriter({words = `I am a developer`}) {
  const wordsArr = words2.split('');
  const [index, setIndex] = useState(0);
  // const [blink, setBlink] = useState(true);
  // console.log(blink);
  // Typewriter
  useEffect(() => {
    if (index === wordsArr.length) {
      // setBlink(false);
      return;
    }

    const timeout = setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, Math.max(Math.floor(Math.random() * 350)));

    return () => clearTimeout(timeout);
  }, [index, wordsArr]);

  // Blinker
  // useEffect(() => {
  //   if (blink) {
  //     setTimeout(() => {
  //       setBlink((prev) => !prev);
  //     }, 500);
  //   }
  // }, [blink]);

  console.log(wordsArr.slice(0, index).join(''));
  return (
    <div className="flex flex-row items-center justify-center">
      <Code className="jsx:ZeroInbox">
        {`${wordsArr.slice(0, index).join('')}`}
      </Code>
      {/* <Cursor blinking={blink} /> */}
    </div>
  );
}
