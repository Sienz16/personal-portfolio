import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionLabel from '../ui/SectionLabel';
import { blogPosts } from '../../data/blog';

gsap.registerPlugin(ScrollTrigger);

export default function Blog() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.blog-card').forEach((card, i) => {
        gsap.from(card, {
          y: 50,
          opacity: 0,
          duration: 0.7,
          ease: 'power3.out',
          stagger: 0.12,
          scrollTrigger: {
            trigger: card,
            start: 'top 88%',
            once: true,
          },
          delay: i * 0.1,
        });
      });
    }, containerRef.current);

    return () => ctx.revert();
  }, []);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <section ref={containerRef} id="blog" className="py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <SectionLabel number="06" title="Writing" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.map((post) => (
            <a
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="blog-card group block p-6 md:p-8 bg-surface border border-border rounded-sm hover:border-accent/30 transition-colors"
              data-cursor-hover
            >
              {/* Tag + date */}
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[10px] text-accent tracking-wider uppercase">
                  {post.tag}
                </span>
                <span className="font-mono text-[10px] text-muted">
                  {formatDate(post.date)}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-display text-xl text-primary group-hover:text-accent transition-colors mb-3">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-muted text-sm leading-relaxed mb-4">
                {post.excerpt}
              </p>

              {/* Read time + arrow */}
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-muted">
                  {post.readTime} read
                </span>
                <span className="text-muted group-hover:text-accent group-hover:translate-x-1 transition-all text-sm">
                  &#8594;
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
