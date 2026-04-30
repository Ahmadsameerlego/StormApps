import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { Mail, Linkedin, Instagram, Facebook, X, Youtube } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router';
import logo from '@/assets/storm_logo.png';

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/company/storm-apps/', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/stoormapps/', label: 'Instagram' },
    { icon: Facebook, href: 'https://www.facebook.com/stoormapps', label: 'Facebook' },
    { icon: X, href: 'https://x.com/stoormapps', label: 'X' },
    { icon: Youtube, href: 'https://www.youtube.com/@StormApps2030', label: 'YouTube' },
  ];

  const location = useLocation();
  const navigate = useNavigate();

  const handleLinkClick = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { id: 'home', label: t('nav.home'), path: '/' },
    { id: 'services', label: t('nav.services'), path: '/services' },
    { id: 'projects', label: t('nav.projects'), path: '/projects' },
    { id: 'about', label: t('nav.about'), path: '/about' },
    { id: 'contact', label: t('nav.contact'), path: '/contact' },
  ];

  return (
    <footer className="relative border-t border-border overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-[var(--color-accent)] opacity-[0.02] blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Logo */}
              {/* <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                Storm
                <span className="text-[var(--color-accent)] mx-2">⚡</span>
                Apps
              </h3> */}

              <img src={logo} alt="Storm Apps" width={160} height={100} className="w-[160px] h-[100px] object-contain" />


              <p className="text-muted-foreground text-lg mb-8 max-w-md leading-relaxed">
                {t('footer.tagline')}
              </p>

              {/* Contact */}
              <div className="space-y-4">
                <a
                  href="mailto:emad@stoormapps.com"
                  className="group inline-flex items-center gap-3 text-muted-foreground hover:text-[var(--color-accent)] transition-colors duration-300"
                >
                  <Mail className="w-5 h-5" />
                  <span className="font-medium">{t('footer.email')}</span>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold mb-6 text-sm uppercase tracking-[0.2em]">
                Quick Links
              </h4>
              <ul className="space-y-4">
                {quickLinks.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => handleLinkClick(item.path)}
                      className="text-muted-foreground hover:text-[var(--color-accent)] transition-colors duration-300 text-left"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Legal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold mb-6 text-sm uppercase tracking-[0.2em]">
                Legal
              </h4>
              <ul className="space-y-4">
                {['Privacy', 'Terms', 'Cookies'].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-[var(--color-accent)] transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Social Links */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold mb-6 text-sm uppercase tracking-[0.2em]">
                Follow Us
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -4 }}
                      whileTap={{ scale: 0.95 }}
                      className="group relative w-12 h-12 rounded-full border border-border hover:border-[var(--color-accent)] flex items-center justify-center transition-all duration-300"
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5 text-muted-foreground group-hover:text-[var(--color-accent)] transition-colors duration-300" />

                      {/* Hover Glow */}
                      <motion.div
                        className="absolute inset-0 rounded-full bg-[var(--color-accent)] opacity-0 group-hover:opacity-10 blur-lg transition-opacity duration-300"
                      />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-border"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} Storm Apps. {t('footer.rights')}.
            </p>

            <motion.div
              className="flex items-center gap-2"
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <span className="text-sm text-muted-foreground">
                Crafted with
              </span>
              <motion.span
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="text-[var(--color-accent)]"
              >
                ⚡
              </motion.span>
              <span className="text-sm text-muted-foreground">
                by Storm Apps
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
