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
    /* background-color: rgba(var(--color-text-primary), 0.2); */
    /* -webkit-mask-image: url(https://res.cloudinary.com/bensthoughts/image/upload/v1633233841/blog/home/astronaut-helmet_nglf3c.svg);
    -webkit-mask-size: contain;
    -webkit-mask-position: center;
    -webkit-mask-repeat: no-repeat; */
    /* mask-image: url(https://res.cloudinary.com/bensthoughts/image/upload/v1633233841/blog/home/astronaut-helmet_nglf3c.svg);
    mask-size: contain;
    mask-position: center;
    mask-repeat: no-repeat; */
    /* background-image: url(https://res.cloudinary.com/bensthoughts/image/upload/v1633233841/blog/home/astronaut-helmet_nglf3c.svg); */
    /* background-repeat: no-repeat;
    background-size: contain;
    background-position: center; */
    /* transform-origin: center; */
    /* transform:  translateX(0) translateY(-300px) rotate(-45deg); */
    display: none;
    /* backdrop-filter: var(--app-backdrop-filter); */

    @media (min-width: 768px) { 
      transform: scale(0.5) translateX(170px) translateY(200px) rotate(0deg) ;
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
  return (
    <TransitionColor {...rest} className="w-full">
      <ContentWrap className="md">
        <AboutPlacer>
          <AboutBox />
        </AboutPlacer>
        <ImagePlacer>
          <AvatarImg />
        </ImagePlacer>
      </ContentWrap>
    </TransitionColor>
  );
}
