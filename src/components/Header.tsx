export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#0B0E17]/40 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10">
        <div className="text-xl font-extrabold">
          <span className="text-yellow-400">AI</span>Vesting
        </div>
        <nav className="hidden gap-6 text-white/80 md:flex">
          <a className="hover:text-white transition-colors" href="#features">Features</a>
          <a className="hover:text-white transition-colors" href="#learn">Learn</a>
          <a className="hover:text-white transition-colors" href="#plans">Plans</a>
          <a className="hover:text-white transition-colors" href="#assistant">AI Assistant</a>
        </nav>
        <a
          className="rounded-xl bg-yellow-400 px-4 py-2 font-semibold text-black shadow-lg shadow-yellow-500/20 transition-transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-yellow-300"
          href="#get-started"
        >Get Started</a>
      </div>
    </header>
  );
} 