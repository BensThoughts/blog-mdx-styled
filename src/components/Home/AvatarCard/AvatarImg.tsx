import styled from '@emotion/styled';

const TransitionColor = styled.div`
  transition-property: background, color;
  transition-duration: 300ms;
  transition-timing-function: ease-in-out;
  will-change: background, color;
`;

const ImageWrapper = styled.div`
  width: 15rem;
  height: 15rem;
  border-radius: 0.125rem;
  overflow: hidden;
`;

const ImageBackground = styled.div`
  width: 15rem;
  height: 15rem;
  position: relative;
  /* border: 2px solid rgba(var(--color-app-accent), var(--tw-border-opacity)); */
  /* outline-offset: 20px; */
  &::before {
    top: 0px;
    left: 0px;
    background-color: rgb(var(--color-bg-primary));
    mix-blend-mode: screen;
  }
  &::after {
    content: "";
    display: block;
    position: absolute;
    border-radius: 0.125rem;
    top: 10px;
    left: 10px;
    width: 100%;
    height: 100%;
    border: 2px solid rgba(var(--color-app-secondary), var(--tw-border-opacity));
    transform: rotate(-20deg);
    transition: transform 250ms;

    /* animation-play-state: paused; */
    /* border-radius: 9999px; */

    z-index: -1;
  }
  &:hover::after {
    transform: rotate(0deg);
    /* animation-play-state: running; */
    animation: spinBorder 500ms;
  }

  @keyframes spinBorder {
    0% {
      transform: rotate(-20deg);
    }

    50% {
      transform: rotate(45deg);
    }

  }
`;

type AvatarImgProps = {
  imgSrc: string;
  className?: string;
}

export default function AvatarImg({imgSrc, className}: AvatarImgProps) {
  return (
    <TransitionColor className={`z-20 bg-transparent mt-10 md:mt-0 ${className}`}>
      <ImageBackground>
        <ImageWrapper>
          {/* <picture>
          <source srcSet={imgSrc} /> */}
          <img src={imgSrc} alt="Bust Image" className="relative"/>
          {/* </picture> */}
        </ImageWrapper>
      </ImageBackground>
    </TransitionColor>
  );
}
