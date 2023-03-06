import React, {useState} from 'react';
import Link from 'next/link';
import ThemeToggle from '@app/components/ThemeToggle';
import Breadcrumbs from '@app/components/Breadcrumbs';
import MenuDrawer from '@app/components/Layout/MenuDrawer';
import IconButton from '@app/components/IconButton';
import NavHider from './NavHider';

import {menuItems} from './menuItems';

import {
  Bars,
  Folder,
  Monitor,
} from '@app/components/Icons';
import UnderlineLinkWithIcon from '@app/components/UnderlineLinkWithIcon';

type NavBarProps = {
  className?: string;
}

export default function Navbar({className, ...rest}: NavBarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <MenuDrawer isOpen={isOpen} setIsOpen={setIsOpen} title="Menu" description="Short and sweet!">
        <div className="flex flex-col items-center justify-end content-between pt-0 mt-7 w-full">
          {menuItems.map((menuItem) => (
            <Link
              key={menuItem.href}
              href={menuItem.href}
              onClick={() => setIsOpen(false)}
              className="flex justify-center items-center w-full h-10 text-xl hover:bg-primary"
            >
              {menuItem.name}
            </Link>
          ))}
          <a
            href="assets/Benjamin-Blumenfeld-Jones-Resume-2023.pdf"
            download="Benjamin Blumenfeld-Jones Resume - 2023.pdf"
            className="flex justify-center items-center w-full h-10 text-xl hover:bg-primary text-secondary"
          >
            Resume
          </a>
        </div>
      </MenuDrawer>
      <NavHider>
        <nav
          className={`flex z-[49] items-center justify-between w-full p-0 transition-colors
                      duration-300 ease-in-out backdrop-blur-sm bg-opacity-70 shadow-lg
                      bg-app-bg ${className}`}
          {...rest}
        >

          {/* Medium+ Screens */}
          <div className="hidden md:flex md:justify-between md:items-center md:w-full md:pt-0 md:mx-3">
            <div className="flex gap-x-4 items-center">
              <Monitor size={26} className="text-icon-secondary" />
              <div className="flex gap-4 content-between items-center pt-0">
                {menuItems.map((menuItem) => (
                  <Link
                    key={menuItem.href}
                    href={menuItem.href}
                    className="link-underline link-underline-secondary"
                  >
                    {menuItem.name}
                  </Link>
                ))}
                <UnderlineLinkWithIcon
                  href="assets/Benjamin-Blumenfeld-Jones-Resume-2023.pdf"
                  download="Benjamin Blumenfeld-Jones Resume - 2023.pdf"
                  text="Resume"
                  className="text-secondary"
                  icon={<Folder className="mb-1 text-secondary" />}
                  iconPosition="left"
                />
              </div>
            </div>
            <div className="flex gap-x-4 justify-end items-center">
              <Breadcrumbs className="hidden xl:flex" />
              <ThemeToggle />
            </div>
          </div>

          {/* Small- Screens */}
          <div className="flex justify-between items-center mx-4 w-full md:hidden">

            <ThemeToggle />
            <IconButton onClick={() => setIsOpen(!isOpen)} className="md:hidden" aria-label="navigation menu">
              <Bars size={24} className="text-icon-primary" />
            </IconButton>

          </div>
        </nav>
      </NavHider>

    </>
  );
};
