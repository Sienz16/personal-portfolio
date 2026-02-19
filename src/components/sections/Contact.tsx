import { useRef, useEffect, useState, type SyntheticEvent } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionLabel from '../ui/SectionLabel';

gsap.registerPlugin(ScrollTrigger);

const socialLinks = [
  { label: 'Website', href: 'https://ramadanku.my', icon: 'WEB' },
  { label: 'GitHub', href: '#', icon: 'GH' },
  { label: 'LinkedIn', href: '#', icon: 'LI' },
  { label: 'Email', href: 'mailto:hello@example.com', icon: '@' },
];

export default function Contact() {
  const containerRef = useRef<HTMLElement>(null);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Form slides up
      gsap.from('.contact-form', {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.contact-form',
          start: 'top 85%',
          once: true,
        },
      });

      // Social links scatter in
      gsap.from('.social-link', {
        scale: 0,
        opacity: 0,
        rotation: () => gsap.utils.random(-15, 15),
        stagger: 0.1,
        duration: 0.6,
        ease: 'back.out(2)',
        scrollTrigger: {
          trigger: '.social-links',
          start: 'top 85%',
          once: true,
        },
      });

      // CTA text
      gsap.from('.contact-cta', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.contact-cta',
          start: 'top 85%',
          once: true,
        },
      });
    }, containerRef.current);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Placeholder - wire up to actual service
    console.log('Form submitted:', formState);
  };

  return (
    <section ref={containerRef} id="contact" className="py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <SectionLabel number="06" title="Contact" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: CTA + socials */}
          <div>
            <p className="contact-cta font-display text-3xl md:text-4xl text-primary leading-snug mb-8">
              Let's build a product
              <br />
              <span className="text-accent">that users remember</span>.
            </p>

            <p className="contact-cta text-muted leading-relaxed mb-12">
              I am open to software engineering opportunities, freelance web
              work, and collaborations where quality and shipping speed both
              matter.
            </p>

            <div className="social-links flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="social-link w-12 h-12 border border-border rounded-full flex items-center justify-center font-mono text-xs text-muted hover:text-accent hover:border-accent/40 transition-colors"
                  data-cursor-hover
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <form
            onSubmit={handleSubmit}
            className="contact-form space-y-6"
          >
            <div>
              <label
                htmlFor="name"
                className="block font-mono text-xs text-muted tracking-wider uppercase mb-2"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={formState.name}
                onChange={(e) =>
                  setFormState({ ...formState, name: e.target.value })
                }
                className="w-full bg-transparent border-b border-border py-3 text-primary focus:border-accent outline-none transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block font-mono text-xs text-muted tracking-wider uppercase mb-2"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={formState.email}
                onChange={(e) =>
                  setFormState({ ...formState, email: e.target.value })
                }
                className="w-full bg-transparent border-b border-border py-3 text-primary focus:border-accent outline-none transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block font-mono text-xs text-muted tracking-wider uppercase mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={formState.message}
                onChange={(e) =>
                  setFormState({ ...formState, message: e.target.value })
                }
                className="w-full bg-transparent border-b border-border py-3 text-primary focus:border-accent outline-none transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              className="group inline-flex items-center gap-3 px-8 py-4 border border-accent text-accent font-mono text-sm tracking-wider uppercase hover:bg-accent hover:text-bg transition-all duration-300"
              data-cursor-hover
            >
              Send Message
              <span className="group-hover:translate-x-1 transition-transform">
                &#8594;
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
