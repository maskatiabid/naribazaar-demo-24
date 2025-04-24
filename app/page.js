import Header from "../components/Header";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Include Header */}
      <Header />
      
      <div className="p-10">
        <h1 className="text-4xl font-bold mb-4">Welcome to NariBazaar!</h1>
        <p className="text-lg text-gray-700">Empowering women entrepreneurs 🌸</p>
      </div>
    </main>
  );
}