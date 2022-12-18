import type {DetailedHTMLProps, HTMLAttributes} from 'react';

export default function Pre({children, ...rest}: DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement>) {
  return (
    <span className="px-2 py-1 rounded-md bg-terminal">
      <pre className="text-color-inline-code" {...rest}>{children}</pre>
    </span>
  );
}
