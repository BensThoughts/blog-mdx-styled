import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import dracula from 'prism-react-renderer/themes/dracula';
import styled from '@emotion/styled';

const Pre = styled.pre`
  text-align: left;
  overflow-x: auto;
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

type ThemeMode = 'light' | 'dark';

export default function CodeElement(props: CodeElementProps) {
  const children = props.children;
  const language = props.className.replace('language-', '') as Language;

  return (
    <Highlight
      {...defaultProps}
      theme={dracula}
      code={children}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Pre className={className}>
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