import Head from 'next/head';
import { useState } from 'react';

import MaxWidthWrapper from '@app/components/MaxWidthWrapper';

export default function AboutPage() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <MaxWidthWrapper>
        Placeholder
      </MaxWidthWrapper>
    </>
  );
}