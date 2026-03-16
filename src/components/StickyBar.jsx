import { useState } from 'react';

const tiers = [
  { name: 'Entry Level',  label: '0–3 years',  price: '₹2,204', original: '₹2,754', savings: '₹550' },
  { name: 'Mid Level',    label: '4–8 years',  price: '₹4,238', original: '₹5,297', savings: '₹1,059' },
  { name: 'Senior Level', label: '9–15 years', price: '₹5,153', original: '₹6,441', savings: '₹1,288' },
  { name: 'Executive',    label: '15+ years',  price: '₹6,407', original: '₹8,008', savings: '₹1,601' },
];

export default function StickyBar() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const selectedTier = selected !== null ? tiers[selected] : null;

  function handleSelect(i) {
    setSelected(i);
    setOpen(false);
  }

  return (
    <>
      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-[98] bg-black/50 backdrop-blur-[2px]"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Pricing sheet — sits above the sticky bar */}
      <div
        className={`fixed bottom-[64px] left-0 right-0 z-[99] bg-black/95 border-t border-white/10 rounded-t-[20px] px-6 py-7 sm:px-8 sm:pb-8 sm:pt-7 shadow-[0_-8px_40px_rgba(0,0,0,0.5)] backdrop-blur-md transition-transform duration-[0.35s] ease-[cubic-bezier(0.4,0,0.2,1)] ${open ? 'translate-y-0' : 'translate-y-[110%]'}`}
      >
        {/* Drag handle */}
        <div className="w-9 h-1 bg-white/15 rounded-[2px] mx-auto mb-6" />

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <span className="text-[11px] font-extrabold tracking-[0.1em] uppercase text-white/35">
            Select your experience level
          </span>
          <button
            onClick={() => setOpen(false)}
            className="w-7 h-7 bg-white/8 border border-white/12 rounded-full flex items-center justify-center cursor-pointer text-white/50 text-[14px] transition-all hover:bg-white/14 hover:text-white"
          >
            ✕
          </button>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-2 min-[901px]:grid-cols-4 gap-3">
          {tiers.map((tier, i) => {
            const isSelected = selected === i;
            return (
              <button
                key={tier.name}
                onClick={() => handleSelect(i)}
                className={`relative text-left rounded-[14px] p-5 cursor-pointer transition-all duration-200 hover:-translate-y-0.5 select-none border-[1.5px] ${
                  isSelected
                    ? 'border-primary bg-primary/10 shadow-[0_4px_20px_rgba(39,93,245,0.2)]'
                    : 'bg-white/5 border-white/10 hover:border-primary/45 hover:bg-primary/7'
                }`}
              >
                {/* Checkmark */}
                {isSelected && (
                  <div className="absolute top-3 right-3 w-5 h-5 bg-primary rounded-full flex items-center justify-center text-white text-[11px] font-black">
                    ✓
                  </div>
                )}

                <div className="text-[14px] font-black text-white mb-0.5">{tier.name}</div>
                <div className="text-[9px] font-extrabold text-white/30 tracking-[0.1em] uppercase mb-[3px]">
                  Work Experience
                </div>
                <div className="text-[13px] font-black text-white/80 tracking-[-0.01em] mb-4">
                  {tier.label}
                </div>

                <div className="h-[1px] bg-white/8 mb-3.5" />

                <div className="text-[11px] font-bold text-white/25 line-through mb-[3px]">
                  {tier.original}
                </div>
                <div className={`text-[22px] font-black tracking-[-0.02em] leading-none mb-1.5 ${isSelected ? 'text-primary' : 'text-white/90'}`}>
                  {tier.price}
                </div>
                <div className={`text-[10px] font-bold italic ${isSelected ? 'text-primary/70' : 'text-white/30'}`}>
                  You save {tier.savings}
                </div>
              </button>
            );
          })}
        </div>

        {/* Footer trust badges */}
        <div className="mt-5 pt-[18px] border-t border-white/7 flex items-center justify-center gap-6 flex-wrap">
          <div className="flex items-center gap-1.5 text-[11px] font-bold text-white/30">
            <span>🔒</span> One time payment
          </div>
          <div className="flex items-center gap-1.5 text-[11px] font-bold text-white/30">
            <span>↩</span> Full refund guarantee
          </div>
          <div className="flex items-center gap-1.5 text-[11px] font-bold text-white/30">
            <span>✓</span> Unlimited revisions
          </div>
        </div>
      </div>

      {/* Sticky bar */}
      <div className="fixed bottom-0 left-0 right-0 z-[100] bg-black/90 border-t border-white/8 shadow-[0_-4px_24px_rgba(0,0,0,0.4)] backdrop-blur-md" style={{ height: 64 }}>
        <div className="max-w-[1200px] mx-auto h-16 flex items-center justify-between gap-5 px-6 sm:px-8">

          {/* Left: selector button */}
          <div className="flex-1 flex items-center gap-2.5 overflow-hidden">
            <div className="hidden sm:flex items-center gap-2.5">
              <span className="text-[13px] font-bold text-white/40 whitespace-nowrap">See Pricing</span>
              <button
                onClick={() => setOpen(o => !o)}
                className={`flex items-center gap-2 rounded-full px-[18px] py-[7px] text-[13px] font-bold cursor-pointer transition-all duration-[180ms] whitespace-nowrap border ${
                  selectedTier
                    ? 'border-primary/50 bg-primary/10 text-white hover:bg-primary/15'
                    : 'border-white/15 bg-white/5 text-white/70 hover:border-white/35 hover:text-white hover:bg-white/10'
                }`}
              >
                {selectedTier ? (
                  <>
                    <span>{selectedTier.name}</span>
                    <span className="text-primary font-black">{selectedTier.price}</span>
                  </>
                ) : (
                  'Select your work experience'
                )}
                <span className={`text-[11px] transition-transform duration-300 inline-block ${open ? 'rotate-180' : ''}`}>↑</span>
              </button>
            </div>

            {/* Mobile */}
            <button
              onClick={() => setOpen(o => !o)}
              className={`sm:hidden flex items-center gap-2 border rounded-full px-4 py-1.5 text-[13px] font-bold cursor-pointer transition-all ${
                selectedTier
                  ? 'border-primary/50 bg-primary/10 text-white'
                  : 'bg-white/5 border-white/15 text-white/70 hover:bg-white/10'
              }`}
            >
              {selectedTier ? selectedTier.name : 'See Pricing'}
              <span className={`transition-transform duration-300 inline-block ${open ? 'rotate-180' : ''}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="18 15 12 9 6 15" />
                </svg>
              </span>
            </button>
          </div>

          {/* CTA */}
          <button className="bg-white text-black text-[13px] sm:text-[15px] font-black rounded-full border-none cursor-pointer shrink-0 shadow-[0_4px_14px_rgba(255,255,255,0.15)] transition-all duration-150 hover:-translate-y-[1px] hover:shadow-[0_6px_20px_rgba(255,255,255,0.25)] px-4 sm:px-7 py-2.5 sm:py-3">
            Rebuild My Resume →
          </button>
        </div>
      </div>
    </>
  );
}
