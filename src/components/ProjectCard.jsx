import { GitHubIcon, ExternalLinkIcon, UsersIcon } from "./Icons";
import useTilt from "../hooks/useTilt";

export default function ProjectCard({ project, index }) {
  const { name, type, description, stack, github, live, accent } = project;
  const tiltRef = useTilt(3);

  return (
    <article
      className="project-card"
      ref={tiltRef}
      style={{ "--project-accent": accent }}
    >
      <span className="project-card__top-bar" />

      <div className="project-card__chrome">
        <span className="project-card__dot" />
        <span className="project-card__dot" />
        <span className="project-card__dot project-card__dot--accent" />
        <span className="project-card__path">~/projects/{name.toLowerCase().replace(/\s+/g, "-")}</span>
      </div>

      <div className="project-card__body">
        <div className="project-card__heading">
          <h3>{name}</h3>
          {type === "Group Project" && (
            <span className="tag project-card__type">
              <UsersIcon width={13} height={13} /> Group Project
            </span>
          )}
        </div>

        <p className="project-card__desc">{description}</p>

        <ul className="project-card__stack">
          {stack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>

        <div className="project-card__links">
          <a href={github} target="_blank" rel="noreferrer" className="btn btn-ghost">
            <GitHubIcon /> GitHub
          </a>
          {live && (
            <a href={live} target="_blank" rel="noreferrer" className="btn btn-primary">
              <ExternalLinkIcon /> Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
