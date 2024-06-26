import Link from "next/link"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@/components/analytics"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Source_Code_Pro } from 'next/font/google'


export const metadata = {
  title: "Shan8851",
  description: "Software developer, mentor and web3 enthusiast.",
}

interface RootLayoutProps {
  children: React.ReactNode
}

const sourceCodePro = Source_Code_Pro({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
})

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={`${sourceCodePro.className} antialiased h-screen bg-[var(--tw-prose-pre-bg)] dark:[var(--tw-prose-pre-bg)] max-w-full`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col h-screen">
            <header className="flex-shrink-0  border-b border-green-500 w-full">

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
