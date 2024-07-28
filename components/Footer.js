import Link from 'next/link';
import styles from './Footer.module.css'; // Assuming you have a CSS module for styling

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.links}>
          <ul>
            <li>
              <Link href="/about" passHref>
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" passHref>
                Contact
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" passHref>
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" passHref>
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.socialMedia}>
          {/* External links should use standard <link> tags */}
          <link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            Twitter
          </link>
          <link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            Facebook
          </link>
          <link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </link>
        </div>
        <div className={styles.copyright}>
          <p>&copy; {new Date().getFullYear()} MyApp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
