import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { PageLoader } from './components/PageLoader';
import { CustomCursor } from './components/CustomCursor';
import { Routes, Route } from 'react-router';
import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        {/* Skip to content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[10000] focus:px-6 focus:py-3 focus:bg-[var(--color-accent)] focus:text-[var(--color-accent-foreground)] focus:rounded-full font-medium"
        >
          Skip to content
        </a>
        
        <PageLoader />
        <CustomCursor />
        <div className="relative min-h-screen flex flex-col">
          <Navigation />
          
          <main id="main-content" className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}