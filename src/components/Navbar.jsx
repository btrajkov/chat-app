"use client";
import { useState, useEffect } from "react";
import { Searchbar } from "./Searchbar";
import { BurgerMenu } from "./BurgerMenu";

export const NavBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      window.innerWidth >= 768 && setIsSidebarOpen(true);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  // can't change sidebar visibility on bigger screens
  const toggleSidebar = () => {
    if (window.innerWidth < 768) {
      setIsSidebarOpen(!isSidebarOpen);
    }
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="flex bg-black">
      {/* Burger Menu button only visible on small screens */}
      <button className="p-2 text-white md:hidden" onClick={toggleSidebar}>
        &#9776; {/* Burger icon */}
      </button>

      {/* Sidebar */}
      <BurgerMenu isOpen={isSidebarOpen} onClose={closeSidebar} />

      {/* Searchbar */}
      <Searchbar className="p-2 m-auto" />
    </div>
  );
};
