export default function HomePage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to NariBazaar</h1>
        <p className="text-lg text-gray-600 mb-8">
          Your one-stop marketplace for all things unique!
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <Link href="/explore" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            Explore
          </Link>
          <Link href="/become-a-seller" className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
            Register as Seller
          </Link>
        </div>
      </div>
    </div>
  );
}
