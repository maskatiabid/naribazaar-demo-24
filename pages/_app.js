// pages/_app.js
import '../styles/styles.css';  // ✅ Import global styles first
import Header from '../components/Header'; // Global Header
import Footer from '../components/Footer'; // Global Footer

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header />  {/* Global Header (appears on all pages) */}
      <Component {...pageProps} />  {/* Page-specific content */}
      <Footer />  {/* Global Footer (appears on all pages) */}
    </div>
  );
}

export default MyApp;
