import {Copy} from '@app/components/Icons';
import React from 'react';

type CommandLineSize = 'large' | 'small';

interface CommandLineProps {
  title?: string,
  command: string,
  options?: string,
  args?: string,
  size?: CommandLineSize,
  className?: string,
};

export default function CommandLine({
  title,
  command,
  options,
  args,
  size,
  className = '',
}: CommandLineProps) {
  const clipBoard = command + ' ' +
      (options ? options + ' ' : '') +
      (args ? args : '');

  const topLeftRounded = title ? '' : 'rounded-l-md';

  return (
    <div
      aria-label="Command Line Element"
      className={`mx-auto w-full
        ${size === 'small' ? 'col-start-2 col-end-3 max-w-full' : 'col-span-full max-w-[max-content]'}
        ${className}
      `}
    >
      {title && <div
        className="px-2 max-w-max italic rounded-t-md border-t-2 border-r-2 border-l-2 border-opacity-40 border-solid select-none text-secondary border-secondary"
        aria-label="Command Line Title"
      >
        {title}
      </div>
      }
      <div className={`w-full align-middle rounded-r-md rounded-b-md border-2 border-opacity-30 border-solid bg-terminal border-secondary ${topLeftRounded}`}>
        <pre className="overflow-x-auto px-4 py-2 bg-opacity-50 rounded-sm">
          <div className="flex flex-row justify-between items-center">
            <div>
              <span className="select-none text-[#994CC3]">$&gt;&nbsp;</span>
              <span className="text-[#4876D6]">{command}</span>
              <span className="text-[#0C969B]">{options ? ' ' + options : ''}</span>
              <span className="mr-4 text-primary">{args ? ' ' + args : ''}</span>
            </div>
            <button
              onClick={() => {
                void navigator.clipboard.writeText(clipBoard);
              }}
              type="button"
              aria-label="Copy Button"
              className="px-3 py-2 rounded border-2 bg-primary border-secondary text-icon-secondary hover:bg-accent hover:border-secondary active:bg-primary"
            >
              <Copy className="text-icon-secondary"/>
            </button>
          </div>
        </pre>
      </div>
    </div>
  );
}
