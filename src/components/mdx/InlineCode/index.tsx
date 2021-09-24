// import styled from '@emotion/styled';
import React from 'react';


export default function InlineCode({className, ...rest}: React.HTMLAttributes<HTMLElement>) {
  return (
    <code className={`text-primary text-opacity-0 ${className}`} {...rest}></code>
  );
}
