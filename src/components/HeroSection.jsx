import React from 'react';
import { motion } from 'framer-motion';
import './HeroSection.css';

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section className="hero-section" aria-labelledby="hero-title">
      {/* Full-width, full-screen background image preserving aspect ratio */}
      <div className="hero-bg-layer" aria-hidden="true">
        <img
          src="/hero-bg.jpg"
          alt="Dental aesthetic backdrop"
          className="hero-bg-image"
          loading="eager"
        />
      </div>

      <div className="container hero-container">
        {/* Left Column: Heading, Intro, CTAs, Social proof */}
        <motion.div
          className="hero-content-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 id="hero-title" className="hero-title" variants={itemVariants}>
            <span className="hero-line">FEEL CONFIDENT</span>
            <span className="hero-line">ABOUT YOUR</span>
            <span className="hero-line">NEXT SMILE.</span>
          </motion.h1>

          <motion.p className="hero-intro" variants={itemVariants}>
            A calm, transparent dental experience — from your first question to your finished treatment plan.
          </motion.p>

          <motion.div className="hero-actions" variants={itemVariants}>
            <motion.a
              href="#treatments"
              className="btn-primary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Find your treatment</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.a>
            <motion.a
              href="#clarity"
              className="btn-secondary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>How Redent works</span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M2.5 7H11.5M11.5 7L7.5 3M11.5 7L7.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.a>
          </motion.div>

          <motion.div className="hero-social-proof" variants={itemVariants}>
            <div className="avatar-group" aria-hidden="true">
              <span className="avatar avatar-1">JD</span>
              <span className="avatar avatar-2">MS</span>
              <span className="avatar avatar-3">AL</span>
            </div>
            <div className="rating-info">
              <div className="rating-score">
                <span className="stars" aria-hidden="true">★</span>
                <strong>4.9 / 5</strong>
                <span className="rating-label">patient rating</span>
              </div>
              <p className="rating-subtext">Real people. Real reassurance.</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right side spacer maintaining breathing room over the 3D tooth artwork in the background */}
        <div className="hero-space-right" aria-hidden="true"></div>
      </div>
    </section>
  );
}
