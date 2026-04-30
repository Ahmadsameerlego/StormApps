import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router';
import logo from '@/assets/storm_logo.png';


export function Navigation() {
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle cross-page scrolling
  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [location]);

  const navItems = [
    { id: 'home', label: t('nav.home'), path: '/' },
    { id: 'services', label: t('nav.services'), path: '/services' },
    { id: 'projects', label: t('nav.projects'), path: '/projects' },
    { id: 'about', label: t('nav.about'), path: '/about' },
    { id: 'contact', label: t('nav.contact'), path: '/contact' },
  ];

  const handleNavClick = (path: string) => {
    setMobileMenuOpen(false);
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-background/80 backdrop-blur-2xl border-b border-border' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <motion.button
            onClick={() => {
              navigate('/');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="relative group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* <h1 className="text-2xl lg:text-3xl font-bold tracking-tight relative">
              <span className="relative z-10">
                Storm
                <span className="text-[var(--color-accent)] mx-1">⚡</span>
                Apps
              </span>
              <motion.div
                className="absolute inset-0 bg-[var(--color-accent)] opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500"
                initial={false}
              />
            </h1> */}
            <img src={logo} alt="Storm Apps" width={180} height={180} className="w-[180px] h-[180px] object-contain" />
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => handleNavClick(item.path)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative text-sm tracking-wide group py-2"
              >
                <span className="relative z-10 transition-colors duration-300">
                  {item.label}
                </span>
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-[1px] bg-[var(--color-accent)] origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                />
              </motion.button>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3 lg:gap-4">
            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full hover:bg-secondary transition-colors duration-300"
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={theme}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {theme === 'dark' ? (
                    <Sun className="w-5 h-5" />
                  ) : (
                    <Moon className="w-5 h-5" />
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.button>

            {/* Language Toggle */}
            <motion.button
              onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 rounded-full border border-border hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all duration-300 text-sm font-medium"
            >
              {language === 'ar' ? 'EN' : 'عربي'}
            </motion.button>

            {/* CTA Button */}
            <motion.button
              onClick={() => handleNavClick('/contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden lg:block px-6 py-2.5 rounded-full bg-[var(--color-accent)] text-[var(--color-accent-foreground)] font-medium text-sm hover:shadow-lg hover:shadow-[var(--color-accent)]/20 transition-all duration-300"
            >
              {t('nav.contact')}
            </motion.button>

            {/* Mobile Menu Toggle */}
            <motion.button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
              className="lg:hidden p-2"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/95 backdrop-blur-2xl border-b border-border"
          >
            <div className="px-6 py-6 space-y-4">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => handleNavClick(item.path)}
                  whileTap={{ scale: 0.98 }}
                  className="block w-full text-left py-3 px-4 rounded-lg hover:bg-secondary transition-colors duration-300"
                >
                  {item.label}
                </motion.button>
              ))}
              <motion.button
                onClick={() => handleNavClick('/contact')}
                whileTap={{ scale: 0.98 }}
                className="block w-full py-3 px-4 rounded-lg bg-[var(--color-accent)] text-[var(--color-accent-foreground)] font-medium text-center"
              >
                {t('nav.contact')}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
