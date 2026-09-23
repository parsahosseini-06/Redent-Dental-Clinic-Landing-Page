import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './TestimonialsCarousel.css';

const TESTIMONIALS = [
  {
    name: "Ali R.",
    treatment: "Dental Implants & Restoration",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
    initials: "AR",
    quote: "I was extremely anxious about getting an implant. Dr. Jacob explained every single phase with 3D models before touching a tool. The procedure was totally calm and comfortable."
  },
  {
    name: "Sophie M.",
    treatment: "Clear Aligners",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80",
    initials: "SM",
    quote: "Transparent pricing without hidden upsells. Having digital scans and clear timelines made the entire journey reassuring from day one."
  },
  {
    name: "Emma L.",
    treatment: "Cosmetic Porcelain Veneers",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80",
    initials: "EL",
    quote: "They didn't push unnatural, hyper-white Hollywood teeth. They designed a smile that naturally complemented my facial features. Truly an art form."
  },
  {
    name: "Daniel K.",
    treatment: "General & Preventative Care",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
    initials: "DK",
    quote: "The clinic atmosphere is quiet, respectful, and never rushed. You feel heard and cared for by practitioners who genuinely listen."
  },
  {
    name: "Oliver T.",
    treatment: "Full Arch Rehabilitation",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
    initials: "OT",
    quote: "Remarkable precision. What used to be months of uncertain appointments was completed smoothly with flawless digital planning."
  },
  {
    name: "Nina S.",
    treatment: "Pediatric Gentle Visit",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
    initials: "NS",
    quote: "Brought my seven-year-old daughter for her first checkup. The team was so gentle and patient that she now looks forward to visits!"
  }
];

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardStep, setCardStep] = useState(344); // sensible default before measurement
  const trackRef = useRef(null);

  // Measure the real rendered card stride (width + gap) so the offset is always
  // correct at any viewport width — no hardcoded viewport math.
  useEffect(() => {
    const measure = () => {
      const track = trackRef.current;
      if (!track || track.children.length < 2) return;
      const step = track.children[1].offsetLeft - track.children[0].offsetLeft;
      if (step > 0) setCardStep(step);
    };

    measure();
    window.addEventListener('resize', measure);

    const resizeObserver =
      typeof ResizeObserver !== 'undefined'
        ? new ResizeObserver(measure)
        : null;
    if (resizeObserver && trackRef.current) {
      resizeObserver.observe(trackRef.current);
    }

    return () => {
      window.removeEventListener('resize', measure);
      if (resizeObserver) resizeObserver.disconnect();
    };
  }, []);

  const prev = () => {
    setCurrentIndex((prevIdx) => (prevIdx === 0 ? TESTIMONIALS.length - 1 : prevIdx - 1));
  };

  const next = () => {
    setCurrentIndex((prevIdx) => (prevIdx === TESTIMONIALS.length - 1 ? 0 : prevIdx + 1));
  };

  return (
    <section className="testimonials-section" aria-labelledby="testimonials-heading">
      <div className="container">
        {/* Header */}
        <motion.div
          className="testimonials-header"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div>
            <span className="testimonials-badge">PATIENT EXPERIENCES</span>
            <h2 id="testimonials-heading" className="testimonials-title">
              Real reassurance.
            </h2>
          </div>
          <div className="testimonials-controls">
            <motion.button
              onClick={prev}
              className="carousel-nav-btn"
              aria-label="Previous testimonial"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.5 3.5L5 7L8.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.button>
            <motion.button
              onClick={next}
              className="carousel-nav-btn"
              aria-label="Next testimonial"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.5 3.5L9 7L5.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.button>
          </div>
        </motion.div>

        {/* Testimonials Carousel Track with motion */}
        <div className="testimonials-carousel-wrapper">
          <motion.div
            ref={trackRef}
            className="testimonials-track"
            animate={{
              x: -currentIndex * cardStep
            }}
            transition={{
              type: "spring",
              stiffness: 280,
              damping: 28
            }}
          >
            {TESTIMONIALS.map((t, idx) => (
              <motion.div
                key={idx}
                className="testimonial-card"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
              >
                <div className="testimonial-card-header">
                  <div className="testimonial-avatar-wrap">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="testimonial-avatar"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="testimonial-avatar-fallback">{t.initials}</div>
                  </div>
                  <div>
                    <h3 className="testimonial-name">{t.name}</h3>
                    <span className="testimonial-treatment">{t.treatment}</span>
                  </div>
                </div>
                <blockquote className="testimonial-quote">
                  “{t.quote}”
                </blockquote>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
