"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Inter, Poppins } from "next/font/google";
import ContactSection from "./ContactSection";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["700"] });

const projectsData = [
  {
    title: "RideMate",
    tagline: "Where riders connect and ride",
    image: "/ridemate.jpeg",
    tags: ["Research", "User Flows", "Prototyping"],
    description: [
      "A community-driven platform designed for riders to connect, discover rides, take care of their bikes, and get help when they need it most. RideMate brings essential riding experiences into one place from finding the right riding community and joining group rides to keeping bikes maintained and accessing emergency assistance. The goal was to create a simple, reliable, and rider-focused experience that makes every journey feel more connected and confident.",
    ],
    caseStudy: "https://www.behance.net/gallery/255760607/RideMate",
  },
  {
    title: "Fix Mate",
    tagline: "Your Problem. Our Professionals.",
    image: '/fixmate.png',
    tags: ["Research", "UX Strategy", "User Flows", "UI Design", "Prototyping"],
    description: [
      "FixMate is a smart service discovery platform that connects people with trusted professionals for everyday problems. From laptop repairs and vehicle services to home maintenance and technical support, users can quickly find the right expert nearby. With easy discovery, verified professionals, transparent pricing, reviews, and quick booking, FixMate makes getting the right help simple, reliable, and convenient.",
    ],
    caseStudy: "https://www.behance.net/gallery/256337255/FixMate",
  },
  {
    title: "Care Connect",
    tagline: "HealthCare, Anytime. Anywhere",
    image: "/healthcare.png",
    // Artwork is wider than the card and has a white background, so show it whole
    contain: true,
    tags: ["Research", "UX Strategy", "User Flows", "UI Design", "Prototyping"],
    description: [
      "A healthcare platform designed to make accessing medical care simpler, faster, and more convenient. Care Connect allows users to book doctor appointments both online and offline, access emergency healthcare videos, and order medicines from one place.",
      "The goal was to create a reliable and user-friendly healthcare experience that helps people quickly find the care they need, manage appointments with ease, and access essential medical support whenever they need it.",
    ],
    caseStudy: "https://www.behance.net/gallery/256338501/Care-Connect",
  },
];

const ProjectVisual = ({ project }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    transition={{ duration: 0.4 }}
    className="relative w-full aspect-[3/2] overflow-hidden rounded-2xl border border-white/10 bg-neutral-950"
  >
    {project.image ? (
      <Image
        src={project.image}
        alt={project.title}
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        className={project.contain ? "object-contain bg-white" : "object-cover"}
      />
    ) : (
      // No artwork yet: typographic cover
      <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(ellipse_at_center,_#2a2a2e_0%,_#0a0a0a_70%)]">
        <span className="text-6xl md:text-8xl font-extrabold tracking-tight text-white/25">
          {project.title.replace(" ", "")}
        </span>
      </div>
    )}
  </motion.div>
);

const Projects = () => {
  return (
    <div className={`${inter.className} min-h-screen bg-black px-4 md:px-8 py-16 md:py-12`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-6xl sm:text-8xl md:text-[180px] leading-none text-center font-bold tracking-wide text-[#1c1c2e] select-none overflow-hidden">
          Projects
        </h1>

        {/* Intro */}
        <div className="mt-12 md:mt-16 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Designing What
            <br />
            Matters
          </h2>
          <p className="text-neutral-400 text-sm md:text-base leading-relaxed max-w-sm">
            A selection of projects focused on solving meaningful problems through research,
            thoughtful design, and intuitive experiences with people at the center of every
            decision.
          </p>
        </div>

        {/* Case studies */}
        <div className="mt-16 md:mt-24 space-y-20 md:space-y-28">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center"
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <ProjectVisual project={project} />
              </div>

              <div>
                <span className="inline-flex items-center gap-1.5 rounded-md border border-[#e50914]/40 bg-[#e50914]/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#ff4d55]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#e50914]" />
                  Featured
                </span>

                <h3 className="mt-4 text-3xl md:text-4xl font-bold uppercase tracking-tight text-white">
                  {project.title}
                </h3>
                <p className="mt-1 text-neutral-300 font-medium">{project.tagline}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-white/15 px-2.5 py-1 text-xs text-neutral-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-5 space-y-3">
                  {project.description.map((paragraph) => (
                    <p key={paragraph} className="text-neutral-400 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <Link
                  href={project.caseStudy || "#"}
                  target={project.caseStudy ? "_blank" : undefined}
                  rel={project.caseStudy ? "noopener noreferrer" : undefined}
                  className="group mt-6 inline-flex items-center gap-2 font-semibold text-white hover:text-[#e50914] transition-colors"
                >
                  View Case Study
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-6-6l6 6-6 6" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Get In Touch Section */}
        <div className="relative overflow-hidden mt-32 md:mt-40">
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: "-100%" }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="whitespace-nowrap"
          >
            <h2 className={`${poppins.className} text-5xl md:text-8xl font-bold text-white inline-block`}>
              GET IN TOUCH — GET IN TOUCH — GET IN TOUCH —&nbsp;
            </h2>
          </motion.div>

          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="whitespace-nowrap mt-2"
          >
            <h2 className={`${poppins.className} text-5xl md:text-8xl font-bold text-white inline-block`}>
              GET IN TOUCH — GET IN TOUCH — GET IN TOUCH —&nbsp;
            </h2>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-20 text-center"
        >
          <h2 className={`${poppins.className} text-3xl md:text-5xl font-bold tracking-wide text-[#ff2a1f] leading-tight`}>
            Interested to work
            <br />
            with me?
          </h2>
          <h3 className="mt-8 text-5xl md:text-7xl font-semibold tracking-tight text-white">
            Let&apos;s Talk
          </h3>
        </motion.div>

        <div id="contact" className="mt-20 md:mt-28 scroll-mt-32">
          <ContactSection />
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;


