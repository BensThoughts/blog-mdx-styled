import styled from '@emotion/styled';
import {useEffect, useState} from 'react';
import {useWindowSize} from 'react-use';
import {useInView} from 'react-intersection-observer';

import ProjectImage from './ProjectImage';
import TechnologiesTerminal from './TechnologiesTerminal';
import ProjectLinks from './ProjectLinks';
import ProjectTitle from './ProjectTitle';

const Card = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
@media (min-width: 768px) {
display: grid;
grid-template-columns: repeat(12, 1fr);
grid-template-rows: repeat(12, 1fr);
gap: 0px;
height: 600px;
will-change: transform background opacity;
}
/* height: 600px; */
/* align-items: center; */
/* height: 350px; */
/* border-left: 8px;
border-color: rgba(var(--color-app-secondary), 1);
border-style: solid; */
`;

const TitleWrap = styled.div<{
  reversed: boolean,
  viewed: boolean
}>`

height: 50px;
opacity: ${({viewed}) => viewed ? 1 : 0};
transition-property: opacity;
transition-duration: 250ms;
will-change: transform background opacity;

@media (min-width: 768px) {
  height: 25px;
  grid-area: ${({reversed}) => reversed ? '1 / 8 / 2 / -1' : '1 / 1 / 2 / 6'};
}
`;

const AboutWrap = styled.div<{
  reversed: boolean,
  viewed: boolean,
  expanded: boolean,
}>`
height: 100%;
z-index: 2;
height: 100%;
background-color: rgba(var(--color-app-primary), 0.6);
border-width: ${({reversed}) => reversed ? '0 3px 0 0' : '0 0 0 3px'}; /* top right bottom left */
border-style: solid;
border-color: rgba(var(--color-text-secondary), 1);
grid-area: 5 / 1 / 9 / -1;
will-change: transform background opacity;

opacity: ${({viewed}) => viewed ? 1 : 0};

transform: ${({viewed, expanded, reversed}) => {
    const flipBit = reversed ? -1 : 1;
    if (!viewed || expanded) {
      return `translateX(${-50 * flipBit}px)`;
    } else {
      return 'translateX(0)';
    }
  }};

  transition-property: transform opacity;
  transition-duration: 250ms;

@media (min-width: 768px) { 
  grid-area: ${({reversed}) => reversed ? '2 / 6 / 9 / -1' : '2 / 1 / 9 / 8'};
}
`;

const ImageWrap = styled.div<{
  reversed: boolean,
  expanded: boolean,
  viewed: boolean,
}>`
z-index: 1;
grid-area: 2 / 1 / 5 / -1;
display: none;
transition-property: transform opacity;
transition-duration: 250ms;
will-change: transform background opacity;
@media (min-width: 768px) {
  display: block;
  width: 100%;
  height: 100%;
  grid-area: ${({reversed}) => reversed ? '1 / 1 / 6 / 7' : '1 / 7 / 6 / -1'};
  transform: ${({viewed, expanded, reversed}) => {
    const flipBit = reversed ? -1 : 1;
    if (!viewed || expanded) {
      return `translateX(${flipBit * 50}px)`;
    } else {
      return 'translateX(0)';
    }
  }};
  transition-property: transform opacity;
  transition-duration: 250ms;
  will-change: transform background opacity;
}
`;

const TechWrap = styled.div<{
  reversed: boolean,
  expanded: boolean,
  viewed: boolean,
}>`
/* height: 100%; */
z-index: 3;
opacity: ${({viewed}) => viewed ? 1 : 0};
grid-area: 9 / 1 / -2 / -1;
transform: ${({viewed, expanded, reversed}) => {
    const flipBit = reversed ? -1 : 1;
    if (!viewed || expanded) {
      return `translate(${flipBit * 128}px, 50px)`;
    } else {
      return 'translate(0px, 0px)';
    }
  }};
  transition-property: transform opacity;
  transition-duration: 250ms;
  will-change: transform background opacity;
@media (min-width: 768px) {  
  grid-area: ${({reversed}) => reversed ? '7 / 2 / -1 / 8' : '7 / 6 / -1 / -2'};
}
`;

type ProjectCardProps = {
  title: string,
  descriptionFirstSentence: string,
  description: string,
  cloudinaryImgPath: string,
  imgAlt: string,
  liveLink: string,
  githubLink: string,
  technologies: {
    name: string,
    icon: React.ReactElement,
    href: string,
  }[],
  reversed?: boolean
}

export default function ProjectsCard({
  title,
  descriptionFirstSentence,
  description,
  cloudinaryImgPath,
  imgAlt,
  liveLink,
  githubLink,
  technologies,
  reversed = false,
}: ProjectCardProps) {
  const {ref, inView} = useInView();
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const {width} = useWindowSize();

  const [viewed, setViewed] = useState(false);

  useEffect(() => {
    if (width < 1080) {
      setExpanded(false);
    } else if (focused) {
      setExpanded(true);
    } else if (hovered) {
      setExpanded(true);
    } else {
      setExpanded(false);
    }
  }, [width, hovered, focused]);

  useEffect(() => {
    if (inView) {
      setViewed(true);
    }
  }, [inView]);

  return (
    <Card
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      ref={ref}
    >
      <TitleWrap
        reversed={reversed}
        viewed={viewed}
      >
        <ProjectTitle title={title} reversed={reversed} />
      </TitleWrap>

      <ImageWrap
        reversed={reversed}
        expanded={expanded}
        viewed={viewed}
        className="shadow-lg"
      >

        <ProjectImage
          cloudinaryImgPath={cloudinaryImgPath}
          imgAlt={imgAlt}
          href={liveLink}
          width={460}
          height={252}
        />
      </ImageWrap>


      <AboutWrap
        reversed={reversed}
        viewed={viewed}
        expanded={expanded}
        className={`p-4 flex flex-col justify-between h-full shadow-lg ${reversed ? 'items-end text-right' : 'items-start text-left'}`}
      >
        <p className="text-primary text-opacity-100 font-mono">
          <strong>
            {descriptionFirstSentence}
          </strong>
          {description}
        </p>
        <div>
          <ProjectLinks liveLink={liveLink} githubLink={githubLink} />
        </div>
      </AboutWrap>

      <TechWrap
        reversed={reversed}
        expanded={expanded}
        viewed={viewed}
      >
        <TechnologiesTerminal technologies={technologies} className="shadow-lg" />
      </TechWrap>
    </Card>
  );
}
