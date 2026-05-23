import React, { useEffect, useRef } from 'react';
import '../styles/arrow-theme.css';

export const HomePage: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handlePointer = (e: PointerEvent) => {
      if (!cursorRef.current) return;
      const x = e.clientX;
      const y = e.clientY;
      cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };

    window.addEventListener('pointermove', handlePointer);
    return () => window.removeEventListener('pointermove', handlePointer);
  }, []);

  return (
    <div className="ath-page min-h-screen bg-ath-surface text-ath-white">
      <div className="ath-hero relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 py-28 lg:py-40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <p className="ath-kicker">ARROW TECH</p>
              <h1 className="ath-h1">Ship Faster.</h1>
              <p className="ath-lead max-w-xl">We design, build, and scale modern web and AI products for startups and enterprises — fast, secure, and future-ready.</p>

              <div className="mt-8 flex items-center gap-4">
                <button className="ath-btn-primary">Start a project</button>
                <button className="ath-btn-ghost">See case studies</button>
              </div>

              <div className="mt-8 ath-trust flex gap-6 items-center flex-wrap">
                <img src="/src/app/images/arrow.png" alt="ARROW TECH" className="h-6 opacity-60" />
                <span className="text-ath-muted">Trusted by startups and enterprises</span>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="ath-hero-visual mx-auto">
                <div className="ath-glow-orbit" />
                <div className="ath-glass-card glass-effect">
                  <div className="p-6 md:p-8">
                    <h3 className="font-semibold text-lg">Arrow AI • Prototype</h3>
                    <p className="text-ath-muted mt-2">Realtime inference • 99.9% uptime</p>

                    <div className="mt-4 grid grid-cols-2 gap-3">
                      <div className="ath-mini-card">Model ops</div>
                      <div className="ath-mini-card">Cloud infra</div>
                      <div className="ath-mini-card">Design system</div>
                      <div className="ath-mini-card">Observability</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sections: Services / Case studies / CTA (simplified prototype) */}
      <section className="container mx-auto px-6 lg:px-12 py-20">
        <h2 className="ath-section-title">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="ath-service-card">
            <h4>Product Engineering</h4>
            <p className="text-ath-muted mt-2">End-to-end engineering, frontend to infra.</p>
          </div>
          <div className="ath-service-card">
            <h4>AI & Data</h4>
            <p className="text-ath-muted mt-2">ML systems, pipelines, and embeddings.</p>
          </div>
          <div className="ath-service-card">
            <h4>Design & UX</h4>
            <p className="text-ath-muted mt-2">Product design with scalable systems.</p>
          </div>
        </div>
      </section>

      <div ref={cursorRef} className="ath-mouse-light" aria-hidden />
    </div>
  );
};

export default HomePage;
