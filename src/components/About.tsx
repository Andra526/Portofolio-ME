import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="tentang" className="about">
      <div className="section-inner">
        <Reveal>
          <p className="section-eyebrow">Tentang Saya</p>
        </Reveal>
        <Reveal delay={60}>
          <h2 className="section-title">Dari iseng coding di SMA, jadi jalan hidup</h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="about-text">
            Saya mulai belajar coding sejak kelas 12 SMA, sekadar rasa penasaran yang
            kemudian berkembang jadi kebiasaan. Begitu masuk kuliah di Universitas Harkat
            Negeri, saya membangun ulang fondasi itu secara sistematis — mulai dari dasar
            pemrograman, struktur DOM dan HTML semantik, berbagai framework modern, hingga
            cara kerja basis data. Hasilnya adalah kumpulan proyek nyata: dari landing page
            company profile, sistem informasi desa, aplikasi kasir, sampai sistem pendukung
            keputusan dengan algoritma SAW.
          </p>
        </Reveal>
        <Reveal delay={180}>
          <p className="about-text">
            Saat ini saya paling kuat di sisi <strong>frontend</strong> — merancang antarmuka
            yang bersih, responsif, dan enak digunakan — namun saya juga terbiasa menangani
            <strong> backend</strong> dan alur kerja <strong>full stack</strong> secara
            menyeluruh. Target saya selanjutnya adalah berkontribusi di perusahaan besar
            sebagai Software Engineer / Full Stack Developer, tempat saya bisa terus belajar
            dari sistem berskala besar.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
