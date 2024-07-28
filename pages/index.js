import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Business Platform</title>
        <meta name="description" content="Platform connecting small businesses with investors and large businesses" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to the Business Platform
        </h1>

        <p className={styles.description}>
          Connect, Invest, and Grow
        </p>

        <div className={styles.grid}>
          <Link href="/register">
            <link className={styles.card}>
              <h2>Register →</h2>
              <p>Create an account to get started.</p>
            </link>
          </Link>

          <Link href="/login">
            <link className={styles.card}>
              <h2>Login →</h2>
              <p>Access your account.</p>
            </link>
          </Link>

          <Link href="/dashboard">
            <link className={styles.card}>
              <h2>Dashboard →</h2>
              <p>View your dashboard and manage your activities.</p>
            </link>
          </Link>

          <Link href="/profile">
            <link className={styles.card}>
              <h2>Profile →</h2>
              <p>Manage your profile information.</p>
            </link>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
