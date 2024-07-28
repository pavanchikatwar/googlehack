import Link from 'next/link';
import styles from './Sidebar.module.css'; // Assuming you have a CSS module for styling

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <nav>
        <ul>
          <li>
            <Link href="/dashboard">
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/profile">
              Profile
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
          </li>
          <li>
            <Link href="/bulk-orders">
              Bulk Orders
            </Link>
          </li>
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
          <li>
            <Link href="/cart">
              Cart
            </Link>
          </li>
          <li>
            <Link href="/checkout">
              Checkout
            </Link>
          </li>
          <li>
            <Link href="/gigs">
              Gigs
            </Link>
          </li>
          <li>
            <Link href="/quotations">
              Quotations
            </Link>
          </li>
          <li>
            <Link href="/orders">
              Orders
            </Link>
          </li>
          {/* Add more navigation links as needed */}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
