import React from 'react';
import Header from '../components/Header';  // Import the Header component
import Carousel from '../components/Carousel'; // Import the Carousel component
import Footer from '../components/Footer'; // Import the Footer component

const Home = () => {
  return (
    <div>
      <Header />
      <Carousel />
      <main>
        {/* Add your main homepage content here */}
        <h1>Welcome to NariBazaar</h1>
        <p>Empowering women entrepreneurs across India</p>
      </main>
      <Footer />
    </div>
  );
}

export default Home;