'use client'
import { motion } from 'framer-motion'
import Image from 'next/image';

const WhoIAm = ({ isInView }) => {
  const handleDownloadCV = () => {
    // Create a link element
    const link = document.createElement('a');
    link.href = '/naveen-resume.pdf'; // Update this with your PDF file name
    link.download = 'Naveen-Nagarjuna-Resume.pdf'; // The name that will appear when downloading
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: "20%" }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: "20%" }}
      transition={{ duration: 1, delay: 0.2 }}
      className="w-full flex-col xl:flex md:flex-row gap-8  mt-20"
    >
      <div className="flex-col md:flex w-full  lg:w-1/2">
      <motion.h2
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-6xl ml-2 md:ml-12 font-bold text-white mb-8"
        >
          WHO I <span  className="outlined-text text-stroke-4 text-stroke-red text-transparent font-bold">AM</span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative rounded-2xl overflow-hidden flex justify-center items-center mb-4"
          whileHover={{ scale: 1.02 }}
        >
          <Image
            src="/Naveen-Nagarjuna.jpg"
            alt="Naveen Nagarjuna"
            width={1600}
            height={ 900}
            className="w-[600px] h-[500px] rounded-xl xl:w-[500px]   object-cover"
          />
        </motion.div>
      </div>

      <div className="xl:mt-24 lg:w-1/2">
        
        
        <motion.h3
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-3xl font-bold text-white mb-6"
        >
          Naveen<br />
          Nagarjuna
        </motion.h3>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-gray-400 mb-6 font-poppins">
            Hi, my name is Naveen Nagarjuna, I am a UI/UX designer with a focus on interaction 
            design & art direction. I love to create engaging, creative, and interactive app 
            and websites. My aim is to visualize your ideas through my designing skills, by 
            adding motion, I bring them life and make an impressive product.
          </p>

          <p className="text-gray-400 font-light mb-4">
            I Love Design.
          </p>

          <p className="text-gray-400 mb-8">
            Design is not a job, design is a mindset.<br />
            Specially structured and logical thinking.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex gap-4"
        >

          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={handleDownloadCV}
            className="border border-white text-white px-6 py-3 rounded flex items-center gap-2 hover:bg-white hover:text-black transition-colors"
          >
            <svg 
              className="w-4 h-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" 
              />
            </svg>
            Download CV
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default WhoIAm