export default function Hero() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 pt-36 pb-24 sm:px-10 lg:pt-40 lg:pb-40">
      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] tracking-wide text-white/70 backdrop-blur">
        AI-Powered • WealthPulse & MarketPro
      </span>

      <h1 className="mt-6 max-w-3xl text-5xl font-extrabold leading-tight sm:text-6xl">
        Vision. <span className="text-yellow-400">Strategy.</span> Wealth.
      </h1>

      <p className="mt-4 max-w-2xl text-lg text-white/70">
        Save smarter and invest wiser with the AIVesting Money OS powered by <span className="text-white">WealthPulse</span> and <span className="text-white">MarketPro</span>.
      </p>

      <div className="mt-8 flex gap-4">
        <a className="rounded-xl bg-yellow-400 px-6 py-3 font-semibold text-black shadow-lg shadow-yellow-500/20 transition-transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-yellow-300">
          Get Started →
        </a>
        <a className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white/90 backdrop-blur transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20">
          See Demo ▷
        </a>
      </div>

      <div className="mt-8 flex items-center gap-3 text-sm text-white/60">
        <div aria-hidden>⭐️⭐️⭐️⭐️⭐️</div>
        <span>Trusted by 150+ users worldwide</span>
      </div>
    </section>
  );
} 