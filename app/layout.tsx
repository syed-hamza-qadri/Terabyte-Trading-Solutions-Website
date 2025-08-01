import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: "Terabyte Trading Solutions Ltd",
  description: "Transforming London's Business Landscape with innovative B2B solutions",
  icons: {
    icon: "https://c4nsh2f8ijit0hql.public.blob.vercel-storage.com/ChatGPT%20Image%20Apr%2014%2C%202025%2C%2007_49_11%20AM-Oj204sVpsgYlXa2MPQz1YSGnMORXql.png",
    apple: "https://c4nsh2f8ijit0hql.public.blob.vercel-storage.com/ChatGPT%20Image%20Apr%2014%2C%202025%2C%2007_49_11%20AM-Oj204sVpsgYlXa2MPQz1YSGnMORXql.png",
  },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <style>{`
          .image-container {
            position: relative;
            width: 100%;
            height: 100%;
          }
          
          @media (max-width: 768px) {
            .image-container {
              min-height: 250px;
            }
          }
        `}</style>
      </head>
      <body className={`${montserrat.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
