"use client";

import { motion } from "framer-motion";
import "./Certifications.css";

const certifications = [
  {
    name: "ENERGY STAR®",
    version: "V7.0",
    image: "/icons/energystar.webp",
  },
  {
    name: "FGIA",
    version: "CERTIFIED",
    image: "/icons/fgia.jpg",
  },
  {
    name: "NFRC",
    version: "CERTIFIED",
    image: "/icons/nfrc.png",
  },
  {
    name: "ASTM",
    version: "COMPLIANT",
    image: "/icons/astm.png",
  },
  {
    name: "ISO",
    version: "QUALITY STANDARD",
    image: "/icons/iso.png",
  },
  {
    name: "SA",
    version: "CERTIFIED",
    image: "/icons/sa.jpg",
  },
];

export default function Certifications() {
  const logos = [...certifications, ...certifications];

  return (
    <section className="certifications" id="certifications">
      <div className="certifications-container">
        <motion.div
          className="certifications-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span>CERTIFICATIONS & STANDARDS</span>

          <h2>
            Quality Backed by
            <strong>Recognized Standards.</strong>
          </h2>

          <p>
            Our commitment to performance and quality is
            supported by recognized industry standards and
            certifications.
          </p>
        </motion.div>
      </div>

      <div className="certifications-marquee">
        <div className="certifications-track">
          {logos.map((certification, index) => (
            <div
              className="certification-logo"
              key={`${certification.name}-${index}`}
            >
              <div className="certification-logo-image">
                <img
                  src={certification.image}
                  alt={`${certification.name} certification`}
                />
              </div>

              <div className="certification-logo-text">
                <strong>{certification.name}</strong>
                <small>{certification.version}</small>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="certifications-container">
        <div className="certifications-note">
          <span>PERFORMANCE</span>

          <p>
            Certification and product information available
            upon request.
          </p>
        </div>
      </div>
    </section>
  );
}