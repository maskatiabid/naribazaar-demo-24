import LeftAd from '../components/LeftAd';  // Import the LeftAd component
import RightAd from '../components/RightAd';  // Import the RightAd component

export default function Home() {
  return (
    <main className="text-center p-10 pt-24"> {/* Added more top padding */}
      <h1 className="text-4xl font-bold mb-4">Welcome to NariBazaar!</h1>
      <p className="text-lg text-gray-700">Empowering women entrepreneurs 🌸</p>

      {/* Add more content below */}
      <div className="mt-8">
        {/* More content */}
      </div>

      {/* Insert the Left and Right Ad components */}
      <LeftAd />
      <RightAd />
    </main>
  );
}