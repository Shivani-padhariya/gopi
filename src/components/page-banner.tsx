// "use client"

import { motion } from "framer-motion"
import Link from "@/components/ui/link"
import { ChevronRight } from "lucide-react"

interface PageBannerProps {
  title: string
  breadcrumb: string
}

export function PageBanner({ title, breadcrumb }: PageBannerProps) {
  return (
    <section className="relative h-[250px] md:h-[300px] overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 h-full flex flex-col items-center justify-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-wide mb-4"
        >
          {title}
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-2 text-white/90"
        >
          <Link href="/" className="hover:text-[#c8102e] transition-colors">
            Home
          </Link>
          <ChevronRight size={16} />
          <span className="text-white/70">{breadcrumb}</span>
        </motion.div>
      </div>
    </section>
  )
}

