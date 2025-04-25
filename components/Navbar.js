'use client';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-pink-700 text-white px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <Link href="/" className="text-2xl font-bold">NariBazaar</Link>

      {/* Menu */}
      <ul className="flex space-x-6 items-center relative">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/explore">Shop</Link></li>

        {/* Seller Tabs */}
        <li><Link href="/add-product" className="text-white">Add Product</Link></li>
        <li><Link href="/seller-dashboard" className="text-white">Seller Dashboard</Link></li>
        <li><Link href="/seller-registration" className="text-white">Seller Registration</Link></li>

        {/* Other Tabs */}
        <li><Link href="/faq">FAQ</Link></li>
        <li><Link href="/support">Support</Link></li>
        <li><Link href="/login">Login / Sign Up</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
