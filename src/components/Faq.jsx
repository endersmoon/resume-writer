import { useState, useId } from "react";
import { m, AnimatePresence } from "framer-motion";
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

function FaqItem({ faq, index, isOpen, onToggle, isLast }) {
  const id = useId();
  const headingId = `faq-heading-${id}`;
  const regionId = `faq-region-${id}`;

  return (
    <m.div
      custom={index}
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
      }}
      className={`group/feature relative px-6 ${!isLast ? "border-b border-gray-200" : ""}`}
    >
      {/* Left accent bar */}
      <div className="absolute left-0 top-0 w-0.5 h-0 bg-primary group-hover/feature:h-full transition-all duration-300" />

      <button
        id={headingId}
        aria-expanded={isOpen}
        aria-controls={regionId}
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left cursor-pointer"
      >
        <span
          className={`text-sm sm:text-base font-semibold tracking-wide transition-colors duration-200 ${
            isOpen ? "text-primary" : "text-gray-900 group-hover/feature:translate-x-1"
          } transition-transform duration-200`}
        >
          {faq.question}
        </span>
        <m.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={`ml-4 shrink-0 transition-colors duration-200 ${isOpen ? "text-primary" : "text-gray-400"}`}
        >
          <ChevronDown className="h-4 w-4" />
        </m.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <m.div
            id={regionId}
            role="region"
            aria-labelledby={headingId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-gray-500 leading-relaxed">
              {faq.answer}
            </p>
          </m.div>
        )}
      </AnimatePresence>
    </m.div>
  );
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faqs" className="bg-slate-50 py-16 sm:py-24 px-4">
      <div className="max-w-3xl mx-auto">

        {/* Heading */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
            Frequently asked questions
          </h2>
          <p className="mt-3 text-base text-gray-500">
            Everything you need to know before getting started.
          </p>
        </m.div>

        {/* Single card container */}
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
          }}
          className="border border-gray-200 rounded-2xl overflow-hidden bg-white"
        >
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              faq={faq}
              index={index}
              isLast={index === faqs.length - 1}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </m.div>

      </div>
    </section>
  );
}
