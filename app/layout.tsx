import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar03 } from "@/components/ui/shadcn-io/navbar-03"
import { PageTransition } from "@/components/page-transition"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Dynamic Teen Coalition",
  description: "Dynamic Teen Coalition: The UN's First Teen-Led Multistakeholder Movement.",
  generator: 'dtcwebsite',
  icons: {
    icon: '/dtclogo.png',
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="relative">
            <Navbar03 />
            <PageTransition>
              {children}
            </PageTransition>
          </div>
          {/* Modal portal container */}
          <div id="modal-root"></div>
        </ThemeProvider>
      </body>
    </html>
  )
}
