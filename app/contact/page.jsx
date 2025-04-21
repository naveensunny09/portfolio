'use client';
import { motion } from 'framer-motion'
import { FaArrowLeft, FaBehance, FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { useRouter } from 'next/navigation'
import { useState } from 'react';
import Dialog from '../components/Dialog';

const ContactPage = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(false);
  const [dialog, setDialog] = useState({ isOpen: false, message: '', type: 'success' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_FORMSPREE_LINK}`, {
        method: 'POST',
        body: new FormData(e.target),
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setDialog({
          isOpen: true,
          message: 'Your message has been sent successfully! We will get back to you soon.',
          type: 'success'
        });
        e.target.reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setDialog({
        isOpen: true,
        message: 'Failed to send message. Please try again later.',
        type: 'error'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white px-4 sm:px-6 lg:px-8 pt-20 md:pt-32">
      <Dialog 
        isOpen={dialog.isOpen}
        onClose={() => setDialog({ ...dialog, isOpen: false })}
        message={dialog.message}
        type={dialog.type}
      />
      {/* Back Button - Adjusted positioning */}
      <motion.button
        onClick={() => router.back()}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-20 left-4 sm:top-8 sm:left-8 z-40 flex items-center gap-2 text-white hover:text-red-500 transition-colors"
      >
        <FaArrowLeft className="w-4 h-4" />
        <span className="hidden sm:inline">Back</span>
      </motion.button>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left Column - Contact Info */}
          <div className="space-y-6 md:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-500 mb-4">Let's discuss your Project</h1>
              <p className="text-sm sm:text-base text-gray-400 mb-8">
                There are many variations of passages of Lorem Ipsu available,
                but the majority have suffered alte.
              </p>
            </motion.div>

            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-gray-900/50 p-4 rounded-lg">
                <h3 className="text-gray-400 mb-2">Address:</h3>
                <p>Ghatkesar Hyderabad 501301</p>
              </div>

              <div className="bg-gray-900/50 p-4 rounded-lg">
                <h3 className="text-gray-400 mb-2">My Email:</h3>
                <a href="mailto:naveensunny1581@mail.com" className="hover:text-red-500 transition-colors">
                naveensunny1581@mail.com
                </a>
              </div>

              <div className="bg-gray-900/50 p-4 rounded-lg">
                <h3 className="text-gray-400 mb-2">Call Me Now:</h3>
                <a href="tel:+919063869574" className="hover:text-red-500 transition-colors">
                  +91 9063869574
                </a>
              </div>
            </motion.div>
      
            {/* Social Media Icons */}
            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a href={process.env.NEXT_PUBLIC_BEHANCE_LINK} target='_blank' className="text-gray-400 hover:text-red-500 transition-colors">
                <FaBehance className="w-6 h-6" />
              </a>
              <a href={process.env.NEXT_PUBLIC_GITHUB_LINK} target='_blank' className="text-gray-400 hover:text-red-500 transition-colors">
                <FaGithub className="w-6 h-6" />
              </a>
              <a href={process.env.NEXT_PUBLIC_LINKEDIN_LINK} target='_blank' className="text-gray-400 hover:text-red-500 transition-colors">
                <FaLinkedinIn className="w-6 h-6" />
              </a>
            </motion.div>
          </div>

          {/* Right Column - Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4 sm:space-y-6"
          >
            <div>
              <label className="text-gray-400">Name*</label>
              <input
                type="text"
                name="name"
                required
                className="w-full bg-transparent border-b border-gray-800 py-2 focus:border-red-500 outline-none transition-colors"
              />
            </div>

            <div>
              <label className="text-gray-400">Email*</label>
              <input
                type="email"
                name="email"
                required
                className="w-full bg-transparent border-b border-gray-800 py-2 focus:border-red-500 outline-none transition-colors"
              />
            </div>

            <div>
              <label className="text-gray-400">Location</label>
              <input
                type="text"
                name="location"
                className="w-full bg-transparent border-b border-gray-800 py-2 focus:border-red-500 outline-none transition-colors"
              />
            </div>

            {/* Adjust grid for mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-gray-400">Budget*</label>
                <input
                  type="text"
                  name="budget"
                  required
                  className="w-full bg-transparent border-b border-gray-800 py-2 focus:border-red-500 outline-none transition-colors"
                />
              </div>
              <div>
                <label className="text-gray-400">Subject*</label>
                <input
                  type="text"
                  name="subject"
                  required
                  className="w-full bg-transparent border-b border-gray-800 py-2 focus:border-red-500 outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="text-gray-400">Message*</label>
              <textarea
                name="message"
                rows="4"
                required
                className="w-full bg-transparent border-b border-gray-800 py-2 focus:border-red-500 outline-none transition-colors"
              ></textarea>
            </div>

            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: loading ? 1 : 1.05 }}
              className={`bg-red-500 text-white px-8 py-3 rounded-lg hover:bg-red-600 transition-colors ${
                loading ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {loading ? 'Sending...' : 'Submit →'}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;