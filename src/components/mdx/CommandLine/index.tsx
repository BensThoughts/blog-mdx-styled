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
              className="px-3 py-2 rounded border-2 bg-primary border-secondary text-icon-secondary hover:bg-accent hover:border-secondary active:bg-primary"
            >
              <Copy className="text-icon-secondary"/>
            </button>
          </div>
        </pre>
      </div>
    </CommandLineContainer>
  );
}
