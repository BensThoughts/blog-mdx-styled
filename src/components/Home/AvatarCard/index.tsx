import styled from '@emotion/styled';
import AvatarImg from './AvatarImg';
import AboutBox from './AboutBox';

const TransitionColor = styled.div`
  transition-property: background, color;
  transition-duration: 300ms;
  transition-timing-function: ease-in-out;
  will-change: background, color;
`;

const ContentWrap = styled.div`
  padding-bottom: 40px;
  position: relative;
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

  &::after {
    content: '';
    z-index: -1;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-image: url(https://res.cloudinary.com/bensthoughts/image/upload/v1633233841/blog/home/astronaut-helmet_nglf3c.svg);
    opacity: 0.2;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    /* transform-origin: center; */
    /* transform:  translateX(0) translateY(-300px) rotate(-45deg); */
    display: none;
    backdrop-filter: var(--app-backdrop-filter);

    @media (min-width: 768px) { 
      transform: scale(1) translateX(220px) translateY(75px) rotate(45deg) ;
      display: block;
    }
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


export default function AvatarCard({...rest}) {
  // const bustImgSrc = 'https://res.cloudinary.com/bensthoughts/image/upload/q_auto/v1631126786/blog/home/bust_clean_xugkq8.jpg';
  const bustImgSrc = 'https://res.cloudinary.com/bensthoughts/image/upload/q_auto/v1632153114/blog/home/bust_blue_llboi6.jpg';
  return (
    <TransitionColor {...rest} className="w-full">
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
