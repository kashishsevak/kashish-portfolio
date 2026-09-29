import { useEffect, useState } from "react";
import { ArrowDownIcon } from "./Icons";
import useMagnetic from "../hooks/useMagnetic";
import "./Hero.css";

// To use your own photo: replace the file at public/images/profile.jpg
// with any image of the same name (recommended: a square-ish portrait,
// at least 800x1000px). No code changes needed — the path below stays
// the same. If the file is missing, a monogram placeholder is shown instead.

// Headline text, broken into words purely for the entrance animation
// (each word rises out of its own mask on load). The copy itself is
// unchanged from the original — this only affects markup, not content.
const HEADLINE_LINE_1 = ["Kashish", "Sevak", "builds", "clean,"];
const HEADLINE_LINE_2 = ["functional", "web", "experiences."];

export default function Hero() {
  const magneticRef = useMagnetic(14);
  // One deliberate, orchestrated entrance on first paint (headline words,
  // then the intro/CTA/photo) rather than per-scroll reveals — this runs
  // once, a beat after mount, so the browser actually animates into the
  // "visible" state instead of painting it already-settled.
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section id="hero" className="hero section">
      <div className="hero__grid">
        <div className="hero__text">
          <p className={`hero__kicker hero__pop ${ready ? "is-visible" : ""}`} style={{ "--d": "0ms" }}>
            <span className="hero__kicker-dot" />
            MERN Stack Developer · Fresher
          </p>
          <h1 className="hero__name">
            <span className={`split hero__name-line ${ready ? "is-visible" : ""}`}>
              {HEADLINE_LINE_1.map((word, i) => (
                <span className="sw" key={word}>
                  <span className="sw__in" style={{ "--w": i, "--d": "120ms" }}>
                    {word}
                  </span>
                </span>
              )).reduce((acc, el, i) => (i === 0 ? [el] : [...acc, " ", el]), [])}
            </span>
            <span className={`split hero__name-line ${ready ? "is-visible" : ""}`}>
              {HEADLINE_LINE_2.map((word, i) => (
                <span className="sw" key={word}>
                  <span
                    className="sw__in"
                    style={{ "--w": i + HEADLINE_LINE_1.length, "--d": "120ms" }}
                  >
                    {word}
                  </span>
                </span>
              )).reduce((acc, el, i) => (i === 0 ? [el] : [...acc, " ", el]), [])}
            </span>
          </h1>
          <p className={`hero__intro hero__pop ${ready ? "is-visible" : ""}`} style={{ "--d": "760ms" }}>
            I'm a fresher developer who enjoys turning ideas into working
            products — from REST APIs to the interfaces people actually
            click on. Comfortable across the MongoDB, Express, React and
            Node.js stack, and always looking for the next problem worth
            solving.
          </p>

          <div className={`hero__cta hero__pop ${ready ? "is-visible" : ""}`} style={{ "--d": "880ms" }}>
            <a href="#projects" className="btn btn-primary" ref={magneticRef}>
              View Projects
            </a>
            <a href="#contact" className="btn btn-ghost">
              Get in Touch
            </a>
          </div>
        </div>

        <div className={`hero__photo-wrap hero__pop ${ready ? "is-visible" : ""}`} style={{ "--d": "320ms" }} aria-hidden="false">
          <span className="hero__ring hero__ring--dashed" aria-hidden="true" />
          <div className="hero__photo-circle">
            <img
              src="/images/profile.png"
              alt="Portrait of Kashish Sevak"
              className="hero__photo"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                e.currentTarget.nextElementSibling.style.display = "flex";
              }}
            />
            <div className="hero__photo-fallback">KS</div>
          </div>

          <span className="hero__chip hero__chip--top">{"</>"}  MERN</span>
          <span className="hero__chip hero__chip--bottom">
            <span className="hero__chip-dot" /> Open to opportunities
          </span>
        </div>
      </div>

      <a href="#about" className="hero__scroll" aria-label="Scroll to About section">
        <ArrowDownIcon width={16} height={16} />
        <span>Scroll</span>
      </a>
    </section>
  );
}
