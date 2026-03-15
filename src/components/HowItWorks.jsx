import { m } from "framer-motion";
import { UserCheck, Phone, FileEdit, RefreshCw } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: UserCheck,
    title: "We match you with your expert",
    description: "Based on your Naukri profile, we pair you with someone who's rebuilt hundreds of resumes in your exact field and level.",
  },
  {
    number: "2",
    icon: Phone,
    title: "A real conversation, not a form",
    description: "Your expert calls you — asks questions you haven't thought of, pulls out career details you'd normally leave out.",
  },
  {
    number: "3",
    icon: FileEdit,
    title: "Your resume, rebuilt from scratch",
    description: "Within 72 hours, you get a resume structured around what recruiters in your field actually shortlist. Not edited — rebuilt.",
  },
  {
    number: "4",
    icon: RefreshCw,
    title: "Refine until it feels right",
    description: "Unlimited revisions. If your expert isn't the right fit, we assign a new one. If you're still not happy — full refund.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-20 sm:py-32 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <p className="text-xs uppercase tracking-widest text-[#484a52] mb-3">How it works</p>
          <h2 className="font-bold text-[#0e0b16] text-4xl sm:text-5xl tracking-tight leading-tight">
            You don't have to figure anything out.
          </h2>
          <p className="mt-4 text-[#484a52] text-lg sm:text-xl max-w-2xl mx-auto">
            A real person who understands your career arc handles everything. You just show up for the call.
          </p>
        </m.div>

        {/* Steps */}
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <m.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
                }}
                className="flex flex-col items-center text-center gap-4"
              >
                {/* Number + Icon stacked */}
                <div className="relative flex items-center justify-center w-full h-44">
                  {/* Large ghost number */}
                  <span
                    className="absolute font-bold text-[10rem] text-black leading-none select-none pointer-events-none"
                    style={{ opacity: 0.08, left: 0, top: "50%", transform: "translateY(-50%)" }}
                  >
                    {step.number}
                  </span>
                  {/* Icon box */}
                  <div className="relative z-10 flex items-center justify-center w-36 h-36 rounded-2xl bg-gray-100">
                    <Icon className="w-14 h-14 text-gray-400" />
                  </div>
                </div>

                {/* Text */}
                <div className="flex flex-col gap-2">
                  <p className="font-bold text-[#0b0d16] text-xl tracking-tight">
                    {step.title}
                  </p>
                  <p className="text-[#484a52] text-base leading-relaxed whitespace-pre-line">
                    {step.description}
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
