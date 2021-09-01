/**
 * Styles are in global.css for now because of Code Title
 * 
 */

import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import dracula from 'prism-react-renderer/themes/dracula';
import vsLight from 'prism-react-renderer/themes/vsLight';
import styled from '@emotion/styled';
import { useContext } from 'react';

import { ThemeContext } from '@app/utils/colorMode';

const Pre = styled.pre`
  background-color: var(--color-bg-terminal);
  color: var(--color-text-primary);
`;

const Line = styled.div`
  display: table-row;
`;

const LineNo = styled.span`
  text-align: right;
  padding-right: 1em;
  user-select: none;
  opacity: 0.5;
`;

const LineContent = styled.span`
  display: table-cell;
`;

interface CodeElementProps {
  children: string,
  className: string
}

export default function CodeElement(props: CodeElementProps) {
  const { colorMode } = useContext(ThemeContext);
  const children = props.children;
  const language = props.className.replace('language-', '') as Language;

  let theme = vsLight;
  if (colorMode === 'dark') {
    theme = dracula;
  }

  return (
    <Highlight
      {...defaultProps}
      theme={theme}
      code={children}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Pre className={`overflow-x-auto text-left ${className}`}>
          {tokens.map((line, i) => (
            <Line key={i} {...getLineProps({ line, key: i })}>
              <LineNo className="hidden md:table-cell">{i + 1}</LineNo>
              <LineContent>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </LineContent>
            </Line>
          ))}
        </Pre>
      )}
    </Highlight>
  );
};