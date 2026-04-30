import { useParams, useNavigate } from 'react-router';
import { motion, useScroll, useTransform } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { projectsData } from '../../data/projects';
import { ArrowLeft, ArrowUpRight, Globe, Calendar, User, Layers, CheckCircle2 } from 'lucide-react';
import { useEffect, useRef } from 'react';

export function ProjectCaseStudyPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t, direction } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  
  const project = projectsData.find(p => p.key === id);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <button 
            onClick={() => navigate('/projects')}
            className="text-[var(--color-accent)] hover:underline"
          >
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  const nextProject = projectsData[(projectsData.indexOf(project) + 1) % projectsData.length];

  return (
    <div ref={containerRef} className="relative min-h-screen bg-background overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 -z-10 opacity-[0.015] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20 px-6 lg:px-12">
        <motion.div 
          style={{ opacity, scale, y }}
          className="max-w-7xl mx-auto w-full text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <button
              onClick={() => navigate(-1)}
              className="group inline-flex items-center gap-2 text-sm uppercase tracking-widest text-muted-foreground hover:text-[var(--color-accent)] transition-colors"
            >
              <ArrowLeft className={`w-4 h-4 transition-transform group-hover:${direction === 'rtl' ? 'translate-x-1' : '-translate-x-1'}`} />
              {direction === 'rtl' ? 'العودة' : 'Back'}
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-block px-4 py-1.5 rounded-full border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/5 text-[var(--color-accent)] text-sm font-medium mb-6"
          >
            {t(`projects.${project.key}.category`)}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl lg:text-8xl font-bold mb-12 tracking-tight"
          >
            {t(`projects.${project.key}.title`)}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={`relative ${project.category === 'app' ? 'aspect-[4/5] md:aspect-[16/9] lg:aspect-[21/9]' : 'aspect-[16/9] lg:aspect-[21/9]'} rounded-3xl overflow-hidden border border-border group shadow-2xl shadow-[var(--color-accent)]/10 bg-secondary/20`}
          >
            <div 
              className={`absolute inset-0 ${project.category === 'app' ? 'bg-contain bg-no-repeat' : 'bg-cover'} bg-center transition-transform duration-1000 group-hover:scale-105`}
              style={{ backgroundImage: `url(${project.images[0]})` }}
            />
            {project.category === 'app' && (
              <div 
                className="absolute inset-0 -z-10 blur-2xl opacity-30 scale-110"
                style={{ backgroundImage: `url(${project.images[0]})`, backgroundSize: 'cover' }}
              />
            )}
            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`} />
            <div className="absolute inset-0 bg-black/20" />
          </motion.div>
        </motion.div>

        {/* Ambient Glows */}
        <div className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px] -z-10 opacity-10 bg-gradient-to-br ${project.gradient}`} />
        <div className={`absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-[120px] -z-10 opacity-10 bg-gradient-to-br ${project.gradient}`} />
      </section>

      {/* Project Info Grid */}
      <section className="py-24 px-6 lg:px-12 border-y border-border/50 bg-secondary/20">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            { icon: User, label: direction === 'rtl' ? 'العميل' : 'Client', value: t(`projects.${project.key}.client`) },
            { icon: Layers, label: direction === 'rtl' ? 'الدور' : 'Role', value: t(`projects.${project.key}.role`) },
            { icon: Calendar, label: direction === 'rtl' ? 'المدة' : 'Timeline', value: t(`projects.${project.key}.timeline`) },
            { icon: Globe, label: direction === 'rtl' ? 'الرابط' : 'Live Site', value: 'Visit Website', url: project.url },
          ].map((info, i) => (
            <motion.div
              key={info.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col gap-3"
            >
              <div className="flex items-center gap-2 text-[var(--color-accent)]">
                <info.icon className="w-5 h-5" />
                <span className="text-xs uppercase tracking-widest font-bold opacity-70">{info.label}</span>
              </div>
              {info.url ? (
                <a 
                  href={info.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-lg font-medium hover:text-[var(--color-accent)] transition-colors flex items-center gap-2 group/link"
                >
                  {info.value}
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1" />
                </a>
              ) : (
                <span className="text-lg font-medium">{info.value}</span>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* The Story / Content */}
      <section className="py-32 px-6 lg:px-12 max-w-7xl mx-auto space-y-32">
        {/* Challenge & Solution */}
        <div className="grid lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: direction === 'rtl' ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-block text-[var(--color-accent)] font-bold tracking-tighter text-sm uppercase">01. {direction === 'rtl' ? 'التحدي' : 'The Challenge'}</div>
            <h2 className="text-3xl lg:text-5xl font-bold leading-tight">{direction === 'rtl' ? 'ما الذي واجهناه؟' : 'The Problem We Solved'}</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {t(`projects.${project.key}.challenge`)}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: direction === 'rtl' ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-block text-[var(--color-accent)] font-bold tracking-tighter text-sm uppercase">02. {direction === 'rtl' ? 'الحل' : 'Our Solution'}</div>
            <h2 className="text-3xl lg:text-5xl font-bold leading-tight">{direction === 'rtl' ? 'نهج العاصفة' : 'The Storm Approach'}</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {t(`projects.${project.key}.solution`)}
            </p>
          </motion.div>
        </div>

        {/* Results Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden p-12 lg:p-20 border border-border bg-gradient-to-br from-secondary/30 to-background"
        >
          <div className={`absolute top-0 right-0 w-64 h-64 blur-3xl opacity-20 bg-gradient-to-br ${project.gradient}`} />
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-center gap-3 text-[var(--color-accent)] font-bold text-sm uppercase tracking-widest">
                <CheckCircle2 className="w-5 h-5" />
                {direction === 'rtl' ? 'النتائج والنجاح' : 'Results & Impact'}
              </div>
              <h2 className="text-4xl lg:text-6xl font-bold tracking-tight leading-none">
                {direction === 'rtl' ? 'تحقيق الفرق الحقيقي' : 'Making a Real Difference'}
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                {t(`projects.${project.key}.results`)}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {project.technologies.map((tech, i) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-2xl bg-background/50 border border-border backdrop-blur-sm text-center"
                >
                  <div className="text-[var(--color-accent)] font-bold text-xl mb-1">{tech}</div>
                  <div className="text-xs uppercase tracking-widest opacity-50">{direction === 'rtl' ? 'تقنية مستخدمة' : 'Technology'}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Image Gallery */}
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-5xl font-bold">{direction === 'rtl' ? 'نظرة داخلية' : 'A Closer Look'}</h2>
            <p className="text-muted-foreground">{direction === 'rtl' ? 'استكشاف لقطات الشاشات وتجربة المستخدم' : 'Exploring snapshots of the experience we built'}</p>
          </div>
          <div className={`grid ${project.category === 'app' ? 'grid-cols-2 lg:grid-cols-3' : 'grid-cols-1 md:grid-cols-2'} gap-8`}>
            {project.images.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: (index % 3) * 0.1 }}
                className={`relative ${project.category === 'app' ? 'aspect-[9/16]' : 'aspect-[16/10]'} rounded-2xl overflow-hidden border border-border group bg-secondary/10`}
              >
                <img 
                  src={img} 
                  alt={`${project.key} screenshot ${index}`} 
                  className={`w-full h-full ${project.category === 'app' ? 'object-contain' : 'object-cover'} transition-transform duration-700 group-hover:scale-110`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
          
          {/* External Link CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center pt-12"
          >
            <a 
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-10 py-5 bg-[var(--color-accent)] text-[var(--color-accent-foreground)] font-bold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[var(--color-accent)]/20"
            >
              <span className="relative z-10 flex items-center gap-3">
                {direction === 'rtl' ? 'تصفح المشروع المباشر' : 'Visit Live Project'}
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Next Project Footer */}
      <section className="mt-32 border-t border-border bg-secondary/10">
        <button
          onClick={() => navigate(`/projects/${nextProject.key}`)}
          className="w-full py-32 px-6 group flex flex-col items-center justify-center gap-8 transition-colors hover:bg-secondary/20"
        >
          <span className="text-sm uppercase tracking-widest text-muted-foreground group-hover:text-[var(--color-accent)] transition-colors">
            {direction === 'rtl' ? 'المشروع التالي' : 'Next Project'}
          </span>
          <h2 className="text-4xl lg:text-7xl font-bold tracking-tighter group-hover:scale-105 transition-transform duration-500">
            {t(`projects.${nextProject.key}.title`)}
          </h2>
          <div className="p-4 rounded-full border border-border group-hover:border-[var(--color-accent)] group-hover:text-[var(--color-accent)] transition-colors">
            <ArrowUpRight className="w-8 h-8" />
          </div>
        </button>
      </section>
    </div>
  );
}
