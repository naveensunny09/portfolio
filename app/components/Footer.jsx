'use client'
import { FaLinkedinIn, FaBehance } from 'react-icons/fa'
import { motion } from 'framer-motion'

const socials = [
  { href: process.env.NEXT_PUBLIC_LINKEDIN_LINK, icon: FaLinkedinIn, label: 'LinkedIn' },
  { href: process.env.NEXT_PUBLIC_BEHANCE_LINK, icon: FaBehance, label: 'Behance' },
]

const Footer = () => {
  return (
    <footer className="border-t border-white/15 py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-start md:justify-between gap-10">
        {/* Left Section */}
        <div className="space-y-5">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-bold text-white">NN</h2>
            <div className="text-xs text-neutral-400 leading-tight">
              <div>UI/UX Designer &amp;</div>
              <div>Product Designer</div>
            </div>
          </div>
          <div className="flex gap-3">
            {socials.map(({ href, icon: Icon, label }) => (
              <motion.a
                key={label}
                whileHover={{ scale: 1.1 }}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-neutral-300 hover:text-white hover:border-white transition-colors"
              >
                <Icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="space-y-3 text-sm text-neutral-400 md:text-left">
          <p>
            Address: <span className="text-neutral-300">Madhapur Hyderabad</span>
          </p>
          <p>
            Contact:{' '}
            <a href="tel:+919063869574" className="text-neutral-300 hover:text-[#e50914] transition-colors">
              +91-9063869574
            </a>
          </p>
          <p>
            Email:{' '}
            <a
              href="mailto:naveensunny1581@gmail.com"
              className="text-neutral-300 hover:text-[#e50914] transition-colors"
            >
              naveensunny1581@gmail.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
