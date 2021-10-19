import React from 'react';

export default function Em({children}: React.HTMLAttributes<HTMLElement>) {
  return (
    <em className="text-icon-secondary italic">{children}</em>
  );
}
