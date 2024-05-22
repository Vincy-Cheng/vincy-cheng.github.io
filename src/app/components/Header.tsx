'use client';
import DarkModeSwitch from './DarkModeSwitch';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useMemo } from 'react';
import { menuItems } from './nav/NavbarMenu';

type HeaderProps = {};

const Header = ({}: HeaderProps) => {
  const asPath = usePathname();

  const header = useMemo<String>(() => {
    const location = menuItems.find((item) => item.path === asPath);

    if (location) {
      return location.title;
    } else {
      const subPath = menuItems.find(
        (item) => item.path !== '/' && asPath.startsWith(item.path),
      );
      if (subPath) {
        return subPath.title;
      }
    }

    return '';
  }, [asPath]);
  return (
    <div className="flex flex-1 items-center justify-between flex-row p-2 relative duration-300">
      <div className="text-secondary-900 dark:text-secondary-100 text-xl">
        {header}
      </div>
      <DarkModeSwitch />
    </div>
  );
};

export default Header;
