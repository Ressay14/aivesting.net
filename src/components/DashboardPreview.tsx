import { motion } from 'framer-motion';
import { 
  TrendingUpIcon, BarChart3Icon, ShieldIcon, BrainIcon, 
  ArrowRightIcon, CheckCircleIcon, UsersIcon, ZapIcon,
  GlobeIcon, TargetIcon, CalculatorIcon, CrownIcon,
  LinkIcon, BellIcon, SearchIcon, UserIcon, 
  DollarSignIcon, PlusIcon, MinusIcon, RefreshCwIcon,
  ChevronDownIcon, StarIcon, SparklesIcon
} from 'lucide-react';
import { CompactLogo } from './Logo';

export default function DashboardPreview() {
  return (
    <div className="w-full bg-gradient-to-br from-[#0B0E17] to-[#151822] rounded-2xl border border-gray-800/30 shadow-2xl overflow-hidden">
      {/* Dashboard Header */}
      <div className="bg-[#1A1F2E] border-b border-gray-800/30 p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <CompactLogo />
            <div>
              <h1 className="text-2xl font-extra-bold text-white">MarketPro™ Dashboard</h1>
              <div className="flex items-center gap-2 mt-1">
                <span className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 px-2 py-1 rounded-full text-xs font-medium border border-purple-500/30">
                  AI-Powered
                </span>
                <span className="text-gray-400 text-sm">Real-time insights & recommendations</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input 
                type="text" 
                placeholder="Search..." 
                className="bg-[#151822] border border-gray-700 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors"
              />
            </div>
            <motion.button 
              className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-lg font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-purple-500/25 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <SparklesIcon className="w-4 h-4" />
              AI Assistant
            </motion.button>
            <div className="relative">
              <BellIcon className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
            </div>
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center cursor-pointer">
              <UserIcon className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="p-6">
        {/* Floating Notification */}
        <motion.div 
          className="absolute top-20 right-8 z-20 bg-green-500/20 border border-green-500/30 backdrop-blur-sm rounded-lg p-3 max-w-xs"
          initial={{ opacity: 0, x: 100, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-400 text-xs font-medium">Live Update</span>
          </div>
          <p className="text-white text-sm">
            Portfolio rebalanced automatically based on AI analysis
          </p>
          <div className="text-green-400 text-xs mt-1">2 minutes ago</div>
        </motion.div>

        {/* Onboarding Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <motion.div 
            className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 p-4 rounded-xl border border-blue-500/20"
            whileHover={{ y: -2, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <LinkIcon className="w-5 h-5 text-blue-400" />
              <h3 className="font-semibold text-white">Connect your accounts</h3>
            </div>
            <p className="text-gray-300 text-sm mb-3">Link your bank and investment platforms for seamless tracking</p>
            <button className="text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center gap-1">
              Connect now <ArrowRightIcon className="w-3 h-3" />
            </button>
          </motion.div>

          <motion.div 
            className="bg-gradient-to-br from-green-500/10 to-green-500/5 p-4 rounded-xl border border-green-500/20"
            whileHover={{ y: -2, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <TargetIcon className="w-5 h-5 text-green-400" />
              <h3 className="font-semibold text-white">Set your financial goals</h3>
            </div>
            <p className="text-gray-300 text-sm mb-3">Define objectives for personalized AI recommendations</p>
            <button className="text-green-400 hover:text-green-300 text-sm font-medium flex items-center gap-1">
              Set goals <ArrowRightIcon className="w-3 h-3" />
            </button>
          </motion.div>

          <motion.div 
            className="bg-gradient-to-br from-amber-500/10 to-amber-500/5 p-4 rounded-xl border border-amber-500/20"
            whileHover={{ y: -2, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <ShieldIcon className="w-5 h-5 text-amber-400" />
              <h3 className="font-semibold text-white">Complete risk profile</h3>
            </div>
            <p className="text-gray-300 text-sm mb-3">Answer questions to determine investment risk tolerance</p>
            <button className="text-amber-400 hover:text-amber-300 text-sm font-medium flex items-center gap-1">
              Start assessment <ArrowRightIcon className="w-3 h-3" />
            </button>
          </motion.div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <motion.div 
            className="bg-gradient-to-br from-green-500/10 to-green-500/5 p-4 rounded-xl border border-green-500/20"
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex items-center gap-3 mb-2">
              <BarChart3Icon className="w-5 h-5 text-green-400" />
              <span className="text-gray-400 text-sm">Portfolio Value</span>
            </div>
            <motion.div 
              className="text-2xl font-bold text-white mb-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              €24,395.00
            </motion.div>
            <motion.div 
              className="text-green-400 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              +3.2% today
            </motion.div>
          </motion.div>

          <motion.div 
            className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 p-4 rounded-xl border border-blue-500/20"
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex items-center gap-3 mb-2">
              <TrendingUpIcon className="w-5 h-5 text-blue-400" />
              <span className="text-gray-400 text-sm">Monthly Return</span>
            </div>
            <motion.div 
              className="text-2xl font-bold text-white mb-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              +€1,245.50
            </motion.div>
            <motion.div 
              className="text-blue-400 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.4 }}
            >
              +5.1% vs last month
            </motion.div>
          </motion.div>

          <motion.div 
            className="bg-gradient-to-br from-amber-500/10 to-amber-500/5 p-4 rounded-xl border border-amber-500/20"
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex items-center gap-3 mb-2">
              <ShieldIcon className="w-5 h-5 text-amber-400" />
              <span className="text-gray-400 text-sm">Risk Level</span>
            </div>
            <motion.div 
              className="text-2xl font-bold text-white mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.6 }}
            >
              Moderate
            </motion.div>
            <motion.div 
              className="w-full bg-gray-700 rounded-full h-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.8 }}
            >
              <div className="bg-gradient-to-r from-green-400 via-yellow-400 to-red-500 h-2 rounded-full" style={{width: '65%'}}></div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 p-4 rounded-xl border border-purple-500/20"
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex items-center gap-3 mb-2">
              <DollarSignIcon className="w-5 h-5 text-purple-400" />
              <span className="text-gray-400 text-sm">Cash Available</span>
            </div>
            <motion.div 
              className="text-2xl font-bold text-white mb-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 2 }}
            >
              €3,850.00
            </motion.div>
            <motion.div 
              className="flex gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 2.2 }}
            >
              <button className="flex-1 bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs hover:bg-green-500/30 transition-colors">
                Deposit
              </button>
              <button className="flex-1 bg-red-500/20 text-red-400 px-2 py-1 rounded text-xs hover:bg-red-500/30 transition-colors">
                Withdraw
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Charts and Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Portfolio Performance */}
          <motion.div 
            className="bg-[#1A1F2E] p-6 rounded-xl border border-gray-800/30"
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Portfolio Performance +12.4% YTD</h3>
                <p className="text-gray-400 text-sm">Performance (1M) +12.4% vs. Benchmark: +4.2%</p>
              </div>
              <div className="flex gap-1">
                {['1D', '1W', '1M', '3M', '1Y', 'All'].map((period, index) => (
                  <button 
                    key={period}
                    className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
                      period === '1M' 
                        ? 'bg-purple-500 text-white' 
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    {period}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Chart Placeholder */}
            <div className="h-48 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg border border-gray-700/50 flex items-center justify-center">
              <div className="text-center">
                <TrendingUpIcon className="w-12 h-12 text-blue-400 mx-auto mb-2" />
                <p className="text-gray-400 text-sm">Interactive Portfolio Chart</p>
                <p className="text-gray-500 text-xs">Real-time performance tracking</p>
              </div>
            </div>
          </motion.div>

          {/* Asset Allocation */}
          <motion.div 
            className="bg-[#1A1F2E] p-6 rounded-xl border border-gray-800/30"
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">Asset Allocation</h3>
              <button className="text-purple-400 hover:text-purple-300 text-sm font-medium">
                Optimize →
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {/* Donut Chart Placeholder */}
              <div className="flex items-center justify-center">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full flex items-center justify-center border-4 border-purple-500/30">
                  <div className="text-center">
                    <div className="text-lg font-bold text-white">Total</div>
                    <div className="text-purple-400 font-semibold">€24.4k</div>
                  </div>
                </div>
              </div>
              
              {/* Asset Breakdown */}
              <div className="space-y-3">
                {[
                  { name: 'Stocks', percentage: 45, color: 'bg-blue-500' },
                  { name: 'ETFs', percentage: 30, color: 'bg-green-500' },
                  { name: 'Bonds', percentage: 15, color: 'bg-yellow-500' },
                  { name: 'Crypto', percentage: 10, color: 'bg-purple-500' }
                ].map((asset, index) => (
                  <div key={asset.name} className="flex items-center gap-3">
                    <div className={`w-3 h-3 ${asset.color} rounded-full`}></div>
                    <span className="text-gray-300 text-sm flex-1">{asset.name}</span>
                    <span className="text-white font-semibold">{asset.percentage}%</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* AI Insight */}
            <div className="mt-6 bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <BrainIcon className="w-4 h-4 text-blue-400" />
                <span className="text-blue-400 font-semibold text-sm">AI Insight</span>
              </div>
              <p className="text-gray-300 text-sm mb-2">
                Your portfolio could benefit from a 5% reallocation from ETFs to bonds to better balance risk in current market conditions.
              </p>
              <button className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                View recommendation →
              </button>
            </div>
          </motion.div>
        </div>

        {/* AI Recommendations */}
        <motion.div 
          className="bg-[#1A1F2E] p-6 rounded-xl border border-gray-800/30"
          whileHover={{ y: -2 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-white">AI Investment Recommendations</h3>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <RefreshCwIcon className="w-4 h-4" />
              Updated 2 hours ago
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUpIcon className="w-4 h-4 text-green-400" />
                <span className="text-green-400 font-semibold">Buy</span>
              </div>
              <div className="text-lg font-bold text-white mb-1">AAPL</div>
              <div className="text-green-400 text-sm mb-2">+2.3%</div>
              <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs font-medium">
                3 New
              </span>
            </div>
            
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <ShieldIcon className="w-4 h-4 text-blue-400" />
                <span className="text-blue-400 font-semibold">Hold</span>
              </div>
              <div className="text-lg font-bold text-white mb-1">AMZN</div>
              <div className="text-blue-400 text-sm mb-2">+0.5%</div>
              <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-xs font-medium">
                5 Assets
              </span>
            </div>
            
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUpIcon className="w-4 h-4 text-red-400 rotate-180" />
                <span className="text-red-400 font-semibold">Sell</span>
              </div>
              <div className="text-lg font-bold text-white mb-1">META</div>
              <div className="text-red-400 text-sm mb-2">-1.7%</div>
              <span className="bg-red-500/20 text-red-400 px-2 py-1 rounded text-xs font-medium">
                2 Assets
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 