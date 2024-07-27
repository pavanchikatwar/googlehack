import Layout from '../components/Layout';
import '../styles/globals.css'; // Global styles

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
