import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Investors.module.css';
import Link from 'next/link';

const Investors = () => {
  return (
    <div className={styles.investorsPage}>
      <Header />
      <main className={styles.mainContent}>
        <section className={styles.introduction}>
          <h1>Welcome Investors</h1>
          <p>
            Discover exciting investment opportunities with innovative small businesses seeking growth and funding.
          </p>
        </section>

        <section className={styles.searchAndFilters}>
          <input
            type="text"
            placeholder="Search for businesses..."
            className={styles.searchBar}
          />
          <div className={styles.filters}>
            <label>Industry:</label>
            <select>
              <option value="">All Industries</option>
              <option value="technology">Technology</option>
              <option value="healthcare">Healthcare</option>
              <option value="finance">Finance</option>
              <option value="retail">Retail</option>
              <option value="manufacturing">Manufacturing</option>
              <option value="education">Education</option>
              <option value="hospitality">Hospitality</option>
            </select>
            <label>Location:</label>
            <select>
              <option value="">All Locations</option>
              <option value="north-america">North America</option>
              <option value="europe">Europe</option>
              <option value="asia">Asia</option>
              <option value="south-america">South America</option>
              <option value="africa">Africa</option>
              <option value="oceania">Oceania</option>
            </select>
            <label>Investment Type:</label>
            <select>
              <option value="">All Types</option>
              <option value="equity">Equity</option>
              <option value="loan">Temporary Loan</option>
              <option value="debt">Convertible Debt</option>
            </select>
          </div>
        </section>

        <section className={styles.featuredOpportunities}>
          <h2>Featured Investment Opportunities</h2>
          <div className={styles.opportunityList}>
            <div className={styles.businessCard}>
              <h3>Innovative Tech Solutions</h3>
              <p>Transforming the tech landscape with cutting-edge solutions in AI and machine learning. Seeking equity investment to expand R&D.</p>
              <Link href="/business-profile/tech-solutions">
                <a className={styles.viewDetails}>View Details</a>
              </Link>
            </div>
            <div className={styles.businessCard}>
              <h3>Green Energy Solutions</h3>
              <p>Pioneering sustainable energy solutions with a focus on solar and wind technologies. Looking for temporary loans to scale production.</p>
              <Link href="/business-profile/green-energy">
                <a className={styles.viewDetails}>View Details</a>
              </Link>
            </div>
            <div className={styles.businessCard}>
              <h3>Health Innovators Inc.</h3>
              <p>Leading the way in healthcare innovation with advanced medical devices and telehealth services. Seeking equity investment for clinical trials.</p>
              <Link href="/business-profile/health-innovators">
                <a className={styles.viewDetails}>View Details</a>
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.businessListings}>
          <h2>All Businesses Seeking Investment</h2>
          <div className={styles.listings}>
            <div className={styles.listingItem}>
              <h3>Smart Home Innovations</h3>
              <p>Developing next-gen smart home technology with a focus on security and automation. Seeking equity funding for market expansion.</p>
              <Link href="/business-profile/smart-home-innovations">
                <a className={styles.viewDetails}>View Details</a>
              </Link>
            </div>
            <div className={styles.listingItem}>
              <h3>Eco-Friendly Packaging</h3>
              <p>Offering sustainable packaging solutions for various industries. Looking for temporary loans to increase production capacity.</p>
              <Link href="/business-profile/eco-packaging">
                <a className={styles.viewDetails}>View Details</a>
              </Link>
            </div>
            <div className={styles.listingItem}>
              <h3>EdTech Visionaries</h3>
              <p>Creating innovative educational tools and platforms to enhance learning experiences. Seeking equity investment to broaden impact.</p>
              <Link href="/business-profile/edtech-visionaries">
                <a className={styles.viewDetails}>View Details</a>
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.investmentProcess}>
          <h2>How It Works</h2>
          <ol>
            <li>Explore available investment opportunities tailored to your interests.</li>
            <li>Review detailed business profiles and investment proposals.</li>
            <li>Connect directly with businesses to discuss investment terms.</li>
            <li>Complete the investment process through our secure platform.</li>
          </ol>
        </section>

        <section className={styles.resources}>
          <h2>Investor Resources</h2>
          <Link href="/guides">
            <a className={styles.link}>Investment Guides</a>
          </Link>
          <Link href="/faqs">
            <a className={styles.link}>FAQs</a>
          </Link>
          <p>Need more assistance? Reach out to our support team.</p>
          <a href="mailto:support@yourplatform.com" className={styles.contactLink}>Contact Support</a>
        </section>

        <section className={styles.successStories}>
          <h2>Success Stories</h2>
          <div className={styles.storiesList}>
            <div className={styles.storyCard}>
              <h3>Tech Innovations Success</h3>
              <p>How Tech Innovations secured funding to revolutionize the AI industry and expand globally.</p>
            </div>
            <div className={styles.storyCard}>
              <h3>Green Energy Growth</h3>
              <p>Green Energy Solutions' journey from startup to leading provider of sustainable energy solutions.</p>
            </div>
            <div className={styles.storyCard}>
              <h3>Health Innovators Expansion</h3>
              <p>Health Innovators' success in obtaining funding to launch groundbreaking medical devices.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Investors;
