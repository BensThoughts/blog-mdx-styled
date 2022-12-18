import React from 'react';

export default function Pill({
  children,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className="flex gap-[0.1rem] items-center justify-center rounded px-2 py-1 bg-secondary"
      {...rest}
    >
      {children}
    </div>
  );
}
