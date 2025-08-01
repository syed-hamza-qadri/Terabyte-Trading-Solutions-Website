import type { Metadata } from "next"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "About | Terabyte Trading Solutions Ltd",
  description: "Learn about our company history, approach, and recognitions",
}

export default function AboutPage() {
  const recognitions = [
    {
      title: "Approved Advisor for Government Grant",
      date: "May 2020",
      description: "Successfully accredited as a trusted business partner with industry-leading standards.",
    },
    {
      title: "Excellence in Innovation Member",
      date: "July 2015",
      description: "Recognized for exceptional innovation practices in the B2B service sector.",
    },
    {
      title: "Customer Satisfaction Achievement",
      date: "September 2022",
      description: "Proud recipient of the Customer Satisfaction Achievement for outstanding performance.",
    },
  ]

  return (
    <div className="w-full">
      {/* Unique Approach Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <span className="text-brand-green font-semibold uppercase tracking-wider">UNIQUE APPROACH</span>
              <h1 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Innovative Solutions for Business Success</h1>
              <div className="space-y-6">
                <p className="text-gray-700">
                  With deep expertise and industry knowledge, we deliver strategic solutions to maximize results. As
                  business & technology rapidly evolve, we leverage 15 years of experience & insights to drive your
                  business growth and success.
                </p>
                <p className="text-gray-700">
                  Based in London, United Kingdom, our team is dedicated to providing innovative approaches that set
                  your business apart in the competitive market. We strive to constantly adapt and improve to meet the
                  evolving needs of our clients.
                </p>
              </div>
            </div>
            <div className="md:w-1/2 w-full">
              <div
                className="relative w-full rounded-lg overflow-hidden shadow-xl"
                style={{ height: "500px", minHeight: "300px", position: "relative" }}
              >
                <Image
                  src="https://c4nsh2f8ijit0hql.public.blob.vercel-storage.com/b666bd421d-JVq8ztoy2gFRt2FrhpiRmhd9dkCd6W.jpg"
                  alt="Our unique approach"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recognitions Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-brand-green font-semibold uppercase tracking-wider">RECOGNIZED EXCELLENCE</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Recognitions & Certifications</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Our company has garnered prestigious titles for outstanding service quality. We underwent rigorous
              evaluation to achieve these recognitions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {recognitions.map((item, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 mr-3 flex-shrink-0">
                      <svg viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                        <path
                          d="M16.7321 3.01926C17.9475 1.80868 19.8765 1.80868 21.0919 3.01926C21.787 3.71152 22.7534 4.03482 23.7109 3.89538C25.3854 3.65154 26.9459 4.81886 27.2381 6.53378C27.4052 7.51445 28.0025 8.36085 28.8567 8.8275C30.3506 9.64353 30.9467 11.5323 30.204 13.0965C29.7793 13.991 29.7793 15.0372 30.204 15.9317C30.9467 17.4959 30.3506 19.3847 28.8567 20.2007C28.0025 20.6674 27.4052 21.5138 27.2381 22.4944C26.9459 24.2093 25.3854 25.3767 23.7109 25.1328C22.7534 24.9934 21.787 25.3167 21.0919 26.009C19.8765 27.2195 17.9475 27.2195 16.7321 26.009C16.037 25.3167 15.0706 24.9934 14.1131 25.1328C12.4386 25.3767 10.8781 24.2093 10.5859 22.4944C10.4188 21.5138 9.82153 20.6674 8.96727 20.2007C7.47341 19.3847 6.87733 17.4959 7.62001 15.9317C8.04471 15.0372 8.04471 13.991 7.62001 13.0965C6.87733 11.5323 7.47341 9.64353 8.96727 8.8275C9.82153 8.36085 10.4188 7.51445 10.5859 6.53378C10.8781 4.81886 12.4386 3.65154 14.1131 3.89538C15.0706 4.03482 16.037 3.71152 16.7321 3.01926Z"
                          fill="#92d14f"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                  </div>
                  <p className="font-semibold text-gray-600 mb-4">{item.date}</p>
                  <p className="text-gray-700">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-brand-green font-semibold uppercase tracking-wider">OUR VALUES</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">What Drives Us</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Our core values shape everything we do and guide our approach to client relationships.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Integrity</h3>
              <p className="text-gray-700">
                We maintain the highest standards of honesty and ethical conduct in all our business dealings.
              </p>
            </div>

            <div className="bg-card p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M12 2v4"></path>
                  <path d="M12 18v4"></path>
                  <path d="M4.93 4.93l2.83 2.83"></path>
                  <path d="M16.24 16.24l2.83 2.83"></path>
                  <path d="M2 12h4"></path>
                  <path d="M18 12h4"></path>
                  <path d="M4.93 19.07l2.83-2.83"></path>
                  <path d="M16.24 7.76l2.83-2.83"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-gray-700">
                We continuously seek new and better ways to serve our clients and solve complex business challenges.
              </p>
            </div>

            <div className="bg-card p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <circle cx="12" cy="10" r="2"></circle>
                  <line x1="8" x2="8" y1="2" y2="4"></line>
                  <line x1="16" x2="16" y1="2" y2="4"></line>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Client Focus</h3>
              <p className="text-gray-700">
                We put our clients at the center of everything we do, ensuring their success is our primary goal.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
