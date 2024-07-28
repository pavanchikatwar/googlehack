import Link from 'next/link';
import styles from './Sidebar.module.css'; // Assuming you have a CSS module for styling

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.userInfo}>
        <img
          src="/path/to/profile-pic.jpg" // Replace with actual profile picture path
          alt="Profile Picture"
          className={styles.profilePic}
        />
        <h2 className={styles.userName}>Username</h2> {/* Replace with dynamic user name */}
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/dashboard">
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/store">
              Store
            </Link>
          </li>
          <li>
            <Link href="/products">
              Products
            </Link>
          </li>
          <li>
            <Link href="/investors">
              Investors
            </Link>
          </li >
          <li>
            <Link href="/bulk-orders">
              Bulk Orders
            </Link>
          </li >
          <li>
            <Link href="/loans">
              Loans
            </Link>
          </li>
          <li>
            <Link href="/schemes">
              Schemes
            </Link>
          </li>
          {/* Add more navigation links as needed */}
        </ul >
      </nav >
    </aside >
  );
};

export default Sidebar;
