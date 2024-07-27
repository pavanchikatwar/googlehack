import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import styles from './Layout.module.css'; // Optional, for layout styling

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.mainContent}>
        <Sidebar />
        <main className={styles.pageContent}>{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
