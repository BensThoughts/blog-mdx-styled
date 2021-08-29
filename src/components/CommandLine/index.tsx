import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface CommandLineProps {
  command: string,
  options?: string,
  args?: string
}

export default function CommandLine(props: CommandLineProps) {
  const { command, options, args } = props;
  const clipBoard = command + ' ' +
      (options ? options + ' ' : '') +
      (args ? args : '');
  return (
    <div className="w-screen md:max-w-4xl bg-gray-600 inline-block border-solid border-opacity-20 border-gray-100 border-2 rounded-md p-2">
      <pre className="overflow-x-auto bg-black rounded-sm px-4 py-2">
        <div className="flex flex-row justify-between items-center">
          <div>
            <span className="text-green-500 select-none">$&gt;&nbsp;</span>
            <span className="text-purple-400">{command}</span>
            <span className="text-yellow-600">{options ? ' ' + options : ''}</span>
            <span className="text-gray-200 mr-4">{args ? ' ' + args : ''}</span>
          </div>
          <button 
            onClick={() => {void navigator.clipboard.writeText(clipBoard);}}
            type="button"
            className="bg-gray-600 rounded p-2 border-2 border-black hover:border-blue-500 active:bg-gray-500"
          >
            <FontAwesomeIcon icon={['far', 'copy']} inverse size="lg" className="text-blue-500" />
          </button>
          {/* <Button1>
            <FontAwesomeIcon icon={['far', 'copy']} inverse size="lg" className="text-blue-500" />
          </Button1> */}
        </div>
      </pre>
    </div> 
  );
}