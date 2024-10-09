"use client";
import { useState } from "react";
import { Searchbar } from "./Searchbar";
import { BurgerMenu } from "./BurgerMenu";

export const NavBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="flex bg-black">
      {/* Burger Menu */}
      <button className="p-2 text-white" onClick={toggleSidebar}>
        &#9776; {/* Burger icon */}
      </button>

      {/* Sidebar */}
      <BurgerMenu isOpen={isSidebarOpen} onClose={closeSidebar} />

      {/* Searchbar */}
      <Searchbar className="p-2 m-auto" />
    </div>
  );
};
