import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionHeading from '../components/SectionHeading';
import SkillBar from '../components/SkillBar';
import { skills } from '../data/skillsData';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'ai' | 'programming' | 'tools' | 'softSkills' | 'all'>('all');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'ai', label: 'AI & ML' },
    { id: 'programming', label: 'Programming' },
    { id: 'tools', label: 'Tools & Frameworks' },
    { id: 'softSkills', label: 'Soft Skills' },
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="My Skills" 
          subtitle="Proficiency in various technologies and tools in AI and software development"
        />
        
        <div className="mx-auto mb-10 flex flex-wrap justify-center gap-3">
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id as any)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-dark-800 dark:text-gray-200 dark:hover:bg-dark-700'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.3 }}
            >
              {category.label}
            </motion.button>
          ))}
        </div>
        
        <div className="mx-auto max-w-4xl" ref={ref}>
          <motion.div
            className="grid gap-x-12 gap-y-8 md:grid-cols-2"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {filteredSkills.map((skill, index) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                icon={skill.icon}
                proficiency={skill.proficiency}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;