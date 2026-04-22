// // "use client"

// import { motion } from "framer-motion"
// import Image from "@/components/ui/image"
// import { Header } from "@/components/header"
// import { Footer } from "@/components/footer"
// import { PageBanner } from "@/components/page-banner"

// import { Quote } from "lucide-react"

// const teamMembers = [
//   { name: "Richard McClintock", role: "Founder", image: "/images/team-1.jpg" },
//   { name: "John Smith", role: "Engineer", image: "/images/team-2.jpg" },
//   { name: "Sarah Johnson", role: "Manager", image: "/images/team-3.jpg" },
// ]

// export default function AboutUsPage() {
//   return (
//     <main className="min-h-screen bg-white">
//       <Header />
//       <PageBanner title="ABOUT US" breadcrumb="About Us" />

//       {/* About Section */}
//       <section className="py-20">
//         <div className="container mx-auto px-4">
//           <div className="grid lg:grid-cols-2 gap-12 items-start">
//             {/* Left Content */}
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//             >
//               <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Us</h2>

//               <div className="space-y-4 text-gray-600 leading-relaxed">
//                 <p>
//                   Gopi Machine Tools is a leading Manufacturer, Supplier, and After-Sales Service Provider, specializing in high-performance industrial machinery. We offer a wide range of precision-engineered products, including Decoiler, Feeder & Shearing (500 X 5 mm), Hydraulic Power Press, POP (Gypsum) Patti Machine, Progressive Punching Machines, Roll Forming Machines, Servo Feeders, and more.
//                 </p>
//                 <p>
//                   We provide reliable and durable machinery designed to enhance productivity across various industries. Our state-of-the-art manufacturing processes ensure that every product meets high industry standards for efficiency and performance.
//                 </p>
//                 <p>
//                   In addition to high-quality machinery, we pride ourselves on exceptional after-sales support, ensuring seamless operation and long-term reliability for our clients. Our expert team is dedicated to providing technical assistance, maintenance, and troubleshooting whenever needed.
//                 </p>
//                 <p>
//                   At Gopi Machine Tools, we aim to be your trusted partner in industrial automation by delivering superior products and outstanding service. Contact us today for tailored solutions!
//                 </p>
//               </div>
//             </motion.div>

//             {/* Right Images */}
//             <motion.div
//               initial={{ opacity: 0, x: 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//               className="grid grid-cols-2 gap-4"
//             >
//               <div className="relative h-64 rounded-lg overflow-hidden">
//                 <Image
//                   src="/images/product-1.jpg"
//                   alt="Machine 1"
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//               <div className="relative h-64 rounded-lg overflow-hidden mt-8">
//                 <Image
//                   src="/images/product-2.jpg"
//                   alt="Machine 2"
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//               <div className="relative h-64 rounded-lg overflow-hidden">
//                 <Image
//                   src="/images/product-3.jpg"
//                   alt="Machine 3"
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//               <div className="relative h-64 rounded-lg overflow-hidden mt-8">
//                 <Image
//                   src="/images/product-4.jpg"
//                   alt="Machine 4"
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Manufacturing Unit & Team Section */}
//       <section className="py-20 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <div className="max-w-3xl mx-auto text-center mb-16">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//             >
//               <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Manufacturing Unit</h2>
//               <p className="text-gray-600 leading-relaxed">
//                 At Gopi Machine Tools, we operate a state-of-the-art manufacturing unit equipped with advanced machinery, precision tools, and cutting-edge technology. Our facility is designed to ensure high production efficiency, quality control, and timely delivery of industrial machinery. We follow strict quality standards at every stage of manufacturing, from raw material selection to final product assembly.
//               </p>
//             </motion.div>
//           </div>

//           <div className="max-w-3xl mx-auto text-center">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.2 }}
//             >
//               <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Team</h2>
//               <p className="text-gray-600 leading-relaxed mb-8">
//                 Our success is driven by a highly skilled and experienced team committed to delivering excellence. We have a dynamic workforce that includes:
//               </p>

//               <ul className="text-left max-w-xl mx-auto space-y-3 text-gray-600">
//                 <li className="flex items-start gap-2">
//                   <span className="text-[#c8102e] font-bold">1.</span>
//                   Engineers & Technicians Specializing in machine design, manufacturing, and maintenance.
//                 </li>
//                 <li className="flex items-start gap-2">
//                   <span className="text-[#c8102e] font-bold">2.</span>
//                   Quality Control Experts Ensuring every product meets industry standards.
//                 </li>
//                 <li className="flex items-start gap-2">
//                   <span className="text-[#c8102e] font-bold">3.</span>
//                   R&D Specialists Innovating and enhancing machine performance.
//                 </li>
//                 <li className="flex items-start gap-2">
//                   <span className="text-[#c8102e] font-bold">4.</span>
//                   Sales & Customer Support Assisting clients with product selection and after-sales services.
//                 </li>
//               </ul>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section className="py-20">
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="max-w-4xl mx-auto text-center"
//           >
//             <div className="flex justify-center mb-8">
//               <div className="w-16 h-16 bg-[#c8102e]/10 rounded-full flex items-center justify-center">
//                 <Quote className="w-8 h-8 text-[#c8102e]" />
//               </div>
//             </div>

//             <p className="text-xl md:text-2xl text-gray-700 italic leading-relaxed mb-8">
//               Contrary To Popular Belief, Lorem Ipsum Is Not Simply Random Text. It Has Roots In A Piece Of Classical Latin Literature From 45 BC, Making It Over 2000 Years Old. Richard McClintock
//             </p>

//             <div className="flex items-center justify-center gap-4 mb-8">
//               {teamMembers.map((member, index) => (
//                 <div
//                   key={member.name}
//                   className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-200 hover:border-[#c8102e] transition-colors"
//                 >
//                   <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500 text-xl font-bold">
//                     {member.name.charAt(0)}
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className="flex items-center justify-center gap-4">
//               <button className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-[#c8102e] hover:text-[#c8102e] transition-colors">
//                 ←
//               </button>
//               <button className="w-10 h-10 rounded-full border-2 border-[#c8102e] bg-[#c8102e] text-white flex items-center justify-center">
//                 →
//               </button>
//             </div>
//           </motion.div>
//         </div>
//       </section>


//       <Footer />
//     </main>
//   )
// }



// "use client"

import { motion } from "framer-motion"
import Image from "@/components/ui/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageBanner } from "@/components/page-banner"
import { ArrowRight, Quote } from "lucide-react"

const teamMembers = [
  { name: "Richard McClintock", role: "Founder", image: "/images/team-1.jpg" },
  { name: "John Smith", role: "Engineer", image: "/images/team-2.jpg" },
  { name: "Sarah Johnson", role: "Manager", image: "/images/team-3.jpg" },
]

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <PageBanner title="ABOUT US" breadcrumb="About Us" />

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Us</h2>

              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Gopi Machine Tools is a leading Manufacturer, Supplier, and After-Sales Service Provider, specializing in high-performance industrial machinery. We offer a wide range of precision-engineered products, including Decoiler, Feeder & Shearing (500 X 5 mm), Hydraulic Power Press, POP (Gypsum) Patti Machine, Progressive Punching Machines, Roll Forming Machines, Servo Feeders, and more.
                </p>
                <p>
                  We provide reliable and durable machinery designed to enhance productivity across various industries. Our state-of-the-art manufacturing processes ensure that every product meets high industry standards for efficiency and performance.
                </p>
                <p>
                  In addition to high-quality machinery, we pride ourselves on exceptional after-sales support, ensuring seamless operation and long-term reliability for our clients. Our expert team is dedicated to providing technical assistance, maintenance, and troubleshooting whenever needed.
                </p>
                <p>
                  At Gopi Machine Tools, we aim to be your trusted partner in industrial automation by delivering superior products and outstanding service. Contact us today for tailored solutions!
                </p>
              </div>
            </motion.div>

            {/* Right - Single Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src="/images/product-1.jpg"
                  alt="About Us"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Manufacturing Unit & Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* Left - Single Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src="/images/product-2.jpg"
                  alt="Manufacturing Unit"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* Right - Manufacturing Unit & Team Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Manufacturing Unit</h2>
              <p className="text-gray-600 leading-relaxed mb-12">
                At Gopi Machine Tools, we operate a state-of-the-art manufacturing unit equipped with advanced machinery, precision tools, and cutting-edge technology. Our facility is designed to ensure high production efficiency, quality control, and timely delivery of industrial machinery. We follow strict quality standards at every stage of manufacturing, from raw material selection to final product assembly.
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Team</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our success is driven by a highly skilled and experienced team committed to delivering excellence. We have a dynamic workforce that includes:
              </p>

              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#c8102e] font-bold">1.</span>
                  Engineers & Technicians Specializing in machine design, manufacturing, and maintenance.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c8102e] font-bold">2.</span>
                  Quality Control Experts Ensuring every product meets industry standards.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c8102e] font-bold">3.</span>
                  R&D Specialists Innovating and enhancing machine performance.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c8102e] font-bold">4.</span>
                  Sales & Customer Support Assisting clients with product selection and after-sales services.
                </li>
              </ul>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 relative bg-[#1a1a1a] overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left - Testimonial Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 text-sm text-[#c8102e] font-semibold uppercase tracking-wider mb-4">
                <ArrowRight size={16} />
                Testimonials
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                What Client's Say About Us!
              </h2>

              <div className="text-[#c8102e] text-4xl font-bold mb-4">"</div>

              <p className="text-gray-300 italic leading-relaxed mb-8">
                Contrary To Popular Belief, Lorem Ipsum Is Not Simply Random Text. It Has Roots In A Piece Of Classical Latin Literature From 45 BC, Making It Over 2000 Years Old. Richard McClintock !
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {teamMembers.map((member) => (
                    <div
                      key={member.name}
                      className="w-14 h-14 rounded-full overflow-hidden border-2 border-gray-600 hover:border-[#c8102e] transition-colors"
                    >
                      <div className="w-full h-full bg-gray-500 flex items-center justify-center text-white text-lg font-bold">
                        {member.name.charAt(0)}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <button className="w-10 h-10 rounded-full border-2 border-gray-600 flex items-center justify-center text-white hover:border-[#c8102e] hover:text-[#c8102e] transition-colors">
                    ←
                  </button>
                  <button className="w-10 h-10 rounded-full border-2 border-[#c8102e] bg-[#c8102e] text-white flex items-center justify-center">
                    →
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Right - Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[500px] hidden lg:block"
            >
              <Image
                src="/images/product-3.jpg"
                alt="Testimonial"
                fill
                className="object-cover"
              />
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}