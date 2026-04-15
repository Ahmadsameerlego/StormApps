import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ProcessSection } from './components/ProcessSection';
import { AboutSection } from './components/AboutSection';
import { TechSection } from './components/TechSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { PageLoader } from './components/PageLoader';
import { CustomCursor } from './components/CustomCursor';

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        {/* Skip to content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[10000] focus:px-6 focus:py-3 focus:bg-[var(--color-accent)] focus:text-[var(--color-accent-foreground)] focus:rounded-full focus:font-medium"
        >
          Skip to content
        </a>
        
        <PageLoader />
        <CustomCursor />
        <div className="relative min-h-screen">
          <Navigation />
          
          <main id="main-content">
            <HeroSection />
            <ServicesSection />
            <ProjectsSection />
            <ProcessSection />
            <AboutSection />
            <TechSection />
            <CTASection />
          </main>

          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}