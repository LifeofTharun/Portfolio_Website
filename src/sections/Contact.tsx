import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Github, Linkedin } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ContactForm from '../components/ContactForm';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Get In Touch" 
          subtitle="Have a question or want to work together? Feel free to contact me!"
        />
        
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="mb-6 text-2xl font-bold text-dark-800 dark:text-white">Contact Information</h3>
            
            <div className="mb-8 space-y-4">
              <div className="flex items-start">
                <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Email</h4>
                  <a 
                    href="mailto:lifeoftharun2006@gmail.com" 
                    className="text-lg font-medium text-dark-800 hover:text-primary-600 dark:text-white dark:hover:text-primary-400"
                  >
                    lifeoftharun2006@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Location</h4>
                  <p className="text-lg font-medium text-dark-800 dark:text-white">
                    Tamil Nadu, India
                  </p>
                </div>
              </div>
            </div>
            
            <h3 className="mb-4 text-xl font-bold text-dark-800 dark:text-white">Connect With Me</h3>
            <div className="flex space-x-4">
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
            </div>
          </motion.div>
          
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;