import Logo from '@app/components/Logo';

import MenuItem from '@app/components/MenuItem';
import ThemeToggle from '@app/components/ThemeToggle';

import styled from '@emotion/styled';

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 3.5rem;
  margin-bottom: 2rem;
  padding: 0px;
  position: sticky;
  top: 0px;
  background: var(--color-bg-toggle);
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  align-content: space-between;
  padding-top: 0px;
  background-color: var(--color-bg-toggle);
`;

const Header = (props: any) => {
  return (
    <Nav {...props}>
      <div className="ml-3 items-center">
        <Logo></Logo>
      </div>

      <div className="hidden md:block">
        <NavLinks className="flex items-center justify-end content-between pt-0">
          <MenuItem to="/">Home</MenuItem>
          <MenuItem to="/blog">Blog</MenuItem>
          <MenuItem to="/about">About</MenuItem>
          <MenuItem to="/projects">Project</MenuItem>
          <ThemeToggle />
        </NavLinks>
      </div>
    </Nav>
  );
};

export default Header;