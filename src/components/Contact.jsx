import { GitHubIcon, MailIcon, LinkedInIcon, MapPinIcon, ExternalLinkIcon } from "./Icons";
import useReveal from "../hooks/useReveal";
import "./Contact.css";

// Update the values below with real contact details.
const CONTACT_EMAIL = "kashishsvk2603@gmail.com";
const GITHUB_URL = "https://github.com/kashishsevak";
const LINKEDIN_URL = "https://linkedin.com/in/kashish-sevak";

export default function Contact() {
  const [ref, visible] = useReveal();

  return (
    <section id="contact" className="section contact">
      <div ref={ref} className={`section-inner rise ${visible ? "is-visible" : ""}`}>
        <div className="eyebrow-index">
          <span className="idx">05</span>
          <span className="rule" />
          <span className="label">Contact</span>
        </div>

        <div className="contact__grid">
          <div className="contact__intro">
            <h2 className="section-title contact__title">
              Let's build something worth shipping.
            </h2>
            <p className="section-lede">
              I'm actively looking for my first full-time role as a MERN
              stack developer. If you have an opening, a project, or just
              want to talk shop — my inbox is open.
            </p>
            <a href={`mailto:${CONTACT_EMAIL}`} className="btn btn-primary contact__cta">
              <MailIcon /> Say hello
            </a>
          </div>

          <ul className="contact__list">
            <li>
              <a href={`mailto:${CONTACT_EMAIL}`} className="contact__row">
                <span className="contact__row-icon">
                  <MailIcon width={18} height={18} />
                </span>
                <span className="contact__row-text">
                  <span className="contact__row-label">Email</span>
                  <span className="contact__row-value">{CONTACT_EMAIL}</span>
                </span>
                <ExternalLinkIcon className="contact__row-arrow" width={16} height={16} />
              </a>
            </li>
            <li>
              <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="contact__row">
                <span className="contact__row-icon">
                  <GitHubIcon width={18} height={18} />
                </span>
                <span className="contact__row-text">
                  <span className="contact__row-label">GitHub</span>
                  <span className="contact__row-value">github.com/kashishsevak</span>
                </span>
                <ExternalLinkIcon className="contact__row-arrow" width={16} height={16} />
              </a>
            </li>
            <li>
              <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="contact__row">
                <span className="contact__row-icon">
                  <LinkedInIcon width={18} height={18} />
                </span>
                <span className="contact__row-text">
                  <span className="contact__row-label">LinkedIn</span>
                  <span className="contact__row-value">linkedin.com/in/kashish-sevak</span>
                </span>
                <ExternalLinkIcon className="contact__row-arrow" width={16} height={16} />
              </a>
            </li>
            <li>
              <span className="contact__row contact__row--static">
                <span className="contact__row-icon">
                  <MapPinIcon width={18} height={18} />
                </span>
                <span className="contact__row-text">
                  <span className="contact__row-label">Location</span>
                  <span className="contact__row-value">India · open to remote</span>
                </span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
