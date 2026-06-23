import { useEffect } from "react";
import type { Certificate } from "../data/types";

interface CertificateLightboxProps {
  certificate: Certificate;
  onClose: () => void;
}

export default function CertificateLightbox({ certificate, onClose }: CertificateLightboxProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="lightbox-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="lightbox-close" onClick={onClose} aria-label="Tutup">
          &times;
        </button>
        <img src={certificate.image} alt={certificate.title} />
        <div className="lightbox-caption">
          <h3>{certificate.title}</h3>
          <p>
            {certificate.issuer} &middot; {certificate.date}
          </p>
        </div>
      </div>
    </div>
  );
}
