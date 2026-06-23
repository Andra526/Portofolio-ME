import { useState } from "react";
import Reveal from "./Reveal";
import Icon from "./Icon";
import CertificateLightbox from "./CertificateLightbox";
import { certificates } from "../data/certificates";
import type { Certificate } from "../data/types";

export default function Certificates() {
  const [selected, setSelected] = useState<Certificate | null>(null);

  return (
    <section id="sertifikat" className="certificates">
      <div className="section-inner">
        <Reveal>
          <p className="section-eyebrow">Sertifikat &amp; Pelatihan</p>
        </Reveal>
        <Reveal delay={60}>
          <h2 className="section-title">Bukti belajar yang konsisten</h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="projects-intro">
            Beberapa pelatihan dan workshop yang sudah saya selesaikan, dari dasar
            algoritma hingga pengembangan web. Klik kartu untuk melihat sertifikat
            ukuran penuh.
          </p>
        </Reveal>

        <div className="certificates-grid">
          {certificates.map((cert, i) => (
            <Reveal key={cert.id} delay={(i % 3) * 90}>
              <button
                type="button"
                className="certificate-card"
                onClick={() => setSelected(cert)}
              >
                <div className="certificate-thumb">
                  <img src={cert.image} alt={cert.title} loading="lazy" />
                  <span className="certificate-zoom">
                    <Icon name="external-link" size={16} />
                  </span>
                </div>
                <div className="certificate-body">
                  <span className="certificate-issuer">{cert.issuer}</span>
                  <h3 className="certificate-title">{cert.title}</h3>
                  <span className="certificate-date">
                    <Icon name="award" size={14} />
                    {cert.date}
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {selected && (
        <CertificateLightbox certificate={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
