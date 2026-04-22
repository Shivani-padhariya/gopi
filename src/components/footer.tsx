// "use client"

import { motion } from "framer-motion"
import { Facebook, Instagram, Linkedin, ChevronRight, ArrowUp, MapPin, Mail, Phone } from "lucide-react"
import Link from "@/components/ui/link"
import Image from "@/components/ui/image"

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "Products", href: "/products" },
  { name: "Blog", href: "/blog" },
  { name: "Contact Us", href: "/contact-us" },
]

const products = [
  { name: "Hydraulic Power Press", href: "/products" },
  { name: "Decoiler", href: "/products" },
  { name: "Roof Sheet Crimping Machine", href: "/products" },
  { name: "Heavy Duty Recoiler Machine", href: "/products" },
]

const galleryImages = [
  "/images/gallery-1.jpg",
  "/images/gallery-2.jpg",
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative">
      {/* Background layer */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/contact-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-[#0f0f0f]/95" />
      </div>

      {/* Decorative dots (optional background flair) */}
      <div className="absolute left-[20%] top-[40%] w-2 h-2 bg-[#c8102e] rounded-full opacity-50 z-0"></div>
      <div className="absolute left-[22%] top-[38%] w-8 h-8 rounded-full border border-[#c8102e]/30 z-0"></div>

      <div className="container mx-auto px-4 relative z-10 pt-16">
        
        {/* Top Info Bar */}
        <div className="bg-white rounded-[40px] py-6 px-10 flex flex-col xl:flex-row items-center justify-between shadow-lg w-full max-w-[1200px] mx-auto">
          <Image 
            src="/images/gopi-logo.png" 
            alt="GOPI - Trust in name" 
            width={180} 
            height={70}
            className="w-48 h-auto object-contain mb-8 xl:mb-0"
          />
          
          <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-14">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center shrink-0">
                <MapPin size={16} className="text-[#c8102e]" />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] text-gray-500 uppercase font-medium">Office Location</span>
                <span className="text-[13px] font-bold text-gray-900">Shapar, Rajkot, Gujarat - 360024</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center shrink-0">
                <Mail size={16} className="text-[#c8102e]" />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] text-gray-500 uppercase font-medium">Send Email</span>
                <span className="text-[13px] font-bold text-gray-900">sales@gopi.ltd</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center shrink-0">
                <Phone size={16} className="text-[#c8102e]" />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] text-gray-500 uppercase font-medium">Call Emergency</span>
                <span className="text-[13px] font-bold text-gray-900">+91 92271 33001</span>
              </div>
            </div>
          </div>
        </div>

        {/* Separator line optionally below the bar */}
        <div className="w-full border-t border-white/5 my-8"></div>

        {/* Main Footer Columns */}
        <div className="pb-16 pt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 max-w-[1200px] mx-auto">
          
          {/* About Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="text-[15px] font-bold text-white mb-2">About Company</h4>
            <div className="w-8 h-[2px] bg-[#c8102e] mb-8" />
            
            <p className="text-gray-400 text-[13px] leading-relaxed mb-6">
              At Gopi Machine Tools, we aim to be your trusted partner in industrial automation by delivering superior products and outstanding service. Contact us today for tailored solutions!
            </p>
            
            <div className="flex items-center gap-2">
              <a href="#" className="w-8 h-8 flex items-center justify-center border border-white/10 bg-transparent hover:bg-[#c8102e] transition-colors text-white text-xs">
                <Facebook size={12} fill="currentColor" />
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center border border-white/10 bg-transparent hover:bg-[#c8102e] transition-colors text-white text-xs">
                <Instagram size={12} />
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center border border-white/10 bg-transparent hover:bg-[#c8102e] transition-colors text-white text-xs">
                <Linkedin size={12} fill="currentColor" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-[15px] font-bold text-white mb-2">Quick Link</h4>
            <div className="w-8 h-[2px] bg-[#c8102e] mb-8" />
            
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-[13px]"
                  >
                    <span className="text-gray-500 text-xs tracking-tighter">»</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Products */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-[15px] font-bold text-white mb-2">Our Products</h4>
            <div className="w-8 h-[2px] bg-[#c8102e] mb-8" />
            
            <ul className="space-y-4">
              {products.map((product) => (
                <li key={product.name}>
                  <Link 
                    href={product.href}
                    className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-[13px]"
                  >
                    <span className="text-gray-500 text-xs tracking-tighter">»</span>
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-[15px] font-bold text-white mb-2">Our Gallery</h4>
            <div className="w-8 h-[2px] bg-[#c8102e] mb-8" />
            
            <div className="flex flex-col gap-3">
              {galleryImages.map((image, index) => (
                <div key={index} className="relative w-full h-[80px] overflow-hidden group rounded-sm border border-white/10">
                  <Image
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-transparent group-hover:bg-white/10 transition-colors" />
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/5">
          <div className="flex items-center justify-center text-center">
            <p className="text-gray-400 text-[12px] tracking-wide">
              Copyright © 2026 | All Rights & Reserved By Gopi Machine Tools | Design & Developed By{" "}
              <a href="https://fuertedevelopers.com/" className="text-[#c8102e] hover:underline transition-colors font-medium">Fuerte Developers.</a>
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute bottom-8 right-8 w-10 h-10 bg-[#111] border border-[#c8102e] text-[#c8102e] rounded-full flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity z-50 hover:bg-[#c8102e] hover:text-white"
      >
        <ArrowUp size={16} strokeWidth={2.5} />
      </button>
    </footer>
  )
}

