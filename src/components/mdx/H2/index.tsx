import { ReactNode } from 'react';

export default function H1(props: { children: ReactNode }) {
  return (
    <h2 className="text-xl md:text-2xl mx-auto my-5">
      {props.children}
    </h2>
  );
};