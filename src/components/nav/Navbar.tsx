import { clsx } from 'clsx';
import React from 'react';
import { useMenu } from '../../provider/MenuOpenProvider';
import NavbarMenu from './NavbarMenu';

type NavbarProps = {};

const Navbar = ({}: NavbarProps) => {
  const menu = useMenu();
  const sideBarOpenWidth = 'sm:w-[240px] ';
  const sideBarCloseWidth = 'sm:w-[52px]';
  return (
    <div
      className={clsx(
        'p-2 relative duration-300',
        menu.isSideBarOpen ? sideBarOpenWidth : sideBarCloseWidth,
      )}
    >
      <NavbarMenu />
    </div>
  );
};

export default Navbar;
