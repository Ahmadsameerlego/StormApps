import n1 from "@/assets/n1.png";
import n2 from "@/assets/n2.png";
import n3 from "@/assets/n3.png";
import n4 from "@/assets/n4.png";

import z1 from "@/assets/z1.png";
import z2 from "@/assets/z2.png";
import z3 from "@/assets/z3.png";
import z4 from "@/assets/z4.png";

import t1 from "@/assets/t1.png";
import t2 from "@/assets/t2.png";
import t3 from "@/assets/t3.png";
import t4 from "@/assets/t4.png";
import t5 from "@/assets/t5.png";

export type ProjectCategory = 'all' | 'ecommerce' | 'web' | 'crm' | 'portfolio' | 'app';

export type Project = {
  key: string;
  gradient: string;
  images: string[];
  url: string;
  technologies: string[];
  category: ProjectCategory;
};

export const projectsData: Project[] = [
  {
    key: '1',
    gradient: 'from-[var(--color-neon-blue)] to-[var(--color-neon-violet)]',
    images: [n1, n2, n3, n4],
    url: 'https://nalgrp.net/',
    technologies: ['React', 'Next.js', 'Node.js', 'Tailwind'],
    category: 'app',
  },
  {
    key: '2',
    gradient: 'from-[var(--color-gold)] to-[var(--color-neon-blue)]',
    images: [z1, z2, z3, z4],
    url: 'https://zalameh.app/',
    technologies: ['Vue', 'Laravel', 'Tailwind', 'MySQL'],
    category: 'ecommerce',
  },
  {
    key: '3',
    gradient: 'from-[var(--color-neon-violet)] to-[var(--color-gold)]',
    images: [t1, t2, t3, t4, t5],
    url: 'https://tijara-ecommerce.figma.site/',
    technologies: ['React', 'TypeScript', 'Tailwind', 'Framer Motion'],
    category: 'ecommerce',
  },
];
