import Reveal from "./Reveal";
import Icon from "./Icon";
import portraitPhoto from "../assets/profile/andra-portrait.jpg";

export default function Hero() {
  return (
    <section id="beranda" className="hero">
      <div className="hero-bg-shape hero-bg-shape-1" />
      <div className="hero-bg-shape hero-bg-shape-2" />
      <div className="hero-inner">
        <div className="hero-text">
          <Reveal>
            <p className="eyebrow">
              <span className="eyebrow-dot" />
              Terbuka untuk peluang Software Engineer
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="hero-title">
              Halo, saya <span className="hero-title-accent">Andra Setya Ramadhani</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="hero-subtitle">
              Mahasiswa Informatika di Universitas Harkat Negeri, 21 tahun. Saya membangun
              antarmuka web yang rapi dan sistem yang berfungsi dari hulu ke hilir — dari
              frontend yang saya kuasai betul, hingga backend dan database di baliknya.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="hero-actions">
              <a href="#proyek" className="btn btn-primary">
                Lihat Proyek Saya
              </a>
              <a
                href="https://github.com/Andra526?tab=repositories"
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost"
              >
                Kunjungi GitHub
              </a>
            </div>
          </Reveal>
          <Reveal delay={320}>
            <div className="hero-stats">
              <div className="hero-stat">
                <span className="hero-stat-num">10+</span>
                <span className="hero-stat-label">Proyek dibangun</span>
              </div>
              <div className="hero-stat-divider" />
              <div className="hero-stat">
                <span className="hero-stat-num">6</span>
                <span className="hero-stat-label">Sertifikat &amp; pelatihan</span>
              </div>
              <div className="hero-stat-divider" />
              <div className="hero-stat">
                <span className="hero-stat-num">FE</span>
                <span className="hero-stat-label">Fokus utama</span>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120} className="hero-photo-wrap">
          <div className="hero-photo-frame">
            <img src={portraitPhoto} alt="Foto Andra Setya Ramadhani" />
            <div className="hero-badge hero-badge-1">
              <Icon name="code" size={16} />
              Frontend
            </div>
            <div className="hero-badge hero-badge-2">
              <Icon name="database" size={16} />
              Backend
            </div>
            <div className="hero-badge hero-badge-3">
              <Icon name="stack-2" size={16} />
              Full Stack
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
