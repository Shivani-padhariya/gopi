// "use client"

import { motion } from "framer-motion"
import { ArrowRight, Settings, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "@/components/ui/link"
import Image from "@/components/ui/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const products = [
  {
    id: 1,
    title: "Heavy Duty Recoiler Machine",
    description: "The Heavy Duty Recoiler Machine is an automatic machine with PLC control, ensuring high efficiency in industrial use. Made of mild steel, this machine operates on a 415 Volt AC motor.",
    image: "/images/product-1.jpg",
  },
  {
    id: 2,
    title: "Roof Sheet Crimping Machine",
    description: "The CM101-00-000-R00 Crimping Machine is a new industrial-grade machine that is easy to install and operate. With a voltage requirement of 230 Volt (v), this machine is designed for crimping mild steel materials.",
    image: "/images/product-2.jpg",
  },
  {
    id: 3,
    title: "Motorized Decoiler",
    description: "Experience the excellence of our Motorized Decoiler, including the 800mm 1 Ton Decoiler. Our Motorized Decoiler is the best in the industry, offering phenomenal performance and incomparable efficiency.",
    image: "/images/product-3.jpg",
  },
  {
    id: 4,
    title: "Hydraulic Power Press",
    description: "Unlock the advantages of our Hydraulic Power Press, the ultimate solution for all your industrial needs. Our Hydraulic Punching Press and Industrial Hydraulic Power Press are designed to provide extraordinary performance.",
    image: "/images/product-4.jpg",
  },
  {
    id: 5,
    title: "POP Channel Patti Making Machine",
    description: "The Automatic POP Patti Machine is designed for high efficiency in industrial use. With a voltage of 230 Volt and frequency speed control, this machine is made of durable mild steel material.",
    image: "/images/product-5.jpg",
  },
  {
    id: 6,
    title: "Progressive Punching",
    description: "The Progressive Punching Machine is designed to efficiently process mild steel in industrial settings. Originating from India, this machine operates at a voltage of 220 Volt.",
    image: "/images/product-6.jpg",
  },
  {
    id: 7,
    title: "Servo Straightener",
    description: "The Industrial Straightener Machines are designed for industrial use, featuring a warranty for added peace of mind. These machines are automatic and operate at a voltage of 230 Volt.",
    image: "/images/product-7.jpg",
  },
  {
    id: 8,
    title: "Customized Solution",
    description: "We provide fully integrated, end-to-end manufacturing lines tailored to your specific production requirements. Our Customized Solutions bridge the gap between raw coil processing and finished component production.",
    image: "/images/product-8.jpg",
  },
]

export function ProductsSection() {
  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 text-sm text-[#c8102e] font-semibold uppercase tracking-wider mb-4">
            <Settings size={16} />
            Quality Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Products
          </h2>
        </motion.div>

        {/* Products Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Custom Navigation Buttons */}
          <div className="absolute -top-16 right-0 flex gap-2 z-10">
            <button className="swiper-prev-btn w-12 h-12 flex items-center justify-center border-2 border-[#c8102e] text-[#c8102e] hover:bg-[#c8102e] hover:text-white transition-colors rounded-full">
              <ChevronLeft size={24} />
            </button>
            <button className="swiper-next-btn w-12 h-12 flex items-center justify-center border-2 border-[#c8102e] text-[#c8102e] hover:bg-[#c8102e] hover:text-white transition-colors rounded-full">
              <ChevronRight size={24} />
            </button>
          </div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              prevEl: ".swiper-prev-btn",
              nextEl: ".swiper-next-btn",
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="pb-4"
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <div className="bg-white shadow-lg overflow-hidden group h-full">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 flex items-center justify-center rounded">
                      <Settings size={24} className="text-[#c8102e]" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {product.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-4">
                      {product.description}
                    </p>
                    <Link
                      href="#contact"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#c8102e] text-white font-medium text-sm hover:bg-[#a00d24] transition-colors group/btn"
                    >
                      EXPLORE MORE
                      <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  )
}

