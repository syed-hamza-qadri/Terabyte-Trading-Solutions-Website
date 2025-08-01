"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="bg-background border-b border-gray-200">
      <nav className="container mx-auto px-4 flex items-center justify-between py-3 md:py-4">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Terabyte Trading Solutions Ltd</span>
            <div className="h-14 md:h-16 w-auto relative" style={{ width: "180px" }}>
              <Image
                src="https://c4nsh2f8ijit0hql.public.blob.vercel-storage.com/ChatGPT%20Image%20Apr%2012%2C%202025%2C%2010_26_52%20AM-xZ5nR2gZet494EaEkUcJ5YdAgU3PZy.png"
                alt="Terabyte Trading Solutions Ltd"
                fill
                className="object-contain -ml-7 md:-ml-4"
                priority
              />
            </div>
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-base font-semibold leading-6",
                pathname === item.href ? "text-primary font-bold" : "text-gray-900 hover:text-primary",
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div className="fixed inset-0 bg-black/25" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Terabyte Trading Solutions Ltd</span>
                <div className="h-12 w-auto relative" style={{ width: "150px" }}>
                  <Image
                    src="https://c4nsh2f8ijit0hql.public.blob.vercel-storage.com/ChatGPT%20Image%20Apr%2012%2C%202025%2C%2010_26_52%20AM-xZ5nR2gZet494EaEkUcJ5YdAgU3PZy.png"
                    alt="Terabyte Trading Solutions Ltd"
                    fill
                    className="object-contain -ml-6"
                    priority
                  />
                </div>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={cn(
                        "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7",
                        pathname === item.href ? "text-primary font-bold" : "text-gray-900 hover:text-primary",
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
