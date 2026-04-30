import { Smartphone, Globe, BrainCircuit, Palette } from 'lucide-react';

export type ServiceFeature = {
  titleKey: string;
  descKey: string;
};

export type Service = {
  id: string;
  iconName: 'Smartphone' | 'Globe' | 'BrainCircuit' | 'Palette';
  titleKey: string;
  descKey: string;
  detailsKey: string;
  gradient: string;
  features: ServiceFeature[];
};

export const servicesData: Service[] = [
  {
    id: 'mobile',
    iconName: 'Smartphone',
    titleKey: 'services.1.title',
    descKey: 'services.1.desc',
    detailsKey: 'services.1.details',
    gradient: 'from-[var(--color-neon-blue)] to-[var(--color-neon-violet)]',
    features: [
      { titleKey: 'services.mobile.f1.title', descKey: 'services.mobile.f1.desc' },
      { titleKey: 'services.mobile.f2.title', descKey: 'services.mobile.f2.desc' },
      { titleKey: 'services.mobile.f3.title', descKey: 'services.mobile.f3.desc' },
    ]
  },
  {
    id: 'web',
    iconName: 'Globe',
    titleKey: 'services.2.title',
    descKey: 'services.2.desc',
    detailsKey: 'services.2.details',
    gradient: 'from-[var(--color-gold)] to-[var(--color-neon-blue)]',
    features: [
      { titleKey: 'services.web.f1.title', descKey: 'services.web.f1.desc' },
      { titleKey: 'services.web.f2.title', descKey: 'services.web.f2.desc' },
      { titleKey: 'services.web.f3.title', descKey: 'services.web.f3.desc' },
    ]
  },
  {
    id: 'ai',
    iconName: 'BrainCircuit',
    titleKey: 'services.3.title',
    descKey: 'services.3.desc',
    detailsKey: 'services.3.details',
    gradient: 'from-[var(--color-neon-violet)] to-[var(--color-gold)]',
    features: [
      { titleKey: 'services.ai.f1.title', descKey: 'services.ai.f1.desc' },
      { titleKey: 'services.ai.f2.title', descKey: 'services.ai.f2.desc' },
      { titleKey: 'services.ai.f3.title', descKey: 'services.ai.f3.desc' },
    ]
  },
  {
    id: 'design',
    iconName: 'Palette',
    titleKey: 'services.4.title',
    descKey: 'services.4.desc',
    detailsKey: 'services.4.details',
    gradient: 'from-[var(--color-gold)] to-[var(--color-neon-violet)]',
    features: [
      { titleKey: 'services.design.f1.title', descKey: 'services.design.f1.desc' },
      { titleKey: 'services.design.f2.title', descKey: 'services.design.f2.desc' },
      { titleKey: 'services.design.f3.title', descKey: 'services.design.f3.desc' },
    ]
  }
];
