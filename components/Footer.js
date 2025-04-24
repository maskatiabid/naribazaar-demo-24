// components/Footer.js

export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white p-4 mt-8">
        <div className="text-center">
          <p>&copy; 2025 NariBazaar. All rights reserved.</p>
          <div className="space-x-4">
            <a href="/privacy" className="hover:text-pink-300">Privacy Policy</a>
            <a href="/terms" className="hover:text-pink-300">Terms & Conditions</a>
          </div>
        </div>
      </footer>
    );
  }
  