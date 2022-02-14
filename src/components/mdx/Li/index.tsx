import React from 'react';

export default function Li({
  children,
  ...rest
}: React.HTMLAttributes<HTMLLIElement>) {
  return (
    <li {...rest}>
      {`> `} {children}
    </li>
  );
}
