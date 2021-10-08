import {useProgressiveImage} from '@app/utils/hooks/useProgressiveImg';
import {buildImageUrl} from 'cloudinary-build-url';

type ImgProps = {
  src: string,
  alt: string,
}

export default function Img({src, alt}: ImgProps) {
  const lowQualityImgUrl = buildImageUrl(src, {
    cloud: {
      cloudName: 'bensthoughts',
    },
    transformations: {
      quality: 10,
    },
  });

  const highQualityImgurl = buildImageUrl(src, {
    cloud: {
      cloudName: 'bensthoughts',
    },
    transformations: {
      quality: 'auto',
    },
  });

  const [srcUrl, blur] = useProgressiveImage(lowQualityImgUrl, highQualityImgurl);

  return (
    <>
      <img
        src={srcUrl}
        alt={alt}
        style={{
          filter: blur ? 'blur(10px)' : 'none',
          transition: blur ? 'none' : 'filter 0.2s ease-out',
          // margin: '-5px -10px -10px -5px'
        }}
      />
    </>
  );
}
