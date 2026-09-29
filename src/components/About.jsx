import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  DownloadIcon,
  MapPinIcon,
  BracketsIcon,
  ZapIcon,
  TargetIcon,
} from "./Icons";
import useReveal from "../hooks/useReveal";
import useSpotlight from "../hooks/useSpotlight";
import "./About.css";

const FACTS = [
  { label: "Based in", value: "India", icon: MapPinIcon },
  { label: "Focus", value: "MERN Stack", icon: BracketsIcon },
  { label: "Currently", value: "Shipping side projects", icon: ZapIcon },
  { label: "Looking for", value: "Entry-level roles", icon: TargetIcon },
];

const STACK = ["React.js", "Node.js", "MongoDB", "Express.js"];

export default function About() {
  const [ref, visible] = useReveal();
  const spotRef = useSpotlight();

  return (
    <section id="about" className="section about">
      <div ref={ref} className={`section-inner rise ${visible ? "is-visible" : ""}`}>
        <div className="eyebrow-index">
          <span className="idx">02</span>
          <span className="rule" />
          <span className="label">About</span>
        </div>

        <div className="about__grid">
          <div className="about__card glass spot" ref={spotRef}>
            <span className="about__status">
              <span className="about__status-dot" />
              Available for opportunities
            </span>

            <div className="about__card-photo">
              <img
                src="/images/profile.png"
                alt="Portrait of Kashish Sevak"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.nextElementSibling.style.display = "flex";
                }}
              />
              <div className="about__card-fallback">KS</div>
            </div>
            <h3 className="about__card-name">Kashish Sevak</h3>
            <p className="about__card-role">MERN Stack Developer</p>

            <div className="about__card-stack">
              {STACK.map((tech) => (
                <span className="about__card-chip" key={tech}>
                  {tech}
                </span>
              ))}
            </div>

            <div className="about__card-social">
              <a
                href="https://github.com/kashishsevak"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
              >
                <GitHubIcon width={17} height={17} />
              </a>
              <a
                href="https://linkedin.com/in/kashish-sevak"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
              >
                <LinkedInIcon width={17} height={17} />
              </a>
              <a href="mailto:kashishsvk2603@gmail.com" aria-label="Send an email">
                <MailIcon width={17} height={17} />
              </a>
            </div>
            <a
              href="/resume/Kashish-Sevak-Resume.pdf"
              download="Kashish-Sevak-Resume.pdf"
              className="btn btn-ghost about__resume-btn"
            >
              <DownloadIcon width={16} height={16} /> Download Resume
            </a>
          </div>

          <div className="about__copy">
            <h2 className="section-title">
              A fresher who learns fast and builds by doing.
            </h2>
            <p className="section-lede">
              I got into web development because I liked seeing an idea turn
              into something people could actually use. My focus is the
              MERN stack — MongoDB, Express, React and Node.js — backed by a
              solid grounding in C and C++. As a fresher, I'm chasing steady,
              visible progress: one project, one bug, one better decision at
              a time.
            </p>

            <div className="about__facts">
              {FACTS.map((fact, index) => (
                <div
                  className={`about__fact stagger-item ${visible ? "is-visible" : ""}`}
                  style={{ "--i": index }}
                  key={fact.label}
                >
                  <span className="about__fact-icon">
                    <fact.icon width={17} height={17} />
                  </span>
                  <span className="about__fact-copy">
                    <span className="about__fact-label">{fact.label}</span>
                    <span className="about__fact-value">{fact.value}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
