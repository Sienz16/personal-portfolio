export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <span className="font-display text-lg text-primary">
            S<span className="text-accent">.</span>
          </span>

          {/* Copyright */}
          <p className="font-mono text-xs text-muted">
            &copy; {year} Sienz. All rights reserved.
          </p>

          {/* Back to top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-mono text-xs text-muted hover:text-accent transition-colors tracking-wider uppercase"
            data-cursor-hover
          >
            Back to top &#8593;
          </button>
        </div>
      </div>
    </footer>
  );
}
