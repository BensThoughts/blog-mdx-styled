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
    <div className="flex flex-col mx-auto w-full">
      {codeTitle && <div
        className="self-end px-2 py-1 max-w-max text-sm italic rounded-t-md border-t-2 border-r-2 border-l-2 border-opacity-40 border-solid select-none text-secondary md:text-base border-secondary"
        aria-label="Command Line Title"
      >
        {codeTitle}
      </div>
      }
      <div className={`md:max-w-full border-secondary bg-terminal font-mono text-sm md:text-base border-2 border-solid border-opacity-30 rounded-lg ${codeTitle ? 'rounded-t-none rounded-l-lg' : ''}`}>
        <Highlight
          {...defaultProps}
          theme={MyTheme as PrismTheme}
          code={children}
          language={language}
        >
          {({className, style, tokens, getLineProps, getTokenProps}) => (
            <Pre className={`overflow-x-auto p-1 mt-0 w-full text-left text-primary ${className}`}>
              {tokens.map((line, i) => (
                <Line key={i} {...getLineProps({line, key: i})} className="md:table">
                  <LineNo className="hidden md:table-cell text-primary">{i < 9 ? '0' : ''}{i + 1}</LineNo>
                  <LineContent className="w-full text-primary md:table-cell">
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
