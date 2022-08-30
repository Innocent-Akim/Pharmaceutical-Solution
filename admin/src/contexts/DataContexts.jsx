import React, { useState, useContext, createContext } from "react";
const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [getSelected, setSelected] = useState(true);
  const [currentColor, setCurrentColor] = useState("#0C3EA3");
  const [activeMenu, setActiveMenu] = useState(true)
  return (
    <StateContext.Provider
      value={{ getSelected, setSelected, currentColor, setCurrentColor,activeMenu, setActiveMenu }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
