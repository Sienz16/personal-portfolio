import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const navRef = useRef<HTMLElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  // Frosted glass on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track active section
  useEffect(() => {
    const triggers: ScrollTrigger[] = [];

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      triggers.push(
        ScrollTrigger.create({
          trigger: el,
          start: 'top center',
          end: 'bottom center',
          onEnter: () => setActiveSection(id),
          onEnterBack: () => setActiveSection(id),
        })
      );
    });

    return () => triggers.forEach((t) => t.kill());
  }, []);

  // Menu open/close animation
  useEffect(() => {
    if (!overlayRef.current) return;

    if (menuOpen) {
      document.body.style.overflow = 'hidden';
      gsap.to(overlayRef.current, {
        clipPath: 'circle(150% at top right)',
        duration: 0.6,
        ease: 'power3.inOut',
      });
      gsap.from(overlayRef.current.querySelectorAll('.menu-item'), {
        y: 60,
        opacity: 0,
        stagger: 0.08,
        duration: 0.5,
        delay: 0.3,
        ease: 'power3.out',
      });
    } else {
      document.body.style.overflow = '';
      gsap.to(overlayRef.current, {
        clipPath: 'circle(0% at top right)',
        duration: 0.4,
        ease: 'power3.inOut',
      });
    }
  }, [menuOpen]);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-bg/80 backdrop-blur-xl border-b border-border'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => scrollTo('hero')}
            className="font-display text-xl text-primary hover:text-accent transition-colors"
          >
            S<span className="text-accent">.</span>
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {sections.slice(1).map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`font-mono text-xs tracking-wider uppercase transition-colors ${
                  activeSection === id
                    ? 'text-accent'
                    : 'text-muted hover:text-primary'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 w-6"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-px bg-primary transition-all duration-300 ${
                menuOpen ? 'rotate-45 translate-y-[3.5px]' : ''
              }`}
            />
            <span
              className={`block h-px bg-primary transition-all duration-300 ${
                menuOpen ? '-rotate-45 -translate-y-[3.5px]' : ''
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-40 bg-bg flex flex-col items-center justify-center md:hidden"
        style={{ clipPath: 'circle(0% at top right)' }}
      >
        {sections.map(({ id, label }, i) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className="menu-item font-display text-4xl text-primary hover:text-accent transition-colors py-3"
          >
            <span className="font-mono text-sm text-accent mr-4">
              {String(i + 1).padStart(2, '0')}
            </span>
            {label}
          </button>
        ))}
      </div>

      {/* Section indicator dots (desktop) */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-3">
        {sections.map(({ id }) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              activeSection === id
                ? 'bg-accent scale-125'
                : 'bg-muted/40 hover:bg-muted'
            }`}
            aria-label={`Go to ${id}`}
          />
        ))}
      </div>
    </>
  );
}
