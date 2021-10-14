// import styled from '@emotion/styled';
import React from 'react';


export default function InlineCode({children, ...rest}: React.HTMLAttributes<HTMLElement>) {
  return (
    <code className="text-icon-secondary" {...rest}>{children}</code>
  );
}
