export default function GlassCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
      {children}
    </div>
  );
} 