import { m } from "framer-motion";

const BG_IMAGE = "https://www.figma.com/api/mcp/asset/0aa6de68-34b6-45f0-9227-fb32acd1f383";

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
    <section id="pricing" className="bg-slate-50 py-16 sm:py-20 px-4 sm:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="relative rounded-[2.5rem] overflow-hidden">
          {/* Background image */}
          <img
            alt=""
            src={BG_IMAGE}
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />
          {/* Dark overlay — dense at top, fades toward bottom */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.536) 35%, rgba(0,0,0,0) 74.5%)",
            }}
          />

          {/* Content */}
          <div className="relative px-8 sm:px-16 py-16 sm:py-20 flex flex-col items-center gap-10">
            {/* Heading */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
                Simple, transparent pricing.
              </h2>
              <p className="mt-3 text-base text-white/80">
                Every plan includes a dedicated expert, unlimited revisions, and a full refund guarantee.
              </p>
            </m.div>

            {/* Cards */}
            <m.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
              }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full"
            >
              {tiers.map((tier) => (
                <m.div
                  key={tier.name}
                  variants={{
                    hidden: { opacity: 0, y: 24 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
                  }}
                  className="bg-white rounded-2xl p-6 shadow-[0px_3px_92px_0px_rgba(0,0,0,0.08)] flex flex-col"
                >
                  <p className="font-bold text-base text-[#101828]">{tier.name}</p>
                  <p className="text-xs text-[#6a7282] mt-0.5 mb-7">{tier.range}</p>

                  <div className="mt-auto">
                    <p className="text-lg font-bold text-[#101828] tracking-tight">{tier.price}</p>
                    <div className="flex items-center gap-1.5 mt-0.5 mb-4 text-xs">
                      <s className="text-[#99a1af]">{tier.original}</s>
                      <span className="text-primary font-medium">Save {tier.savings}</span>
                    </div>
                    <a
                      href="#"
                      className="block w-full text-center rounded-full bg-primary text-white py-2 text-sm font-bold hover:opacity-90 transition-opacity"
                    >
                      Get Started
                    </a>
                  </div>
                </m.div>
              ))}
            </m.div>

            {/* Footer note */}
            <p className="text-xs font-black text-white text-center">
              Not happy with your expert? We&apos;ll assign a new one — or refund you. No hoops.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
