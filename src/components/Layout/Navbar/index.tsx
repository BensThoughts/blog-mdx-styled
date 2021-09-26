import {useState} from 'react';
import styled from '@emotion/styled';

import MenuItem from '@app/components/Layout/MenuItem';
import ThemeToggle from '@app/components/ThemeToggle';
import Breadcrumbs from '@app/components/Breadcrumbs';
import Drawer from '@app/components/Drawer';
import IconButton from '@app/components/IconButton';
import NavHider from './NavHider';

import Monitor from '@app/components/Icons/Monitor';
import Bars from '@app/components/Icons/Bars';

const Nav = styled.nav`
  /* background-color: rgba(0, 0, 0, 0); */
  /* background-image: radial-gradient(rgba(0,0,0,0) 1px,rgba(var(--color-bg-primary), 0.5) 1px );
  background-size: 4px 4px;
  backdrop-filter: brightness(100%) blur(2px); */
  display: flex;
  z-index: 49;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  /* margin-bottom: 2rem; */
  padding: 0px;
  /* position: fixed; */
  /* top: 0px; */
  transition-property: background, color;
  transition-duration: 300ms;
  transition-timing-function: ease-in-out;
  will-change: background, color;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  align-content: space-between;
  padding-top: 0px;
  background: var(--color-app-primary);
  /* transition: background 0.25s ease-in-out;
  will-change: background; */
`;

// bg-app-bg shadow-lg backdrop-filter bg-opacity-70 backdrop-blur-sm

type NavBarProps = {
  className?: string;
}

export default function Navbar({className, ...rest}: NavBarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen} title="Menu" description="Try something new!">
        <NavLinks className="flex flex-col items-center justify-end content-between pt-0 w-full">
          <MenuItem href="/" onClick={() => setIsOpen(false)} className="hover:bg-secondary w-full h-10 flex items-center justify-center text-xl mt-7">Home</MenuItem>
          <MenuItem href="/blog" onClick={() => setIsOpen(false)} className="hover:bg-secondary w-full h-10 flex items-center justify-center text-xl">Blog</MenuItem>
          {/* <MenuItem href="/projects" onClick={() => setIsOpen(false)} className="hover:bg-secondary w-full h-10 flex items-center justify-center text-xl">Projects</MenuItem>
          <MenuItem href="/about" onClick={() => setIsOpen(false)} className="hover:bg-secondary w-full h-10 flex items-center justify-center text-xl">About</MenuItem>
          <MenuItem href="/contact" onClick={() => setIsOpen(false)} className="hover:bg-secondary w-full h-10 flex items-center justify-center text-xl">Contact</MenuItem> */}
        </NavLinks>
      </Drawer>
      <NavHider>
        <Nav {...rest} className={`bg-app-bg shadow-lg backdrop-filter bg-opacity-70 backdrop-blur-sm ${className}`}>
          {/* Small- Screens */}
          <div className="flex md:hidden w-full justify-between items-center mx-3">
            <ThemeToggle />
            <IconButton onClick={() => setIsOpen(!isOpen)} className="md:hidden mr-3">
              <Bars color="black" />
            </IconButton>
          </div>

          {/* Medium+ Screens */}
          <div className="hidden md:flex md:justify-between md:items-center md:w-full md:pt-0 md:mr-3">
            <div className="ml-3">
              <div className="flex items-center">
                <div className="mr-3">
                  <Monitor />
                </div>
                <div>
                  <Breadcrumbs />
                </div>
              </div>
            </div>
            <NavLinks className="flex items-center justify-end content-between">
              <MenuItem animatedLink href="/" className="mx-4">Home</MenuItem>
              <MenuItem animatedLink href="/blog" className="mx-4">Blog</MenuItem>
              {/* <MenuItem animatedLink href="/projects" className="mx-4">Projects</MenuItem>
              <MenuItem animatedLink href="/about" className="mx-4">About</MenuItem>
              <MenuItem animatedLink href="/contact" className="mx-4">Contact</MenuItem> */}
              <ThemeToggle />
            </NavLinks>
          </div>
        </Nav>
      </NavHider>

    </>
  );
};
