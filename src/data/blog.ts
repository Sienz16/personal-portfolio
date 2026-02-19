export interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tag: string;
  slug: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: 'Building Performant Scroll Animations with GSAP',
    excerpt:
      'A deep dive into creating smooth, GPU-accelerated scroll animations that don\'t jank — even on low-end devices.',
    date: '2026-01-15',
    readTime: '8 min',
    tag: 'Animation',
    slug: 'performant-scroll-animations',
  },
  {
    title: 'Why I Switched from CSS-in-JS to Tailwind',
    excerpt:
      'After two years with styled-components, I made the switch. Here\'s what I gained, what I lost, and what surprised me.',
    date: '2025-11-20',
    readTime: '6 min',
    tag: 'CSS',
    slug: 'css-in-js-to-tailwind',
  },
  {
    title: 'The Art of Subtle UI Feedback',
    excerpt:
      'Small interactions make the difference between a good interface and a great one. Let\'s explore micro-interactions that matter.',
    date: '2025-09-08',
    readTime: '5 min',
    tag: 'Design',
    slug: 'subtle-ui-feedback',
  },
  {
    title: 'Astro Islands: When Less JavaScript is More',
    excerpt:
      'How Astro\'s island architecture changed my approach to building content-heavy sites with interactive sprinkles.',
    date: '2025-07-12',
    readTime: '7 min',
    tag: 'Architecture',
    slug: 'astro-islands',
  },
];
