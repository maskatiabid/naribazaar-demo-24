'use client';

import { useState } from 'react';
import Image from 'next/image';
import logo from '../public/logo.png'; // Adjusted for logo image

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-pink-500 text-white py-4 px-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Image src={logo} alt="NariBazaar Logo" width={120} height={50} />
          <span className="font-bold text-2xl">NariBazaar</span>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="lg:hidden flex items-center" onClick={() => setMenuOpen(!menuOpen)}>
          <div className="w-6 h-1 bg-white mb-1"></div>
          <div className="w-6 h-1 bg-white mb-1"></div>
          <div className="w-6 h-1 bg-white"></div>
        </div>

        {/* Desktop Navbar */}
        <nav className="hidden lg:flex space-x-6">
          <a href="#" className="hover:text-pink-300">Explore Products</a>
          <a href="#" className="hover:text-pink-300">Become a Seller</a>
          <a href="#" className="hover:text-pink-300">Add Product</a>
          <a href="#" className="hover:text-pink-300">About Us</a>
          <a href="#" className="hover:text-pink-300">Login</a>
          <a href="#" className="hover:text-pink-300">Contact Us</a>
        </nav>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="lg:hidden flex flex-col space-y-4 mt-4">
          <a href="#" className="hover:text-pink-300">Explore Products</a>
          <a href="#" className="hover:text-pink-300">Become a Seller</a>
          <a href="#" className="hover:text-pink-300">Add Product</a>
          <a href="#" className="hover:text-pink-300">About Us</a>
          <a href="#" className="hover:text-pink-300">Login</a>
          <a href="#" className="hover:text-pink-300">Contact Us</a>
        </div>
      )}
    </header>
  );
};

export default Header;