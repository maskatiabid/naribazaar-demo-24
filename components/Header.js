"use client"; // Add this at the top to mark this as a client component

import { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {/* Logo */}
          <img src="/logo.png" alt="NariBazaar Logo" width={120} height={40} />
        </div>

        {/* Hamburger icon for mobile view */}
        <button
          className="lg:hidden p-2 rounded-md text-gray-600 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="block w-6 h-0.5 bg-gray-600 mb-1"></span>
          <span className="block w-6 h-0.5 bg-gray-600 mb-1"></span>
          <span className="block w-6 h-0.5 bg-gray-600"></span>
        </button>

        {/* Navbar links */}
        <nav className={`lg:flex lg:items-center ${menuOpen ? 'block' : 'hidden'}`}>
          <ul className="lg:flex space-x-6">
            <li><a href="#explore" className="text-gray-600 hover:text-blue-500">Explore Products</a></li>
            <li><a href="#become-seller" className="text-gray-600 hover:text-blue-500">Become a Seller</a></li>
            <li><a href="#add-product" className="text-gray-600 hover:text-blue-500">Add Product</a></li>
            <li><a href="#about-us" className="text-gray-600 hover:text-blue-500">About Us</a></li>
            <li><a href="#login" className="text-gray-600 hover:text-blue-500">Login</a></li>
            <li><a href="#contact-us" className="text-gray-600 hover:text-blue-500">Contact Us</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
