# Personal Portfolio — Design Document
**Date:** 2026-02-18
**Status:** Approved

---

## Overview

A personal portfolio for a frontend / full-stack developer targeting a mixed audience (recruiters, clients, other developers). The goal is an elegant, editorial design that stands out and showcases strong frontend skills — not a generic AI-looking portfolio.

---

## Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | Astro 5 |
| UI Components | React (islands only) |
| Animation | GSAP + ScrollTrigger |
| Smooth scroll | Lenis |
| Styling | Tailwind CSS |
| Language | TypeScript |

**Architecture:** Astro handles the static shell for fast load and SEO. React islands are used only where interactivity is needed (nav, project cards, contact form). GSAP runs via a shared `useGsap` hook pattern to avoid conflicts.

**Performance:** `client:visible` on heavy components. All animations use `transform` / `opacity` only — no layout shift.

---

## Visual Identity

### Color Palette

```
Background:    #0A0A0A  (near-black)
Surface:       #141414  (cards, sections)
Accent:        #D4A853  (warm amber/gold)
Text primary:  #F2EDE4  (warm off-white)
Text muted:    #6B6560  (warm gray)
Border:        #222222
```

### Typography

- **Display/Headings:** DM Serif Display (high-contrast serif, editorial weight)
- **Body:** Inter or DM Sans (clean sans-serif)
- **Monospace accents:** Fira Code (labels, code snippets)

### Layout Principles

- Asymmetric grid — content has tension, not centered by default
- Large section numbers (01, 02...) as editorial markers
- Generous whitespace — sections breathe
- Full-width horizontal rules between sections

---

## Sections & Animations

| # | Section | Key GSAP Animation |
|---|---------|-------------------|
| 01 | Hero | Letter-by-letter name reveal, subtitle fade, cursor blink |
| 02 | About | Horizontal scroll text marquee, image parallax |
| 03 | Experience | Timeline scrub — line draws as you scroll |
| 04 | Projects | Cards stagger in, hover = tilt + accent color reveal |
| 05 | Skills | Skill bars animate on scroll entry |
| 06 | Blog/Writing | Article cards fade-stagger in |
| 07 | Contact | Form slides up, social links scatter in |

### Global GSAP Patterns

- `ScrollTrigger` pinning on Hero until intro animation completes
- Section headings: clip-path reveal (text slides up from below)
- Custom cursor that reacts to hoverable elements
- Lenis smooth scroll paired with GSAP ScrollTrigger

### Navigation

- Fixed top bar, transparent → frosted-glass on scroll
- Section indicator dots on right side
- Mobile: hamburger → fullscreen overlay menu

---

## Component Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Nav.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── Blog.tsx
│   │   └── Contact.tsx
│   └── ui/
│       ├── Cursor.tsx
│       ├── SectionLabel.tsx
│       └── ProjectCard.tsx
├── hooks/
│   └── useGsap.ts
├── lib/
│   └── lenis.ts
├── data/
│   ├── projects.ts
│   ├── experience.ts
│   ├── skills.ts
│   └── blog.ts
├── layouts/
│   └── Layout.astro
└── pages/
    └── index.astro
```

**Data strategy:** All content lives in plain TypeScript data files. No CMS needed for now.
