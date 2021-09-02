import Head from 'next/head';
import { useState } from 'react';

import MaxWidthWrapper from '@app/components/MaxWidthWrapper';

export default function AboutPage() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <Head>
        <meta property="og:title" content="BensThoughts Blog About" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://res.cloudinary.com/bensthoughts/image/upload/v1630537753/blog/articles-headers/google-gke-cleanup_ihphxz.jpg" />
        <meta property="og:description" content="My personal blog" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@bensthoughts" />
        <meta name="twitter:creator" content="@bensthoughts" />
        <meta name="twitter:title" content="BensThoughts Personal Dev Blog" />
        <meta name="twitter:description" content="My personal blog." />
        <meta name="twitter:image" content="https://res.cloudinary.com/bensthoughts/image/upload/v1630537753/blog/articles-headers/google-gke-cleanup_ihphxz.jpg" />
      </Head>
      <MaxWidthWrapper>
        Placeholder
      </MaxWidthWrapper>
    </>
  );
}