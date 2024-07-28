import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/BulkOrders.module.css';
import Link from 'next/link';

const BulkOrders = () => {
  return (
    <div className={styles.bulkOrdersPage}>
      <Header />
      <main className={styles.mainContent}>
        <section className={styles.introduction}>
          <h1>Bulk Orders</h1>
          <p>
            Place bulk orders with confidence. Our platform ensures that you are connected with verified suppliers who meet your business needs.
          </p>
        </section>

        <section className={styles.searchAndFilters}>
          <input
            type="text"
            placeholder="Search for products..."
            className={styles.searchBar}
          />
          <div className={styles.filters}>
            <label>Category:</label>
            <select>
              <option value="">All Categories</option>
              <option value="office-supplies">Office Supplies</option>
              <option value="raw-materials">Raw Materials</option>
              <option value="electronics">Electronics</option>
              <option value="furniture">Furniture</option>
            </select>
            <label>Price Range:</label>
            <select>
              <option value="">Any Price</option>
              <option value="0-100">Up to $100</option>
              <option value="100-500">$100 - $500</option>
              <option value="500-1000">$500 - $1000</option>
              <option value="1000-5000">$1000 - $5000</option>
              <option value="5000+">Above $5000</option>
            </select>
          </div>
        </section>

        <section className={styles.productListings}>
          <h2>Available Products</h2>
          <div className={styles.productList}>
            <div className={styles.productCard}>
              <h3>Office Desk</h3>
              <p>High-quality office desk with adjustable height. Minimum order: 10 units.</p>
              <p>Price: $150 per unit</p>
              <p className={styles.certifications}>Certified: ISO 9001</p>
              <Link href="/product-details/office-desk">
                <a className={styles.viewDetails}>View Details</a>
              </Link>
            </div>
            <div className={styles.productCard}>
              <h3>Raw Steel Sheets</h3>
              <p>Durable raw steel sheets for manufacturing. Minimum order: 100 sheets.</p>
              <p>Price: $500 per sheet</p>
              <p className={styles.certifications}>Certified: ASTM A36</p>
              <Link href="/product-details/raw-steel-sheets">
                <a className={styles.viewDetails}>View Details</a>
              </Link>
            </div>
            <div className={styles.productCard}>
              <h3>LED Monitors</h3>
              <p>High-definition LED monitors suitable for office use. Minimum order: 50 units.</p>
              <p>Price: $200 per unit</p>
              <p className={styles.certifications}>Certified: CE, RoHS</p>
              <Link href="/product-details/led-monitors">
                <a className={styles.viewDetails}>View Details</a>
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.orderForm}>
          <h2>Place an Order</h2>
          <form>
            <label htmlFor="product">Product:</label>
            <select id="product" name="product">
              <option value="office-desk">Office Desk</option>
              <option value="raw-steel-sheets">Raw Steel Sheets</option>
              <option value="led-monitors">LED Monitors</option>
            </select>
            <label htmlFor="quantity">Quantity:</label>
            <input type="number" id="quantity" name="quantity" min="1" />
            <label htmlFor="specialInstructions">Special Instructions:</label>
            <textarea id="specialInstructions" name="specialInstructions" rows="4" />
            <button type="submit" className={styles.submitButton}>Submit Order</button>
          </form>
        </section>

        <section className={styles.orderHistory}>
          <h2>Your Order History</h2>
          <p>View and manage your previous bulk orders.</p>
          {/* Order history details would go here */}
        </section>

        <section className={styles.resources}>
          <h2>Resources and Support</h2>
          <Link href="/guides">
            <a className={styles.link}>Bulk Order Guides</a>
          </Link>
          <Link href="/faqs">
            <a className={styles.link}>FAQs</a>
          </Link>
          <p>For further assistance, please contact our support team.</p>
          <a href="mailto:support@yourplatform.com" className={styles.contactLink}>Contact Support</a>
        </section>

        <section className={styles.promotions}>
          <h2>Promotions and Discounts</h2>
          <p>Check out our latest promotions and discounts on bulk purchases.</p>
          {/* Promotion details would go here */}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BulkOrders;
