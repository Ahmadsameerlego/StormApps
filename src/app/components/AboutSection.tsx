import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { useInView } from '../hooks/useInView';

export function AboutSection() {
  const { t } = useLanguage();
  const { ref, isInView } = useInView({ threshold: 0.3 });

  return (
    <section id="about" ref={ref} className="relative py-32 lg:py-40 overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{
            background: 'radial-gradient(circle, var(--color-accent)08 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-16 lg:mb-24"
          >
            <h2 className="text-4xl lg:text-6xl font-bold text-center mb-8">
              {t('about.title')}
            </h2>
          </motion.div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mb-20"
          >
            <div className="relative">
              {/* Quote Marks */}
              <motion.div
                className="absolute -top-8 -left-4 lg:-left-12 text-8xl lg:text-9xl text-[var(--color-accent)] opacity-20 font-serif"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 0.2, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                "
              </motion.div>
              
              <p className="text-2xl lg:text-4xl font-medium text-center leading-relaxed relative z-10">
                {t('about.quote')}
              </p>
              
              <motion.div
                className="absolute -bottom-8 -right-4 lg:-right-12 text-8xl lg:text-9xl text-[var(--color-accent)] opacity-20 font-serif"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 0.2, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                "
              </motion.div>
            </div>

            {/* Accent Line */}
            <motion.div
              className="mx-auto mt-12 w-24 h-1 bg-[var(--color-accent)] rounded-full"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <motion.div
                className="absolute inset-0 bg-[var(--color-accent)] rounded-full blur-xl"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </motion.div>
          </motion.div>

          {/* Content Paragraphs */}
          <div className="space-y-8 lg:space-y-10">
            {['text1', 'text2', 'text3'].map((key, index) => (
              <motion.p
                key={key}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
                className="text-lg lg:text-xl text-muted-foreground leading-relaxed text-center lg:text-justify"
              >
                {t(`about.${key}`)}
              </motion.p>
            ))}
          </div>

          {/* Stats or Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mt-20 lg:mt-32"
          >
            {[
              { value: '50+', label: 'Elite Projects' },
              { value: '15+', label: 'Years Combined' },
              { value: '100%', label: 'Excellence' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                className="text-center group"
              >
                <div className="relative inline-block">
                  <motion.div
                    className="text-5xl lg:text-6xl font-bold text-[var(--color-accent)] mb-3"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ 
                      duration: 0.6, 
                      delay: 1.6 + index * 0.1,
                      type: 'spring',
                      stiffness: 200
                    }}
                  >
                    {stat.value}
                  </motion.div>
                  
                  {/* Glow Effect */}
                  <motion.div
                    className="absolute inset-0 bg-[var(--color-accent)] opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500"
                  />
                </div>
                
                <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
