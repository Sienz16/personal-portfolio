export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    company: 'Acme Corp',
    role: 'Senior Frontend Developer',
    period: '2024 — Present',
    description:
      'Leading frontend architecture for a SaaS platform serving 50k+ users. Spearheaded migration from legacy jQuery codebase to React with TypeScript, reducing bundle size by 40%.',
    technologies: ['React', 'TypeScript', 'Next.js', 'GraphQL'],
  },
  {
    company: 'Startup Studio',
    role: 'Full-Stack Developer',
    period: '2022 — 2024',
    description:
      'Built and shipped three client-facing products from zero to production. Implemented real-time collaboration features and designed scalable API architectures.',
    technologies: ['Node.js', 'React', 'PostgreSQL', 'AWS'],
  },
  {
    company: 'Digital Agency',
    role: 'Frontend Developer',
    period: '2021 — 2022',
    description:
      'Developed interactive marketing sites and web applications for enterprise clients. Focused on performance optimization and accessibility compliance.',
    technologies: ['Vue.js', 'GSAP', 'Tailwind', 'Figma'],
  },
  {
    company: 'Freelance',
    role: 'Web Developer',
    period: '2020 — 2021',
    description:
      'Delivered custom websites and e-commerce solutions for small businesses. Built a personal brand and client pipeline from scratch.',
    technologies: ['JavaScript', 'WordPress', 'Shopify', 'CSS'],
  },
];
