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
    <section className="max-w-8xl mx-auto px-6 py-16 space-y-8">
      <div className="flex flex-wrap justify-center gap-6">
        {tiers.map((tier, idx) => (
          <div
            key={tier.name}
            className={[
              "rounded-2xl border shadow-md p-6 w-72 space-y-3",
              "transition-transform duration-200",
              "hover:scale-105",
              idx % 2 === 0 ? "hover:-rotate-1" : "hover:rotate-1",
            ].join(" ")}
          >
            <h3 className="font-semibold text-lg">{tier.name}</h3>
            <p className="text-sm text-gray-500">{tier.range}</p>
            <p className="text-sm">
              <s className="text-gray-400">{tier.original}</s>{" "}
              <span className="font-semibold">{tier.price}</span>{" "}
              <span className="text-gray-500">· You save {tier.savings}</span>
            </p>
            <a
              href="#"
              className="mt-6 block w-full text-center rounded-lg bg-black text-white py-2 text-sm font-semibold hover:bg-gray-800 transition-colors"
            >
              Get Started — {tier.price}
            </a>
          </div>
        ))}
      </div>
      <p className="text-sm text-gray-500 leading-relaxed">
        Every plan includes a dedicated expert, unlimited revisions, and a full
        refund guarantee. Not happy with your expert? We'll assign a new one —
        or refund you. No hoops.
      </p>
      <p className="text-sm font-semibold">
        Not happy? New expert or full refund. No hoops.
      </p>
    </section>
  );
}
