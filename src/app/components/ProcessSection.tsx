import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { useInView } from '../hooks/useInView';
import { Search, Palette, Code, Rocket } from 'lucide-react';

const processSteps = [
  { icon: Search, key: '1', color: 'var(--color-neon-blue)' },
  { icon: Palette, key: '2', color: 'var(--color-neon-violet)' },
  { icon: Code, key: '3', color: 'var(--color-gold)' },
  { icon: Rocket, key: '4', color: 'var(--color-neon-blue)' },
];

export function ProcessSection() {
  const { t } = useLanguage();
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section id="process" ref={ref} className="relative py-32 lg:py-40 overflow-hidden bg-secondary/30">
      {/* Flowing Line Background */}
      <div className="absolute inset-0 -z-10">
        <svg className="absolute w-full h-full opacity-[0.02]" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            d="M 0 300 Q 400 200 800 300 T 1600 300"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : {}}
            transition={{ duration: 3, ease: 'easeInOut' }}
          />
          <motion.path
            d="M 0 500 Q 400 400 800 500 T 1600 500"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : {}}
            transition={{ duration: 3, ease: 'easeInOut', delay: 0.5 }}
          />
        </svg>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-24"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block text-sm uppercase tracking-[0.3em] text-[var(--color-accent)] mb-6 font-medium"
          >
            {t('process.subtitle')}
          </motion.span>
          <h2 className="text-4xl lg:text-6xl font-bold">
            {t('process.title')}
          </h2>
        </motion.div>

        {/* Process Steps */}
        <div className="relative max-w-6xl mx-auto">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[2px] -translate-y-1/2">
            <motion.div
              className="h-full bg-gradient-to-r from-[var(--color-neon-blue)] via-[var(--color-neon-violet)] to-[var(--color-gold)] opacity-20"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 2, ease: 'easeInOut' }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.key}
                  initial={{ opacity: 0, y: 60 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="relative group"
                >
                  {/* Step Card */}
                  <div className="relative bg-card rounded-2xl p-8 border border-border hover:border-[var(--color-accent)]/30 transition-all duration-500">
                    {/* Step Number */}
                    <motion.div
                      className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-[var(--color-accent)] text-[var(--color-accent-foreground)] flex items-center justify-center font-bold text-lg"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {index + 1}
                    </motion.div>

                    {/* Icon */}
                    <motion.div
                      className="inline-flex items-center justify-center w-16 h-16 rounded-2xl border border-border mb-6 group-hover:border-[var(--color-accent)]/50 transition-all duration-500"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon 
                        className="w-8 h-8"
                        style={{ color: step.color }}
                      />
                      
                      {/* Icon Glow */}
                      <motion.div
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"
                        style={{ backgroundColor: step.color }}
                      />
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-xl lg:text-2xl font-semibold mb-4 group-hover:text-[var(--color-accent)] transition-colors duration-500">
                      {t(`process.${step.key}.title`)}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {t(`process.${step.key}.desc`)}
                    </p>

                    {/* Hover Glow */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 -z-10 blur-2xl transition-opacity duration-500"
                      style={{ 
                        background: `radial-gradient(circle at center, ${step.color}15 0%, transparent 70%)` 
                      }}
                    />
                  </div>

                  {/* Vertical Connector for Mobile */}
                  {index < processSteps.length - 1 && (
                    <motion.div
                      className="lg:hidden absolute left-1/2 -bottom-8 w-[2px] h-8 -translate-x-1/2"
                      initial={{ scaleY: 0 }}
                      animate={isInView ? { scaleY: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
                    >
                      <div className="w-full h-full bg-gradient-to-b from-[var(--color-accent)] to-transparent opacity-30" />
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
