import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { ThemeContext } from '../context/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <motion.button
      className="fixed right-6 top-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-lg dark:bg-dark-800/50 shadow-lg border border-white/20 dark:border-dark-700/50"
      onClick={toggleDarkMode}
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.1 }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      aria-label="Toggle theme"
    >
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: darkMode ? 180 : 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
        className="relative h-6 w-6"
      >
        {darkMode ? (
          <Moon className="absolute h-6 w-6 text-yellow-300" />
        ) : (
          <Sun className="absolute h-6 w-6 text-yellow-500" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;