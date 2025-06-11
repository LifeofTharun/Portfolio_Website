import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SkillBarProps {
  name: string;
  icon: string;
  proficiency: number;
  index: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, icon, proficiency, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className="mb-3"
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flex items-center justify-between mb-1">
        <span className="flex items-center text-dark-800 dark:text-white">
          <span className="mr-2 text-lg">{icon}</span>
          {name}
        </span>
        <span className="text-sm font-medium text-dark-600 dark:text-gray-300">{proficiency}%</span>
      </div>
      <div className="h-2.5 w-full rounded-full bg-gray-200 dark:bg-dark-700">
        <motion.div
          className="h-2.5 rounded-full bg-gradient-to-r from-primary-600 to-accent-400"
          initial={{ width: 0 }}
          animate={inView ? { width: `${proficiency}%` } : { width: 0 }}
          transition={{ duration: 1, delay: index * 0.1 + 0.2, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
};

export default SkillBar;