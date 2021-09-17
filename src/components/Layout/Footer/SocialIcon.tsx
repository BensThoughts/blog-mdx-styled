import styled from '@emotion/styled';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {IconName} from '@fortawesome/fontawesome-common-types';

import TransitionColor from '@app/components/Transitions/TransitionColor';

const IconContainer = styled(FontAwesomeIcon)`
  transition-property: background, color;
  transition-duration: 300ms;
  transition-timing-function: ease-in-out;
  will-change: background, color;
`;

type SocialIconProps = {
  iconName: IconName;
  url: string;
  className?: string;
}

export default function SocialIcon({iconName, url, className = ''}: SocialIconProps) {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      <TransitionColor className="rounded-xl shadow-xl border-2 border-icon-primary border-opacity-50 border-solid bg-primary bg-opacity-50">
        <IconContainer icon={['fab', iconName]} size="3x" className={`p-2 rounded-full text-icon-secondary ${className}`} />
      </TransitionColor>
    </a>
  );
}
