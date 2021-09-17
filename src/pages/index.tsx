import MaxWidthWrapper from '@app/components/MaxWidthWrapper';
import GridWrapper from '@app/components/GridWrapper';
import AvatarCard from '@app/components/Home/AvatarCard';
import ProjectsCard from '@app/components/Home/ProjectsCard';
import TechCard from '@app/components/Home/TechCard';
import EnterAnimation from '@app/components/Transitions/EnterAnimation';
import useFeatureToggle from '@app/utils/hooks/useFeatureToggle';


export default function Home() {
  const [isEnabled] = useFeatureToggle();
  return (
    <MaxWidthWrapper>
      <GridWrapper charWidth={100}>
        <EnterAnimation>
          <AvatarCard />
        </EnterAnimation>
        {isEnabled('tech-card') && (
          <EnterAnimation>
            <TechCard className="" />
          </EnterAnimation>
        )}
        <ProjectsCard />
      </GridWrapper>
    </MaxWidthWrapper>
  );
};
