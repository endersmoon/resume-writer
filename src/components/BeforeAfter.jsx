import { m } from "framer-motion";
import { UserCheck, Database, PenLine, ShieldCheck } from "lucide-react";

const differentiators = [
  {
    icon: UserCheck,
    title: "Rebuilt by a real human expert",
    description:
      "Not a template. Not a generator. A specialist who has rebuilt thousands of resumes in your exact field.",
  },
  {
    icon: Database,
    title: "Based on actual recruiter behavior data",
    description:
      "Only Naukri Expert resume writers see what happens on the recruiter's side — how they search, filter, and shortlist.",
  },
  {
    icon: PenLine,
    title: "Domain-specific expertise",
    description:
      "No freelancer, no AI tool, no other service has this. Your expert knows your industry's shortlist patterns.",
  },
  {
    icon: ShieldCheck,
    title: "Unlimited revisions with guarantee",
    description:
      "Revisions until you're completely confident. Not happy with your expert? Request a new one — or get a full refund.",
  },
];

export default function BeforeAfter() {
  return (
    <section className="bg-slate-50 py-16 sm:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left column */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-semibold tracking-widest text-primary uppercase mb-4">
              Why professionals choose Naukri Expert
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight leading-tight mb-6">
              No freelancer, no AI tool, no other service has{" "}
              <em className="not-italic text-primary">access to this.</em>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Naukri is where India's recruiters actually search, filter, and hire.
              Only Naukri Expert resume writers see what happens on the recruiter's
              side — and they bring that insight directly to your resume.
            </p>
            <a
              href="#"
              className="inline-block px-6 py-3 rounded-full bg-primary text-white font-semibold text-sm tracking-wide hover:opacity-90 transition-opacity"
            >
              Rebuild My Resume →
            </a>
            <p className="mt-4 text-xs text-gray-400">
              Starting from ₹2,204 · One time payment · Full refund guarantee
            </p>
          </m.div>

          {/* Right column */}
          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
            }}
            className="border border-gray-200 rounded-2xl overflow-hidden bg-white"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2">
              {differentiators.map((item, i) => {
                const Icon = item.icon;
                return (
                  <m.div
                    key={i}
                    variants={{
                      hidden: { opacity: 0, y: 24 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
                    }}
                    className="group/feature relative flex flex-col p-6 border-r border-b border-gray-200 cursor-default"
                  >
                    <div className="absolute inset-0 bg-linear-to-t from-slate-100 to-transparent opacity-0 group-hover/feature:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    <div className="absolute left-0 top-0 w-0.5 h-0 bg-primary group-hover/feature:h-full transition-all duration-300" />

                    <div className="relative mb-4 flex items-center justify-center w-10 h-10 rounded-xl bg-indigo-50">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>

                    <div className="relative">
                      <p className="font-semibold text-gray-900 mb-1 text-sm transition-transform duration-200 group-hover/feature:translate-x-1">
                        {item.title}
                      </p>
                      <p className="text-xs text-gray-500 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </m.div>
                );
              })}
            </div>
          </m.div>

        </div>
      </div>
    </section>
  );
}
