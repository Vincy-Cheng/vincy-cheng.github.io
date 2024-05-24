import './globals.css';
import Providers from './_provider/provider';
import { Suspense } from 'react';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Suspense fallback={<div>Loading ...</div>}>
            <div>{children}</div>
          </Suspense>
        </Providers>
      </body>
    </html>
  );
}
