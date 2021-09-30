import TitleHeader from '@app/components/Home/TitleHeader';
import styled from '@emotion/styled';
import StatusBar from './StatusBar';
import Typewriter from './Typewriter';

const Card = styled.div`
  /* border-left: 8px;
  border-color: rgba(var(--color-app-secondary), 1);
  border-style: solid; */
  
`;

const A = styled.a`
  width: 576px;
  background-color: rgba(var(--color-app-secondary), 1);
`;

// #64ffda

const Image = styled.img`
  // filter: sepia(50%);
  mix-blend-mode: multiply;
  filter: grayscale(100%) contrast(1) brightness(90%);
  width: 576px;
  transition: filter mix-blend-mode 1s;
  &:hover {
    mix-blend-mode: normal;
    filter: grayscale(0%) brightness(100%);
  }
`;

export default function ProjectsCard({
  imgSrc = 'https://res.cloudinary.com/bensthoughts/image/upload/v1632793370/blog/projects/zero-inbox/zero-inbox-home-scaled_gxres2.png',
  title = 'zeroinbox.app',
}) {
  return (
    <>
      <TitleHeader inverse text="Projects"/>
      <A>
        <Card className="rounded-md border-transparent border-solid">
          <Image
            alt="Zero Inbox Home Page"
            src={imgSrc}
            className="object-contain"
          />
          <StatusBar file={title} />
        </Card>

      </A>

      <Typewriter />
    </>
  );
}
