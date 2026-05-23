import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import arrowLogo from '../images/arrow.png';

export function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] bg-background flex items-center justify-center"
        >
          {/* Animated Logo/Brand */}
          <div className="relative">
            {/* Main Text */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              {/* <motion.h1
                className="text-5xl lg:text-7xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Storm
                <motion.span
                  className="inline-block text-[var(--color-accent)] mx-3"
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                >
                  ⚡
                </motion.span>
                Apps
              </motion.h1> */}

              <img src={arrowLogo} alt="ARROW TECH" width={160} height={100} className="w-[160px] h-[100px] object-contain" />


              {/* Loading Bar */}
              <div className="w-48 h-1 mx-auto bg-secondary rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-[var(--color-accent)] rounded-full"
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1.8, ease: 'easeInOut' }}
                />
              </div>
            </motion.div>

            {/* Glow Effect */}
            <motion.div
              className="absolute inset-0 -z-10 blur-3xl"
              animate={{
                opacity: [0.2, 0.4, 0.2],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              style={{
                background: 'radial-gradient(circle, var(--color-accent) 0%, transparent 70%)',
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
