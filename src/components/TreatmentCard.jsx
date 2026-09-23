import React from 'react';
import { motion } from 'framer-motion';
import './TreatmentCard.css';

export default function TreatmentCard({ title, shortDesc, longDesc, imageSrc, imageAlt, index }) {
  return (
    <motion.article
      className="treatment-card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.55,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1]
      }}
      whileHover={{ y: -3 }}
    >
      <div className="treatment-card-content">
        <div className="treatment-card-top">
          <div className="treatment-heading-wrap">
            <h3 className="treatment-card-title">{title}</h3>
            <p className="treatment-card-short">{shortDesc}</p>
          </div>
          <div className="treatment-arrow-btn" aria-hidden="true">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        <div className="treatment-card-bottom">
          <p className="treatment-card-long">{longDesc}</p>
          <div className="treatment-image-box">
            <img src={imageSrc} alt={imageAlt} className="treatment-card-img" loading="lazy" />
          </div>
        </div>
      </div>
    </motion.article>
  );
}
