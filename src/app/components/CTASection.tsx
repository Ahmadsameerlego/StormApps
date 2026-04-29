import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { useInView } from '../hooks/useInView';
import { ArrowRight, Mail } from 'lucide-react';

export function CTASection() {
  const { t } = useLanguage();
  const { ref, isInView } = useInView({ threshold: 0.3 });

  return (
    <section id="contact" ref={ref} className="relative py-32 lg:py-40 overflow-hidden">
      {/* Dramatic Background */}
      <div className="absolute inset-0 -z-10">
        {/* Multiple Gradient Orbs */}
        <motion.div
          className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-[var(--color-neon-blue)] opacity-[0.05] blur-[150px]"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full bg-[var(--color-neon-violet)] opacity-[0.05] blur-[150px]"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[var(--color-accent)] opacity-[0.03] blur-[150px]"
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="relative max-w-5xl mx-auto">
          {/* Main CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="relative rounded-3xl lg:rounded-[3rem] overflow-hidden border border-border bg-card/50 backdrop-blur-xl p-12 lg:p-20"
          >
            {/* Inner Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)]/5 via-transparent to-[var(--color-neon-blue)]/5" />

            {/* Content */}
            <div className="relative z-10 text-center">
              {/* Title */}
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl lg:text-6xl xl:text-7xl font-bold mb-6 lg:mb-8"
              >
                {t('cta.title')}
              </motion.h2>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg lg:text-xl text-muted-foreground mb-12 lg:mb-16 max-w-3xl mx-auto leading-relaxed"
              >
                {t('cta.subtitle')}
              </motion.p>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-6"
              >
                <motion.a
                  href="mailto:emad@stoormapps.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-12 py-5 rounded-full overflow-hidden inline-flex items-center gap-3"
                >
                  {/* Animated Background */}
                  <motion.div
                    className="absolute inset-0 bg-[var(--color-accent)]"
                    whileHover={{
                      boxShadow: '0 0 60px rgba(212, 175, 55, 0.5)',
                    }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Shine Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />

                  <Mail className="w-5 h-5 relative z-10 text-[var(--color-accent-foreground)]" />
                  <span className="relative z-10 font-semibold text-lg text-[var(--color-accent-foreground)]">
                    {t('cta.button')}
                  </span>
                  <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300 text-[var(--color-accent-foreground)]" />
                </motion.a>

                {/* Secondary Action - Email Direct */}
                <motion.a
                  href="mailto:emad@stoormapps.com"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="text-muted-foreground hover:text-[var(--color-accent)] transition-colors duration-300 font-medium"
                >
                  emad@stoormapps.com
                </motion.a>
              </motion.div>

              {/* Note */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-sm text-muted-foreground mt-12 max-w-2xl mx-auto leading-relaxed"
              >
                {t('cta.note')}
              </motion.p>
            </div>

            {/* Decorative Elements */}
            <motion.div
              className="absolute top-0 left-0 w-32 h-32 rounded-full bg-[var(--color-accent)] opacity-10 blur-3xl"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className="absolute bottom-0 right-0 w-32 h-32 rounded-full bg-[var(--color-neon-blue)] opacity-10 blur-3xl"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 2,
              }}
            />
          </motion.div>

          {/* External Glow */}
          <motion.div
            className="absolute -inset-8 rounded-[4rem] opacity-0 -z-10 blur-3xl"
            animate={isInView ? {
              opacity: [0.1, 0.2, 0.1],
            } : {}}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              background: 'linear-gradient(135deg, var(--color-accent), var(--color-neon-blue), var(--color-neon-violet))',
            }}
          />
        </div>
      </div>
    </section>
  );
}
