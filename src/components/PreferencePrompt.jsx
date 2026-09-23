import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './PreferencePrompt.css';

const OPTIONS = [
  {
    id: "comfort",
    title: "Comfort",
    subtitle: "Gentle approach & sedation options"
  },
  {
    id: "confidence",
    title: "Confidence",
    subtitle: "Aesthetic refinement & natural smile harmony"
  },
  {
    id: "clarity",
    title: "Clarity",
    subtitle: "Transparent pricing & step-by-step guidance"
  }
];

export default function PreferencePrompt() {
  const [selected, setSelected] = useState("confidence");

  return (
    <section className="preference-section" aria-labelledby="preference-heading">
      <div className="container preference-container">
        <motion.div
          className="preference-header"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="preference-eyebrow">YOUR VISIT, YOUR WAY</span>
          <h2 id="preference-heading" className="preference-heading">
            What matters most to you?
          </h2>
          <p className="preference-intro">
            Tell us your main focus so we can tailor our consultation environment to your needs.
          </p>
        </motion.div>

        <motion.div
          className="preference-pills"
          role="radiogroup"
          aria-label="Visit priority choices"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          {OPTIONS.map((opt) => {
            const isChecked = selected === opt.id;
            return (
              <motion.button
                key={opt.id}
                role="radio"
                aria-checked={isChecked}
                className={`preference-pill ${isChecked ? 'is-selected' : ''}`}
                onClick={() => setSelected(opt.id)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                layout
              >
                <div className="pill-check-icon">
                  <AnimatePresence>
                    {isChecked && (
                      <motion.svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <path d="M2.5 6.5L4.5 8.5L9.5 3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      </motion.svg>
                    )}
                  </AnimatePresence>
                </div>
                <div className="pill-text-wrap">
                  <span className="pill-title">{opt.title}</span>
                  <span className="pill-sub">{opt.subtitle}</span>
                </div>
              </motion.button>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
