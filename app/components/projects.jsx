"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { usePathname } from "next/navigation";

const projectsData = [
  {
    year: "1",
    projects: [
      {
        title: "Personal Portfolio",
        image: "/portfolio.png",
        description:
          "My personal portfolio website showcasing my work and skills",
        main: true,
      },
    ],
  },
  {
    year: "2",
    projects: [
      {
        title: "Painting Service",
        image: "/painting.png",
        description: "A modern website for a painting service company",
        main: true,
      },
    ],
  },
  {
    year: "3",
    projects: [
      {
        title: "Mustang",
        image: "/mustang.png",
        description: "Car showcase website with interactive features",
        main: true,
      },
    ],
  },
  {
    year: "4-5",
    projects: [
      {
        title: "Nike Models",
        image: "/nike2.png",
        description: "Different Nike models with interactive features",
      },
      {
        title: "McLaren",
        image: "/mclaren.png",
        description: "Luxury car brand website concept",
      },
    ],
  },
  {
    year: "6-7",
    projects: [
      {
        title: "Lebron",
        image: "/nike.png",
        description: "Nike athlete showcase page",
      },
      {
        title: "Airpods",
        image: "/airpods.png",
        description: "Apple product landing page concept",
      },
    ],
  },
];

const Projects = () => {
  const pathname = usePathname();
  return (
    <div className="min-h-screen bg-black px-4 md:px-8 py-16 md:py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl  "
      >
        <h1 className="text-4xl text-center md:text-[200px] font-bold text-gray-900  overflow-hidden">
          Projects
        </h1>

        <div className="mt-12">
          {projectsData.map((yearGroup, index) => (
            <motion.div
              key={yearGroup.year}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              className="space-y-8"
            >
              <div className="flex items-center text-center gap-8 mt-20">
                <div className="h-[1px] flex-grow bg-gray-800" />
                <h2 className="text-2xl md:outlined-text text-white text-center">
                  {yearGroup.year}
                </h2>
                <div className="h-[1px] flex-grow bg-gray-800" />
              </div>

              {yearGroup.projects.length === 1 && yearGroup.projects[0].main ? (
                <motion.div
                  key={yearGroup.projects[0].title}
                  whileHover={{ scale: 1.01 }}
                  className="relative w-full h-[200px] md:h-[750px] overflow-hidden rounded-xl"
                >
                  <Image
                    src={yearGroup.projects[0].image}
                    alt={yearGroup.projects[0].title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center px-4">
                      <h3 className="font-bold text-2xl sm:text-3xl md:text-5xl text-white mb-2">
                        {yearGroup.projects[0].title}
                      </h3>
                      <p className="text-gray-300 text-base sm:text-lg md:text-xl">
                        {yearGroup.projects[0].description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <div className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide py-4 px-2">
                  {yearGroup.projects.map((project) => (
                    <motion.div
                      key={project.title}
                      whileHover={{ scale: 1.02 }}
                      className="group relative w-[280px] sm:w-[400px] md:w-[900px] flex-shrink-0 overflow-hidden rounded-lg"
                    >
                      <div className="relative w-full h-[200px] sm:h-[300px] md:h-[600px]">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="text-center px-4">
                          <h3 className="font-bold text-xl sm:text-2xl md:text-3xl text-white mb-2">
                            {project.title}
                          </h3>
                          <p className="text-gray-300 text-sm sm:text-base md:text-lg">
                            {project.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Recently Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-40 mb-40"
        >
          <h2 className="text-4xl outlined-text font-bold text-red-600 mb-4">
            Recently...
          </h2>
          <div className="relative w-full flex justify-center items-center h-full">
            <motion.div
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-full rounded-lg overflow-hidden"
            >
              <Image
                src="/shopster.png"
                alt="Recent Work"
                width={800}
                height={800}
                className="w-[400px] md:w-full  h-full rounded-lg"
                priority
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Get In Touch Section */}
        <div className="relative overflow-hidden ">
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
            <h2 className="outlined-text text-3xl md:text-7xl font-bold inline-block  bg-clip-text ">
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
            className="whitespace-nowrap mt-4"
          >
            <h2 className="text-3xl md:text-7xl outlined-text text-white font-bold inline-block">
              GET IN TOUCH — GET IN TOUCH — GET IN TOUCH —&nbsp;
            </h2>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h2 className="text-xl font-bold text-white mb-8">
            Interested to work
            <br />
            with me?
          </h2>
          <Link
            href="/contact"
            className=" text-xl bg-red-500 text-white px-10 py-2 rounded-3xl hover:bg-red-600 transition-colors"
          >
            Lets Talk
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Projects;


