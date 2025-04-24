import './globals.css';

export const metadata = {
  title: 'NariBazaar',
  description: 'Empowering women entrepreneurs',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}