import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from '@emotion/styled';

const CommandLineBorder = styled.div`
  background-color: var(--color-app-primary);
  border-color: var(--color-app-secondary);
`;

const Pre = styled.div`
  background-color: var(--color-bg-terminal);
`;

const Prompt = styled.span`
  color: #10b981;
`;

const Command = styled.span`
  color: 	#a78bfa;
`;

const Options = styled.span`
  color: #d97706;
`;

const Args = styled.span`
  color: var(--color-text-primary);
`;

const CopyButton = styled.button`
  background-color: var(--color-app-primary);
  border-color: var(--color-app-secondary);
  color: var(--color-app-primary);
  :hover {
    background-color: var(--color-app-accent);
    border-color: var(--color-app-secondary);
  }
  :active {
    background-color: var(--color-app-primary);
  }
`;

const FontIcon = styled(FontAwesomeIcon)`
  color: var(--color-app-secondary);
`;
interface CommandLineProps {
  command: string,
  options?: string,
  args?: string
};

export default function CommandLine(props: CommandLineProps) {
  const { command, options, args } = props;
  const clipBoard = command + ' ' +
      (options ? options + ' ' : '') +
      (args ? args : '');
  return (
    <CommandLineBorder className="w-full md:max-w-4xl inline-block border-solid border-opacity-20 border-2 rounded-md p-2">
      <Pre className="overflow-x-auto rounded-sm px-4 py-2">
        <div className="flex flex-row justify-between items-center">
          <div>
            <Prompt className="select-none">$&gt;&nbsp;</Prompt>
            <Command>{command}</Command>
            <Options>{options ? ' ' + options : ''}</Options>
            <Args className="mr-4">{args ? ' ' + args : ''}</Args>
          </div>
          <CopyButton
            onClick={() => {void navigator.clipboard.writeText(clipBoard);}}
            type="button"
            className="rounded p-2 border-2"
          >
            <FontIcon icon={['far', 'copy']} inverse size="lg" />
          </CopyButton>
        </div>
      </Pre>
    </CommandLineBorder> 
  );
}