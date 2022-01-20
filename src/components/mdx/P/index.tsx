import {ReactNode} from 'react';

export default function P(props: { children: ReactNode}) {
  return (
    <p className="w-auto mx-auto leading-8 text-opacity-90 text-primary">{props.children}</p>
  );
};
