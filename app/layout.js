// app/layout.js

'use client';  // This ensures it's a client-side rendering component

import './globals.css';  // Global styles
import Header from './components/Header';  // Import the Header component

export default function Layout({ children }) {
  return (
    <div>
      <Header />  {/* Header component rendered here */}
      <main>{children}</main>  {/* Page-specific content will be rendered here */}
    </div>
  );
}
