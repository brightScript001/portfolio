import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import FloatingNavbar from "@/components/floating-navbar"
import FloatingActionButtons from "@/components/floating-action-buttons"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Freelance Web Developer | Professional Web Solutions",
  description: "Custom web development services for businesses looking to establish a powerful online presence",
  openGraph: {
    images: ["/og-image.png"],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <div className="relative min-h-screen bg-[#000000]">
            <FloatingNavbar />
            {children}
            <FloatingActionButtons />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
