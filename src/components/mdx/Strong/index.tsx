import React from 'react';

export default function Strong({children, ...rest}: React.HTMLAttributes<HTMLElement>) {
  return (
    <strong className="font-bold text-secondary">{children}</strong>
  );
}
