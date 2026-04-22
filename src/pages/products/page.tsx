// "use client"

import { motion } from "framer-motion"
import Image from "@/components/ui/image"
import Link from "@/components/ui/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageBanner } from "@/components/page-banner"


const products = [
  {
    id: 1,
    name: "Heavy Duty Recoiler Machine",
    description: "The 800mm 1 Ton Decoiler is a high precision industrial machine made of mild steel, designed to efficiently handle heavy-duty materials. The electric-powered decoiler operates automatically...",
    image: "/images/product-1.jpg",
    slug: "heavy-duty-recoiler-machine"
  },
  {
    id: 2,
    name: "Roof Sheet Crimping Machine",
    description: "The CM101-00-000-R00 Crimping Machine is a new industrial-grade machine that is easy to install and operate. With a voltage requirement of 230 Volt (V), this machine is designed for crimping ...",
    image: "/images/product-2.jpg",
    slug: "roof-sheet-crimping-machine"
  },
  {
    id: 3,
    name: "Motorized Decoiler",
    description: "Experience the excellence of our Motorized Decoiler, including the 800mm 1 Ton Decoiler, 800mm 1 Ton Decoiler Control Panel, 100kg Decoiler Motorized, 2 Ton Motorized Decoiler, and 2 Ton Decoiler Motorized.",
    image: "/images/product-3.jpg",
    slug: "motorized-decoiler"
  },
  {
    id: 4,
    name: "Hydraulic Power Press",
    description: "Our Hydraulic Power Press machines are designed for heavy-duty metal forming operations. Built with precision engineering and robust construction for maximum durability and performance.",
    image: "/images/product-4.jpg",
    slug: "hydraulic-power-press"
  },
  {
    id: 5,
    name: "POP Channel Patti Machine",
    description: "The POP Channel Patti Machine is designed for manufacturing gypsum board channels with high precision and efficiency. Perfect for false ceiling applications.",
    image: "/images/product-5.jpg",
    slug: "pop-channel-patti-machine"
  },
  {
    id: 6,
    name: "Progressive Punching Machine",
    description: "Our Progressive Punching Machines deliver high-speed, precise metal stamping operations with multiple punching stations for complex part manufacturing.",
    image: "/images/product-6.jpg",
    slug: "progressive-punching-machine"
  },
  {
    id: 7,
    name: "Servo Straightener",
    description: "The Servo Straightener ensures perfectly flat metal sheets with advanced servo technology for precise control and consistent results.",
    image: "/images/product-7.jpg",
    slug: "servo-straightener"
  },
  {
    id: 8,
    name: "Customized Manufacturing Solutions",
    description: "We offer customized manufacturing line solutions tailored to your specific production requirements. Complete production lines with multiple integrated machines.",
    image: "/images/product-8.jpg",
    slug: "customized-solutions"
  },
]

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <PageBanner title="PRODUCTS" breadcrumb="Products" />

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                    
                    {/* Link Button */}
                    <Link
                      href={`/products/${product.slug}`}
                      className="absolute bottom-4 left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg"
                    >
                      <svg 
                        className="w-5 h-5 text-[#c8102e] -rotate-45"
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#c8102e] transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     
      <Footer />
    </main>
  )
}

