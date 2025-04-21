'use client'
import { motion } from 'framer-motion'

const skillsData = [
  {
    name: "HTML — CSS",
    delay: 0.3
  },
  {
    name: "FLUTTER FLOW",
    delay: 0.4
  },
  {
    name: "FIGMA",
    delay: 0.5
  }
]

const Skills = ({ isInView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.8 }}
      className="w-full mt-12"
    >
      <div className="relative top-12 sm:p-6 lg:p-8 rounded-xl bg-none">
        {/* Background Text */}
        <motion.h2 
          className="absolute  mt-12 -top-20 sm:-top-28 md:left-10 lg:-top-40 left-10 text-[130px] sm:text-[250px] lg:text-[400px] font-bold text-white  bg-transparent overflow-hidden"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 0.2, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Skills
        </motion.h2>

        {/* Skills */}
        <div className="flex-col relative top-10 z-10  sm:mt-24 lg:mt-32">
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: skill.delay }}
              className="flex flex-col justify-center items-center gap-2 sm:gap-4 mb-4 sm:mb-6 lg:mb-8 bg-none"
            >
              <h3 
                className="outlined-text text-3xl sm:text-4xl lg:text-6xl font-semibold text-white text-center"
              >
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default Skills