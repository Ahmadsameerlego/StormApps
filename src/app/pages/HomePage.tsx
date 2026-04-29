import { HeroSection } from '../components/HeroSection';
import { ServicesSection } from '../components/ServicesSection';
import { ProjectsSection } from '../components/ProjectsSection';
import { ProcessSection } from '../components/ProcessSection';
import { AboutSection } from '../components/AboutSection';
import { TechSection } from '../components/TechSection';
import { CTASection } from '../components/CTASection';

export function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <ProcessSection />
      <AboutSection />
      <TechSection />
      <CTASection />
    </>
  );
}
