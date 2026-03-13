import { lazy, Suspense } from "react";
import { LazyMotion, domAnimation } from "framer-motion";
import Hero from "./components/Hero";
import MeetOurExperts from "./components/MeetOurExperts";

const ResumeComparison = lazy(() => import("./components/ResumeComparison"));
const BeforeAfter  = lazy(() => import("./components/BeforeAfter"));
const HowItWorks   = lazy(() => import("./components/HowItWorks"));
const Pricing      = lazy(() => import("./components/Pricing"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const Faq          = lazy(() => import("./components/Faq"));
const Footer       = lazy(() => import("./components/Footer"));

function App() {
  return (
    <LazyMotion features={domAnimation} strict>
      <main>
        <Hero />
        <MeetOurExperts />
        <Suspense fallback={null}>
          <ResumeComparison />
          <BeforeAfter />
          <HowItWorks />
          <Pricing />
          <Testimonials />
          <Faq />
          <Footer />
        </Suspense>
      </main>
    </LazyMotion>
  );
}

export default App;
