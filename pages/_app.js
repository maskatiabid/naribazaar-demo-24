// pages/_app.js

import '../styles/globals.css';  // Import Tailwind CSS global styles

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
