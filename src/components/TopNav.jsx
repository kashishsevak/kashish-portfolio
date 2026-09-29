import { useEffect, useRef, useState } from "react";
import { GitHubIcon, MailIcon, MenuIcon, CloseIcon, LogoMark, SunIcon, MoonIcon } from "./Icons";
import useTheme from "../hooks/useTheme";
import "./TopNav.css";

const SECTIONS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function TopNav({ activeId }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, toggleTheme] = useTheme();
  const headerRef = useRef(null);

  // Purely cosmetic: the nav tightens into a smaller, more opaque pill
  // once the page has scrolled a little, so it reads as "floating" over
  // the hero at first and "docked" once content is underneath it.
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  // Measure the header's real rendered height (it can change with font
  // scaling, wrapping, etc. across devices) and expose it as a CSS
  // variable, so the mobile menu panel always starts exactly below the
  // header instead of a guessed pixel value that could clip its top row.
  useEffect(() => {
    const header = headerRef.current;
    if (!header || typeof ResizeObserver === "undefined") return undefined;

    const setHeight = () => {
      header.style.setProperty("--nav-h", `${header.offsetHeight}px`);
    };

    setHeight();
    const observer = new ResizeObserver(setHeight);
    observer.observe(header);
    return () => observer.disconnect();
  }, []);

  // Lock background scroll while the full-screen mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNavigate = (id) => {
    setOpen(false);
    const target = document.getElementById(id);
    if (!target) return;
    if (window.__lenis) {
      window.__lenis.scrollTo(target, { offset: 0, duration: 1.2 });
    } else {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={`top-nav ${scrolled ? "is-scrolled" : ""}`} ref={headerRef}>
      <div className="top-nav__inner">
        <a href="#hero" className="top-nav__brand">
          <LogoMark className="top-nav__mark" aria-hidden="true" />
          <span className="top-nav__name">
            Kashish Sevak<span className="top-nav__caret">_</span>
          </span>
        </a>

        <nav className="top-nav__links" aria-label="Section navigation">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`top-nav__link ${activeId === s.id ? "is-active" : ""}`}
            >
              {s.label}
            </a>
          ))}
        </nav>

        <div className="top-nav__actions">
          <a
            href="https://github.com/kashishsevak"
            target="_blank"
            rel="noreferrer"
            className="top-nav__icon-btn"
            aria-label="GitHub profile"
          >
            <GitHubIcon width={17} height={17} />
          </a>
          <a href="#contact" className="btn btn-primary top-nav__cta">
            Let's talk
          </a>
          <button
            type="button"
            className="top-nav__theme-btn"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
          >
            {theme === "dark" ? (
              <SunIcon width={17} height={17} />
            ) : (
              <MoonIcon width={17} height={17} />
            )}
          </button>
          <button
            className="top-nav__toggle"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <CloseIcon width={22} height={22} /> : <MenuIcon width={22} height={22} />}
          </button>
        </div>
      </div>

      <div className={`top-nav__mobile ${open ? "is-open" : ""}`}>
        <ul>
          {SECTIONS.map((s) => (
            <li key={s.id}>
              <button
                className={activeId === s.id ? "is-active" : ""}
                onClick={() => handleNavigate(s.id)}
              >
                {s.label}
              </button>
            </li>
          ))}
        </ul>
        <div className="top-nav__mobile-social">
          <a href="https://github.com/kashishsevak" target="_blank" rel="noreferrer">
            <GitHubIcon width={18} height={18} /> GitHub
          </a>
          <a href="mailto:kashishsvk2603@gmail.com">
            <MailIcon width={18} height={18} /> Email
          </a>
        </div>
      </div>
    </header>
  );
}
