import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './DoctorsSection.css';

export default function DoctorsSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="doctors" className="doctors-section" aria-labelledby="doctors-title">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="doctors-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="doctors-header-left">
            <span className="doctors-eyebrow">OUR CLINICAL TEAM</span>
            <h2 id="doctors-title" className="doctors-heading">
              People you can <br />talk to.
            </h2>
          </div>
          <div className="doctors-header-right">
            <p className="doctors-lead-text">
              Experienced specialists, introduced like people — not résumés. Every member of our clinic is committed to patient clarity, unhurried consultations, and digital treatment precision.
            </p>
          </div>
        </motion.div>

        {/* Doctor Spotlight Layout */}
        <motion.div
          className="doctor-spotlight-card"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Left: 3:4 Portrait */}
          <div className="doctor-image-container">
            <img
              src="https://framerusercontent.com/images/Iv2g7cyDjWCoDIxJjGn3GsIUQ.webp?width=735&height=981"
              alt="Dr. Jacob Andrew, Lead Dentist"
              className="doctor-portrait-img"
              loading="lazy"
            />
            <div className="doctor-portrait-badge">
              <span>LEAD DENTIST</span>
            </div>
          </div>

          {/* Right: Philosophy & Stats */}
          <div className="doctor-info-container">
            <div className="doctor-bio-top">
              <span className="doctor-role-tag">Prosthodontics · Digital smile design</span>
              <h3 className="doctor-name">Dr. Jacob Andrew</h3>
              <p className="doctor-philosophy-label">Doctor philosophy statement</p>
              <blockquote className="doctor-quote">
                “Patients should understand what we are doing, why we are doing it, and what comes next.”
              </blockquote>
            </div>

            <div className="doctor-stats-row">
              <div className="stat-item">
                <span className="stat-number">8+ years</span>
                <span className="stat-desc">Clinical experience</span>
              </div>
              <div className="stat-divider" aria-hidden="true"></div>
              <div className="stat-item">
                <span className="stat-number">Digital</span>
                <span className="stat-desc">Smile planning</span>
              </div>
              <div className="stat-divider" aria-hidden="true"></div>
              <div className="stat-item">
                <span className="stat-number">1:1</span>
                <span className="stat-desc">Patient consultations</span>
              </div>
            </div>

            <div className="doctor-action">
              <motion.button
                type="button"
                className="btn-view-profile"
                onClick={() => setModalOpen(true)}
                aria-haspopup="dialog"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>View Profile</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Profile Modal with Framer Motion AnimatePresence */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            className="doctor-modal-backdrop"
            onClick={() => setModalOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-doc-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <motion.div
              className="doctor-modal-content"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.94, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 15 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <button className="modal-close-btn" onClick={() => setModalOpen(false)} aria-label="Close profile modal">
                ✕
              </button>
              <div className="modal-header">
                <span className="doctor-role-tag">LEAD DENTIST · PROSTHODONTICS</span>
                <h3 id="modal-doc-title" className="doctor-name">Dr. Jacob Andrew</h3>
                <p className="modal-location">Redent Clinic · Suite 402</p>
              </div>
              <div className="modal-body">
                <p>
                  Dr. Jacob Andrew completed his postgraduate training in advanced prosthodontics and computer-guided implantology. With an emphasis on digital smile replication, he ensures each patient experiences minimally invasive treatment with full visual previews beforehand.
                </p>
                <div className="modal-stats-grid">
                  <div>
                    <strong>Education</strong>
                    <p>DDS, Advanced Prosthodontics Fellowship</p>
                  </div>
                  <div>
                    <strong>Specialization</strong>
                    <p>Full arch restoration, porcelain ceramics, aligners</p>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <a href="#booking" className="btn-primary" onClick={() => setModalOpen(false)}>
                  Book consultation with Dr. Andrew
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
