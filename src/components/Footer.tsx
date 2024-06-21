// src/components/Footer.tsx

import React from 'react';
import Link from 'next/link';
import { SignedIn, SignedOut, UserButton, SignInButton } from '@clerk/nextjs';
import styles from './styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLeft}>
        <p>&copy; {new Date().getFullYear()} Eagles Ring. All rights reserved.</p>
      </div>
      <div className={styles.footerRight}>
        <SignedIn>
          <Link href="/Profile" className={styles.footerLink}>
            Profile
          </Link>
        </SignedIn>
        <Link href="/Contact" className={styles.footerLink}>
          Contact Us
        </Link>
        <Link href="/About" className={styles.footerLink}>
          About Us
        </Link>
        <Link href="/Services" className={styles.footerLink}>
            Services
        </Link>
        <SignedOut>
          <SignInButton mode="modal">
            <button className={styles.footerButton}>Sign In</button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </footer>
  );
};

export default Footer;
