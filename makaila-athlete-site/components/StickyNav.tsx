"use client";
import { useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#athletic-profile", label: "Athletic Profile" },
  { href: "#awards", label: "Awards" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#resume", label: "Resume" },
  { href: "#contact", label: "Contact" },
];

const StickyNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Smooth scroll for all nav links
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <nav className="w-full flex items-center justify-between py-4 px-6 border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="font-bold text-lg text-bruin-navy">Makaila Schneider</div>
      <div className="hidden md:flex space-x-4">
        {navLinks.map(link => (
          <a
            key={link.href}
            href={link.href}
            className="hover:underline transition-colors"
            onClick={e => handleNavClick(e, link.href)}
          >
            {link.label}
          </a>
        ))}
      </div>
      {/* Hamburger menu for mobile */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-10 h-10"
        aria-label="Toggle menu"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span className={`block w-6 h-0.5 bg-bruin-navy mb-1 transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-bruin-navy mb-1 transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-bruin-navy transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>
      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-gray-200 flex flex-col items-center py-4 md:hidden z-40">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="py-2 w-full text-center hover:underline"
              onClick={e => handleNavClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default StickyNav; 