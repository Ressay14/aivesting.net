import { Users, Bot, Lightbulb, Target, BarChart3, Shield, Zap, TrendingUp, GraduationCap, Crown, Globe, Trophy, Wallet, Brain, ChartBar } from 'lucide-react';

export default function LogoRow() {
  const features = [
    { icon: Users, text: "50K+ Active Users", color: "text-blue-400", bgColor: "bg-blue-500/10", borderColor: "border-blue-500/20" },
    { icon: Bot, text: "GPT-5 Powered", color: "text-purple-400", bgColor: "bg-purple-500/10", borderColor: "border-purple-500/20" },
    { icon: Lightbulb, text: "AI Insights", color: "text-emerald-400", bgColor: "bg-emerald-500/10", borderColor: "border-emerald-500/20" },
    { icon: Target, text: "Portfolio Optimization", color: "text-amber-400", bgColor: "bg-amber-500/10", borderColor: "border-amber-500/20" },
    { icon: BarChart3, text: "Real-time Analytics", color: "text-pink-400", bgColor: "bg-pink-500/10", borderColor: "border-pink-500/20" },
    { icon: Shield, text: "Bank-level Security", color: "text-cyan-400", bgColor: "bg-cyan-500/10", borderColor: "border-cyan-500/20" },
    { icon: Zap, text: "Instant Alerts", color: "text-orange-400", bgColor: "bg-orange-500/10", borderColor: "border-orange-500/20" },
    { icon: TrendingUp, text: "Market Intelligence", color: "text-indigo-400", bgColor: "bg-indigo-500/10", borderColor: "border-indigo-500/20" },
    { icon: GraduationCap, text: "AI Financial Coach", color: "text-emerald-400", bgColor: "bg-emerald-500/10", borderColor: "border-emerald-500/20" },
    { icon: Crown, text: "Premium Tools", color: "text-violet-400", bgColor: "bg-violet-500/10", borderColor: "border-violet-500/20" },
    { icon: Globe, text: "24/7 Support", color: "text-rose-400", bgColor: "bg-rose-500/10", borderColor: "border-rose-500/20" },
    { icon: Trophy, text: "Pro Strategies", color: "text-amber-400", bgColor: "bg-amber-500/10", borderColor: "border-amber-500/20" },
    { icon: Wallet, text: "Multi-Asset Tracking", color: "text-teal-400", bgColor: "bg-teal-500/10", borderColor: "border-teal-500/20" },
    { icon: Brain, text: "Smart Recommendations", color: "text-purple-400", bgColor: "bg-purple-500/10", borderColor: "border-purple-500/20" },
    { icon: ChartBar, text: "Performance Tracking", color: "text-green-400", bgColor: "bg-green-500/10", borderColor: "border-green-500/20" }
  ];

  return (
    <section className="w-full overflow-hidden">
      <div className="py-6">
        <div className="relative overflow-hidden opacity-90 hover:opacity-100 transition">
          <div className="flex min-w-max animate-marquee gap-16 will-change-transform hover:[animation-play-state:paused]">
            {/* duplicate the sequence for seamless loop */}
            {[...Array(2)].map((_,i) => (
              <div key={i} className="flex items-center gap-16">
                {features.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <div key={index} className={`flex items-center gap-3 ${feature.bgColor} backdrop-blur-sm border ${feature.borderColor} rounded-full px-4 py-2 hover:bg-white/10 transition-all duration-300 hover:scale-105 group`}>
                      <IconComponent className={`w-5 h-5 ${feature.color} group-hover:text-white transition-colors`} />
                      <span className="text-sm font-medium text-white/90 group-hover:text-white whitespace-nowrap transition-colors">
                        {feature.text}
                      </span>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes marquee { to { transform: translateX(-50%); } }
        .animate-marquee { animation: marquee 45s linear infinite; }
        @media (prefers-reduced-motion: reduce) { .animate-marquee { animation: none; } }
      `}</style>
    </section>
  );
} 