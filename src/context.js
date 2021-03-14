import React, { useState, useContext } from "react";

export const AppContext = React.createContext();

export const ReactProvider = ({ children }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const openModal = () => {
    return setIsOpenModal(true);
  };

  const closenModal = () => {
    return setIsOpenModal(false);
  };

  const openMenu = () => {
    return setIsOpenMenu(true);
  };

  const closenMenu = () => {
    return setIsOpenMenu(false);
  };

  return (
    <AppContext.Provider
      value={{
        isOpenModal,
        isOpenMenu,
        openModal,
        closenModal,
        openMenu,
        closenMenu,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
