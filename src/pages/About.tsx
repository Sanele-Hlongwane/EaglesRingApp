// src/pages/about.tsx

import React from 'react';
import NavBar from '@/components/NavBar';

const AboutPage = () => {
  return (
    <div>
      <NavBar />
      <div className="content-container">
        <h1>About Us</h1>
        <p>
          Eagles Ring is an investment platform that matches aspiring entrepreneurs with investment opportunities.
        </p>
        <p>
          Our mission is to empower entrepreneurs worldwide by connecting them with experienced investors who can help bring their business ideas to life.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
