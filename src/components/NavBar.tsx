"use client"
// components/NavBar.tsx
import { useState } from 'react';
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';
import Link from 'next/link';
import styles from './NavBar.module.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          Eagles Ring
        </Link>
        <div className={styles.menuIcon} onClick={toggleMenu}>
          <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={`${styles.navMenu} ${isOpen ? styles.active : ''}`}>
          <li className={styles.navItem}>
            <Link href="/" className={styles.navLinks}>
              Home
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/about" className={styles.navLinks}>
              About
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/services" className={styles.navLinks}>
              Services
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/contact" className={styles.navLinks}>
              Contact
            </Link>
          </li>
          <SignedIn>
            <li className={styles.navItem}>
              <UserButton />
            </li>
          </SignedIn>
          <SignedOut>
            <li className={styles.navItem}>
              <Link href="/sign-in" className={styles.navLinks}>
                Sign In
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/sign-up" className={styles.navLinks}>
                Sign Up
              </Link>
            </li>
          </SignedOut>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
