import React from 'react';

export default function BorderedBox({className, children, ...rest}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`z-10 w-full max-w-2xl p-4 border-2 border-solid rounded-sm shadow-sm border-secondary ${className}`} {...rest}>
      {children}
    </div>
  );
}
