import { ReactNode } from 'react';

export default function P(props: { children: ReactNode}) {
  return (
    <p className="mx-auto my-6 w-auto text-base sm:text-lg text-opacity-90 text-primary leading-loose">{props.children}</p>
  );
};