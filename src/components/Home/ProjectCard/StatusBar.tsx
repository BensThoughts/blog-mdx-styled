import React from 'react';

// const StatusBarContainer = styled.div`
//   --statusBarHeight: 25px;
//   -webkit-text-size-adjust: 100%;
//   display: flex;
//   height: var(--statusBarHeight);
//   justify-content: space-between;
//   align-items: center;
//   background-color: rgba(var(--statusBarBackgroundColor), 1);
//   color: rgba(var(--statusBarTextColor), 1);
//   margin-top: auto;
//   width: 100%;
// `;

// const StatusBarLeft = styled.div`
//   display: flex;
//   align-items: stretch;
// `;

// const Status = styled.div`
//   --editingModeArrowWidth: 9px;
//   /* --statusBarAccentColor: #8095ff;
//   --statusBarTextColor: #55718d;
//   --statusBarBackgroundColor: #0a2540; */
//   --statusBarPaddingSmall: 8px;
//   --statusBarPaddingLarge: 16px;
//   --statusBarHeight: 25px;
//   background-color: rgba(var(--statusBarAccentColor), 0.8);
//   color: rgba(var(--statusBarAccentColorText), 1);
//   text-transform: uppercase;
//   text-align: center;
//   padding: 2px 5px 0 var(--editingModeArrowWidth);
//   margin: 0 var(--editingModeArrowWidth) 0 0;
//   position: relative;
//   height: 100%;

//   &::after {
//     content: "";
//     position: absolute;
//     top: 0;
//     right: 0;
//     transform: translateX(100%);
//     width: 0;
//     height: 0;
//     border-left: var(--editingModeArrowWidth) solid rgba(var(--statusBarAccentColor), 0.8);
//     border-bottom: calc(var(--statusBarHeight) / 2) solid transparent;
//     border-right: 0 solid transparent;
//     border-top: calc(var(--statusBarHeight) / 2) solid transparent;
//   }
// `;

const StatusBarContainer = ({children, className, ...rest}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={`flex h-[25px] justify-between items-center mt-auto w-full
                bg-statusBarBackgroundColor text-statusBarTextColor
                font-mono text-base select-none ${className}`}
    {...rest}
  >
    {children}
  </div>
);

const StatusBarLeft = ({children, className, ...rest}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={`flex items-stretch ${className}`}
    {...rest}
  >
    {children}
  </div>
);

const Status = ({children, className, ...rest}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={`bg-statusBarAccentColor/80 text-statusBarAccentColorText uppercase
                h-full text-center pt-[2px] pr-[5px] pb-0 pl-[9px]
                my-0 mr-[9px] ml-0 relative after:content-[''] after:absolute
                after:top-0 after:right-0 after:translate-x-full after:w-0
                after:h-0 after:border-l-[9px] after:border-l-statusBarAccentColor/80
                after:[border-top:calc(25px/2)_solid_transparent]
                after:[border-bottom:calc(25px/2)_solid_transparent]
                after:[border-right:0_solid_transparent] ${className}`}
    {...rest}
  >
    {children}
  </div>
);


// const File = styled.div`
//   /* --statusBarAccentColor: #8095ff; */
//   color: rgba(var(--statusBarTextColorAccent), 1);
//   padding-top: 2px;
//   padding-right: 5px;
//   margin: 0 0 0 5px;
//   @media (min-width: 1024px) {
//     margin: 0 0 0 10px;
//   }

// `;

const File = ({children, className, ...rest}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={`text-statusBarTextColorAccent pt-[2px] pr-[5px]
                ml-[5px] my-0 mr-0 xl:ml-[10px] ${className}`}
    {...rest}
  >
    {children}
  </div>
);

// const StatusBarRight = styled.div`
//   display: flex;
//   align-items: stretch;
//   padding-top: 2px;
// `;

const StatusBarRight = ({children, className, ...rest}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={`flex items-stretch pt-[2px] ${className}`}
    {...rest}
  >
    {children}
  </div>
);

// const DownProgress = styled.div`
//   --statusBarPaddingSmall: 8px;
//   --statusBarPaddingLarge: 16px;
//   padding: 0 5px 0 0 ;
//   @media (min-width: 1024px) {
//     padding: 0 var(--statusBarPaddingSmall) 0 0;
//   }
// `;

const DownProgress = ({children, className, ...rest}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={`py-0 pl-0 pr-[5px] xl:pr-[8px] ${className}`}
    {...rest}
  >
    {children}
  </div>
);

// const LineIcon = styled.div`
//   --statusBarPaddingSmall: 8px;
//   --statusBarPaddingLarge: 16px;
//   padding: 0 5px 0 0;
//   @media (min-width: 1024px) {
//     padding: 0 var(--statusBarPaddingLarge) 0 0 ;
//   }
// `;

const LineIcon = ({children, className, ...rest}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={`py-0 pl-0 pr-[5px] xl:pr-[16px] ${className}`}
    {...rest}
  >
    {children}
  </div>
);


// const LineProgress = styled.div`
//   --statusBarPaddingSmall: 8px;
//   --statusBarPaddingLarge: 16px;
//   padding: 0 var(--statusBarPaddingSmall) 0 0 ;
// `;

const LineProgress = ({children, className, ...rest}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={`py-0 pl-0 pr-[8px] ${className}`}
    {...rest}
  >
    {children}
  </div>
);

// const Line = styled.div`
//   --statusBarPaddingSmall: 8px;
//   --statusBarPaddingLarge: 16px;
//   padding: 0 0 0 0 ;
//   @media (min-width: 1024px) {
//     padding: 0 var(--statusBarPaddingLarge) 0 0 ;
//   }
// `;

const Line = ({children, className, ...rest}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={`p-0 xl:pr-[16px] ${className}`}
    {...rest}
  >
    {children}
  </div>
);

// const LineColon = styled.div`
//   --statusBarPaddingSmall: 8px;
//   --statusBarPaddingLarge: 16px;
//   padding: 0 0 0 0 ;
//   @media (min-width: 1024px) {
//     padding: 0 var(--statusBarPaddingLarge) 0 0 ;
//   }
// `;

const LineColon = ({children, className, ...rest}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={`p-0 xl:pr-[16px] ${className}`}
    {...rest}
  >
    {children}
  </div>
);

// const CurrentColumn = styled.div`
//   --statusBarPaddingSmall: 8px;
//   --statusBarPaddingLarge: 16px;
//   padding: 0 5px 0 0 ;
//   @media (min-width: 1024px) {
//     padding: 0 var(--statusBarPaddingLarge) 0 0 ;
//   }
// `;

const CurrentColumn = ({children, className, ...rest}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={`py-0 pl-0 pr-[5px] xl:pr-[16px] ${className}`}
    {...rest}
  >
    {children}
  </div>
);

export default function StatusBar({
  file = 'index.ts',
  lineNum = 0,
}) {
  return (
    <StatusBarContainer>
      <StatusBarLeft>
        <Status>
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
