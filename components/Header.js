'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-pink-100 shadow-md px-6 py-4 flex items-center justify-between">
      {/* Logo and Brand */}
      <div className="flex items-center space-x-3">
        <Image src="/logo.png" alt="Logo" width={40} height={40} priority />
        <span className="font-semibold text-xl text-pink-800">NariBazaar</span>
      </div>

      {/* Desktop Menu */}
      <nav className="hidden md:flex space-x-8 text-pink-900 font-medium">
        <Link href="/" className="hover:text-pink-600 transition">Home</Link>
        <Link href="/products" className="hover:text-pink-600 transition">Products</Link>
        <Link href="/about" className="hover:text-pink-600 transition">About</Link>
        <Link href="/contact" className="hover:text-pink-600 transition">Contact</Link>
      </nav>

      {/* Hamburger Button */}
      <button
        className="md:hidden flex flex-col space-y-1"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Menu"
      >
        <span className="w-6 h-0.5 bg-pink-800"></span>
        <span className="w-6 h-0.5 bg-pink-800"></span>
        <span className="w-6 h-0.5 bg-pink-800"></span>
      </button>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-pink-50 shadow-lg p-4 flex flex-col space-y-4 text-center md:hidden z-50">
          <Link href="/" onClick={() => setMenuOpen(false)} className="text-pink-800 hover:text-pink-600">Home</Link>
          <Link href="/products" onClick={() => setMenuOpen(false)} className="text-pink-800 hover:text-pink-600">Products</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)} className="text-pink-800 hover:text-pink-600">About</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)} className="text-pink-800 hover:text-pink-600">Contact</Link>
        </div>
      )}
    </header>
  );
}
