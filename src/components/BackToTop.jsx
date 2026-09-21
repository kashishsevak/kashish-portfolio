import { useEffect, useState } from "react";
import { ArrowDownIcon } from "./Icons";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => setVisible(window.scrollY > window.innerHeight * 0.8);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <button
      className={`back-to-top ${visible ? "is-visible" : ""}`}
      onClick={() => {
        if (window.__lenis) {
          window.__lenis.scrollTo(0, { duration: 1.2 });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }}
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
    >
      <ArrowDownIcon width={17} height={17} style={{ transform: "rotate(180deg)" }} />
    </button>
  );
}
