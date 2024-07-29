import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Product.module.css';
import { useState } from 'react';
import Image from 'next/image';

const Product = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    setQuantity(Number(e.target.value));
  };

  return (
    <div className={styles.productPage}>

      <main className={styles.mainContent}>
        <div className={styles.productDetails}>
          <div className={styles.imageGallery}>
            <Image src="/product-image.jpg" alt="Product" width={500} height={500} className={styles.productImage} />
            {/* Additional images can be added here */}
          </div>

          <div className={styles.productInfo}>
            <h1 className={styles.productName}>Product Name</h1>
            <p className={styles.productDescription}>
              This is a detailed description of the product. It includes features, specifications, and benefits.
            </p>
            <ul className={styles.keyFeatures}>
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
            </ul>
            <p className={styles.productPrice}>$99.99</p>
            <p className={styles.productAvailability}>In Stock</p>
            <p className={styles.productSKU}>SKU: 123456</p>

            <div className={styles.purchaseOptions}>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={handleQuantityChange}
                className={styles.quantityInput}
              />
              <button className={styles.button}>Add to Cart</button>
              <button className={styles.button}>Buy Now</button>
            </div>
          </div>
        </div>

        <section className={styles.productVideo}>
          <h2>Product Video</h2>
          <video controls className={styles.video}>
            <source src="/product-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </section>

        <section className={styles.productFAQs}>
          <h2>Frequently Asked Questions</h2>
          <div className={styles.faqItem}>
            <h3>Question 1?</h3>
            <p>Answer to question 1.</p>
          </div>
          {/* Add more FAQs here */}
        </section>

        <section className={styles.relatedProducts}>
          <h2>Related Products</h2>
          <div className={styles.productGrid}>
            {/* Render related product cards here */}
          </div>
        </section>

        <section className={styles.sellerInfo}>
          <h2>About the Seller</h2>
          <p>Store Name</p>
          <p>Location: City, Country</p>
          <a href="/store-profile" className={styles.link}>Visit Store Profile</a>
          <button className={styles.button}>Contact Seller</button>
        </section>

        <section className={styles.additionalInfo}>
          <h2>Additional Information</h2>
          <p><strong>Shipping Information:</strong> Details about shipping options and costs.</p>
          <p><strong>Return Policy:</strong> Information about returns and exchanges.</p>
        </section>

        <section className={styles.socialProof}>
          <h2>Customer Photos</h2>
          <div className={styles.photosGrid}>
            {/* Add user-generated content photos here */}
          </div>
        </section>

        <section className={styles.productComparison}>
          <h2>Compare with Similar Products</h2>
          {/* Add product comparison feature here */}
        </section>
      </main>

    </div>
  );
};

export default Product;
