const beforeBullets = [
  "Developed new features for the CRM product",
  "Wrote clean and maintainable code",
  "Worked in an agile team environment",
  "Resolved customer-reported issues",
];

const afterBullets = [
  "Built a custom reporting module for Zoho CRM used by 12,000+ enterprise clients across 30 countries",
  "Reduced average bug resolution time by 55% by introducing structured error logging with Sentry",
  "Delivered 4 major feature releases on schedule across 2 product cycles, collaborating across 3 time zones",
  "Refactored authentication service, cutting login latency by 38% and eliminating a recurring session bug",
];

function InfoIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="flex-shrink-0 mt-0.5 text-gray-300"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <circle cx="12" cy="16" r="0.5" fill="currentColor" />
    </svg>
  );
}

function BoltIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="flex-shrink-0 mt-0.5 text-gray-900"
    >
      <path d="M13 2L4.5 13.5H11L10 22L19.5 10.5H13L13 2Z" />
    </svg>
  );
}

export default function BeforeAfter() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      {/* Hero header */}
      <div className="flex items-center justify-center gap-6 mb-4">
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-gray-700 text-right leading-tight">
          Generic<br />Resume
        </h2>

        {/* VS badge */}
        <div className="flex flex-col items-center justify-center flex-shrink-0 select-none">
          <span className="text-2xl font-black text-gray-300 italic leading-none tracking-widest">VS</span>
          <div className="w-px h-10 bg-gray-200 mt-1" />
        </div>

        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-gray-900 leading-tight">
          With Our<br />Expert
        </h2>
      </div>

      {/* Subtitle */}
      <p className="text-center text-gray-500 mt-4 max-w-lg mx-auto text-sm leading-relaxed">
        See how one expert resume writer transforms a forgettable resume into one that gets callbacks.
        <br />
        <span className="text-gray-400">Arjun Singh · Software Engineer · 4 years</span>
      </p>

      {/* Comparison cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">

        {/* Before card */}
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 space-y-5">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-gray-400">
            Generic Resume
          </p>

          <div className="border-t border-gray-200 pt-5 space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-300">Summary</p>
            <p className="text-gray-400 text-sm leading-relaxed">
              "Software engineer with 4 years of experience in full stack development. Proficient in multiple technologies. Quick learner and team player."
            </p>
          </div>

          <div className="border-t border-gray-200 pt-5 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-300">
              Experience · Zoho · Software Engineer
            </p>
            {beforeBullets.map((bullet, i) => (
              <div key={i} className="flex items-start gap-3">
                <InfoIcon />
                <span className="text-gray-400 text-sm leading-relaxed">{bullet}</span>
              </div>
            ))}
          </div>
        </div>

        {/* After card */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 space-y-5 shadow-sm">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-gray-800">
            With Our Expert
          </p>

          <div className="border-t border-gray-200 pt-5 space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Summary</p>
            <p className="text-gray-800 text-sm leading-relaxed">
              "Software Engineer with 4 years at a product-first startup building B2B SaaS. Own the full stack — React, Django, AWS. Shipped 3 zero-downtime migrations and cut cloud spend by 35%. Looking for mid-senior roles at product companies."
            </p>
          </div>

          <div className="border-t border-gray-200 pt-5 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
              Experience · Zoho · Software Engineer
            </p>
            {afterBullets.map((bullet, i) => (
              <div key={i} className="flex items-start gap-3">
                <BoltIcon />
                <span className="text-gray-800 text-sm leading-relaxed">{bullet}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Footer stat */}
      <p className="text-center text-xs text-gray-400 italic mt-10">
        90% of resumes are filtered out before a human even sees them. — Naukri Internal Analytics, 2024
      </p>
    </section>
  );
}
