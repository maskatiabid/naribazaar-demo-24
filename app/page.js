import Header from '../components/Header';
import Footer from '../components/Footer';
import LeftAd from '../components/LeftAd';
import RightAd from '../components/RightAd';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Header />
      <LeftAd />
      <RightAd />
      <div className="text-center p-10">
        <h1 className="text-4xl font-bold mb-4">Welcome to NariBazaar!</h1>
        <p className="text-lg text-gray-700">Empowering women entrepreneurs 🌸</p>
      </div>
      <Footer />
    </main>
  );
}
