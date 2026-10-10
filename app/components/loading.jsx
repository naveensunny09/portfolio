'use client'
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function LoadingAnimation() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Fill the bar continuously over a fixed duration with an ease-in-out curve
    const duration = 3500
    let start = null
    let frame
    let timeout

    const tick = (now) => {
      if (start === null) start = now
      const t = Math.min((now - start) / duration, 1)
      const eased = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
      setProgress(eased * 100)
      if (t < 1) {
        frame = requestAnimationFrame(tick)
      } else {
        timeout = setTimeout(() => setLoading(false), 800)
      }
    }
    frame = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(frame)
      clearTimeout(timeout)
    }
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
                <span className="text-9xl font-bold text-[#FF0000]">
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
                <span className="text-9xl font-bold text-white">
                  N
                </span>
              </motion.div>

              {/* Gradient Effect */}
              <motion.div
                className="absolute -inset-8 bg-gradient-to-r from-[#ff1a1a] to-red-600 opacity-0 blur-2xl rounded-full"
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
              className="w-48 -mt-12 -ml-6 h-[2px] bg-white/10 rounded-full overflow-hidden"
              initial={{ opacity: 0, width: 0 }}
              animate={{
                opacity: 1,
                width: "12rem",
                transition: { delay: 1, duration: 0.5 },
              }}
            >
              <motion.div
                className="h-full bg-[#ff1a1a] shadow-[0_0_8px_#ff1a1a]"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0 }}
              />
            </motion.div>

            {/* Loading Text */}
            <motion.p
              className="text-white/70 text-sm mt-3 font-light tracking-widest"
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