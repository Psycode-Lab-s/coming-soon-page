"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Coffee } from "lucide-react"
import Preloader from "./components/preloader"

export default function Component() {
  const [loading, setLoading] = useState(true)

  const handleLoadingComplete = () => {
    setLoading(false)
  }

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <Preloader key="preloader" onLoadingComplete={handleLoadingComplete} />
      ) : (
        <motion.div
          key="main"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4 relative overflow-hidden"
        >
          {/* Background effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0e0c15] via-black to-amber-950/20" />
          <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl animate-pulse delay-1000" />

          {/* Main content */}
          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="space-y-8"
            >
              {/* Coffee icon */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.7, duration: 0.8, type: "spring" }}
                className="flex justify-center mb-6"
              >
                <div className="p-4 bg-gradient-to-br from-amber-600/20 to-orange-600/20 rounded-full backdrop-blur-sm border border-amber-500/20">
                  <Coffee className="w-12 h-12 text-amber-400" />
                </div>
              </motion.div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
                <span className="font-extralight">Colombo</span>
                <br />
                <span className="font-extrabold">Coffee Company</span>
              </h1>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="space-y-4"
              >
                <p className="text-xl md:text-2xl text-gray-300 font-light">Brewing excellence, one cup at a time</p>
                <div className="w-24 h-px bg-gradient-to-r from-transparent via-white to-transparent mx-auto opacity-50" />
              </motion.div>
            </motion.div>
            

            {/* Footer with credit */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="  text-center space-y-2 w-full"
            >
              <p className="text-gray-400 text-sm mt-10">Coming Soon</p>
              <p className="text-gray-600 text-xs">
                Built by <span className="text-gray-400">Psycode Labs</span>
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
