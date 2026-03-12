import { motion } from "framer-motion";
import { Target, UserCheck, PenLine, RefreshCw } from "lucide-react";

const differentiators = [
  {
    icon: Target,
    title: "Recruiter-Informed Writing",
    description:
      "Your writer uses live keyword data from Naukri's platform — the same data recruiters use to search.",
  },
  {
    icon: UserCheck,
    title: "Personal Consultation",
    description:
      "45-minute 1-on-1 call. Your expert learns your career deeply before writing a single word.",
  },
  {
    icon: PenLine,
    title: "Written by Hand, Not AI",
    description:
      "Every line is crafted manually. No templates. No generators. Genuine expertise, applied to your story.",
  },
  {
    icon: RefreshCw,
    title: "Two Rounds of Revisions",
    description:
      "Your expert refines until the resume reflects exactly who you are and where you want to go.",
  },
];

export default function BeforeAfter() {
  return (
    <section className="bg-slate-50 py-16 sm:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-semibold tracking-widest text-indigo-600 uppercase mb-4">
              India's Leading Resume Specialists
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight leading-tight mb-6">
              Your career story deserves more than a{" "}
              <em className="not-italic text-indigo-600">template.</em>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Every Naukri resume is handcrafted by a specialist after a personal
              consultation — built with 27 years of insider knowledge about how
              Indian recruiters actually hire.
            </p>
            <a
              href="#"
              className="inline-block px-6 py-3 rounded-full bg-indigo-600 text-white font-semibold text-sm tracking-wide hover:bg-indigo-700 transition-colors"
            >
              Begin Your Resume
            </a>
            <p className="mt-4 text-xs text-gray-400">
              Starting from ₹2,204 · Consultation included · 2 revisions guaranteed
            </p>
          </motion.div>

          {/* Right column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="border border-gray-200 rounded-2xl overflow-hidden bg-white"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2">
              {differentiators.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="group/feature relative flex flex-col p-6 border-r border-b border-gray-200 cursor-default"
                  >
                    <div className="absolute inset-0 bg-linear-to-t from-slate-100 to-transparent opacity-0 group-hover/feature:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    <div className="absolute left-0 top-0 w-0.5 h-0 bg-indigo-500 group-hover/feature:h-full transition-all duration-300" />

                    <div className="relative mb-4 flex items-center justify-center w-10 h-10 rounded-xl bg-indigo-50">
                      <Icon className="w-5 h-5 text-indigo-600" />
                    </div>

                    <div className="relative">
                      <p className="font-semibold text-gray-900 mb-1 text-sm transition-transform duration-200 group-hover/feature:translate-x-1">
                        {item.title}
                      </p>
                      <p className="text-xs text-gray-500 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
