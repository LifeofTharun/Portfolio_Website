import React from 'react';
import { motion } from 'framer-motion';
import { CalendarClock, MapPin } from 'lucide-react';

interface TimelineItemProps {
  title: string;
  subtitle: string;
  period: string;
  location: string;
  description: string;
  isLast?: boolean;
  index: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  subtitle,
  period,
  location,
  description,
  isLast = false,
  index,
}) => {
  return (
    <motion.div
      className="relative flex items-start gap-x-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="absolute left-0 top-0 flex h-6 w-6 items-center justify-center">
        <motion.div
          className="h-3 w-3 rounded-full bg-primary-600 dark:bg-primary-500"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
        />
      </div>
      
      {!isLast && (
        <motion.div
          className="absolute left-3 top-6 -ml-px h-full w-0.5 bg-gray-200 dark:bg-dark-700"
          initial={{ height: 0 }}
          whileInView={{ height: '100%' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
        />
      )}

      <div className="ml-12 space-y-3 pb-12">
        <div>
          <h3 className="text-lg font-semibold text-dark-800 dark:text-white">{title}</h3>
          <p className="text-md mt-1 font-medium text-gray-600 dark:text-gray-300">{subtitle}</p>
          
          <div className="mt-2 flex flex-wrap items-center gap-x-6 gap-y-1 text-sm text-gray-500 dark:text-gray-400">
            <span className="flex items-center gap-x-1">
              <CalendarClock className="h-4 w-4 text-primary-500" />
              {period}
            </span>
            
            <span className="flex items-center gap-x-1">
              <MapPin className="h-4 w-4 text-primary-500" />
              {location}
            </span>
          </div>
        </div>
        
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
      </div>
    </motion.div>
  );
};

export default TimelineItem;