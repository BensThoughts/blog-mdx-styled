import MaxWidthWrapper from '@app/components/MaxWidthWrapper';
import GridWrapper from '@app/components/GridWrapper';
import AvatarCard from '@app/components/Home/AvatarCard';
import ProjectCard from '@app/components/Home/ProjectCard';
import SectionTitle from '@app/components/SectionTitle';
import {Projects} from '@app/components/Home/ProjectCard/projects';
import Technologies from '@app/components/Home/Technologies';
// import TechnologiesBox from '@app/components/Home/Technologies/TechnologiesBox';
import Contact from '@app/components/Home/Contact';

export default function Home() {
  return (
    <MaxWidthWrapper>
      <GridWrapper charWidth={100}>
        {/* About Section */}
        <SectionTitle id="about">
          <span className="text-icon-secondary">[</span>
                &nbsp;01. About Me&nbsp;
          <span className="text-icon-secondary">]</span>
        </SectionTitle>
        <AvatarCard />

        {/* Technologies Section */}
        <SectionTitle id="skills">
          <span className="text-icon-secondary">[</span>
                &nbsp;02. Skills&nbsp;
          <span className="text-icon-secondary">]</span>
        </SectionTitle>
        <Technologies />

        {/* Projects Section */}
        <SectionTitle id="projects">
          <span className="text-icon-secondary">[</span>
                &nbsp;03. Projects&nbsp;
          <span className="text-icon-secondary">]</span>
        </SectionTitle>
        {Projects.map((project, idx) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            descriptionFirstSentence={project.descriptionFirstSentence}
            description={project.description}
            githubLink={project.githubLink}
            liveLink={project.liveLink}
            cloudinaryImgPath={project.cloudinaryImgPath}
            imgAlt={project.imgAlt}
            technologies={project.technologies}
            reversed={idx % 2 === 0 ? false : true}
          />
        ))}

        {/* Contact Section */}
        <SectionTitle id="contact">
          <span className="text-icon-secondary">[</span>
                &nbsp;04. Contact&nbsp;
          <span className="text-icon-secondary">]</span>
        </SectionTitle>
        <Contact/>
      </GridWrapper>
    </MaxWidthWrapper>
  );
};
