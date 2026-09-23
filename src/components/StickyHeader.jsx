import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './StickyHeader.css';

export default function StickyHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className={`sticky-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container header-container">
        {/* Brand Logo */}
        <a href="#" className="brand-logo" aria-label="Redent Dental Clinic Home" onClick={closeMenu}>
          <img
            src="https://framerusercontent.com/images/z1vI6ankrtz8PSaQx1uc4UFI.png?width=407&height=280"
            alt="Redent logo"
            className="brand-logo-img"
          />
        </a>

        {/* Desktop Central Nav Links */}
        <nav className="header-nav" aria-label="Main Navigation">
          <a href="#treatments" className="nav-link">Treatments</a>
          <a href="#doctors" className="nav-link">Doctors</a>
          <a href="#clarity" className="nav-link">Our Approach</a>
          <a href="#faq" className="nav-link">FAQ</a>
        </nav>

        {/* Action area: Phone + CTA + Hamburger Toggle */}
        <div className="header-actions">
          <a href="tel:0214335384" className="phone-link" aria-label="Call (021) 433-5384">
            (021) 433-5384
          </a>
          <a href="#booking" className="btn-book-visit header-cta-desktop">
            <span>Book a Visit</span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

          {/* Premium Hamburger Toggle */}
          <button
            className={`mobile-toggle ${mobileMenuOpen ? 'is-active' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            <span className="hamburger-line line-top"></span>
            <span className="hamburger-line line-middle"></span>
            <span className="hamburger-line line-bottom"></span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer with Overlay and Smooth Spring Animation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="mobile-drawer-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeMenu}
          >
            <motion.div
              className="mobile-drawer"
              role="dialog"
              aria-modal="true"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -15, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <nav className="mobile-nav">
                <a href="#treatments" onClick={closeMenu} className="mobile-link">
                  <span>Treatments</span>
                  <span className="mobile-link-arrow">→</span>
                </a>
                <a href="#doctors" onClick={closeMenu} className="mobile-link">
                  <span>Doctors</span>
                  <span className="mobile-link-arrow">→</span>
                </a>
                <a href="#clarity" onClick={closeMenu} className="mobile-link">
                  <span>Our Approach</span>
                  <span className="mobile-link-arrow">→</span>
                </a>
                <a href="#faq" onClick={closeMenu} className="mobile-link">
                  <span>FAQ</span>
                  <span className="mobile-link-arrow">→</span>
                </a>

                <div className="mobile-drawer-divider"></div>

                <div className="mobile-drawer-contact">
                  <span className="contact-label">Direct Clinic Line</span>
                  <a href="tel:0214335384" className="mobile-phone">(021) 433-5384</a>
                </div>

                <a href="#booking" onClick={closeMenu} className="btn-book-visit mobile-btn">
                  <span>Book a Visit</span>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
