import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { useInView } from '../hooks/useInView';

const technologies = [
  { name: 'React Native', category: 'Mobile' },
  { name: 'Swift / SwiftUI', category: 'Mobile' },
  { name: 'Kotlin', category: 'Mobile' },
  { name: 'React', category: 'Web' },
  { name: 'Next.js', category: 'Web' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Python', category: 'AI/ML' },
  { name: 'TensorFlow', category: 'AI/ML' },
  { name: 'GraphQL', category: 'API' },
  { name: 'AWS', category: 'Cloud' },
  { name: 'Figma', category: 'Design' },
  { name: 'Three.js', category: 'Web' },
];

export function TechSection() {
  const { t } = useLanguage();
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section ref={ref} className="relative py-32 lg:py-40 overflow-hidden bg-secondary/20">
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
            {t('tech.subtitle')}
          </motion.span>
          <h2 className="text-4xl lg:text-6xl font-bold">
            {t('tech.title')}
          </h2>
        </motion.div>

        {/* Technologies - Floating Cards Layout */}
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8, y: 40 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.05,
                  type: 'spring',
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.1, 
                  y: -8,
                  transition: { duration: 0.2 }
                }}
                className="group relative"
              >
                <div className="relative px-8 py-4 rounded-2xl border border-border bg-card hover:border-[var(--color-accent)]/50 transition-all duration-500 overflow-hidden">
                  {/* Background Glow on Hover */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: 'radial-gradient(circle at center, var(--color-accent)10 0%, transparent 70%)',
                    }}
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="text-sm uppercase tracking-wide font-medium group-hover:text-[var(--color-accent)] transition-colors duration-500">
                      {tech.name}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1 opacity-60">
                      {tech.category}
                    </div>
                  </div>

                  {/* Shimmer Effect */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.8 }}
                    style={{
                      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
                    }}
                  />
                </div>

                {/* External Glow */}
                <motion.div
                  className="absolute -inset-2 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl -z-10 transition-opacity duration-500"
                  style={{
                    background: 'var(--color-accent)',
                    opacity: 0.1,
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Note */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center text-muted-foreground mt-16 lg:mt-20 max-w-3xl mx-auto leading-relaxed"
        >
          We don't just use technology — we master it. Our team stays at the cutting edge, 
          continuously learning and innovating to deliver solutions that set new standards.
        </motion.p>
      </div>
    </section>
  );
}
