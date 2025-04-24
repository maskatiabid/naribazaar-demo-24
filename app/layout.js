import Header from '../components/Header';

const Home = () => {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="text-center mt-10">
        <h1 className="text-4xl font-bold text-gray-900">Welcome to NariBazaar!</h1>
        <p className="text-xl mt-4 text-gray-700">Empowering women entrepreneurs 🌸</p>
      </main>
    </div>
  );
};

export default Home;
