import { Card, CardContent } from "@/components/ui/card"
import { Settings, Shield, Lightbulb } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: <Settings className="h-8 w-8 text-primary" />,
      title: "Efficient Services",
      description:
        "Our team provides streamlined solutions for your business, ensuring efficiency in every aspect of our services.",
    },
    {
      icon: <Shield className="h-8 w-8 text-brand-green" />,
      title: "Reliable Support",
      description: "Count on our reliable support team to assist you with any questions or concerns you may have.",
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      title: "Innovative Solutions",
      description:
        "Experience innovative solutions tailored to meet your business needs and drive growth in your industry.",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider">WHY WORK WITH US</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Unlocking Solutions for You</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {reasons.map((reason, index) => (
            <Card key={index} className="border-none shadow-lg">
              <CardContent className="p-8 flex flex-col items-center text-center">
                <div className={`mb-6 p-4 rounded-full ${index === 1 ? "bg-brand-green/10" : "bg-primary/10"}`}>
                  {reason.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/contact">
            <Button className="bg-primary hover:bg-primary/90">Book a consultation</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
