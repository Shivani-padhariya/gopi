// "use client"

import { motion } from "framer-motion"
import { ArrowRight, Phone, Settings } from "lucide-react"
import { useState } from "react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    alert("Thank you for your message! We will get back to you soon.")
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" className="relative py-20">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/contact-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-[#333333]/95" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in touch!</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#c8102e]/10 border border-[#c8102e] focus:outline-none focus:border-[#c8102e] transition-colors placeholder:text-[#c8102e]/60"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#c8102e]/10 border border-[#c8102e] focus:outline-none focus:border-[#c8102e] transition-colors placeholder:text-[#c8102e]/60"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#c8102e]/10 border border-[#c8102e] focus:outline-none focus:border-[#c8102e] transition-colors placeholder:text-[#c8102e]/60"
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#c8102e]/10 border border-[#c8102e] focus:outline-none focus:border-[#c8102e] transition-colors placeholder:text-[#c8102e]/60"
                />
              </div>
              <textarea
                name="message"
                placeholder="Write Message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
                className="w-full px-4 py-3 bg-[#c8102e]/10 border border-[#c8102e] focus:outline-none focus:border-[#c8102e] transition-colors placeholder:text-[#c8102e]/60"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#c8102e] text-white font-semibold hover:bg-[#a00d24] transition-colors group"
              >
                SEND MESSAGE
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <span className="inline-flex items-center gap-2 text-sm text-[#c8102e] font-semibold uppercase tracking-wider mb-4">
              <Settings size={16} />
              Talk To Us
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Get In Touch With Our Engineering Team
            </h2>

            <p className="text-gray-300 leading-relaxed mb-8">
              Ready to optimize your production line? Whether you need a single Hydraulic Power Press or a fully integrated Slitting-to-Press Customized Solution, our experts are here to design the perfect workflow for your facility.
            </p>

            {/* Phone CTA */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shrink-0">
                <Phone size={28} className="text-[#c8102e]" />
              </div>
              <div>
                <span className="text-sm text-gray-400">Call Emergency</span>
                <a
                  href="tel:+919227133001"
                  className="block text-2xl font-bold hover:text-[#c8102e] transition-colors"
                >
                  +91 92271 33001
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

