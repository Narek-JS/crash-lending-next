
import { createContext } from "react";
import { useState } from "react";

interface SidebarContextProps {
  isOpen: boolean;
  closeSidebar: () => void;
  openSidebar: () => void;
}

const SidebarContext = createContext<SidebarContextProps>({
  isOpen: false,
  closeSidebar: () => {},
  openSidebar: () => {}
});

interface SidebarProviderProps {
  children: React.ReactNode;
};

const SidebarProvider: React.FC<SidebarProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openSidebar = () => setIsOpen(true);
  const closeSidebar = () => setIsOpen(false);
  
  return (
    <SidebarContext.Provider value={{ isOpen, closeSidebar, openSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

export { SidebarContext, SidebarProvider }