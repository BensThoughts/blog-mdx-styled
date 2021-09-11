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
  position: relative;
  /* border: 2px solid rgba(var(--color-app-accent), var(--tw-border-opacity)); */
  /* outline-offset: 20px; */
  &:before {
    top: 0px;
    left: 0px;
    background-color: rgb(var(--color-bg-primary));
    mix-blend-mode: screen;
  }
  &:after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border: 2px solid rgba(var(--color-app-secondary), var(--tw-border-opacity));
    /* border-radius: 9999px; */
    top: 20px;
    left: 20px;
    z-index: -1;
  }
`;

type AvatarImgProps = {
  imgSrc: string;
  className?: string;
}

export default function AvatarImg({ imgSrc, className }: AvatarImgProps) {
  return (
    <TransitionColor className={`z-20 bg-transparent ${className}`}>
      <ImageWrapper>
        <picture>
          <source srcSet={imgSrc} />
          <img src={imgSrc} alt="Bust Image" className="relative"/>
        </picture>
      </ImageWrapper>
    </TransitionColor>
  );
}