import { ReactElement } from 'react';
import Header from './Header';
import MenuIcon from './nav/MenuIcon';
import Navbar from './nav/Navbar';
import Footer from './Footer';
import NavbarModal from './nav/NavbarModal';
import { useMenu } from '../provider/MenuOpenProvider';
import clsx from 'clsx';

type LayoutProps = {
  children: ReactElement;
};

const Layout = ({ children }: LayoutProps) => {
  const { isSideBarOpen } = useMenu();
  return (
    <div className="flex flex-col h-screen w-full bg-secondary-50 dark:bg-secondary-900 font-mono">
      <div className="flex ">
        <MenuIcon />
        <Header />
      </div>
      <div className="mb-auto w-full flex">
        <span className="hidden sm:block">
          <Navbar />
        </span>
        <div
          className={clsx(
            'block sm:hidden h-full fixed z-10 top-0 left-0 bg-secondary-50 dark:bg-secondary-900 overflow-y-hidden duration-500',
            isSideBarOpen ? 'w-full' : 'w-0',
          )}
        >
          <NavbarModal />
        </div>

        <div className="p-2">{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
