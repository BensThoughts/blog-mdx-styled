import styled from '@emotion/styled';

import Logo from '@app/components/Logo';
import MenuItem from '@app/components/MenuItem';
import ThemeToggle from '@app/components/ThemeToggle';
import Breadcrumbs from '@app/components/Breadcrumbs';
import { useState } from 'react';
import MyDialog from '@app/components/MyDialog';

const Nav = styled.nav`
  display: flex;
  z-index: 5;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 3.5rem;
  margin-bottom: 2rem;
  padding: 0px;
  position: sticky;
  top: 0px;
  background: var(--color-app-primary);
  transition: background 0.25s ease-in-out;
  will-change: background;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  align-content: space-between;
  padding-top: 0px;
  background: var(--color-app-primary);
  transition: background 0.25s ease-in-out;
  will-change: background;
`;

const Navbar: React.FC<{}> = (props) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
    <MyDialog isOpen={isOpen} setIsOpen={setIsOpen} />
    <Nav {...props}>
      <div className="ml-3 items-center">
          <Breadcrumbs />
      </div>

      <button 
        className="w-64 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
        onClick={() => setIsOpen(!isOpen)}
      >
        Open Modal
      </button>

      <div className="hidden md:block">
        <NavLinks className="flex items-center justify-end content-between pt-0 mr-6">
          <MenuItem to="/">Home</MenuItem>
          <MenuItem to="/blog">Blog</MenuItem>
          <MenuItem to="/about">About</MenuItem>
          <MenuItem to="/projects">Projects</MenuItem>
          <ThemeToggle />
        </NavLinks>
      </div>
    </Nav>
    </>
  );
};

export default Navbar;