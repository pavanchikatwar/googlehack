import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import styles from '../styles/Profile.module.css';

const Profile = ({ userType }) => {
  return (
    <div className={styles.profile}>

     
      <main className={styles.mainContent}>
        <h1>Profile</h1>

        {/* Profile Information Section */}
        <section className={styles.profileInfo}>
          <h2>Profile Information</h2>
          <div className={styles.card}>
            <img src="/profile-pic-placeholder.png" alt="Profile" className={styles.profilePic} />
            <button className={styles.button}>Upload New Picture</button>
            <h3>Business Name: XYZ Ltd.</h3>
            <p>Description: A small business specializing in widgets.</p>
            <p>Location: 123 Business St, City, Country</p>
          </div>
        </section>

        {/* Account Settings Section */}
        <section className={styles.accountSettings}>
          <h2>Account Settings</h2>
          <button className={styles.button}>Change Password</button>
          <button className={styles.button}>Manage Notifications</button>
        </section>

        {/* Business Metrics or Investment History Section */}
        {userType === 'smallBusiness' && (
          <section className={styles.businessMetrics}>
            <h2>Business Metrics</h2>
            <div className={styles.card}>
              <h3>Total Sales</h3>
              <p>$5,000</p>
            </div>
            <div className={styles.card}>
              <h3>Number of Products</h3>
              <p>50</p>
            </div>
          </section>
        )}

        {userType === 'largeBusiness' && (
          <section className={styles.bulkOrders}>
            <h2>Bulk Orders Summary</h2>
            <div className={styles.card}>
              <h3>Recent Orders</h3>
              <p>Order #12345 - Status: Delivered</p>
            </div>
          </section>
        )}

        {userType === 'investor' && (
          <section className={styles.investmentHistory}>
            <h2>Investment History</h2>
            <div className={styles.card}>
              <h3>Recent Investments</h3>
              <p>Investment in ABC Corp. - Status: Active</p>
            </div>
          </section>
        )}

      </main>

    </div>
  );
};

export default Profile;
