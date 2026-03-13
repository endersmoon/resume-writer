import { m } from "framer-motion";

const tiers = [
  {
    name: "Entry Level",
    range: "0 – 3 years of experience",
    original: "₹2,754",
    price: "₹2,204",
    savings: "₹550",
  },
  {
    name: "Mid Level",
    range: "4 – 8 years of experience",
    original: "₹5,297",
    price: "₹4,238",
    savings: "₹1,059",
  },
  {
    name: "Senior Level",
    range: "9 – 15 years of experience",
    original: "₹6,441",
    price: "₹5,153",
    savings: "₹1,288",
  },
  {
    name: "Executive",
    range: "15+ years of experience",
    original: "₹8,008",
    price: "₹6,407",
    savings: "₹1,601",
  },
];

export default function Pricing() {
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
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Simple, transparent pricing.
          </h2>
          <p className="mt-3 text-sm text-gray-500">
            Pricing is based on your experience level. One time payment. No subscription.
          </p>
        </m.div>

        {/* Cards grid */}
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
            {tiers.map((tier) => (
              <m.div
                key={tier.name}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
                }}
                className="group/feature relative flex flex-col p-8 border-r border-b border-gray-200 cursor-default"
              >
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-100 to-transparent opacity-0 group-hover/feature:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Left accent bar */}
                <div className="absolute left-0 top-0 w-0.5 h-0 bg-primary group-hover/feature:h-full transition-all duration-300" />

                <div className="relative flex flex-col flex-1">
                  {/* Tier name + range */}
                  <p className="font-semibold text-gray-900 mb-1 transition-transform duration-200 group-hover/feature:translate-x-1">
                    {tier.name}
                  </p>
                  <p className="text-xs text-gray-500 mb-6">{tier.range}</p>

                  {/* Price */}
                  <div className="mt-auto">
                    <p className="text-2xl font-bold text-gray-900 tracking-tight">{tier.price}</p>
                    <p className="text-xs text-gray-400 mt-0.5">
                      <s>{tier.original}</s>
                      <span className="ml-2 text-primary font-medium">Save {tier.savings}</span>
                    </p>

                    <a
                      href="#"
                      className="mt-5 block w-full text-center rounded-full bg-primary text-white py-2 text-sm font-semibold hover:opacity-90 transition-opacity"
                    >
                      Get Started — ₹{tier.price.replace("₹", "")}
                    </a>
                  </div>
                </div>
              </m.div>
            ))}
          </div>
        </m.div>

        {/* Footer note */}
        <p className="mt-6 text-center text-xs text-gray-400">
          Full refund guarantee. Unlimited revisions. Refund if your expert doesn't reach out in 7 days — no questions asked.
        </p>

      </div>
    </section>
  );
}
