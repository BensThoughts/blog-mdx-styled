import styled from '@emotion/styled';

import {
  CloudMoon,
  Copy,
  Mail,
  Monitor,
  Sun,
  AstronautHelmet,
} from '@app/components/Icons';
import {
  Facebook,
  Github,
  LinkedIn,
  Twitter,
} from '@app/components/Icons/Brands';
import MaxWidthWrapper from '@app/components/MaxWidthWrapper';
import AnimatedLinkIcon from '@app/components/AnimatedLinkIcon';
import Folder from '@app/components/Icons/Folder';

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


export default function PlaygroundPage() {
  return (
    <MaxWidthWrapper>
      <Icon className="w-6 h-6">
        <Twitter />
      </Icon>
      <Facebook size={50} gradient />
      <Github />
      <LinkedIn />
      <Twitter />
      <Mail />
      <Monitor size={60} color="currentColor" className="text-icon-secondary" />
      <CloudMoon size={50} color="red" />
      <CloudMoon size={50} gradient/>
      <CloudMoon className="text-icon-secondary" />
      <CloudMoon />
      <Sun />
      <Copy className="text-icon-secondary" />
      <Copy gradient />
      <Copy />
      <AnimatedLinkIcon href="https://google.com">
        <Facebook />
      </AnimatedLinkIcon>
      <AstronautHelmet size={50} gradient />

      <Folder color="red" />
    </MaxWidthWrapper>
  );
}
