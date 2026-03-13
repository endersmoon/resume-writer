import { useState, useRef, useCallback } from "react";
import { m } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";

const comparisons = [
  {
    id: "engineering-manager",
    role: "Engineering Manager",
    left: [
      {
        bullet: "Leading a team of 12 engineers",
        tag: "↓ Skipped by 88% of recruiters · no growth or scope signal",
        note: '"How many is less important than how the number changed."',
      },
      {
        bullet: "Improved system performance by 40%",
        tag: "↓ Achievement without context · who decided this? who owned it?",
        note: '"A stat without a decision behind it reads as execution, not leadership."',
      },
      {
        bullet: "Managed sprint delivery and roadmap",
        tag: "↓ Ownership unclear · matches 0 shortlist patterns at senior level",
        note: '"\'Managed\' is the most filtered-out word at Manager level and above."',
      },
    ],
    right: {
      bullets: [
        "Scaled engineering function from 4 to 12 over 3 years while pivoting to microservices",
        "Decided to prioritize technical debt over feature expansion in Q2, reducing production outages by 73%",
        "Owned technical roadmap alignment across 4 departments with P&L of ₹4.2Cr",
      ],
      badge: "3.2x shortlist rate · decision ownership + scope signal",
      note: "Recruiters shortlist when they see a decision, its consequence, and a number — in the same sentence.",
    },
  },
  {
    id: "sales-manager",
    role: "Sales Manager",
    left: [
      {
        bullet: "Managed regional sales team",
        tag: "↓ No scale, no geography, no ownership · invisible to filters",
        note: '"Recruiters filter by region and team size before they read a single word."',
      },
      {
        bullet: "Achieved 120% of targets",
        tag: "↓ Common claim · no business context, no revenue signal",
        note: '"Everyone achieved targets. What did the target actually mean for the business?"',
      },
      {
        bullet: "Built relationships with clients",
        tag: "↓ Skipped by 94% of recruiters · no outcome, no scope",
        note: '"Relationship-building is assumed at this level. What did it produce?"',
      },
    ],
    right: {
      bullets: [
        "Expanded regional footprint from 2 to 5 cities, increasing annual revenue from ₹8Cr to ₹14Cr",
        "Restructured incentive model to reduce churn by 28%",
        "Led cross-functional GTM strategy with marketing and operations",
      ],
      badge: "3.5x shortlist rate · revenue growth + structural decision signal",
      note: "When a Sales profile shows what the territory became — not just what was hit — it moves to the top of the list.",
    },
  },
  {
    id: "product-manager",
    role: "Product Manager",
    left: [
      {
        bullet: "Worked on product roadmap and features",
        tag: "↓ No ownership signal · could describe any PM at any level",
        note: '"Every PM works on a roadmap. What did you decide, and what happened?"',
      },
      {
        bullet: "Improved user engagement metrics",
        tag: "↓ No specifics · engagement without a number is ignored",
        note: '"Vague metrics signal a lack of ownership over the outcome."',
      },
      {
        bullet: "Collaborated with engineering and design",
        tag: "↓ Skipped by 91% of recruiters · collaboration is assumed",
        note: '"Listing collaboration as an achievement signals a junior profile at PM level."',
      },
    ],
    right: {
      bullets: [
        "Owned end-to-end roadmap for checkout flow — shipped 3 features that reduced drop-off by 34%",
        "Prioritized cancellation of 2 mid-flight features in Q3 to unblock ₹6Cr revenue initiative",
        "Set OKRs for cross-functional squad of 18; DAU grew from 1.2M to 2.1M over 2 quarters",
      ],
      badge: "2.9x shortlist rate · decision + metric + business context",
      note: "A PM resume that shows what was killed — not just shipped — signals strategic thinking immediately.",
    },
  },
  {
    id: "finance-manager",
    role: "Finance Manager",
    left: [
      {
        bullet: "Handled financial reporting and MIS",
        tag: "↓ Task description · no scale, no ownership, no outcome",
        note: '"Handling reporting is table stakes — what did you find, fix, or change?"',
      },
      {
        bullet: "Led month-end closing process",
        tag: "↓ Process ownership without impact · invisible at senior level",
        note: '"Closing the books is expected. What did you do with the numbers?"',
      },
      {
        bullet: "Coordinated with auditors and vendors",
        tag: "↓ Coordination is not a skill signal at Manager level",
        note: '"Shortlisted Finance profiles show what they controlled, not who they spoke to."',
      },
    ],
    right: {
      bullets: [
        "Redesigned MIS framework to cut reporting cycle from 12 to 4 days, freeing 3 FTEs for FP&A",
        "Identified ₹1.8Cr in recoverable vendor dues through AP reconciliation — collected 82% within 90 days",
        "Built 3-year financial model that shaped board-level capex decision for ₹22Cr plant expansion",
      ],
      badge: "3.1x shortlist rate · financial impact + decision ownership",
      note: "Finance resumes that show what the analysis changed — not just that it was done — move to the top of every shortlist.",
    },
  },
];

function ComparisonSlider({ data }) {
  const [pct, setPct] = useState(50);
  const [dragging, setDragging] = useState(false);
  const containerRef = useRef(null);

  const updatePct = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPct((x / rect.width) * 100);
  }, []);

  const onMouseMove = useCallback(
    (e) => { if (dragging) updatePct(e.clientX); },
    [dragging, updatePct]
  );

  const onTouchMove = useCallback(
    (e) => { if (dragging && e.touches[0]) updatePct(e.touches[0].clientX); },
    [dragging, updatePct]
  );

  return (
    <div>
      {/* Column headers */}
      <div className="grid grid-cols-2 w-full overflow-hidden rounded-t-2xl border border-b-0 border-gray-200">
        <div className="bg-gray-100 text-gray-400 text-[10px] font-extrabold tracking-[0.12em] uppercase py-2.5 px-5">
          Self-Created Version
        </div>
        <div className="bg-indigo-50 text-primary text-[10px] font-extrabold tracking-[0.12em] uppercase py-2.5 px-5 text-right">
          Expert Rebuilt Version
        </div>
      </div>

      {/* Slider */}
      <div
        ref={containerRef}
        className="relative overflow-hidden cursor-ew-resize select-none rounded-b-2xl border border-gray-200"
        style={{ height: "clamp(400px, 60vw, 540px)" }}
        onMouseMove={onMouseMove}
        onMouseUp={() => setDragging(false)}
        onMouseLeave={() => setDragging(false)}
        onTouchMove={onTouchMove}
        onTouchEnd={() => setDragging(false)}
      >
        {/* LEFT PANEL */}
        <div
          className="absolute inset-0 bg-white overflow-hidden"
          style={{ padding: "clamp(20px,4vw,36px)" }}
        >
          <h4
            className="font-bold text-gray-900 tracking-tight mb-5"
            style={{ fontSize: "clamp(14px,2.5vw,19px)" }}
          >
            {data.role}
          </h4>
          <div>
            {data.left.map((item, i) => (
              <div key={i} className="py-4 border-b border-gray-100 last:border-0">
                <div className="flex items-start gap-3">
                  <span className="text-gray-300 mt-0.5 shrink-0">—</span>
                  <span
                    className="text-gray-400 leading-relaxed"
                    style={{
                      fontSize: "clamp(11.5px,1.8vw,14px)",
                      textDecoration: "line-through 1.5px rgba(200,60,60,0.4)",
                    }}
                  >
                    {item.bullet}
                  </span>
                </div>
                <div className="ml-6 mt-2.5">
                  <div
                    className="inline-block bg-red-50 border border-red-100 rounded px-2.5 py-1 font-bold text-red-500 mb-1.5 uppercase tracking-tight"
                    style={{ fontSize: "clamp(9px,1.1vw,10.5px)" }}
                  >
                    {item.tag}
                  </div>
                  <p className="text-[11px] font-medium text-red-300 italic leading-relaxed">
                    {item.note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div
          className="absolute inset-0 bg-indigo-50/60 overflow-hidden pointer-events-none"
          style={{
            padding: "clamp(20px,4vw,36px)",
            clipPath: `inset(0 0 0 ${pct}%)`,
          }}
        >
          <h4
            className="font-bold text-gray-900 tracking-tight italic mb-5"
            style={{ fontSize: "clamp(14px,2.5vw,19px)" }}
          >
            {data.role}
          </h4>
          <div className="space-y-4 mb-6">
            {data.right.bullets.map((b, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-primary font-bold mt-0.5 shrink-0">✓</span>
                <span
                  className="text-gray-900 font-semibold leading-[1.6]"
                  style={{ fontSize: "clamp(11.5px,1.6vw,13px)" }}
                >
                  {b}
                </span>
              </div>
            ))}
          </div>
          <div>
            <div
              className="inline-block bg-primary/10 border border-primary/20 rounded px-3 py-1.5 font-bold text-primary mb-2 uppercase tracking-tight"
              style={{ fontSize: "clamp(9px,1.1vw,10.5px)" }}
            >
              {data.right.badge}
            </div>
            <p className="text-[11px] font-medium text-indigo-400 italic leading-relaxed">
              {data.right.note}
            </p>
          </div>
        </div>

        {/* Divider */}
        <div
          className="absolute top-0 bottom-0 w-[2px] bg-primary pointer-events-none z-10"
          style={{ left: `${pct}%`, boxShadow: "0 0 12px rgba(39,93,245,0.35)" }}
        >
          <button
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary rounded-full shadow-lg flex items-center justify-center pointer-events-auto cursor-ew-resize transition-transform duration-150 hover:scale-110"
            style={{ width: 36, height: 36 }}
            onMouseDown={(e) => { setDragging(true); updatePct(e.clientX); }}
            onTouchStart={(e) => { setDragging(true); if (e.touches[0]) updatePct(e.touches[0].clientX); }}
          >
            <span className="flex gap-0.5 text-white font-bold text-[13px]">
              <span>←</span><span>→</span>
            </span>
          </button>
        </div>
      </div>

      <div className="mt-4 text-center">
        <p className="text-[11px] font-bold text-gray-300 uppercase tracking-[0.07em]">
          ← drag to compare →
        </p>
      </div>
    </div>
  );
}

export default function ResumeComparison() {
  return (
    <section className="bg-white py-16 sm:py-24 px-4">
      <div className="max-w-4xl mx-auto">

        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            The same experience. Two completely different stories.
          </h2>
          <p className="mt-3 text-sm text-gray-500">
            See what changes when a Naukri Expert rebuilds your resume.
          </p>
        </m.div>

        <m.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <Tabs defaultValue={comparisons[0].id}>
            <div className="flex justify-center mb-8">
              <TabsList>
                {comparisons.map((c) => (
                  <TabsTrigger key={c.id} value={c.id}>
                    {c.role}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {comparisons.map((c) => (
              <TabsContent key={c.id} value={c.id}>
                <ComparisonSlider data={c} />
              </TabsContent>
            ))}
          </Tabs>
        </m.div>

      </div>
    </section>
  );
}
