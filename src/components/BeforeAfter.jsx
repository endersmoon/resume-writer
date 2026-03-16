import { m } from "framer-motion";
import { UserCheck, Database, PenLine, ShieldCheck } from "lucide-react";

const differentiators = [
  {
    icon: Database,
    title: "Real recruiter search patterns",
    description:
      "We know which keywords recruiters in your field actually search for — and which ones they skip entirely.",
  },
  {
    icon: UserCheck,
    title: "Shortlist signals, not guesswork",
    description:
      "Your expert sees which profiles get opened and which get passed over. Your resume is rewritten around what works.",
  },
  {
    icon: PenLine,
    title: "Domain-matched expertise",
    description:
      "Your expert has rebuilt thousands of resumes in your exact industry. They know the difference between a good profile and a shortlisted one.",
  },
  {
    icon: ShieldCheck,
    title: "Unlimited revisions, full refund",
    description:
      "Not confident? Unlimited rounds. Not happy with your expert? New one assigned. Still not satisfied? Full refund.",
  },
];

export default function BeforeAfter() {
  return (
    <section className="bg-slate-50 py-16 sm:py-24 px-4">
       <h2 className="text-4xl sm:text-5xl max-w-4xl mx-auto mb-12  text-center font-bold text-slate-900 tracking-tight">
            Only Naukri Resume Experts know what happens on the recruiter's side
          </h2> 
         
      <div className="max-w-6xl mx-auto">
        <div className="">

         

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
