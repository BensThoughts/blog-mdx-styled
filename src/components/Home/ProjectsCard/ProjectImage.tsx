import {useProgressiveImage} from '@app/utils/hooks/useProgressiveImg';
import styled from '@emotion/styled';

const Image = styled.img`
  position: relative;
  object-fit: fill;
  /* width: 100%;
  height: 100%; */
  width: 458px;
  height: 300px;
  z-index: 2;
  mix-blend-mode: multiply;
  filter: grayscale(100%) contrast(1) brightness(100%);
  &:hover {
    mix-blend-mode: normal;
    filter: grayscale(0%) brightness(100%);
  }
`;

const Anchor = styled.a`
  width: 100%;
  height: 100%;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    top: 0;
    left: 0;
    background-color: rgba(var(--color-image-overlay), 0.7);
  }
`;


type ProjectImageProps = {
  imgSrcSmall: string,
  imgSrcLarge: string,
  imgAlt: string,
  href: string,
}

export default function ProjectImage({
  imgSrcSmall,
  imgSrcLarge,
  imgAlt,
  href,
}: ProjectImageProps) {
  const [src, blur] = useProgressiveImage(imgSrcSmall, imgSrcLarge);
  return (
    <Anchor href={href} target="_blank" rel="noopener noreferrer" >
      <Image
        alt={imgAlt}
        src={src}
        style={{
          filter: blur ? 'blur(10px)' : 'none',
          transition: blur ? 'none' : 'filter 0.2s ease-out',
          // margin: '-5px -10px -10px -5px'
        }}
      />
    </Anchor>
  );
}
