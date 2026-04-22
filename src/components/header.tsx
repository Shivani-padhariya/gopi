// "use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Search, Mail, MapPin, Phone, Facebook, Instagram, Linkedin } from "lucide-react"
import Link from "@/components/ui/link"
import Image from "@/components/ui/image"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "Products", href: "/products" },
  { name: "Blog", href: "/blog" },
  { name: "Contact Us", href: "/contact-us" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Top Contact Bar */}
      <div className="hidden lg:block bg-white border-b border-gray-100 relative h-[45px] overflow-hidden">
        <div className="container mx-auto px-4 flex items-center justify-between h-full relative z-10">
          <div className="flex items-center gap-8 text-[13px] text-gray-700 font-medium">
            <a href="mailto:sales@gopi.ltd" className="flex items-center gap-2 hover:text-[#c8102e] transition-colors">
              <Mail size={14} className="text-[#c8102e]" />
              sales@gopi.ltd
            </a>
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-[#c8102e]" />
              <span>Plot 3/1 of 287-1, Shapar, Rajkot, Gujarat - 360024</span>
            </div>
            <a href="tel:+919227133001" className="flex items-center gap-2 hover:text-[#c8102e] transition-colors">
              <Phone size={14} className="text-[#c8102e]" />
              +91 92271 33001
            </a>
          </div>

          <div className="flex items-center h-full relative">
            {/* Decorative slanted lines */}
            <div className="w-[5px] h-full bg-[#c8102e] -skew-x-[25deg] mr-2"></div>
            <div className="w-[10px] h-full bg-[#c8102e] -skew-x-[25deg] mr-3"></div>

            {/* Main red slanted bg element extending to the right edge */}
            <div className="absolute top-0 bottom-0 left-[28px] w-[50vw] bg-[#c8102e] -skew-x-[25deg] -z-10 origin-bottom-left"></div>

            {/* Follow Us Content */}
            <div className="flex items-center gap-4 text-white text-[13px] font-medium pl-6 pr-2">
              <span>Follow Us</span>
              <div className="flex items-center gap-3">
                <a href="#" className="hover:opacity-80 transition-opacity"><Facebook size={14} /></a>
                <a href="#" className="hover:opacity-80 transition-opacity"><Instagram size={14} /></a>
                <a href="#" className="hover:opacity-80 transition-opacity"><Linkedin size={14} /></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-lg py-6" : "bg-white/95 py-8"
          }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/gopi-logo.png"
              alt="GOPI - Trust in name"
              width={200}
              height={90}
              className="h-16 md:h-20 w-auto object-contain transition-transform duration-300 hover:scale-105"
              priority
            />
          </Link>


          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-800 font-medium hover:text-[#c8102e] transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#c8102e] transition-all group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            <button className="hidden md:flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors">
              <Search size={20} className="text-gray-700" />
            </button>
            <Link
              href="/contact-us"
              className="hidden lg:flex items-center gap-2 bg-[#1a1a1a] text-white px-7 py-3 text-xs font-bold tracking-wide hover:bg-[#c8102e] transition-colors"
            >
              GET A QUOTE <span className="text-base leading-none">&rarr;</span>
            </Link>
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="hidden md:flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors"
            >
              <Menu size={20} className="text-gray-700" />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden flex items-center justify-center w-10 h-10"
            >
              <Menu size={24} className="text-gray-700" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/50 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25 }}
              className="absolute left-0 top-0 h-full w-80 bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold text-[#c8102e]">GOPI<sup className="text-xs">TM</sup></span>
                    <span className="text-xs text-gray-600 italic">Trust in name</span>
                  </div>
                  <button onClick={() => setIsMobileMenuOpen(false)}>
                    <X size={24} className="text-gray-700" />
                  </button>
                </div>
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="text-gray-800 font-medium py-2 border-b border-gray-100 hover:text-[#c8102e] transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sidebar Panel */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/50"
            onClick={() => setIsSidebarOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25 }}
              className="absolute right-0 top-0 h-full w-[400px] max-w-full bg-white text-gray-800 shadow-2xl overflow-y-auto border-l-[3px] border-[#c8102e]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8 md:p-10">
                <div className="flex items-start justify-between mb-8">
                  <Image
                    src="/images/gopi-logo.png"
                    alt="GOPI - Trust in name"
                    width={180}
                    height={70}
                    className="h-14 w-auto object-contain"
                  />
                  <button
                    onClick={() => setIsSidebarOpen(false)}
                    className="flex justify-center items-center w-10 h-10 bg-[#c8102e] text-white rounded-full hover:bg-[#a00d24] transition-colors shrink-0 shadow-md"
                  >
                    <X size={20} strokeWidth={2.5} />
                  </button>
                </div>

                <p className="text-gray-500 text-[15px] font-medium leading-relaxed mb-10">
                  At Gopi Machine Tools, we aim to be your trusted partner in industrial automation by delivering superior products and outstanding service. Contact us today for tailored solutions!
                </p>

                <h4 className="text-xl font-bold text-gray-900 mb-6">Contact Info</h4>
                <ul className="space-y-6 text-[15px] font-semibold text-gray-600 mb-10">
                  <li className="flex items-center gap-4">
                    <Mail size={20} className="text-[#c8102e] shrink-0" />
                    <a href="mailto:Sales@Gopi.Ltd" className="hover:text-[#c8102e] transition-colors">Sales@Gopi.Ltd</a>
                  </li>
                  <li className="flex items-start gap-4">
                    <MapPin size={20} className="text-[#c8102e] mt-1 shrink-0" />
                    <span className="leading-relaxed">Plot 3/1 Of 287-1, Panch Pipla Complex Street, Shapar Main Road, Shapar, Rajkot, Gujarat - 360024</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <Phone size={20} className="text-[#c8102e] shrink-0" />
                    <a href="tel:+919227133001" className="hover:text-[#c8102e] transition-colors">+91 92271 33001</a>
                  </li>
                </ul>

                <Link
                  href="/contact-us"
                  onClick={() => setIsSidebarOpen(false)}
                  className="flex items-center justify-center gap-3 w-full py-4 bg-[#c8102e] text-white font-bold text-lg hover:bg-[#a00d24] transition-colors shadow-md"
                >
                  Get A Quote
                  <span className="text-2xl leading-none">&rarr;</span>
                </Link>

                <div className="flex items-center gap-4 mt-10">
                  <a href="#" className="w-12 h-12 flex items-center justify-center border border-gray-200 text-gray-500 hover:text-[#c8102e] hover:border-[#c8102e] transition-colors rounded-full bg-white shadow-sm">
                    <Facebook size={18} />
                  </a>
                  <a href="#" className="w-12 h-12 flex items-center justify-center border border-gray-200 text-gray-500 hover:text-[#c8102e] hover:border-[#c8102e] transition-colors rounded-full bg-white shadow-sm">
                    <Linkedin size={18} />
                  </a>
                  <a href="#" className="w-12 h-12 flex items-center justify-center border border-gray-200 text-gray-500 hover:text-[#c8102e] hover:border-[#c8102e] transition-colors rounded-full bg-white shadow-sm">
                    <Instagram size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}


