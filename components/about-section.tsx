import Image from "next/image"

export default function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <span className="text-brand-green font-semibold uppercase tracking-wider">OUR STORY</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">London's Leading B2B Service Provider</h2>
            <div className="space-y-6">
              <p className="text-gray-700">
                With deep expertise and industry knowledge, we deliver strategic solutions to maximize results. Our
                journey began 15 years ago when a group of industry experts came together to fill a gap in the market
                for tailored B2B services.
              </p>
              <p className="text-gray-700">
                As business & technology rapidly evolve, we, at Terabyte, leverage our 15 years of experience & insights
                to drive your business growth and success. Today, we stand as London's go-to B2B service provider,
                helping businesses achieve their goals with innovative solutions.
              </p>
            </div>
          </div>
          <div className="md:w-1/2 w-full">
            <div
              className="relative w-full rounded-lg overflow-hidden shadow-xl"
              style={{ height: "500px", minHeight: "300px", position: "relative" }}
            >
              <Image
                src="https://c4nsh2f8ijit0hql.public.blob.vercel-storage.com/20d48b4b5f-ne3Dy5R1iacf0fErOk7bJZazBlTBB4.jpg"
                alt="About Terabyte Trading Solutions"
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
  )
}
