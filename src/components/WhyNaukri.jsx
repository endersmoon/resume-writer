import { m } from "framer-motion";
import { Eye, Search, BarChart3, ShieldCheck } from "lucide-react";

const reasons = [
  {
    icon: Search,
    title: "We see how recruiters search.",
    description:
      "Every recruiter search on Naukri generates data — which keywords they type, which filters they use, which profiles they open first. Your expert uses this to position your resume where recruiters already look.",
  },
  {
    icon: Eye,
    title: "We see which profiles get opened.",
    description:
      "Not every search result gets clicked. We know which profile formats, headlines, and summary patterns make recruiters stop scrolling — and which ones they skip.",
  },
  {
    icon: BarChart3,
    title: "We see what gets shortlisted.",
    description:
      "Opening a profile is one thing. Shortlisting it is another. We see the patterns that separate 'interesting' from 'shortlisted' — and your resume is rebuilt around those patterns.",
  },
  {
    icon: ShieldCheck,
    title: "No one else has this.",
    description:
      "Freelancers guess. AI tools pattern-match on public data. Only Naukri experts have recruiter-side visibility — the search terms, the filters, the shortlist behaviour. This is the unfair advantage.",
  },
];

export default function WhyNaukri() {
  return (
    <section className="bg-white py-16 sm:py-24 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">Why Naukri Expert</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight max-w-3xl mx-auto">
            Other services write resumes. We rebuild them on recruiter data.
          </h2>
        </m.div>

        {/* Reason cards */}
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <m.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
                }}
                className="group/feature relative bg-white rounded-2xl border border-gray-200 p-8 cursor-default"
              >
                <div className="absolute inset-0 rounded-2xl bg-linear-to-t from-slate-100 to-transparent opacity-0 group-hover/feature:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <div className="absolute left-0 top-0 w-0.5 h-0 bg-primary rounded-l-2xl group-hover/feature:h-full transition-all duration-300" />

                <div className="relative">
                  <div className="mb-4 flex items-center justify-center w-10 h-10 rounded-xl bg-indigo-50">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2 transition-transform duration-200 group-hover/feature:translate-x-1">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </m.div>
            );
          })}
        </m.div>

      </div>
    </section>
  );
}
