import MaxWidthWrapper from '@app/components/MaxWidthWrapper';
import GridWrapper from '@app/components/GridWrapper';
import AvatarCard from '@app/components/Home/AvatarCard';
import ProjectsCard from '@app/components/Home/ProjectsCard';
import EnterAnimation from '@app/components/Transitions/EnterAnimation';



export default function Home() {
  return (
      <MaxWidthWrapper>
        <GridWrapper charWidth={100}>
          <EnterAnimation>
            <AvatarCard />
          </EnterAnimation>
            {/* <ProjectsCard /> */}
        
        </GridWrapper>
      </MaxWidthWrapper>
  );
};
