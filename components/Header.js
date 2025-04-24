// components/Header.js
import Link from 'next/link';
import styles from './Header.module.css'; // ✅ Import the CSS module

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>NariBazaar</div>
      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/explore">Explore</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/login">Login</Link>
      </nav>
    </header>
  );
}
