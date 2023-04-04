// import { useState } from 'react';
import { ReactElement } from 'react';
import Header from './Header';
import MenuIcon from './MenuIcon';

type LayoutProps = {
  children: ReactElement;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col h-screen w-full bg-white dark:bg-neutral-900 ">
      <div className="mb-auto flex ">
        <MenuIcon />
        <Header />
      </div>
      <div>
        <div className="p-7">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
