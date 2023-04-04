import React from 'react';
import { Cloud } from 'tabler-icons-react';
import { ISideBarMenuItem } from '../../types';

type Props = {};

const MenuItemClasses = 'block float-left stroke-1 w-9 dark:text-white';
const menuItems: ISideBarMenuItem[] = [
  {
    path: '/cloud',
    icon: <Cloud className={MenuItemClasses} />,
    title: 'Cloud',
  },
  {
    path: '/cloud',
    icon: <Cloud className={MenuItemClasses} />,
    title: 'Cloud',
  },
];

const NavbarMenu = (props: Props) => {
  return <div>NavbarMenu</div>;
};

export default NavbarMenu;
