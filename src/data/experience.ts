export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    company: 'JesseltonPixel Sdn Bhd',
    role: 'Software Engineer',
    period: 'Sep 2025 - Present',
    description:
      'Building production web solutions with Laravel and modern JavaScript frameworks. Collaborating with design and product teams to ship maintainable features for real client needs.',
    technologies: ['Laravel', 'Next.js', 'React', 'MySQL', 'PostgreSQL'],
  },
  {
    company: 'LearningTigers Sdn Bhd',
    role: 'Software Engineering Intern',
    period: 'Mar 2025 - Aug 2025',
    description:
      'Supported product delivery across web projects, turning requirements into working features and improving existing modules with cleaner, more reliable code.',
    technologies: ['Laravel', 'Vue', 'JavaScript', 'MySQL', 'Git'],
  },
  {
    company: 'Creative Computing Research Group (CCRG), UMS',
    role: 'Research Assistant',
    period: '2024 - 2025',
    description:
      'Conducted literature reviews and documentation for AR/VR and Sabah cultural studies. Produced structured research outputs for the team and supporting stakeholders.',
    technologies: ['Documentation', 'AR/VR', 'Research', 'Academic Writing'],
  },
];
