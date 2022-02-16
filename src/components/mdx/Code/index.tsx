import Highlight, {defaultProps, Language, PrismTheme, Prism} from 'prism-react-renderer';
import styled from '@emotion/styled';

import MyTheme from './theme/index';

import rangeParser from 'parse-numeric-range';
import {useMemo} from 'react';

import styles from './theme/highlight-line.module.css';

const calculateLinesToHighlight = (meta: string) => {
  if (!meta) return false;
  const regEx = /{([\d,-]+)}/;
  if (regEx.test(meta)) {
    const RE = regEx.exec(meta);
    const strlineNumbers = RE ? RE[1] : null;
    if (!strlineNumbers) return false;
    const lineNumbers = rangeParser(strlineNumbers);
    return (index: number) => (lineNumbers.includes(index + 1));
  } else {
    return (index: number) => false;
  }
};

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
  children: string;
  className: string;
  metastring: string;
}

export default function CodeElement({
  children,
  className = '',
  metastring,
}: CodeElementProps) {
  const shouldHighlightLine = useMemo(() => calculateLinesToHighlight(metastring), [metastring]);

  // Prism can be used to customize regex of languages
  // console.log(Prism.languages.bash);
  const language = className.replace('language-', '').split(':')[0] as Language;
  let codeTitle = className.substring(className.indexOf(':') + 1);
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
          Prism={Prism}
        >
          {({className, style, tokens, getLineProps, getTokenProps}) => (
            <Pre className={`overflow-x-auto p-1 mt-0 w-full text-left text-primary ${className}`}>
              {tokens.map((line, idx) => {
                const lineProps = getLineProps({line, key: idx});
                lineProps.className = `${lineProps.className} md:table`;
                if (typeof shouldHighlightLine === 'function') {
                  lineProps.className = shouldHighlightLine(idx)
                    ? `${lineProps.className} ${styles.highlightLine}`
                    : lineProps.className;
                }
                return (
                  <Line key={idx} {...lineProps}>
                    <LineNo className="hidden md:table-cell text-primary">{idx < 9 ? '0' : ''}{idx + 1}</LineNo>
                    <LineContent className="w-full text-primary md:table-cell">
                      {line.map((token, key) => (
                        <span
                          key={key}
                          {...getTokenProps({token, key})}
                        />
                      ))}
                    </LineContent>
                  </Line>
                );
              })}
            </Pre>
          )}
        </Highlight>
      </div>
    </div>
  );
};
