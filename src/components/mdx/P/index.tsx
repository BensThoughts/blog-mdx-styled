import {ReactNode} from 'react';

export default function P(props: { children: ReactNode}) {
  return (
    <p className="mx-auto w-auto text-[1.15rem] leading-[2.2rem] text-opacity-90 text-primary">{props.children}</p>
  );
};
