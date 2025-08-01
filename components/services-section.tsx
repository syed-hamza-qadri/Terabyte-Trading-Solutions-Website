import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Zap, BarChart3, TrendingUp } from "lucide-react"

export default function ServicesSection() {
  const services = [
    {
      icon: <Zap className="h-8 w-8 text-brand-green" />,
      title: "Data Analysis",
      description:
        "We provide detailed analytical insights to optimize processes and enhance decision-making for our clients.",
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      title: "Consulting Solutions",
      description:
        "Our expert consultants offer tailored strategies to improve operations and drive growth in your business.",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-brand-green" />,
      title: "Marketing Support",
      description:
        "We deliver innovative marketing campaigns and strategies to improve brand visibility and attract new clients.",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-brand-green font-semibold uppercase tracking-wider">SERVICES</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Boosting Efficiency for Businesses</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-lg">
              <CardContent className="p-8 flex flex-col items-center text-center">
                <div className={`mb-6 p-4 rounded-full ${index % 2 === 0 ? "bg-brand-green/10" : "bg-primary/10"}`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/services">
            <Button className="bg-brand-green hover:bg-brand-green/90 text-white">Book a consultation</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
