"use client";

import { useState } from "react";

interface HeaderProps {
  active: string;
}

export default function Header({ active }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["home", "about", "projects", "skills"];

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <nav className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <h1 className="text-xl font-bold text-[#FF0000]">
         <a
          href="#home"
          className="text-xl font-bold text-[#FF0000] cursor-pointer"
        >
          Nann Dev <span className="text-black">{'</>'}</span>
        </a>
        
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-12 font-bold text-[17px] text-black">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className={`capitalize transition duration-300 hover:text-[#FF0000] ${
                  active === item ? "text-[#FF0000]" : ""
                }`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 cursor-pointer"
          aria-label="Toggle Menu"
        >
          <span
            className={`w-6 h-0.5 bg-black transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-black transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-black transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white shadow-md transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-60 py-4" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 font-bold text-black">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                onClick={() => setIsOpen(false)}
                className={`capitalize transition duration-300 hover:text-[#FF0000] ${
                  active === item ? "text-[#FF0000]" : ""
                }`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}