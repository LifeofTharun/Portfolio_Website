import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white py-12 dark:bg-dark-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          <motion.div
            className="mb-6 flex items-center space-x-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative h-10 w-10 overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary-600 to-accent-400 rounded-xl"
                animate={{
                  borderRadius: ['16% 84% 30% 70% / 69% 31% 69% 31%', '84% 16% 86% 14% / 40% 60% 40% 60%', '16% 84% 30% 70% / 69% 31% 69% 31%'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
              />
            </div>
            <span className="text-xl font-bold text-dark-800 dark:text-white">Tharun B</span>
          </motion.div>
          
          <motion.div 
            className="mb-6 flex space-x-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <motion.a
              href="https://github.com/LifeofTharun/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-dark-100 text-dark-800 transition-colors hover:bg-primary-600 hover:text-white dark:bg-dark-800 dark:text-white dark:hover:bg-primary-600"
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
              className="flex h-10 w-10 items-center justify-center rounded-full bg-dark-100 text-dark-800 transition-colors hover:bg-primary-600 hover:text-white dark:bg-dark-800 dark:text-white dark:hover:bg-primary-600"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-5 w-5" />
            </motion.a>
            
            <motion.a
              href="mailto:lifeoftharun2006@gmail.com"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-dark-100 text-dark-800 transition-colors hover:bg-primary-600 hover:text-white dark:bg-dark-800 dark:text-white dark:hover:bg-primary-600"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Email Contact"
            >
              <Mail className="h-5 w-5" />
            </motion.a>
          </motion.div>
          
          <motion.div 
            className="text-center text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="flex items-center justify-center">
              Made with <Heart className="mx-1 h-4 w-4 text-red-500" /> by Tharun B
            </p>
            <p className="mt-2">
              &copy; {currentYear} All Rights Reserved
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;