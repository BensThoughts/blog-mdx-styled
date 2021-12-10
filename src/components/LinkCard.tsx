// import Link from 'next/link';
import React from 'react';
import Link from 'next/link';
import AnchorContainer from '@app/components/AnchorCard';


type LinkCardProps = {
  slug: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export default function LinkCard({slug, children, ...rest}: LinkCardProps) {
  return (
    <Link href={`/blog/${slug}`} scroll={true} passHref>
      <AnchorContainer {...rest}>
        {children}
      </AnchorContainer>
    </Link>
  );
}
