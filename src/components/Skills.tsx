import Reveal from "./Reveal";
import Icon from "./Icon";
import { skillGroups } from "../data/skills";

export default function Skills() {
  return (
    <section id="keahlian" className="skills">
      <div className="section-inner">
        <Reveal>
          <p className="section-eyebrow">Keahlian</p>
        </Reveal>
        <Reveal delay={60}>
          <h2 className="section-title">Stack yang saya pakai sehari-hari</h2>
        </Reveal>
        <div className="skills-grid">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={120 + i * 80}>
              <div className="skill-card">
                <div className="skill-card-top">
                  <span className="skill-card-icon">
                    <Icon name={group.icon} size={20} />
                  </span>
                  <span className="skill-card-level">{group.level}</span>
                </div>
                <h3 className="skill-card-title">{group.title}</h3>
                <ul className="skill-card-list">
                  {group.skills.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
