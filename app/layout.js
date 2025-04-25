import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/logo.png'; // Update the path if needed

export default function RootLayout({ children }) {
  return (
    <div>
      {/* Header Section */}
      <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
        {/* Logo */}
        <div className="flex items-center">
          <Image src={logo} alt="NariBazaar Logo" width={60} height={40} />
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden text-2xl cursor-pointer">
          ☰
        </div>

        {/* Navigation Links */}
        <nav>
          <ul className="flex gap-6 text-gray-700">
            <li>
              <Link href="/" className="hover:text-blue-600">Home</Link>
            </li>
            <li>
              <Link href="/become-a-seller" className="hover:text-blue-600">Register as Seller</Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content Section */}
      <main className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to NariBazaar</h1>
          <p className="text-lg text-gray-600 mb-8">
            Your one-stop marketplace for all things unique!
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <Link href="/explore">
              <a className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Explore</a>
            </Link>
            <Link href="/become-a-seller">
              <a className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">Register as Seller</a>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; 2025 NariBazaar. All Rights Reserved.</p>
      </footer>

      {/* Children Content (for other pages) */}
      {children}
    </div>
  );
}
