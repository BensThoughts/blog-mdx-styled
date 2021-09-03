// import Image from 'next/image';
import styled from '@emotion/styled';

const ImageContainer =styled.div`
  grid-column: 1 / -1;
`;
interface HeaderImageProps {
  src: string,
  alt: string,
  width: string,
  height: string
}

export default function HeaderImage({
  src,
  alt,
  width,
  height
}: HeaderImageProps) {
  return (
    <ImageContainer className="md:w-full mx-auto">
      <img src={src} alt={alt} width={width} height={height} className="object-contain" />
    </ImageContainer>
  )
}