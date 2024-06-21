// src/pages/contact.tsx

import React from 'react';
import NavBar from '@/components/NavBar';
import styles from '../styles/Contact.module.css';

const ContactPage = () => {
  return (
    <div>
      <NavBar />
      <div className={styles.contactContainer}>
        <h1>Contact Us</h1>
        <p>
          You can reach out to us using the information below. We look forward to hearing from you!
        </p>
        <ul className={styles.contactList}>
          <li>
            <strong>Email:</strong> contact@eaglesring.com
          </li>
          <li>
            <strong>Phone:</strong> +1234567890
          </li>
          <li>
            <strong>Address:</strong> 123 Eagle Street, Eagle City
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactPage;
