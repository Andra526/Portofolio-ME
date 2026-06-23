import Reveal from "./Reveal";
import Icon from "./Icon";

export default function Contact() {
  return (
    <section id="kontak" className="contact">
      <div className="section-inner">
        <Reveal>
          <div className="contact-card">
            <p className="section-eyebrow section-eyebrow-light">Mari Terhubung</p>
            <h2 className="contact-title">
              Tertarik bekerja sama atau sekadar diskusi soal kode?
            </h2>
            <p className="contact-text">
              Saya selalu terbuka untuk peluang magang, kerja sama proyek, atau ngobrol
              santai soal teknologi. Jangan ragu untuk menyapa.
            </p>
            <div className="contact-actions">
              <a
                href="https://github.com/Andra526?tab=repositories"
                target="_blank"
                rel="noreferrer"
                className="btn btn-light"
              >
                <Icon name="github" size={18} />
                GitHub
              </a>
              <a href="mailto:andra.setya@email.com" className="btn btn-light-outline">
                <Icon name="mail" size={18} />
                Email Saya
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
