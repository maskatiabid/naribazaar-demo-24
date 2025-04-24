// app/page.js

import LeftAd from '../components/LeftAd';  // Adjust the import path if needed
import RightAd from '../components/RightAd';  // Adjust the import path if needed

export default function Home() {
  return (
    <main className="text-center p-10 pt-20"> {/* Adjust padding to avoid overlap with fixed ads */}
      <h1 className="text-4xl font-bold mb-4">Welcome to NariBazaar!</h1>
      <p className="text-lg text-gray-700">Empowering women entrepreneurs 🌸</p>
      
      {/* Add your other content here */}
      
      <LeftAd /> {/* Left ad component */}
      <RightAd /> {/* Right ad component */}
    </main>
  );
}
