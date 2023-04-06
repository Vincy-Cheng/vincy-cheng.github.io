import React from 'react';
import MenuIcon from './MenuIcon';

type NavbarModalProps = {};

const NavbarModal = ({}: NavbarModalProps) => {
  return (
    <div className="absolute h-screen w-screen bg-white">
      <MenuIcon />
    </div>
  );
};

export default NavbarModal;
