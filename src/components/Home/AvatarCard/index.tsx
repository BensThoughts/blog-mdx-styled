import styled from '@emotion/styled';
import AvatarImg from './AvatarImg';
// import AboutBox from './AboutBox';
import BorderedBox from '@app/components/BorderedBox';

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
          <BorderedBox>
            <p>Hi,<br /></p>
            <p className="my-4 leading-7">
        &nbsp;&nbsp;&nbsp;&nbsp;<strong>My name is Ben. I am a self-taught software developer with a passion for learning.</strong> My path in life has given
        me a variety of unique experiences. I have done everything from starting and operating a vertically integrated essential oil company to
        creating my own cloud-based email organizing web application.
            </p>
            <p className="my-4 leading-7">
        &nbsp;&nbsp;&nbsp;&nbsp;<strong>I currently spend 20-40 hours a week outside of my full time job studying computer science and learning to develop
        web applications</strong>. As someone that loves learning, programming, and helping people,
        the next logical step for me is to parlay my software development skills into a career. I&apos;m a dreamer that wants to work on massively scalable, human-centric, applications that enhance people&apos;s lives.
            </p>
          </BorderedBox>
        </AboutPlacer>
        <ImagePlacer>
          <AvatarImg />
        </ImagePlacer>
      </ContentWrap>
    </TransitionColor>
  );
}
