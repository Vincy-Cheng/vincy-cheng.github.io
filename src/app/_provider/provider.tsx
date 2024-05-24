'use client';
import React from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { DarkModeProvider } from './DarkModeProvider';
import { MenuOpenProvider } from './MenuOpenProvider';
import { Analytics } from '@vercel/analytics/react';
import Layout from '../components/Layout';

export default function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <DarkModeProvider>
        <MenuOpenProvider>
          <Layout>
            <>
              {children}
              <Analytics />
            </>
          </Layout>
        </MenuOpenProvider>
      </DarkModeProvider>
    </QueryClientProvider>
  );
}
