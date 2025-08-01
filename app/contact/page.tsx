import type { Metadata } from "next"
import ContactForm from "@/components/contact-form"
import { MapPin, Phone, Mail, Linkedin } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact | Terabyte Trading Solutions Ltd",
  description: "Get in touch with our team for inquiries, support, or to schedule a consultation",
}

export default function ContactPage() {
  return (
    <div className="w-full">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Connect With Our Team Today</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're here to answer your questions and provide the support you need. Reach out to us through any of the
            channels below.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Office Information</h2>

            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-gray-700">
                    27 Old Gloucester St
                    <br />
                    27, Old Gloucester Street
                    <br />
                    London
                    <br />
                    WC1N 3AX
                    <br />
                    United Kingdom
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <a href="tel:+44(0)3333355703" className="text-gray-700 hover:text-primary transition-colors">
                    +44 (0) 3333 355 703
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <a href="mailto:info@tbtsltd.com" className="text-gray-700 hover:text-primary transition-colors">
                    info@tbtsltd.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <Linkedin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <a href="#" className="text-gray-700 hover:text-primary transition-colors">
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-bold mb-4">Business Hours</h3>
              <div className="space-y-2">
                <p className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday:</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-gray-600">Saturday:</span>
                  <span className="font-medium">Closed</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-gray-600">Sunday:</span>
                  <span className="font-medium">Closed</span>
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">FOR JOB INQUIRIES, PLEASE FILL THE FORM BELOW</h2>
            <div className="bg-card p-6 rounded-lg shadow-lg">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full h-[500px] relative">
        <iframe
          src="https://maps.google.com/?q=27+Old+Gloucester+St,+London+WC1N+3AX,+UK&amp;ftid=0x48761b36a38947e9:0x5267951cbc0ad430&amp;hl=en&amp;z=14&amp;output=embed"
          width="100%"
          height="100%"
          className="border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  )
}
