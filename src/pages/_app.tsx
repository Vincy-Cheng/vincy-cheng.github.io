import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import { MenuOpenProvider } from '../provider/MenuOpenProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { DarkModeProvider } from '../provider/DarkModeProvider';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <DarkModeProvider>
        <MenuOpenProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </MenuOpenProvider>
      </DarkModeProvider>
    </QueryClientProvider>
  );
}
