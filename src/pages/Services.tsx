// pages/services.tsx

import React from 'react';

import { services } from '@/data/servicesData';
import styles from '@/styles/Services.module.css';

const ServicesPage = () => {
  return (
      <div className={styles.services}>
        <h1>Our Services</h1>
        <div className={styles.serviceList}>
          {services.map((service, index) => (
            <div key={index} className={styles.service}>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
  );
};

export default ServicesPage;
