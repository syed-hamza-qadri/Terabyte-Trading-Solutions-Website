import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="relative h-16 w-48 mb-4" style={{ minWidth: "180px" }}>
              <Image
                src="https://c4nsh2f8ijit0hql.public.blob.vercel-storage.com/ChatGPT%20Image%20Apr%2012%2C%202025%2C%2010_26_52%20AM-xZ5nR2gZet494EaEkUcJ5YdAgU3PZy.png"
                alt="Terabyte Trading Solutions Ltd"
                fill
                className="object-contain -ml-6"
              />
            </div>
            <p className="text-gray-600 mb-4">
              Transforming London's Business Landscape with innovative B2B solutions.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-500 hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-gray-600 hover:text-primary transition-colors">
                  Tailored Strategies
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-primary transition-colors">
                  Real-Time Data Analysis
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-primary transition-colors">
                  Portfolio Management
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-primary transition-colors">
                  Business Growth Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                <a href="tel:+44(0)3333355703" className="text-gray-600 hover:text-primary transition-colors">
                  +44 (0) 3333 355 703
                </a>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                <a href="mailto:info@tbtsltd.com" className="text-gray-600 hover:text-primary transition-colors">
                  info@tbtsltd.com
                </a>
              </li>
              <li className="text-gray-600 mt-4">
                27 Old Gloucester St
                <br />
                London, WC1N 3AX
                <br />
                United Kingdom
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-wrap items-center space-x-4 mb-4 md:mb-0">
              <div className="relative h-10 w-24" style={{ minWidth: "80px" }}>
                <Image
                  src="https://c4nsh2f8ijit0hql.public.blob.vercel-storage.com/New_cima_logo-1-HHouKfVrNHF1LnUjbPIT8JdClaXY7H.jpg"
                  alt="CIMA"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative h-10 w-24" style={{ minWidth: "80px" }}>
                <Image
                  src="https://c4nsh2f8ijit0hql.public.blob.vercel-storage.com/UKTI%20APPROVED-ITOIJZQIklbVqVVmbfXVr3aWwurB0F.png"
                  alt="UKTI Approved"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative h-10 w-24" style={{ minWidth: "80px" }}>
                <Image
                  src="https://c4nsh2f8ijit0hql.public.blob.vercel-storage.com/member-ISIgTKgjXdy5OBl8DuiBMb3P4CF697.png"
                  alt="Member"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Terabyte Trading Solutions Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
