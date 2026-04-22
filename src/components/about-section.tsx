// "use client"

import { motion } from "framer-motion"
import { ArrowRight, Wrench } from "lucide-react"
import Link from "@/components/ui/link"
import Image from "@/components/ui/image"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/about-img.jpg"
                alt="Industrial machinery"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative element */}
            {/* <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#c8102e] hidden lg:flex items-center justify-center">
              <Wrench size={48} className="text-white" />
            </div> */}
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 text-sm text-[#c8102e] font-semibold uppercase tracking-wider mb-4">
              <Wrench size={16} />
              About Our Company
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              We Provide Cost Effective Solution For You
            </h2>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Gopi Machine Tools is a leading Manufacturer, Supplier, and After-Sales Service Provider, specializing in high-performance industrial machinery. We offer a wide range of precision-engineered products, including Decoiler, Feeder & Shearing (500 X 5 mm), Hydraulic Power Press, POP (Gypsum) Patti Machine, Progressive Punching Machines, Roll Forming Machines, Servo Feeders, and more.
              </p>
              <p>
                In addition to high-quality machinery, we pride ourselves on exceptional after-sales support, ensuring seamless operation and long-term reliability for our clients. Our expert team is dedicated to providing technical assistance, maintenance, and troubleshooting whenever needed.
              </p>
              <p>
                At Gopi Machine Tools, we aim to be your trusted partner in industrial automation by delivering superior products and outstanding service. Contact us today for tailored solutions!
              </p>
            </div>

            <Link
              href="#products"
              className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-[#c8102e] text-white font-semibold hover:bg-[#a00d24] transition-colors group"
            >
              READ MORE
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

