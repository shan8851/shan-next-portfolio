import Link from "next/link"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@/components/analytics"
import { ModeToggle } from "@/components/mode-toggle"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

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
    <body className={`antialiased min-h-screen bg-[var(--tw-prose-pre-bg)] dark:[var(--tw-prose-pre-bg)]  ${inter.className}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col min-h-screen max-w-2xl mx-auto pt-10 pb-2 px-4">
            <header>
              <div className="flex items-center justify-between">
                <nav className="text-sm font-medium space-x-6">
                  <Link className="hover:underline" href="/">home</Link>
                  <Link className="hover:underline" href="/now">/now</Link>
                  <Link className="hover:underline" href="/cv">cv</Link>
                  <Link className="hover:underline" href="/blog">blog</Link>
                </nav>
                <ModeToggle />
              </div>
            </header>
            <main className="flex-grow">
              {children}
            </main>
            <footer>
              <Footer />
            </footer>
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}

