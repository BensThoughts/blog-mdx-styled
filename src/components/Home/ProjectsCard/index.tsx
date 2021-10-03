import TitleHeader from '@app/components/Home/TitleHeader';
import styled from '@emotion/styled';
import ProjectImage from './ProjectImage';
import TechnologiesTerminal from './TechnologiesTerminal';
import ProjectLinks from './ProjectLinks';
import Header from './Header';

import {ZeroInbox} from './projects';
import {useState} from 'react';


// row / col / row / col


// row / col / row / col
const Card = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
  gap: 0px;
  /* height: 600px; */
  /* align-items: center; */
  /* height: 350px; */
  /* border-left: 8px;
  border-color: rgba(var(--color-app-secondary), 1);
  border-style: solid; */
`;

const ImageWrap = styled.div<{
  hovered: boolean
}>`
  grid-area: 1 / 7 / 7 / -1;
  z-index: 1;
  transform: ${(props) => props.hovered ? 'translateX(50px)' : 'translateX(0px)'};
  transition: transform 250ms;
`;

const AboutWrap = styled.div<{
  hovered: boolean
}>`
  grid-area: 2 / 1 / 9 / 8;
  background-color: rgba(var(--color-bg-terminal), 0.6);
  height: 100%;
  z-index: 2;
  border-left-width: 3px;
  border-left-style: solid;
  border-left-color: rgb(var(--color-text-secondary));
  transform: ${(props) => props.hovered ? 'translateX(-50px)' : 'translateX(0px)'};
  transition: transform 250ms;

`;

const HeaderWrap = styled.div`
  grid-area: 1 / 1 / 2 / 6;
  height: 25px;
`;

// row / col / row / col

const TechWrap = styled.div<{
  hovered: boolean
}>`
  grid-area: 7 / 6 / -2 / -2;
  background-color: rgba(var(--color-bg-terminal), 0.5);
  height: 100%;
  z-index: 3;
  opacity: 1;
  transform: ${(props) => props.hovered ? 'translate(128px, 50px)' : 'translateX(0px)'};
  transition: transform 250ms;
`;

export default function ProjectsCard({

}) {
  const [hovered, setHovered] = useState(false);
  return (
    <>
      <TitleHeader inverse text="Projects"/>
      <Card className="" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
        <HeaderWrap>
          <Header />
        </HeaderWrap>
        <ImageWrap hovered={hovered}>
          <ProjectImage
            imgSrc={ZeroInbox.imgSrc}
            imgAlt={ZeroInbox.imgAlt}
            href={ZeroInbox.liveLink}
          />
        </ImageWrap>
        <AboutWrap hovered={hovered}>
          <div className="p-4 flex flex-col justify-between h-full">
            <p className="text-primary text-opacity-100 font-mono">
              {ZeroInbox.description}
            </p>
            <div>
              <ProjectLinks liveLink={ZeroInbox.liveLink} githubLink={ZeroInbox.githubLink} />
            </div>
          </div>
        </AboutWrap>
        <TechWrap hovered={hovered} className="bg-terminal shadow-xl">
          <TechnologiesTerminal technologies={ZeroInbox.technologies} />
        </TechWrap>
      </Card>
    </>
  );
}
