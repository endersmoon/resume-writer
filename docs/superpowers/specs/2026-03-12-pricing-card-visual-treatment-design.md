# Pricing Card Visual Treatment — Design Spec

**Date:** 2026-03-12
**Status:** Approved
**Scope:** Visual-only redesign of `src/components/Pricing.jsx`

---

## Goal

Apply a card-based visual treatment to the existing Pricing section, inspired by the erikvalencia1 pricing-card component on 21st.dev. No content changes — only the presentation shell is updated.

---

## Constraints

- No new dependencies
- No feature lists added to cards
- No "Popular" badge or tier hierarchy differentiation — all four cards are visually equal
- Existing pricing data (tiers, prices, strikethrough, savings) is preserved exactly
- Bottom guarantee copy remains unchanged below the card grid

---

## Layout

Change the container from a 2-column CSS grid to a flex-wrap row:

```
flex flex-wrap justify-center gap-6
```

Each card: `w-72` (288px fixed width).

---

## Card Structure

Each tier rendered as a card with:

- `rounded-2xl border shadow-md p-6 w-72` container
- `transition-transform duration-200 hover:scale-105` + alternating `hover:-rotate-1` / `hover:rotate-1` (even/odd index) for the playful hover tilt
- **Tier name:** `font-semibold text-lg`
- **Experience range:** `text-sm text-gray-500`
- **Price line:** unchanged — strikethrough original, bold sale price, savings note
- **CTA:** full-width link/button replacing the current inline text arrow link
  - Classes: `mt-6 block w-full text-center rounded-lg bg-black text-white py-2 text-sm font-semibold hover:bg-gray-800 transition-colors`

---

## File Changed

- `src/components/Pricing.jsx` — full rewrite of JSX; no new files created

---

## Out of Scope

- Feature lists per card
- Popular/highlighted tier
- Framer Motion animations
- Any other component
