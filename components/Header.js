// components/Header.js

export default function Header() {
    return (
      <header className="bg-pink-600 text-white p-4 flex items-center justify-between">
        <div className="text-2xl font-bold">
          <a href="/">NariBazaar</a>
        </div>
        <nav className="space-x-6">
          <a href="/" className="hover:text-pink-300">Home</a>
          <a href="/explore" className="hover:text-pink-300">Explore</a>
          <a href="/register" className="hover:text-pink-300">Register as Seller</a>
          <a href="/faq" className="hover:text-pink-300">FAQ</a>
        </nav>
      </header>
    );
  }
  