import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import logo from '../public/logo.png';

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md relative">
      {/* Logo */}
      <div className="flex items-center">
        <Image src={logo} alt="NariBazaar Logo" width={60} height={40} />
        <h1 className="ml-3 text-xl font-bold text-gray-800">NariBazaar</h1>
      </div>

      {/* Hamburger (Mobile) */}
      <div className="md:hidden text-2xl cursor-pointer" onClick={() => setShowMenu(!showMenu)}>
        ☰
      </div>

      {/* Nav Links */}
      <ul
        className={`absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent flex flex-col md:flex-row items-center gap-4 p-4 md:p-0 shadow-md md:shadow-none transition-all duration-300 ${
          showMenu ? 'block' : 'hidden md:flex'
        }`}
      >
        <li>
          <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">
            Home
          </Link>
        </li>
        <li>
          <Link href="/seller-registration" className="text-gray-700 hover:text-blue-600 font-medium">
            Register as Seller
          </Link>
        </li>
      </ul>
    </header>
  );
}
