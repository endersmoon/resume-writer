import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Pricing', href: '#pricing' },
  { label: 'How it works?', href: '#how-it-works' },
  { label: 'Features', href: '#features' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQs', href: '#faqs' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const hero = document.querySelector('main > section:first-child');
    if (!hero) return;
    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className={`w-full max-w-[1108px] rounded-[18px] transition-all duration-300 ${
          scrolled
            ? 'bg-white shadow-[0_4px_24px_rgba(0,0,0,0.1)] border border-black/5 backdrop-blur-none'
            : 'bg-black/50 border border-white/20 backdrop-blur-md shadow-[0px_3px_25.5px_0px_rgba(0,0,0,0.04)]'
        }`}
      >
        <div className="flex items-center justify-between pl-[16.5px] pr-[12.75px] py-[12.75px]">
          {/* Logo */}
          <img
            src={scrolled ? '/naukri_logo_dark.svg' : '/naukri_logo.svg'}
            alt="Naukri"
            className="h-8 w-auto opacity-90"
            fetchPriority="high"
            decoding="sync"
            width="120"
            height="32"
          />

          {/* Nav links */}
          <ul className="hidden md:flex items-center gap-6">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className={`text-[14px] font-medium tracking-[0.02em] whitespace-nowrap transition-colors ${
                    scrolled
                      ? 'text-gray-700 hover:text-gray-900'
                      : 'text-white hover:text-white/70'
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="#pricing"
            className={`rounded-full px-[17px] py-[7px] text-[14px] font-medium leading-[17px] whitespace-nowrap transition-colors ${
              scrolled
                ? 'border border-gray-900 text-gray-900 hover:bg-gray-100'
                : 'border border-white/90 text-white hover:bg-white/10'
            }`}
          >
            Rebuild Resume
          </a>
        </div>
      </nav>
    </div>
  );
}
