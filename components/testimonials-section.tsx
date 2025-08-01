import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "M. Sikander Sultan",
      company: "Shan Foods",
      image: "https://c4nsh2f8ijit0hql.public.blob.vercel-storage.com/shan-HtPuJ5qvfRfM4K4c5yuMq3JPUgBzyG.png",
      quote:
        "We highly recommend Terabyte Trading Solutions. They provided excellent service, exceeding our expectations. They are a trusted partner.",
    },
    {
      name: "Adam Georges",
      company: "Dark Inc.",
      image: "https://c4nsh2f8ijit0hql.public.blob.vercel-storage.com/dark-logo-deZ93V8oboVi6fgYfJ3as1KHGAdiMI.png",
      quote:
        "Working with Terabyte Trading Solutions has been a pleasure. Their professionalism and expertise have greatly benefitted our business.",
    },
    {
      name: "Junaid Jamshed",
      company: "J. Textiles",
      image: "https://c4nsh2f8ijit0hql.public.blob.vercel-storage.com/j.-FJ9iNkqpHYtuK4ohUBLHVpN98GD8Ob.png",
      quote:
        "Terabyte Trading Solutions Ltd has consistently delivered exceptional results for us. Their solutions have helped streamline our operations efficiently.",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-brand-green font-semibold uppercase tracking-wider">TESTIMONIALS</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Client Testimonials Showcase</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="flex flex-col items-center">
                  <div className="mb-6 text-brand-green">
                    <svg width="46" height="30" viewBox="0 0 51 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M8.39024 17.4912C7.77518 13.4777 10.4516 7.91494 14.4381 4.49556C15.8993 3.24226 16.6749 2.82327 22.267 0.426164C19.6388 -0.688855 13.3476 0.565697 10.8592 2.09851C-1.61119 10.5436 -0.83668 23.9016 1.12051 27.302C3.72091 33.0714 10.04 33.601 13.6329 31.0786C20.6929 25.1838 15.4923 16.7944 8.39024 17.4912Z"
                        fill="currentColor"
                      />
                      <path
                        d="M37.0218 17.9766C36.4068 13.9631 39.0832 8.4003 43.0697 4.98092C44.5309 3.72761 45.3065 3.30862 50.8986 0.911513C48.2703 -0.203501 41.9792 1.05105 39.4907 2.58386C27.0204 11.029 27.7949 24.387 29.7521 27.7874C32.3525 33.5568 38.6716 34.0864 42.2645 31.564C49.3245 25.6691 44.1239 17.2798 37.0218 17.9766Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{testimonial.name}</h3>
                  <div className="relative h-12 w-32 mb-4" style={{ minWidth: "120px" }}>
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.company}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-gray-600 text-center">{testimonial.quote}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
