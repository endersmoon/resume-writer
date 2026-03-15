import { m } from "framer-motion";

const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#cccccc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const before = [
  "Responsible for managing a team of X",
  "Led the rollout of Y project",
  "Worked with cross-functional teams",
  "Improved efficiency by Z%",
  "Proficient in [tool], [tool], [tool]",
  "Assisted in developing strategy for...",
  "Contributed to...",
];

const after = [
  "Did this person's responsibility grow over time?",
  "Did they make decisions — or just execute them?",
  "Did they own outcomes — or just contribute to them?",
  "Did they influence people outside their team?",
  "Did their role get bigger even if their title didn't?",
  "Are they operating at a senior level right now?",
  "Would I trust them with more?",
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function TheGap() {
  return (
    <section className="bg-slate-50 py-20 sm:py-32 px-5 md:px-10">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="font-bold text-[#0e0b16] text-4xl sm:text-5xl tracking-tight leading-tight max-w-3xl mx-auto">
            Your resume isn't the problem. The way it's written is.
          </h2>
          <p className="mt-4 text-[#6b6b8a] text-base sm:text-lg">
            Here's what recruiters on Naukri are actually scanning for — and why most resumes never make it through.
          </p>
        </m.div>

        {/* Comparison */}
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="relative flex flex-col md:flex-row items-stretch"
        >
          {/* Before */}
          <m.div
            variants={itemVariants}
            className="bg-[#f4f6fb] p-8 sm:p-10 md:w-1/2 rounded-2xl md:rounded-r-none border border-[#e8e8f0]"
          >
            <span className="inline-block bg-[#1a1a2e] text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-[0.08em] mb-8">
              Current Resume
            </span>
            <h3 className="text-[18px] font-bold text-[#4a4a68] mb-8">
              What your resume probably says right now
            </h3>
            <ul className="space-y-5">
              {before.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="mt-1 shrink-0"><XIcon /></span>
                  <span className="text-[#6b6b8a] font-medium leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </m.div>

          {/* VS badge */}
          <div className="flex items-center justify-center py-6 md:py-0 md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-10">
            <div className="text-[#F5A623] font-extrabold text-2xl bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg border border-[#e8e8f0]">
              VS
            </div>
          </div>

          {/* After */}
          <m.div
            variants={itemVariants}
            className="bg-[#FFF8ED] p-8 sm:p-10 md:w-1/2 rounded-2xl md:rounded-l-none border border-[#F5A623]/20 border-t-0 md:border-t md:border-l-0"
          >
            <span className="inline-block bg-[#F5A623] text-[#1a1a2e] text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-[0.08em] mb-8">
              Naukri Pro Rebuild
            </span>
            <h3 className="text-[18px] font-bold text-[#1a1a2e] mb-8">
              What recruiters are actually scanning for
            </h3>
            <ul className="space-y-5">
              {after.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="mt-1 shrink-0"><CheckIcon /></span>
                  <span className="text-[#1a1a2e] font-bold leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 pt-6 border-t border-[#F5A623]/20 italic text-[#F5A623] text-sm font-bold">
              4x higher chances of getting noticed by top recruiters
            </div>
          </m.div>
        </m.div>

      </div>
    </section>
  );
}
