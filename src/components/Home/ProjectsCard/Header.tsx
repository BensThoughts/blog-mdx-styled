import styled from '@emotion/styled';

const Status = styled.div`
display: flex;
align-items: center;
z-index: -1;
position: relative;
margin: 10px 0px 40px;
width: 100%;
white-space: nowrap;
font-size: 1.5rem;
backdrop-filter: var(--app-backdrop-filter);
color: rgb(var(--color-text-secondary));

  &::after {
  content: "";
  display: block;
  position: relative;
  top: 0px;
  width: 100%;
  height: 2px;
  margin-left: 20px;
  background-color: rgb(var(--color-app-secondary));
  z-index: -1;
  backdrop-filter: var(--app-backdrop-filter);
  }

  /* &::before {
  content: "";
  display: block;
  position: relative;
  top: 0px;
  width: 100%;
  height: 2px;
  margin-right: 20px;
  background-color: rgb(var(--color-app-secondary));
  z-index: -1;
  backdrop-filter: var(--app-backdrop-filter);
  } */
`;

export default function Header() {
  return (
    <Status>Zero Inbox</Status>
  );
}
