import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const linkColumns = [
  {
    links: [
      { label: "About us", href: "https://infoedge.in" },
      { label: "Careers", href: "https://careers.infoedge.com/" },
      { label: "Employer home", href: "https://www.naukri.com/recruit/login" },
      { label: "Sitemap", href: "https://www.naukri.com/sitemap/sitemap.php" },
      { label: "Credits", href: "https://www.naukri.com/credits" },
    ],
  },
  {
    links: [
      { label: "Help center", href: "https://www.naukri.com/faq/job-seeker" },
      { label: "Summons/Notices", href: "https://w5.naukri.com/summons-notices-form/" },
      { label: "Grievances", href: "https://w5.naukri.com/grievances-form/" },
      { label: "Report issue", href: "https://w5.naukri.com/fdbck/main/feedback.php?app_id=15" },
    ],
  },
  {
    links: [
      { label: "Privacy policy", href: "https://www.naukri.com/privacypolicy" },
      { label: "Terms & conditions", href: "https://www.naukri.com/termsconditions" },
      { label: "Fraud alert", href: "https://www.naukri.com/imposter/report-fake-job-recruiter" },
      { label: "Trust & safety", href: "https://www.naukri.com/jobsearch/trust-safety" },
    ],
  },
];

const businesses = [
  { label: "99acres.com", href: "https://www.99acres.com/" },
  { label: "Jeevansathi.com", href: "https://www.jeevansathi.com/" },
  { label: "NaukriGulf.com", href: "https://www.naukrigulf.com/" },
  { label: "Shiksha.com", href: "https://www.shiksha.com/" },
  { label: "IIMJobs.com", href: "https://www.iimjobs.com" },
  { label: "hirist.tech", href: "https://www.hirist.tech/" },
  { label: "JobHai.com", href: "https://www.jobhai.com" },
  { label: "Doselect.com", href: "https://doselect.com/" },
  { label: "Naukri Minis", href: "https://www.naukri.com/minis" },
  { label: "Coding Ninjas", href: "https://www.codingninjas.com/" },
];

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/Naukri", label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com/naukridotcom/", label: "Instagram" },
  { icon: Twitter, href: "https://twitter.com/naukri", label: "X (Twitter)" },
  { icon: Linkedin, href: "http://www.linkedin.com/company/naukri.com", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="bg-[#040216] text-white/60">

      {/* Top section */}
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr_1fr_1fr_auto] gap-10 lg:gap-12">

          {/* Logo + social */}
          <div className="flex flex-col gap-6">
            <a href="https://www.naukri.com">
              <img src="/naukri_logo.svg" alt="Naukri" className="h-7 w-auto" />
            </a>
            <div>
              <p className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-3">
                Connect with us
              </p>
              <div className="flex items-center gap-3">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex items-center justify-center w-8 h-8 rounded-full border border-white/10 text-white/40 hover:text-white hover:border-white/30 transition-colors duration-200"
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Link columns */}
          {linkColumns.map((col, i) => (
            <ul key={i} className="flex flex-col gap-3">
              {col.links.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:text-white transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          ))}

          {/* App download */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold text-white/90 tracking-wide">Apply on the go</p>
            <p className="text-xs text-white/40 leading-relaxed">
              Get real-time job updates on our App
            </p>
            <div className="flex flex-col gap-2 mt-1">
              <a
                href="https://play.google.com/store/apps/details?id=naukriApp.appModules.login"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 hover:border-white/30 transition-colors duration-200 text-xs text-white/70 hover:text-white whitespace-nowrap"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.18 23.76a2 2 0 0 0 2.07-.17l11.49-6.59-2.96-2.96-10.6 9.72zm-1.12-21.02C2 3.03 2 3.34 2 3.66v16.67c0 .33 0 .64.06.93l10.27-9.26-10.27-9.26zM21.26 9.6l-2.54-1.46-3.27 2.96 3.27 2.96 2.57-1.48a2 2 0 0 0 0-3.47l-.03.01v-.52zm-18.08-7.7l10.6 9.72 2.96-2.96L5.25.38a2 2 0 0 0-2.07-.18v1.7z"/>
                </svg>
                Google Play
              </a>
              <a
                href="https://itunes.apple.com/in/app/naukri.com-job-search/id482877505"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 hover:border-white/30 transition-colors duration-200 text-xs text-white/70 hover:text-white whitespace-nowrap"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                App Store
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Separator */}
      <div className="border-t border-white/10" />

      {/* Bottom section */}
      <div className="max-w-7xl mx-auto px-6 py-8">

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div className="flex flex-col gap-1">
            <p className="text-xs text-white/30">All trademarks are the property of their respective owners</p>
            <p className="text-xs text-white/30">All rights reserved © 2025 Info Edge (India) Ltd.</p>
          </div>
          <a
            href="http://infoedge.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-white/40 hover:text-white/60 transition-colors duration-200 font-medium"
          >
            An Info Edge venture
          </a>
        </div>

        {/* Our businesses */}
        <div>
          <p className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-4">
            Our businesses
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {businesses.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-white/30 hover:text-white/60 transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

      </div>

    </footer>
  );
}
