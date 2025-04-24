import Header from '../components/Header';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';

export default function Home() {
  return (
    <>
      <Header />
      <main className="text-center p-6">
        <h1 className="text-4xl font-bold mb-4">Welcome to NariBazaar!</h1>
        <p className="text-lg text-gray-700 mb-6">Empowering women entrepreneurs 🌸</p>
        <Carousel />
      </main>
      <Footer />
    </>
  );
}
