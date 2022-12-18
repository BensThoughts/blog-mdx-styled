// import Image from 'next/image';
import {buildImageUrl} from 'cloudinary-build-url';

import {useProgressiveImage} from '@app/utils/hooks/useProgressiveImg';

interface HeaderImageProps {
  imgPath: string,
  alt: string,
  width: number,
  height: number,
  className?: string,
}

export default function HeaderImage({
  imgPath,
  alt,
  width,
  height,
  className = '',
}: HeaderImageProps) {
  // const tinyImage = srcBaseUrl + 'q_10' + imgPath;
  // const largeImage = srcBaseUrl + 'q_auto' + imgPath;
  const smallUrl = buildImageUrl(imgPath, {
    cloud: {
      cloudName: 'bensthoughts',
    },
    transformations: {
      quality: 10,
    },
  });

  const largeUrl = buildImageUrl(imgPath, {
    cloud: {
      cloudName: 'bensthoughts',
    },
    transformations: {
      quality: 'auto',
      resize: {
        type: 'fit',
        width: width,
        height: height,
        // aspectRatio: '1.5',
      },
    },
  });

  const [src, blur] = useProgressiveImage(smallUrl, largeUrl);

  return (
    <div
      className={`flex overflow-hidden justify-center items-center
      mx-auto w-full md:w-full
      ${className}`}
      // className={`flex overflow-hidden justify-center items-center
      //             mx-auto w-full md:w-full !col-span-full max-h-[${height}]
      //             ${className}`}
    >
      <img
        src={src}
        alt={alt}
        width={`${width}px`}
        height={`${height}px`}
        style={{
          filter: blur ? 'blur(20px)' : 'none',
          transition: blur ? 'none' : 'filter 0.2s ease-out',
          // margin: '-5px -10px -10px -5px'
        }}
        className="object-contain"
      />
    </div>
  );
}
