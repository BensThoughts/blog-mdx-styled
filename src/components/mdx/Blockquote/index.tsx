import type {DetailedHTMLProps, BlockquoteHTMLAttributes} from 'react';

export default function BlockQuote({children, ...rest}: DetailedHTMLProps<BlockquoteHTMLAttributes<HTMLElement>, HTMLElement>) {
  return (
    <blockquote className="max-w-lg px-2 py-3 font-mono italic mx-auto rounded-lg border-l-8 border-solid bg-primary border-secondary" {...rest}>
      <div className="flex justify-center items-center w-full h-full">
        {children}
      </div>
    </blockquote>
  );
}
