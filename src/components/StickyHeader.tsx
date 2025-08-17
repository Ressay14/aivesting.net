import { useEffect, useState } from "react";

export default function StickyHeader() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 60);
    on(); window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header className={`fixed top-0 z-50 w-full transition-all ${scrolled ? "border-b border-white/10 bg-[#0B0E17]/55 backdrop-blur-xl" : "bg-transparent"}`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
        <div className="text-xl font-extrabold"><span className="text-yellow-400">AI</span>Vesting</div>
        <nav className="hidden gap-6 text-white/80 md:flex">
          <a className="hover:text-white" href="#features">Features</a>
          <a className="hover:text-white" href="#learn">Learn</a>
          <a className="hover:text-white" href="#plans">Plans</a>
        </nav>
        <a className="rounded-xl bg-yellow-400 px-4 py-2 font-semibold text-black shadow-lg shadow-yellow-500/20">Get Started</a>
      </div>
    </header>
  );
} 