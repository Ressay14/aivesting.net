import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingUpIcon, TrendingDownIcon, TargetIcon, 
  EyeIcon, BrainIcon, ZapIcon, ArrowUpIcon,
  ArrowDownIcon, CalendarIcon, ChartBarIcon,
  LightbulbIcon, ClockIcon, CheckCircleIcon,
  AlertCircleIcon, DollarSignIcon, HomeIcon,
  PlaneIcon, GraduationCapIcon, HeartIcon,
  BarChart3Icon, PieChartIcon, LineChartIcon,
  Target, Wallet, PiggyBank, Shield, Star
} from 'lucide-react';

interface WealthGoal {
  id: string;
  name: string;
  targetAmount: number;
  currentAmount: number;
  deadline: string;
  category: 'house' | 'travel' | 'retirement' | 'education' | 'emergency' | 'custom';
  priority: 'high' | 'medium' | 'low';
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

interface AIInsight {
  id: string;
  type: 'nudge' | 'alert' | 'opportunity' | 'milestone';
  title: string;
  message: string;
  action?: string;
  impact?: string;
  priority: 'high' | 'medium' | 'low';
  category: 'spending' | 'saving' | 'investment' | 'goal';
}

interface SpendingCategory {
  name: string;
  amount: number;
  percentage: number;
  color: string;
  trend: 'up' | 'down' | 'stable';
}

// New interfaces for enhanced features
interface LifeMilestone {
  id: string;
  name: string;
  targetAge: number;
  targetAmount: number;
  currentProgress: number;
  category: 'house' | 'education' | 'retirement' | 'marriage' | 'business';
  impact: string;
  simulations: MilestoneSimulation[];
}

interface MilestoneSimulation {
  scenario: string;
  impact: string;
  timelineChange: string;
  amountChange: number;
  color: string;
}

interface WealthRoadmap {
  year: number;
  projectedSavings: number;
  projectedInvestments: number;
  milestones: string[];
  lifestyleImpact: string;
  riskLevel: 'low' | 'medium' | 'high';
}

interface BehavioralNudge {
  id: string;
  type: 'psychology' | 'habit' | 'fear' | 'opportunity';
  title: string;
  message: string;
  challenge: string;
  reward: string;
  difficulty: 'easy' | 'medium' | 'hard';
  category: 'spending' | 'saving' | 'investment' | 'lifestyle';
}

interface WealthMission {
  id: string;
  title: string;
  description: string;
  challenge: string;
  reward: string;
  progress: number;
  target: number;
  unit: string;
  difficulty: 'easy' | 'medium' | 'hard';
  category: 'spending' | 'saving' | 'investment' | 'lifestyle';
  aiReward: string;
}

interface PeerBenchmark {
  category: string;
  userScore: number;
  peerAverage: number;
  percentile: number;
  rank: string;
  improvement: string;
}

export default function WealthPulseDashboard() {
  const [activeTab, setActiveTab] = useState<'vision' | 'strategy' | 'execution' | 'roadmap'>('vision');
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);
  const [aiInsights, setAiInsights] = useState<AIInsight[]>([]);
  const [efficiencyScore, setEfficiencyScore] = useState(87);
  const [selectedMilestone, setSelectedMilestone] = useState<string | null>(null);
  const [activeMissions, setActiveMissions] = useState<WealthMission[]>([]);
  const [completedMissions, setCompletedMissions] = useState<WealthMission[]>([]);

  // Mock data - replace with real API calls
  const wealthGoals: WealthGoal[] = [
    {
      id: '1',
      name: 'Dream House',
      targetAmount: 500000,
      currentAmount: 125000,
      deadline: '2027-12-31',
      category: 'house',
      priority: 'high',
      icon: HomeIcon,
      color: 'from-blue-500 to-purple-600'
    },
    {
      id: '2',
      name: 'World Travel',
      targetAmount: 25000,
      currentAmount: 8500,
      deadline: '2025-06-30',
      category: 'travel',
      priority: 'medium',
      icon: PlaneIcon,
      color: 'from-green-500 to-teal-600'
    },
    {
      id: '3',
      name: 'Retirement Fund',
      targetAmount: 1000000,
      currentAmount: 450000,
      deadline: '2040-12-31',
      category: 'retirement',
      priority: 'high',
      icon: Star,
      color: 'from-orange-500 to-red-600'
    },
    {
      id: '4',
      name: 'Emergency Fund',
      targetAmount: 15000,
      currentAmount: 12000,
      deadline: '2024-12-31',
      category: 'emergency',
      priority: 'high',
      icon: Shield,
      color: 'from-emerald-500 to-green-600'
    }
  ];

  const lifeMilestones: LifeMilestone[] = [
    {
      id: '1',
      name: 'Buy First Home',
      targetAge: 32,
      targetAmount: 500000,
      currentProgress: 25,
      category: 'house',
      impact: 'Achieving this milestone will reduce your monthly housing costs by €800',
      simulations: [
        {
          scenario: 'Save €2,000/month',
          impact: 'Reach goal in 6.2 years',
          timelineChange: '-2.8 years',
          amountChange: 0,
          color: 'from-green-500 to-emerald-600'
        },
        {
          scenario: 'Invest €500/month in index funds',
          impact: 'Additional €45,000 growth',
          timelineChange: '-1.5 years',
          amountChange: 45000,
          color: 'from-blue-500 to-cyan-600'
        },
        {
          scenario: 'Cut dining out by 20%',
          impact: 'Extra €1,200/year savings',
          timelineChange: '-0.8 years',
          amountChange: 1200,
          color: 'from-purple-500 to-pink-600'
        }
      ]
    },
    {
      id: '2',
      name: 'Retire at 55',
      targetAge: 55,
      targetAmount: 1500000,
      currentProgress: 30,
      category: 'retirement',
      impact: 'Early retirement gives you 10 extra years of freedom',
      simulations: [
        {
          scenario: 'Increase 401k contribution to 15%',
          impact: 'Reach goal 3 years earlier',
          timelineChange: '-3 years',
          amountChange: 0,
          color: 'from-green-500 to-emerald-600'
        },
        {
          scenario: 'Side hustle €1,000/month',
          impact: 'Extra €300,000 by retirement',
          timelineChange: '-2 years',
          amountChange: 300000,
          color: 'from-orange-500 to-red-600'
        }
      ]
    }
  ];

  const wealthRoadmap: WealthRoadmap[] = [
    {
      year: 2024,
      projectedSavings: 45000,
      projectedInvestments: 89000,
      milestones: ['Emergency fund complete', 'Start house savings'],
      lifestyleImpact: '2 international trips per year',
      riskLevel: 'medium'
    },
    {
      year: 2026,
      projectedSavings: 125000,
      projectedInvestments: 145000,
      milestones: ['House down payment ready', 'Investment portfolio diversified'],
      lifestyleImpact: '3 international trips + weekend getaways',
      riskLevel: 'medium'
    },
    {
      year: 2029,
      projectedSavings: 250000,
      projectedInvestments: 320000,
      milestones: ['House purchased', 'Retirement on track'],
      lifestyleImpact: 'Luxury travel + premium lifestyle',
      riskLevel: 'low'
    },
    {
      year: 2034,
      projectedSavings: 450000,
      projectedInvestments: 750000,
      milestones: ['Financial independence', 'Early retirement option'],
      lifestyleImpact: 'Complete freedom + legacy planning',
      riskLevel: 'low'
    }
  ];

  const behavioralNudges: BehavioralNudge[] = [
    {
      id: '1',
      type: 'psychology',
      title: 'No-Spend Saturday Challenge',
      message: 'You tend to overspend on weekends. Try a no-spend Saturday to break the habit.',
      challenge: 'Go 24 hours without spending money',
      reward: 'Save €50-100 and build better spending awareness',
      difficulty: 'easy',
      category: 'spending'
    },
    {
      id: '2',
      type: 'fear',
      title: 'Investment Avoidance Pattern',
      message: 'Your profile shows you avoid investing, but you\'re missing €12,400 in potential growth.',
      challenge: 'Start with €100 in a robo-advisor',
      reward: 'Overcome fear and start building wealth',
      difficulty: 'medium',
      category: 'investment'
    },
    {
      id: '3',
      type: 'habit',
      title: 'Subscription Audit',
      message: 'You have 8 active subscriptions. Review and cancel unused ones.',
      challenge: 'Cancel 3 unused subscriptions',
      reward: 'Save €45/month = €540/year',
      difficulty: 'easy',
      category: 'spending'
    }
  ];

  const wealthMissions: WealthMission[] = [
    {
      id: '1',
      title: 'Subscription Slayer',
      description: 'Cut unnecessary subscriptions to boost savings',
      challenge: 'Cancel 3 unused subscriptions',
      reward: '+€45/month savings',
      progress: 1,
      target: 3,
      unit: 'subscriptions',
      difficulty: 'easy',
      category: 'spending',
      aiReward: 'AI Efficiency Score +5 points'
    },
    {
      id: '2',
      title: 'Weekend Warrior',
      description: 'Reduce weekend spending to improve financial habits',
      challenge: '3 no-spend weekends this month',
      reward: '+€120/month savings',
      progress: 1,
      target: 3,
      unit: 'weekends',
      difficulty: 'medium',
      category: 'spending',
      aiReward: 'Behavioral Finance Score +8 points'
    },
    {
      id: '3',
      title: 'Investment Pioneer',
      description: 'Start your investment journey with small steps',
      challenge: 'Invest €100 in index funds',
      reward: 'Potential +8% annual growth',
      progress: 0,
      target: 100,
      unit: '€',
      difficulty: 'medium',
      category: 'investment',
      aiReward: 'Investment Confidence +10 points'
    }
  ];

  const peerBenchmarks: PeerBenchmark[] = [
    {
      category: 'Savings Rate',
      userScore: 87,
      peerAverage: 72,
      percentile: 85,
      rank: 'top 15%',
      improvement: '+15% vs peers'
    },
    {
      category: 'Investment Allocation',
      userScore: 65,
      peerAverage: 58,
      percentile: 70,
      rank: 'top 30%',
      improvement: '+7% vs peers'
    },
    {
      category: 'Goal Achievement',
      userScore: 78,
      peerAverage: 62,
      percentile: 80,
      rank: 'top 20%',
      improvement: '+16% vs peers'
    },
    {
      category: 'Spending Efficiency',
      userScore: 82,
      peerAverage: 68,
      percentile: 75,
      rank: 'top 25%',
      improvement: '+14% vs peers'
    }
  ];

  const spendingCategories: SpendingCategory[] = [
    { name: 'Housing', amount: 1200, percentage: 35, color: 'from-blue-500 to-blue-600', trend: 'stable' },
    { name: 'Food & Dining', amount: 450, percentage: 13, color: 'from-green-500 to-green-600', trend: 'up' },
    { name: 'Transportation', amount: 300, percentage: 9, color: 'from-purple-500 to-purple-600', trend: 'down' },
    { name: 'Entertainment', amount: 200, percentage: 6, color: 'from-pink-500 to-pink-600', trend: 'stable' },
    { name: 'Shopping', amount: 350, percentage: 10, color: 'from-orange-500 to-orange-600', trend: 'up' },
    { name: 'Utilities', amount: 180, percentage: 5, color: 'from-gray-500 to-gray-600', trend: 'stable' }
  ];

  useEffect(() => {
    // Simulate AI insights generation
    const insights: AIInsight[] = [
      {
        id: '1',
        type: 'nudge',
        title: 'Smart Savings Opportunity',
        message: 'Reduce dining out by 15% this month to reach your travel goal 6 months earlier',
        action: 'Set dining budget to €382',
        impact: '+€68 to travel fund',
        priority: 'high',
        category: 'saving'
      },
      {
        id: '2',
        type: 'milestone',
        title: 'Emergency Fund Milestone',
        message: 'You\'re 80% to your emergency fund goal! Keep up the great work.',
        action: 'View progress',
        priority: 'medium',
        category: 'goal'
      },
      {
        id: '3',
        type: 'opportunity',
        title: 'Investment Opportunity',
        message: 'Your cash position is high. Consider investing €500 for better returns',
        action: 'Explore options',
        impact: 'Potential +8% annual return',
        priority: 'medium',
        category: 'investment'
      }
    ];
    setAiInsights(insights);
  }, []);

  const getProgressPercentage = (current: number, target: number) => {
    return Math.min((current / target) * 100, 100);
  };

  const getDaysUntilDeadline = (deadline: string) => {
    const today = new Date();
    const deadlineDate = new Date(deadline);
    const diffTime = deadlineDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  };

  const getEfficiencyColor = (score: number) => {
    if (score >= 80) return 'text-green-400';
    if (score >= 60) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <div className="min-h-screen bg-[#0B0E17] text-white p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">WealthPulse Dashboard</h1>
        <p className="text-gray-400">Your AI-powered wealth strategist</p>
      </div>

      {/* AI Efficiency Score */}
      <motion.div 
        className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-2xl p-6 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
              <BrainIcon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">AI Efficiency Score</h3>
              <p className="text-gray-400 text-sm">How efficiently your money works toward goals</p>
            </div>
          </div>
          <div className="text-right">
            <div className={`text-4xl font-bold ${getEfficiencyColor(efficiencyScore)}`}>
              {efficiencyScore}%
            </div>
            <div className="text-gray-400 text-sm">vs 72% peer average</div>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="w-full bg-gray-700 rounded-full h-3 mb-4">
          <motion.div 
            className="bg-gradient-to-r from-purple-500 to-blue-500 h-3 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${efficiencyScore}%` }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </div>
        
        <div className="flex items-center gap-4 text-sm text-gray-300">
          <div className="flex items-center gap-2">
            <CheckCircleIcon className="w-4 h-4 text-green-400" />
            <span>Goal alignment: Excellent</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircleIcon className="w-4 h-4 text-green-400" />
            <span>Spending efficiency: Good</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircleIcon className="w-4 h-4 text-yellow-400" />
            <span>Investment optimization: Improving</span>
          </div>
        </div>

        {/* Enhanced Peer Benchmarking */}
        <div className="mt-6 pt-6 border-t border-gray-700/30">
          <h4 className="font-semibold mb-4">Peer Benchmarking</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {peerBenchmarks.map((benchmark, index) => (
              <motion.div
                key={benchmark.category}
                className="text-center p-3 bg-gray-800/30 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <div className="text-2xl font-bold text-green-400 mb-1">{benchmark.percentile}%</div>
                <div className="text-xs text-gray-400 mb-2">{benchmark.rank}</div>
                <div className="text-sm font-medium">{benchmark.category}</div>
                <div className="text-xs text-green-400">{benchmark.improvement}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Navigation Tabs */}
      <div className="flex space-x-1 bg-[#1A1F2E] rounded-xl p-1 mb-8">
        {[
          { id: 'vision', label: 'Vision', icon: EyeIcon },
          { id: 'strategy', label: 'Strategy', icon: TargetIcon },
          { id: 'execution', label: 'Execution', icon: ZapIcon },
          { id: 'roadmap', label: 'Roadmap', icon: LineChartIcon }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
              activeTab === tab.id
                ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <tab.icon className="w-5 h-5" />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        {activeTab === 'vision' && (
          <motion.div
            key="vision"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-8"
          >
            {/* 360° Wealth Dashboard */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Net Worth Overview */}
              <motion.div 
                className="bg-gradient-to-br from-[#1A1F2E] to-[#151822] rounded-2xl p-6 border border-gray-800/30"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">Net Worth</h3>
                  <TrendingUpIcon className="w-6 h-6 text-green-400" />
                </div>
                <div className="text-3xl font-bold mb-2">€342,500</div>
                <div className="text-green-400 text-sm">+€12,400 this month</div>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Assets</span>
                    <span>€456,800</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Liabilities</span>
                    <span className="text-red-400">€114,300</span>
                  </div>
                </div>
              </motion.div>

              {/* Cash Flow */}
              <motion.div 
                className="bg-gradient-to-br from-[#1A1F2E] to-[#151822] rounded-2xl p-6 border border-gray-800/30"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">Cash Flow</h3>
                  <CalendarIcon className="w-6 h-6 text-blue-400" />
                </div>
                <div className="text-3xl font-bold mb-2 text-green-400">+€2,450</div>
                <div className="text-gray-400 text-sm mb-4">This month</div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Income</span>
                    <span className="text-green-400">€5,200</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Expenses</span>
                    <span className="text-red-400">€2,750</span>
                  </div>
                </div>
              </motion.div>

              {/* Investment Performance */}
              <motion.div 
                className="bg-gradient-to-br from-[#1A1F2E] to-[#151822] rounded-2xl p-6 border border-gray-800/30"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">Investments</h3>
                  <ChartBarIcon className="w-6 h-6 text-purple-400" />
                </div>
                <div className="text-3xl font-bold mb-2">€89,200</div>
                <div className="text-green-400 text-sm mb-4">+8.4% this year</div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Stocks</span>
                    <span>€45,600</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Bonds</span>
                    <span>€23,800</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Crypto</span>
                    <span>€19,800</span>
                  </div>
                </div>
              </motion.div>
            </div>

                         {/* AI Wealth Map */}
             <motion.div 
               className="bg-gradient-to-br from-[#1A1F2E] to-[#151822] rounded-2xl p-6 border border-gray-800/30"
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.4 }}
             >
               <div className="flex items-center gap-3 mb-6">
                 <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                   <BrainIcon className="w-5 h-5 text-white" />
                 </div>
                 <div>
                   <h3 className="text-xl font-semibold">AI Wealth Map</h3>
                   <p className="text-gray-400 text-sm">Hidden patterns in your financial behavior</p>
                 </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {/* Spending Categories */}
                 <div>
                   <h4 className="font-semibold mb-4">Spending Patterns</h4>
                   <div className="space-y-3">
                     {spendingCategories.map((category, index) => (
                       <motion.div
                         key={category.name}
                         className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg"
                         initial={{ opacity: 0, x: -20 }}
                         animate={{ opacity: 1, x: 0 }}
                         transition={{ delay: 0.1 * index }}
                       >
                         <div className="flex items-center gap-3">
                           <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.color}`} />
                           <span className="text-sm">{category.name}</span>
                         </div>
                         <div className="flex items-center gap-2">
                           <span className="text-sm font-medium">€{category.amount}</span>
                           <div className={`flex items-center gap-1 text-xs ${
                             category.trend === 'up' ? 'text-red-400' : 
                             category.trend === 'down' ? 'text-green-400' : 'text-gray-400'
                           }`}>
                             {category.trend === 'up' && <ArrowUpIcon className="w-3 h-3" />}
                             {category.trend === 'down' && <ArrowDownIcon className="w-3 h-3" />}
                             {category.trend === 'stable' && <div className="w-3 h-3 border border-gray-400 rounded-full" />}
                           </div>
                         </div>
                       </motion.div>
                     ))}
                   </div>
                 </div>

                 {/* AI Insights */}
                 <div>
                   <h4 className="font-semibold mb-4">AI Insights</h4>
                   <div className="space-y-3">
                     <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                       <div className="flex items-center gap-2 mb-2">
                         <LightbulbIcon className="w-4 h-4 text-blue-400" />
                         <span className="text-sm font-medium text-blue-400">Spending Pattern Detected</span>
                       </div>
                       <p className="text-xs text-gray-300">You spend 23% more on weekends. Consider setting weekend budgets.</p>
                     </div>
                     
                     <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                       <div className="flex items-center gap-2 mb-2">
                         <TrendingUpIcon className="w-4 h-4 text-green-400" />
                         <span className="text-sm font-medium text-green-400">Positive Trend</span>
                       </div>
                       <p className="text-xs text-gray-300">Your savings rate increased by 15% this quarter. Great job!</p>
                     </div>
                     
                     <div className="p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                       <div className="flex items-center gap-2 mb-2">
                         <AlertCircleIcon className="w-4 h-4 text-yellow-400" />
                         <span className="text-sm font-medium text-yellow-400">Opportunity Alert</span>
                       </div>
                       <p className="text-xs text-gray-300">You have €2,400 in low-yield accounts. Consider higher-return options.</p>
                     </div>
                   </div>
                 </div>
               </div>
             </motion.div>

             {/* Life Milestones Planning */}
             <motion.div 
               className="bg-gradient-to-br from-[#1A1F2E] to-[#151822] rounded-2xl p-6 border border-gray-800/30"
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.5 }}
             >
               <div className="flex items-center gap-3 mb-6">
                 <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                   <TargetIcon className="w-5 h-5 text-white" />
                 </div>
                 <div>
                   <h3 className="text-xl font-semibold">Life Milestones Planning</h3>
                   <p className="text-gray-400 text-sm">Major life goals and how today's decisions impact them</p>
                 </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {lifeMilestones.map((milestone, index) => (
                   <motion.div
                     key={milestone.id}
                     className="bg-gray-800/30 rounded-lg p-4 cursor-pointer hover:bg-gray-800/50 transition-all duration-200"
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: 0.1 * index }}
                     onClick={() => setSelectedMilestone(milestone.id)}
                   >
                     <div className="flex items-center justify-between mb-3">
                       <h4 className="font-semibold text-lg">{milestone.name}</h4>
                       <span className="text-sm text-gray-400">Age {milestone.targetAge}</span>
                     </div>
                     
                     <div className="mb-4">
                       <div className="flex justify-between text-sm text-gray-400 mb-1">
                         <span>Progress</span>
                         <span>{milestone.currentProgress}%</span>
                       </div>
                       <div className="w-full bg-gray-700 rounded-full h-2">
                         <motion.div 
                           className="h-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500"
                           initial={{ width: 0 }}
                           animate={{ width: `${milestone.currentProgress}%` }}
                           transition={{ duration: 1, delay: 0.2 * index }}
                         />
                       </div>
                     </div>
                     
                     <p className="text-sm text-gray-300 mb-4">{milestone.impact}</p>
                     
                     <div className="text-center">
                       <div className="text-lg font-bold">€{milestone.targetAmount.toLocaleString()}</div>
                       <div className="text-xs text-gray-400">Target amount</div>
                     </div>
                   </motion.div>
                 ))}
               </div>

               {selectedMilestone && (
                 <motion.div
                   className="bg-gray-800/30 rounded-lg p-4 mt-6"
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0, y: -20 }}
                   transition={{ duration: 0.3 }}
                 >
                   <h4 className="font-semibold mb-4">Scenario Simulations</h4>
                   <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                     {lifeMilestones.find(lm => lm.id === selectedMilestone)?.simulations.map((sim, simIndex) => (
                       <motion.div
                         key={sim.scenario}
                         className={`p-3 rounded-lg border ${sim.color} border-opacity-30`}
                         initial={{ opacity: 0, scale: 0.9 }}
                         animate={{ opacity: 1, scale: 1 }}
                         transition={{ delay: 0.1 * simIndex }}
                       >
                         <h5 className="font-medium text-sm mb-2">{sim.scenario}</h5>
                         <p className="text-xs text-gray-300 mb-2">{sim.impact}</p>
                         <div className="text-center">
                           <div className="text-sm font-bold text-green-400">{sim.timelineChange}</div>
                           <div className="text-xs text-gray-400">timeline</div>
                         </div>
                       </motion.div>
                     ))}
                   </div>
                 </motion.div>
               )}
             </motion.div>
          </motion.div>
        )}

        {activeTab === 'strategy' && (
          <motion.div
            key="strategy"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-8"
          >
            {/* Scenario Simulations */}
            <motion.div 
              className="bg-gradient-to-br from-[#1A1F2E] to-[#151822] rounded-2xl p-6 border border-gray-800/30"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center">
                  <TargetIcon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Scenario Simulations</h3>
                  <p className="text-gray-400 text-sm">See how small changes impact your goals</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold">Dining Out Reduction</h4>
                  <div className="bg-gray-800/30 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-400">Current dining budget</span>
                      <span className="font-medium">€450/month</span>
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-400">Reduced by 15%</span>
                      <span className="font-medium text-green-400">€382/month</span>
                    </div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-gray-400">Monthly savings</span>
                      <span className="font-medium text-green-400">€68</span>
                    </div>
                    <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-3">
                      <div className="text-center">
                        <div className="text-lg font-bold text-green-400">6 months earlier</div>
                        <div className="text-xs text-gray-300">to reach travel goal</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold">Investment Boost</h4>
                  <div className="bg-gray-800/30 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-400">Current investment</span>
                      <span className="font-medium">€89,200</span>
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-400">Add €500/month</span>
                      <span className="font-medium text-blue-400">+€6,000/year</span>
                    </div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-gray-400">Projected growth</span>
                      <span className="font-medium text-blue-400">+12.4%</span>
                    </div>
                    <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-3">
                      <div className="text-center">
                        <div className="text-lg font-bold text-blue-400">€1.2M by 2040</div>
                        <div className="text-xs text-gray-300">retirement fund target</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

                         {/* Goal-based Budgets */}
             <motion.div 
               className="bg-gradient-to-br from-[#1A1F2E] to-[#151822] rounded-2xl p-6 border border-gray-800/30"
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.2 }}
             >
               <div className="flex items-center gap-3 mb-6">
                 <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                   <PieChartIcon className="w-5 h-5 text-white" />
                 </div>
                 <div>
                   <h3 className="text-xl font-semibold">Goal-based Budgets</h3>
                   <p className="text-gray-400 text-sm">Budgets that align with your life goals</p>
                 </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                 {wealthGoals.map((goal, index) => (
                   <motion.div
                     key={goal.id}
                     className="bg-gray-800/30 rounded-lg p-4 cursor-pointer hover:bg-gray-800/50 transition-all duration-200"
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: 0.1 * index }}
                     onClick={() => setSelectedGoal(goal.id)}
                   >
                     <div className="flex items-center gap-3 mb-3">
                       <div className={`w-8 h-8 bg-gradient-to-r ${goal.color} rounded-lg flex items-center justify-center`}>
                         <goal.icon className="w-4 h-4 text-white" />
                       </div>
                       <div>
                         <h4 className="font-medium text-sm">{goal.name}</h4>
                         <div className="text-xs text-gray-400">{getDaysUntilDeadline(goal.deadline)} days left</div>
                       </div>
                     </div>
                     
                     <div className="mb-3">
                       <div className="flex justify-between text-xs text-gray-400 mb-1">
                         <span>Progress</span>
                         <span>{getProgressPercentage(goal.currentAmount, goal.targetAmount).toFixed(1)}%</span>
                       </div>
                       <div className="w-full bg-gray-700 rounded-full h-2">
                         <motion.div 
                           className={`h-2 rounded-full bg-gradient-to-r ${goal.color}`}
                           initial={{ width: 0 }}
                           animate={{ width: `${getProgressPercentage(goal.currentAmount, goal.targetAmount)}%` }}
                           transition={{ duration: 1, delay: 0.2 * index }}
                         />
                       </div>
                     </div>
                     
                     <div className="text-center">
                       <div className="text-lg font-bold">€{goal.currentAmount.toLocaleString()}</div>
                       <div className="text-xs text-gray-400">of €{goal.targetAmount.toLocaleString()}</div>
                     </div>
                   </motion.div>
                 ))}
               </div>
             </motion.div>

             {/* Lifestyle Impact Forecast */}
             <motion.div 
               className="bg-gradient-to-br from-[#1A1F2E] to-[#151822] rounded-2xl p-6 border border-gray-800/30"
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.3 }}
             >
               <div className="flex items-center gap-3 mb-6">
                 <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl flex items-center justify-center">
                   <HeartIcon className="w-5 h-5 text-white" />
                 </div>
                 <div>
                   <h3 className="text-xl font-semibold">Lifestyle Impact Forecast</h3>
                   <p className="text-gray-400 text-sm">See how financial choices affect your future lifestyle</p>
                 </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="space-y-4">
                   <h4 className="font-semibold">Shopping Reduction Impact</h4>
                   <div className="bg-gray-800/30 rounded-lg p-4">
                     <div className="flex items-center justify-between mb-2">
                       <span className="text-sm text-gray-400">Current shopping budget</span>
                       <span className="font-medium">€350/month</span>
                     </div>
                     <div className="flex items-center justify-between mb-2">
                       <span className="text-sm text-gray-400">Reduce by 10%</span>
                       <span className="font-medium text-green-400">€315/month</span>
                     </div>
                     <div className="flex items-center justify-between mb-3">
                       <span className="text-sm text-gray-400">Annual savings</span>
                       <span className="font-medium text-green-400">€420</span>
                     </div>
                     <div className="bg-pink-500/20 border border-pink-500/30 rounded-lg p-3">
                       <div className="text-center">
                         <div className="text-lg font-bold text-pink-400">2 Extra Trips</div>
                         <div className="text-xs text-gray-300">per year in retirement</div>
                       </div>
                     </div>
                   </div>
                 </div>

                 <div className="space-y-4">
                   <h4 className="font-semibold">Investment Growth Impact</h4>
                   <div className="bg-gray-800/30 rounded-lg p-4">
                     <div className="flex items-center justify-between mb-2">
                       <span className="text-sm text-gray-400">Current investment</span>
                       <span className="font-medium">€89,200</span>
                     </div>
                     <div className="flex items-center justify-between mb-2">
                       <span className="text-sm text-gray-400">Add €200/month</span>
                       <span className="font-medium text-blue-400">+€2,400/year</span>
                     </div>
                     <div className="flex items-center justify-between mb-3">
                       <span className="text-sm text-gray-400">30-year impact</span>
                       <span className="font-medium text-blue-400">€180,000+</span>
                     </div>
                     <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-3">
                       <div className="text-center">
                         <div className="text-lg font-bold text-blue-400">Premium Lifestyle</div>
                         <div className="text-xs text-gray-300">in retirement</div>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>

               <div className="mt-6 p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-lg">
                 <div className="text-center">
                   <h4 className="font-semibold text-purple-400 mb-2">Emotional Impact</h4>
                   <p className="text-sm text-gray-300">
                     "Cutting shopping by 10% today means 2 extra dream vacations per year in retirement. 
                     Your future self will thank you for the small sacrifices today!"
                   </p>
                 </div>
               </div>
             </motion.div>
          </motion.div>
        )}

        {activeTab === 'execution' && (
          <motion.div
            key="execution"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-8"
          >
            {/* AI Nudges & Next Best Actions */}
            <motion.div 
              className="bg-gradient-to-br from-[#1A1F2E] to-[#151822] rounded-2xl p-6 border border-gray-800/30"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center">
                  <LightbulbIcon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">AI Nudges & Next Best Actions</h3>
                  <p className="text-gray-400 text-sm">Personalized recommendations to improve your financial health</p>
                </div>
              </div>

              <div className="space-y-4">
                {aiInsights.map((insight, index) => (
                  <motion.div
                    key={insight.id}
                    className={`p-4 rounded-lg border transition-all duration-200 hover:scale-[1.02] ${
                      insight.type === 'nudge' ? 'bg-blue-500/10 border-blue-500/20' :
                      insight.type === 'milestone' ? 'bg-green-500/10 border-green-500/20' :
                      insight.type === 'opportunity' ? 'bg-purple-500/10 border-purple-500/20' :
                      'bg-yellow-500/10 border-yellow-500/20'
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          {insight.type === 'nudge' && <ArrowUpIcon className="w-4 h-4 text-blue-400" />}
                          {insight.type === 'milestone' && <CheckCircleIcon className="w-4 h-4 text-green-400" />}
                          {insight.type === 'opportunity' && <TrendingUpIcon className="w-4 h-4 text-purple-400" />}
                          {insight.type === 'alert' && <AlertCircleIcon className="w-4 h-4 text-yellow-400" />}
                          <span className={`font-medium text-sm ${
                            insight.type === 'nudge' ? 'text-blue-400' :
                            insight.type === 'milestone' ? 'text-green-400' :
                            insight.type === 'opportunity' ? 'text-purple-400' :
                            'text-yellow-400'
                          }`}>
                            {insight.title}
                          </span>
                        </div>
                        <p className="text-gray-300 text-sm mb-3">{insight.message}</p>
                        {insight.action && (
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs text-gray-400">Action:</span>
                            <span className="text-sm font-medium text-white">{insight.action}</span>
                          </div>
                        )}
                        {insight.impact && (
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-gray-400">Impact:</span>
                            <span className="text-sm font-medium text-green-400">{insight.impact}</span>
                          </div>
                        )}
                      </div>
                      <button className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm font-medium transition-colors">
                        Take Action
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

                         {/* Dynamic Goal Rebalancing */}
             <motion.div 
               className="bg-gradient-to-br from-[#1A1F2E] to-[#151822] rounded-2xl p-6 border border-gray-800/30"
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.2 }}
             >
               <div className="flex items-center gap-3 mb-6">
                 <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                   <BarChart3Icon className="w-5 h-5 text-white" />
                 </div>
                 <div>
                   <h3 className="text-xl font-semibold">Dynamic Goal Rebalancing</h3>
                   <p className="text-gray-400 text-sm">AI automatically adjusts targets based on changing priorities</p>
                 </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="space-y-4">
                   <h4 className="font-semibold">Priority Changes</h4>
                   <div className="space-y-3">
                     <div className="bg-gray-800/30 rounded-lg p-4">
                       <div className="flex items-center justify-between mb-2">
                         <span className="text-sm font-medium">Travel Goal</span>
                         <span className="text-xs text-gray-400">Priority increased</span>
                       </div>
                       <div className="text-xs text-gray-400 mb-2">Due to upcoming promotion opportunity</div>
                       <div className="flex items-center gap-2 text-sm">
                         <span className="text-gray-400">New target:</span>
                         <span className="text-green-400">€35,000</span>
                       </div>
                     </div>
                     
                     <div className="bg-gray-800/30 rounded-lg p-4">
                       <div className="flex items-center justify-between mb-2">
                         <span className="text-sm font-medium">Emergency Fund</span>
                         <span className="text-xs text-gray-400">Target reached</span>
                       </div>
                       <div className="text-xs text-gray-400 mb-2">Excess funds redirected to retirement</div>
                       <div className="flex items-center gap-2 text-sm">
                         <span className="text-gray-400">Redirected:</span>
                         <span className="text-blue-400">€3,000</span>
                       </div>
                     </div>
                   </div>
                 </div>

                 <div className="space-y-4">
                   <h4 className="font-semibold">AI Recommendations</h4>
                   <div className="space-y-3">
                     <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                       <div className="flex items-center gap-2 mb-2">
                         <BrainIcon className="w-4 h-4 text-blue-400" />
                         <span className="text-sm font-medium text-blue-400">Smart Reallocation</span>
                       </div>
                       <p className="text-xs text-gray-300">Based on your spending patterns, consider reducing entertainment budget by €50/month to accelerate travel goal.</p>
                     </div>
                     
                     <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                       <div className="flex items-center gap-2 mb-2">
                         <TrendingUpIcon className="w-4 h-4 text-green-400" />
                         <span className="text-sm font-medium text-green-400">Opportunity Alert</span>
                       </div>
                       <p className="text-xs text-gray-300">Your emergency fund is fully funded. Consider investing the excess in your retirement portfolio for better long-term returns.</p>
                     </div>
                   </div>
                 </div>
               </div>
             </motion.div>

             {/* Behavioral Finance Coaching */}
             <motion.div 
               className="bg-gradient-to-br from-[#1A1F2E] to-[#151822] rounded-2xl p-6 border border-gray-800/30"
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.3 }}
             >
               <div className="flex items-center gap-3 mb-6">
                 <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center">
                   <BrainIcon className="w-5 h-5 text-white" />
                 </div>
                 <div>
                   <h3 className="text-xl font-semibold">Behavioral Finance Coaching</h3>
                   <p className="text-gray-400 text-sm">Psychology-based nudges to improve your financial habits</p>
                 </div>
               </div>

               <div className="space-y-4">
                 {behavioralNudges.map((nudge, index) => (
                   <motion.div
                     key={nudge.id}
                     className={`p-4 rounded-lg border transition-all duration-200 hover:scale-[1.02] ${
                       nudge.type === 'psychology' ? 'bg-blue-500/10 border-blue-500/20' :
                       nudge.type === 'fear' ? 'bg-red-500/10 border-red-500/20' :
                       'bg-purple-500/10 border-purple-500/20'
                     }`}
                     initial={{ opacity: 0, x: -20 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ delay: 0.1 * index }}
                   >
                     <div className="flex items-start justify-between">
                       <div className="flex-1">
                         <div className="flex items-center gap-2 mb-2">
                           {nudge.type === 'psychology' && <BrainIcon className="w-4 h-4 text-blue-400" />}
                           {nudge.type === 'fear' && <AlertCircleIcon className="w-4 h-4 text-red-400" />}
                           {nudge.type === 'habit' && <ClockIcon className="w-4 h-4 text-purple-400" />}
                           <span className={`font-medium text-sm ${
                             nudge.type === 'psychology' ? 'text-blue-400' :
                             nudge.type === 'fear' ? 'text-red-400' :
                             'text-purple-400'
                           }`}>
                             {nudge.title}
                           </span>
                         </div>
                         <p className="text-gray-300 text-sm mb-3">{nudge.message}</p>
                         <div className="flex items-center gap-2 mb-2">
                           <span className="text-xs text-gray-400">Challenge:</span>
                           <span className="text-sm font-medium text-white">{nudge.challenge}</span>
                         </div>
                         <div className="flex items-center gap-2">
                           <span className="text-xs text-gray-400">Reward:</span>
                           <span className="text-sm font-medium text-green-400">{nudge.reward}</span>
                         </div>
                       </div>
                       <button className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm font-medium transition-colors">
                         Take Challenge
                       </button>
                     </div>
                   </motion.div>
                 ))}
               </div>
             </motion.div>
          </motion.div>
        )}

        {activeTab === 'roadmap' && (
          <motion.div
            key="roadmap"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-8"
          >
            <motion.div 
              className="bg-gradient-to-br from-[#1A1F2E] to-[#151822] rounded-2xl p-6 border border-gray-800/30"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                  <LineChartIcon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Wealth Roadmap</h3>
                  <p className="text-gray-400 text-sm">Your journey to financial independence</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold">Projected Savings</h4>
                  <div className="bg-gray-800/30 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-400">Current Savings</span>
                      <span className="font-medium">€{peerBenchmarks.find(pb => pb.category === 'Savings Rate')?.userScore.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-400">Projected for 2024</span>
                      <span className="font-medium text-green-400">€{wealthRoadmap.find(wr => wr.year === 2024)?.projectedSavings.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-gray-400">Improvement</span>
                      <span className="font-medium text-green-400">{peerBenchmarks.find(pb => pb.category === 'Savings Rate')?.improvement}</span>
                    </div>
                    <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-3">
                      <div className="text-center">
                        <div className="text-lg font-bold text-green-400">€{wealthRoadmap.find(wr => wr.year === 2024)?.projectedSavings.toLocaleString()}</div>
                        <div className="text-xs text-gray-300">by 2024</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold">Projected Investments</h4>
                  <div className="bg-gray-800/30 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-400">Current Investments</span>
                      <span className="font-medium">€{peerBenchmarks.find(pb => pb.category === 'Investment Allocation')?.userScore.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-400">Projected for 2024</span>
                      <span className="font-medium text-blue-400">€{wealthRoadmap.find(wr => wr.year === 2024)?.projectedInvestments.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-gray-400">Improvement</span>
                      <span className="font-medium text-blue-400">{peerBenchmarks.find(pb => pb.category === 'Investment Allocation')?.improvement}</span>
                    </div>
                    <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-3">
                      <div className="text-center">
                        <div className="text-lg font-bold text-blue-400">€{wealthRoadmap.find(wr => wr.year === 2024)?.projectedInvestments.toLocaleString()}</div>
                        <div className="text-xs text-gray-300">by 2024</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-semibold mb-4">Key Milestones</h4>
                <div className="space-y-3">
                  {wealthRoadmap.map((roadmap, index) => (
                    <motion.div
                      key={roadmap.year}
                      className="bg-gray-800/30 rounded-lg p-4 cursor-pointer hover:bg-gray-800/50 transition-all duration-200"
                      onClick={() => setSelectedMilestone(roadmap.year.toString())}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-sm">{roadmap.year}</span>
                        <span className="text-xs text-gray-400">{roadmap.riskLevel}</span>
                      </div>
                      <div className="text-xs text-gray-400 mb-2">{roadmap.lifestyleImpact}</div>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-gray-400">Projected Savings:</span>
                        <span className="font-medium text-green-400">€{roadmap.projectedSavings.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-gray-400">Projected Investments:</span>
                        <span className="font-medium text-blue-400">€{roadmap.projectedInvestments.toLocaleString()}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {selectedMilestone && (
                <motion.div
                  className="bg-gradient-to-br from-[#1A1F2E] to-[#151822] rounded-2xl p-6 border border-gray-800/30 mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                      <LineChartIcon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Year {selectedMilestone} Roadmap</h3>
                      <p className="text-gray-400 text-sm">Detailed projections for your financial journey</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold">Projected Savings</h4>
                      <div className="bg-gray-800/30 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-gray-400">Current Savings</span>
                          <span className="font-medium">€{peerBenchmarks.find(pb => pb.category === 'Savings Rate')?.userScore.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-gray-400">Projected for {selectedMilestone}</span>
                          <span className="font-medium text-green-400">€{wealthRoadmap.find(wr => wr.year === parseInt(selectedMilestone))?.projectedSavings.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm text-gray-400">Improvement</span>
                          <span className="font-medium text-green-400">{peerBenchmarks.find(pb => pb.category === 'Savings Rate')?.improvement}</span>
                        </div>
                        <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-3">
                          <div className="text-center">
                            <div className="text-lg font-bold text-green-400">€{wealthRoadmap.find(wr => wr.year === parseInt(selectedMilestone))?.projectedSavings.toLocaleString()}</div>
                            <div className="text-xs text-gray-300">by {selectedMilestone}</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-semibold">Projected Investments</h4>
                      <div className="bg-gray-800/30 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-gray-400">Current Investments</span>
                          <span className="font-medium">€{peerBenchmarks.find(pb => pb.category === 'Investment Allocation')?.userScore.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-gray-400">Projected for {selectedMilestone}</span>
                          <span className="font-medium text-blue-400">€{wealthRoadmap.find(wr => wr.year === parseInt(selectedMilestone))?.projectedInvestments.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm text-gray-400">Improvement</span>
                          <span className="font-medium text-blue-400">{peerBenchmarks.find(pb => pb.category === 'Investment Allocation')?.improvement}</span>
                        </div>
                        <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-3">
                          <div className="text-center">
                            <div className="text-lg font-bold text-blue-400">€{wealthRoadmap.find(wr => wr.year === parseInt(selectedMilestone))?.projectedInvestments.toLocaleString()}</div>
                            <div className="text-xs text-gray-300">by {selectedMilestone}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h4 className="font-semibold mb-4">Milestone Details</h4>
                    <div className="space-y-3">
                      {lifeMilestones.find(lm => lm.targetAge.toString() === selectedMilestone)?.simulations.map((sim, simIndex) => (
                        <motion.div
                          key={sim.scenario}
                          className="bg-gray-800/30 rounded-lg p-4"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-medium text-sm">{sim.scenario}</span>
                            <span className="text-xs text-gray-400">{sim.timelineChange}</span>
                          </div>
                          <div className="text-xs text-gray-400 mb-2">{sim.impact}</div>
                          <div className="flex items-center gap-2 text-sm">
                            <span className="text-gray-400">Amount Change:</span>
                            <span className="font-medium text-green-400">€{sim.amountChange.toLocaleString()}</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>

            {/* Behavioral Coaching */}
            <motion.div 
              className="bg-gradient-to-br from-[#1A1F2E] to-[#151822] rounded-2xl p-6 border border-gray-800/30 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center">
                  <LightbulbIcon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Behavioral Coaching</h3>
                  <p className="text-gray-400 text-sm">Personalized nudges to improve your financial habits</p>
                </div>
              </div>

              <div className="space-y-4">
                {behavioralNudges.map((nudge, index) => (
                  <motion.div
                    key={nudge.id}
                    className={`p-4 rounded-lg border transition-all duration-200 hover:scale-[1.02] ${
                      nudge.type === 'psychology' ? 'bg-blue-500/10 border-blue-500/20' :
                      nudge.type === 'fear' ? 'bg-red-500/10 border-red-500/20' :
                      'bg-purple-500/10 border-purple-500/20'
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          {nudge.type === 'psychology' && <BrainIcon className="w-4 h-4 text-blue-400" />}
                          {nudge.type === 'fear' && <AlertCircleIcon className="w-4 h-4 text-red-400" />}
                          {nudge.type === 'habit' && <ClockIcon className="w-4 h-4 text-purple-400" />}
                          <span className={`font-medium text-sm ${
                            nudge.type === 'psychology' ? 'text-blue-400' :
                            nudge.type === 'fear' ? 'text-red-400' :
                            'text-purple-400'
                          }`}>
                            {nudge.title}
                          </span>
                        </div>
                        <p className="text-gray-300 text-sm mb-3">{nudge.message}</p>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs text-gray-400">Challenge:</span>
                          <span className="text-sm font-medium text-white">{nudge.challenge}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-gray-400">Reward:</span>
                          <span className="text-sm font-medium text-green-400">{nudge.reward}</span>
                        </div>
                      </div>
                      <button className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm font-medium transition-colors">
                        Take Challenge
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Wealth Missions */}
            <motion.div 
              className="bg-gradient-to-br from-[#1A1F2E] to-[#151822] rounded-2xl p-6 border border-gray-800/30 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                  <TargetIcon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Wealth Missions</h3>
                  <p className="text-gray-400 text-sm">Complete missions to earn AI rewards and improve your financial health</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {wealthMissions.map((mission, index) => (
                  <motion.div
                    key={mission.id}
                    className="bg-gray-800/30 rounded-lg p-4 cursor-pointer hover:bg-gray-800/50 transition-all duration-200"
                    onClick={() => setActiveMissions(prev => [...prev, mission])}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-8 h-8 bg-gradient-to-r ${mission.category === 'spending' ? 'from-blue-500 to-purple-600' : mission.category === 'saving' ? 'from-green-500 to-teal-600' : mission.category === 'investment' ? 'from-purple-500 to-blue-600' : 'from-cyan-500 to-blue-600'} rounded-lg flex items-center justify-center`}>
                        <TargetIcon className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">{mission.title}</h4>
                        <p className="text-xs text-gray-400">{mission.description}</p>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-lg font-bold">
                        {mission.progress}/{mission.target} {mission.unit}
                      </div>
                      <div className="text-xs text-gray-400">
                        {mission.progress === mission.target ? 'Completed!' : `${mission.target - mission.progress} more to go`}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <AnimatePresence>
                {activeMissions.map((mission, index) => (
                  <motion.div
                    key={mission.id}
                    className="bg-gradient-to-br from-[#1A1F2E] to-[#151822] rounded-2xl p-6 border border-gray-800/30 mt-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold">Mission: {mission.title}</h3>
                      <button className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg text-sm font-medium transition-colors" onClick={() => setActiveMissions(activeMissions.filter(m => m.id !== mission.id))}>
                        Complete Mission
                      </button>
                    </div>
                    <p className="text-gray-300 text-sm mb-4">{mission.description}</p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Progress:</span>
                      <span className="font-medium text-green-400">{mission.progress}/{mission.target} {mission.unit}</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                      <motion.div 
                        className="h-2 rounded-full bg-gradient-to-r from-green-400 to-blue-400"
                        initial={{ width: `${(mission.progress / mission.target) * 100}%` }}
                        animate={{ width: `${(mission.progress / mission.target) * 100}%` }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                    <div className="flex items-center gap-2 mt-4 text-sm text-gray-400">
                      <CheckCircleIcon className="w-4 h-4" />
                      <span>Reward: {mission.aiReward}</span>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* AI Magic Layer - Floating Insights */}
      <AnimatePresence>
        {aiInsights.filter(insight => insight.priority === 'high').map((insight) => (
          <motion.div
            key={insight.id}
            className="fixed bottom-6 right-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 rounded-2xl shadow-2xl max-w-sm z-50"
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                <LightbulbIcon className="w-4 h-4" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-sm mb-1">{insight.title}</h4>
                <p className="text-xs text-white/80 mb-2">{insight.message}</p>
                <div className="flex gap-2">
                  <button className="px-3 py-1 bg-white/20 hover:bg-white/30 rounded-lg text-xs font-medium transition-colors">
                    {insight.action || 'Learn More'}
                  </button>
                  <button className="px-3 py-1 bg-white/10 hover:bg-white/20 rounded-lg text-xs font-medium transition-colors">
                    Dismiss
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
