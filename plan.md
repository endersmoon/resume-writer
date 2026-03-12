 Lighthouse Performance Improvement Plan                                                                                                                                     │
│                                                                                                                                                                             │
│ Context                                                                                                                                                                     │
│                                                                                                                                                                             │
│ The resume-writer SPA is a React 19 + Vite 7 + Framer Motion landing page. It currently has no performance optimizations, heavy JS on the critical path (SparklesText runs  │
│ a 100ms setInterval, 5 ElegantShape instances run perpetual Framer Motion RAF loops), no SEO meta tags, and no code splitting. The goal is to improve all four Lighthouse   │
│ categories: Performance (LCP, TBT, CLS), SEO, Best Practices, and Accessibility.                                                                                            │
│                                                                                                                                                                             │
│ ---                                                                                                                                                                         │
│ Priority 1 — Kill the Main Thread Bottleneck: SparklesText (TBT)                                                                                                            │
│                                                                                                                                                                             │
│ File: src/components/SparklesText.jsx + src/index.css                                                                                                                       │
│                                                                                                                                                                             │
│ The setInterval(updateStars, 100) causes 10 React re-renders/second, each reconciling 10 motion.svg elements. Replace with CSS-only sparkles set once on mount.             │
│                                                                                                                                                                             │
│ SparklesText.jsx changes:                                                                                                                                                   │
│ - generateStar() creates sparkle with delay and duration strings instead of lifespan                                                                                        │
│ - useState initializes the array once (no setEffect updating it)                                                                                                            │
│ - Remove setInterval entirely                                                                                                                                               │
│ - Sparkle renders a plain <svg> (not motion.svg) with inline style={{ animation: "sparkle-pop ..." }}                                                                       │
│ - Pass scale via style={{ "--sparkle-scale": scale }}                                                                                                                       │
│                                                                                                                                                                             │
│ src/index.css additions:                                                                                                                                                    │
│ @keyframes sparkle-pop {                                                                                                                                                    │
│   0%, 100% { opacity: 0; transform: scale(0) rotate(75deg); }                                                                                                               │
│   40%       { opacity: 1; transform: scale(var(--sparkle-scale, 1)) rotate(120deg); }                                                                                       │
│   80%       { opacity: 0; transform: scale(0) rotate(150deg); }                                                                                                             │
│ }                                                                                                                                                                           │
│                                                                                                                                                                             │
│ ---                                                                                                                                                                         │
│ Priority 2 — CSS Float for ElegantShape (TBT)                                                                                                                               │
│                                                                                                                                                                             │
│ File: src/components/ElegantShape.jsx + src/index.css                                                                                                                       │
│                                                                                                                                                                             │
│ The inner <motion.div animate={{ y: [0, 15, 0] }} transition={{ repeat: Infinity }}> creates 5 perpetual Framer Motion RAF loops. Replace with a CSS class.                 │
│                                                                                                                                                                             │
│ src/index.css additions:                                                                                                                                                    │
│ @keyframes float-y {                                                                                                                                                        │
│   0%, 100% { transform: translateY(0px); }                                                                                                                                  │
│   50%       { transform: translateY(15px); }                                                                                                                                │
│ }                                                                                                                                                                           │
│ .animate-float {                                                                                                                                                            │
│   animation: float-y 12s ease-in-out infinite;                                                                                                                              │
│   will-change: transform;                                                                                                                                                   │
│ }                                                                                                                                                                           │
│                                                                                                                                                                             │
│ ElegantShape.jsx change: Replace inner <motion.div animate={{ y: [0, 15, 0] }} ...> with <div className="relative animate-float" style={{ width, height, animationDelay:    │
│ \${delay}s` }}>. Keep the outer motion.div` for the one-time entry animation.                                                                                               │
│                                                                                                                                                                             │
│ ---                                                                                                                                                                         │
│ Priority 3 — LCP: Preload Logo + fetchPriority on Hero img                                                                                                                  │
│                                                                                                                                                                             │
│ Files: index.html + src/components/Hero.jsx                                                                                                                                 │
│                                                                                                                                                                             │
│ index.html <head> additions:                                                                                                                                                │
│ <link rel="preload" href="/naukri_logo.svg" as="image" type="image/svg+xml" />                                                                                              │
│ <link rel="dns-prefetch" href="https://avatar.vercel.sh" />                                                                                                                 │
│ <link rel="preconnect" href="https://avatar.vercel.sh" crossorigin />                                                                                                       │
│                                                                                                                                                                             │
│ Hero.jsx logo <img> — add attributes:                                                                                                                                       │
│ <img                                                                                                                                                                        │
│   src="/naukri_logo.svg"                                                                                                                                                    │
│   alt="Naukri"                                                                                                                                                              │
│   className="h-8 w-auto opacity-90"                                                                                                                                         │
│   fetchPriority="high"                                                                                                                                                      │
│   decoding="sync"                                                                                                                                                           │
│   width="120"                                                                                                                                                               │
│   height="32"                                                                                                                                                               │
│ />                                                                                                                                                                          │
│                                                                                                                                                                             │
│ ---                                                                                                                                                                         │
│ Priority 4 — SEO Meta Tags                                                                                                                                                  │
│                                                                                                                                                                             │
│ File: index.html                                                                                                                                                            │
│                                                                                                                                                                             │
│ Replace <title>resume-writer</title> and <link rel="icon" href="/vite.svg"> with:                                                                                           │
│ <title>Naukri Resume Expert — Human-Written Resumes That Get Callbacks</title>                                                                                              │
│ <link rel="icon" type="image/svg+xml" href="/naukri_logo.svg" />                                                                                                            │
│ <meta name="description" content="India's leading resume specialists. A Naukri Expert rewrites your resume in 72 hours using live recruiter data. 1,20,000+ professionals.  │
│ Satisfaction guaranteed." />                                                                                                                                                │
│                                                                                                                                                                             │
│ <!-- Open Graph -->                                                                                                                                                         │
│ <meta property="og:type" content="website" />                                                                                                                               │
│ <meta property="og:title" content="Naukri Resume Expert — Human-Written Resumes That Get Callbacks" />                                                                      │
│ <meta property="og:description" content="India's leading resume specialists. A Naukri Expert rewrites your resume in 72 hours using live recruiter data." />                │
│                                                                                                                                                                             │
│ <!-- Twitter Card -->                                                                                                                                                       │
│ <meta name="twitter:card" content="summary_large_image" />                                                                                                                  │
│ <meta name="twitter:title" content="Naukri Resume Expert — Human-Written Resumes That Get Callbacks" />                                                                     │
│ <meta name="twitter:description" content="India's leading resume specialists. A Naukri Expert rewrites your resume in 72 hours using live recruiter data." />               │
│                                                                                                                                                                             │
│ ---                                                                                                                                                                         │
│ Priority 5 — LazyMotion + m.* (Bundle Size)                                                                                                                                 │
│                                                                                                                                                                             │
│ Files: src/App.jsx + all 6 animated components                                                                                                                              │
│                                                                                                                                                                             │
│ Wrap <App> output in <LazyMotion features={domAnimation} strict>. Replace motion.* with m.* in:                                                                             │
│ - Hero.jsx, ElegantShape.jsx, BeforeAfter.jsx, HowItWorks.jsx, Pricing.jsx, Faq.jsx                                                                                         │
│                                                                                                                                                                             │
│ // App.jsx                                                                                                                                                                  │
│ import { LazyMotion, domAnimation } from "framer-motion";                                                                                                                   │
│ // ...                                                                                                                                                                      │
│ <LazyMotion features={domAnimation} strict>                                                                                                                                 │
│   <main>...</main>                                                                                                                                                          │
│ </LazyMotion>                                                                                                                                                               │
│                                                                                                                                                                             │
│ // In each component:                                                                                                                                                       │
│ import { m, AnimatePresence } from "framer-motion"; // AnimatePresence stays as-is                                                                                          │
│ // motion.div → m.div, motion.span → m.span, etc.                                                                                                                           │
│                                                                                                                                                                             │
│ Saves ~24 kB gzip from the critical-path JS bundle.                                                                                                                         │
│                                                                                                                                                                             │
│ ---                                                                                                                                                                         │
│ Priority 6 — Code Splitting with React.lazy                                                                                                                                 │
│                                                                                                                                                                             │
│ File: src/App.jsx                                                                                                                                                           │
│                                                                                                                                                                             │
│ Keep Hero eager. Lazy-load all below-fold sections:                                                                                                                         │
│                                                                                                                                                                             │
│ import { lazy, Suspense } from "react";                                                                                                                                     │
│ import Hero from "./components/Hero"; // eager                                                                                                                              │
│                                                                                                                                                                             │
│ const BeforeAfter  = lazy(() => import("./components/BeforeAfter"));                                                                                                        │
│ const HowItWorks   = lazy(() => import("./components/HowItWorks"));                                                                                                         │
│ const Pricing      = lazy(() => import("./components/Pricing"));                                                                                                            │
│ const Testimonials = lazy(() => import("./components/Testimonials"));                                                                                                       │
│ const Faq          = lazy(() => import("./components/Faq"));                                                                                                                │
│ const Footer       = lazy(() => import("./components/Footer"));                                                                                                             │
│                                                                                                                                                                             │
│ // Single Suspense boundary with no fallback to avoid layout shift                                                                                                          │
│ <Suspense fallback={null}>                                                                                                                                                  │
│   <BeforeAfter /> <HowItWorks /> <Pricing />                                                                                                                                │
│   <Testimonials /> <Faq /> <Footer />                                                                                                                                       │
│ </Suspense>                                                                                                                                                                 │
│                                                                                                                                                                             │
│ ---                                                                                                                                                                         │
│ Priority 7 — Vite Chunk Splitting                                                                                                                                           │
│                                                                                                                                                                             │
│ File: vite.config.js                                                                                                                                                        │
│                                                                                                                                                                             │
│ Add build.rollupOptions for long-term caching:                                                                                                                              │
│                                                                                                                                                                             │
│ build: {                                                                                                                                                                    │
│   rollupOptions: {                                                                                                                                                          │
│     output: {                                                                                                                                                               │
│       manualChunks: {                                                                                                                                                       │
│         "vendor-react":  ["react", "react-dom"],                                                                                                                            │
│         "vendor-motion": ["framer-motion"],                                                                                                                                 │
│         "vendor-lucide": ["lucide-react"],                                                                                                                                  │
│       },                                                                                                                                                                    │
│     },                                                                                                                                                                      │
│   },                                                                                                                                                                        │
│   chunkSizeWarningLimit: 300,                                                                                                                                               │
│ },                                                                                                                                                                          │
│                                                                                                                                                                             │
│ ---                                                                                                                                                                         │
│ Priority 8 — CLS Fix: Avatar Images                                                                                                                                         │
│                                                                                                                                                                             │
│ File: src/components/Testimonials.jsx                                                                                                                                       │
│                                                                                                                                                                             │
│ Add loading="lazy" and decoding="async" to the avatar <img>:                                                                                                                │
│ <img                                                                                                                                                                        │
│   className="rounded-full"                                                                                                                                                  │
│   width="32"                                                                                                                                                                │
│   height="32"                                                                                                                                                               │
│   alt=""                                                                                                                                                                    │
│   src={img}                                                                                                                                                                 │
│   loading="lazy"                                                                                                                                                            │
│   decoding="async"                                                                                                                                                          │
│ />                                                                                                                                                                          │
│                                                                                                                                                                             │
│ ---                                                                                                                                                                         │
│ Priority 9 — Best Practices: External Links                                                                                                                                 │
│                                                                                                                                                                             │
│ File: src/components/Footer.jsx                                                                                                                                             │
│                                                                                                                                                                             │
│ Change all rel="noreferrer" to rel="noopener noreferrer" on target="_blank" links (~18 anchors).                                                                            │
│                                                                                                                                                                             │
│ ---                                                                                                                                                                         │
│ Critical Files                                                                                                                                                              │
│                                                                                                                                                                             │
│ - index.html — LCP preload, SEO meta, favicon                                                                                                                               │
│ - src/components/SparklesText.jsx — Remove setInterval bottleneck                                                                                                           │
│ - src/components/ElegantShape.jsx — CSS float replaces Framer Motion loop                                                                                                   │
│ - src/App.jsx — LazyMotion wrapper + React.lazy splits                                                                                                                      │
│ - src/index.css — New CSS keyframes for sparkle-pop and float-y                                                                                                             │
│ - vite.config.js — Manual chunk config                                                                                                                                      │
│ - src/components/Hero.jsx — fetchPriority on logo img                                                                                                                       │
│ - src/components/Testimonials.jsx — CLS fix on avatars                                                                                                                      │
│ - src/components/Footer.jsx — External link rel fix                                                                                                                         │
│ - All animated components — motion.* → m.*                                                                                                                                  │
│                                                                                                                                                                             │
│ ---                                                                                                                                                                         │
│ Verification                                                                                                                                                                │
│                                                                                                                                                                             │
│ 1. npm run build — ensure no chunk size warnings, check dist/ output sizes                                                                                                  │
│ 2. npm run preview — serve production build locally                                                                                                                         │
│ 3. Run Lighthouse in Chrome DevTools (Incognito, no extensions) against the preview URL                                                                                     │
│ 4. Check: Performance score (target 90+), SEO (target 95+), Best Practices (target 95+)                                                                                     │
│ 5. Verify SparklesText still animates visually in the Hero section                                                                                                          │
│ 6. Verify ElegantShape blobs still float smoothly                                                                                                                           │
│ 7. Verify no console errors about motion.* inside LazyMotion strict context                                                                                                 │
│ 8. Verify below-fold sections load (check Network tab for async chunks)  