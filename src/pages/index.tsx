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
            <AvatarCard style={{ animation: `fadeIn 1s` }} />
            <div style={{ animation: `fadeIn 2s` }} className="h-56 w-full bg-primary mt-24 md:mt-40 rounded-lg shadow-md"></div>
          </div>
        </GridWrapper>
      </MaxWidthWrapper>
    </>
  );
};
