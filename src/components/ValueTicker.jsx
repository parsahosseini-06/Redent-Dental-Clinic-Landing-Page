import React from 'react';
import './ValueTicker.css';

const TICKER_ITEMS = [
  "Work around client relief",
  "Digital dentistry",
  "Transparent treatment plans",
  "Specialists in every field",
  "Comfort-first visits"
];

export default function ValueTicker() {
  return (
    <section className="value-ticker-section" aria-label="Key clinic values">
      <div className="ticker-track">
        <div className="ticker-list">
          {TICKER_ITEMS.map((item, index) => (
            <div key={`item-${index}`} className="ticker-item">
              <span className="ticker-bullet" aria-hidden="true">•</span>
              <span className="ticker-text">{item}</span>
            </div>
          ))}
        </div>
        {/* Duplicated for smooth infinite loop or scroll fallback */}
        <div className="ticker-list" aria-hidden="true">
          {TICKER_ITEMS.map((item, index) => (
            <div key={`dup-${index}`} className="ticker-item">
              <span className="ticker-bullet" aria-hidden="true">•</span>
              <span className="ticker-text">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
