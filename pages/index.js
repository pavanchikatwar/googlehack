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
        {/* <Link rel="icon" href="/favicon.ico" /> */}
      </Head> 
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to the Business Platform
        </h1>

        <p className={styles.description}>
          Connect, Invest, and Grow
        </p>

        <div className={styles.grid}> 
            <Link  href="/register" className={styles.card}>
              <h2>Register →</h2>
              <p>Create an account to get started.</p>
            </Link> 
 
            <Link href="/login" className={styles.card}>
              <h2>Login →</h2>
              <p>Access your account.</p>
            </Link> 

       
            <Link  href="/dashboard" className={styles.card}>
              <h2>Dashboard →</h2>
              <p>View your dashboard and manage your activities.</p>
            </Link> 
 
            <Link href="/profile" className={styles.card}>
              <h2>Profile →</h2>
              <p>Manage your profile information.</p>
            </Link>  
        </div>
      </main>
 
    </div>
  );
}
