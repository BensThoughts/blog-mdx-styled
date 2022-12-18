import type {DetailedHTMLProps, ImgHTMLAttributes} from 'react';
import {useProgressiveImage} from '@app/utils/hooks/useProgressiveImg';
import {buildImageUrl} from 'cloudinary-build-url';

export default function Img({src, alt}: DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>) {
  const srcRaw = src ? src : '';
  const lowQualityImgUrl = buildImageUrl(srcRaw, {
    cloud: {
      cloudName: 'bensthoughts',
    },
    transformations: {
      quality: 10,
    },
  });

  const highQualityImgurl = buildImageUrl(srcRaw, {
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
