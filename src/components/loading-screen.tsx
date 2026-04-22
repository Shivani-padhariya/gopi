// "use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import Image from "@/components/ui/image"

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, filter: "blur(8px)" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100000] flex flex-col items-center justify-center bg-white"
        >
          {/* Logo container with pulse & rotating rings */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex justify-center items-center mb-10 w-48 h-48"
          >
            {/* Outer Slow Rotating Ring */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-[#c8102e]/10 border-t-[#c8102e]/40 border-r-[#c8102e]/40"
            />
            {/* Inner Fast Rotating Ring */}
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
              className="absolute inset-4 rounded-full border border-[#c8102e]/20 border-b-[#c8102e] border-l-[#c8102e]"
            />
            
            <Image 
              src="/images/gopi-logo.png" 
              alt="GOPI - Trust in name" 
              width={160} 
              height={64}
              className="w-36 h-auto object-contain z-10"
              priority
            />
          </motion.div>

          <div className="flex flex-col items-center gap-4">
            <motion.div
               animate={{ opacity: [0.4, 1, 0.4] }}
               transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
               className="text-[#c8102e] font-bold text-xs tracking-[0.4em] uppercase"
            >
              Loading
            </motion.div>
            
            {/* Sleek Infinite Progress Bar */}
            <div className="w-56 h-[3px] bg-gray-100 rounded-full overflow-hidden relative">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "200%" }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeInOut",
                }}
                className="absolute top-0 left-0 w-1/2 h-full bg-[#c8102e] rounded-full"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

