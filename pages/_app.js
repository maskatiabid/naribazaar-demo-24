import '../styles/styles.css';  // Import global styles
import Header from '../components/Header'; // Import global Header component
import Footer from '../components/Footer'; // Import global Footer component

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