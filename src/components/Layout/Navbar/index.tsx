import styled from '@emotion/styled';

import Logo from '@app/components/Logo';
import MenuItem from '@app/components/MenuItem';
import ThemeToggle from '@app/components/ThemeToggle';
import Breadcrumbs from '@app/components/Breadcrumbs';
import { useState } from 'react';
import Drawer from '@app/components/Drawer';
import IconButton from '@app/components/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen} title="Menu">
          <NavLinks className="flex flex-col items-center justify-end content-between pt-0 mr-6">
            <MenuItem to="/" className="hover:bg-accent">Home</MenuItem>
            <MenuItem to="/blog">Blog</MenuItem>
            <MenuItem to="/about">About</MenuItem>
            <MenuItem to="/projects">Projects</MenuItem>
          </NavLinks>
      </Drawer>

      <Nav {...props}>
        {/* Small- Screens */}  
        <div className="flex md:hidden w-full justify-between items-center mx-3">
          <ThemeToggle />
          <IconButton onClick={() => setIsOpen(!isOpen)} className="md:hidden mr-3">
            <FontAwesomeIcon icon={['fas', 'bars']} inverse size="lg" className="text-icon-primary" />
          </IconButton>
        </div>

        {/* Medium+ Screens */}  
        <div className="hidden md:flex md:justify-between md:items-center md:w-full md:pt-0 md:mr-3">
          <div className="ml-3">
            <div className="flex items-center">
              <div className="mr-3">
                <Logo />
              </div>
              <div>
                <Breadcrumbs />
              </div>
            </div>
          </div>
          <NavLinks className="flex items-center justify-end content-between">
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