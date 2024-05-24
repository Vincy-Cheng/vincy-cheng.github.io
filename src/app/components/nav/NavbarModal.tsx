import React from 'react';
import MenuIcon from './MenuIcon';
import NavbarMenu from './NavbarMenu';

type NavbarModalProps = {};

const NavbarModal = ({}: NavbarModalProps) => {
  return (
    <>
      <MenuIcon />
      <div className="p-2">
        <NavbarMenu />
      </div>
    </>
  );
};

export default NavbarModal;
