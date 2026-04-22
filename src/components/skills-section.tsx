// // "use client"

// import { motion, useInView } from "framer-motion"
// import { useRef } from "react"
// import { Settings } from "lucide-react"
// import Image from "@/components/ui/image"

// const skills = [
//   { name: "Integrated Workflow:", percentage: 75 },
//   { name: "Precision Engineering:", percentage: 90 },
//   { name: "Customized Durability:", percentage: 99 },
// ]

// function ProgressBar({ name, percentage }: { name: string; percentage: number }) {
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true, margin: "-100px" })

//   return (
//     <div ref={ref} className="mb-6">
//       <div className="flex justify-between mb-2">
//         <span className="text-gray-700 font-medium">{name}</span>
//         <span className="text-[#c8102e] font-bold">{percentage}%</span>
//       </div>
//       <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
//         <motion.div
//           initial={{ width: 0 }}
//           animate={{ width: isInView ? `${percentage}%` : 0 }}
//           transition={{ duration: 1.5, ease: "easeOut" }}
//           className="h-full bg-[#c8102e] rounded-full"
//         />
//       </div>
//     </div>
//   )
// }

// export function SkillsSection() {
//   return (
//     <section className="py-20 bg-white">
//       <div className="container mx-auto px-4">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           {/* Image Side */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="relative"
//           >
//             <div className="relative aspect-[4/3] overflow-hidden">
//               <Image
//                 src="/images/skills-bg.jpg"
//                 alt="Industrial manufacturing"
//                 fill
//                 className="object-cover"
//               />
//             </div>
//           </motion.div>

//           {/* Content Side */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <span className="inline-flex items-center gap-2 text-sm text-[#c8102e] font-semibold uppercase tracking-wider mb-4">
//               <Settings size={16} />
//               Our Skills
//             </span>

//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
//               We specialize in industrial manufacturing complexity
//             </h2>

//             <p className="text-gray-600 leading-relaxed mb-8">
//               It is a long-established fact that a production line is only as strong as its weakest link. While others focus on individual machines, we focus on the entire integrated layout—ensuring that your workflow is seamless, from raw coil decoiling to the final precision press. We cut through the distractions of standard setups to deliver high-performance, custom-engineered systems.
//             </p>

//             {/* Progress Bars */}
//             <div className="space-y-4">
//               {skills.map((skill) => (
//                 <ProgressBar
//                   key={skill.name}
//                   name={skill.name}
//                   percentage={skill.percentage}
//                 />
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }

// "use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Settings } from "lucide-react"
import Image from "@/components/ui/image"

const skills = [
  { name: "Integrated Workflow:", percentage: 75 },
  { name: "Precision Engineering:", percentage: 90 },
  { name: "Customized Durability:", percentage: 99 },
]

function ProgressBar({ name, percentage }: { name: string; percentage: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <div ref={ref} className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-gray-700 font-medium">{name}</span>
        <span className="text-[#c8102e] font-bold">{percentage}%</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: isInView ? `${percentage}%` : 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="h-full bg-[#c8102e] rounded-full"
        />
      </div>
    </div>
  )
}

export function SkillsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Content Side - LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 text-sm text-[#c8102e] font-semibold uppercase tracking-wider mb-4">
              <Settings size={16} />
              Our Skills
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              We specialize in industrial manufacturing complexity
            </h2>

            <p className="text-gray-600 leading-relaxed mb-8">
              It is a long-established fact that a production line is only as strong as its weakest link. While others focus on individual machines, we focus on the entire integrated layout—ensuring that your workflow is seamless, from raw coil decoiling to the final precision press. We cut through the distractions of standard setups to deliver high-performance, custom-engineered systems.
            </p>

            {/* Progress Bars */}
            <div className="space-y-4">
              {skills.map((skill) => (
                <ProgressBar
                  key={skill.name}
                  name={skill.name}
                  percentage={skill.percentage}
                />
              ))}
            </div>
          </motion.div>

          {/* Image Side - RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/skills-bg.jpg"
                alt="Industrial manufacturing"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}