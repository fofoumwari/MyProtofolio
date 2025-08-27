// src/components/Navbar.tsx
import React, { useState, useEffect } from 'react';
//import { NavLink } from '../types';
import type { NavLink } from '../types';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks: NavLink[] = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Journal', href: '#journal' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    // Close mobile menu after clicking a link
    setIsMobileMenuOpen(false);
    // Smooth scroll logic can be added here if using react-scroll later
  };

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center font-bold">
        <a href="#hero" className="text-xl font-bold text-gray-800">
          Florence Umwari
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-600 hover:text-indigo-600 transition-colors duration-300"
              onClick={() => handleLinkClick(link.href)}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span className={`block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${isMobileMenuOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-1'}`}></span>
            <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100 translate-y-0.5'}`}></span>
            <span className={`block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${isMobileMenuOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-1'}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4">
          <div className="flex flex-col space-y-4 px-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-indigo-600 transition-colors duration-300"
                onClick={() => handleLinkClick(link.href)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;