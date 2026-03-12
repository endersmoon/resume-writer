import { useState, useId } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Why does the price vary by experience level?",
    answer:
      "More experienced professionals have more complex careers — more roles, more decisions, more impact that needs to be surfaced and correctly positioned. A VP Operations profile requires significantly more expert time and domain knowledge than an entry-level profile. The price reflects the depth of work, not the value of your career.",
  },
  {
    question: "I already used AI. Why do I need this?",
    answer:
      "AI helps you write. It does not know how Indian recruiters evaluate at scale. We apply real hiring behaviour insight to your resume based on Naukri's exclusive visibility.",
  },
  {
    question: "Do you guarantee interviews?",
    answer:
      "We don't guarantee interviews — no one can control hiring decisions. What we guarantee is that your resume will be the strongest possible version of your career story, structured exactly the way recruiters in your field evaluate profiles. Whatever happens next, your resume won't be the reason you're held back.",
  },
  {
    question: "What happens after payment?",
    answer:
      "Your Naukri Expert reaches out within a few hours to schedule a call at your convenience. Based on your Naukri profile, we match you with a domain-specific expert from our network of 100+ resume writers. Your resume is rebuilt within 72 hours of your call. Unlimited revisions included. If your call isn't scheduled within 7 days of payment for any reason, you get a full refund. No questions asked.",
  },
  {
    question: "Is this just editing?",
    answer:
      "No. Your resume is rebuilt from scratch based on recruiter insight, not just stylistic changes.",
  },
];

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.2 + i * 0.08, ease: [0.25, 0.4, 0.25, 1] },
  }),
};

function FaqItem({ faq, index, isOpen, onToggle }) {
  const id = useId();
  const headingId = `faq-heading-${id}`;
  const regionId = `faq-region-${id}`;

  return (
    <motion.div
      custom={index}
      variants={fadeUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      className="border-b border-white/10"
    >
      <button
        id={headingId}
        aria-expanded={isOpen}
        aria-controls={regionId}
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left group cursor-pointer"
      >
        <span
          className={`text-sm sm:text-base font-medium tracking-wide transition-colors duration-200 ${
            isOpen ? "text-white" : "text-white/60 group-hover:text-white/80"
          }`}
        >
          {faq.question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="ml-4 shrink-0 text-white/40"
        >
          <ChevronDown className="h-4 w-4" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={regionId}
            role="region"
            aria-labelledby={headingId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-white/40 leading-relaxed font-light">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="max-w-3xl mx-auto px-6 py-16 sm:py-24">
      <motion.h2
        custom={0}
        variants={fadeUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className="text-2xl sm:text-3xl font-bold text-white/90 tracking-tight mb-10"
      >
        Frequently asked questions
      </motion.h2>

      <div className="border-t border-white/10">
        {faqs.map((faq, index) => (
          <FaqItem
            key={index}
            faq={faq}
            index={index + 1}
            isOpen={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
    </section>
  );
}
