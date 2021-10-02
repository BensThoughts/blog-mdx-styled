import styled from '@emotion/styled';

const LineNumbers = styled.div`
  height: 100%;
  display: flex;
  background-color: #0c2e4e;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1;
`;

const LineNumbersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  min-width: 38px;
  text-align: right;
  color: #55718d;
  z-index: 1;
  padding: 16px 0;
  min-height: 100%;
  user-select: none;
`;

const LineNumber = styled.span`
  padding: 0 6px;
`;

const TypingArea = styled.span`
  display: table;
  position: relative;
  padding: 16px 20px;

`;

export default function CodeBox() {
  return (
    <div className="flex overflow-auto rounded-md h-full">
      <code className="flex items-center relative h-full w-full">
        <pre className="flex items-start">
          <LineNumbers>
            <LineNumbersContainer>
              <LineNumber>1</LineNumber>
              <LineNumber>2</LineNumber>
              <LineNumber>3</LineNumber>
              <LineNumber>4</LineNumber>
              <LineNumber>5</LineNumber>
              <LineNumber>6</LineNumber>
              <LineNumber>~</LineNumber>
              <LineNumber>~</LineNumber>
              <LineNumber>~</LineNumber>
            </LineNumbersContainer>
          </LineNumbers>
          <TypingArea>
            <span>This is a test</span>
          </TypingArea>
        </pre>
      </code>
    </div>
  );
}
