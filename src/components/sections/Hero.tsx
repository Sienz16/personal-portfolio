import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const codeLines = [
  { num: 1, text: '<span class="text-purple-400">const</span> Portfolio <span class="text-accent">=</span> <span class="text-white/40">()</span> <span class="text-accent">=&gt;</span> <span class="text-white/40">{</span>' },
  { num: 2, text: '  <span class="text-purple-400">const</span> <span class="text-white/40">[</span>passion<span class="text-white/40">]</span> <span class="text-accent">=</span> <span class="text-blue-400">useState</span><span class="text-white/40">(</span><span class="text-green-400">\'frontend\'</span><span class="text-white/40">)</span>;' },
  { num: 3, text: '' },
  { num: 4, text: '  <span class="text-blue-400">useEffect</span><span class="text-white/40">(()</span> <span class="text-accent">=&gt;</span> <span class="text-white/40">{</span>' },
  { num: 5, text: '    <span class="text-blue-400">animate</span><span class="text-white/40">({</span>' },
  { num: 6, text: '      target: <span class="text-green-400">\'.experience\'</span>,' },
  { num: 7, text: '      duration: <span class="text-green-400">\'5+ years\'</span>,' },
  { num: 8, text: '      ease: <span class="text-green-400">\'power4.out\'</span>' },
  { num: 9, text: '    <span class="text-white/40">})</span>;' },
  { num: 10, text: '  <span class="text-white/40">}</span>, <span class="text-white/40">[</span>passion<span class="text-white/40">])</span>;' },
  { num: 11, text: '' },
  { num: 12, text: '  <span class="text-purple-400">return</span> <span class="text-amber-400">&lt;DigitalExperience /&gt;</span>;' },
  { num: 13, text: '<span class="text-white/40">}</span>;' },
];

const techStack = ['React', 'TypeScript', 'Next.js', 'GSAP', 'Tailwind', 'Node.js'];

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!containerRef.current || !nameRef.current) return;

    // Mouse parallax for floating shapes
    const handleMouseMove = (e: MouseEvent) => {
      const mx = (e.clientX / window.innerWidth - 0.5) * 2;
      const my = (e.clientY / window.innerHeight - 0.5) * 2;

      gsap.to('.parallax-slow', { x: mx * 20, y: my * 20, duration: 1.2, ease: 'power2.out' });
      gsap.to('.parallax-med', { x: mx * 40, y: my * 40, duration: 1, ease: 'power2.out' });
      gsap.to('.parallax-fast', { x: mx * 60, y: my * 60, duration: 0.8, ease: 'power2.out' });
    };
    window.addEventListener('mousemove', handleMouseMove);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Letters
      const letters = nameRef.current!.querySelectorAll('.letter');
      tl.set(letters, { y: 120, opacity: 0 });
      tl.to(letters, { y: 0, opacity: 1, duration: 1, stagger: 0.05, ease: 'power4.out', delay: 0.3 });

      // Accent line draws
      tl.from('.hero-line', { scaleX: 0, transformOrigin: 'left center', duration: 0.8, ease: 'power2.out' }, '-=0.6');

      // Subtitle + role
      tl.from('.hero-subtitle', { y: 30, opacity: 0, duration: 0.8 }, '-=0.5');
      tl.from('.hero-role', { y: 20, opacity: 0, duration: 0.6 }, '-=0.4');

      // Tech pills
      tl.from('.tech-pill', { y: 15, opacity: 0, stagger: 0.06, duration: 0.5 }, '-=0.3');

      // Code editor
      tl.from('.code-editor', { x: 80, opacity: 0, duration: 1.2, ease: 'power3.out' }, '-=1');
      tl.from('.code-line', { x: 20, opacity: 0, stagger: 0.04, duration: 0.4 }, '-=0.8');

      // Floating shapes
      tl.from('.float-shape', { scale: 0, opacity: 0, stagger: 0.08, duration: 0.6, ease: 'back.out(2)' }, '-=1');

      // Availability badge
      tl.from('.avail-badge', { y: 10, opacity: 0, duration: 0.5 }, '-=0.6');

      // Scroll indicator
      tl.from('.scroll-indicator', { opacity: 0, y: -10, duration: 0.6 }, '-=0.2');

      // Continuous shape floating
      gsap.utils.toArray<HTMLElement>('.float-shape').forEach((s, i) => {
        gsap.to(s, {
          y: `+=${12 + i * 6}`,
          rotation: `+=${8 + i * 4}`,
          duration: 3 + i * 0.7,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1,
        });
      });

      // Cursor blink
      gsap.to('.cursor-blink', { opacity: 0, duration: 0.5, ease: 'steps(1)', repeat: -1, yoyo: true });

      // Pin
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: '+=50%',
        pin: true,
        pinSpacing: true,
      });
    }, containerRef.current);

    return () => {
      ctx.revert();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const name = 'Sienz';

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Grain */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')]" />

      {/* ── Floating geometric shapes ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large circle outline */}
        <div className="float-shape parallax-slow absolute top-[12%] right-[8%] w-72 h-72 border border-accent/10 rounded-full" />
        {/* Small filled dot */}
        <div className="float-shape parallax-fast absolute top-[22%] right-[38%] w-2.5 h-2.5 bg-accent/30 rounded-full" />
        {/* Diagonal line */}
        <div className="float-shape parallax-med absolute top-[65%] right-[12%] w-36 h-px bg-accent/15 rotate-[35deg]" />
        {/* Dot grid */}
        <div className="float-shape parallax-slow absolute bottom-[22%] right-[28%] grid grid-cols-4 gap-3">
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={i} className="w-1 h-1 bg-accent/15 rounded-full" />
          ))}
        </div>
        {/* Ring bottom-left */}
        <div className="float-shape parallax-med absolute bottom-[18%] left-[4%] w-44 h-44 border border-border rounded-full" />
        {/* Cross mark */}
        <div className="float-shape parallax-fast absolute top-[8%] left-[28%]">
          <div className="w-5 h-px bg-accent/20 absolute top-1/2 left-0" />
          <div className="w-px h-5 bg-accent/20 absolute left-1/2 top-0" />
        </div>
        {/* Code brackets */}
        <div className="float-shape parallax-slow absolute top-[42%] left-[6%] font-mono text-7xl text-primary/[0.04] select-none leading-none">
          &lt;/&gt;
        </div>
        {/* Small ring */}
        <div className="float-shape parallax-fast absolute top-[55%] right-[42%] w-16 h-16 border border-accent/10 rounded-full" />
      </div>

      {/* ── Content ── */}
      <div className="relative max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left side */}
          <div className="lg:col-span-7">
            {/* Availability */}
            <div className="avail-badge inline-flex items-center gap-2 px-3 py-1.5 border border-border rounded-full mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className="font-mono text-[10px] text-muted tracking-wider uppercase">
                Available for work
              </span>
            </div>

            {/* Eyebrow */}
            <p className="hero-subtitle font-mono text-accent text-sm tracking-[0.3em] uppercase mb-4">
              Frontend Developer
            </p>

            {/* Name — massive */}
            <h1
              ref={nameRef}
              className="font-display text-[clamp(4.5rem,15vw,12rem)] leading-[0.85] text-primary mb-3 overflow-hidden"
            >
              {name.split('').map((letter, i) => (
                <span key={i} className="letter inline-block">
                  {letter}
                </span>
              ))}
            </h1>

            {/* Accent line */}
            <div className="hero-line h-[2px] w-52 bg-gradient-to-r from-accent to-accent/0 mb-8" />

            {/* Description */}
            <p className="hero-role max-w-lg text-muted text-lg md:text-xl leading-relaxed mb-8">
              Crafting elegant, performant digital experiences with an obsessive
              attention to detail and motion.
            </p>

            {/* Tech pills */}
            <div className="flex flex-wrap gap-2">
              {techStack.map((t) => (
                <span
                  key={t}
                  className="tech-pill px-3 py-1 font-mono text-[11px] text-muted border border-border rounded-full hover:border-accent/50 hover:text-accent transition-colors cursor-default"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right side — Code editor */}
          <div className="code-editor lg:col-span-5 hidden lg:block">
            <div className="relative rounded-xl border border-border bg-[#1a1814] shadow-2xl shadow-primary/5 overflow-hidden">
              {/* Title bar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-[#141210] border-b border-white/[0.06]">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                </div>
                <span className="ml-3 font-mono text-[10px] text-white/25 tracking-wide">
                  portfolio.tsx
                </span>
                <div className="ml-auto flex gap-3">
                  <span className="font-mono text-[9px] text-white/15">TypeScript React</span>
                </div>
              </div>

              {/* Code block */}
              <div className="p-5 font-mono text-[12.5px] md:text-[13px] leading-[1.8] overflow-hidden">
                {codeLines.map((line) => (
                  <div key={line.num} className="code-line flex">
                    <span className="w-5 text-right mr-5 text-white/15 select-none text-[11px] shrink-0">
                      {line.num}
                    </span>
                    <span
                      className="text-white/60"
                      dangerouslySetInnerHTML={{ __html: line.text || '&nbsp;' }}
                    />
                  </div>
                ))}
                {/* Cursor line */}
                <div className="code-line flex">
                  <span className="w-5 text-right mr-5 text-white/15 select-none text-[11px] shrink-0">
                    14
                  </span>
                  <span className="cursor-blink inline-block w-[7px] h-[18px] bg-accent/70 rounded-[1px]" />
                </div>
              </div>

              {/* Status bar */}
              <div className="flex items-center justify-between px-4 py-1.5 bg-[#141210] border-t border-white/[0.06]">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-green-500/60" />
                  <span className="font-mono text-[9px] text-white/20">Ln 14, Col 1</span>
                </div>
                <span className="font-mono text-[9px] text-white/20">UTF-8</span>
              </div>
            </div>

            {/* Subtle reflection */}
            <div className="absolute -bottom-4 left-4 right-4 h-8 bg-gradient-to-b from-primary/[0.02] to-transparent rounded-b-xl blur-sm" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-mono text-[10px] text-muted tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-accent/50 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
