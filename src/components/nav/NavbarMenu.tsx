import { clsx } from 'clsx';
import Link from 'next/link';
import React from 'react';
import { LayoutGrid, Home2 } from 'tabler-icons-react';
import { useMenu } from '../../provider/MenuOpenProvider';
import { ISideBarMenuItem } from '../../types';

type NavbarMenuProps = {};

const MenuItemClasses =
  'block float-left stroke-1 w-9 dark:text-secondary-50 text-secondary-900';
export const menuItems: ISideBarMenuItem[] = [
  {
    path: '/',
    icon: <Home2 className={MenuItemClasses} />,
    title: 'About Me',
  },
  {
    path: '/project',
    icon: <LayoutGrid className={MenuItemClasses} />,
    title: 'Project',
  },
];

const NavbarMenu = ({}: NavbarMenuProps) => {
  const menu = useMenu();
  return (
    <>
      {menuItems.map((route, index) => (
        <Link
          href={`${route.path}`}
          key={'menu-item-' + index}
          className="w-full inline-flex py-2 space-x-2 cursor-pointer rounded-xl hover:bg-secondary-200 active:bg-secondary-300 dark:hover:bg-secondary-700 dark:active:bg-secondary-600"
        >
          <span>{route.icon}</span>
          <p
            className={clsx('duration-100 dark:text-secondary-50', {
              ['scale-0 whitespace-nowrap']: !menu.isSideBarOpen,
            })}
          >
            {route.title}
          </p>
        </Link>
      ))}
    </>
  );
};

export default NavbarMenu;
