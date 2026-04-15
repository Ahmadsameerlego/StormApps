import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { useInView } from '../hooks/useInView';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    key: '1',
    gradient: 'from-[var(--color-neon-blue)] to-[var(--color-neon-violet)]',
    image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },
  {
    key: '2',
    gradient: 'from-[var(--color-gold)] to-[var(--color-neon-blue)]',
    image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  },
  {
    key: '3',
    gradient: 'from-[var(--color-neon-violet)] to-[var(--color-gold)]',
    image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  },
];

export function ProjectsSection() {
  const { t } = useLanguage();
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section id="projects" ref={ref} className="relative py-32 lg:py-40 overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 -z-10 opacity-[0.015]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
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
            {t('projects.subtitle')}
          </motion.span>
          <h2 className="text-4xl lg:text-6xl font-bold">
            {t('projects.title')}
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-12 lg:space-y-20 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.key}
              initial={{ opacity: 0, y: 80 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Project Image/Visual */}
                <motion.div
                  className={`relative lg:col-span-7 ${index % 2 === 1 ? 'lg:order-2' : ''}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-border">
                    {/* Placeholder gradient background */}
                    <div 
                      className="absolute inset-0"
                      style={{ background: project.image }}
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Hover Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    />

                    {/* View Project Button on Hover */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    >
                      <div className="px-8 py-4 rounded-full bg-background/90 backdrop-blur-sm border border-border flex items-center gap-3 font-medium">
                        <span>View Project</span>
                        <ArrowUpRight className="w-5 h-5" />
                      </div>
                    </motion.div>
                  </div>

                  {/* Glow Effect */}
                  <motion.div
                    className="absolute -inset-4 rounded-3xl opacity-0 group-hover:opacity-100 blur-3xl -z-10 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(135deg, ${project.gradient}`,
                      opacity: 0.1,
                    }}
                  />
                </motion.div>

                {/* Project Info */}
                <div className={`lg:col-span-5 space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 1 ? 50 : -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
                  >
                    <span className="text-sm uppercase tracking-[0.2em] text-[var(--color-accent)] font-medium">
                      {t(`projects.${project.key}.category`)}
                    </span>
                  </motion.div>

                  <motion.h3
                    initial={{ opacity: 0, x: index % 2 === 1 ? 50 : -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                    className="text-3xl lg:text-4xl font-bold group-hover:text-[var(--color-accent)] transition-colors duration-500"
                  >
                    {t(`projects.${project.key}.title`)}
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, x: index % 2 === 1 ? 50 : -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
                    className="text-lg text-muted-foreground leading-relaxed"
                  >
                    {t(`projects.${project.key}.description`)}
                  </motion.p>

                  <motion.button
                    initial={{ opacity: 0, x: index % 2 === 1 ? 50 : -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
                    whileHover={{ x: 5 }}
                    className="group/btn inline-flex items-center gap-2 text-[var(--color-accent)] font-medium"
                  >
                    <span>Explore Case Study</span>
                    <ArrowUpRight className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
