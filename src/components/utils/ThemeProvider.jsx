"use client";

import { useEffect, useState } from "react";

export default function ThemeProvider() {
  const [theme, setTheme] = useState("light");

  // On component mount, check localStorage for the theme or use system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.add(savedTheme);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Function to toggle between dark and light mode
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 bg-gray-600 text-white rounded-md absolute bottom-4 right-4 cursor-pointer"
    >
      Mode
    </button>
  );
}
