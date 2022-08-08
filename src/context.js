import React, { useState, useContext, Children } from 'react';
import sublinks from './data';
export const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(true);
  const [location, setLocation] = useState({});
  const [page, setPage] = useState({ page: '', links: [] });
  const openSideBar = () => {
    console.log('open!!!');
    setIsSideBarOpen(true);
  };
  const openSubmenu = (text, coordinates) => {
    const page = sublinks.find((item) => item.page === text);
    setPage(page);
    setLocation(coordinates);
    setIsSubmenuOpen(true);
  };
  const closeSideBar = () => {
    setIsSideBarOpen(false);
  };
  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isSideBarOpen,
        isSubmenuOpen,
        openSubmenu,
        openSideBar,
        closeSubmenu,
        closeSideBar,
        location,
        page,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
