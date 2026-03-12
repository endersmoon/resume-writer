import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import BeforeAfter from "./components/BeforeAfter";
import HowItWorks from "./components/HowItWorks";
import Pricing from "./components/Pricing";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

function App() {
  return (
    <main>
      <Hero />
      <BeforeAfter />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <Faq />
      <Footer />
    </main>
  );
}

export default App;
