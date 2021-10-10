import Highlight, {defaultProps, Language, PrismTheme} from 'prism-react-renderer';
import styled from '@emotion/styled';

import MyTheme from './theme/index';

const Pre = styled.pre`

`;

const Line = styled.div`
  display: block;
  /* table-layout: fixed; */
`;

const LineNo = styled.span`
  text-align: right;
  padding-right: 1em;
  user-select: none;
  opacity: 0.6;
`;

const LineContent = styled.span`
  /* color: var(--color-text-primary); */
  /* display: table-cell; */
`;

interface CodeElementProps {
  children: string,
  className: string
}


export default function CodeElement({
  children,
  className,
}: CodeElementProps) {
  const language = className.replace('language-', '').split(':')[0] as Language;
  let codeTitle = className.substr(className.indexOf(':') + 1);
  if (codeTitle.startsWith('language')) {
    codeTitle = language;
  }
  return (
    <div className="flex flex-col w-full mx-auto">
      {codeTitle && <div
        className="self-end italic text-secondary text-sm md:text-base border-l-2 border-r-2 border-t-2 border-solid border-secondary border-opacity-40 rounded-t-md max-w-max px-2 py-1 select-none"
        aria-label="Command Line Title"
      >
        {codeTitle}
      </div>
      }
      <div className={`md:max-w-full border-secondary bg-terminal bg-opacity-60 font-mono text-sm md:text-base border-2 border-solid border-opacity-30 rounded-lg ${codeTitle ? 'rounded-t-none rounded-l-lg' : ''}`}>
        <Highlight
          {...defaultProps}
          theme={MyTheme as PrismTheme}
          code={children}
          language={language}
        >
          {({className, style, tokens, getLineProps, getTokenProps}) => (
            <Pre className={`overflow-x-auto w-full text-left mt-0 text-primary p-1 ${className}`}>
              {tokens.map((line, i) => (
                <Line key={i} {...getLineProps({line, key: i})} className="md:table">
                  <LineNo className="hidden md:table-cell text-primary">{i < 9 ? '0' : ''}{i + 1}</LineNo>
                  <LineContent className="text-primary md:table-cell w-full">
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({token, key})} />
                    ))}
                  </LineContent>
                </Line>
              ))}
            </Pre>
          )}
        </Highlight>
      </div>
    </div>


  );
};
