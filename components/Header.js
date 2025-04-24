'use client'; 
import { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative bg-pink-600 p-4">
      {/* Logo */}
      <div className="flex justify-between items-center">
        <div className="text-white font-bold text-xl">
          NariBazaar
        </div>

        {/* Hamburger Menu for Mobile View */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex space-x-6 text-white">
          <a href="#explore" className="hover:text-pink-300">Explore Products</a>
          <a href="#become-seller" className="hover:text-pink-300">Become a Seller</a>
          <a href="#add-product" className="hover:text-pink-300">Add Product</a>
          <a href="#about-us" className="hover:text-pink-300">About Us</a>
          <a href="#login" className="hover:text-pink-300">Login</a>
          <a href="#contact-us" className="hover:text-pink-300">Contact Us</a>
        </nav>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white text-black space-y-4 py-4 mt-4 rounded-md shadow-md absolute w-full top-full left-0">
          <a href="#explore" className="block px-4 py-2 hover:bg-pink-100">Explore Products</a>
          <a href="#become-seller" className="block px-4 py-2 hover:bg-pink-100">Become a Seller</a>
          <a href="#add-product" className="block px-4 py-2 hover:bg-pink-100">Add Product</a>
          <a href="#about-us" className="block px-4 py-2 hover:bg-pink-100">About Us</a>
          <a href="#login" className="block px-4 py-2 hover:bg-pink-100">Login</a>
          <a href="#contact-us" className="block px-4 py-2 hover:bg-pink-100">Contact Us</a>
        </div>
      )}
    </header>
  );
};

export default Header;