import {ReactNode} from 'react';

export default function P(props: { children: ReactNode}) {
  return (
    <p className="mx-auto w-auto leading-8 text-opacity-90 text-primary">{props.children}</p>
  );
};
