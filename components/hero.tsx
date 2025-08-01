import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <div className="relative bg-gray-900 text-white h-[600px] md:h-[700px] flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage:
            "url('https://c4nsh2f8ijit0hql.public.blob.vercel-storage.com/0a18a2a956-nzOAwsO2xfyVOG0du0tpkysTfAWu0D.jpg')",
        }}
      />
      <div className="relative container mx-auto px-4 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl">
          Transforming London's Business Landscape: Consult Us Today
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl">
          Expert business solutions tailored to drive growth and maximize efficiency
        </p>
        <Link href="/contact">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Contact us
          </Button>
        </Link>
      </div>
    </div>
  )
}
