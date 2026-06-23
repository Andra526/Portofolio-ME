import { useMemo, useState } from "react";
import Reveal from "./Reveal";
import ProjectCard from "./ProjectCard";
import { categories, projects } from "../data/projects";
import type { ProjectCategory } from "../data/types";

export default function Projects() {
  const [active, setActive] = useState<ProjectCategory>("Semua");

  const filtered = useMemo(() => {
    if (active === "Semua") return projects;
    return projects.filter((p) => p.category === active);
  }, [active]);

  return (
    <section id="proyek" className="projects">
      <div className="section-inner">
        <Reveal>
          <p className="section-eyebrow">Proyek</p>
        </Reveal>
        <Reveal delay={60}>
          <h2 className="section-title">10 proyek yang sudah saya bangun</h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="projects-intro">
            Mulai dari landing page company profile, sistem informasi, aplikasi kasir,
            hingga eksperimen AI. Semua kode sumbernya bisa dicek langsung di GitHub saya.
          </p>
        </Reveal>

        <Reveal delay={140}>
          <div className="filter-bar">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`filter-chip ${active === cat ? "filter-chip-active" : ""}`}
                onClick={() => setActive(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="projects-grid">
          {filtered.map((p, i) => (
            <ProjectCard project={p} index={i} key={p.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
