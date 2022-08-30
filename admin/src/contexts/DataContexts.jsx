import React, { useState, useContext, createContext } from "react";
const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [getSelected, setSelected] = useState(true);
  const [currentColor, setCurrentColor] = useState("#0C3EA3");
  const [activeMenu, setActiveMenu] = useState(true)
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  return (
    <StateContext.Provider
      value={{ getSelected, setSelected, currentColor, setCurrentColor,activeMenu, setActiveMenu,open, setOpen,handleOpen }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
