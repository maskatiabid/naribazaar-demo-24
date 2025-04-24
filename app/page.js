import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Header />

      <main className="text-center p-10">
        <h1 className="text-4xl font-bold mb-4">Welcome to NariBazaar!</h1>
        <p className="text-lg text-gray-700">Empowering women entrepreneurs 🌸</p>
      </main>

      <Footer />
    </>
  );
}
