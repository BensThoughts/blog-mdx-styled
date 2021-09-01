import { ReactNode } from 'react';

export default function H1(props: { children: ReactNode }) {
  return (
    <h2 className="text-lg sm:text-2xl m-auto">
      {props.children}
    </h2>
  );
};