import Link from "next/link"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@/components/analytics"
import { ModeToggle } from "@/components/mode-toggle"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export const metadata = {
  title: "Shan8851",
  description: "Software developer, mentor and web3 enthusiast.",
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="antialiased h-screen bg-[var(--tw-prose-pre-bg)] dark:bg-[var(--tw-prose-pre-bg)] max-w-full font-mono">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col h-screen border-4 md:border-8 border-green-500">
            <header className="flex-shrink-0  border-b border-green-500 w-full">
              <div className="flex items-center gap-6 border-b border-green-500 py-4 pl-4">
                <ModeToggle />
                <nav className="text-sm font-medium space-x-6">
                  <Link className="hover:text-pink-400 underline" href="/">home</Link>
                  <Link className="hover:text-pink-400 underline" href="/now">/now</Link>
                  <Link className="hover:text-pink-400 underline" href="/cv">cv</Link>
                  <Link className="hover:text-pink-400 underline" href="/blog">blog</Link>
                </nav>
              </div>
              <div className="flex-shrink-0 pl-4">
        <Header />
      </div>

            </header>
            <main className="flex-1 overflow-y-auto">
              {children}
            </main>
            <footer className="flex-shrink-0">
              <Footer />
            </footer>
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
