import { cn } from "@/utils/cn";
import { Marquee } from "@/registry/magicui/marquee";

const reviews = [
  {
    name: "Rakesh M.",
    role: "VP Operations",
    body: "I thought my resume was fine. The Naukri expert completely changed how my leadership was positioned. I finally understood what recruiters look for.",
    img: "https://avatar.vercel.sh/rakesh",
  },
  {
    name: "Anjali S.",
    role: "Director of Product",
    body: "I had used AI tools before. This was different. The expert pulled out things I would never have thought to highlight.",
    img: "https://avatar.vercel.sh/anjali",
  },
  {
    name: "Vikram K.",
    role: "Principal Engineer",
    body: "After the rebuild, I felt confident sending my resume to senior contacts. That confidence alone made it worth it.",
    img: "https://avatar.vercel.sh/vikram",
  },
  {
    name: "Priya Sharma",
    role: "Senior Software Engineer, Infosys",
    body: "Got 3 interview calls within a week. The expert knew exactly what Naukri recruiters look for — I had no idea my resume was missing so much.",
    img: "https://avatar.vercel.sh/priya",
  },
  {
    name: "Rahul Mehta",
    role: "Product Manager, Flipkart",
    body: "I'd been applying for 4 months with no response. After the rebuild, callbacks started coming in within days.",
    img: "https://avatar.vercel.sh/rahul",
  },
  {
    name: "Ananya Iyer",
    role: "Data Analyst, TCS",
    body: "Worth every rupee. My profile views on Naukri went up 5x after the rewrite. The expert knew what keywords recruiters actually search for.",
    img: "https://avatar.vercel.sh/ananya",
  },
  {
    name: "Kavitha Reddy",
    role: "Finance Manager, Deloitte",
    body: "Led me to a 30% salary hike. The expert rewrote my finance experience as what I controlled — not just what I computed.",
    img: "https://avatar.vercel.sh/kavitha",
  },
  {
    name: "Siddharth Joshi",
    role: "DevOps Engineer, Razorpay",
    body: "Detailed, personal session — not a template. The expert challenged every bullet point and helped me quantify impact I hadn't thought to include.",
    img: "https://avatar.vercel.sh/siddharth",
  },
];


function ReviewCard({ img, name, role, body }) {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] transition-colors"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} loading="lazy" decoding="async" />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-gray-900">{name}</figcaption>
          <p className="text-xs text-gray-500">{role}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-gray-700 leading-relaxed">{body}</blockquote>
    </figure>
  );
}

export default function Testimonials() {
  return (
    <section className="relative w-full py-16 overflow-hidden bg-white">
      <p className="text-center text-sm font-medium text-gray-400 uppercase tracking-widest mb-10">
        What professionals are saying
      </p>

      <div className="relative flex w-full flex-col items-center">
        <Marquee pauseOnHover className="[--duration:40s]">
          {reviews.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </Marquee>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white" />
      </div>
    </section>
  );
}
