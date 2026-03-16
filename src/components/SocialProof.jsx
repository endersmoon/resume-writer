import { m } from "framer-motion";

const stats = [
  {
    value: "90%",
    label: "Resumes are filtered out within the first 6 seconds of a recruiter search.",
    source: "Naukri Internal Analytics, 2024",
  },
  {
    value: "4x",
    label: "Higher chances of getting noticed by top recruiters after an Expert rebuild.",
    source: "Naukri Internal Analytics, 2024",
  },
  {
    value: "7 Days",
    label: "From expert call to your inbox. Editable. Formatted. Ready to send.",
    source: "Median delivery time",
  },
];

const imgPattern = "/pattern.svg";

export default function SocialProof() {
  return (
    <section className="relative bg-[#040216] py-16 sm:py-20 px-4 overflow-hidden">
      <img src={imgPattern} alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none" style={{  opacity: 1 }} />
      <div className="max-w-5xl mx-auto">
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
          }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden"
        >
          {stats.map((stat, i) => (
            <m.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
              }}
              className="bg-[#040216] px-8 py-10 flex flex-col gap-3"
            >
              <p className="text-5xl font-bold text-white tracking-tight">{stat.value}</p>
              <p className="text-base font-medium text-white/80 leading-relaxed">{stat.label}</p>
              <p className="text-xs font-medium text-white/40 tracking-[0.08em] uppercase">{stat.source}</p>
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  );
}
