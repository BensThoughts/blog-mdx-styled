import React from 'react';

export default function Ul({
  children,
  className = '',
  ...rest
}: React.HTMLAttributes<HTMLUListElement>) {
  return (
    <div className="flex flex-col items-center w-full">
      <ul
        className={`flex flex-col gap-2 self-center ${className}`}
        {...rest}
      >
        {children}
      </ul>
    </div>

  );
}
