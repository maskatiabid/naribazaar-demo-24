import LeftAd from "../components/LeftAd";
import RightAd from "../components/RightAd";

export default function Home() {
  return (
    <main className="relative min-h-screen p-10">
      <h1 className="text-4xl font-bold mb-4">Welcome to NariBazaar!</h1>
      <p className="text-lg text-gray-700">Empowering women entrepreneurs 🌸</p>

      {/* Ads positioned on both sides */}
      <LeftAd />
      <RightAd />
    </main>
  );
}