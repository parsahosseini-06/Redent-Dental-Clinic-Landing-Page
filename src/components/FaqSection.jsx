import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './FaqSection.css';

const FAQ_ITEMS = [
  {
    question: "Will my first visit be painful?",
    answer: "No. Your first appointment is dedicated entirely to conversation, low-dose digital imaging, and clinical diagnostics. We do not perform any invasive procedures on day one unless you have an urgent pain emergency and explicitly ask us for same-day relief."
  },
  {
    question: "How much does treatment cost?",
    answer: "We outline all costs upfront before starting any work. After your diagnostic scan, you will receive an itemized treatment schedule with exact fees, timing, and transparent financing arrangements so there are never any unexpected surprises."
  },
  {
    question: "How long does an implant take?",
    answer: "Using computer-guided surgical planning, the initial fixture placement takes under an hour. Osseointegration typically takes 8 to 12 weeks, during which you wear an aesthetic temporary tooth. Once integrated, your custom ceramic crown is permanently seated."
  },
  {
    question: "Do you offer payment plans?",
    answer: "Yes, we partner with flexible healthcare financing providers offering 0% APR installment options over 6, 12, or 24 months. Our treatment coordinator will gladly help you choose a plan tailored to your budget."
  },
  {
    question: "Can I book online?",
    answer: "Absolutely. You can request your preferred consultation slot online anytime through our booking form below, and our care coordinator will confirm your visit details within one business day."
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleItem = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="faq-section" aria-labelledby="faq-title">
      <div className="container faq-container">
        <motion.div
          className="faq-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="faq-eyebrow">COMMON QUESTIONS</span>
          <h2 id="faq-title" className="faq-heading">
            Before you <br />book.
          </h2>
          <p className="faq-subtext">
            We’ll talk through your concerns, explain the options and share a clear next step. No pressure, no surprises.
          </p>
        </motion.div>

        <div className="faq-accordion" role="region" aria-label="Frequently Asked Questions">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                className={`faq-row ${isOpen ? 'is-open' : ''}`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => toggleItem(idx)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                  id={`faq-btn-${idx}`}
                >
                  <span className="faq-question-text">{item.question}</span>
                  <motion.span
                    className="faq-chevron-icon"
                    aria-hidden="true"
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.5 5.25L7 8.75L10.5 5.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.span>
                </button>

                <div
                  id={`faq-answer-${idx}`}
                  role="region"
                  aria-labelledby={`faq-btn-${idx}`}
                  className={`faq-accordion-grid ${isOpen ? 'is-expanded' : ''}`}
                >
                  <div className="faq-accordion-overflow">
                    <div className="faq-answer-inner">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
