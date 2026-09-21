import { useEffect, useRef } from "react";

// Nudges an element a few pixels toward the pointer while hovered, then
// eases back to rest. Applied sparingly (hero CTAs only) so it reads as
// one deliberate, tactile moment rather than a page-wide gimmick.
export default function useMagnetic(strength = 16) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return undefined;

    const handleMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);
      el.style.transform = `translate(${(x / rect.width) * strength}px, ${
        (y / rect.height) * strength
      }px)`;
    };

    const handleLeave = () => {
      el.style.transform = "translate(0, 0)";
    };

    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", handleLeave);
    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", handleLeave);
    };
  }, [strength]);

  return ref;
}
