import './globals.css';
import { ReactNode } from 'react';
import { Metadata } from 'next';

// Optional: Define metadata for your application
export const metadata: Metadata = {
  title: 'Elaview - Advertising Space Marketplace',
  description: 'Connect landlords with prime advertising real estate to brands seeking impactful visibility in cities.',
};

// StrictMode is configured in next.config.mjs, not in components
export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* This is where your Header would go if shared across all pages */}
        {children}
        {/* This is where your Footer would go if shared across all pages */}
      </body>
    </html>
  );
}