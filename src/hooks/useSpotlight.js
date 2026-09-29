import { useEffect, useRef } from "react";

// Tracks the pointer position over an element and exposes it as CSS
// custom properties (--mx / --my) so a purely-CSS radial highlight (the
// ".spot" utility class) can follow the cursor. No visual state lives in
// React — this only ever writes two style properties.
export default function useSpotlight() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const handleMove = (e) => {
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      el.style.setProperty("--my", `${e.clientY - rect.top}px`);
    };

    el.addEventListener("pointermove", handleMove);
    return () => el.removeEventListener("pointermove", handleMove);
  }, []);

  return ref;
}
