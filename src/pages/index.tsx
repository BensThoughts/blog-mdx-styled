import AvatarSection from '@app/components/Home/AvatarSection';
import ProjectCard from '@app/components/Home/ProjectCard';
import SectionTitle from '@app/components/SectionTitle';
import {Projects} from '@app/components/Home/ProjectCard/projects';
import Technologies from '@app/components/Home/TechnologiesSection';
// import TechnologiesBox from '@app/components/Home/Technologies/TechnologiesBox';
import ContactSection from '@app/components/Home/ContactSection';
import PackageSection from '@app/components/Home/PackagesSection';


export default function Home() {
  return (
    <div className="flex flex-col px-4 mx-auto gap-y-12 md:gap-y-20 md:px-8 max-w-6xl">
      {/* About Section */}
      <SectionTitle>
        {/* this is a tricky bit to avoid the first flex gap and scroll to top */}
        <div id="home" className="h-0 -mt-96"></div>
        <span className="text-icon-secondary">[</span>
                &nbsp;01. About Me&nbsp;
        <span className="text-icon-secondary">]</span>
      </SectionTitle>
      <AvatarSection />


      {/* Technologies Section */}
      <div id="skills"></div>
      <SectionTitle id="skills">
        <span className="text-icon-secondary">[</span>
                &nbsp;02. Skills&nbsp;
        <span className="text-icon-secondary">]</span>
      </SectionTitle>
      <Technologies />


      {/* Projects Section */}
      <div id="projects"></div>
      <SectionTitle>
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
          // reversed={idx % 2 === 0 ? false : true}
        />
      ))}

      {/* Packages Section */}
      <div id="packages"></div>
      <SectionTitle>
        <span className="text-icon-secondary">[</span>
                &nbsp;04. Packages&nbsp;
        <span className="text-icon-secondary">]</span>
      </SectionTitle>
      <PackageSection />

      {/* Contact Section */}
      <div id="contact"></div>
      <SectionTitle>
        <span className="text-icon-secondary">[</span>
                &nbsp;05. Contact&nbsp;
        <span className="text-icon-secondary">]</span>
      </SectionTitle>
      <ContactSection />
    </div>
  );
};
