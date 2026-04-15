import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'ar' | 'en';
type Direction = 'rtl' | 'ltr';

interface LanguageContextType {
  language: Language;
  direction: Direction;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  ar: {
    // Navigation
    'nav.about': 'عن العاصفة',
    'nav.services': 'الخدمات',
    'nav.projects': 'المشاريع',
    'nav.process': 'الرحلة',
    'nav.contact': 'ابدأ رحلتك',
    
    // Hero
    'hero.title': 'نصنع العواصف الرقمية',
    'hero.subtitle': 'حيث تلتقي التكنولوجيا بالفن',
    'hero.description': 'شريك رقمي نادر لمن يرفض المألوف. نحن لا نبني تطبيقات، نخلق تجارب استثنائية تعيد تعريف المعايير.',
    'hero.cta': 'اكتشف العالم',
    'hero.scroll': 'اكتشف المزيد',
    
    // Services
    'services.title': 'خدماتنا الحصرية',
    'services.subtitle': 'حلول مصممة للنخبة',
    'services.1.title': 'تطبيقات الجوال النخبوية',
    'services.1.desc': 'تطبيقات iOS و Android فائقة الفخامة، مصممة بدقة لا تقبل المساومة. كل بكسل يروي قصة التميز.',
    'services.2.title': 'منصات الويب الراقية',
    'services.2.desc': 'مواقع وتطبيبات ويب تجمع بين الأداء الصاروخي والتصميم الذي يخطف الأنفاس. تجارب رقمية تليق بعلامتك.',
    'services.3.title': 'الذكاء الاصطناعي المتقدم',
    'services.3.desc': 'حلول AI و ML مبتكرة تضع مؤسستك في طليعة المستقبل. ذكاء حقيقي، نتائج استثنائية.',
    'services.4.title': 'الهوية البصرية الفاخرة',
    'services.4.desc': 'تصميم UI/UX يتجاوز التوقعات. نخلق هويات بصرية تحفر في الذاكرة وتترك أثراً لا يُمحى.',
    
    // Projects
    'projects.title': 'مشاريع ملهمة',
    'projects.subtitle': 'قصص نجاح حققناها معاً',
    'projects.1.title': 'نيون - منصة التجارة المستقبلية',
    'projects.1.category': 'تطبيق جوال • تجارة إلكترونية',
    'projects.1.description': 'أعدنا تعريف تجربة التسوق الرقمي لجيل جديد من المستهلكين.',
    'projects.2.title': 'لومينا - نظام مصرفي ذكي',
    'projects.2.category': 'منصة ويب • تكنولوجيا مالية',
    'projects.2.description': 'حلول مالية متقدمة تجمع بين الأمان المطلق والبساطة الساحرة.',
    'projects.3.title': 'أوربت - إدارة فرق العمل',
    'projects.3.category': 'تطبيق ويب • SaaS',
    'projects.3.description': 'منصة ذكية تحول الفوضى إلى انسجام، وتجعل الإنتاجية فناً.',
    
    // Process
    'process.title': 'رحلة التميز',
    'process.subtitle': 'منهجية مصممة للكمال',
    'process.1.title': 'الاكتشاف',
    'process.1.desc': 'نغوص عميقاً في رؤيتك، نفهم جوهر علامتك، ونرسم خريطة النجاح.',
    'process.2.title': 'التصميم',
    'process.2.desc': 'نحول الأفكار إلى تجارب بصرية خلابة، كل تفصيل مدروس بعناية فائقة.',
    'process.3.title': 'التطوير',
    'process.3.desc': 'نبني بأرقى التقنيات، كل سطر كود يعكس التزامنا بالجودة المطلقة.',
    'process.4.title': 'الإطلاق',
    'process.4.desc': 'ننطلق بقوة، ونواصل الدعم والتطوير لنضمن نجاحاً مستداماً.',
    
    // About
    'about.title': 'فلسفتنا',
    'about.quote': 'نحن لا نتبع الاتجاهات. نحن نصنعها.',
    'about.text1': 'Storm Apps ليست مجرد شركة برمجيات. نحن مختبر للابتكار، استوديو للإبداع، وشريك لمن يطمح للمستحيل.',
    'about.text2': 'نجمع بين الهندسة المعمارية الرقمية الفائقة، التصميم الذي يلهم، والتكنولوجيا التي تغير قواعد اللعبة.',
    'about.text3': 'كل مشروع هو تحفة فنية. كل تطبيق قصة نجاح. نحن لا نعمل مع الجميع، فقط مع من يشاركنا شغف التميز.',
    
    // Tech
    'tech.title': 'قدراتنا التقنية',
    'tech.subtitle': 'نتقن أحدث ما وصلت إليه التكنولوجيا',
    
    // CTA
    'cta.title': 'مستعد لبناء شيء استثنائي؟',
    'cta.subtitle': 'انضم لنخبة عملائنا',
    'cta.button': 'ابدأ مشروعك',
    'cta.note': 'نتعاون فقط مع عدد محدود من المشاريع سنوياً للحفاظ على التميز',
    
    // Footer
    'footer.tagline': 'نصنع العواصف الرقمية',
    'footer.rights': 'جميع الحقوق محفوظة',
    'footer.email': 'hello@stormapps.io',
  },
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.process': 'Process',
    'nav.contact': 'Start Your Journey',
    
    // Hero
    'hero.title': 'We Craft Digital Storms',
    'hero.subtitle': 'Where Technology Meets Art',
    'hero.description': 'An exclusive digital partner for those who refuse the ordinary. We don\'t build apps, we create exceptional experiences that redefine standards.',
    'hero.cta': 'Discover The World',
    'hero.scroll': 'Explore More',
    
    // Services
    'services.title': 'Exclusive Services',
    'services.subtitle': 'Solutions Crafted for the Elite',
    'services.1.title': 'Elite Mobile Applications',
    'services.1.desc': 'Ultra-premium iOS & Android applications, designed with uncompromising precision. Every pixel tells a story of excellence.',
    'services.2.title': 'Premium Web Platforms',
    'services.2.desc': 'Websites and web apps that combine rocket performance with breathtaking design. Digital experiences worthy of your brand.',
    'services.3.title': 'Advanced AI Solutions',
    'services.3.desc': 'Innovative AI & ML solutions that place your organization at the forefront of the future. True intelligence, exceptional results.',
    'services.4.title': 'Luxury Visual Identity',
    'services.4.desc': 'UI/UX design that exceeds expectations. We create visual identities that engrave in memory and leave an indelible mark.',
    
    // Projects
    'projects.title': 'Inspiring Projects',
    'projects.subtitle': 'Success Stories We Built Together',
    'projects.1.title': 'Neon - Future Commerce Platform',
    'projects.1.category': 'Mobile App • E-commerce',
    'projects.1.description': 'We redefined the digital shopping experience for a new generation of consumers.',
    'projects.2.title': 'Lumina - Smart Banking System',
    'projects.2.category': 'Web Platform • FinTech',
    'projects.2.description': 'Advanced financial solutions combining absolute security with enchanting simplicity.',
    'projects.3.title': 'Orbit - Team Management',
    'projects.3.category': 'Web App • SaaS',
    'projects.3.description': 'An intelligent platform that transforms chaos into harmony, making productivity an art.',
    
    // Process
    'process.title': 'Journey to Excellence',
    'process.subtitle': 'A methodology designed for perfection',
    'process.1.title': 'Discovery',
    'process.1.desc': 'We dive deep into your vision, understand your brand\'s essence, and map the path to success.',
    'process.2.title': 'Design',
    'process.2.desc': 'We transform ideas into stunning visual experiences, every detail crafted with supreme care.',
    'process.3.title': 'Development',
    'process.3.desc': 'We build with the finest technologies, every line of code reflects our commitment to absolute quality.',
    'process.4.title': 'Launch',
    'process.4.desc': 'We launch powerfully and continue support and development to ensure sustainable success.',
    
    // About
    'about.title': 'Our Philosophy',
    'about.quote': 'We don\'t follow trends. We create them.',
    'about.text1': 'Storm Apps is not just a software company. We are an innovation lab, a creativity studio, and a partner for those who aspire to the impossible.',
    'about.text2': 'We combine supreme digital architecture, inspiring design, and game-changing technology.',
    'about.text3': 'Every project is a masterpiece. Every application is a success story. We don\'t work with everyone, only with those who share our passion for excellence.',
    
    // Tech
    'tech.title': 'Technical Capabilities',
    'tech.subtitle': 'We master the latest in technology',
    
    // CTA
    'cta.title': 'Ready to Build Something Exceptional?',
    'cta.subtitle': 'Join Our Elite Clientele',
    'cta.button': 'Start Your Project',
    'cta.note': 'We collaborate on a limited number of projects annually to maintain excellence',
    
    // Footer
    'footer.tagline': 'We craft digital storms',
    'footer.rights': 'All rights reserved',
    'footer.email': 'hello@stormapps.io',
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('ar');

  useEffect(() => {
    const dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.setAttribute('dir', dir);
    document.documentElement.setAttribute('lang', language);
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.ar] || key;
  };

  const direction = language === 'ar' ? 'rtl' : 'ltr';

  return (
    <LanguageContext.Provider value={{ language, direction, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
