import React from 'react';
import { motion } from 'framer-motion';
import TreatmentCard from './TreatmentCard';
import './TreatmentsSection.css';

const TREATMENTS_DATA = [
  {
    title: "Dental implants",
    shortDesc: "Confident function, planned digitally.",
    longDesc: "Precision titanium foundations for natural chewing comfort and lifelong jaw preservation.",
    imageSrc: "https://framerusercontent.com/images/IrRhp04Oyhm3wi2VRpAz57L2DXA.png?width=1379&height=1379",
    imageAlt: "Dental implants digital 3D model"
  },
  {
    title: "Orthodontics",
    shortDesc: "A calmer path to a balanced smile.",
    longDesc: "Discreet aligners and tailored straightening schedules engineered around your daily flow.",
    imageSrc: "https://framerusercontent.com/images/rwEA7qZ6Cwgs1X4UnydgiQYfM.png?width=1308&height=1308",
    imageAlt: "Orthodontic alignment illustration"
  },
  {
    title: "Cosmetic dentistry",
    shortDesc: "Subtle changes, made personal.",
    longDesc: "Hand-finished porcelain veneers and gentle brightening designed to reflect natural tooth character.",
    imageSrc: "https://framerusercontent.com/images/MRAyxPShPd3CWSIVbDVbgGTYU.png?width=1104&height=1104",
    imageAlt: "Aesthetic cosmetic dental model"
  },
  {
    title: "Children’s care",
    shortDesc: "Gentle first visits that build trust.",
    longDesc: "Zero-anxiety examinations and friendly guidance creating positive dental confidence for a lifetime.",
    imageSrc: "https://framerusercontent.com/images/MYAxgLRtrPFDvhCbEeUZRco7yc.png?width=1072&height=1072",
    imageAlt: "Pediatric gentle dental care"
  }
];

export default function TreatmentsSection() {
  return (
    <section id="treatments" className="treatments-section" aria-labelledby="treatments-heading">
      <div className="container">
        {/* Intro header */}
        <motion.div
          className="treatments-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="treatments-title-col">
            <h2 id="treatments-heading" className="treatments-heading">
              A clear path <br />to better care.
            </h2>
          </div>
          <div className="treatments-desc-col">
            <p className="treatments-body">
              No one-size-fits-all dentistry. Start with what you need, then explore what’s possible.
            </p>
            <a href="#booking" className="treatments-link">
              <span>Explore all treatments</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </motion.div>

        {/* 2x2 Grid */}
        <div className="treatments-grid">
          {TREATMENTS_DATA.map((t, idx) => (
            <TreatmentCard
              key={idx}
              index={idx}
              title={t.title}
              shortDesc={t.shortDesc}
              longDesc={t.longDesc}
              imageSrc={t.imageSrc}
              imageAlt={t.imageAlt}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
