import styled from '@emotion/styled';
import ProjectImage from './ProjectImage';
import TechnologiesTerminal from './TechnologiesTerminal';
import ProjectLinks from './ProjectLinks';
import ProjectTitle from './ProjectTitle';

import {useEffect, useState} from 'react';
import {useWindowSize} from 'react-use';
import {m, useAnimation} from 'framer-motion';
import {useInView} from 'react-intersection-observer';

const Card = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
@media (min-width: 768px) {
display: grid;
grid-template-columns: repeat(12, 1fr);
grid-template-rows: repeat(12, 1fr);
gap: 0px;
height: 700px;
}


/* height: 600px; */
/* align-items: center; */
/* height: 350px; */
/* border-left: 8px;
border-color: rgba(var(--color-app-secondary), 1);
border-style: solid; */
`;

const TitleWrap = styled.div<{
  reversed: boolean
}>`

height: 50px;
@media (min-width: 768px) {
  height: 25px;
  grid-area: ${({reversed}) => reversed ? '1 / 8 / 2 / -1' : '1 / 1 / 2 / 6'};
}
`;

const AboutWrap = styled(m.div)<{
  reversed: boolean,
}>`
height: 100%;
z-index: 2;

grid-area: 5 / 1 / 9 / -1;
@media (min-width: 768px) {  
  grid-area: ${({reversed}) => reversed ? '2 / 6 / 9 / -1' : '2 / 1 / 9 / 8'};
}
`;

const AboutAnimation = styled.div<{
  expanded: boolean,
  reversed: boolean,
}>`
height: 100%;
background-color: rgba(var(--color-bg-terminal), 0.6);
border-width: ${({reversed}) => reversed ? '0 3px 0 0' : '0 0 0 3px'}; /* top right bottom left */
border-style: solid;
border-color: rgb(var(--color-text-secondary));
@media (min-width: 768px) {  
transform: ${({expanded, reversed}) => {
    if (!expanded) {
      return 'translateX(0)';
    }
    if (reversed) {
      return 'translateX(50px)';
    }
    return 'translateX(-50px)';
  }};
transition: transform 250ms;
}
`;

const ImageWrap = styled(m.div)<{
  reversed: boolean,
}>`
z-index: 1;
grid-area: 2 / 1 / 5 / -1;
display: none;
@media (min-width: 768px) {
  display: block;  
  grid-area: ${({reversed}) => reversed ? '1 / 1 / 7 / 7' : '1 / 7 / 7 / -1'};
}
`;

const ImageAnimation = styled.div<{
  expanded: boolean,
  reversed: boolean,
}>`
@media (min-width: 768px) {
  display: block;  
  transform: ${({expanded, reversed}) => {
    if (!expanded) {
      return 'translateX(0)';
    }
    if (reversed) {
      return 'translateX(-50px)';
    }
    return 'translateX(50px)';
  }};
  transition: transform 250ms;
}
`;

const TechWrap = styled(m.div)<{
  reversed: boolean,
}>`
/* height: 100%; */
z-index: 3;
opacity: 1;
grid-area: 9 / 1 / -2 / -1;
@media (min-width: 768px) {  
  grid-area: ${({reversed}) => reversed ? '7 / 2 / -1 / 8' : '7 / 6 / -1 / -2'};
}
`;

const TechAnimation = styled.div<{
  expanded: boolean,
  reversed: boolean,
}>`
@media (min-width: 768px) {  
  transform: ${({expanded, reversed}) => {
    if (!expanded) {
      return 'translate(0px)';
    }
    if (reversed) {
      return 'translate(-128px, 50px)';
    }
    return 'translate(128px, 50px)';
  }};
  transition: transform 250ms;
}
`;

type ProjectCardProps = {
  title: string,
  description: string,
  imgSrc: string,
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
  description,
  imgSrc,
  imgAlt,
  liveLink,
  githubLink,
  technologies,
  reversed = false,
}: ProjectCardProps) {
  const {ref, inView} = useInView();
  const controls = useAnimation();
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const {width} = useWindowSize();

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
      controls.start('visible');
    }
    // if (!inView) {
    //   controls.start('hidden');
    // }
  }, [controls, inView]);

  const neg = reversed ? -1 : 1;

  const titleVariants = {
    hidden: {
      opacity: 0,
      // y: -150,
    },
    visible: {
      opacity: 1,
      // y: 0,
      transition: {
        duration: 1,
      },
    },
  };

  const aboutVariants = {
    hidden: {
      opacity: 0,
      x: neg * -50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
      },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      x: neg * 50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
      },
    },
  };

  const techVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      x: neg * 128,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <>
      <Card
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        ref={ref}
      >
        <TitleWrap
          reversed={reversed}
        >
          <m.div
            initial="hidden"
            animate={controls}
            variants={titleVariants}
          >
            <ProjectTitle title={title} reversed={reversed} />
          </m.div>
        </TitleWrap>


        <ImageWrap
          reversed={reversed}
          initial="hidden"
          animate={controls}
          variants={imageVariants}
        >
          <ImageAnimation
            reversed={reversed}
            expanded={expanded}
            className="shadow-lg"
          >
            <ProjectImage
              imgSrc={imgSrc}
              imgAlt={imgAlt}
              href={liveLink}
            />
          </ImageAnimation>
        </ImageWrap>


        <AboutWrap
          reversed={reversed}
          initial="hidden"
          animate={controls}
          variants={aboutVariants}
        >
          <AboutAnimation
            reversed={reversed}
            expanded={expanded}
            className={`p-4 flex flex-col justify-between h-full shadow-lg ${reversed ? 'items-end text-right' : 'items-start text-left'}`}
          >
            <p className="text-primary text-opacity-100 font-mono">
              {description}
            </p>
            <div>
              <ProjectLinks liveLink={liveLink} githubLink={githubLink} />
            </div>
          </AboutAnimation>
        </AboutWrap>

        <TechWrap
          reversed={reversed}
          initial="hidden"
          animate={controls}
          variants={techVariants}
        >
          <TechAnimation
            reversed={reversed}
            expanded={expanded}
            className="shadow-lg"
          >
            <TechnologiesTerminal technologies={technologies} />
          </TechAnimation>
        </TechWrap>

      </Card>
    </>
  );
}
