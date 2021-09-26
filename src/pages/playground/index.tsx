import Twitter from '@app/components/Icons/Twitter';
import Github from '@app/components/Icons/Github';
import Facebook from '@app/components/Icons/Facebook';
import Mail from '@app/components/Icons/Mail';
import Monitor from '@app/components/Icons/Monitor';
import LinkedIn from '@app/components/Icons/LinkedIn';
import CloudMoon from '@app/components/Icons/CloudMoon';
import Sun from '@app/components/Icons/Sun';
import styled from '@emotion/styled';

const Icon = styled.div`
  stroke: url('#linear');
  transform: rotate(0deg);


  &:hover {
    animation-name: spin;
    animation-duration: 1s;
    animation-iteration-count: 1;
  }

  @keyframes spin {
    50% {
      transform: rotate(45deg);
    }
  }
`;

// #f772d4
// #ad6cf6


import MaxWidthWrapper from '@app/components/MaxWidthWrapper';
import {useEffect, useRef} from 'react';
'line-height:1.25;shape-inside:url(#rect13319);white-space:pre';
export default function AboutPage() {
  const testRef = useRef();

  useEffect(() => {
    if (testRef) {
      console.log(testRef);
    }
  });

  return (
    <MaxWidthWrapper>
      <Icon className="w-6 h-6">
        <Twitter />
      </Icon>
      <Facebook size={50} />
      <Github />
      <LinkedIn />
      <Twitter />
      <Mail />
      <Monitor size={60} />
      <CloudMoon size={50} color="red" />
      <CloudMoon size={50} />
      <CloudMoon />
      <Sun />
    </MaxWidthWrapper>
  );
}
