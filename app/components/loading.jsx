'use client'
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function LoadingAnimation() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + Math.random() * 10
        if (newProgress >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setLoading(false)
          }, 800)
          return 100
        }
        return newProgress
      })
    }, 200)

    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 bg-black z-50 flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
          }}
        >
          <div className="flex flex-col items-center justify-center">
            {/* Logo Animation */}
            <div className="relative mb-16">
              <motion.div
                className="relative z-10"
                initial={{ x: -80, opacity: 0, scale: 0.8 }}
                animate={{
                  x: -55,
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 },
                }}
              >
                <span className="text-9xl font-bold bg-gradient-to-r from-orange-500 via-white to-blue-500 text-transparent bg-clip-text bg-size-200 animate-gradient">
                  N
                </span>
              </motion.div>

              <motion.div
                className="text-white text-9xl font-bold absolute top-0 left-0 ml-8 z-20"
                initial={{ x: 80, opacity: 0, scale: 0.8 }}
                animate={{
                  x: 0,
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 },
                }}
              >
                <span className="text-9xl font-bold bg-gradient-to-r from-blue-500 via-white to-orange-500 text-transparent bg-clip-text bg-size-200 animate-gradient">
                  N
                </span>
              </motion.div>

              {/* Gradient Effect */}
              <motion.div
                className="absolute -inset-8 bg-gradient-to-r from-orange-500 to-blue-600 opacity-0 blur-2xl rounded-full"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 0.3, 0.7, 0.5],
                  scale: [0.8, 1.2, 1],
                  transition: { duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 },
                }}
              />
            </div>

            {/* Progress Bar */}
            <motion.div
              className="w-48 -mt-12 -ml-6 h-[2px] bg-gray-800 rounded-full overflow-hidden"
              initial={{ opacity: 0, width: 0 }}
              animate={{
                opacity: 1,
                width: "12rem",
                transition: { delay: 1, duration: 0.5 },
              }}
            >
              <motion.div
                className="h-full bg-orange-500"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>

            {/* Loading Text */}
            <motion.p
              className="text-gray-500 text-sm mt-3 font-light tracking-widest"
              initial={{ opacity: 0,x: -10 }}
              animate={{
                opacity: 1,
                x: -10,
                transition: { delay: 1.2, duration: 0.5 },
              }}
            >
              {progress < 90 ? "LOADING" : "WELCOME"}
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}