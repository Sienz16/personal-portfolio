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
    title: 'Ramadanku',
    description:
      'A public web platform focused on Ramadan-related utilities and content, built to be practical, fast, and easy to use on mobile and desktop.',
    tags: ['Laravel', 'Next.js', 'React', 'MySQL'],
    featured: true,
    link: 'https://ramadanku.my',
  },
  {
    title: 'FKI Event Center',
    description:
      'Event management system that streamlines event setup, participant coordination, and operational tracking for academic and organizational use.',
    tags: ['Laravel', 'PostgreSQL', 'Tailwind', 'JavaScript'],
    featured: true,
  },
  {
    title: 'Badminton App (Web)',
    description:
      'A web application for badminton-focused workflows, including scheduling and information management with a straightforward admin flow.',
    tags: ['Laravel', 'MySQL', 'Blade', 'JavaScript'],
    featured: true,
  },
  {
    title: 'Production Print',
    description:
      'Android app for jersey production workflows, improving order handling and reducing manual communication overhead.',
    tags: ['Kotlin', 'Android', 'Firebase'],
  },
  {
    title: 'Bouquet Bliss',
    description:
      'Flower shop Android application with product browsing and order-friendly flows designed for practical day-to-day business usage.',
    tags: ['Kotlin', 'Android', 'Firebase'],
  },
  {
    title: 'CCRG Research Documentation',
    description:
      'A research documentation initiative covering AR/VR and Sabah culture references, focused on structured evidence collection and reporting.',
    tags: ['Research', 'Documentation', 'AR/VR'],
  },
];
