import { ReactNode } from 'react';

export default function P(props: { children: ReactNode}) {
  return (
    <p className="m-5 w-auto md:max-w-4xl text-base leading-loose">{props.children}</p>
  );
};