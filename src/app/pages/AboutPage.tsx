import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { Shield, Rocket, Heart, Star } from 'lucide-react';

export function AboutPage() {
  const { t, direction } = useLanguage();

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 lg:px-12 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[var(--color-accent)]/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-[var(--color-neon-violet)]/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: direction === 'rtl' ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <span className="inline-block text-sm uppercase tracking-[0.3em] text-[var(--color-accent)] font-bold">
              {direction === 'rtl' ? 'قصتنا' : 'Our Story'}
            </span>
            <h1 className="text-5xl lg:text-8xl font-bold tracking-tighter leading-none">
              {t('about.hero.title')}
            </h1>
            <p className="text-2xl text-muted-foreground leading-relaxed">
              {t('about.hero.subtitle')}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative aspect-square rounded-[3rem] overflow-hidden border border-border bg-card"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)]/20 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-64 h-64 border-2 border-dashed border-[var(--color-accent)]/30 rounded-full"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="text-8xl font-bold bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-neon-violet)] bg-clip-text text-transparent">
                     Storm
                   </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-32">
          {[
            { title: t('about.mission.title'), desc: t('about.mission.desc'), icon: Rocket },
            { title: t('about.vision.title'), desc: t('about.vision.desc'), icon: Star }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="p-12 rounded-[2.5rem] bg-secondary/20 border border-border space-y-6"
            >
              <item.icon className="w-12 h-12 text-[var(--color-accent)]" />
              <h2 className="text-4xl font-bold">{item.title}</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Values Section */}
        <div className="space-y-16">
          <div className="text-center">
            <h2 className="text-4xl lg:text-6xl font-bold">{t('about.values.title')}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((num) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: num * 0.1 }}
                className="p-8 rounded-3xl bg-card border border-border space-y-4 hover:border-[var(--color-accent)]/50 transition-colors"
              >
                <div className="text-5xl font-bold text-[var(--color-accent)]/20">0{num}</div>
                <h3 className="text-2xl font-bold">{t(`about.value.${num}.title`)}</h3>
                <p className="text-muted-foreground leading-relaxed">{t(`about.value.${num}.desc`)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
