import {buildImageUrl} from 'cloudinary-build-url';
import styled from '@emotion/styled';
import {useProgressiveImage} from '@app/utils/hooks/useProgressiveImg';

const Image = styled.img<{
  blur: boolean
}>`
  position: relative;
  object-fit: fill;
  /* width: 100%;
  height: 100%; */
  /* width: 458px;
  height: 300px; */
  z-index: 2;
  mix-blend-mode: multiply;
  filter: ${({blur}) => {
    if (blur) {
      return 'blur(10px)';
    } else {
      return 'grayscale(100%) contrast(1) brightness(90%)';
    }
  }};
  transition: filter 0.2s ease-out;
  
  &:hover {
    mix-blend-mode: normal;
    filter: grayscale(0%) brightness(100%);
  }
`;

const Anchor = styled.a`
  display: block;
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

  &:focus ${Image} {
    mix-blend-mode: normal;
    filter: grayscale(0%) brightness(100%);
  }

  &:focus-visible ${Image} {
    outline: var(--app-outline);
    outline-offset: var(--app-outline-offset);
  }
`;


type ProjectImageProps = {
  cloudinaryImgPath: string,
  imgAlt: string,
  href: string,
  width: number,
  height: number,
}

export default function ProjectImage({
  cloudinaryImgPath,
  imgAlt,
  href,
  width,
  height,
}: ProjectImageProps) {
  const imgSrcSmall = buildImageUrl(cloudinaryImgPath, {
    cloud: {
      cloudName: 'bensthoughts',
    },
    transformations: {
      quality: 10,
      resize: {
        type: 'thumb',
        width: width,
        height: height,
      },
    },
  });
  const imgSrcLarge = buildImageUrl(cloudinaryImgPath, {
    cloud: {
      cloudName: 'bensthoughts',
    },
    transformations: {
      quality: 'auto',
      resize: {
        type: 'thumb',
        width: width,
        height: height,
      },
    },
  });
  const [src, blur] = useProgressiveImage(imgSrcSmall, imgSrcLarge);
  return (
    <Anchor href={href} target="_blank" rel="noopener noreferrer" >
      <Image
        alt={imgAlt}
        src={src}
        blur={blur}
        // style={{
        //   filter: blur ? 'blur(10px)' : 'grayscale(100%) contrast(1) brightness(90%)',
        //   transition: blur ? 'none' : 'filter 0.2s ease-out',
        //   // margin: '-5px -10px -10px -5px'
        // }}
        width={width}
        height={height}
      />
    </Anchor>
  );
}
