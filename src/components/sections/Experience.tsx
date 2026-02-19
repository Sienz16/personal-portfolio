import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionLabel from '../ui/SectionLabel';
import { experiences } from '../../data/experience';

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Timeline vertical line draw
      gsap.from('.timeline-line', {
        scaleY: 0,
        transformOrigin: 'top center',
        ease: 'none',
        scrollTrigger: {
          trigger: '.timeline-wrapper',
          start: 'top 70%',
          end: 'bottom 30%',
          scrub: 1,
        },
      });

      // Each experience card staggers in
      gsap.utils.toArray<HTMLElement>('.exp-card').forEach((card, i) => {
        gsap.from(card, {
          x: i % 2 === 0 ? -60 : 60,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            once: true,
          },
        });
      });
    }, containerRef.current);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="experience" className="py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <SectionLabel number="03" title="Experience" />

        <div className="timeline-wrapper relative">
          {/* Vertical timeline line */}
          <div className="timeline-line absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-accent/20 -translate-x-1/2" />

          <div className="space-y-16 md:space-y-24">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className={`exp-card relative grid grid-cols-1 md:grid-cols-2 gap-8 ${
                  i % 2 === 0 ? '' : 'md:direction-rtl'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-accent rounded-full -translate-x-1/2 border-2 border-bg z-10" />

                {/* Content - alternating sides */}
                <div
                  className={`pl-8 md:pl-0 ${
                    i % 2 === 0
                      ? 'md:pr-16 md:text-right'
                      : 'md:col-start-2 md:pl-16'
                  }`}
                >
                  <span className="font-mono text-xs text-accent tracking-wider">
                    {exp.period}
                  </span>
                  <h3 className="font-display text-2xl text-primary mt-2 mb-1">
                    {exp.role}
                  </h3>
                  <p className="font-mono text-sm text-muted mb-4">
                    {exp.company}
                  </p>
                  <p className="text-muted leading-relaxed mb-4">
                    {exp.description}
                  </p>
                  <div
                    className={`flex flex-wrap gap-2 ${
                      i % 2 === 0 ? 'md:justify-end' : ''
                    }`}
                  >
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-mono text-accent/80 border border-accent/20 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
