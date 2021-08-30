import styled from '@emotion/styled';

const Quote = styled.blockquote`
  border-left: 10px solid var(--color-app-secondary);
  border-radius: 10px;
  background-color: var(--color-app-primary);
  min-height: 5rem;
  padding: 0.5em 10px;
  font-style: italic;
  quotes: "\\201C""\\201D""\\2018""\\2019";
  ::before {
    content: open-quote;
    font-size: 4em;
    line-height: 0.1em;
    margin-right: 0.25em;
    vertical-align: -0.4em;
  }
  p {
    display: inline;
    font-family: monospace;
    font-size: 1rem;
  }
`;

export default function BlockQuote(props: { children: string }) {
  return (
    <Quote className="max-w-4xl my-5">{props.children}</Quote>
  );
}