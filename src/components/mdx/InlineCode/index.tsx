// import styled from '@emotion/styled';
import React from 'react';


export default function InlineCode({children, ...rest}: React.HTMLAttributes<HTMLElement>) {
  return (
    <span className="bg-terminal bg-opacity-70 rounded-md px-2 py-1">
      <code className="text-color-inline-code" {...rest}>{children}</code>
    </span>
  );
}
