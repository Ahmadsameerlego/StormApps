import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { Mail, Phone, MapPin, Send, Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';

export function ContactPage() {
  const { t, direction } = useLanguage();

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h1 className="text-5xl lg:text-8xl font-bold mb-8 tracking-tighter">{t('contact.title')}</h1>
          <p className="text-2xl text-muted-foreground">{t('contact.subtitle')}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: direction === 'rtl' ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="p-8 lg:p-12 rounded-[2.5rem] bg-secondary/20 border border-border"
          >
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground px-1">{t('contact.form.name')}</label>
                  <input 
                    type="text" 
                    className="w-full px-6 py-4 rounded-2xl bg-background border border-border focus:border-[var(--color-accent)] outline-none transition-colors text-lg"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground px-1">{t('contact.form.email')}</label>
                  <input 
                    type="email" 
                    className="w-full px-6 py-4 rounded-2xl bg-background border border-border focus:border-[var(--color-accent)] outline-none transition-colors text-lg"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground px-1">{t('contact.form.subject')}</label>
                <input 
                  type="text" 
                  className="w-full px-6 py-4 rounded-2xl bg-background border border-border focus:border-[var(--color-accent)] outline-none transition-colors text-lg"
                  placeholder="Inquiry about..."
                />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground px-1">{t('contact.form.message')}</label>
                <textarea 
                  rows={5}
                  className="w-full px-6 py-4 rounded-2xl bg-background border border-border focus:border-[var(--color-accent)] outline-none transition-colors text-lg resize-none"
                  placeholder="How can we help you?"
                />
              </div>
              <button className="w-full py-6 rounded-2xl bg-[var(--color-accent)] text-[var(--color-accent-foreground)] font-bold text-xl flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform">
                <span>{t('contact.form.send')}</span>
                <Send className="w-6 h-6" />
              </button>
            </form>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: direction === 'rtl' ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-12"
          >
            <div className="grid sm:grid-cols-2 gap-8">
              {[
                { icon: Mail, label: t('contact.info.email'), val: t('footer.email') },
                { icon: Phone, label: t('contact.info.phone'), val: '201013746111+' },
                { icon: MapPin, label: t('contact.info.address'), val: t('contact.info.address.val') },
                { icon: Instagram, label: t('contact.social.title'), val: '@Arrow Tech', isSocial: true }
              ].map((info, i) => (
                <div key={i} className="p-8 rounded-3xl bg-card border border-border space-y-4">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                    <info.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">{info.label}</div>
                    <div className="text-lg font-bold">{info.val}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Google Map */}
            <div className="rounded-[2.5rem] overflow-hidden border border-border h-80 relative grayscale contrast-125 invert-[0.05]">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3627.1411466294107!2d46.53766752379891!3d24.61881967808793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f1f005c724a87%3A0xcdea17f0ca74b00b!2z2K3ZiiDYuNmH2LHYqSDZhNio2YY!5e0!3m2!1sar!2seg!4v1777509967629!5m2!1sar!2seg" width="600" height="450" style={{ border: 0 }} allowFullScreen loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
