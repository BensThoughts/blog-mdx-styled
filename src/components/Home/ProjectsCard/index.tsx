import TitleHeader from '@app/components/Home/TitleHeader';
import styled from '@emotion/styled';
import ProjectImage from './ProjectImage';
import TechnologiesTerminal from './TechnologiesTerminal';
import ProjectLinks from './ProjectLinks';
import Header from './Header';

import {ZeroInbox} from './projects';


// row / col / row / col


// row / col / row / col
const Card = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
  gap: 0px;
  height: 600px;
  /* align-items: center; */
  /* height: 350px; */
  /* border-left: 8px;
  border-color: rgba(var(--color-app-secondary), 1);
  border-style: solid; */
`;

const ImageWrap = styled.div`
  grid-area: 1 / 7 / 7 / -1;
  z-index: 1;
`;

const AboutWrap = styled.div`
  grid-area: 2 / 1 / 10 / 7;
  background-color: rgba(var(--color-bg-terminal), 0.6);
  height: 100%;
  z-index: 2;
  border-left-width: 3px;
  border-left-style: solid;
  border-left-color: rgb(var(--color-text-secondary));
`;

const HeaderWrap = styled.div`
  grid-area: 1 / 1 / 2 / 6;
  height: 25px;
`;

// row / col / row / col

const TechWrap = styled.div`
  grid-area: 7 / 6 / -1 / -1;
  background-color: rgba(var(--color-bg-terminal), 0.5);
  height: 100%;
  z-index: 3;
  opacity: 1;
`;

const ProjectLinksWrap = styled.div`
  grid-area: 1 / 6 / 2 / 7;
  display: flex;
  align-items: center;
`;


export default function ProjectsCard({

}) {
  return (
    <>
      <TitleHeader inverse text="Projects"/>
      <Card className="">
        <HeaderWrap>
          <Header />
        </HeaderWrap>
        <ImageWrap>
          <ProjectImage
            imgSrc={ZeroInbox.imgSrc}
            imgAlt={ZeroInbox.imgAlt}
            href={ZeroInbox.liveLink}
          />
        </ImageWrap>
        <AboutWrap>
          <p className="text-primary text-opacity-100 p-4 font-mono">
            {ZeroInbox.description}
          </p>
        </AboutWrap>
        <ProjectLinksWrap>
          <ProjectLinks liveLink={ZeroInbox.liveLink} githubLink={ZeroInbox.githubLink} />
        </ProjectLinksWrap>
        <TechWrap className="bg-terminal shadow-xl">
          <TechnologiesTerminal technologies={ZeroInbox.technologies} />
        </TechWrap>
      </Card>
    </>
  );
}
