import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type GsapCallback = (ctx: gsap.Context) => void;

/**
 * Hook that creates a GSAP context scoped to a container ref.
 * Automatically cleans up all animations on unmount.
 *
 * Usage:
 *   const containerRef = useGsap((ctx) => {
 *     gsap.from('.element', { opacity: 0, y: 50 });
 *   }, [deps]);
 */
export function useGsap(callback: GsapCallback, deps: unknown[] = []) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context((self) => {
      callback(self);
    }, containerRef.current);

    // eslint-disable-next-line consistent-return
    return () => {
      ctx.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return containerRef;
}

/**
 * Creates a ScrollTrigger-powered animation on a ref.
 */
export function useScrollAnimation(
  animation: (el: HTMLElement) => gsap.core.Timeline | gsap.core.Tween,
  deps: unknown[] = []
) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const anim = animation(ref.current);

    return () => {
      if (anim && 'kill' in anim) {
        anim.kill();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return ref;
}
