import React from 'react';
import { motion } from 'framer-motion';
import './ClaritySection.css';

const PILLARS = [
  {
    step: "01",
    title: "Listen first",
    desc: "We begin with your goals, not a sales pitch. We take time to understand your past experiences and comfort level."
  },
  {
    step: "02",
    title: "Explain simply",
    desc: "Every option, timeline and price range in plain language. Visual digital previews ensure nothing is a mystery."
  },
  {
    step: "03",
    title: "Plan together",
    desc: "A considered treatment plan you can feel good about. You decide the timing, pacing, and priorities."
  }
];

export default function ClaritySection() {
  return (
    <section id="clarity" className="clarity-section" aria-labelledby="clarity-title">
      <div className="container">
        <motion.div
          className="clarity-header"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="section-eyebrow">OUR PHILOSOPHY</span>
          <h2 id="clarity-title" className="clarity-heading">
            Dentistry shaped by clarity.
          </h2>
        </motion.div>

        <div className="clarity-grid">
          {PILLARS.map((p, idx) => (
            <motion.div
              key={idx}
              className="clarity-column"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                duration: 0.6,
                delay: idx * 0.12,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              <span className="pillar-step">{p.step}</span>
              <h3 className="pillar-title">{p.title}</h3>
              <p className="pillar-desc">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
