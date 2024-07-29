import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import styles from '../styles/Dashboard.module.css';

const Dashboard = ({ userType }) => {
  return (
    <div className={styles.dashboard}>
    
      <Sidebar />
      <main className={styles.mainContent}>
        <h1>Dashboard</h1>

        {/* Overview Section */}
        <section className={styles.overview}>
          <h2>Overview</h2>
          <div className={styles.card}>
            <h3>Sales Summary</h3>
            <p>Total Sales: $5,000</p>
            <p>Recent Transactions: 20</p>
          </div>
          <div className={styles.card}>
            <h3>Store Performance</h3>
            <p>Most Popular Product: Widget A</p>
            <p>Conversion Rate: 12%</p>
          </div>
        </section>

        {/* Quick Actions Section */}
        <section className={styles.quickActions}>
          <h2>Quick Actions</h2>
          {userType === 'smallBusiness' && (
            <>
              <button className={styles.button}>Add New Product</button>
              <button className={styles.button}>Create Store Page</button>
              <button className={styles.button}>Check Order Status</button>
            </>
          )}
          {userType === 'largeBusiness' && (
            <>
              <button className={styles.button}>Place New Bulk Order</button>
              <button className={styles.button}>Update Business Information</button>
              <button className={styles.button}>View Small Business Profiles</button>
            </>
          )}
          {userType === 'investor' && (
            <>
              <button className={styles.button}>Review Investment Proposals</button>
              <button className={styles.button}>Manage Investments</button>
              <button className={styles.button}>Track Loan Repayments</button>
            </>
          )}
        </section>

        {/* Profile Management Section */}
        {userType === 'smallBusiness' && (
          <section className={styles.profileManagement}>
            <h2>Profile Management</h2>
            <button className={styles.button}>Edit Profile</button>
            <button className={styles.button}>Update Business Details</button>
          </section>
        )}

        {/* Product Management Section */}
        {userType === 'smallBusiness' && (
          <section className={styles.productManagement}>
            <h2>Product Management</h2>
            <button className={styles.button}>View Products</button>
            <button className={styles.button}>Add New Product</button>
          </section>
        )}

        {/* Order Management Section */}
        {userType === 'smallBusiness' && (
          <section className={styles.orderManagement}>
            <h2>Order Management</h2>
            <button className={styles.button}>View Orders</button>
            <button className={styles.button}>Manage Orders</button>
          </section>
        )}

        {/* Investors & Loans Section */}
        {userType === 'smallBusiness' && (
          <section className={styles.investorsLoans}>
            <h2>Investors & Loans</h2>
            <button className={styles.button}>View Investors</button>
            <button className={styles.button}>Manage Loan Requests</button>
          </section>
        )}

        {/* Schemes & Subsidies Section */}
        {userType === 'smallBusiness' && (
          <section className={styles.schemesSubsidies}>
            <h2>Schemes & Subsidies</h2>
            <button className={styles.button}>View Available Schemes</button>
          </section>
        )}

        {/* Analytics Section */}
        <section className={styles.analytics}>
          <h2>Analytics</h2>
          <div className={styles.card}>
            <h3>Sales Report</h3>
            <p>View detailed sales reports and trends.</p>
          </div>
          <div className={styles.card}>
            <h3>Customer Insights</h3>
            <p>Understand your customer behavior and preferences.</p>
          </div>
        </section>

        {/* Notifications Section */}
        <section className={styles.notifications}>
          <h2>Notifications</h2>
          <ul>
            <li>New order placed by Customer X.</li>
            <li>Investor Y has shown interest in your business.</li>
            <li>Reminder: Complete your business profile.</li>
          </ul>
        </section>

        {/* Search and Filters Section */}
        <section className={styles.searchFilters}>
          <h2>Search and Filters</h2>
          <input type="text" placeholder="Search..." className={styles.searchInput} />
          <button className={styles.button}>Apply Filters</button>
        </section>
      </main> 
    </div>
  );
};

export default Dashboard;
