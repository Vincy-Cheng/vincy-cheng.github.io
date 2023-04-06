import { clsx } from 'clsx';
import React from 'react';
import NavbarMenu from './NavbarMenu';

type NavbarProps = {
  isSideBarOpen: boolean;
};

const Navbar = ({ isSideBarOpen }: NavbarProps) => {
  const sideBarOpenWidth = 'sm:w-[240px] ';
  const sideBarCloseWidth = 'sm:w-[52px]';
  return (
    <div
      className={clsx(
        'p-2 relative duration-300',
        isSideBarOpen ? sideBarOpenWidth : sideBarCloseWidth,
      )}
    >
      <NavbarMenu isSideBarOpen={isSideBarOpen} />
    </div>
  );
};

export default Navbar;
