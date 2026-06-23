import Reveal from "./Reveal";
import Icon from "./Icon";
import type { Project } from "../data/types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <Reveal delay={(index % 3) * 90} className="project-card-wrap">
      <article className="project-card">
        <div className="project-thumb">
          <div className="browser-frame">
            <span className="browser-dot browser-dot-1" />
            <span className="browser-dot browser-dot-2" />
            <span className="browser-dot browser-dot-3" />
          </div>
          <img src={project.image} alt={`Tangkapan layar ${project.title}`} loading="lazy" />
          <div className="project-thumb-overlay">
            <a href={project.link} target="_blank" rel="noreferrer" className="project-thumb-link">
              Lihat detail <Icon name="arrow-up-right" size={14} />
            </a>
          </div>
        </div>
        <div className="project-body">
          <span className="project-category">{project.category}</span>
          <h3 className="project-title">{project.title}</h3>
          <p className="project-tagline">{project.tagline}</p>
          <p className="project-desc">{project.description}</p>
          <div className="project-stack">
            {project.stack.map((s) => (
              <span key={s} className="project-tag">
                {s}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Reveal>
  );
}
