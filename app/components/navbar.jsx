'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import { smoothScrollTo } from './smoothScroll'

const Navbar = () => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <motion.nav 
      className="w-full md:w-full  py-4 sticky top-8 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 border border-gray-800/50 px-4 md:px-6 py-2 rounded-lg backdrop-blur-md bg-black/20 shadow-lg">
        <div className="w-full md:w-auto flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl md:text-2xl font-bold text-white">NN</span>
            <div className="text-[10px] md:text-xs text-gray-400">
              <div>UI/UX Designer &amp;</div>
              <div>Product Designer</div>
            </div>
          </Link>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-red-500 transition-colors"
          >
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          <NavLinks pathname={pathname} />
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className="w-full md:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-col items-center gap-4 pt-4 border-t border-gray-800/50">
                <NavLinks pathname={pathname} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

const NavLinks = ({ pathname }) => {
  const links = [
    { href: '/', label: 'HOME' },
    { href: '/#whoiam', label: 'ABOUT' },
    { href: '/#projects', label: 'PROJECTS' },
    { href: '/#contact', label: 'CONTACT' },
  ]

  // On the home page, glide to the section instead of jumping
  const handleClick = (e, href) => {
    const [path, hash] = href.split('#')
    if (pathname !== (path || '/')) return

    const target = hash ? document.getElementById(hash) : null
    if (hash && !target) return

    e.preventDefault()
    smoothScrollTo(target)
    window.history.replaceState(null, '', target ? `#${hash}` : '/')
  }

  return links.map(link => (
    <Link 
      key={link.href}
      href={link.href} 
      onClick={(e) => handleClick(e, link.href)}
      className={`text-sm font-medium tracking-wide ${
        pathname === link.href ? 'text-red-500' : 'text-white/90'
      } hover:text-red-600 transition-colors`}
    >
      {link.label}
    </Link>
  ))
}

export default Navbar