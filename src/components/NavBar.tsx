import React, { useState, useEffect, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code, Home, User, Briefcase, Mail, Sun, Moon } from 'lucide-react';
import { ThemeContext } from '../context/ThemeContext';

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 300;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id') || '';

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });

      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setIsOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: <Home className="w-5 h-5" /> },
    { id: 'about', label: 'About', icon: <User className="w-5 h-5" /> },
    { id: 'skills', label: 'Skills', icon: <Code className="w-5 h-5" /> },
    { id: 'projects', label: 'Projects', icon: <Briefcase className="w-5 h-5" /> },
    { id: 'contact', label: 'Contact', icon: <Mail className="w-5 h-5" /> },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        className={`fixed z-40 w-full px-6 py-4 transition-all duration-300 ${
          scrolled
            ? 'bg-white/80 dark:bg-dark-800/80 backdrop-blur-lg shadow-lg'
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <motion.div
            className="flex items-center space-x-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
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

          <div className="hidden md:flex md:items-center">
            <ul className="flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.li 
                  key={item.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`relative flex items-center space-x-1 py-2 text-sm font-medium transition-colors ${
                      activeSection === item.id
                        ? 'text-primary-600 dark:text-primary-400'
                        : 'text-dark-500 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
                    }`}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                    {activeSection === item.id && (
                      <motion.div
                        className="absolute bottom-0 left-0 h-0.5 w-full bg-primary-600 dark:bg-primary-400"
                        layoutId="activeSection"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                  </button>
                </motion.li>
              ))}
              <motion.button
                onClick={toggleDarkMode}
                className="flex items-center justify-center rounded-full p-2 text-dark-500 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle theme"
              >
                {darkMode ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </motion.button>
            </ul>
          </div>

          <button
            onClick={() => setIsOpen(true)}
            className="rounded-lg p-2 text-dark-800 dark:text-white md:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-white dark:bg-dark-900 md:hidden"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            <div className="flex h-full flex-col overflow-y-auto">
              <div className="flex items-center justify-between px-6 py-4">
                <div className="flex items-center space-x-2">
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
                </div>
                <div className="flex items-center space-x-4">
                  <motion.button
                    onClick={toggleDarkMode}
                    className="rounded-lg p-2 text-dark-800 dark:text-white"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Toggle theme"
                  >
                    {darkMode ? (
                      <Sun className="h-5 w-5" />
                    ) : (
                      <Moon className="h-5 w-5" />
                    )}
                  </motion.button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="rounded-lg p-2 text-dark-800 dark:text-white"
                    aria-label="Close menu"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
              </div>

              <div className="mt-8 px-6">
                <ul className="space-y-4">
                  {navItems.map((item, index) => (
                    <motion.li
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                    >
                      <button
                        onClick={() => handleNavClick(item.id)}
                        className={`flex w-full items-center space-x-4 rounded-lg px-4 py-3 transition-colors ${
                          activeSection === item.id
                            ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400'
                            : 'text-dark-800 dark:text-white hover:bg-gray-100 dark:hover:bg-dark-800'
                        }`}
                      >
                        {item.icon}
                        <span className="font-medium">{item.label}</span>
                      </button>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;