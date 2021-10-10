import MaxWidthWrapper from '@app/components/MaxWidthWrapper';
import GridWrapper from '@app/components/GridWrapper';
import AvatarCard from '@app/components/Home/AvatarCard';
import ProjectsCard from '@app/components/Home/ProjectsCard';
import TitleHeader from '@app/components/Home/TitleHeader';
import {Projects} from '@app/components/Home/ProjectsCard/projects';
import Technologies from '@app/components/Home/Technologies';
import TechnologiesBox from '@app/components/Home/Technologies/TechnologiesBox';

export default function Home() {
  return (
    <MaxWidthWrapper>
      <GridWrapper charWidth={100}>
        {/* About Section */}
        <TitleHeader>
          <span className="text-icon-secondary">[</span>
                &nbsp;01. About Me&nbsp;
          <span className="text-icon-secondary">]</span>
        </TitleHeader>
        <AvatarCard />

        {/* Technologies Section */}
        <TitleHeader>
          <span className="text-icon-secondary">[</span>
                &nbsp;02. Technologies&nbsp;
          <span className="text-icon-secondary">]</span>
        </TitleHeader>
        <div className="flex items-center justify-center">
          <TechnologiesBox />
        </div>
        <div className="flex items-center justify-center">
          <Technologies />
        </div>

        {/* Projects Section */}
        <TitleHeader>
          <span className="text-icon-secondary">[</span>
                &nbsp;02. Projects&nbsp;
          <span className="text-icon-secondary">]</span>
        </TitleHeader>
        {Projects.map((project, idx) => (
          <ProjectsCard
            key={project.title}
            title={project.title}
            description={project.description}
            githubLink={project.githubLink}
            liveLink={project.liveLink}
            cloudinaryImgPath={project.cloudinaryImgPath}
            imgAlt={project.imgAlt}
            technologies={project.technologies}
            reversed={idx % 2 === 0 ? false : true}
          />
        ))}
      </GridWrapper>
    </MaxWidthWrapper>
  );
};


// import styled from '@emotion/styled';
// const Background = styled.div`
//   &::after {
//     display: none;
//     @media (min-width: 768px) {
//       display: block;
//       content: '';
//       z-index: -1;
//       position: absolute;
//       width: 100%;
//       height: 100%;
//       top: 0;
//       left: 0;
//       background-image: url(https://res.cloudinary.com/bensthoughts/image/upload/v1633306161/blog/home/rocket_winpc9.svg);
//       opacity: 0.2;
//       background-repeat: no-repeat;
//       background-size: contain;
//       background-position: center;
//       transform: translateX(0px) rotate(-45deg);
//     }
//   }
// `;
