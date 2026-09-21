import { ArrowDownIcon } from "./Icons";
import useMagnetic from "../hooks/useMagnetic";
import "./Hero.css";

// To use your own photo: replace the file at public/images/profile.jpg
// with any image of the same name (recommended: a square-ish portrait,
// at least 800x1000px). No code changes needed — the path below stays
// the same. If the file is missing, a monogram placeholder is shown instead.

export default function Hero() {
  const magneticRef = useMagnetic(14);

  return (
    <section id="hero" className="hero section">
      <div className="hero__glow" aria-hidden="true" />
      <div className="hero__grid">
        <div className="hero__text">
          <p className="hero__kicker">MERN Stack Developer · Fresher</p>
          <h1 className="hero__name">
            Kashish Sevak builds clean,
            <br />
            functional web experiences.
          </h1>
          <p className="hero__intro">
            I'm a fresher developer who enjoys turning ideas into working
            products — from REST APIs to the interfaces people actually
            click on. Comfortable across the MongoDB, Express, React and
            Node.js stack, and always looking for the next problem worth
            solving.
          </p>

          <div className="hero__cta">
            <a href="#projects" className="btn btn-primary" ref={magneticRef}>
              View Projects
            </a>
            <a href="#contact" className="btn btn-ghost">
              Get in Touch
            </a>
          </div>
        </div>

        <div className="hero__photo-wrap" aria-hidden="false">
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
