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


import m1 from "@/assets/m1.png";
import m2 from "@/assets/m2.png";
import m3 from "@/assets/m3.png";
import m4 from "@/assets/m4.png";

import s1 from "@/assets/s1.webp"
import s2 from "@/assets/s2.webp"
import s3 from "@/assets/s3.webp"
import s4 from "@/assets/s4.webp"
import s5 from "@/assets/s5.webp";

import d1 from "@/assets/d1.webp";
import d2 from "@/assets/d2.webp";
import d3 from "@/assets/d3.webp";

import d11 from "@/assets/d1.png"
import d12 from "@/assets/d2.png"
import d13 from "@/assets/d3.png"
import d14 from "@/assets/d4.png"


import k1 from "@/assets/k1.png"
import k2 from "@/assets/k2.png"
import k3 from "@/assets/k3.png"
import k4 from "@/assets/k4.png"
import k5 from "@/assets/k5.png"

import h1 from "@/assets/h1.png"
import h2 from "@/assets/h2.png"
import h3 from "@/assets/h3.png"
import h4 from "@/assets/h4.png"
import h5 from "@/assets/h5.png";

import n11 from "@/assets/n1.webp"
import n12 from "@/assets/n2.webp"
import n13 from "@/assets/n3.webp"
import n14 from "@/assets/n4.webp"
import n15 from "@/assets/n5.webp";
import n16 from "@/assets/n6.webp";
import n17 from "@/assets/n7.webp";
import n18 from "@/assets/n8.webp";


import b1 from "@/assets/b1.jpeg"
import b2 from "@/assets/b2.jpeg"
import b3 from "@/assets/b3.jpeg"
import b4 from "@/assets/b4.jpeg"
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
    key : '5',
    gradient : 'from-[var(--color-neon-blue)] to-[var(--color-neon-violet)]',
    images : [s1, s2, s3, s4, s5],
    url : 'https://thawaniapp.com/',
    technologies : ['iOS', 'Android', 'Flutter'],
    category : 'app',
  },
  {
    key : '10',
    gradient : 'from-[var(--color-gold)] to-[var(--color-neon-blue)]',
    images : [n11, n12, n13, n14, n15, n16, n17, n18],
    url : 'https://play.google.com/store/apps/details?id=com.noor.noor_elwehda&hl=en_US',
    technologies : ["ios","android","firebase", "Flutter", "Laravel", "mysql", "Vue.Js"],
    category : 'app',
  },
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
    technologies: ['React', 'TypeScript', 'Tailwind', 'Laravel'],
    category: 'ecommerce',
  },
  {
    key : '4',
    gradient : 'from-[var(--color-gold)] to-[var(--color-neon-blue)]',
    images : [m1, m2, m3, m4],
    url : 'https://mawthoq.app/',
    technologies : ['React', 'Vite', 'Tailwind', 'TypeScript'],
    category : 'app',
  },
  
  {
    key : '6',
    gradient : 'from-[var(--color-gold)] to-[var(--color-neon-blue)]',
    images : [d1, d2, d3],
    url : 'https://delevoeg.com/',
    technologies : ['Flutter'],
    category : 'app',
  },
  {
    key : '7',
    gradient : 'from-[var(--color-neon-violet)] to-[var(--color-gold)]',
    images : [d11, d12, d13, d14],
    url : 'https://distinqt-car-hire.netlify.app/',
    technologies : ['React', 'Vite', 'Tailwind', 'laravel'],
    category : 'web',
  },
  {
    key : '8',
    gradient : 'from-[var(--color-gold)] to-[var(--color-neon-blue)]',
    images : [k1, k2, k3, k4, k5],
    url : 'https://bokja.co/',
    technologies : ['Next.js', 'Tailwind', 'TypeScript', "shadcn/ui", "mysql", "Laravel"],
    category : 'web',
  },
  {
    key : '9',
    gradient : 'from-[var(--color-gold)] to-[var(--color-neon-blue)]',
    images : [h1, h2, h3, h4, h5],
    url : 'https://www.heliid.com/',
    technologies : ['Vue.js', 'Laravel', 'Tailwind', "mysql"],
    category : 'web',
  },
  {
    key : '11',
    gradient : 'from-[var(--color-gold)] to-[var(--color-neon-blue)]',
    images : [b1, b2, b3, b4],
    url : 'https://mrelbeltagy.com/',
    technologies : ['React', 'Tailwind', 'TypeScript', "shadcn/ui", "mysql", "Laravel" , "ios" , "android"],
    category : 'app',
  },
  
];
