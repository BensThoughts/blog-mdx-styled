import MaxWidthWrapper from '@app/components/MaxWidthWrapper';
import GridWrapper from '@app/components/GridWrapper';
import AvatarCard from '@app/components/Home/AvatarCard';
import ProjectsCard from '@app/components/Home/ProjectsCard';
// import EnterAnimation from '@app/components/Transitions/EnterAnimation';
import useFeatureToggle from '@app/utils/hooks/useFeatureToggle';
import TitleHeader from '@app/components/Home/TitleHeader';
import styled from '@emotion/styled';

const Background = styled.div`
  
  &::after {
    display: none;
    @media (min-width: 768px) { 
      display: block;
      content: '';
      z-index: -1;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-image: url(https://res.cloudinary.com/bensthoughts/image/upload/v1633306161/blog/home/rocket_winpc9.svg);
      opacity: 0.2;
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
      transform: translateX(-140px) rotate(-45deg);
    }
  }
`;

import {
  ZeroInbox,
  ZeroInboxBackend,
  Spacetagram,
} from '@app/components/Home/ProjectsCard/projects';

export default function Home() {
  const [isEnabled] = useFeatureToggle();
  return (
    <MaxWidthWrapper>
      <GridWrapper charWidth={100}>
        {/* <EnterAnimation> */}
        <AvatarCard />
        {/* </EnterAnimation> */}
        {isEnabled('projects') && (
          // <EnterAnimation>
          <>
            <Background>
              <TitleHeader reversed text="projects" />


              {/* <EnterAnimation> */}
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
            </Background>
            {/* </EnterAnimation>

            <EnterAnimation> */}
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
            {/* </EnterAnimation>

            <EnterAnimation> */}
            <ProjectsCard
              title={Spacetagram.title}
              description={Spacetagram.description}
              githubLink={Spacetagram.githubLink}
              liveLink={Spacetagram.liveLink}
              imgSrc={Spacetagram.imgSrc}
              imgAlt={Spacetagram.imgAlt}
              technologies={Spacetagram.technologies}
              reversed={false}
            />
            {/* </EnterAnimation> */}

          </>
          // </EnterAnimation>
        )}
      </GridWrapper>
    </MaxWidthWrapper>
  );
};
