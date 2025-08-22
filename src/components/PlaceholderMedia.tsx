import { TrendingUpIcon, BarChart3Icon, ShieldIcon, DollarSignIcon, BrainIcon, ArrowRightIcon, HomeIcon, UtensilsIcon, CarIcon, ShoppingBagIcon, PlaneIcon, HeartIcon, TargetIcon, CheckCircleIcon, EyeIcon, WalletIcon, ChartBarIcon, BellIcon, TargetIcon as TargetIcon2, TrendingDownIcon, PlusIcon, MinusIcon, CrownIcon } from 'lucide-react';

export function WealthPulsePlaceholder() {
  return (
    <div className="w-full h-80 bg-gradient-to-br from-[#151822] to-[#1A1F2E] rounded-xl border border-gray-800/30 shadow-lg p-4 overflow-hidden group hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 hover:scale-[1.02]">
      {/* Dashboard Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse group-hover:animate-bounce"></div>
          <span className="text-xs text-green-400 font-medium">Live</span>
        </div>
        <div className="flex items-center gap-2">
          <BellIcon className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
          <div className="w-6 h-6 bg-purple-500/20 rounded-full flex items-center justify-center group-hover:bg-purple-500/30 transition-colors">
            <BrainIcon className="w-3 h-3 text-purple-400" />
          </div>
        </div>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 p-3 rounded-lg border border-green-500/20 group-hover:border-green-500/40 transition-colors relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          <div className="flex items-center gap-2 mb-1">
            <TrendingUpIcon className="w-3 h-3 text-green-400 group-hover:scale-110 transition-transform" />
            <span className="text-xs text-gray-400">Portfolio Value</span>
          </div>
          <div className="text-lg font-bold text-white group-hover:text-green-100 transition-colors">$127,450</div>
          <div className="text-xs text-green-400">+2.4% today</div>
        </div>
        
        <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 p-3 rounded-lg border border-blue-500/20 group-hover:border-blue-500/40 transition-colors relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 delay-200"></div>
          <div className="flex items-center gap-2 mb-1">
            <ChartBarIcon className="w-3 h-3 text-blue-400 group-hover:scale-110 transition-transform" />
            <span className="text-xs text-gray-400">Monthly Return</span>
          </div>
          <div className="text-lg font-bold text-white group-hover:text-blue-100 transition-colors">+8.7%</div>
          <div className="text-xs text-blue-400">+1.2% vs last month</div>
        </div>
      </div>

      {/* AI Insights Panel */}
      <div className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 p-3 rounded-lg border border-purple-500/20 mb-4 group-hover:border-purple-500/40 transition-colors">
        <div className="flex items-center gap-2 mb-2">
          <BrainIcon className="w-4 h-4 text-purple-400 group-hover:animate-pulse" />
          <span className="text-sm font-semibold text-white">AI Recommendation</span>
        </div>
        <p className="text-xs text-gray-300 mb-2">
          Consider rebalancing your tech allocation. Current exposure: 42% (target: 35%)
        </p>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-purple-400 rounded-full group-hover:animate-ping"></div>
          <span className="text-xs text-purple-400">High confidence (87%)</span>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="flex gap-2 mb-4">
        <button className="flex-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 p-2 rounded-lg border border-purple-500/30 text-xs text-white hover:from-purple-500/30 hover:to-blue-500/30 transition-all hover:scale-105">
          <PlusIcon className="w-3 h-3 inline mr-1" />
          Add Asset
        </button>
        <button className="flex-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 p-2 rounded-lg border border-green-500/30 text-xs text-white hover:from-green-500/30 hover:to-emerald-500/30 transition-all hover:scale-105">
          <TargetIcon className="w-3 h-3 inline mr-1" />
          Set Goal
        </button>
      </div>

      {/* Recent Activity */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs">
          <span className="text-gray-400">Recent Activity</span>
          <EyeIcon className="w-3 h-3 text-gray-500 group-hover:text-white transition-colors" />
        </div>
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs">
            <div className="w-2 h-2 bg-green-400 rounded-full group-hover:animate-pulse"></div>
            <span className="text-gray-300">AAPL dividend received</span>
            <span className="text-green-400 ml-auto">+$0.24</span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <div className="w-2 h-2 bg-blue-400 rounded-full group-hover:animate-pulse"></div>
            <span className="text-gray-300">Portfolio rebalanced</span>
            <span className="text-blue-400 ml-auto">Auto</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function MarketProPlaceholder() {
  return (
    <div className="w-full h-80 bg-gradient-to-br from-[#151822] to-[#1A1F2E] rounded-xl border border-gray-800/30 shadow-lg p-4 overflow-hidden group hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:scale-[1.02]">
      {/* Market Status Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse group-hover:animate-bounce"></div>
          <span className="text-xs text-green-400 font-medium">Market Open</span>
        </div>
        <div className="flex items-center gap-2">
          <TrendingUpIcon className="w-4 h-4 text-green-400 group-hover:scale-110 transition-transform" />
          <span className="text-xs text-green-400">S&P 500 +1.2%</span>
        </div>
      </div>

      {/* Advanced Analytics Grid */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 p-3 rounded-lg border border-green-500/20 group-hover:border-green-500/40 transition-colors relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          <div className="flex items-center gap-2 mb-1">
            <TrendingUpIcon className="w-3 h-3 text-green-400 group-hover:scale-110 transition-transform" />
            <span className="text-xs text-gray-400">Portfolio Optimization</span>
          </div>
          <div className="text-sm font-bold text-white group-hover:text-green-100 transition-colors">Active</div>
          <div className="text-xs text-green-400">AI-powered rebalancing</div>
        </div>
        
        <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 p-3 rounded-lg border border-blue-500/20 group-hover:border-blue-500/40 transition-colors relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 delay-200"></div>
          <div className="flex items-center gap-2 mb-1">
            <BarChart3Icon className="w-3 h-3 text-blue-400 group-hover:scale-110 transition-transform" />
            <span className="text-xs text-gray-400">Advanced Analytics</span>
          </div>
          <div className="text-sm font-bold text-white group-hover:text-blue-100 transition-colors">Real-time</div>
          <div className="text-xs text-blue-400">Performance tracking</div>
        </div>
      </div>

      {/* Risk Management Panel */}
      <div className="bg-gradient-to-br from-amber-500/10 to-amber-500/5 p-3 rounded-lg border border-amber-500/20 mb-4 group-hover:border-amber-500/40 transition-colors">
        <div className="flex items-center gap-2 mb-2">
          <ShieldIcon className="w-4 h-4 text-amber-400 group-hover:animate-pulse" />
          <span className="text-sm font-semibold text-white">Risk Management</span>
        </div>
        <div className="flex items-center gap-3 mb-2">
          <div className="text-2xl font-bold text-white group-hover:text-amber-100 transition-colors">7.2</div>
          <div className="flex-1 bg-gray-700 rounded-full h-2">
            <div className="bg-gradient-to-r from-green-400 via-yellow-400 to-red-500 h-2 rounded-full transition-all duration-500 group-hover:shadow-lg" style={{width: '72%'}}></div>
          </div>
          <span className="text-xs text-amber-400">Moderate</span>
        </div>
        <p className="text-xs text-gray-300">
          Portfolio risk within acceptable range. Consider hedging tech exposure.
        </p>
      </div>

      {/* AI Strategy Suggestions */}
      <div className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 p-3 rounded-lg border border-purple-500/20 mb-4 group-hover:border-purple-500/40 transition-colors">
        <div className="flex items-center gap-2 mb-2">
          <BrainIcon className="w-4 h-4 text-purple-400 group-hover:animate-pulse" />
          <span className="text-sm font-semibold text-white">AI Strategy</span>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs">
            <CheckCircleIcon className="w-3 h-3 text-green-400 group-hover:scale-110 transition-transform" />
            <span className="text-gray-300">Increase defensive positions</span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <CheckCircleIcon className="w-3 h-3 text-green-400 group-hover:scale-110 transition-transform" />
            <span className="text-gray-300">Consider options hedging</span>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="flex gap-2">
        <button className="flex-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 p-2 rounded-lg border border-blue-500/30 text-xs text-white hover:from-blue-500/30 hover:to-cyan-500/30 transition-all hover:scale-105">
          <BarChart3Icon className="w-3 h-3 inline mr-1" />
          View Analytics
        </button>
        <button className="flex-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-2 rounded-lg border border-purple-500/30 text-xs text-white hover:from-purple-500/30 hover:to-pink-500/30 transition-all hover:scale-105">
          <BrainIcon className="w-3 h-3 inline mr-1" />
          AI Analysis
        </button>
      </div>
    </div>
  );
}

export function SecurityPlaceholder() {
  return (
    <div className="w-full h-80 bg-gradient-to-br from-[#151822] to-[#1A1F2E] rounded-xl border border-gray-800/30 shadow-lg p-4 overflow-hidden group hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-500 hover:scale-[1.02]">
      {/* Security Status Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse group-hover:animate-bounce"></div>
          <span className="text-xs text-green-400 font-medium">Enterprise Secure</span>
        </div>
        <div className="flex items-center gap-2">
          <ShieldIcon className="w-4 h-4 text-green-400 group-hover:scale-110 transition-transform" />
          <span className="text-xs text-green-400">All systems protected</span>
        </div>
      </div>

      {/* Security Score */}
      <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 p-3 rounded-lg border border-green-500/20 mb-4 group-hover:border-green-500/40 transition-colors">
        <div className="flex items-center gap-2 mb-2">
          <ShieldIcon className="w-4 h-4 text-green-400 group-hover:animate-pulse" />
          <span className="text-sm font-semibold text-white">Security Score</span>
        </div>
        <div className="flex items-center gap-3 mb-2">
          <div className="text-2xl font-bold text-white group-hover:text-green-100 transition-colors group-hover:animate-pulse">98/100</div>
          <div className="flex-1 bg-gray-700 rounded-full h-2">
            <div className="bg-gradient-to-r from-red-400 via-yellow-400 to-green-500 h-2 rounded-full transition-all duration-500 group-hover:shadow-lg group-hover:animate-pulse" style={{width: '98%'}}></div>
          </div>
          <span className="text-xs text-green-400">Excellent</span>
        </div>
        <p className="text-xs text-green-400">Enterprise-grade security posture</p>
      </div>

      {/* Pro Security Features Grid */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 p-3 rounded-lg border border-blue-500/20 group-hover:border-blue-500/40 transition-colors">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-3 h-3 bg-blue-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <CheckCircleIcon className="w-2 h-2 text-white" />
            </div>
            <span className="text-xs text-gray-400">2FA Active</span>
          </div>
          <div className="text-xs text-blue-400">Authenticator app</div>
        </div>
        
        <div className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 p-3 rounded-lg border border-purple-500/20 group-hover:border-purple-500/40 transition-colors">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-3 h-3 bg-purple-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <CheckCircleIcon className="w-2 h-2 text-white" />
            </div>
            <span className="text-xs text-gray-400">API Access</span>
          </div>
          <div className="text-xs text-purple-400">Developer tools</div>
        </div>
      </div>

      {/* Advanced Security Features */}
      <div className="bg-gradient-to-br from-amber-500/10 to-amber-500/5 p-3 rounded-lg border border-amber-500/20 mb-4 group-hover:border-amber-500/40 transition-colors">
        <div className="flex items-center gap-2 mb-2">
          <CrownIcon className="w-4 h-4 text-amber-400 group-hover:animate-pulse" />
          <span className="text-sm font-semibold text-white">Pro Features</span>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs">
            <CheckCircleIcon className="w-3 h-3 text-green-400 group-hover:scale-110 transition-transform" />
            <span className="text-gray-300">Custom AI strategies</span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <CheckCircleIcon className="w-3 h-3 text-green-400 group-hover:scale-110 transition-transform" />
            <span className="text-gray-300">Tax optimization</span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <CheckCircleIcon className="w-3 h-3 text-green-400 group-hover:scale-110 transition-transform" />
            <span className="text-gray-300">Dedicated advisor</span>
          </div>
        </div>
      </div>

      {/* Recent Security Events */}
      <div className="bg-gradient-to-br from-gray-500/10 to-gray-500/5 p-3 rounded-lg border border-gray-500/20 mb-4 group-hover:border-gray-500/40 transition-colors">
        <div className="flex items-center gap-2 mb-2">
          <EyeIcon className="w-4 h-4 text-gray-400 group-hover:animate-pulse" />
          <span className="text-sm font-semibold text-white">Recent Activity</span>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs">
            <div className="w-2 h-2 bg-green-400 rounded-full group-hover:animate-pulse"></div>
            <span className="text-gray-300">Login from trusted device</span>
            <span className="text-green-400 ml-auto">2 min ago</span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <div className="w-2 h-2 bg-blue-400 rounded-full group-hover:animate-pulse"></div>
            <span className="text-gray-300">Security scan completed</span>
            <span className="text-blue-400 ml-auto">1 hour ago</span>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="flex gap-2">
        <button className="flex-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 p-2 rounded-lg border border-green-500/30 text-xs text-white hover:from-green-500/30 hover:to-emerald-500/30 transition-all hover:scale-105">
          <ShieldIcon className="w-3 h-3 inline mr-1" />
          Security Settings
        </button>
        <button className="flex-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 p-2 rounded-lg border border-blue-500/30 text-xs text-white hover:from-blue-500/30 hover:to-cyan-500/30 transition-all hover:scale-105">
          <EyeIcon className="w-3 h-3 inline mr-1" />
          Activity Log
        </button>
      </div>
    </div>
  );
} 