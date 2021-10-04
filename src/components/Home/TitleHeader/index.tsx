import styled from '@emotion/styled';

const Header = styled.h1`
display: flex;
align-items: center;
height: 100%;
width: 100%;
z-index: -1;
position: relative;
margin: 40px 0px 40px;
white-space: nowrap;
font-family: monospace;
font-size: 1.5rem;
backdrop-filter: var(--app-backdrop-filter);

@media (min-width: 768px) {
  font-size: 2rem;
}

&::before {
  content: "";
  position: relative;
  top: 0px;
  width: 100%;
  height: 2px;
  margin-right: 20px;
  background-color: rgb(var(--color-app-secondary));
  z-index: -1;
  backdrop-filter: var(--app-backdrop-filter);
}

&::after {
  content: "";
  position: relative;
  top: 0px;
  width: 100%;
  height: 2px;
  margin-left: 20px;
  background-color: rgb(var(--color-app-secondary));
  z-index: -1;
  backdrop-filter: var(--app-backdrop-filter);

  /* @media (min-width: 768px) {
    width: 300px;
  } */
}
`;


type TitleHeaderProps = {
  children: React.ReactNode;
  reversed?: boolean;
}

export default function TitleHeader({children, reversed = false}: TitleHeaderProps) {
  return (
    <div className="flex h-full items-center">
      <Header>{children}</Header>
    </div>
  );
}

// const InverseHeader = styled.h1`
// display: flex;
// align-items: center;
// justify-content: right;
// position: relative;
// margin: 10px 0px 40px;
// width: 100%;
// white-space: nowrap;
// font-size: 1.5rem;
// backdrop-filter: var(--app-backdrop-filter);

// @media (min-width: 768px) {
//   font-size: 2rem;
// }

// &::after {
//   position: relative;
//   bottom: 0px;
//   content: "<";
//   margin-left: 10px;
//   color: rgb(--color-text-primary);
//   font-weight: 400;
//   font-family: monospace;
//   backdrop-filter: var(--app-backdrop-filter);
// }

// &::before {
//   content: "";
//   display: block;
//   position: relative;
//   top: 0px;
//   width: 100%;
//   height: 2px;
//   margin-right: 20px;
//   background-color: rgb(var(--color-app-secondary));
//   backdrop-filter: var(--app-backdrop-filter);

//   @media (min-width: 768px) {
//     width: 300px;
//   }
// }
// `;
