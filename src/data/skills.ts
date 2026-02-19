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
    category: 'Web Development',
    skills: [
      { name: 'Laravel', level: 92 },
      { name: 'React / Next.js', level: 84 },
      { name: 'Vue.js', level: 80 },
      { name: 'JavaScript', level: 88 },
      { name: 'Tailwind CSS', level: 85 },
    ],
  },
  {
    category: 'Database & Backend',
    skills: [
      { name: 'MySQL', level: 90 },
      { name: 'PostgreSQL', level: 88 },
      { name: 'Node.js', level: 76 },
      { name: 'Firebase', level: 74 },
      { name: 'REST API Development', level: 84 },
    ],
  },
  {
    category: 'Languages, Tools & Workflow',
    skills: [
      { name: 'C++', level: 78 },
      { name: 'Java (basic)', level: 58 },
      { name: 'Python (basic)', level: 62 },
      { name: 'Git', level: 88 },
      { name: 'Docker / Linux', level: 78 },
    ],
  },
];
