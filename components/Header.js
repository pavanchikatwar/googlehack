import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Header.module.css'; // Ensure the CSS module exists and is correctly named

const Header = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user data or check authentication status
    // This is just a placeholder; replace with actual authentication logic
    const fetchUser = async () => {
      // Example: const response = await fetch('/api/auth/user');
      // const data = await response.json();
      // setUser(data.user);
    };
    fetchUser();
  }, []);

  const handleLogout = () => {
    // Handle logout logic here
    console.log('Logout button clicked');
    // Example: Clear user session, redirect to login, etc.
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">MyApp</Link> {/* No  tag needed here */}
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          {user && (
            <>
              <li>
                <Link href="/profile">Profile</Link>
              </li>
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
