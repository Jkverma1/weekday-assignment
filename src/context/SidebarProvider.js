import React, { createContext, useContext, useState } from "react";

const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [openRight, setOpenRight] = useState(true);
  const [openLeft, setOpenLeft] = useState(true);
  const contextValue = {
    openRight,
    setOpenRight,
    openLeft,
    setOpenLeft,
  };

  return (
    <SidebarContext.Provider value={contextValue}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => useContext(SidebarContext);
