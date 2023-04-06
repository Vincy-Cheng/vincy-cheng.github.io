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
        {isSideBarOpen && (
          <span
            className={clsx(
              '',
              isSideBarOpen ? 'opacity-95 duration-500' : 'opacity-0',
            )}
          >
            <NavbarModal />
          </span>
        )}

        <div className="p-2">{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
