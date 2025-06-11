import { useState, useEffect, useRef } from 'react';

interface UseAnimatedCounterProps {
  end: number;
  duration?: number;
  delay?: number;
  startOnView?: boolean;
  isInView?: boolean;
}

export const useAnimatedCounter = ({
  end,
  duration = 2000,
  delay = 0,
  startOnView = true,
  isInView = false,
}: UseAnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const timerRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    if (startOnView && !isInView) return;

    const timeoutId = setTimeout(() => {
      startTimeRef.current = Date.now();
      
      const step = () => {
        if (!startTimeRef.current) return;
        
        const elapsed = Date.now() - startTimeRef.current;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function - easeOutExpo
        const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        
        countRef.current = Math.floor(easeProgress * end);
        setCount(countRef.current);
        
        if (progress < 1) {
          timerRef.current = requestAnimationFrame(step);
        } else {
          setCount(end); // Ensure we end exactly at the target
        }
      };
      
      timerRef.current = requestAnimationFrame(step);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      if (timerRef.current) {
        cancelAnimationFrame(timerRef.current);
      }
    };
  }, [end, duration, delay, startOnView, isInView]);

  return count;
};
