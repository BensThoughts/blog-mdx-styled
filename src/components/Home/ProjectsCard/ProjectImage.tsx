import styled from '@emotion/styled';

const ImageWrap = styled.div`
  background-color: rgba(var(--color-app-secondary), 0.7);
  /* width: 500px;
  height: 350px; */
  /* width: 576px;  */
  width: 100%;
  height: 100%;
`;

const A = styled.a`
  /* width: 576px; */
  width: 100%;
  height: 100%;
  /* width: 500px;
  height: 350px; */
  /* background-color: rgba(var(--color-bg-terminal), 1); */
`;

// #64ffda

const Image = styled.img`
  /* filter: sepia(50%); */
  /* height: 350px; */
  object-fit: fill;
  width: 100%;
  height: 100%;
  /* height: 350px; */
  mix-blend-mode: multiply;
  filter: grayscale(100%) contrast(1) brightness(90%);
  /* width: 576px; */
  transition: filter mix-blend-mode 1s;
  &:hover {
    mix-blend-mode: normal;
    filter: grayscale(0%) brightness(100%);
  }
`;

type ProjectImageProps = {
  imgSrc: string,
  imgAlt: string,
  href: string,
}

export default function ProjectImage({
  imgSrc,
  imgAlt,
  href,
}: ProjectImageProps) {
  return (
    <ImageWrap>
      <A href={href} target="_blank" rel="noopener noreferrer" >
        <Image
          alt={imgAlt}
          src={imgSrc}
        />
      </A>
    </ImageWrap>
  );
}
