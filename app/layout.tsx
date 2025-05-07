import Link from 'next/link';
import './globals.css';
import { Analytics } from '@/components/analytics';
import { Footer } from '@/components/footer';
import { Space_Grotesk } from 'next/font/google';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shan8851',
  description:
    'Full Stack Web3 Engineer focused on DAO tooling, governance systems, and composable UX.',
  icons: {
    icon: '/avatar.png',
  },
  openGraph: {
    title: 'Shan8851',
    description:
      'Full Stack Web3 Engineer focused on DAO tooling, governance systems, and composable UX.',
    url: 'https://shan8851.com',
    siteName: 'Shan8851',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://shan8851.com/og.png', // change to actual path or Vercel OG endpoint
        width: 1200,
        height: 630,
        alt: 'Shan8851 – Full Stack Web3 Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shan8851',
    description:
      'Building DAO interfaces, shaping governance UX, and writing about the journey.',
    creator: '@shan8851',
    images: ['https://shan8851.com/og.png'],
  },
};


interface RootLayoutProps {
  children: React.ReactNode;
}

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '700'],
});

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body className="bg-background text-text antialiased font-sans min-h-screen">
        <div className="flex flex-col min-h-screen">
          <div className="px-4 sm:px-6 md:px-8 w-full max-w-3xl mx-auto flex-1 flex flex-col">
            <SiteHeader />
            <main className="flex-grow space-y-12">{children}</main>
            <footer className="py-8 text-sm text-textSecondary">
              <Footer />
            </footer>
          </div>
          <Analytics />
        </div>
      </body>
    </html>
  );
}

function SiteHeader() {
  return (
    <header className="py-4">
      <nav className="flex items-center justify-end gap-5 text-sm font-medium text-textSecondary">
        <NavLink href="/">home</NavLink>
        <NavLink href="/now">/now</NavLink>
        <NavLink href="/cv">cv</NavLink>
        <NavLink href="/blog">posts</NavLink>
      </nav>
    </header>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="hover:text-green  transition-colors duration-200"
    >
      {children}
    </Link>
  );
}
