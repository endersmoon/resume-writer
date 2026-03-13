import { AnimatedTestimonials } from "./ui/AnimatedTestimonials";

const experts = [
  {
    name: "Meera",
    designation: "Resume Expert · 11 years · Technology & Product",
    quote:
      "A product leader's resume fails when it lists features shipped instead of markets moved. I look for the decisions that changed the product's direction — that's what a hiring committee actually wants to understand.",
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&h=400",
  },
  {
    name: "Anjali",
    designation: "Resume Expert · 9 years · Finance & Banking",
    quote:
      "Finance professionals undersell themselves consistently. They write what they computed. I rewrite it as what they controlled — there's a significant difference in how a CFO reads those two things.",
    src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&h=400",
  },
  {
    name: "Priya",
    designation: "Resume Expert · 7 years · Sales & Business Development",
    quote:
      "Every sales resume says 'exceeded targets.' The ones that get shortlisted say what the territory looked like before they arrived and what it looked like after. That's the only number that matters.",
    src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&h=400",
  },
  {
    name: "Sunita",
    designation: "Resume Expert · 12 years · Human Resources & Org Design",
    quote:
      "HR leaders write about initiatives. Recruiters want to see org impact — attrition numbers, culture shifts, workforce transformations. The work is the same. The framing is entirely different.",
    src: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=400&h=400",
  },
  {
    name: "Vikram",
    designation: "Resume Expert · 13 years · Technology & Engineering Leadership",
    quote:
      "Engineering leaders confuse technical depth with leadership signal. Recruiters at the VP level aren't reading for what you built — they're reading for what you decided not to build, and whether you can defend that call.",
    src: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&h=400",
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
            Each expert has spent years on the Naukri recruiter side — they know
            exactly what gets shortlisted in your field, and they'll apply that
            directly to your resume.
          </p>
        </div>
        <AnimatedTestimonials testimonials={experts} autoplay />
      </div>
    </section>
  );
}
