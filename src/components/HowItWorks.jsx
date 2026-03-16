import { m } from "framer-motion";

const steps = [
  {
    image: "/one.png",
    title: "We match you with your expert",
    description: "Based on your Naukri profile, we pair you with someone who's rebuilt hundreds of resumes in your exact field and level.",
  },
  {
    image: "/two.png",
    title: "A real conversation, not a form",
    description: "Your expert calls you — asks questions you haven't thought of, pulls out career details you'd normally leave out.",
  },
  {
    image: "/three.png",
    title: "Your resume, rebuilt from scratch",
    description: "Within 72 hours, you get a resume structured around what recruiters in your field actually shortlist. Not edited — rebuilt.",
  },
  {
    image: "/four.png",
    title: "Refine until it feels right",
    description: "Unlimited revisions. If your expert isn't the right fit, we assign a new one. If you're still not happy — full refund.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-slate-50 py-20 sm:py-32 px-6">
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
            return (
              <m.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
                }}
                className="flex flex-col items-center text-center gap-4"
              >
                {/* Image */}
                <div className="flex items-center justify-center w-36 h-36 rounded-2xl overflow-hidden">
                  <img src={step.image} alt={step.title} className="w-full h-full object-cover" />
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
