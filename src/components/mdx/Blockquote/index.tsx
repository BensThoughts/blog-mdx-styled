import styled from '@emotion/styled';

const Quote = styled.blockquote`
  /* border-left: 10px solid rgb(var(--color-app-secondary)); */
  /* border-radius: 10px; */
  width: min(65ch, 100%);
  /* background-color: var(--color-app-primary); */
  padding: 0.5em 10px;
  font-style: italic;
  quotes: "\\201C""\\201D""\\2018""\\2019";
  ::before {
    /* content: open-quote; */
    font-size: 4em;
    line-height: 0.1em;
    margin-right: 0.25em;
    /* vertical-align: -0.4em; */
  }
  div {
    display: inline;
    font-family: monospace;
    font-size: 1rem;
    width: min(65ch, 100%);
  }
  /* p {
    display: inline;
    font-family: monospace;
    font-size: 1rem;
    width: min(65ch, 100%);
  } */
`;

export default function BlockQuote(props: { children: string }) {
  return (
    <Quote className="mx-auto bg-primary bg-opacity-60 border-l-8 border-secondary border-solid rounded-lg">
      <div className="flex h-full w-full items-center justify-center">
        {props.children}
      </div>
    </Quote>
  );
}
