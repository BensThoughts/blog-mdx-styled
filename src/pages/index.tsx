import { NextSeo } from 'next-seo';
import MaxWidthWrapper from '@app/components/MaxWidthWrapper';

// const Container = styled.div`
//   display: grid;
//   gap: 16px;
//   grid-template-columns: 1fr;
//   @media (min-width: 768px) {
//     grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
//     gap: 32px;
//   }
//   /* justify-content: center;
//   padding-top: 35vh; */
// `;

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        Placeholder
      </MaxWidthWrapper>
    </>
  );
};
