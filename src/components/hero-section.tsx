// "use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "@/components/ui/link"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block text-sm md:text-base text-white/80 uppercase tracking-widest mb-4"
          >
            Great Experience in Building
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            Precision Engineering For High-Performance Roll Forming
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg text-white/80 mb-8 max-w-xl"
          >
            Leading the industry in custom-built POP Channel, Patti making, and hydraulic power press solutions. We deliver rugged, high-speed machinery designed for 24/7 industrial production and unmatched accuracy.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#c8102e] text-white font-semibold hover:bg-[#a00d24] transition-colors group"
            >
              {"LET'S GET STARTED"}
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1.2, y: { repeat: Infinity, duration: 1.5 } }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white rounded-full" />
        </div>
      </motion.div>
    </section>
  )
}

