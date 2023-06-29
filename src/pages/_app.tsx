import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import { MenuOpenProvider } from '../provider/MenuOpenProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <MenuOpenProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MenuOpenProvider>
    </QueryClientProvider>
  );
}
