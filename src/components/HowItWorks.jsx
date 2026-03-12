import { motion } from "framer-motion";
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

const fadeUpVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: [0.25, 0.4, 0.25, 1] },
  }),
};

export default function HowItWorks() {
  return (
    <section className="bg-slate-50 py-16 sm:py-24 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
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
        </motion.div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ scale: 1.04, transition: { duration: 0.2 } }}
                className="relative bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md hover:border-indigo-200 transition-colors duration-300 flex flex-col gap-4"
              >
                {/* Connector line (desktop only, not on last card) */}
                {i < steps.length - 1 && (
                  <span className="hidden lg:block absolute top-9 left-full w-6 h-px bg-gray-200 z-10" />
                )}

                {/* Number + icon row */}
                <div className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-7 h-7 rounded-full bg-indigo-600 text-white text-xs font-bold shrink-0">
                    {i + 1}
                  </span>
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-indigo-50">
                    <Icon className="w-5 h-5 text-indigo-600" />
                  </div>
                </div>

                {/* Text */}
                <div>
                  <p className="font-semibold text-gray-900 leading-snug">{step.title}</p>
                  <p className="mt-1 text-sm text-gray-500 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
