import { ReactNode } from 'react';

export default function H1(props: { children: ReactNode }) {
  return (
    <h2 className="text-xl md:text-2xl mx-auto my-3 text-secondary">
      {props.children}
    </h2>
  );
};