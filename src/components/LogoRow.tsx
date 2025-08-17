export default function LogoRow() {
  return (
    <section className="bg-[#0B0E17]">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="relative overflow-hidden opacity-70 hover:opacity-100 transition">
          <div className="flex min-w-max animate-marquee gap-12 will-change-transform hover:[animation-play-state:paused]">
            {/* duplicate the sequence for seamless loop */}
            {[...Array(2)].map((_,i) => (
              <div key={i} className="flex items-center gap-12">
                <img src="/logos/brand1.svg" className="h-8" alt="" />
                <img src="/logos/brand2.svg" className="h-8" alt="" />
                <img src="/logos/brand3.svg" className="h-8" alt="" />
                <img src="/logos/brand4.svg" className="h-8" alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes marquee { to { transform: translateX(-50%); } }
        .animate-marquee { animation: marquee 35s linear infinite; }
        @media (prefers-reduced-motion: reduce) { .animate-marquee { animation: none; } }
      `}</style>
    </section>
  );
} 