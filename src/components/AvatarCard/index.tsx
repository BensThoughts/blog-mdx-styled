import styled from '@emotion/styled';
import AvatarImg from './AvatarImg';
import EnterAnimation from '@app/components/Transitions/EnterAnimation';


const TransitionColor = styled(EnterAnimation)`
  transition-property: background, color;
  transition-duration: 300ms;
  transition-timing-function: ease-in-out;
  will-change: background, color;
`;

const ContentWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  justify-items: center;
  row-gap: 2rem;
  @media (min-width: 768px) {
    grid-template-columns: 3fr 2fr;
    grid-template-rows: 1fr;
    justify-items: center;
  }
`;

const ImagePlacer = styled.div`
  grid-column: 1;
  @media (min-width: 768px) {
    grid-column: 2;
  }
`;

const AboutPlacer = styled.div`
  grid-column: 1;
`;

import H1 from '@app/components/mdx/H1';
import TitleHeader from './TitleHeader';
import AboutBox from './AboutBox';

export default function AvatarCard({...rest}) {
  const bustImgSrc = "https://res.cloudinary.com/bensthoughts/image/upload/q_auto/v1631126786/blog/home/bust_clean_xugkq8.jpg";
  return (
      <TransitionColor {...rest} className="w-full">
        <TitleHeader text="About Me" />
        <ContentWrap className="md">
          <AboutPlacer>
            <AboutBox />
          </AboutPlacer>
          <ImagePlacer>
            <AvatarImg imgSrc={bustImgSrc} />
          </ImagePlacer>
        </ContentWrap>
      </TransitionColor>
  );
}