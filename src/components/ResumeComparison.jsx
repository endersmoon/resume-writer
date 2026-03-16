import { m, AnimatePresence } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";

const comparisons = [
  {
    id: "engineering-manager",
    role: "Engineering Manager",
    left: [
      {
        bullet: "Leading a team of 12 engineers",
        note: "How many is less important than how the number changed.",
      },
      {
        bullet: "Improved system performance by 40%",
        note: "A stat without a decision behind it reads as execution, not leadership.",
      },
      {
        bullet: "Managed sprint delivery and roadmap",
        note: "Ownership is unclear — matches 0 shortlist patterns at senior level.",
      },
    ],
    right: {
      bullets: [
        {
          text: "Scaled engineering function from 4 to 12 over 3 years while pivoting to microservices",
          signal: "Growth trajectory + scope signal",
        },
        {
          text: "Decided to prioritize technical debt over feature expansion in Q2, reducing production outages by 73%",
          signal: "Decision ownership + quantified outcome",
        },
        {
          text: "Owned technical roadmap alignment across 4 departments with P&L of ₹4.2Cr",
          signal: "Cross-functional ownership + P&L signal",
        },
      ],
      stat: "3.2×",
      statLabel: "shortlist rate",
      note: "Recruiters shortlist when they see a decision, its consequence, and a number — in the same sentence.",
    },
  },
  {
    id: "sales-manager",
    role: "Sales Manager",
    left: [
      {
        bullet: "Managed regional sales team",
        note: "Recruiters filter by region and team size before they read a single word.",
      },
      {
        bullet: "Achieved 120% of targets",
        note: "Everyone achieved targets. What did the target actually mean for the business?",
      },
      {
        bullet: "Built relationships with clients",
        note: "Relationship-building is assumed at this level. What did it produce?",
      },
    ],
    right: {
      bullets: [
        {
          text: "Expanded regional footprint from 2 to 5 cities, increasing annual revenue from ₹8Cr to ₹14Cr",
          signal: "Geographic expansion + revenue growth",
        },
        {
          text: "Restructured incentive model to reduce churn by 28%",
          signal: "Structural decision + retention outcome",
        },
        {
          text: "Led cross-functional GTM strategy with marketing and operations",
          signal: "Strategic ownership beyond sales",
        },
      ],
      stat: "3.5×",
      statLabel: "shortlist rate",
      note: "When a Sales profile shows what the territory became — not just what was hit — it moves to the top of the list.",
    },
  },
  {
    id: "product-manager",
    role: "Product Manager",
    left: [
      {
        bullet: "Worked on product roadmap and features",
        note: "Every PM works on a roadmap. What did you decide, and what happened?",
      },
      {
        bullet: "Improved user engagement metrics",
        note: "Vague metrics signal a lack of ownership over the outcome.",
      },
      {
        bullet: "Collaborated with engineering and design",
        note: "Listing collaboration as an achievement signals a junior profile.",
      },
    ],
    right: {
      bullets: [
        {
          text: "Owned end-to-end roadmap for checkout flow — shipped 3 features that reduced drop-off by 34%",
          signal: "End-to-end ownership + conversion impact",
        },
        {
          text: "Prioritized cancellation of 2 mid-flight features in Q3 to unblock ₹6Cr revenue initiative",
          signal: "Strategic trade-off + business consequence",
        },
        {
          text: "Set OKRs for cross-functional squad of 18; DAU grew from 1.2M to 2.1M over 2 quarters",
          signal: "Leadership scope + growth metric",
        },
      ],
      stat: "2.9×",
      statLabel: "shortlist rate",
      note: "A PM resume that shows what was killed — not just shipped — signals strategic thinking immediately.",
    },
  },
  {
    id: "finance-manager",
    role: "Finance Manager",
    left: [
      {
        bullet: "Handled financial reporting and MIS",
        note: "Handling reporting is table stakes — what did you find, fix, or change?",
      },
      {
        bullet: "Led month-end closing process",
        note: "Closing the books is expected. What did you do with the numbers?",
      },
      {
        bullet: "Coordinated with auditors and vendors",
        note: "Shortlisted Finance profiles show what they controlled, not who they spoke to.",
      },
    ],
    right: {
      bullets: [
        {
          text: "Redesigned MIS framework to cut reporting cycle from 12 to 4 days, freeing 3 FTEs for FP&A",
          signal: "Process redesign + capacity unlocked",
        },
        {
          text: "Identified ₹1.8Cr in recoverable vendor dues through AP reconciliation — collected 82% within 90 days",
          signal: "Financial discovery + collection outcome",
        },
        {
          text: "Built 3-year financial model that shaped board-level capex decision for ₹22Cr plant expansion",
          signal: "Analysis that drove a decision",
        },
      ],
      stat: "3.1×",
      statLabel: "shortlist rate",
      note: "Finance resumes that show what the analysis changed — not just that it was done — move to the top of every shortlist.",
    },
  },
];

function ComparisonPanel({ data }) {
  return (
    <m.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm"
    >
      {/* Header row */}
      <div className="grid grid-cols-2 border-b border-gray-200">
        <div className="flex items-center gap-2 px-6 py-3.5 bg-gray-50 border-r border-gray-200">
          <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
          <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Current Resume</span>
        </div>
        <div className="flex items-center gap-2 px-6 py-3.5 bg-emerald-50">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">After Expert Rebuild</span>
        </div>
      </div>

      {/* Data rows — each before/after pair aligned */}
      {data.left.map((item, i) => (
        <div key={i} className="grid grid-cols-2 border-b border-gray-100 last:border-0">
          {/* Before cell */}
          <div className="px-6 py-6 bg-white border-r border-gray-100 flex flex-col gap-2.5">
            <p className="text-base font-medium text-gray-500 leading-relaxed">
              {item.bullet}
            </p>
            <p className="text-sm text-gray-400 italic leading-relaxed">
              {item.note}
            </p>
          </div>

          {/* After cell */}
          <div className="px-6 py-6 bg-emerald-50/30 flex flex-col gap-2.5">
            <div className="flex items-start gap-3">
              <svg className="shrink-0 mt-1" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="7.5" stroke="#34d399" strokeOpacity="0.4"/>
                <path d="M5 8l2.2 2.2L11 5.5" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p className="text-base font-semibold text-gray-900 leading-relaxed">
                {data.right.bullets[i].text}
              </p>
            </div>
            <span className="ml-7 inline-flex items-center gap-1 w-fit bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-semibold px-2.5 py-0.5 rounded-md tracking-tight">
              ↑ {data.right.bullets[i].signal}
            </span>
          </div>
        </div>
      ))}

      {/* Footer stat row */}
      <div className="grid grid-cols-2 border-t border-gray-200 bg-gray-50">
        <div className="px-6 py-4 border-r border-gray-200" />
        <div className="px-6 py-4 flex items-center gap-4">
          <div className="shrink-0 text-center">
            <div className="text-3xl font-bold mb-2 text-emerald-500 leading-none">{data.right.stat}</div>
            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-0.5">{data.right.statLabel}</div>
          </div>
          <p className="text-sm text-gray-500 leading-relaxed italic">{data.right.note}</p>
        </div>
      </div>
    </m.div>
  );
}

export default function ResumeComparison() {
  return (
    <section className="bg-white py-20 sm:py-16 px-5 md:px-10">
      <div className="max-w-5xl mx-auto">

        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">Role-by-role breakdown</p>
          <h2 className="font-bold text-gray-950 text-4xl sm:text-5xl tracking-tight text-center leading-tight max-w-5xl mx-auto">
            Same career. Completely different resume.
          </h2>
          <p className="mt-3 text-gray-500 text-base sm:text-lg max-w-3xl mx-auto text-center">
            Pick your role and see exactly what recruiters skip — and what they stop for.
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

            <AnimatePresence mode="wait">
              {comparisons.map((c) => (
                <TabsContent key={c.id} value={c.id}>
                  <ComparisonPanel data={c} />
                </TabsContent>
              ))}
            </AnimatePresence>
          </Tabs>
        </m.div>

      </div>
    </section>
  );
}
