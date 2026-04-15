import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { ChevronDown } from 'lucide-react';

export function HeroSection() {
  const { t, language } = useLanguage();

  const scrollToNext = () => {
    const element = document.getElementById('services');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Flowing Energy Lines */}
        <motion.div
          className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent opacity-20"
          animate={{
            x: ['-100%', '100%'],
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        <motion.div
          className="absolute top-1/2 right-0 w-full h-[1px] bg-gradient-to-l from-transparent via-[var(--color-neon-blue)] to-transparent opacity-20"
          animate={{
            x: ['100%', '-100%'],
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'linear',
            delay: 2,
          }}
        />
        <motion.div
          className="absolute top-3/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--color-neon-violet)] to-transparent opacity-20"
          animate={{
            x: ['-100%', '100%'],
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'linear',
            delay: 4,
          }}
        />

        {/* Glow Effects */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[var(--color-accent)] opacity-5 blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[var(--color-neon-blue)] opacity-5 blur-[120px]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.08, 0.05],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-12 py-32 lg:py-0">
        <div className="max-w-5xl mx-auto text-center">
          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8"
          >
            <span className="inline-block px-6 py-2 rounded-full border border-[var(--color-accent)]/30 text-[var(--color-accent)] text-sm tracking-[0.2em] uppercase font-medium backdrop-blur-sm">
              {t('hero.subtitle')}
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className={`mb-8 ${
              language === 'ar' 
                ? 'text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold' 
                : 'text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold'
            }`}
            style={{
              fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Syne, sans-serif',
              lineHeight: '1.1',
              letterSpacing: language === 'ar' ? 'normal' : '-0.02em',
            }}
          >
            <span className="relative inline-block">
              {t('hero.title').split(' ').map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="inline-block mx-2 lg:mx-3"
                >
                  {word}
                </motion.span>
              ))}
              
              {/* Glowing Accent */}
              <motion.div
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-[var(--color-accent)] rounded-full"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
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
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            {t('hero.description')}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <motion.button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-10 py-4 rounded-full overflow-hidden"
            >
              {/* Button Background with Animation */}
              <motion.div
                className="absolute inset-0 bg-[var(--color-accent)]"
                whileHover={{
                  boxShadow: '0 0 40px rgba(212, 175, 55, 0.4)',
                }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Shine Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
              
              <span className="relative z-10 font-medium text-[var(--color-accent-foreground)] tracking-wide">
                {t('hero.cta')}
              </span>
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToNext}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 group cursor-pointer"
      >
        <span className="text-xs uppercase tracking-widest text-muted-foreground">
          {t('hero.scroll')}
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-5 h-5 text-[var(--color-accent)]" />
        </motion.div>
      </motion.button>
    </section>
  );
}
