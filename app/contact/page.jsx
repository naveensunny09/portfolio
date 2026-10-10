'use client';
import { motion } from 'framer-motion'
import { FaArrowLeft } from 'react-icons/fa'
import { useRouter } from 'next/navigation'
import ContactSection from '../components/ContactSection';

const ContactPage = () => {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-black text-white px-4 sm:px-6 lg:px-8 pt-20 md:pt-32">
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

      <div className="max-w-6xl mx-auto pb-20">
        <ContactSection />
      </div>
    </div>
  );
};

export default ContactPage;
