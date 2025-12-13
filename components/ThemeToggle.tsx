"use client";

import { useTheme } from "next-themes";
import { BsSunFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";
import { useEffect, useState } from "react";

const ThemeToggleComponent = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure we only render after client mounts
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const darkMode = theme === "dark";

  return (
    <div
      onClick={() => setTheme(darkMode ? "light" : "dark")}
      className="relative w-16 h-8 flex items-center dark:bg-teal-700 bg-teal-500 cursor-pointer rounded-full p-1"
    >
      <FaMoon className="text-white" size={18} />
      <div
        className={`absolute w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${
          darkMode ? "bg-white left-1" : "bg-gray-700 right-1"
        }`}
      ></div>
      <BsSunFill className="ml-auto text-yellow-400" size={18} />
    </div>
  );
};

export default ThemeToggleComponent;
