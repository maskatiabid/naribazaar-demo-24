'use client'; // Ensure layout.js is treated as a Client Component

import Header from '../components/Header'; // Assuming header is in components

export default function Layout({ children }) {
  return (
    <div>
      {/* Header section */}
      <Header />
      
      {/* Main content */}
      <main className="min-h-screen bg-gray-100 p-4">
        {children}
      </main>
      
      {/* Footer can go here */}
    </div>
  );
}
