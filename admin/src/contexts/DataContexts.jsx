import React, { useState, useContext, createContext } from "react";
const StateContext = createContext();

export const ContextProvider = ({ ...children }) => {
  const [getSelected, setSelected] = useState(true);
  const [currentColor, setCurrentColor] = useState('#0C3EA3')
  return (
    <StateContext.Provider value={{ getSelected, setSelected}}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
