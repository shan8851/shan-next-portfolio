import Link from 'next/link';
import './globals.css';
import { Analytics } from '@/components/analytics';
import { Footer } from '@/components/footer';
import { Space_Grotesk } from 'next/font/google';

export const metadata = {
  title: 'Shan8851',
  description: 'Software developer, mentor and web3 enthusiast.',
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
