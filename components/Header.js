'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo + Name */}
        <div className="flex items-center space-x-2">
          <Image src="/logo.png" alt="Logo" width={40} height={40} priority />
          <span className="text-xl font-bold text-pink-700">NariBazaar</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 font-medium text-gray-800">
          <Link href="/" className="hover:text-pink-600 transition">Home</Link>
          <Link href="/products" className="hover:text-pink-600 transition">Products</Link>
          <Link href="/about" className="hover:text-pink-600 transition">About</Link>
          <Link href="/contact" className="hover:text-pink-600 transition">Contact</Link>
        </nav>

        {/* Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
            <svg className="w-6 h-6 text-pink-700" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-4 pb-4 space-y-2 text-center font-medium">
          <Link href="/" className="block text-gray-800 hover:text-pink-600" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/products" className="block text-gray-800 hover:text-pink-600" onClick={() => setMenuOpen(false)}>Products</Link>
          <Link href="/about" className="block text-gray-800 hover:text-pink-600" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/contact" className="block text-gray-800 hover:text-pink-600" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </header>
  );
}
