import React from 'react';

export default function H1({
  children,
  className = '',
  ...rest
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1 className={`text-2xl font-bold md:text-4xl text-secondary ${className}`} {...rest}>
      {children}
    </h1>
  );
};
