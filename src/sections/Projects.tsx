import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projectsData';

const Projects: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="bg-gray-50 py-20 dark:bg-dark-900/50 md:py-32">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="My Projects" 
          subtitle="A showcase of my work in artificial intelligence and software development"
        />
        
        <div className="relative mx-auto max-w-6xl">
          <AnimatePresence>
            {hoveredIndex !== null && (
              <motion.div
                className="pointer-events-none absolute -inset-x-4 -inset-y-4 z-0 rounded-xl bg-primary-50/20 dark:bg-primary-900/10"
                layoutId="project-hover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </AnimatePresence>
          
          <div className="relative z-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {projects.map((project, index) => (
              <div
                key={project.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <ProjectCard project={project} index={index} />
              </div>
            ))}
          </div>
        </div>
        
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <a
            href="https://github.com/LifeofTharun"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-primary-600 px-6 py-3 text-white shadow-md hover:bg-primary-700 dark:hover:bg-primary-500"
          >
            <span>View More on GitHub</span>
            <svg
              className="ml-2 h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              ></path>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;