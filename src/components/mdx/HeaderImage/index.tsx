// import Image from 'next/image';
import styled from '@emotion/styled';

import useProgressiveImg from '@app/utils/hooks/useProgressiveImg';
import { useContext, useEffect, useState } from 'react';

const ImageContainer =styled.div`
  grid-column: 1 / -1;
`;
interface HeaderImageProps {
  srcBaseUrl: string,
  srcVersionUrl: string,
  alt: string,
  width: string,
  height: string
}

export default function HeaderImage({
  srcBaseUrl,
  srcVersionUrl,
  alt,
  width,
  height
}: HeaderImageProps) {
  const tinyImage = srcBaseUrl + 'q_10' + srcVersionUrl;
  const largeImage = srcBaseUrl + 'q_auto' + srcVersionUrl;
  const [src, blur] = useProgressiveImg(tinyImage, largeImage);

  return (
    <ImageContainer className="md:w-full mx-auto overflow-hidden">
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