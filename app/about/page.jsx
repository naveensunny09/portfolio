'use client';
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn, FaArrowLeft } from 'react-icons/fa'
import { useRouter } from 'next/navigation'

const AboutPage = () => {
  const router = useRouter()
  const services = [
    'Website Design',
    'Visual Design',
    'Interaction Design',
    'Mobile And Web Design',
    'Animation'
  ]

  const education = [
    {
      school: 'Ace Engineering College',
      years: '2023 - 2027',
      details: 'B.tech/Btech'
    },
    {
      school: 'Nalanda Junior College',
      years: '2020 - 2023',
      details: 'M.P.C'
    },
    {
      school: 'Triveni Talent School',
      years: '2020',
      details: 'SSC'
    }
  ]

  const skills = ['UI/UX', 'HTML/CSS', 'Flutter Flow']
  const tools = ['Figma', 'Lottfiles', 'Canva']
  const qualities = [
    'Design to improve your business',
    'Caring for the quality of the product',
    'The relevance ad visual solution'
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Back Button */}
      <motion.button
        onClick={() => router.back()}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-8 left-8 z-50 flex items-center gap-2 text-white hover:text-orange-500 transition-colors"
      >
        <FaArrowLeft className="w-4 h-4" />
        <span>Back</span>
      </motion.button>

      <div className="max-w-7xl mx-auto pt-20 md:pt-32 px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[300px] md:h-[600px] rounded-lg overflow-hidden"
          >
            <Image
              src="/Naveen-Nagarjuna.jpg"
              alt="Profile"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Right Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 md:space-y-8"
          >
            <h1 className="text-8xl font-bold">NN</h1>
            <h2 className="text-3xl">a bit about myself</h2>
            <div className="space-y-6">
              <h3 className="text-2xl">Just about</h3>
              <p className="text-gray-400">
                My design experience, collaborations, and own vibes.<br />
                for sure!
              </p>
              <div className="space-y-4">
                <h4>So,</h4>
                <p className="text-gray-400">
                  I'm Naveen — UI/UX Designer. Being a self-taught designer, I have intention to perfect my every projects and I love designing that has to do with product & visual design, mobile & web projects as well as branding, typography, and animations. With my experience, I know how to help clients solve real business cases and grow their businesses by using design thinking. I love story (out of context).
                </p>
                <p className="text-gray-400">
                  In 2023, I started as designer, ui/ux designer as an individual, and I am providing one-stop support for photography, design, visual communication skills. all of which I bring to my work on digital products and websites.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-16 mt-16 md:mt-32">
          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg uppercase tracking-wider">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service} className="text-gray-400">{service}</li>
              ))}
            </ul>
          </div>

          {/* Education */}
          <div className="space-y-4">
            <h3 className="text-lg uppercase tracking-wider">Education</h3>
            <ul className="space-y-6">
              {education.map((edu) => (
                <li key={edu.school} className="space-y-1">
                  <p className="font-medium">{edu.school}</p>
                  <p className="text-gray-400 text-sm">{edu.years}</p>
                  <p className="text-gray-400 text-sm">{edu.details}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Skills & Tools */}
          <div className="space-y-8">
            <div>
              <h3 className="text-lg uppercase tracking-wider mb-4">Skills</h3>
              <ul className="space-y-2">
                {skills.map((skill) => (
                  <li key={skill} className="text-gray-400">{skill}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg uppercase tracking-wider mb-4">Tools</h3>
              <ul className="space-y-2">
                {tools.map((tool) => (
                  <li key={tool} className="text-gray-400">{tool}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Qualities */}
          <div className="space-y-4">
            <h3 className="text-lg uppercase tracking-wider">Qualities</h3>
            <ul className="space-y-2">
              {qualities.map((quality) => (
                <li key={quality} className="text-gray-400">{quality}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-32 pb-16 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-4">
            <h3 className="text-lg uppercase tracking-wider">Contact</h3>
            <p className="text-gray-400">Nagarjunanaveen@gmail.com</p>
            <p className="text-gray-400">+91 9063869574</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg uppercase tracking-wider">Social</h3>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white"><FaInstagram /></a>
              <a href="#" className="text-gray-400 hover:text-white"><FaFacebookF /></a>
              <a href="#" className="text-gray-400 hover:text-white"><FaTwitter /></a>
              <a href="#" className="text-gray-400 hover:text-white"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage