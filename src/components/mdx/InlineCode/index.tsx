// import styled from '@emotion/styled';
import React from 'react';


export default function InlineCode({children, ...rest}: React.HTMLAttributes<HTMLElement>) {
  return (
    <span className="px-2 py-1 rounded-md bg-terminal">
      <code className="text-color-inline-code" {...rest}>{children}</code>
    </span>
  );
}
