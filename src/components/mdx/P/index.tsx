import type {DetailedHTMLProps, HTMLAttributes} from 'react';

export default function P({children}: DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>) {
  return (
    <p className="mx-auto w-auto text-[1.15rem] leading-[2.2rem] text-opacity-90 text-primary">{children}</p>
  );
};
