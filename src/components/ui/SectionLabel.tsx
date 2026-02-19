import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Props {
  number: string;
  title: string;
  className?: string;
}

export default function SectionLabel({ number, title, className = '' }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
          once: true,
        },
      });

      tl.from('[data-animate]', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.15,
      });

      tl.from(
        '.section-line',
        {
          scaleX: 0,
          transformOrigin: 'left center',
          duration: 0.6,
          ease: 'power2.out',
        },
        '<0.2'
      );
    }, containerRef.current);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className={`flex items-center gap-6 mb-16 ${className}`}>
      {/* Number */}
      <div className="overflow-hidden">
        <span
          className="block font-mono text-accent text-sm tracking-widest"
          data-animate
        >
          {number}
        </span>
      </div>

      {/* Divider */}
      <div className="section-line h-px bg-accent/30 w-16" />

      {/* Title */}
      <div className="overflow-hidden">
        <h2
          className="block font-display text-2xl md:text-3xl text-primary"
          data-animate
        >
          {title}
        </h2>
      </div>
    </div>
  );
}
