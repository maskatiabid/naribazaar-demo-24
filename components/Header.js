'use client'; // Mark this file as a Client Component

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="logo-container flex items-center">
          <Image 
            src="/logo.png" 
            alt="Logo" 
            width={100} 
            height={100} 
            priority 
          />
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu} className="text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Bar (Desktop) */}
        <nav
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } lg:flex space-x-4 items-center`}
        >
          <Link href="/" className="text-black hover:text-gray-700">
            Home
          </Link>
          <Link href="/products" className="text-black hover:text-gray-700">
            Products
          </Link>
          <Link href="/about" className="text-black hover:text-gray-700">
            About
          </Link>
          <Link href="/contact" className="text-black hover:text-gray-700">
            Contact
          </Link>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } lg:hidden bg-white shadow-md p-4`}
      >
        <Link href="/" className="block py-2 text-black hover:text-gray-700">
          Home
        </Link>
        <Link href="/products" className="block py-2 text-black hover:text-gray-700">
          Products
        </Link>
        <Link href="/about" className="block py-2 text-black hover:text-gray-700">
          About
        </Link>
        <Link href="/contact" className="block py-2 text-black hover:text-gray-700">
          Contact
        </Link>
      </div>
    </header>
  );
};

export default Header;
