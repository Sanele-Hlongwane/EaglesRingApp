"use client"
// pages/PitchForm.tsx
import { useState } from 'react';
import styles from '@/styles/PitchForm.module.css'; 

const PitchForm = () => {
  const [pitch, setPitch] = useState({
    firstName: '',
    lastName: '',
    email: '',
    companyName: '',
    businessModel: '',
    marketOpportunity: '',
    financialProjection: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setPitch((prevPitch) => ({
      ...prevPitch,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/pitch', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(pitch),
      });
      if (response.ok) {
        alert('Pitch submitted successfully!');
        setPitch({
          firstName: '',
          lastName: '',
          email: '',
          companyName: '',
          businessModel: '',
          marketOpportunity: '',
          financialProjection: '',
        });
      } else {
        alert('Failed to submit pitch');
      }
    } catch (error) {
      console.error('Error submitting pitch:', error);
      alert('Failed to submit pitch');
    }
  };

  return (
    <div className={styles['pitch-form-container']}>
      <h2>Submit Your Business Pitch</h2>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={pitch.firstName}
            onChange={handleChange}
            required
          />
        </label>
        {/* Repeat similar structure for other fields */}
        <button type="submit">Submit Pitch</button>
      </form>
    </div>
  );
};

export default PitchForm;
