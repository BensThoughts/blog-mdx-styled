import styled from '@emotion/styled';

import {
  CloudMoon,
  Copy,
  Facebook,
  Github,
  LinkedIn,
  Mail,
  Monitor,
  Sun,
  Twitter,
} from '@app/components/Icons';
import MaxWidthWrapper from '@app/components/MaxWidthWrapper';

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
      <Facebook size={50} />
      <Github />
      <LinkedIn />
      <Twitter />
      <Mail />
      <Monitor size={60} color="currentColor" className="text-icon-secondary" />
      <CloudMoon size={50} color="red" />
      <CloudMoon size={50} />
      <CloudMoon />
      <Sun />
      <Copy color="currentColor" className="text-icon-secondary" />
    </MaxWidthWrapper>
  );
}
