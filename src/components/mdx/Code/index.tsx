import Highlight, {defaultProps, Language, PrismTheme, Prism} from 'prism-react-renderer';
import type {DetailedHTMLProps, HTMLAttributes} from 'react';
import MyTheme from './theme/index';

// import rangeParser from 'parse-numeric-range';
// import {useMemo} from 'react';

// import styles from './theme/highlight-line.module.css';
import React from '@app/components/Icons/Brands/React';

// const calculateLinesToHighlight = (meta: string) => {
//   if (!meta) return false;
//   const regEx = /{([\d,-]+)}/;
//   if (regEx.test(meta)) {
//     const RE = regEx.exec(meta);
//     const strlineNumbers = RE ? RE[1] : null;
//     if (!strlineNumbers) return false;
//     const lineNumbers = rangeParser(strlineNumbers);
//     return (index: number) => (lineNumbers.includes(index + 1));
//   } else {
//     return (index: number) => false;
//   }
// };

const Line = ({children, className, ...rest}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={`block ${className}`}
    {...rest}
  >
    {children}
  </div>
);

const LineNo = ({children, className, ...rest}: React.HTMLAttributes<HTMLSpanElement>) => (
  <span
    className={`text-right pr-4 select-none opacity-60 ${className}`}
    {...rest}
  >
    {children}
  </span>
);

type CodeElementProps = {
  // children: string;
  // className: string;
  // metastring?: string;
} & DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

export default function Code({
  children,
  className = '',
  // metastring,
  ...rest
}: CodeElementProps) {
  const match = /language-(\w+)/.exec(className || '');
  // const shouldHighlightLine = useMemo(() => calculateLinesToHighlight(metastring || ''), [metastring]);

  if (match) {
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
            code={typeof(children) === 'string' ? children : 'Error, children of Code was not a string'}
            language={language}
            Prism={Prism}
          >
            {({className, style, tokens, getLineProps, getTokenProps}) => (
              <pre className={`overflow-x-auto p-1 mt-0 w-full text-left text-primary ${className}`}>
                {tokens.map((line, idx) => {
                  const lineProps = getLineProps({line, key: idx});
                  lineProps.className = `${lineProps.className} md:table`;
                  // if (typeof shouldHighlightLine === 'function') {
                  //   lineProps.className = shouldHighlightLine(idx)
                  //     ? `${lineProps.className} ${styles.highlightLine}`
                  //     : lineProps.className;
                  // }
                  return (
                    <Line key={idx} {...lineProps}>
                      <LineNo className="hidden md:table-cell text-primary">{idx < 9 ? '0' : ''}{idx + 1}</LineNo>
                      <span className="w-full text-primary md:table-cell">
                        {line.map((token, key) => (
                          <span
                            key={key}
                            {...getTokenProps({token, key})}
                          />
                        ))}
                      </span>
                    </Line>
                  );
                })}
              </pre>
            )}
          </Highlight>
        </div>
      </div>
    );
  }
  return (
    <span className="px-2 py-1 rounded-md bg-terminal">
      <code className="text-color-inline-code" {...rest}>{children}</code>
    </span>
  );
};
