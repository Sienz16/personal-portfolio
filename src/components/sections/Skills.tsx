import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionLabel from '../ui/SectionLabel';
import { skillCategories } from '../../data/skills';

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Animate each skill category
      gsap.utils.toArray<HTMLElement>('.skill-category').forEach((cat) => {
        gsap.from(cat, {
          y: 40,
          opacity: 0,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cat,
            start: 'top 85%',
            once: true,
          },
        });

        // Animate bars within each category
        const bars = cat.querySelectorAll('.skill-fill');
        gsap.from(bars, {
          scaleX: 0,
          transformOrigin: 'left center',
          duration: 1,
          ease: 'power3.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: cat,
            start: 'top 80%',
            once: true,
          },
        });
      });
    }, containerRef.current);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="skills" className="py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <SectionLabel number="05" title="Skills" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {skillCategories.map((cat) => (
            <div key={cat.category} className="skill-category">
              <h3 className="font-mono text-xs text-accent tracking-wider uppercase mb-8">
                {cat.category}
              </h3>
              <div className="space-y-6">
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-primary">{skill.name}</span>
                      <span className="font-mono text-xs text-muted">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-px bg-border relative">
                      <div
                        className="skill-fill absolute inset-y-0 left-0 bg-accent/60"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
