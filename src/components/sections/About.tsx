import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionLabel from '../ui/SectionLabel';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef<HTMLElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Horizontal text marquee
      if (marqueeRef.current) {
        gsap.to(marqueeRef.current, {
          xPercent: -50,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        });
      }

      // Content fade in
      gsap.from('.about-content', {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.about-content',
          start: 'top 80%',
          once: true,
        },
      });

      // Image parallax
      gsap.from('.about-image', {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: '.about-image-wrapper',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });

      // Stats stagger
      gsap.from('.stat-item', {
        y: 30,
        opacity: 0,
        stagger: 0.15,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.stats-grid',
          start: 'top 85%',
          once: true,
        },
      });
    }, containerRef.current);

    return () => ctx.revert();
  }, []);

  const marqueeText = 'Design \u00B7 Develop \u00B7 Deploy \u00B7 ';

  return (
    <section ref={containerRef} id="about" className="relative py-32 overflow-hidden">
      {/* Marquee */}
      <div className="mb-20 overflow-hidden">
        <div
          ref={marqueeRef}
          className="flex whitespace-nowrap text-[8rem] md:text-[12rem] font-display text-border/40 select-none leading-none"
        >
          <span>{marqueeText.repeat(4)}</span>
          <span>{marqueeText.repeat(4)}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <SectionLabel number="02" title="About" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Text */}
          <div className="about-content">
            <p className="text-xl md:text-2xl font-display text-primary mb-8 leading-relaxed">
              I build things for the web with a focus on craft, performance, and
              thoughtful interaction design.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              With a background spanning frontend and full-stack development, I
              specialize in creating digital experiences that feel intentional
              and polished. Every animation, every transition, every pixel serves
              a purpose.
            </p>
            <p className="text-muted leading-relaxed">
              When I'm not coding, you'll find me exploring design systems,
              contributing to open source, or experimenting with creative coding
              and generative art.
            </p>
          </div>

          {/* Image */}
          <div className="about-image-wrapper relative overflow-hidden rounded-sm">
            <div className="about-image aspect-[4/5] bg-surface border border-border flex items-center justify-center">
              <span className="font-mono text-muted text-sm">
                [ your photo here ]
              </span>
            </div>
            {/* Decorative corner accent */}
            <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-accent/40" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-accent/40" />
          </div>
        </div>

        {/* Stats */}
        <div className="stats-grid grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-border">
          {[
            { value: '5+', label: 'Years Experience' },
            { value: '30+', label: 'Projects Delivered' },
            { value: '10+', label: 'Technologies' },
            { value: '\u221E', label: 'Curiosity' },
          ].map(({ value, label }) => (
            <div key={label} className="stat-item">
              <span className="block font-display text-4xl md:text-5xl text-accent mb-2">
                {value}
              </span>
              <span className="font-mono text-xs text-muted tracking-wider uppercase">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
