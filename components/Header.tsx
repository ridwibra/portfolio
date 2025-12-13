"use client";

import { Pacifico } from "next/font/google";
import Link from "next/link";
import ThemeToggleComponent from "./ThemeToggle";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // hamburger + close icons

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
});

const HeaderComponent = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="flex h-16 justify-between items-center shadow-md px-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        {/* Logo */}
        <Link
          href="/teaching"
          className={`text-3xl font-bold ${pacifico.className}`}
        >
          Ridwan
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/teaching"
            className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
          >
            Teaching
          </Link>
          {/* <Link
            href="/research"
            className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
          >
            Research
          </Link>
          <Link
            href="/projects"
            className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
          >
            Projects
          </Link> */}
          <ThemeToggleComponent />
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Mobile Menu Drawer */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-md px-6 py-4 space-y-4">
          <Link
            href="/teaching"
            className="block hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Teaching
          </Link>
          {/* <Link
            href="/research"
            className="block hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Research
          </Link>
          <Link
            href="/projects"
            className="block hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </Link> */}
          <ThemeToggleComponent />
        </div>
      )}
    </header>
  );
};

export default HeaderComponent;
