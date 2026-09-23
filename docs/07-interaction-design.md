# 07 — Interaction Design

## State Architecture

The interaction system is driven by a small number of shared states.

| State | Type | Initial Value | Purpose |
|---|---|---:|---|
| `anxietyMode` | Boolean | `false` | Controls comfort-focused experience |
| `activeCategory` | Enum | `all` | Filters treatments |
| `activeStep` | Integer | `1` | Controls booking progress |
| `calculatorSelected` | Array | `[]` | Stores selected treatments |
| `activeCaseStudy` | Integer | `0` | Controls case-study navigation |

---

# Anxiety Mode

When `anxietyMode = true`:

- Hero copy changes
- Comfort information becomes more prominent
- Treatment cards can show sedation availability
- First Visit emphasizes comfort options
- Booking can pre-select the anxiety preference

The goal is synchronized personalization rather than isolated UI changes.

---

# Treatment Finder

User action:

```text
Select category
      ↓
Update activeCategory
      ↓
Filter service cards
```

Selecting a treatment can also trigger:

```text
Calculate in Estimator
      ↓
Scroll to Cost Estimator
      ↓
Pre-select treatment
```

---

# Cost Estimator

The estimator maintains an array of selected treatments.

Conceptually:

```text
Selected Treatments
      ↓
Read price ranges
      ↓
Calculate low estimate
      ↓
Calculate high estimate
      ↓
Display total range
```

The estimator is an information tool, not a replacement for professional diagnosis.

---

# Booking Flow

```text
Step 1
Treatment
   ↓
Step 2
Practitioner
   ↓
Step 3
Calendar
   ↓
Step 4
Contact + Comfort
   ↓
Confirmation
```

---

# Booking Context Preservation

If the user starts from the Treatment Finder or Cost Estimator, the selected information should be preserved.

Example:

```text
Treatment Finder
      ↓
Dental Implant
      ↓
Cost Estimator
      ↓
Pre-fill Booking
      ↓
Treatment = Dental Implant
```

---

# Validation

Booking inputs should provide inline validation.

Examples:

- Required name
- Valid phone format
- Valid email format
- Required treatment selection
- Required appointment date/time

Validation should occur before final submission rather than only after an unsuccessful attempt.

---

# Edge Cases

### Comfort Mode synchronization

Changing anxiety mode in one location updates all relevant controls.

### Repeated treatment selection

Selecting an already selected treatment should not create duplicate entries.

### Booking back navigation

Returning to a previous step should preserve entered information.

### Empty estimator

If no treatment is selected, the estimator should provide a clear next action rather than showing an ambiguous zero state.

### Invalid booking data

The user should receive immediate, contextual feedback.
