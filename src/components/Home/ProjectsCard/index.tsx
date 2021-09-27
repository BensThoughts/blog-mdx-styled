import TitleHeader from '@app/components/Home/TitleHeader';
import styled from '@emotion/styled';

const Card = styled.div`
  border-left: 8px;
  border-color: rgba(var(--color-app-secondary), 1);
  border-style: solid;
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
`;

export default function ProjectsCard() {
  return (
    <>
      <TitleHeader inverse text="Projects"/>
      <A>
        <Card className="">
          <Image
            alt="Zero Inbox Home Page"
            src="https://res.cloudinary.com/bensthoughts/image/upload/v1632722985/blog/projects/zero-inbox/zero-inbox-home-scaled_fxxnde.png"
            className="object-contain"
          />
        </Card>

      </A>


    </>
  );
}
