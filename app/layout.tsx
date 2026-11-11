import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.scss';
import { Footer } from '../components/footer';
import { Header } from '../components/header';
import { siteConfig } from '../lib/site-config';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s - ${siteConfig.title}`,
  },
  description: siteConfig.description,
  keywords: ['programming', 'software engineering', 'azure', 'windows', 'development', '.net', 'sheffield', 'user group'],
  authors: [{ name: 'dotnetsheff' }],
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.title,
    images: ['/images/logo.jpg'],
  },
  twitter: {
    card: 'summary',
    title: siteConfig.title,
    description: siteConfig.description,
    images: ['/images/logo.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div id="page">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
