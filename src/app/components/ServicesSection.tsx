import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { Smartphone, Globe, BrainCircuit, Palette, ArrowRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { useNavigate } from 'react-router';
import { servicesData } from '../../data/services';

const icons = {
  Smartphone,
  Globe,
  BrainCircuit,
  Palette
};

export function ServicesSection() {
  const { t, direction } = useLanguage();
  const { ref, isInView } = useInView({ threshold: 0.2 });
  const navigate = useNavigate();

  return (
    <section id="services" ref={ref} className="relative py-32 lg:py-40 overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[var(--color-accent)] opacity-[0.02] blur-[150px]"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
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
            {t('services.subtitle')}
          </motion.span>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            {t('services.title')}
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {servicesData.map((service, index) => {
            const Icon = icons[service.iconName];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 60 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative cursor-pointer"
                onClick={() => navigate(`/services/${service.id}`)}
              >
                {/* Card */}
                <div className="relative h-full p-10 lg:p-12 rounded-2xl border border-border bg-card overflow-hidden transition-all duration-500 hover:border-[var(--color-accent)]/30">
                  {/* Hover Glow Effect */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br ${service.gradient}`} />

                  {/* Icon */}
                  <div className={`relative inline-flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 rounded-2xl mb-8 border border-border group-hover:border-[var(--color-accent)]/50 transition-all duration-500 bg-gradient-to-br ${service.gradient} text-white`}>
                    <Icon className="w-8 h-8 lg:w-10 lg:h-10 group-hover:scale-110 transition-transform duration-500" />
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-2xl lg:text-3xl font-semibold mb-4 group-hover:text-[var(--color-accent)] transition-colors duration-500">
                      {t(service.titleKey)}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-base lg:text-lg mb-8">
                      {t(service.descKey)}
                    </p>
                    
                    <div className="inline-flex items-center gap-2 text-[var(--color-accent)] font-bold group/btn">
                      <span>{direction === 'rtl' ? 'اكتشف المزيد' : 'Discover More'}</span>
                      <ArrowRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-2" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
