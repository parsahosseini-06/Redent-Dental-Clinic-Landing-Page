import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import './BeforeAfterSection.css';

const GALLERY_CASES = [
  {
    id: 1,
    title: "Smile contouring & composite veneers",
    duration: "2 visits · 1 week",
    image: "https://framerusercontent.com/images/70Jc0CbiL2dylYAqpgx5Z7lYMQU.jpeg?width=736&height=410"
  },
  {
    id: 2,
    title: "Upper anterior ceramic crowns",
    duration: "3 visits · 2 weeks",
    image: "https://framerusercontent.com/images/5yoU3My9xpOA8tFg0ls8pOR5U.jpeg?width=736&height=412"
  },
  {
    id: 3,
    title: "Digital orthodontic alignment",
    duration: "6 months aligners",
    image: "https://framerusercontent.com/images/QYTDRonc9gBOY7h7GwKL4gRqQLI.jpeg"
  },
  {
    id: 4,
    title: "Single-tooth implant & crown matching",
    duration: "3 visits · integrated",
    image: "https://framerusercontent.com/images/TnHQvvmxP4uZ0JoHYt8DOjUNa0.jpeg"
  }
];

export default function BeforeAfterSection() {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef(null);
  const isDraggingRef = useRef(false);
  const rafIdRef = useRef(null);

  const updatePosition = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  }, []);

  const handlePointerDown = (e) => {
    isDraggingRef.current = true;
    updatePosition(e.clientX);
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch (err) {
      // fallback
    }
  };

  const handlePointerMove = (e) => {
    if (!isDraggingRef.current) return;
    const clientX = e.clientX;
    if (rafIdRef.current) {
      cancelAnimationFrame(rafIdRef.current);
    }
    rafIdRef.current = requestAnimationFrame(() => {
      updatePosition(clientX);
    });
  };

  const handlePointerUp = (e) => {
    isDraggingRef.current = false;
    try {
      if (e.currentTarget.hasPointerCapture(e.pointerId)) {
        e.currentTarget.releasePointerCapture(e.pointerId);
      }
    } catch (err) {
      // fallback
    }
  };

  useEffect(() => {
    const handleGlobalPointerUp = () => {
      isDraggingRef.current = false;
    };
    window.addEventListener('pointerup', handleGlobalPointerUp);
    return () => {
      window.removeEventListener('pointerup', handleGlobalPointerUp);
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, []);

  return (
    <section className="before-after-section" aria-labelledby="before-after-title">
      <div className="container">
        {/* Top Header */}
        <div className="ba-header-layout">
          <motion.div
            className="ba-text-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="ba-eyebrow">BEFORE / AFTER</span>
            <h2 id="before-after-title" className="ba-heading">
              A Difference <br />You Can See.
            </h2>
            <div className="ba-sublines">
              <span>Real patients.</span>
              <span>Real treatments.</span>
              <span>Real results.</span>
            </div>
            <p className="ba-body">
              Explore selected cases and see how personalized dental care can transform a smile without losing authentic character.
            </p>
            <a href="#treatments" className="ba-cta-link">
              <span>Explore all treatments</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </motion.div>

          {/* Interactive Comparator */}
          <motion.div
            className="ba-comparator-col"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="ba-comparator"
              ref={containerRef}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
              role="slider"
              aria-label="Before and after comparison slider"
              aria-valuemin="0"
              aria-valuemax="100"
              aria-valuenow={Math.round(sliderPos)}
              tabIndex="0"
              onKeyDown={(e) => {
                if (e.key === 'ArrowLeft') setSliderPos(p => Math.max(0, p - 4));
                if (e.key === 'ArrowRight') setSliderPos(p => Math.min(100, p + 4));
              }}
            >
              {/* After image (base) */}
              <img
                src="https://framerusercontent.com/images/70Jc0CbiL2dylYAqpgx5Z7lYMQU.jpeg?width=736&height=410"
                alt="After cosmetic dental restoration"
                className="ba-img ba-img-after"
                loading="lazy"
                draggable={false}
              />
              <span className="ba-label ba-label-after">After</span>

              {/* Before image (clipped overlay) */}
              <div
                className="ba-overlay-clip"
                style={{
                  clipPath: `inset(0 ${100 - sliderPos}% 0 0)`,
                  WebkitClipPath: `inset(0 ${100 - sliderPos}% 0 0)`
                }}
              >
                <img
                  src="https://framerusercontent.com/images/5yoU3My9xpOA8tFg0ls8pOR5U.jpeg?width=736&height=412"
                  alt="Before cosmetic dental restoration"
                  className="ba-img ba-img-before"
                  loading="lazy"
                  draggable={false}
                />
                <span className="ba-label ba-label-before">Before</span>
              </div>

              {/* Draggable Divider Handle */}
              <div
                className="ba-divider-handle"
                style={{
                  left: `${sliderPos}%`
                }}
              >
                <div className="handle-circle">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.5 4.5L2 8L5.5 11.5M10.5 4.5L14 8L10.5 11.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
            <p className="comparator-hint">Drag handle or use arrow keys to compare</p>
          </motion.div>
        </div>

        {/* Gallery Rail */}
        <div className="ba-gallery-rail">
          <h3 className="gallery-title">Selected Clinical Outcomes</h3>
          <div className="gallery-cards-wrap">
            {GALLERY_CASES.map((item, idx) => (
              <motion.div
                key={item.id}
                className="gallery-case-card"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -3 }}
              >
                <div className="gallery-img-box">
                  <img src={item.image} alt={item.title} loading="lazy" draggable={false} />
                </div>
                <div className="gallery-info">
                  <h4>{item.title}</h4>
                  <span>{item.duration}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
