"use client";
import { useState } from "react";
import { useEffect } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  // Remove all dark mode toggle button code and related state/hooks

  useEffect(() => {
    // Remove all dark mode toggle button code and related state/hooks
  }, []);

  return (
    <nav className="w-full flex items-center justify-between py-4 px-6 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-black sticky top-0 z-50">
      <div className="font-bold text-lg text-blue-900 dark:text-yellow-400">Makaila Schneider</div>
      <div className="hidden md:flex space-x-4">
        <a href="#about" className="hover:underline">About</a>
        <a href="#stats" className="hover:underline">Stats</a>
        <a href="#videos" className="hover:underline">Videos</a>
        <a href="#gallery" className="hover:underline">Gallery</a>
        <a href="#contact" className="hover:underline">Contact</a>
        {/* Remove all dark mode toggle button code and related state/hooks */}
      </div>
      {/* Hamburger menu for mobile */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-10 h-10"
        aria-label="Toggle menu"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span className={`block w-6 h-0.5 bg-blue-900 dark:bg-yellow-400 mb-1 transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-blue-900 dark:bg-yellow-400 mb-1 transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-blue-900 dark:bg-yellow-400 transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>
      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 flex flex-col items-center py-4 md:hidden z-40">
          <a href="#about" className="py-2 w-full text-center hover:underline" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#stats" className="py-2 w-full text-center hover:underline" onClick={() => setMenuOpen(false)}>Stats</a>
          <a href="#videos" className="py-2 w-full text-center hover:underline" onClick={() => setMenuOpen(false)}>Videos</a>
          <a href="#gallery" className="py-2 w-full text-center hover:underline" onClick={() => setMenuOpen(false)}>Gallery</a>
          <a href="#contact" className="py-2 w-full text-center hover:underline" onClick={() => setMenuOpen(false)}>Contact</a>
          {/* Remove all dark mode toggle button code and related state/hooks */}
        </div>
      )}
    </nav>
  );
} 