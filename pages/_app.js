// pages/_app.js

import Navbar from '../components/Navbar'; // Import Navbar component
import '../styles/globals.css'; // Your global CSS file (make sure it's linked)

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar /> {/* Navbar at the top */}
      <Component {...pageProps} /> {/* This will render the current page */}
    </div>
  );
}

export default MyApp;
