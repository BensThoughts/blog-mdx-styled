import styled from '@emotion/styled';

import MaxWidthWrapper from '@app/components/MaxWidthWrapper';
import GridWrapper from '@app/components/GridWrapper';
import AvatarCard from '@app/components/AvatarCard';


export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <GridWrapper charWidth={100}>
          <div className="flex flex-col items-center justify-center">
            <AvatarCard />
            <div className="h-56 w-full bg-primary mt-24 md:mt-40 rounded-lg"></div>
          </div>
        </GridWrapper>
      </MaxWidthWrapper>

    </>
  );
};
