import {Fragment} from 'react';
import {Technology} from '@app/utils/technologies';
import StatusBar from './StatusBar';

// const Pre = styled.pre`
//   background-color: rgba(var(--color-bg-terminal), 1);
//   text-align: left;
//   display: flex;
//   flex-direction: column;
//   margin: 0em 0;
//   padding: 0.5em;
//   overflow: hidden;
//   gap: 4px;
//   height: 100%;
//   /* background-color: rgba(var(--color-bg-terminal), 1); */
// `;

// const Keyword = styled.span`
//   color: #0c969b;
//   /* height: 100%; */
// `;

// const Plain = styled.span`
//   color: rgb(var(--color-text-primary));
//   /* height: 100%; */
// `;

// const String = styled.span`
//   color: #4876d6;
//   /* height: 100%;
//   vertical-align: middle;
//   text-align: center; */
// `;

// const Punctuation = styled.div`
//   color: #994cc3;
//   /* height: 100%; */

// `;

// const Line = styled.div`
//   display: flex;
//   align-items: center;
//   /* height: 100%; */
//   /* vertical-align: middle; */
//   padding: 0px;
// `;

// const LineNo = styled.span`
//   display: flex;
//   text-align: right;
//   padding-right: 1em;
//   user-select: none;
//   opacity: 0.5;
// `;

// const LogoContainer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   /* padding-left: 5px; */
//   color: #0c969b;
//   /* color: #f44e28; */
//   /* color: rgba(var(--color-text-secondary), 0.6); */
// `;

// const LineContent = styled.span`
//   display: flex;
//   align-items: center;
//   /* padding-top: 2px;
//   padding-bottom: 2px; */
// `;

type TechnologiesTerminalProps = {
  technologies: Array<Technology | undefined>;
} & React.HTMLAttributes<HTMLDivElement>

const TechnologiesTerminal = ({
  technologies,
  ...rest
}: TechnologiesTerminalProps) => {
  const numTechs = technologies.length;

  return (
    <div {...rest}>
      <StatusBar file="index.ts" lineNum={numTechs} />
      <pre className="bg-terminal text-left flex flex-col m-0 p-2 overflow-hidden gap-1 h-full">
        {technologies.map((tech, i) => (
          <Fragment key={tech ? `${tech.name}_${i}` : `technology_${i}`}>
            {tech &&
              <div key={tech.name} className="flex items-center p-0 hover:bg-primary">
                <span className="flex text-right pr-4 select-none opacity-50">
                  {i + 1}
                </span>
                <span className="flex items-center w-full">
                  <a href={tech.href} className="flex w-full" rel="noopener noreferrer" target="_blank">
                    <span className="text-[#0c969b]">import</span>
                    <span className="text-[#4876d6]"> &apos;{tech.name}&apos; </span>
                    <div className="flex items-center justify-center text-[#0c969b]">{tech.icon}</div>
                    <div className="text-[#994cc3]">;</div>
                  </a>
                </span>
              </div>
            }
          </Fragment>
        ))}
      </pre>
    </div>
  );
};

export default TechnologiesTerminal;
