import Link from "next/link"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@/components/analytics"
import { ModeToggle } from "@/components/mode-toggle"
import { Footer } from "@/components/footer"


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
    <body className={`antialiased min-h-screen bg-[var(--tw-prose-pre-bg)] dark:[var(--tw-prose-pre-bg)]  font-mono`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col min-h-screen max-w-3xl p-3">
            <header>
              <div className="flex items-center gap-6">
                <ModeToggle />
                <nav className="text-sm font-medium space-x-6">
                  <Link className="hover:underline" href="/">home</Link>
                  <Link className="hover:underline" href="/now">/now</Link>
                  <Link className="hover:underline" href="/cv">cv</Link>
                  <Link className="hover:underline" href="/blog">blog</Link>
                </nav>

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

