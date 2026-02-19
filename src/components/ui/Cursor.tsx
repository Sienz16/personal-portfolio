import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Hide on touch devices
    if ('ontouchstart' in window) return;

    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    const pos = { x: 0, y: 0 };
    const mouse = { x: 0, y: 0 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      // Dot follows instantly
      gsap.set(cursor, { x: mouse.x, y: mouse.y });

      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnterHoverable = () => {
      gsap.to(follower, { scale: 2.5, duration: 0.3, ease: 'power2.out' });
      gsap.to(cursor, { scale: 0.5, duration: 0.3, ease: 'power2.out' });
    };

    const handleMouseLeaveHoverable = () => {
      gsap.to(follower, { scale: 1, duration: 0.3, ease: 'power2.out' });
      gsap.to(cursor, { scale: 1, duration: 0.3, ease: 'power2.out' });
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    // Follower lerp
    const tick = () => {
      pos.x += (mouse.x - pos.x) * 0.15;
      pos.y += (mouse.y - pos.y) * 0.15;
      gsap.set(follower, { x: pos.x, y: pos.y });
    };

    gsap.ticker.add(tick);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Attach hover listeners to interactive elements
    const hoverables = document.querySelectorAll(
      'a, button, [data-cursor-hover]'
    );
    hoverables.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnterHoverable);
      el.addEventListener('mouseleave', handleMouseLeaveHoverable);
    });

    return () => {
      gsap.ticker.remove(tick);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      hoverables.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnterHoverable);
        el.removeEventListener('mouseleave', handleMouseLeaveHoverable);
      });
    };
  }, []);

  return (
    <>
      {/* Dot */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-2 h-2 bg-accent rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
        style={{ opacity: isVisible ? 1 : 0 }}
      />
      {/* Follower ring */}
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-8 h-8 border border-accent/50 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
        style={{ opacity: isVisible ? 1 : 0 }}
      />
    </>
  );
}
