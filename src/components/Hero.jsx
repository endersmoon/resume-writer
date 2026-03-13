import { m } from "framer-motion";
import { Circle } from "lucide-react";
import ElegantShape from "./ElegantShape";
import SparklesText from "./SparklesText";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay: 0.5 + i * 0.2, ease: [0.25, 0.4, 0.25, 1] },
  }),
};

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full flex items-center justify-center overflow-hidden bg-linear-[121deg,#040216_60.06%,#164AB0_97.36%]">
      <div className="absolute inset-0 bg-linear-to-br from-indigo-500/5 via-transparent to-rose-500/5 blur-3xl" />

      <div className="absolute top-6 left-6 z-20">
        <img
          src="/naukri_logo.svg"
          alt="Naukri"
          className="h-8 w-auto opacity-90"
          fetchPriority="high"
          decoding="sync"
          width="120"
          height="32"
        />
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape delay={0.3} width={600} height={140} rotate={12} gradient="from-indigo-500/[0.15]" className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]" />
        <ElegantShape delay={0.5} width={500} height={120} rotate={-15} gradient="from-rose-500/[0.15]" className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]" />
        <ElegantShape delay={0.4} width={300} height={80} rotate={-8} gradient="from-violet-500/[0.15]" className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]" />
        <ElegantShape delay={0.6} width={200} height={60} rotate={20} gradient="from-amber-500/[0.15]" className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]" />
        <ElegantShape delay={0.7} width={150} height={40} rotate={-25} gradient="from-cyan-500/[0.15]" className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto text-center">

          {/* Badge */}
          <m.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/3 border border-white/8 mb-8 md:mb-12"
          >
            <Circle className="h-2 w-2 fill-rose-500/80" />
            <span className="text-sm text-white/60 tracking-wide">10+ years · 1,20,000+ resumes · Naukri recruiter data</span>
          </m.div>

          {/* Headline */}
          <m.div custom={1} variants={fadeUpVariants} initial="hidden" animate="visible">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 md:mb-8 tracking-tight">
              <span className="bg-clip-text text-transparent bg-linear-to-b from-white to-white/80">
                Get your resume rebuilt
              </span>
              <br />
              <SparklesText
                text="by a Naukri Expert"
                textClassName="bg-clip-text text-transparent bg-linear-to-r from-indigo-300 via-white/90 to-rose-300"
              />
            </h1>
          </m.div>

          {/* Subheadline */}
          <m.div custom={2} variants={fadeUpVariants} initial="hidden" animate="visible">
            <p className="text-lg sm:text-2xl text-white/80 mb-10 leading-relaxed font-light tracking-wide max-w-2xl mx-auto">
             Built on what recruiters in your field are actually shortlisting on Naukri today. Not guesswork. Not AI. Not generic advice.
            </p>
          </m.div>

          {/* CTA */}
          <m.div custom={3} variants={fadeUpVariants} initial="hidden" animate="visible">
            <a
              href="#"
              className="inline-block px-6 py-4 rounded-full bg-white text-black font-semibold text-xl tracking-wide hover:bg-white/90 transition-colors"
            >
              Rebuild My Resume
            </a>
          </m.div>

        </div>
      </div>

      <div className="absolute inset-0 bg-linear-to-t from-[#040216] via-transparent to-[#040216]/80 pointer-events-none" />
    </section>
  );
}
