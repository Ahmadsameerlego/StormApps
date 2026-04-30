import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { servicesData } from '../../data/services';
import { useNavigate } from 'react-router';
import { ArrowRight, Smartphone, Globe, BrainCircuit, Palette } from 'lucide-react';

const icons = {
  Smartphone,
  Globe,
  BrainCircuit,
  Palette
};

export function ServicesPage() {
  const { t } = useLanguage();
  const navigate = useNavigate();

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
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <span className="inline-block text-sm uppercase tracking-[0.3em] text-[var(--color-accent)] mb-6 font-medium">
            {t('services.subtitle')}
          </span>
          <h1 className="text-4xl lg:text-7xl font-bold mb-8">
            {t('services.title')}
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {servicesData.map((service, index) => {
            const Icon = icons[service.iconName];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group relative p-8 lg:p-12 rounded-3xl bg-card border border-border overflow-hidden transition-all duration-500 hover:border-[var(--color-accent)]/50"
              >
                {/* Glow Effect */}
                <div className={`absolute -top-24 -right-24 w-64 h-64 blur-[100px] opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br ${service.gradient}`} />
                
                <div className="relative z-10 space-y-8">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br ${service.gradient} text-white shadow-lg shadow-[var(--color-accent)]/20`}>
                    <Icon className="w-8 h-8" />
                  </div>

                  <div className="space-y-4">
                    <h2 className="text-3xl font-bold">{t(service.titleKey)}</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {t(service.descKey)}
                    </p>
                  </div>

                  <button
                    onClick={() => navigate(`/services/${service.id}`)}
                    className="inline-flex items-center gap-3 text-[var(--color-accent)] font-bold group/btn transition-all duration-300"
                  >
                    <span className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-current after:transition-all group-hover/btn:after:w-full">
                      Learn More
                    </span>
                    <ArrowRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-2" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
