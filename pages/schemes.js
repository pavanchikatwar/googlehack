import Header from '../components/Header';
import Footer from '../components/Footer';
import { schemes } from '../data/schemes';
import styles from '../styles/Schemes.module.css';
import Link from 'next/link';
import { Card, Button } from 'antd';

const Scheme = ({ scheme }) => {
  return (
    <Card
      className="bg-white shadow-lg rounded-lg border  "
      title={<h3 className="text-xl font-semibold" >{scheme.name}</h3>}
      bordered={false}
      extra={
        <Link href={`/scheme-details/${scheme.id}`}>
          <Button type="primary">View Details</Button>
        </Link>
      }
    >
      <p className="text-gray-700 mb-2">{scheme.description}</p>
      <p className="text-gray-800"><strong>Eligibility:</strong> {scheme.eligibility}</p>
      <p className="text-gray-800"><strong>Application Process:</strong> {scheme.applicationProcess}</p>
      <p className="text-gray-800"><strong>Deadline:</strong> {scheme.deadline}</p>
    </Card>
  );
};

const SchemesPage = () => {
  return (
    <div className={styles.schemesPage}>

      <main className={styles.mainContent}>
        <section className={styles.introduction}>
          <h1>Government Schemes and Subsidies</h1>
          <p>Explore various government schemes and subsidies available for small business owners.</p>
          <p>Use the search and filter options to find the schemes that best suit your business needs.</p>
        </section>

        <section className={styles.searchAndFilters}>
          <input
            type="text"
            placeholder="Search for schemes..."
            className={styles.searchBar}
          />
          <div className={styles.filters}>
            <label>Industry:</label>
            <select>
              <option value="">All Industries</option>
              <option value="technology">Technology</option>
              <option value="manufacturing">Manufacturing</option>
              <option value="services">Services</option>
              <option value="retail">Retail</option>
            </select>
            <label>Region:</label>
            <select>
              <option value="">All Regions</option>
              <option value="national">National</option>
              <option value="regional">Regional</option>
              <option value="local">Local</option>
            </select>
            <label>Scheme Type:</label>
            <select>
              <option value="">All Types</option>
              <option value="grant">Grant</option>
              <option value="loan">Loan</option>
              <option value="subsidy">Subsidy</option>
            </select>
          </div>
        </section>

        <section className={`gap-4 flex flex-col my-4`}>
          {schemes.map(scheme => (
            <Scheme key={scheme.id} scheme={scheme} />
          ))}
        </section>

        <section className={styles.resources}>
          <h2>Resources and Support</h2>
          <Link href="/guides">
            Scheme Application Guides
          </Link>
          <Link href="/faqs" className={styles.link}>
            FAQs
          </Link>
          <p>For further assistance, please contact our support team.</p>
          <Link href="mailto:support@yourplatform.com" className={styles.contactLink}>Contact Support</Link>
        </section>
      </main>

    </div>
  );
};

export default SchemesPage;
