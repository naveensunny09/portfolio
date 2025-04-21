'use client'
import { FaInstagram, FaLinkedinIn, FaBehance } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { p } from 'framer-motion/client'

const Footer = () => {
  return (
    <footer className="border-t border-gray-800 py-12 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-bold text-white">NN</h2>
              <div className="text-xs text-gray-400">
                <div>UI/UX</div>
                <div>Designer</div>
              </div>
            </div>
            <p className="text-gray-400 max-w-md">
              NN is an award UI/UX designer, hyderabad telangana
            </p>
            <div className="flex gap-4">
              
              <motion.a
                whileHover={{ scale: 1.1 }}
                href={process.env.NEXT_PUBLIC_LINKEDIN_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-colors"
              >
                <FaLinkedinIn className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href={process.env.NEXT_PUBLIC_BEHANCE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-colors"
              >
                <FaBehance className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Right Section */}
          <div className="space-y-4 md:text-right">
            <div>
              <h3 className="text-gray-400">Address:</h3>
              <p className="text-white">
                Ghatkesar<br />
                Hderabad Ace College
              </p>
            </div>
            <div>
              <h3 className="text-gray-400">Contact:</h3>
              <a href="mailto:Contact@NN.Com" className="text-white hover:text-orange-500 transition-colors">
                Contact@NN.Com
              </a>
              <p className="text-white">+91-9063869574</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer