import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import { MenuOpenProvider } from '../provider/MenuOpenProvider';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MenuOpenProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MenuOpenProvider>
  );
}
