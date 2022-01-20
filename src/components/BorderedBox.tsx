import React from 'react';

export default function BorderedBox({className, children, ...rest}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`z-10 p-4 w-full max-w-2xl rounded-sm border-2 border-solid shadow-sm border-secondary ${className}`} {...rest}>
      {children}
    </div>
  );
}
