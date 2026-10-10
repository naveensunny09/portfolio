"use client";
import Link from "next/link";
import { FaBehance, FaLinkedinIn, FaDribbble, FaMouse } from "react-icons/fa";
import { SiMiro } from "react-icons/si";
import { Inter, Fredericka_the_Great } from "next/font/google";
import { motion, useInView } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useRef } from "react";
import WhoIAm from "./WhoIAm";
import Skills from "./Skills";
import Projects from "./projects";
import GradientShapes from "./GradientShapes";
import Footer from "./Footer";
import { smoothScrollTo } from "./smoothScroll";
import { SOCIAL_LINKS } from "./socialLinks";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const fredericka = Fredericka_the_Great({ subsets: ["latin"], weight: "400" });

const tools = [
  {
    name: "Figma",
    icon: (
      <svg viewBox="0 0 38 57" className="h-11 w-auto" aria-hidden="true">
        <path fill="#1abcfe" d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" />
        <path fill="#0acf83" d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" />
        <path fill="#ff7262" d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" />
        <path fill="#f24e1e" d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" />
        <path fill="#a259ff" d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" />
      </svg>
    ),
  },
  {
    name: "Photoshop",
    icon: (
      <span className="w-11 h-11 rounded-lg bg-[#001e36] text-[#31a8ff] font-bold text-xl flex items-center justify-center">
        Ps
      </span>
    ),
  },
  {
    name: "Miro",
    icon: (
      <span className="w-11 h-11 rounded-lg bg-[#ffd02f] text-[#050038] flex items-center justify-center">
        <SiMiro className="w-6 h-6" />
      </span>
    ),
  },
];

// Add scrollIntoView function
const scrollToWhoIAm = () => {
  const whoIAmSection = document.getElementById('whoiam');
  if (whoIAmSection) {
    smoothScrollTo(whoIAmSection);
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
    <div className="min-h-screen bg-black mt-4 pt-16 md:pt-24 px-4 md:px-8 relative">
      <div className="block md:block">
        <GradientShapes />
      </div>
      <div className="flex-col lg:py-0 lg:flex-row justify-around items-center max-w-7xl mx-auto space-y-16 md:space-y-32">
        <div id="hero" className="flex flex-col lg:flex-row items-center justify-between gap-12 min-h-[70vh]">
          <div className={`${inter.className} flex flex-col items-start w-full lg:w-auto`}>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold text-white tracking-tight"
            >
              Hello, I&apos;m
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className={`${fredericka.className} text-5xl sm:text-6xl md:text-8xl text-white mt-2 leading-tight`}
            >
              Naveen Nagarjuna
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-3xl md:text-4xl text-[#e50914] mt-4 min-h-[1.25em]"
            >
              <TypeAnimation
                sequence={["Product Designer", 2000, "UI/UX Designer", 2000]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.75 }}
              className="text-base md:text-lg text-neutral-400 max-w-2xl mt-6 leading-relaxed"
            >
              I&apos;m a Freelance UI/UX Designer and Developer based in India. I strive to build
              immersive and beautiful web applications through carefully crafted code and
              user-centric design.
            </motion.p>

            {/* Tools */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-12"
            >
              <p className="text-neutral-400 text-base mb-4">Tools</p>
              <div className="flex items-center gap-4">
                {tools.map((tool) => (
                  <motion.div
                    key={tool.name}
                    title={tool.name}
                    whileHover={{ y: -4, scale: 1.05 }}
                    className="w-12 h-12 flex items-center justify-center"
                  >
                    {tool.icon}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* scroll  */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="hidden lg:flex flex-1 justify-center items-center self-center"
          >
            <div
              className="relative w-32 h-32 cursor-pointer"
              onClick={scrollToWhoIAm}
            >
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <motion.div
                  animate={{ y: [-3, 3, -3] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  whileHover={{ scale: 1.2 }}
                >
                  <FaMouse className="w-6 h-6 text-neutral-400 hover:text-[#e50914] transition-colors" />
                </motion.div>
              </div>

              <motion.svg
                viewBox="0 0 100 100"
                className="w-full h-full absolute top-0 left-0"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <path
                  id="textCirclePath"
                  d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
                  fill="none"
                />
                <text className="text-[10px] font-semibold fill-white">
                  <textPath
                    href="#textCirclePath"
                    startOffset="0%"
                    textLength="236"
                    lengthAdjust="spacing"
                  >
                    Scroll · down · Scroll · down ·
                  </textPath>
                </text>
              </motion.svg>
            </div>
          </motion.div>
        </div>

        <div id="whoiam" ref={whoAmRef} className="scroll-mt-32">
          <WhoIAm isInView={isWhoAmInView} />
        </div>

        <div id="skills" ref={skillsRef}>
          <Skills isInView={isSkillsInView} />
        </div>

        <div id="projects" ref={projectsRef} className="w-full scroll-mt-24">
          <Projects isInView={isProjectsInView} />
        </div>

        <motion.div
          className="fixed sm:right-2 right-2 top-[50%] -translate-y-1/2 flex flex-col items-center rounded gap-4 border-2 border-white md:border-none"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1.8 }}
        >
          <div className="w-px h-52 bg-neutral-600 hidden md:block mb-2"></div>
          {[
            { href: SOCIAL_LINKS.behance, icon: FaBehance, label: "Behance" },
            { href: SOCIAL_LINKS.linkedin, icon: FaLinkedinIn, label: "LinkedIn" },
            { href: SOCIAL_LINKS.dribbble, icon: FaDribbble, label: "Dribbble" },
          ].map(({ href, icon: Icon, label }) => (
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
        </motion.div>

        <Footer />
      </div>
    </div>
  );
};

export default Hero;
