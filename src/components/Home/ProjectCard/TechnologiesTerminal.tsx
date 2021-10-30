import styled from '@emotion/styled';
import StatusBar from './StatusBar';

const Pre = styled.pre`
  background-color: rgba(var(--color-bg-terminal), 1);
  text-align: left;
  display: flex;
  flex-direction: column;
  margin: 0em 0;
  padding: 0.5em;
  overflow: hidden;
  gap: 4px;
  height: 100%;
  /* background-color: rgba(var(--color-bg-terminal), 1); */
`;

const Keyword = styled.span`
  color: rgb(12, 150, 155);
  /* height: 100%; */
`;

// const Plain = styled.span`
//   color: rgb(var(--color-text-primary));
//   /* height: 100%; */
// `;

const String = styled.span`
  color: rgb(72, 118, 214);
  /* height: 100%;
  vertical-align: middle;
  text-align: center; */
`;

const Punctuation = styled.div`
  color: rgb(153, 76, 195);
  /* height: 100%; */

`;

const Line = styled.div`
  display: flex;
  align-items: center;
  /* height: 100%; */
  /* vertical-align: middle; */
  padding: 0px;
`;

const LineNo = styled.span`
  display: flex;
  text-align: right;
  padding-right: 1em;
  user-select: none;
  opacity: 0.5;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* padding-left: 5px; */
  color: rgb(12, 150, 155);
  /* color: #f44e28; */
  /* color: rgba(var(--color-text-secondary), 0.6); */
`;

const LineContent = styled.span`
  display: flex;
  align-items: center;
  /* padding-top: 2px;
  padding-bottom: 2px; */
`;


type Technologies = {
  name: string,
  icon: React.ReactNode,
  href: string,
}

type TechnologiesTerminalProps = {
  technologies: Technologies[]
} & React.HTMLAttributes<HTMLDivElement>

const TechnologiesTerminal = ({
  technologies,
  ...rest
}: TechnologiesTerminalProps) => (
  <div {...rest}>
    <StatusBar file="index.ts" />
    <Pre className="">
      {technologies.map((tech, i) => (
        <Line key={tech.name} className="hover:bg-primary">
          <LineNo>
            {i + 1}
          </LineNo>
          <LineContent className="w-full">
            <a href={tech.href} className="flex w-full">
              <Keyword>import</Keyword>
              {/* <Plain> {tech.name} </Plain>
              <Keyword>from</Keyword> */}
              <String> &apos;{tech.name}&apos; </String>

              <LogoContainer>{tech.icon}</LogoContainer>
              <Punctuation>;</Punctuation>
            </a>
          </LineContent>
        </Line>
      ))}
    </Pre>
  </div>
);

export default TechnologiesTerminal;
