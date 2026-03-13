import { AnimatedTestimonials } from "./ui/AnimatedTestimonials";

const experts = [
  {
    name: "Priya Sharma",
    designation: "Senior Resume Expert · 12 years · IT & Product",
    quote:
      "I've reviewed over 30,000 Naukri profiles. Most resumes fail in the first 6 seconds — not because of experience, but because of how it's presented. I fix that.",
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=3387&auto=format&fit=crop",
  },
  {
    name: "Arjun Mehta",
    designation: "Resume Expert · 10 years · Finance & Banking",
    quote:
      "Recruiters in BFSI scan for very specific keywords. I know exactly which ones get a response from HCL, BYJU's, Paytm — and I make sure your resume speaks their language.",
    src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=3387&auto=format&fit=crop",
  },
  {
    name: "Neha Kapoor",
    designation: "Resume Expert · 8 years · Marketing & Growth",
    quote:
      "A great marketing resume should itself be great marketing. I help you quantify impact, sharpen your positioning, and craft a story that gets callbacks.",
    src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=3461&auto=format&fit=crop",
  },
  {
    name: "Rahul Verma",
    designation: "Resume Expert · 11 years · Engineering & R&D",
    quote:
      "Technical roles demand technical precision. I've helped engineers at every level — from freshers to CTOs — transform their GitHub and project histories into compelling resumes.",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=3387&auto=format&fit=crop",
  },
  {
    name: "Sanya Bose",
    designation: "Resume Expert · 9 years · HR & Operations",
    quote:
      "I help professionals in HR and ops articulate the invisible work — the systems they built, the fires they put out, the culture they shaped. That's what gets noticed.",
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=3388&auto=format&fit=crop",
  },
];

export default function MeetOurExperts() {
  return (
    <section className="relative w-full bg-slate-50 py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-4">
          <p className="text-xs uppercase tracking-widest text-slate-400 mb-3">Your resume expert</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Meet our experts
          </h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto text-base">
            Each expert is a Naukri veteran who has spent years on the recruiter
            side — they know what gets shortlisted, and they'll get you there.
          </p>
        </div>
        <AnimatedTestimonials testimonials={experts} autoplay />
      </div>
    </section>
  );
}
