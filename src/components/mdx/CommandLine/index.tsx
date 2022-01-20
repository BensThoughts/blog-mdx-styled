import styled from '@emotion/styled';
import {Copy} from '@app/components/Icons';

type CommandLineSize = 'large' | 'small';

const CommandLineContainer = styled.div<{
  size?: CommandLineSize
}>`
  /* grid-column: 1 / -1; */
  @media (min-width: 768px) {
    grid-column: ${({size = 'small'}) => size === 'small' ? '2 / 3' : '1 / -1'};
    max-width: ${({size = 'small'}) => size === 'small' ? '100%' : 'max-content'};
  }
`;

const Prompt = styled.span`
  color:rgb(153, 76, 195);;
`;

const Command = styled.span`
  color: rgb(72, 118, 214);;
`;

const Options = styled.span`
  color: rgb(12, 150, 155);;
`;

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
    <CommandLineContainer size={size} aria-label="Command Line Element" className={`mx-auto w-full ${className}`}>
      {title && <div
        className="px-2 italic border-t-2 border-l-2 border-r-2 border-solid select-none text-secondary border-secondary border-opacity-40 rounded-t-md max-w-max"
        aria-label="Command Line Title"
      >
        {title}
      </div>
      }
      <div className={`w-full bg-terminal border-secondary align-middle border-solid border-opacity-30 border-2 rounded-b-md rounded-r-md ${topLeftRounded}`}>
        <pre className="px-4 py-2 overflow-x-auto bg-opacity-50 rounded-sm">
          <div className="flex flex-row items-center justify-between">
            <div>
              <Prompt className="select-none">$&gt;&nbsp;</Prompt>
              <Command>{command}</Command>
              <Options>{options ? ' ' + options : ''}</Options>
              <span className="mr-4 text-primary">{args ? ' ' + args : ''}</span>
            </div>
            <button
              onClick={() => {
                void navigator.clipboard.writeText(clipBoard);
              }}
              type="button"
              aria-label="Copy Button"
              className="px-3 py-2 border-2 rounded bg-primary border-secondary text-icon-secondary hover:bg-accent hover:border-secondary active:bg-primary"
            >
              <Copy className="text-icon-secondary"/>
            </button>
          </div>
        </pre>
      </div>
    </CommandLineContainer>
  );
}
