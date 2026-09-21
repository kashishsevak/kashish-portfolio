import { projects } from "../data/projects";
import useReveal from "../hooks/useReveal";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

export default function Projects() {
  const [ref, visible] = useReveal();

  return (
    <section id="projects" className="section projects">
      <div ref={ref} className={`section-inner reveal ${visible ? "is-visible" : ""}`}>
        <div className="eyebrow-index">
          <span className="idx">04</span>
          <span className="rule" />
          <span className="label">Projects</span>
        </div>

        <h2 className="section-title">Things I've shipped.</h2>
        <p className="section-lede">
          A mix of solo and team work — each one built to learn something
          specific about the MERN stack, from data modelling to shipping a
          live product.
        </p>

        <div className="projects__list">
          {projects.map((project, index) => (
            <div
              className={`stagger-item ${visible ? "is-visible" : ""}`}
              style={{ "--i": index }}
              key={project.name}
            >
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
