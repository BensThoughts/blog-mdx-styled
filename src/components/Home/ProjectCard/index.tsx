import React, {useEffect, useState} from 'react';
// import {useWindowSize} from 'react-use';
import {useInView} from 'react-intersection-observer';

import ProjectImage from './ProjectImage';
import TechnologiesTerminal from './TechnologiesTerminal';
import ProjectLinks from './ProjectLinks';
import ProjectTitle from './ProjectTitle';
import {Technology} from '@app/utils/technologies';

type ProjectCardProps = {
  title: string,
  descriptionFirstSentence: string,
  description: string,
  cloudinaryImgPath: string,
  imgAlt: string,
  liveLink: string,
  githubLink: string | undefined,
  technologies: Array<Technology | undefined>,
  // reversed?: boolean
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
  // reversed = false,
}: ProjectCardProps) {
  const {ref, inView} = useInView();

  const [viewed, setViewed] = useState(false);

  useEffect(() => {
    if (inView) {
      setViewed(true);
    }
  }, [inView]);

  return (
    <div
      className="flex flex-col gap-10 xl:grid xl:grid-cols-[repeat(12,1fr)]
                 xl:grid-rows-[repeat(13,1fr)] xl:gap-0 xl:h-[660px]"
      ref={ref}
    >
      <div
        className={`h-[50px] transition-opacity duration-[250ms]
                    xl:h-[25px] xl:[grid-area:1_/_1_/_2_/_6] xl:-translate-x-[50px]
                    ${viewed ? 'opacity-100' : 'opacity-0'}
        `}
      >
        <ProjectTitle title={title} />
      </div>

      <div
        className={`hidden z-[1] shadow-lg xl:block xl:w-[460px] xl:h-[255px]
                    xl:[grid-area:2_/_7_/_7_/_-1] xl:transition-all xl:duration-[250ms]
                    ${viewed ? 'xl:translate-x-[50px]' : 'xl:translate-x-[200px]'}
        `}
      >
        <ProjectImage
          cloudinaryImgPath={cloudinaryImgPath}
          imgAlt={imgAlt}
          href={liveLink}
          width={460}
          height={255}
        />
      </div>


      <div
        // expanded={expanded}
        className={`h-full z-[2] bg-primary border-l-[3px] border-l-text-color-secondary
        [grid-area:5_/_1_/_9_/_-1] xl:[grid-area:2_/_1_/_9_/_8]
        p-4 flex flex-col justify-between items-start text-left shadow-lg
        transition-all duration-300
        ${viewed ? 'xl:-translate-x-[50px]' : 'xl:-translate-x-[200px]'}
        `}
      >
        <p className="font-mono leading-7 text-opacity-100 text-primary">
          <strong className="font-bold">
            {descriptionFirstSentence}
          </strong>
          {description}
        </p>
        <div>
          <ProjectLinks liveLink={liveLink} githubLink={githubLink} />
        </div>
      </div>

      <div
        className={`z-[3] transition-all duration-[400ms] xl:[grid-area:8_/_6_/_-1_/_-2]
          ${viewed ? 'opacity-100 xl:translate-y-[20px]' : 'opacity-0 xl:translate-y-[400px]'}

        `}
      >
        <TechnologiesTerminal technologies={technologies} className="shadow-lg" />
      </div>
    </div>
  );
}
