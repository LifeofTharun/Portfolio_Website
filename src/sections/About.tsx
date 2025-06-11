import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code, BookOpen, Award } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { education } from '../data/educationData';
import TimelineItem from '../components/TimelineItem';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About: React.FC = () => {
  const [statsRef, statsControls, statsInView] = useScrollAnimation();
  const [educationRef, educationControls, educationInView] = useScrollAnimation();

  const stats = [
    { label: 'AI Projects', value: 5, icon: <Brain className="h-6 w-6" /> },
    { label: 'Coding Hours', value: 100, icon: <Code className="h-6 w-6" /> },
    { label: 'Courses Completed', value: 15, icon: <BookOpen className="h-6 w-6" /> },
    { label: 'Achievements', value: 5, icon: <Award className="h-6 w-6" /> }
  ];

  return (
    <section id="about" className="bg-gray-50 py-20 dark:bg-dark-900/50 md:py-32">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="About Me" 
          subtitle="Get to know me better and my academic journey in the field of Artificial Intelligence"
        />
        
        <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="mb-6 text-2xl font-bold text-dark-800 dark:text-white">My Journey</h3>
            
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                Hello! I'm Tharun, a passionate second-year B.Sc Artificial Intelligence student at KMG College of Arts and Science. My fascination with AI began when I realized how it could revolutionize the way we solve complex problems.
              </p>
              <p>
                I specialize in machine learning, deep learning, and data science, with a particular interest in computer vision and natural language processing. My academic journey has equipped me with strong foundations in mathematics, statistics, and programming.
              </p>
              <p>
                Outside of academics, I enjoy participating in hackathons, contributing to open-source projects, and constantly learning about the latest advancements in AI. I believe that artificial intelligence has the potential to address some of humanity's most pressing challenges.
              </p>
              <p>
                My goal is to develop innovative AI solutions that make a positive impact on society. I'm always open to collaborating on interesting projects and learning from others in the field.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            ref={statsRef}
            animate={statsControls}
            initial="hidden"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  staggerChildren: 0.1,
                }
              }
            }}
          >
            <h3 className="mb-6 text-2xl font-bold text-dark-800 dark:text-white">My Stats</h3>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center justify-center rounded-lg bg-white p-6 shadow-md dark:bg-dark-800"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                >
                  <motion.div
                    className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-primary-50 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400"
                    initial={{ scale: 0 }}
                    animate={statsInView ? { scale: 1, rotate: [0, 10, 0] } : { scale: 0 }}
                    transition={{ delay: index * 0.1 + 0.2, type: 'spring', stiffness: 200 }}
                  >
                    {stat.icon}
                  </motion.div>
                  
                  <motion.div
                    className="mb-1 text-2xl font-bold text-dark-800 dark:text-white"
                    initial={{ opacity: 0 }}
                    animate={statsInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: index * 0.1 + 0.4, duration: 0.5 }}
                  >
                    {stat.value}+
                  </motion.div>
                  
                  <motion.div
                    className="text-center text-sm text-gray-500 dark:text-gray-400"
                    initial={{ opacity: 0 }}
                    animate={statsInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
                  >
                    {stat.label}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        
        <motion.div
          ref={educationRef}
          className="mt-24"
          animate={educationControls}
          initial="hidden"
          variants={{
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1,
              transition: { staggerChildren: 0.2 }
            }
          }}
        >
          <h3 className="mb-10 text-center text-2xl font-bold text-dark-800 dark:text-white">Education Timeline</h3>
          
          <div className="relative mx-auto max-w-3xl pl-6">
            {education.map((item, index) => (
              <TimelineItem
                key={item.id}
                title={item.degree}
                subtitle={item.institution}
                period={item.period}
                location={item.location}
                description={item.description}
                isLast={index === education.length - 1}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
