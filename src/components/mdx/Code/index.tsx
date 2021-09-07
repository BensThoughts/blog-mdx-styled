/**
 * Styles are in global.css for now because of Code Title
 * 
 */
import Highlight, { defaultProps, Language, PrismTheme } from 'prism-react-renderer';
import styled from '@emotion/styled';

import MyTheme from './theme/index';

const Pre = styled.pre`
  /* background-color: rgb(var(--color-bg-terminal)); */
  /* color: rgb(var(--color-text-primary)); */
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
  className
}: CodeElementProps) {
  const language = className.replace('language-', '') as Language;
  
  return (
    <div className="max-w-xs md:max-w-full">
      <Highlight
        {...defaultProps}
        theme={MyTheme as PrismTheme}
        code={children}
        language={language}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <Pre className={`overflow-x-auto text-left mt-0 text-primary border-t-2 border-secondary border-solid pt-2 ${className}`}>
            {tokens.map((line, i) => (
              <Line key={i} {...getLineProps({ line, key: i })} className="md:table">
                <LineNo className="hidden md:table-cell text-primary">{i + 1}</LineNo>
                <LineContent className="text-primary md:table-cell">
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </LineContent>
              </Line>
            ))}
          </Pre>
        )}
      </Highlight>
    </div>
   
  );
};