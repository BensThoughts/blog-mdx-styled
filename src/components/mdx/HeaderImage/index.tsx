// import Image from 'next/image';
import styled from '@emotion/styled';

import useProgressiveImg from '@app/utils/hooks/useProgressiveImg';

const ImageContainer =styled.div`
  grid-column: 1 / -1;
`;
interface HeaderImageProps {
  imgPathTiny: string,
  imgPathLarge: string,
  alt: string,
  width: number,
  height: number,
  className?: string,
}

export default function HeaderImage({
  imgPathTiny,
  imgPathLarge,
  alt,
  width,
  height,
  className = '',
}: HeaderImageProps) {
  // const tinyImage = srcBaseUrl + 'q_10' + imgPath;
  // const largeImage = srcBaseUrl + 'q_auto' + imgPath;
  const [src, blur] = useProgressiveImg(imgPathTiny, imgPathLarge);

  return (
    <ImageContainer className={`md:w-full mx-auto overflow-hidden ${className}`}>
      <img 
        src={src}
        alt={alt}
        width={width}
        height={height}
        style={{
          filter: blur ? 'blur(20px)' : 'none',
          transition: blur ? 'none' : 'filter 0.2s ease-out',
          margin: '-5px -10px -10px -5px'
        }}
        className="object-contain"
      />
    </ImageContainer>
  )
}