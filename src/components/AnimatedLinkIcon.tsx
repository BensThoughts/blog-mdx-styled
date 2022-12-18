import React from 'react';

export default function AnimatedLinkIcon({
  children,
  target = '_blank',
  rel = 'noreferrer noopener',
  ...rest
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      target={target}
      rel={rel} {...rest}
      className="relative p-[10px] block bg-primary after:content-[''] after:absolute
                 after:block after:w-full after:h-full after:top-0 after:left-0 after:border-2
                 after:border-secondary after:rounded-md after:duration-300
                 after:transition-transform scale-100 hover:after:scale-[1.2]"
    >
      {children}
    </a>
  );
}
