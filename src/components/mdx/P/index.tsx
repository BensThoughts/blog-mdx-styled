import { ReactNode } from 'react';

export default function P(props: { children: ReactNode}) {
  return (
    <p className="m-5 w-auto md:max-w-3xl text-base">{props.children}</p>
  );
};