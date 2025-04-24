import LeftAd from "../components/LeftAd";
import RightAd from "../components/RightAd";

export default function Home() {
  return (
    <main className="text-center p-10">
      <h1 className="text-4xl font-bold mb-4">Welcome to NariBazaar!</h1>
      <p className="text-lg text-gray-700 mb-6">Empowering women entrepreneurs 🌸</p>

      {/* Inserted Ads */}
      <LeftAd />
      <RightAd />

      {/* Other content can go here */}
    </main>
  );
}