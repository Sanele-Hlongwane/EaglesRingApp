// components/Footer.tsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerLinks}>
          <a href="/" className={styles.link}>Home</a>
          <a href="/about" className={styles.link}>About</a>
          <a href="/services" className={styles.link}>Services</a>
          <a href="/contact" className={styles.link}>Contact</a>
        </div>
        <div className={styles.socialIcons}>
          <a href="https://facebook.com" className={styles.icon}>
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://twitter.com" className={styles.icon}>
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://instagram.com" className={styles.icon}>
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://linkedin.com" className={styles.icon}>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
