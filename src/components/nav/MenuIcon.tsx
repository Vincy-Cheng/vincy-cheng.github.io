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
        'dark:text-white p-2 relative duration-300',
        isSideBarOpen ? sideBarOpenWidth : sideBarCloseWidth,
      )}
    >
      <div className="" onClick={() => setIsSideBarOpen((prev) => !prev)}>
        <Menu2
          size={28}
          className="dark:text-white rounded-full hover:bg-neutral-600 active:bg-neutral-500 p-1 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default MenuIcon;
