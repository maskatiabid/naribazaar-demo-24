// pages/_app.js

import '../styles/globals.css';  // Import global styles

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;  // Renders the page content
}

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}