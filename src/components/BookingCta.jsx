import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './BookingCta.css';

export default function BookingCta() {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setStatus('error');
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setStatus('error');
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '' });
    }, 700);
  };

  return (
    <section id="booking" className="booking-section" aria-labelledby="booking-title">
      <div className="container booking-container">
        <motion.div
          className="booking-card"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="booking-left">
            <span className="booking-eyebrow">CONSULTATION</span>
            <h2 id="booking-title" className="booking-title">
              Let’s make a <br />plan together.
            </h2>
            <p className="booking-intro">
              Tell us a little about what brings you in. We’ll get back to you within one working day.
            </p>

            <div className="booking-trust-points">
              <div className="trust-item">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="#71877A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>No commitment consultation</span>
              </div>
              <div className="trust-item">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="#71877A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Clear next steps and transparent price range</span>
              </div>
            </div>
          </div>

          <div className="booking-right">
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  className="booking-success-box"
                  role="alert"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                >
                  <motion.div
                    className="success-icon"
                    aria-hidden="true"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  >
                    ✓
                  </motion.div>
                  <h3>Consultation Request Received</h3>
                  <p>Thank you! Our treatment coordinator will reach out to you within one business day.</p>
                  <button
                    type="button"
                    className="btn-secondary success-reset"
                    onClick={() => setStatus('idle')}
                  >
                    Send another request
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  className="booking-form"
                  onSubmit={handleSubmit}
                  noValidate
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {status === 'error' && (
                    <motion.div
                      className="booking-error-alert"
                      role="alert"
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {errorMessage}
                    </motion.div>
                  )}

                  <div className="form-field">
                    <label htmlFor="patient-name">Your Full Name</label>
                    <input
                      id="patient-name"
                      type="text"
                      placeholder="Redent Clinic"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (status === 'error') setStatus('idle');
                      }}
                      required
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="patient-email">Email Address</label>
                    <input
                      id="patient-email"
                      type="email"
                      placeholder="Redenclinic@gmail.com"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (status === 'error') setStatus('idle');
                      }}
                      required
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="btn-submit-booking"
                    disabled={status === 'loading'}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    {status === 'loading' ? 'Sending Request...' : 'Submit your Request'}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
