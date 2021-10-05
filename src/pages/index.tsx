import MaxWidthWrapper from '@app/components/MaxWidthWrapper';
import GridWrapper from '@app/components/GridWrapper';
import AvatarCard from '@app/components/Home/AvatarCard';
import ProjectsCard from '@app/components/Home/ProjectsCard';
// import EnterAnimation from '@app/components/Transitions/EnterAnimation';
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
        <Background>
          <TitleHeader>
            <span className="text-icon-secondary">[</span>
                &nbsp;02. Projects&nbsp;
            <span className="text-icon-secondary">]</span>
          </TitleHeader>
          <ProjectsCard
            title={ZeroInbox.title}
            description={ZeroInbox.description}
            githubLink={ZeroInbox.githubLink}
            liveLink={ZeroInbox.liveLink}
            imgSrcSmall={ZeroInbox.imgSrcSmall}
            imgSrcLarge={ZeroInbox.imgSrcLarge}
            imgAlt={ZeroInbox.imgAlt}
            technologies={ZeroInbox.technologies}
            reversed={false}
          />
          <ProjectsCard
            title={ZeroInboxBackend.title}
            description={ZeroInboxBackend.description}
            githubLink={ZeroInboxBackend.githubLink}
            liveLink={ZeroInboxBackend.liveLink}
            imgSrcSmall={ZeroInboxBackend.imgSrcSmall}
            imgSrcLarge={ZeroInboxBackend.imgSrcLarge}
            imgAlt={ZeroInboxBackend.imgAlt}
            technologies={ZeroInboxBackend.technologies}
            reversed={true}
          />
          <ProjectsCard
            title={Spacetagram.title}
            description={Spacetagram.description}
            githubLink={Spacetagram.githubLink}
            liveLink={Spacetagram.liveLink}
            imgSrcSmall={Spacetagram.imgSrcSmall}
            imgSrcLarge={Spacetagram.imgSrcLarge}
            imgAlt={Spacetagram.imgAlt}
            technologies={Spacetagram.technologies}
            reversed={false}
          />
        </Background>

      </GridWrapper>
    </MaxWidthWrapper>
  );
};
