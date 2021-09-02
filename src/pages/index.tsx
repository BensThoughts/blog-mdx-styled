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
      <NextSeo
        title="BensThoughts Blog"
        description="My personal dev blog."
        openGraph={{
          url: 'https://bensthoughts.netlify.app',
          title: 'BensThoughts Blog',
          description: 'My (Benjamin Blumenfeld-Jones) personal dev blog.',
          images: [
            {
              url: 'https://res.cloudinary.com/bensthoughts/image/upload/v1630537753/blog/articles-headers/google-gke-cleanup_ihphxz.jpg',
              width: 810,
              height: 456,
              alt: 'Computer Terminal'
            }
          ],
          site_name: 'BensThoughts Blog'
        }}
        twitter={{
          handle: '@bensthoughts',
          site: '@bensthoughts',
          cardType: 'summary_large_image'
        }}
      />
      <MaxWidthWrapper>
        Placeholder
      </MaxWidthWrapper>
    </>
  );
};
