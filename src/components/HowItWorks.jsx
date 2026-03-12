import { m } from "framer-motion";
import { UserCheck, Phone, FileEdit, RefreshCw } from "lucide-react";

const steps = [
  {
    icon: UserCheck,
    title: "Expert matched to you",
    description: "By field, level, and Naukri profile.",
  },
  {
    icon: Phone,
    title: "They call you",
    description: "Within hours. One-on-one. Unlimited sessions. 🔒 7 days or full refund.",
  },
  {
    icon: FileEdit,
    title: "Resume rebuilt in 72h",
    description: "From scratch, on Naukri's shortlist data.",
  },
  {
    icon: RefreshCw,
    title: "Revisions until you're ready",
    description: "Unlimited. New expert or refund if needed.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-16 sm:py-24 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Four steps. Then interviews.
          </h2>
          <p className="mt-3 text-sm text-gray-500">
            Only Naukri Expert writers see what recruiters see. ATS. AI filters. Human eyes. In that order.
          </p>
        </m.div>

        {/* Feature grid */}
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <m.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 24 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
                  }}
                  className="group/feature relative flex flex-col p-8 border-r border-b border-gray-200 cursor-default"
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-100 to-transparent opacity-0 group-hover/feature:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  {/* Left accent bar */}
                  <div className="absolute left-0 top-0 w-0.5 h-0 bg-primary group-hover/feature:h-full transition-all duration-300" />

                  {/* Icon */}
                  <div className="relative mb-5 flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-50">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>

                  {/* Text */}
                  <div className="relative">
                    <p className="font-semibold text-gray-900 mb-2 transition-transform duration-200 group-hover/feature:translate-x-1">
                      {step.title}
                    </p>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </m.div>
              );
            })}
          </div>
        </m.div>

      </div>
    </section>
  );
}
