import React from 'react';

export default function BorderedBox({className, children, ...rest}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`w-full max-w-2xl z-10 rounded-sm border-2 border-solid  border-secondary p-4 shadow-sm ${className}`} {...rest}>
      {children}
    </div>
  );
}
