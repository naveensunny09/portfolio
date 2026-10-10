'use client'
import { motion } from 'framer-motion'
import Image from 'next/image';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

const fadeUp = (isInView, delay) => ({
  initial: { opacity: 0, y: 20 },
  animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
});

const highlights = [
  { value: 'UI/UX', label: 'Designer' },
  { value: 'ECE', label: 'Engineering Background' },
  { value: 'Human', label: 'Centered Approach' },
];

const WhoIAm = ({ isInView }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, delay: 0.1 }}
      className={`${inter.className} w-full max-w-6xl mx-auto mt-20 pt-12 px-4 md:px-12`}
    >
      <motion.h2
        {...fadeUp(isInView, 0.2)}
        className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-12"
      >
        Who I <span className="outlined-text text-stroke-4 font-bold">A M</span>
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="lg:col-span-5 relative"
        >
          <div className="absolute -top-3 -left-3 w-full h-full border border-[#e50914]/60 rounded-2xl" />
          <div className="relative overflow-hidden rounded-2xl group">
            <Image
              src="/Naveen-Nagarjuna.jpg"
              alt="Naveen Nagarjuna"
              width={1600}
              height={900}
              className="w-full h-[480px] object-cover grayscale transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </div>
        </motion.div>

        {/* Content */}
        <div className="lg:col-span-7">
          <motion.p
            {...fadeUp(isInView, 0.3)}
            className="text-[#e50914] text-sm font-semibold tracking-[0.25em] uppercase mb-3"
          >
            Hello, I&apos;m
          </motion.p>

          <motion.h3
            {...fadeUp(isInView, 0.35)}
            className="text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight mb-6"
          >
            <span className="text-[#e50914]">Naveen</span>{' '}
            <span className="text-white">Nagarjuna</span>
          </motion.h3>

          <motion.div {...fadeUp(isInView, 0.45)} className="space-y-4 max-w-xl mb-8">
            <p className="text-white/80 text-lg leading-relaxed">
              A UI/UX designer with a background in Electronics and Communication Engineering,
              crafting thoughtful, human-centered digital experiences.
            </p>
            <p className="text-neutral-400 leading-relaxed">
              I turn complex problems into simple, meaningful solutions by combining creativity,
              empathy, technology and problem-solving — designing experiences that are intuitive,
              visually engaging and purposeful.
            </p>
            <p className="text-neutral-300 leading-relaxed border-l-2 border-[#e50914] pl-4 italic">
              Good design is more than how something looks — it&apos;s how it works, how it feels,
              and the impact it creates in people&apos;s lives.
            </p>
          </motion.div>

          <motion.div
            {...fadeUp(isInView, 0.55)}
            className="grid grid-cols-3 gap-4 max-w-xl mb-10 border-t border-white/10 pt-6"
          >
            {highlights.map((item) => (
              <div key={item.value}>
                <p className="text-white text-xl md:text-2xl font-bold">{item.value}</p>
                <p className="text-neutral-500 text-xs md:text-sm mt-1">{item.label}</p>
              </div>
            ))}
          </motion.div>

          <motion.a
            {...fadeUp(isInView, 0.65)}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            href="/Nagarjuna-Naveenchary.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 bg-white text-[#e50914] font-semibold px-6 py-3 rounded-xl hover:bg-[#e50914] hover:text-white transition-colors"
          >
            View Resume
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-6-6l6 6-6 6" />
            </svg>
          </motion.a>
        </div>
      </div>
    </motion.section>
  )
}

export default WhoIAm
