import clsx from 'clsx';
import { X, Menu2 } from 'tabler-icons-react';
import { useMenu } from '../../provider/MenuOpenProvider';

type MenuIconProps = {};

const MenuIcon = ({}: MenuIconProps) => {
  const { toggle, isSideBarOpen } = useMenu();
  const sideBarOpenWidth = 'sm:w-[240px] ';
  const sideBarCloseWidth = 'sm:w-[52px]';

  return (
    <div
      className={clsx(
        'dark:text-secondary-50 relative duration-300 p-2 pl-3',
        isSideBarOpen ? sideBarOpenWidth : sideBarCloseWidth,
      )}
      onClick={() => toggle()}
    >
      <input type="checkbox" className="sr-only peer hidden" />

      <Menu2
        size={28}
        className="dark:text-secondary-50 rounded-full hover:bg-secondary-200 dark:hover:bg-secondary-600 active:bg-secondary-500 dark:active:bg-secondary-500 p-1 cursor-pointer"
      />
    </div>
  );
};

export default MenuIcon;
