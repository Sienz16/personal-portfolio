export interface Project {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  link?: string;
  github?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: 'Dashflow',
    description:
      'A real-time analytics dashboard with customizable widgets, live data streams, and collaborative team features.',
    tags: ['React', 'TypeScript', 'D3.js', 'WebSocket'],
    featured: true,
    link: '#',
    github: '#',
  },
  {
    title: 'Notecraft',
    description:
      'Minimal note-taking app with markdown support, offline sync, and a beautiful distraction-free writing experience.',
    tags: ['Next.js', 'Prisma', 'MDX', 'Tailwind'],
    featured: true,
    link: '#',
    github: '#',
  },
  {
    title: 'Palette Lab',
    description:
      'AI-powered color palette generator that creates harmonious schemes from natural language descriptions.',
    tags: ['Python', 'FastAPI', 'React', 'OpenAI'],
    featured: true,
    link: '#',
    github: '#',
  },
  {
    title: 'Threadline',
    description:
      'Social reading platform where users share and discuss book highlights with a community of readers.',
    tags: ['Svelte', 'Supabase', 'Tailwind'],
    link: '#',
    github: '#',
  },
  {
    title: 'DevProxy',
    description:
      'Local development proxy tool for API mocking, request interception, and response transformation.',
    tags: ['Rust', 'CLI', 'HTTP'],
    github: '#',
  },
  {
    title: 'Motion Kit',
    description:
      'Open-source animation library for React, providing declarative scroll-triggered animations with zero config.',
    tags: ['React', 'GSAP', 'TypeScript', 'NPM'],
    github: '#',
  },
];
