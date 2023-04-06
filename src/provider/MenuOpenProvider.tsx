import React, {
  useContext,
  useState,
  useEffect,
  useRef,
  Dispatch,
  SetStateAction,
} from 'react';

interface ProviderValue {
  isSideBarOpen: boolean;
  toggle: () => void;
}

const MenuContext = React.createContext<any>({});

export const useMenu = () => {
  return useContext<ProviderValue>(MenuContext);
};

export const MenuOpenProvider = ({ children }: any) => {
  // TODO: Add your state / logic here

  const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(true);

  const toggle = () => {
    setIsSideBarOpen((prev) => !prev);
  };

  return (
    <MenuContext.Provider value={{ isSideBarOpen, toggle }}>
      {children}
    </MenuContext.Provider>
  );
};
