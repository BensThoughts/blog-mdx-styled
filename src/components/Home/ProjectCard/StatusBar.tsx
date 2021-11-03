import styled from '@emotion/styled';

const StatusBarContainer = styled.div`
  --statusBarHeight: 25px;
  -webkit-text-size-adjust: 100%;
  display: flex;
  height: var(--statusBarHeight);
  justify-content: space-between;
  align-items: center;
  background-color: rgba(var(--statusBarBackgroundColor), 1);
  color: rgba(var(--statusBarTextColor), 1);
  margin-top: auto;
  width: 100%;
`;

const StatusBarLeft = styled.div`
  display: flex;
  align-items: stretch;
`;

const Status = styled.div`
  --editingModeArrowWidth: 9px;
  /* --statusBarAccentColor: #8095ff;
  --statusBarTextColor: #55718d;
  --statusBarBackgroundColor: #0a2540; */
  --statusBarPaddingSmall: 8px;
  --statusBarPaddingLarge: 16px;
  --statusBarHeight: 25px;
  background-color: rgba(var(--statusBarAccentColor), 0.8);
  color: rgba(var(--statusBarAccentColorText), 1);
  text-transform: uppercase;
  text-align: center;
  padding: 2px 5px 0 var(--editingModeArrowWidth);
  margin: 0 var(--editingModeArrowWidth) 0 0;
  position: relative;
  height: 100%;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    transform: translateX(100%);
    width: 0;
    height: 0;
    border-left: var(--editingModeArrowWidth) solid rgba(var(--statusBarAccentColor), 0.8);
    border-bottom: calc(var(--statusBarHeight) / 2) solid transparent;
    border-right: 0 solid transparent;
    border-top: calc(var(--statusBarHeight) / 2) solid transparent;
  }
`;

const File = styled.div`
  /* --statusBarAccentColor: #8095ff; */
  color: rgba(var(--statusBarTextColorAccent), 1);
  padding-top: 2px;
  padding-right: 5px;
  margin: 0 0 0 5px;
  @media (min-width: 1024px) {
    margin: 0 0 0 10px;
  }

`;

const StatusBarRight = styled.div`
  display: flex;
  align-items: stretch;
  padding-top: 2px;
`;

const DownProgress = styled.div`
  --statusBarPaddingSmall: 8px;
  --statusBarPaddingLarge: 16px;
  padding: 0 5px 0 0 ;
  @media (min-width: 1024px) {
    padding: 0 var(--statusBarPaddingSmall) 0 0;
  }
`;

const LineIcon = styled.div`
  --statusBarPaddingSmall: 8px;
  --statusBarPaddingLarge: 16px;
  padding: 0 5px 0 0;
  @media (min-width: 1024px) {
    padding: 0 var(--statusBarPaddingLarge) 0 0 ;
  }

`;

const LineProgress = styled.div`
  --statusBarPaddingSmall: 8px;
  --statusBarPaddingLarge: 16px;
  padding: 0 var(--statusBarPaddingSmall) 0 0 ;
`;

const Line = styled.div`
  --statusBarPaddingSmall: 8px;
  --statusBarPaddingLarge: 16px;
  padding: 0 0 0 0 ;
  @media (min-width: 1024px) {
    padding: 0 var(--statusBarPaddingLarge) 0 0 ;
  }
`;

const LineColon = styled.div`
  --statusBarPaddingSmall: 8px;
  --statusBarPaddingLarge: 16px;
  padding: 0 0 0 0 ;
  @media (min-width: 1024px) {
    padding: 0 var(--statusBarPaddingLarge) 0 0 ;
  }
`;

const CurrentColumn = styled.div`
  --statusBarPaddingSmall: 8px;
  --statusBarPaddingLarge: 16px;
  padding: 0 5px 0 0 ;
  @media (min-width: 1024px) {
    padding: 0 var(--statusBarPaddingLarge) 0 0 ;
  }
`;

export default function StatusBar({
  file = 'index.ts',
  lineNum = 0,
}) {
  return (
    <StatusBarContainer className="font-mono text-base select-none">
      <StatusBarLeft>
        <Status className="text-center h-full">
          NORMAL
        </Status>
        <File>
          <span>{file}</span>
        </File>
      </StatusBarLeft>
      <StatusBarRight>
        <DownProgress>100%</DownProgress>
        <LineIcon>☰</LineIcon>
        <LineProgress>{lineNum}/{lineNum}</LineProgress>
        <Line>ln</Line>
        <LineColon>:</LineColon>
        <CurrentColumn>4</CurrentColumn>
      </StatusBarRight>
    </StatusBarContainer>
  );
}
