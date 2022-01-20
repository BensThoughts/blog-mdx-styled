import React from 'react';

export default function Em({children}: React.HTMLAttributes<HTMLElement>) {
  return (
    <em className="italic text-icon-secondary">{children}</em>
  );
}
