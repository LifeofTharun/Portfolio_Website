import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin } from 'lucide-react';
import gsap from 'gsap';

const Hero: React.FC = () => {
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const letters = textRef.current.innerText.split('');
    textRef.current.innerHTML = '';
    
    letters.forEach((letter, i) => {
      const span = document.createElement('span');
      span.innerText = letter;
      span.style.opacity = '0';
      span.style.display = letter === ' ' ? 'inline' : 'inline-block';
      textRef.current?.appendChild(span);
    });

    gsap.to(textRef.current.children, {
      opacity: 1,
      y: 0,
      stagger: 0.05,
      delay: 0.5,
      ease: 'power3.out',
    });
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern bg-grid dark:opacity-10 opacity-20"></div>
      
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col items-center text-center">
          <motion.div
            className="mb-6 overflow-hidden rounded-full border-4 border-primary-500 p-1"
            initial={{ scale: 0, rotate: 180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.1 }}
          >
            <div className="relative h-28 w-28 overflow-hidden rounded-full bg-gradient-to-r from-primary-500 to-accent-400 md:h-32 md:w-32">
              <div className="relative h-28 w-28 overflow-hidden rounded-full bg-gradient-to-r from-primary-500 to-accent-400 md:h-32 md:w-32 flex items-center justify-center">
                <img
                  src="/Photo.jpg"
                  alt="Tharun B"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="inline-block rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-800 dark:bg-primary-900/30 dark:text-primary-300">
              B.Sc Artificial Intelligence
            </span>
          </motion.div>

          <h1 
            ref={textRef}
            className="mb-6 text-4xl font-bold leading-tight text-dark-800 dark:text-white md:text-5xl lg:text-6xl"
          >
            Hi, I'm Tharun B
          </h1>

          <motion.p
            className="mb-8 max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            An AI student at KMG College, passionate about machine learning, 
            data science, and building intelligent systems that solve real-world problems.
          </motion.p>

          <motion.div 
            className="mb-12 flex space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <motion.a
              href="https://github.com/LifeofTharun/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-dark-800 text-white transition-colors hover:bg-primary-600 dark:bg-white dark:text-dark-800 dark:hover:bg-primary-600 dark:hover:text-white"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="GitHub Profile"
            >
              <Github className="h-5 w-5" />
            </motion.a>
            
            <motion.a
              href="https://www.linkedin.com/in/tharun-b-913030316/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-dark-800 text-white transition-colors hover:bg-primary-600 dark:bg-white dark:text-dark-800 dark:hover:bg-primary-600 dark:hover:text-white"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-5 w-5" />
            </motion.a>
          </motion.div>

          <motion.button
            onClick={scrollToAbout}
            className="group absolute bottom-10 flex animate-bounce-slow flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            aria-label="Scroll down"
          >
            <span className="mb-2 text-sm font-medium text-gray-500 transition-colors group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-400">
              Scroll Down
            </span>
            <ChevronDown className="h-6 w-6 text-gray-500 transition-colors group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-400" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Hero;