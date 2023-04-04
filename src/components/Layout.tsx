import useDarkMode from '../hooks/useDarkMode.hook';
import { ReactElement, useEffect, useState } from 'react';
import Header from './Header';
import MenuIcon from './nav/MenuIcon';
import Navbar from './nav/Navbar';

type LayoutProps = {
  children: ReactElement;
};

const Layout = ({ children }: LayoutProps) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(true);
  const { isDarkMode } = useDarkMode();
  const sideBarOpenWidth = 'w-[240px]';
  const sideBarCloseWidth = 'w-[52px]';
  useEffect(() => {
    console.log(isDarkMode);
  }, [isDarkMode]);
  return (
    <div className="flex flex-col h-screen w-full bg-white dark:bg-neutral-900 ">
      <div className="flex ">
        <MenuIcon
          isSideBarOpen={isSideBarOpen}
          setIsSideBarOpen={setIsSideBarOpen}
        />
        <Header />
      </div>
      <div className="mb-auto w-full">
        <Navbar />
        <div className="p-2">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
