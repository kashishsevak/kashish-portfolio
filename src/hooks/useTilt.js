import { useEffect, useRef } from "react";

// A restrained tilt: the card leans a few degrees toward the pointer and
// eases back to flat on leave. Capped at a small max angle so it reads as
// tactile polish rather than a gimmick. Skipped for touch/reduced motion.
export default function useTilt(maxDeg = 5) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!isFinePointer || prefersReducedMotion) return undefined;

    const handleMove = (e) => {
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      el.style.transform = `perspective(900px) rotateX(${(-py * maxDeg).toFixed(
        2
      )}deg) rotateY(${(px * maxDeg).toFixed(2)}deg) translateY(-4px)`;
    };

    const handleLeave = () => {
      el.style.transform = "perspective(900px) rotateX(0) rotateY(0) translateY(0)";
    };

    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", handleLeave);
    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", handleLeave);
    };
  }, [maxDeg]);

  return ref;
}
