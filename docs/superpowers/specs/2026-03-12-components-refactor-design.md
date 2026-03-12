# Components Refactor Design

**Date:** 2026-03-12
**Status:** Approved

## Goal

Extract inline code from `App.jsx` into a flat `src/components/` folder, making `App.jsx` a thin orchestrator that only imports and renders section components inside a `<main>` wrapper.

## File Structure

```
src/
  components/
    ElegantShape.jsx    — animated floating shape primitive, used by Hero
    Hero.jsx            — full hero section (imports ElegantShape, owns fadeUpVariants)
    SocialProof.jsx     — "1,20,000+ professionals" section
    BeforeAfter.jsx     — before/after resume transformation example
    HowItWorks.jsx      — 4-step process section
    Pricing.jsx         — 4 pricing tier cards
    Faq.jsx             — FAQ section (currently empty placeholder)
  utils/
    cn.js               — classname helper (named export)
  App.jsx               — thin orchestrator: imports and renders all sections
```

## What Moves Where

| Code | Current location | New location |
|------|-----------------|--------------|
| `cn` function | `App.jsx` top | `src/utils/cn.js` |
| `fadeUpVariants` | `App.jsx` top | `src/components/Hero.jsx` |
| `ElegantShape` component | `App.jsx` | `src/components/ElegantShape.jsx` |
| `Hero` component | `App.jsx` | `src/components/Hero.jsx` |
| Social proof `<section>` | `App.jsx` inline | `src/components/SocialProof.jsx` |
| Before/after `<section>` | `App.jsx` inline | `src/components/BeforeAfter.jsx` |
| How it works `<section>` | `App.jsx` inline | `src/components/HowItWorks.jsx` |
| Pricing `<section>` | `App.jsx` inline | `src/components/Pricing.jsx` |
| FAQ `<section>` | `App.jsx` inline | `src/components/Faq.jsx` |

## App.jsx After Refactor

```jsx
import Hero from "./components/Hero";
import SocialProof from "./components/SocialProof";
import BeforeAfter from "./components/BeforeAfter";
import HowItWorks from "./components/HowItWorks";
import Pricing from "./components/Pricing";
import Faq from "./components/Faq";

function App() {
  return (
    <main>
      <Hero />
      <SocialProof />
      <BeforeAfter />
      <HowItWorks />
      <Pricing />
      <Faq />
    </main>
  );
}

export default App;
```

## Constraints

- No logic or behavior changes — pure structural refactor
- All existing JSX, classnames, and animations remain identical
- Each component file is a default export
- `cn` is a named export from `utils/cn.js`
- No new dependencies
