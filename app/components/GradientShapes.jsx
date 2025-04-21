'use client'
import { motion } from 'framer-motion'

const GradientShapes = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Top right gradient circle */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0.4, 0.6, 0.4],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-500/30 blur-[100px]"
      />

      {/* Bottom left gradient blob */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0.3, 0.5, 0.3],
          rotate: [0, 45, 0]
        }}
        transition={{ 
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-gradient-to-tr from-orange-500/30 to-pink-500/30 rounded-[60%_40%_50%_50%] blur-[120px]"
      />

      {/* Center floating shape */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0.2, 0.4, 0.2],
          y: [-20, 20, -20]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-[30%_70%_70%_30%] blur-[80px]"
      />
    </div>
  )
}

export default GradientShapes