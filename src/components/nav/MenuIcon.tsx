import clsx from 'clsx';
import { Dispatch, SetStateAction, useState } from 'react';
import { Menu2 } from 'tabler-icons-react';

type MenuIconProps = {
  isSideBarOpen: boolean;
  setIsSideBarOpen: Dispatch<SetStateAction<boolean>>;
};

const MenuIcon = ({ isSideBarOpen, setIsSideBarOpen }: MenuIconProps) => {
  const sideBarOpenWidth = 'sm:w-[240px] ';
  const sideBarCloseWidth = 'sm:w-[52px]';

  return (
    <div
      className={clsx(
        'dark:text-secondary-50 relative duration-300 p-2 pl-3',
        isSideBarOpen ? sideBarOpenWidth : sideBarCloseWidth,
      )}
      onClick={() => setIsSideBarOpen((prev) => !prev)}
    >
      <Menu2
        size={28}
        className="dark:text-secondary-50 rounded-full hover:bg-secondary-200 dark:hover:bg-secondary-600 active:bg-secondary-500 dark:active:bg-secondary-500 p-1 cursor-pointer"
      />
    </div>
  );
};

export default MenuIcon;
