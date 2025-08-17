import GlassCard from "../components/GlassCard";

export default function Features() {
  return (
    <section id="features" className="relative mx-auto max-w-7xl px-6 py-20 sm:px-10">
      <div className="grid gap-6 md:grid-cols-2">
        <GlassCard>
          <h3 className="text-xl font-semibold">WealthPulse</h3>
          <p className="mt-2 text-white/70">The heartbeat of your money—real-time savings & investment insights.</p>
        </GlassCard>
        <GlassCard>
          <h3 className="text-xl font-semibold">MarketPro</h3>
          <p className="mt-2 text-white/70">Pro-grade market intelligence and AI trade/signal guidance.</p>
        </GlassCard>
      </div>
    </section>
  );
} 