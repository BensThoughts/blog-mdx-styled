import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from '@emotion/styled';

const CommandLineBorder = styled.div`
  /* background-color: var(--color-app-primary);
  border-color: var(--color-app-secondary); */
  max-width: max-content;
  grid-column: 1 / 4;

`;

const Pre = styled.pre`
  /* background-color: var(--color-bg-terminal); */
  overflow-x: auto;
`;

const Prompt = styled.span`
  color: rgb(153, 76, 195);;
`;

const Command = styled.span`
  color: 	rgb(72, 118, 214);;
`;

const Options = styled.span`
  color: rgb(12, 150, 155);;
`;

const Args = styled.span`
  /* color: var(--color-text-primary); */
`;

const CopyButton = styled.button`
  padding-right: 10px;
  /* background-color: var(--color-app-primary);
  border-color: var(--color-app-secondary);
  color: var(--color-app-primary); */
  :hover {
    /* svg {
      color: var(--color-app-accent);
    } */
    /* background-color: var(--color-app-accent);
    border-color: var(--color-app-secondary); */
  }
  /* :active {
    background-color: var(--color-app-primary);
  } */
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
    <CommandLineBorder className="bg-primary border-secondary m-auto w-full align-middle sm:border-solid sm:border-opacity-20 sm:border-2 rounded-md p-1 sm:p-2">
      <Pre className="overflow-x-auto bg-terminal rounded-sm px-4 py-2">
        <div className="flex flex-row justify-between items-center">
          <div>
            <Prompt className="select-none">$&gt;&nbsp;</Prompt>
            <Command>{command}</Command>
            <Options>{options ? ' ' + options : ''}</Options>
            <Args className="mr-4 text-primary">{args ? ' ' + args : ''}</Args>
          </div>
          <CopyButton
            onClick={() => {void navigator.clipboard.writeText(clipBoard);}}
            type="button"
            className="rounded p-2 border-2 bg-primary border-secondary text-icon-secondary hover:bg-accent hover:border-secondary active:bg-primary"
          >
            <FontIcon icon={['far', 'copy']} inverse size="lg" />
          </CopyButton>
        </div>
      </Pre>
    </CommandLineBorder>   

   
  );
}