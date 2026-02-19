import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Props {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  link?: string;
  github?: string;
  featured?: boolean;
  index: number;
}

export default function ProjectCard({
  title,
  description,
  tags,
  link,
  github,
  featured,
  index,
}: Props) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    const card = cardRef.current;

    // Hover tilt effect
    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -5;
      const rotateY = ((x - centerX) / centerX) * 5;

      gsap.to(card, {
        rotateX,
        rotateY,
        duration: 0.3,
        ease: 'power2.out',
        transformPerspective: 1000,
      });

      // Move accent glow
      gsap.to(card.querySelector('.card-glow'), {
        x: x - rect.width / 2,
        y: y - rect.height / 2,
        opacity: 1,
        duration: 0.3,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.5,
        ease: 'power2.out',
      });
      gsap.to(card.querySelector('.card-glow'), {
        opacity: 0,
        duration: 0.3,
      });
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`project-card group relative bg-surface border border-border rounded-sm overflow-hidden ${
        featured ? 'md:col-span-2 lg:col-span-1' : ''
      }`}
      style={{ transformStyle: 'preserve-3d' }}
      data-cursor-hover
    >
      {/* Accent glow that follows cursor */}
      <div className="card-glow absolute w-64 h-64 rounded-full bg-accent/10 blur-3xl opacity-0 pointer-events-none -translate-x-1/2 -translate-y-1/2" />

      {/* Image placeholder */}
      <div className="aspect-video bg-bg/50 border-b border-border flex items-center justify-center relative overflow-hidden">
        <span className="font-mono text-xs text-muted">
          [ project preview ]
        </span>
        {/* Accent line on hover */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      </div>

      {/* Content */}
      <div className="p-6 md:p-8">
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-display text-xl text-primary group-hover:text-accent transition-colors">
            {title}
          </h3>
          <div className="flex gap-3 ml-4">
            {github && (
              <a
                href={github}
                className="font-mono text-xs text-muted hover:text-accent transition-colors"
                aria-label="GitHub"
              >
                GH
              </a>
            )}
            {link && (
              <a
                href={link}
                className="font-mono text-xs text-muted hover:text-accent transition-colors"
                aria-label="Live"
              >
                &#8599;
              </a>
            )}
          </div>
        </div>

        <p className="text-muted text-sm leading-relaxed mb-4">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-[10px] font-mono text-accent/70 bg-accent/5 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Corner number */}
      <span className="absolute top-4 right-4 font-mono text-[10px] text-muted/30">
        {String(index + 1).padStart(2, '0')}
      </span>
    </div>
  );
}
