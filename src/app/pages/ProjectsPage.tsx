import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { projectsData, ProjectCategory, Project } from '../../data/projects';
import { ArrowUpRight } from 'lucide-react';

function ImageSlider({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) return null;

  return (
    <div className="absolute inset-0 overflow-hidden bg-background">
      <AnimatePresence mode="sync">
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

export function ProjectsPage() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all');

  const filters: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: t('projects.filter.all') },
    { id: 'ecommerce', label: t('projects.filter.ecommerce') },
    { id: 'web', label: t('projects.filter.web') },
    { id: 'app', label: t('projects.filter.app') },
    { id: 'crm', label: t('projects.filter.crm') },
    { id: 'portfolio', label: t('projects.filter.portfolio') },
  ];

  const filteredProjects = projectsData.filter((project) => 
    activeFilter === 'all' ? true : project.category === activeFilter
  );

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 lg:px-12 relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 -z-10 opacity-[0.015]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-[1600px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <span className="inline-block text-sm uppercase tracking-[0.3em] text-[var(--color-accent)] mb-6 font-medium">
            {t('nav.allProjects')}
          </span>
          <h1 className="text-4xl lg:text-6xl font-bold mb-8">
            {t('projects.title')}
          </h1>
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mt-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                  activeFilter === filter.id
                    ? 'bg-[var(--color-accent)] text-[var(--color-accent-foreground)] border-[var(--color-accent)]'
                    : 'bg-transparent border-border text-muted-foreground hover:border-[var(--color-accent)] hover:text-foreground'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.key}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative flex flex-col h-full bg-card border border-border rounded-2xl overflow-hidden"
              >
                {/* Project Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <ImageSlider images={project.images} />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <motion.a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  >
                    <div className="px-6 py-3 rounded-full bg-background/90 backdrop-blur-sm border border-border flex items-center gap-2 font-medium">
                      <span>View Project</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </motion.a>
                </div>

                {/* Project Info */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="mb-4">
                    <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-accent)] font-medium">
                      {t(`projects.${project.key}.category`)}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-[var(--color-accent)] transition-colors duration-300">
                    {t(`projects.${project.key}.title`)}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-grow">
                    {t(`projects.${project.key}.description`)}
                  </p>

                  {/* Technologies */}
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech} 
                          className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full border border-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
