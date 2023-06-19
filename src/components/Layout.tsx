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
    <div className="flex flex-col min-h-screen w-full bg-secondary-50 dark:bg-secondary-900 font-mono text-secondary-900 dark:text-secondary-50">
      <div className="flex">
        <MenuIcon />
        <Header />
      </div>
      <div className="mb-auto w-full flex flex-1">
        <span className="hidden sm:block dashWide">
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

        <div
          className="p-2 w-full overflow-auto"
          style={{
            backgroundImage: 'url(/bg-copy-2.png)',
            backgroundRepeat: 'repeat',
          }}
        >
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
