import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="container footer-container">
        {/* Top brand & nav */}
        <div className="footer-top">
          <div className="footer-brand-col">
            <a href="#" className="footer-logo" aria-label="Redent home">
              <img
                src="https://framerusercontent.com/images/z1vI6ankrtz8PSaQx1uc4UFI.png?width=407&height=280"
                alt="Redent logo"
                className="footer-logo-img"
              />
            </a>
            <p className="footer-desc">
              Modern dentistry with transparent communication and a patient-first pace.
            </p>
          </div>

          <div className="footer-links-grid">
            <div className="footer-links-group">
              <span className="footer-group-title">Navigation</span>
              <a href="#treatments">Treatments</a>
              <a href="#clarity">Our Approach</a>
              <a href="#doctors">Doctors</a>
              <a href="#faq">FAQ</a>
            </div>

            <div className="footer-links-group">
              <span className="footer-group-title">Patient Services</span>
              <a href="#booking">Book a visit</a>
              <a href="#treatments">Pricing & Plans</a>
              <a href="tel:0214335384">Call Us (021) 433-5384</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Redent Clinic. All rights reserved.</p>
          <div className="footer-legal-links">
            <a href="#">Privacy Policy</a>
            <span>·</span>
            <a href="#">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
