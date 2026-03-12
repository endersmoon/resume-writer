# Testimonials Section Design

**Date:** 2026-03-12
**Status:** Approved

## Summary

Replace the existing `SocialProof` component with a `Testimonials` component that renders an infinite two-row marquee of review cards, using MagicUI's `Marquee` component added via their CLI.

## Setup

### MagicUI CLI
Run `npx magicui-cli add marquee` to copy the `Marquee` component into `src/registry/magicui/marquee.jsx`. This is MagicUI's shadcn-style distribution — no npm package is published.

### Vite Path Alias
Add `@` alias pointing to `src/` in `vite.config.js` so the import `@/registry/magicui/marquee` resolves correctly.

```js
// vite.config.js addition
resolve: {
  alias: { "@": "/src" }
}
```

## Component: `src/components/Testimonials.jsx`

Replaces `src/components/SocialProof.jsx`. Imported in `App.jsx` in place of `SocialProof`.

### Layout
- Section background: transparent (inherits page `#040216`)
- Subtle section heading: *"What professionals are saying"* — small, muted, centered above the marquee
- Two `<Marquee>` rows: first row scrolls left (default), second row scrolls right (`reverse` prop)
- `pauseOnHover` on both rows
- Left/right edge fades using absolutely-positioned `div`s with `bg-gradient-to-r from-[#040216]` and `bg-gradient-to-l from-[#040216]`

### ReviewCard
- Width: `w-64`, fixed height with overflow hidden
- Background: `bg-white/5`, border: `border-white/10`, `rounded-xl`, `p-4`
- Hover: `hover:bg-white/8`
- Avatar: `rounded-full` image from `https://avatar.vercel.sh/<slug>`
- Name: `text-sm font-medium text-white`
- Role/company: `text-xs text-white/50`
- Quote: `mt-2 text-sm text-white/70 leading-relaxed`

### Testimonial Data
8–10 realistic Indian professionals. Mix of cities, industries, seniority levels. Quotes focused on outcomes: callback rates, interview calls, salary hikes, job changes. Examples:

| Name | Role | Quote |
|------|------|-------|
| Priya Sharma | Senior Software Engineer, Infosys | "Got 3 interview calls within a week of updating my resume. The expert knew exactly what Naukri recruiters look for." |
| Rahul Mehta | Product Manager, Flipkart | "I'd been job hunting for 4 months with no response. After the session, callbacks started coming in within days." |
| Ananya Iyer | Data Analyst, TCS | "Worth every rupee. My profile views on Naukri went up 5x after the resume rewrite." |
| Vikram Nair | Engineering Manager, Wipro | "The expert challenged every bullet point and helped me quantify impact I didn't think to include." |
| Neha Gupta | HR Business Partner, HCL | "Ironically, even someone in HR needed help making their resume land. This service delivered." |
| Arjun Patel | Backend Developer, Zomato | "Switched from 0 callbacks to 4 in two weeks. The ATS optimisation advice alone was worth it." |
| Kavitha Reddy | Finance Manager, Deloitte | "Clean, focused, results-oriented resume. Helped me land a 30% salary hike at my new company." |
| Siddharth Joshi | DevOps Engineer, Razorpay | "Detailed, personal session — not a template fill-in. Felt like the expert genuinely cared about my profile." |

First row: cards 0–3. Second row: cards 4–7.

## App.jsx Change

```jsx
// Remove
import SocialProof from "./components/SocialProof";
// <SocialProof />

// Add
import Testimonials from "./components/Testimonials";
// <Testimonials />
```

`SocialProof.jsx` is kept in the repo but no longer rendered.

## What Is Not Changing

- All other components remain untouched
- No new npm dependencies added
- No TypeScript — all files remain `.jsx`
