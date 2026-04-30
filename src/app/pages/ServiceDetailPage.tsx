import { useParams, useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { servicesData } from '../../data/services';
import { ArrowLeft, Smartphone, Globe, BrainCircuit, Palette, CheckCircle2 } from 'lucide-react';
import { useEffect } from 'react';

const icons = {
  Smartphone,
  Globe,
  BrainCircuit,
  Palette
};

export function ServiceDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t, direction } = useLanguage();
  
  const service = servicesData.find(s => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <button onClick={() => navigate('/services')} className="text-[var(--color-accent)] hover:underline">
            Back to Services
          </button>
        </div>
      </div>
    );
  }

  const Icon = icons[service.iconName];

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/services')}
          className="flex items-center gap-2 text-muted-foreground hover:text-[var(--color-accent)] transition-colors mb-12"
        >
          <ArrowLeft className={`w-5 h-5 ${direction === 'rtl' ? 'rotate-180' : ''}`} />
          <span>{direction === 'rtl' ? 'العودة للخدمات' : 'Back to Services'}</span>
        </motion.button>

        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className={`w-20 h-20 rounded-3xl flex items-center justify-center bg-gradient-to-br ${service.gradient} text-white shadow-xl`}>
              <Icon className="w-10 h-10" />
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">{t(service.titleKey)}</h1>
            <p className="text-2xl text-muted-foreground leading-relaxed">
              {t(service.detailsKey)}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative p-12 rounded-[2.5rem] bg-secondary/20 border border-border overflow-hidden"
          >
            <div className={`absolute top-0 right-0 w-64 h-64 blur-[100px] opacity-20 bg-gradient-to-br ${service.gradient}`} />
            
            <h2 className="text-3xl font-bold mb-12">{direction === 'rtl' ? 'ماذا نقدم في هذه الخدمة؟' : 'What we offer in this service?'}</h2>
            
            <div className="space-y-10">
              {service.features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="mt-1">
                    <CheckCircle2 className="w-8 h-8 text-[var(--color-accent)]" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">{t(feature.titleKey)}</h3>
                    <p className="text-muted-foreground leading-relaxed">{t(feature.descKey)}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/contact')}
              className="w-full mt-16 py-6 rounded-2xl bg-[var(--color-accent)] text-[var(--color-accent-foreground)] font-bold text-xl shadow-lg shadow-[var(--color-accent)]/20"
            >
              {direction === 'rtl' ? 'اطلب الخدمة الآن' : 'Order This Service'}
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
