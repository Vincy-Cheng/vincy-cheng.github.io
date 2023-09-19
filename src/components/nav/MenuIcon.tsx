import clsx from 'clsx';
import { useMenu } from '../../provider/MenuOpenProvider';
import OpenCloseIcon from './OpenCloseIcon';
import { useDarkMode } from '../../provider/DarkModeProvider';

type MenuIconProps = {};

const MenuIcon = ({}: MenuIconProps) => {
  const { isDarkMode } = useDarkMode();
  const { toggle, isSideBarOpen } = useMenu();
  const sideBarOpenWidth = 'sm:w-[240px] ';
  const sideBarCloseWidth = 'sm:w-[52px]';

  return (
    <div
      className={clsx(
        'dark:text-secondary-50 relative duration-300 p-2 pl-4 pt-3',
        isSideBarOpen ? sideBarOpenWidth : sideBarCloseWidth,
      )}
      onClick={() => toggle()}
    >
      <input type="checkbox" className="sr-only peer hidden" />

      <OpenCloseIcon
        isOpen={isSideBarOpen}
        color={isDarkMode ? '#F2F2F3' : '#0C0C0D'}
        size={24}
      />
    </div>
  );
};

export default MenuIcon;
