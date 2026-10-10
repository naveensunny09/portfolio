'use client'
import { motion } from 'framer-motion'
import { FaBehance, FaDribbble, FaLinkedinIn } from 'react-icons/fa'
import { useState } from 'react'
import Dialog from './Dialog'
import { SOCIAL_LINKS } from './socialLinks'

const contactDetails = [
  { label: 'Address', value: 'Madhapur Hyderabad 500081' },
  { label: 'My Email', value: 'naveensunny1581@gmail.com', href: 'mailto:naveensunny1581@gmail.com' },
  { label: 'Call Me Now', value: '+91 9063869574', href: 'tel:+919063869574' },
]

const socials = [
  { href: SOCIAL_LINKS.behance, icon: FaBehance, label: 'Behance' },
  { href: SOCIAL_LINKS.dribbble, icon: FaDribbble, label: 'Dribbble' },
  { href: SOCIAL_LINKS.linkedin, icon: FaLinkedinIn, label: 'LinkedIn' },
]

const inputClass =
  'w-full bg-transparent border-b border-white/15 py-2 text-white focus:border-[#e50914] outline-none transition-colors'

const Field = ({ label, name, type = 'text', required = true }) => (
  <div>
    <label htmlFor={name} className="text-sm text-neutral-300">
      {label}
      {required && '*'}
    </label>
    <input id={name} type={type} name={name} required={required} className={inputClass} />
  </div>
)

const ContactSection = () => {
  const [loading, setLoading] = useState(false)
  const [dialog, setDialog] = useState({ isOpen: false, message: '', type: 'success' })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_FORMSPREE_LINK}`, {
        method: 'POST',
        body: new FormData(e.target),
        headers: { Accept: 'application/json' },
      })

      if (!response.ok) throw new Error('Failed to send message')

      setDialog({
        isOpen: true,
        message: 'Your message has been sent successfully! We will get back to you soon.',
        type: 'success',
      })
      e.target.reset()
    } catch (error) {
      setDialog({
        isOpen: true,
        message: 'Failed to send message. Please try again later.',
        type: 'error',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 text-left">
      <Dialog
        isOpen={dialog.isOpen}
        onClose={() => setDialog({ ...dialog, isOpen: false })}
        message={dialog.message}
        type={dialog.type}
      />

      {/* Contact info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl md:text-3xl font-semibold text-[#ff2a1f]">
          Let&apos;s discuss your Project
        </h3>
        <p className="mt-3 text-sm md:text-base text-neutral-400 max-w-md leading-relaxed">
          Have an idea, a product or a problem worth solving? Share a few details and I&apos;ll
          get back to you soon.
        </p>

        <div className="mt-10 space-y-6">
          {contactDetails.map((item) => (
            <div key={item.label}>
              <p className="text-xs text-neutral-500">{item.label}:</p>
              {item.href ? (
                <a
                  href={item.href}
                  className="mt-1 inline-block font-semibold text-white hover:text-[#e50914] transition-colors"
                >
                  {item.value}
                </a>
              ) : (
                <p className="mt-1 font-semibold text-white">{item.value}</p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 flex gap-5">
          {socials.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-neutral-400 hover:text-[#e50914] transition-colors"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </motion.div>

      {/* Form */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <Field label="Name" name="name" />
        <Field label="Email" name="email" type="email" />
        <Field label="Location" name="location" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Field label="Budget" name="budget" />
          <Field label="Subject" name="subject" />
        </div>
        <div>
          <label htmlFor="message" className="text-sm text-neutral-300">
            Message*
          </label>
          <textarea id="message" name="message" rows="3" required className={`${inputClass} resize-none`} />
        </div>

        <motion.button
          type="submit"
          disabled={loading}
          whileHover={{ scale: loading ? 1 : 1.04 }}
          whileTap={{ scale: loading ? 1 : 0.97 }}
          className={`bg-[#ff2a1f] text-white text-sm font-medium px-6 py-2.5 rounded-md hover:bg-[#e50914] transition-colors ${
            loading ? 'opacity-70 cursor-not-allowed' : ''
          }`}
        >
          {loading ? 'Sending...' : 'Submit →'}
        </motion.button>
      </motion.form>
    </div>
  )
}

export default ContactSection
