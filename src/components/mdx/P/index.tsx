import { ReactNode } from 'react';

export default function P(props: { children: ReactNode}) {
  return (
    <p className="m-auto w-auto text-base leading-loose">{props.children}</p>
  );
};