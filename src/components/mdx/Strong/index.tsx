import React from 'react';

export default function Strong({children, ...rest}: React.HTMLAttributes<HTMLElement>) {
  return (
    <strong className="text-secondary font-bold">{children}</strong>
  );
}
