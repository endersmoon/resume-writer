import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const CheckGold = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const CheckGray = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#d1d5db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

// cell values: "expert" | "yes" | "no" | "variable"
const features = [
  {
    label: "Rebuilt by a real human expert",
    expert: "expert", freelancer: "yes", online: "no", diy: "no",
  },
  {
    label: "Based on actual recruiter behavior data",
    expert: "expert", freelancer: "no", online: "no", diy: "no",
  },
  {
    label: "Domain-specific expertise",
    expert: "expert", freelancer: "variable", online: "no", diy: "no",
  },
  {
    label: "Asks questions you haven't thought of",
    expert: "expert", freelancer: "variable", online: "no", diy: "no",
  },
  {
    label: "Unlimited revisions with guarantee",
    expert: "expert", freelancer: "no", online: "no", diy: "no",
  },
  {
    label: "Refund if not satisfied",
    expert: "expert", freelancer: "no", online: "no", diy: "no",
  },
];

const competitors = ["Naukri Expert", "Freelancer", "Online Resume Makers", "Do It Yourself"];
const competitorKeys = ["expert", "freelancer", "online", "diy"];

function Cell({ value, isExpert }) {
  if (value === "expert") return <CheckGold />;
  if (value === "yes") return <CheckGray />;
  if (value === "variable") return <span className="text-xs font-medium text-gray-400">Variable</span>;
  return <XIcon />;
}

function MobileRow({ feature, isOpen, onToggle, isLast }) {
  return (
    <div className={`group/feature relative ${!isLast ? "border-b border-gray-200" : ""}`}>
      {/* Left accent bar */}
      <div className="absolute left-0 top-0 w-0.5 h-0 bg-primary group-hover/feature:h-full transition-all duration-300" />

      <button
        aria-expanded={isOpen}
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 px-6 text-left cursor-pointer"
      >
        <span className={`text-sm font-semibold tracking-wide transition-colors duration-200 pr-4 ${
          isOpen ? "text-primary" : "text-gray-900"
        }`}>
          {feature.label}
        </span>
        <m.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className={`shrink-0 transition-colors duration-200 ${isOpen ? "text-primary" : "text-gray-400"}`}
        >
          <ChevronDown className="h-4 w-4" />
        </m.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <m.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 space-y-3">
              {competitorKeys.map((key, i) => (
                <div key={key} className="flex justify-between items-center">
                  <span className={`text-xs font-medium ${key === "expert" ? "text-gray-900" : "text-gray-500"}`}>
                    {competitors[i]}
                  </span>
                  <span className="flex items-center">
                    <Cell value={feature[key]} isExpert={key === "expert"} />
                  </span>
                </div>
              ))}
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function WhyNaukri() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-slate-50 py-16 sm:py-24 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
            Why professionals choose Naukri Expert
          </h2>
        </m.div>

        {/* Desktop table */}
        <m.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="hidden md:block border border-gray-200 rounded-2xl overflow-hidden bg-white mb-0"
        >
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50 text-sm font-semibold text-gray-900 border-b border-gray-200">
                <th className="p-6 text-left w-[38%]">Feature</th>
                <th className="p-6 text-center bg-amber-50/60 border-x border-gray-200">
                  <span className="inline-block bg-[#F5A623] text-[#1a1a2e] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-[0.08em]">
                    Naukri Expert
                  </span>
                </th>
                <th className="p-6 text-center font-medium text-gray-500">Freelancer</th>
                <th className="p-6 text-center font-medium text-gray-500">Online Resume Makers</th>
                <th className="p-6 text-center font-medium text-gray-500">Do It Yourself</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, i) => (
                <tr
                  key={i}
                  className={`group/feature relative transition-colors hover:bg-gray-50/60 ${i < features.length - 1 ? "border-b border-gray-200" : ""}`}
                >
                  <td className="p-6 font-semibold text-gray-900 text-sm relative">
                    {/* Left accent bar */}
                    <div className="absolute left-0 top-0 w-0.5 h-0 bg-primary group-hover/feature:h-full transition-all duration-300" />
                    <span className="transition-transform duration-200 group-hover/feature:translate-x-0.5 inline-block">
                      {feature.label}
                    </span>
                  </td>
                  <td className="p-6 text-center bg-amber-50/30 border-x border-gray-200">
                    <span className="inline-flex items-center justify-center">
                      <Cell value={feature.expert} isExpert />
                    </span>
                  </td>
                  <td className="p-6 text-center">
                    <span className="inline-flex items-center justify-center">
                      <Cell value={feature.freelancer} />
                    </span>
                  </td>
                  <td className="p-6 text-center">
                    <span className="inline-flex items-center justify-center">
                      <Cell value={feature.online} />
                    </span>
                  </td>
                  <td className="p-6 text-center">
                    <span className="inline-flex items-center justify-center">
                      <Cell value={feature.diy} />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </m.div>

        {/* Mobile accordion */}
        <m.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:hidden"
        >
          <div className="flex justify-center mb-6">
            <span className="inline-block bg-[#F5A623] text-[#1a1a2e] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-[0.08em]">
              Naukri Expert
            </span>
          </div>
          <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white">
            {features.map((feature, i) => (
              <MobileRow
                key={i}
                feature={feature}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                isLast={i === features.length - 1}
              />
            ))}
          </div>
        </m.div>

      </div>
    </section>
  );
}
