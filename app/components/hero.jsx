"use client";
import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaDribbble, FaMouse } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useRef } from "react";
import WhoIAm from "./WhoIAm";
import Skills from "./Skills";
import Projects from "./projects";
import GradientShapes from "./GradientShapes";
import Footer from "./Footer";

// Add scrollIntoView function
const scrollToWhoIAm = () => {
  const whoIAmSection = document.getElementById('whoiam');
  if (whoIAmSection) {
    whoIAmSection.scrollIntoView({ behavior: 'smooth' });
  }
};

const Hero = () => {
  const whoAmRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const isWhoAmInView = useInView(whoAmRef, { once: true, amount: 0.3 });
  const isSkillsInView = useInView(skillsRef, { once: true, amount: 0.3 });
  const isProjectsInView = useInView(projectsRef, { once: true, amount: 0.3 });



  return (
    <div className="min-h-screen bg-black mt-4 pt-20 md:pt-32 px-4 md:px-8 relative">
      <div className="block md:block">
        <GradientShapes />
      </div>
      <div className="flex-col lg:py-0 lg:flex-row justify-around items-center max-w-7xl mx-auto space-y-16 md:space-y-32">
        <div id="hero" className="flex flex-col lg:flex-row items-center gap-8 md:gap-16">
          <div className="flex flex-col items-center lg:items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: -90 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="p-8  md:text-center lg:text-left"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                Hello, I'm
                <br />
                <span className="text-6xl md:text-8xl outlined-text">
                  Naveen Nagarjuna
                </span>
              </h1>
              <div className="text-2xl mt-2 text-gray-400">
                <TypeAnimation
                  sequence={["UI/UX Designer", 2000, "Product Designer", 2000]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="text-red-500"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: -90 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-col relative ml-12"
            >
              <p className="text-lg text-gray-400 max-w-2xl mb-8">
                I'm a Freelance{" "}
                <span className="text-red-500">UI/UX Designer</span> and{" "}
                <span className="text-red-500">Developer</span> based in
                India. I strive to build immersive and beautiful web
                applications through carefully crafted code and user-centric
                design.
              </p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <Link
                  href="/about"
                  className="inline-block bg-red-500 text-white px-8 py-3 rounded hover:bg-red-600 transition-colors"
                >
                  About
                </Link>
              </motion.div>
            </motion.div>
          </div>
      
      {/* scroll  */}
          <div className="lg:flex flex-1 justify-center items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <div 
                className="relative w-32 h-32 cursor-pointer"
                onClick={scrollToWhoIAm}
              >
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  whileHover={{ scale: 1.2 }}
                >
                  <FaMouse className="w-6 h-6 text-white hover:text-red-500 transition-colors" />
                </motion.div>

                <motion.svg
                  viewBox="0 0 100 100"
                  className="w-full h-full absolute top-0 left-0"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <path
                    id="textCirclePath"
                    d="M 50,50 m -40,0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
                    fill="none"
                    className="text-gray-400"
                  />
                  <text className="text-[12px] tracking-[0.3em] fill-white uppercase">
                    <textPath
                      href="#textCirclePath"
                      startOffset="0%"
                      textLength="250"
                    >
                      scroll down - scroll down-
                    </textPath>
                  </text>
                </motion.svg>
              </div>
            </motion.div>
          </div>
        </div>

        <div id="whoiam" ref={whoAmRef}>
          <WhoIAm isInView={isWhoAmInView} />
        </div>

        <div id="skills" ref={skillsRef}>
          <Skills isInView={isSkillsInView} />
        </div>

        <div id="projects" ref={projectsRef} className="w-full">
          <Projects isInView={isProjectsInView} />
        </div>

        <motion.div
          className="fixed sm:right-2 right-2 top-[50%] -translate-y-1/2 flex flex-col items-center rounded gap-4 border-2 border-white md:border-none"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1.8 }}
        >
          <div className="w-0.5 h-64 bg-white hidden md:block "></div>
          <a
            href={process.env.NEXT_PUBLIC_GITHUB_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-orange-500 transition-colors "
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href={process.env.NEXT_PUBLIC_DRIBBBLE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-orange-500 transition-colors"
          >
            <FaDribbble className="w-6 h-6" />
          </a>
          <a
            href={process.env.NEXT_PUBLIC_LINKEDIN_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-orange-500 transition-colors"
          >
            <FaLinkedinIn className="w-6 h-6" />
          </a>
        </motion.div>

        <Footer />
      </div>
    </div>
  );
};

export default Hero;
