import Header from '../components/Header';

export default function Home() {
  return (
    <div>
      <Header />
      <main style={{ padding: '20px', textAlign: 'center' }}>
        <h1>Welcome to NariBazaar 👋</h1>
        <p>This is our homepage. More features coming soon!</p>
      </main>
    </div>
  );
}
