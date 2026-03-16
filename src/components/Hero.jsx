import { m } from "framer-motion";
import { Circle } from "lucide-react";
import SparklesText from "./SparklesText";
import { ShaderAnimation } from "./ui/shader-animation";

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
    <section className="relative min-h-[85vh] w-full flex items-center justify-center overflow-hidden bg-black">
      <ShaderAnimation />

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
            <Circle className="h-2 w-2 fill-emerald-500/80 hidden sm:block" />
            <span className="text-lg sm:text-xl text-white/90 tracking-wide">Expert led resume rebuild</span>
          </m.div>

          {/* Headline */}
          <m.div custom={1} variants={fadeUpVariants} initial="hidden" animate="visible">
            <h1 className="text-4xl sm:text-7xl md:text-7xl font-bold mb-6 md:mb-8 tracking-tight">
              <span className="bg-clip-text text-transparent bg-linear-to-b from-white to-white/80">
                Get your resume
              </span>
              <br />
              <SparklesText
                text="Rebuilt by Naukri Experts"
                textClassName="bg-clip-text text-transparent bg-linear-to-r from-indigo-300 via-white/90 to-rose-300"
              />
            </h1>
          </m.div>

          {/* Subheadline */}
          <m.div custom={2} variants={fadeUpVariants} initial="hidden" animate="visible">
            <p className="text-base sm:text-xl text-white/80 mb-10 leading-relaxed max-w-2xl mx-auto">
             Built on what recruiters in your field are actually shortlisting on Naukri today. No guesswork. No generic advice.
            </p>
          </m.div>

          {/* CTA */}
          <m.div custom={3} variants={fadeUpVariants} initial="hidden" animate="visible" className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#"
              className="inline-block px-6 py-4 rounded-full bg-white text-black font-semibold text-xl tracking-wide hover:bg-white/90 transition-colors"
            >
              Rebuild My Resume
            </a>
            <a
              href="#pricing"
              className="inline-block px-6 py-4 rounded-full border border-white/20 text-white font-semibold text-xl tracking-wide hover:bg-white/10 transition-colors"
            >
              View Pricing
            </a>
          </m.div>

        </div>
      </div>

      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />
    </section>
  );
}
