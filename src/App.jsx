import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { Analytics } from '@vercel/analytics/react';
import StickyHeader from './components/StickyHeader';
import HeroSection from './components/HeroSection';
import ValueTicker from './components/ValueTicker';
import TreatmentsSection from './components/TreatmentsSection';
import ClaritySection from './components/ClaritySection';
import PreferencePrompt from './components/PreferencePrompt';
import DoctorsSection from './components/DoctorsSection';
import BeforeAfterSection from './components/BeforeAfterSection';
import TestimonialsCarousel from './components/TestimonialsCarousel';
import FaqSection from './components/FaqSection';
import BookingCta from './components/BookingCta';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.5,
    });

    let animationFrameId;
    function raf(time) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    // Support smooth anchor clicks with Lenis
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (!target) return;
      const href = target.getAttribute('href');
      if (href && href.length > 1) {
        const element = document.querySelector(href);
        if (element) {
          e.preventDefault();
          lenis.scrollTo(element, { offset: -60 });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      cancelAnimationFrame(animationFrameId);
      document.removeEventListener('click', handleAnchorClick);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="app-shell">
      <StickyHeader />
      <main>
        <HeroSection />
        <ValueTicker />
        <TreatmentsSection />
        <ClaritySection />
        <PreferencePrompt />
        <DoctorsSection />
        <BeforeAfterSection />
        <TestimonialsCarousel />
        <FaqSection />
        <BookingCta />
      </main>
      <Footer />
      <Analytics />
    </div>
  );
}
