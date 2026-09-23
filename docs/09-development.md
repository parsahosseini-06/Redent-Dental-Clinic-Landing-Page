# 09 — Development

## Development Objective

Translate the UX architecture into a functional, responsive front-end experience while preserving the relationships between the design decisions and the implementation.

---

# Development Principles

- Component-based architecture
- Reusable UI components
- State-driven interactions
- Responsive layouts
- Semantic HTML
- Maintainable CSS
- Accessible interactions
- Performance-conscious implementation

---

# Suggested Component Architecture

```text
App
├── Header
│   └── ComfortModeToggle
│
├── Hero
│
├── TreatmentFinder
│   ├── CategoryTabs
│   └── TreatmentCard
│
├── FirstVisitTimeline
│
├── Doctors
│   └── DoctorCard
│
├── CaseStudies
│   └── CaseStudyCard
│
├── CostEstimator
│
├── BookingWidget
│   ├── TreatmentStep
│   ├── DoctorStep
│   ├── CalendarStep
│   └── ContactStep
│
├── FAQ
│
└── Footer
```

Adapt this structure to the actual implementation.

---

# State Model

The UX specification defines these core states:

```javascript
anxietyMode
activeCategory
activeStep
calculatorSelected
activeCaseStudy
```

These should remain the conceptual source of truth even if the implementation uses a different state-management approach.

---

# Responsive Implementation

Test at minimum:

- Desktop
- Tablet
- Mobile

Verify:

- Navigation
- Hero layout
- Service cards
- Timeline
- Doctor cards
- Case studies
- Cost estimator
- Booking
- FAQ

---

# Performance

Before deployment, check:

- Image compression
- Image dimensions
- Lazy loading where appropriate
- Font loading
- JavaScript bundle size
- Unnecessary animation work
- Layout shifts
- Third-party scripts

---

# Accessibility

Verify:

- Keyboard navigation
- Focus visibility
- Form labels
- Button semantics
- Heading hierarchy
- Image alt text
- Color contrast
- Reduced-motion behavior

---

# Deployment

The intended deployment pipeline is:

```text
Local Development
      ↓
Git
      ↓
GitHub
      ↓
Vercel
      ↓
Production URL
```

---

# Deployment Checklist

- [ ] Production build succeeds
- [ ] No console errors
- [ ] All links work
- [ ] All images load
- [ ] Mobile layout verified
- [ ] Forms behave correctly
- [ ] Interactive states work
- [ ] Metadata configured
- [ ] Favicon configured
- [ ] Open Graph image configured
- [ ] Robots configuration reviewed
- [ ] Sitemap configured if required
- [ ] Vercel deployment succeeds
- [ ] Production URL tested
