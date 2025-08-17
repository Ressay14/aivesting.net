import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;
const fadeUp = (d = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE, delay: d } },
});

export default function HeroBand() {
  const SRC = "https://my.spline.design/claritystream-UP1e3zVdkyCdHDXSf8h1Ko0O/";

  return (
    <section
      className="
        relative w-full
        h-[68vh] max-h-[820px] min-h-[520px]
        overflow-hidden bg-[#0B0E17] text-white
      "
    >
      {/* Animated background limited to hero band */}
      <iframe
        title="AIVesting Hero Animation"
        src={SRC}
        className="absolute inset-0 h-full w-full pointer-events-none"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        loading="eager"
      />
      {/* Subtle gradient for legibility */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#0B0E17]/70 via-[#0B0E17]/40 to-transparent" />
      {/* Smooth bottom fade to the next area */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-[#0B0E17]" />

      {/* Foreground content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-28 sm:px-10 lg:pt-36">
        <motion.span {...fadeUp(0.05)} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] tracking-wide text-white/70 backdrop-blur">
          AI-Powered • WealthPulse & MarketPro
        </motion.span>

        <motion.h1 {...fadeUp(0.15)} className="mt-5 max-w-4xl text-5xl font-extrabold leading-tight sm:text-6xl">
          Track. <span className="text-yellow-400">Optimize.</span> Invest.
        </motion.h1>

        <motion.p {...fadeUp(0.25)} className="mt-4 max-w-2xl text-lg text-white/75">
          Save smarter and invest wiser with the AIVesting Money OS powered by
          <span className="text-white"> WealthPulse</span> & <span className="text-white">MarketPro</span>.
        </motion.p>

        <motion.div {...fadeUp(0.35)} className="mt-8 flex gap-4">
          <a className="rounded-xl bg-yellow-400 px-6 py-3 font-semibold text-black shadow-lg shadow-yellow-500/20 transition-transform hover:-translate-y-0.5">
            Get Started →
          </a>
          <a className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white/90 backdrop-blur transition hover:bg-white/10">
            See Demo ▷
          </a>
        </motion.div>
      </div>

      {/* Reduced motion fallback */}
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          iframe[title="AIVesting Hero Animation"] { display: none; }
          section:has(> iframe[title="AIVesting Hero Animation"]) {
            background-image: url('/bg-fallback.jpg'); background-size: cover; background-position: center;
          }
        }
      `}</style>
    </section>
  );
} 