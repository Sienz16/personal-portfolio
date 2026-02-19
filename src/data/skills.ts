export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: number; // 0 - 100
}

export const skillCategories: SkillCategory[] = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React / Next.js', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'CSS / Tailwind', level: 92 },
      { name: 'GSAP / Framer Motion', level: 85 },
      { name: 'Vue.js', level: 75 },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', level: 88 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'GraphQL', level: 78 },
      { name: 'REST API Design', level: 90 },
      { name: 'Python', level: 70 },
    ],
  },
  {
    category: 'Tools & Workflow',
    skills: [
      { name: 'Git / GitHub', level: 92 },
      { name: 'Docker', level: 75 },
      { name: 'CI/CD', level: 80 },
      { name: 'Figma', level: 82 },
      { name: 'Linux / CLI', level: 85 },
    ],
  },
];
