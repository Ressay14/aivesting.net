import StickyHeader from "../components/StickyHeader";
import HeroBand from "../components/HeroBand";
import LogoRow from "../components/LogoRow";
import SectionBlock from "../components/SectionBlock";
import { WealthPulsePlaceholder, MarketProPlaceholder, SecurityPlaceholder } from "../components/PlaceholderMedia";

export default function Landing() {
  return (
    <main className="bg-[#0B0E17] text-white">
      <StickyHeader />
      <HeroBand />
      <LogoRow />

      <SectionBlock
        eyebrow="WealthPulse"
        title="The heartbeat of your money."
        body="Real-time savings & investment insights with proactive alerts."
        media={<WealthPulsePlaceholder />}
      />

      <SectionBlock
        flip
        eyebrow="MarketPro"
        title="Pro-grade market intelligence."
        body="Signals, risk scoring, and strategy suggestions powered by AI."
        media={<MarketProPlaceholder />}
      />

      <SectionBlock
        eyebrow="Security"
        title="Bank-level protection."
        body="Encryption, 2FA, privacy controls — secure by default."
        media={<SecurityPlaceholder />}
      />
    </main>
  );
} 