// import Link from 'next/link';
import React from 'react';
import Link from 'next/link';


type LinkCardProps = {
  slug: string;
} & React.HTMLAttributes<HTMLDivElement>;

export default function LinkCard({slug, children, ...rest}: LinkCardProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      scroll={true}
      className="relative block no-underline w-full h-full rounded-md
                 border-2 border-secondary bg-primary/80 transition-transform ease-in-out
                 duration-300 hover:-translate-y-3"
      passHref
    >
      {children}
    </Link>
  );
}
