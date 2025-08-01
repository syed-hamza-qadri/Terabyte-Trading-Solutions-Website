import Hero from "@/components/hero"
import ServicesSection from "@/components/services-section"
import AboutSection from "@/components/about-section"
import TestimonialsSection from "@/components/testimonials-section"
import WhyChooseUs from "@/components/why-choose-us"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <ServicesSection />
      <AboutSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <div className="w-full bg-gray-50 py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Contact our team today to discuss how we can help you achieve your business goals with our tailored solutions.
        </p>
        <Link href="/contact">
          <Button size="lg" className="bg-brand-green hover:bg-brand-green/90 text-white">
            Get in Touch
          </Button>
        </Link>
      </div>
    </div>
  )
}
