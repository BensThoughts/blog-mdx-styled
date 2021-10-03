import MaxWidthWrapper from '@app/components/MaxWidthWrapper';
import GridWrapper from '@app/components/GridWrapper';
import AvatarCard from '@app/components/Home/AvatarCard';
import ProjectsCard from '@app/components/Home/ProjectsCard';
import TechCard from '@app/components/Home/TechCard';
import EnterAnimation from '@app/components/Transitions/EnterAnimation';
import useFeatureToggle from '@app/utils/hooks/useFeatureToggle';
import TitleHeader from '@app/components/Home/TitleHeader';

import {
  ZeroInbox,
  ZeroInboxBackend,
} from '@app/components/Home/ProjectsCard/projects';

export default function Home() {
  const [isEnabled] = useFeatureToggle();
  return (
    <MaxWidthWrapper>
      <GridWrapper charWidth={100}>
        {/* <EnterAnimation> */}
        <AvatarCard />
        {/* </EnterAnimation> */}
        {isEnabled('tech-card') && (
          <EnterAnimation>
            <TechCard className="" />
          </EnterAnimation>
        )}
        {isEnabled('projects') && (
          // <EnterAnimation>
          <>
            <TitleHeader reversed text="projects" />
            <ProjectsCard
              title={ZeroInbox.title}
              description={ZeroInbox.description}
              githubLink={ZeroInbox.githubLink}
              liveLink={ZeroInbox.liveLink}
              imgSrc={ZeroInbox.imgSrc}
              imgAlt={ZeroInbox.imgAlt}
              technologies={ZeroInbox.technologies}
              reversed={false}
            />

            <ProjectsCard
              title={ZeroInboxBackend.title}
              description={ZeroInboxBackend.description}
              githubLink={ZeroInboxBackend.githubLink}
              liveLink={ZeroInboxBackend.liveLink}
              imgSrc={ZeroInboxBackend.imgSrc}
              imgAlt={ZeroInboxBackend.imgAlt}
              technologies={ZeroInboxBackend.technologies}
              reversed={true}
            />
          </>
          // </EnterAnimation>
        )}
      </GridWrapper>
    </MaxWidthWrapper>
  );
};
