import DarkModeSwitch from './DarkModeSwitch';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { menuItems } from './nav/NavbarMenu';

type HeaderProps = {};

const Header = ({}: HeaderProps) => {
  const { asPath } = useRouter();

  const header = useMemo<String>(() => {
    const location = menuItems.find((item) => item.path === asPath);
    if (location) return location.title;
    return '';
  }, [asPath]);
  return (
    <div className="flex flex-1 items-center justify-between flex-row p-2 relative duration-300">
      <div className="text-secondary-900 dark:text-secondary-100 text-lg">
        {header}
      </div>
      <DarkModeSwitch />
    </div>
  );
};

export default Header;
