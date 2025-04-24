'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-4 py-2 flex justify-between items-center w-full">
      {/* Logo */}
      <div className="flex items-center">
        <Image src="/logo.png" alt="NariBazaar Logo" width={40} height={40} />
        <span className="ml-2 font-bold text-lg">NariBazaar</span>
      </div>

      {/* Hamburger Menu Icon */}
      <div className="md:hidden">
        <button
          className="text-pink-600 focus:outline-none text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Menu Links - Desktop */}
      <div className="hidden md:flex space-x-4">
        <Link href="/">Explore Products</Link>
        <Link href="/">Become a Seller</Link>
        <Link href="/">Add Product</Link>
        <Link href="/">About Us</Link>
        <Link href="/">Login</Link>
        <Link href="/">Contact Us</Link>
      </div>

      {/* Dropdown Menu - Mobile */}
      {menuOpen && (
        <div className="absolute top-16 right-4 bg-white shadow-lg rounded-md p-4 w-48 z-50 md:hidden">
          <ul className="flex flex-col space-y-2 text-sm">
            <li><Link href="/">Explore Products</Link></li>
            <li><Link href="/">Become a Seller</Link></li>
            <li><Link href="/">Add Product</Link></li>
            <li><Link href="/">About Us</Link></li>
            <li><Link href="/">Login</Link></li>
            <li><Link href="/">Contact Us</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;
