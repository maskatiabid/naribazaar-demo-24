import Header from '../components/Header';
import Footer from '../components/Footer';
import LeftAd from '../components/LeftAd';
import RightAd from '../components/RightAd';

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex min-h-screen">
        {/* Left Ad */}
        <div className="w-1/6 hidden lg:block">
          <LeftAd />
        </div>

        {/* Main Content */}
        <main className="w-full lg:w-4/6 p-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to NariBazaar!</h1>
          <p className="text-lg text-gray-700">Empowering women entrepreneurs 🌸</p>
        </main>

        {/* Right Ad */}
        <div className="w-1/6 hidden lg:block">
          <RightAd />
        </div>
      </div>
      <Footer />
    </>
  );
}
