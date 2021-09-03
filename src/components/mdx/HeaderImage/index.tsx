// import Image from 'next/image';
import styled from '@emotion/styled';

const ImageContainer =styled.div`
  grid-column: 1 / 4;
`;
interface HeaderImageProps {
  src: string,
  alt: string,
  width: string,
  height: string
}

export default function HeaderImage(props: HeaderImageProps) {
  return (
    <ImageContainer className="max-w-sm md:max-w-full mx-auto">
      <img src={props.src} alt={props.alt} width={props.width} height={props.height} className="object-contain" />
    </ImageContainer>
  )
}