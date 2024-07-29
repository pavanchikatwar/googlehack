import styles from '../styles/Store.module.css';
import ProductCard from '../components/ProductCard'; // A component for displaying individual products

const Store = () => {
  return (
    <div className={styles.store}>
 
      <main className={styles.mainContent}>
        <section className={styles.storeOverview}>
          <h1>Store Name</h1>
          <p>Welcome to our store! We offer a wide range of products to meet your needs.</p>
          <img src="/store-banner.jpg" alt="Store Banner" className={styles.storeBanner} />
        </section>

        <section className={styles.productListing}>
          <h2>Products</h2>
          <div className={styles.filters}>
            <input type="text" placeholder="Search products..." className={styles.searchInput} />
            <button className={styles.button}>Apply Filters</button>
          </div>
          <div className={styles.productGrid}>
            {/* Example of rendering product cards */}
            <ProductCard />
            <ProductCard />
            {/* Add more ProductCard components here */}
          </div>
        </section>

        <section className={styles.cart}>
          <h2>Your Cart</h2>
          <p>No items in your cart yet.</p>
          {/* Add cart functionality here */}
        </section>

        <section className={styles.promotions}>
          <h2>Promotions</h2>
          <p>Check out our latest offers and discount codes!</p>
          {/* Add promotion details here */}
        </section>

        <section className={styles.contact}>
          <h2>Contact Us</h2>
          <form>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required></textarea>
            <button type="submit" className={styles.button}>Send Message</button>
          </form>
        </section>
      </main>

    </div>
  );
};

export default Store;
