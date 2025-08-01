import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Services | Terabyte Trading Solutions Ltd",
  description: "Explore our comprehensive business services designed to boost your efficiency and growth",
}

export default function ServicesPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative bg-gray-100 py-20">
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/services-bg.jpg')" }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Empower Your Business Performance with us!
          </h1>
        </div>
      </div>

      {/* Tailored Strategies */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-6">Tailored Strategies</h2>
              <p className="text-gray-700 mb-8 text-lg">
                Our Tailored Business Strategies service customizes trading approaches to suit your unique requirements,
                optimizing profitability and risk management.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-brand-green">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Craft personalized trading plans based on individual goals</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-brand-green">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Analyze market trends to identify lucrative opportunities</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-brand-green">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Implement strategies that align with your risk tolerance levels</span>
                </li>
              </ul>
              <Link href="/contact">
                <Button className="bg-brand-green hover:bg-brand-green/90 text-white">Book a consultation</Button>
              </Link>
            </div>
            <div className="md:w-1/2 order-1 md:order-2 w-full">
              <div
                className="relative w-full rounded-lg overflow-hidden shadow-xl"
                style={{ height: "400px", minHeight: "300px", position: "relative" }}
              >
                <Image
                  src="https://c4nsh2f8ijit0hql.public.blob.vercel-storage.com/8f424bc0c4-qgaicWa70a3sq9OEUG9o9STIM03hSs.jpg"
                  alt="Tailored business strategies"
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

      {/* Real-Time Data Analysis */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 w-full">
              <div
                className="relative w-full rounded-lg overflow-hidden shadow-xl"
                style={{ height: "400px", minHeight: "300px", position: "relative" }}
              >
                <Image
                  src="https://c4nsh2f8ijit0hql.public.blob.vercel-storage.com/f16edf5bef-fZwwPJkVkXLKAMzOjoHxHoGJkviTeQ.jpg"
                  alt="Real-time data analysis"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Real-Time Data Analysis</h2>
              <p className="text-gray-700 mb-8 text-lg">
                Our Real-Time Data Analysis service grants access to up-to-the-minute market information, empowering
                informed decision-making and maximizing trading efficiency.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-brand-green">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Utilize live data feeds for accurate market assessment</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-brand-green">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Monitor price movements to execute timely trades</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-brand-green">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Leverage data insights to capitalize on emerging trends</span>
                </li>
              </ul>
              <Link href="/contact">
                <Button className="bg-brand-green hover:bg-brand-green/90 text-white">Book a consultation</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Management & Business Growth */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-card p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Comprehensive Portfolio Management</h2>
              <p className="text-gray-700 mb-6">
                Our Comprehensive Portfolio Management service offers a holistic approach to monitoring investments,
                enhancing performance evaluation, and optimizing asset allocation.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-brand-green">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Review and analyze portfolio performance metrics</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-brand-green">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Diversify assets to mitigate risks and enhance returns</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-brand-green">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Implement strategic adjustments based on real-time market conditions</span>
                </li>
              </ul>
              <Link href="/contact">
                <Button className="bg-brand-green hover:bg-brand-green/90 text-white">Book a consultation</Button>
              </Link>
            </div>

            <div className="bg-card p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Business Growth Services</h2>
              <p className="text-gray-700 mb-6">
                As a fundamental component of our consultancy services, we conduct a thorough analysis of your business
                model and recommend modifications if deemed necessary. Additionally, we formulate a strategic plan to
                effectively support the revised business structure.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-brand-green">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>
                    We develop a project timeline and may recommend delays based on environmental or seasonal factors
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-brand-green">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>
                    This is a critical aspect of our advisory services, where we collaborate closely with you to ensure
                    the successful achievement and implementation of all objectives
                  </span>
                </li>
              </ul>
              <Link href="/contact">
                <Button className="bg-brand-green hover:bg-brand-green/90 text-white">Book a consultation</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
