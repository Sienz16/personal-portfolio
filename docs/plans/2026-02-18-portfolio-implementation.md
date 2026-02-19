# Portfolio Implementation Plan

**Goal:** Build an elegant editorial portfolio with Astro + React + GSAP

---

### Task 1: Install dependencies & configure Astro

- Install: `@astrojs/react`, `@astrojs/tailwind`, `react`, `react-dom`, `gsap`, `lenis`
- Configure `astro.config.mjs` with React + Tailwind integrations
- Set up Tailwind config with custom colors, fonts, and theme
- Add Google Fonts (DM Serif Display, Inter, Fira Code)

### Task 2: Layout & global styles

- Update `Layout.astro` with fonts, meta tags, global CSS reset
- Set up color variables in Tailwind config
- Create smooth scroll with Lenis integration (`src/lib/lenis.ts`)
- Create `useGsap.ts` hook

### Task 3: Custom cursor

- `src/components/ui/Cursor.tsx` — custom cursor that scales on hoverable elements

### Task 4: Navigation

- `src/components/layout/Nav.tsx` — fixed nav, transparent → frosted-glass
- Section indicator dots on right
- Mobile hamburger → fullscreen overlay

### Task 5: Hero section

- `src/components/sections/Hero.tsx`
- Letter-by-letter name reveal with GSAP timeline
- Subtitle fade-in, scroll indicator
- ScrollTrigger pin until animation completes

### Task 6: About section

- `src/components/sections/About.tsx`
- Horizontal text marquee, image parallax
- Section label with editorial number (02)

### Task 7: Experience section

- `src/components/sections/Experience.tsx`
- `src/data/experience.ts` — placeholder data
- Timeline scrub — vertical line draws on scroll

### Task 8: Projects section

- `src/components/sections/Projects.tsx`
- `src/components/ui/ProjectCard.tsx`
- `src/data/projects.ts` — placeholder data
- Cards stagger in, hover tilt + accent reveal

### Task 9: Skills section

- `src/components/sections/Skills.tsx`
- `src/data/skills.ts` — placeholder data
- Animated skill bars on scroll entry

### Task 10: Blog section

- `src/components/sections/Blog.tsx`
- `src/data/blog.ts` — placeholder data
- Article cards fade-stagger in

### Task 11: Contact section

- `src/components/sections/Contact.tsx`
- Form slides up, social links scatter in

### Task 12: Footer

- `src/components/layout/Footer.tsx`
- Minimal, editorial style

### Task 13: Section label component

- `src/components/ui/SectionLabel.tsx`
- Reusable editorial section number + heading with clip-path reveal

### Task 14: Wire everything into index.astro

- Import all sections into `src/pages/index.astro`
- Set correct `client:` directives on each island
