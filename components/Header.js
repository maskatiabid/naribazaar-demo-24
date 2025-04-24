// components/Header.js
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu } from 'lucide-react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between px-4 py-2 border-b shadow-sm">
      <div className="flex items-center space-x-3">
        <Image src="/logo.png" alt="NariBazaar Logo" width={40} height={40} />
        <h1 className="text-xl font-bold">NariBazaar</h1>
      </div>

      {/* Desktop Menu */}
      <nav className="hidden md:flex space-x-4 text-purple-700 font-medium">
        <Link href="/explore">Explore Products</Link>
        <Link href="/register">Become a Seller</Link>
        <Link href="/add-product">Add Product</Link>
        <Link href="/about">About Us</Link>
        <Link href="/login">Login</Link>
        <Link href="/contact">Contact Us</Link>
      </nav>

      {/* Hamburger for Mobile */}
      <button
        className="md:hidden text-pink-600"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <Menu size={28} />
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white border-t shadow-md flex flex-col items-start px-4 py-3 space-y-2 text-purple-700 font-medium md:hidden z-50">
          <Link href="/explore">Explore Products</Link>
          <Link href="/register">Become a Seller</Link>
          <Link href="/add-product">Add Product</Link>
          <Link href="/about">About Us</Link>
          <Link href="/login">Login</Link>
          <Link href="/contact">Contact Us</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
