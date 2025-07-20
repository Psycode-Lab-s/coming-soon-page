"use client"

import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"

interface PreloaderProps {
  onLoadingComplete: () => void
}

const Preloader = ({ onLoadingComplete }: PreloaderProps) => {
  const words = ["Beyond", "Pixels", "Beyond", "Dreams"]

  useEffect(() => {
    const timer = setTimeout(() => onLoadingComplete(), 4000)
    return () => clearTimeout(timer)
  }, [onLoadingComplete])

  const screenVariants = {
    enter: { opacity: 0, y: 20 },
    center: { opacity: 1, y: 0, transition: { staggerChildren: 0.5 } },
    exit: { opacity: 0, y: -20 },
  }

  const textItemVariants = {
    enter: { opacity: 0, y: 50 },
    center: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
  }

  const TextScreen = () => (
    <motion.div
      className="relative text-white text-2xl md:text-4xl lg:text-5xl font-bold flex flex-wrap justify-center px-4"
      variants={screenVariants}
      initial="enter"
      animate="center"
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className={`mx-2 z-10 ${word === "Beyond" ? "font-extrabold" : "font-extralight"}`}
          variants={textItemVariants}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  )

  const LogoScreen = () => {
    const controls = useAnimation()

    useEffect(() => {
      controls.start({
        pathLength: [0, 1],
        pathOffset: [0, 0],
        transition: { duration: 4, ease: "easeInOut" },
      })
    }, [controls])

    return (
      <motion.svg
        className="absolute inset-0 m-auto w-[300px] md:w-[400px] h-[150px] md:h-[200px] z-0 opacity-5"
        viewBox="0 0 200 100"
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.path
          d="M50,50 C50,25 75,25 100,50 C125,75 150,75 150,50 C150,25 125,25 100,50 C75,75 50,75 50,50 Z"
          fill="none"
          stroke="white"
          strokeWidth="8"
          initial={{ pathLength: 0, pathOffset: 0 }}
          animate={controls}
        />
      </motion.svg>
    )
  }

  return (
    <div className="relative h-screen bg-[#0e0c15] flex items-center justify-center overflow-hidden">
      <LogoScreen />
      <TextScreen />

      {/* Psycode Labs Credit */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <a
          href="https://psycodelabs.lk/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/40 hover:text-white/60 transition-colors duration-300 text-sm font-light"
        >
          A product of Psycode Labs
        </a>
      </motion.div>
    </div>
  )
}

export default Preloader
