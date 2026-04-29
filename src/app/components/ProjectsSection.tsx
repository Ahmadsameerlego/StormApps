import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { useInView } from '../hooks/useInView';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { projectsData } from '../../data/projects';
import { useNavigate } from 'react-router';

function ImageSlider({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [images]);

  if (!images || images.length === 0) return null;

  return (
    <div className="absolute inset-0 overflow-hidden bg-background">
      <AnimatePresence>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="absolute inset-0"
          style={{
            backgroundImage: images[currentIndex].startsWith('linear-gradient') || images[currentIndex].startsWith('radial-gradient')
              ? images[currentIndex] 
              : `url(${images[currentIndex]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </AnimatePresence>
    </div>
  );
}

export function ProjectsSection() {
  const { t } = useLanguage();
  const { ref, isInView } = useInView({ threshold: 0.2 });
  const navigate = useNavigate();

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
        <div className="space-y-12 lg:space-y-20 max-w-7xl mx-auto mb-20">
          {projectsData.slice(0, 4).map((project, index) => (
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
                    {/* Image Slider */}
                    <ImageSlider images={project.images} />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Hover Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    />

                    {/* View Project Button on Hover */}
                    <motion.a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    >
                      <div className="px-8 py-4 rounded-full bg-background/90 backdrop-blur-sm border border-border flex items-center gap-3 font-medium">
                        <span>View Project</span>
                        <ArrowUpRight className="w-5 h-5" />
                      </div>
                    </motion.a>
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

                  {/* Technologies */}
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 1 ? 50 : -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.55 + index * 0.2 }}
                    className="flex flex-wrap gap-2 pt-2"
                  >
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-4 py-1.5 text-sm font-medium bg-secondary/50 text-secondary-foreground rounded-full border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </motion.div>

                  <motion.button
                    initial={{ opacity: 0, x: index % 2 === 1 ? 50 : -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
                    whileHover={{ x: 5 }}
                    onClick={() => window.open(project.url, '_blank')}
                    className="group/btn inline-flex items-center gap-2 text-[var(--color-accent)] font-medium pt-4"
                  >
                    <span>Explore Case Study</span>
                    <ArrowUpRight className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center"
        >
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              navigate('/projects');
            }}
            className="group relative px-8 py-4 bg-transparent border-2 border-[var(--color-accent)] text-foreground font-medium rounded-full overflow-hidden transition-all duration-300 hover:text-[var(--color-accent-foreground)]"
          >
            <div className="absolute inset-0 bg-[var(--color-accent)] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out -z-10" />
            <span className="flex items-center gap-3">
              {t('projects.showAll')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
