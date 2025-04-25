import styles from './Header.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import logo from '../public/logo.png'; // if logo is here

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image src={logo} alt="NariBazaar Logo" width={100} height={50} />
      </div>
      <nav>
        <div
          className={styles['hamburger-menu']}
          onClick={() => setShowMenu(!showMenu)}
        >
          ☰
        </div>
        <ul className={showMenu ? 'show-menu' : ''}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/seller-registration">Register as Seller</Link></li>
        </ul>
      </nav>
    </header>
  );
}
