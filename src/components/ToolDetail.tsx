import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BarChart2Icon, BookOpenIcon, CalculatorIcon, WalletIcon, PieChartIcon, ShieldIcon, LineChartIcon, BellIcon, TrendingUpIcon, FileTextIcon, UsersIcon, ArrowRightIcon, RefreshCwIcon, AlertTriangleIcon, CheckIcon, XIcon, PlusIcon, SearchIcon, CalendarIcon, SlackIcon, MailIcon, BellRingIcon, CheckCircleIcon, ArrowUpIcon, ArrowDownIcon, DollarSignIcon, InfoIcon, SaveIcon, PlayIcon, PauseIcon, SettingsIcon, BrainIcon, MessageCircleIcon, XCircleIcon } from 'lucide-react';
export const ToolDetail = () => {
  const {
    toolId
  } = useParams<{
    toolId: string;
  }>();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [toolId]);
  const getToolIcon = (id: string) => {
    switch (id) {
      case 'financial-knowledge':
        return <BookOpenIcon className="h-6 w-6 text-blue-500" />;
      case 'financial-planner':
        return <CalculatorIcon className="h-6 w-6 text-purple-500" />;
      case 'sentiment-analysis':
        return <BarChart2Icon className="h-6 w-6 text-green-500" />;
      case 'portfolio-tracker':
        return <WalletIcon className="h-6 w-6 text-teal-500" />;
      case 'portfolio-optimization':
        return <PieChartIcon className="h-6 w-6 text-red-500" />;
      case 'risk-assessment':
        return <ShieldIcon className="h-6 w-6 text-yellow-500" />;
      case 'backtesting-module':
        return <LineChartIcon className="h-6 w-6 text-blue-500" />;
      case 'automated-alerts':
        return <BellIcon className="h-6 w-6 text-purple-500" />;
      case 'realtime-optimizer':
        return <TrendingUpIcon className="h-6 w-6 text-teal-500" />;
      case 'forecasting-models':
        return <LineChartIcon className="h-6 w-6 text-blue-500" />;
      case 'premium-reports':
        return <FileTextIcon className="h-6 w-6 text-red-500" />;
      case 'coaching-portal':
        return <UsersIcon className="h-6 w-6 text-green-500" />;
      default:
        return <CalculatorIcon className="h-6 w-6 text-blue-500" />;
    }
  };
  const getToolName = (id: string) => {
    switch (id) {
      case 'financial-knowledge':
        return 'Financial Knowledge';
      case 'financial-planner':
        return 'Financial Planner';
      case 'sentiment-analysis':
        return 'Sentiment Analysis';
      case 'portfolio-tracker':
        return 'Portfolio Tracker';
      case 'portfolio-optimization':
        return 'Portfolio Optimization';
      case 'risk-assessment':
        return 'Risk Assessment';
      case 'backtesting-module':
        return 'Backtesting Module';
      case 'automated-alerts':
        return 'Automated Alerts';
      case 'realtime-optimizer':
        return 'Real-Time Optimizer';
      case 'forecasting-models':
        return 'Forecasting Models';
      case 'premium-reports':
        return 'Premium Reports';
      case 'coaching-portal':
        return 'Coaching Portal';
      default:
        return 'Tool';
    }
  };
  const renderToolContent = () => {
    if (loading) {
      return <div className="flex items-center justify-center h-64">
          <div className="flex flex-col items-center">
            <RefreshCwIcon className="h-8 w-8 text-yellow-500 animate-spin mb-4" />
            <p className="text-gray-400">Loading tool...</p>
          </div>
        </div>;
    }
    switch (toolId) {
      case 'financial-knowledge':
        return <div className="space-y-6">
            <div className="bg-[#1A1F2E] p-6 rounded-xl">
              <h2 className="text-xl font-bold mb-4">
                Financial Knowledge Base
              </h2>
              <div className="mb-6">
                <div className="relative">
                  <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input type="text" placeholder="Search for financial topics..." className="bg-[#0B0E15] rounded-lg pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-[#151822] p-4 rounded-lg hover:bg-[#1E2230] transition-colors cursor-pointer">
                  <h3 className="font-medium mb-2 flex items-center">
                    <BookOpenIcon className="h-4 w-4 text-blue-500 mr-2" />
                    Investment Fundamentals
                  </h3>
                  <p className="text-sm text-gray-400">
                    Learn the basics of investing, asset classes, and portfolio
                    theory
                  </p>
                </div>
                <div className="bg-[#151822] p-4 rounded-lg hover:bg-[#1E2230] transition-colors cursor-pointer">
                  <h3 className="font-medium mb-2 flex items-center">
                    <BookOpenIcon className="h-4 w-4 text-green-500 mr-2" />
                    Tax Optimization
                  </h3>
                  <p className="text-sm text-gray-400">
                    Strategies to minimize taxes and maximize your investment
                    returns
                  </p>
                </div>
                <div className="bg-[#151822] p-4 rounded-lg hover:bg-[#1E2230] transition-colors cursor-pointer">
                  <h3 className="font-medium mb-2 flex items-center">
                    <BookOpenIcon className="h-4 w-4 text-purple-500 mr-2" />
                    Retirement Planning
                  </h3>
                  <p className="text-sm text-gray-400">
                    Comprehensive guides to planning for a secure retirement
                  </p>
                </div>
                <div className="bg-[#151822] p-4 rounded-lg hover:bg-[#1E2230] transition-colors cursor-pointer">
                  <h3 className="font-medium mb-2 flex items-center">
                    <BookOpenIcon className="h-4 w-4 text-yellow-500 mr-2" />
                    Market Analysis
                  </h3>
                  <p className="text-sm text-gray-400">
                    How to analyze market trends and make informed decisions
                  </p>
                </div>
                <div className="bg-[#151822] p-4 rounded-lg hover:bg-[#1E2230] transition-colors cursor-pointer">
                  <h3 className="font-medium mb-2 flex items-center">
                    <BookOpenIcon className="h-4 w-4 text-red-500 mr-2" />
                    Risk Management
                  </h3>
                  <p className="text-sm text-gray-400">
                    Understanding and mitigating different types of investment
                    risks
                  </p>
                </div>
                <div className="bg-[#151822] p-4 rounded-lg hover:bg-[#1E2230] transition-colors cursor-pointer">
                  <h3 className="font-medium mb-2 flex items-center">
                    <BookOpenIcon className="h-4 w-4 text-teal-500 mr-2" />
                    Financial Instruments
                  </h3>
                  <p className="text-sm text-gray-400">
                    Deep dive into stocks, bonds, ETFs, options, and more
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#1A1F2E] p-6 rounded-xl">
              <h2 className="text-xl font-bold mb-4">Featured Articles</h2>
              <div className="space-y-4">
                <div className="bg-[#151822] p-4 rounded-lg">
                  <h3 className="font-medium mb-2">
                    Understanding Market Cycles: A Beginner's Guide
                  </h3>
                  <p className="text-sm text-gray-400 mb-3">
                    Learn how to identify different phases of market cycles and
                    position your investments accordingly.
                  </p>
                  <div className="flex justify-between">
                    <span className="text-xs text-gray-500">10 min read</span>
                    <button className="text-blue-500 text-sm">Read Now</button>
                  </div>
                </div>
                <div className="bg-[#151822] p-4 rounded-lg">
                  <h3 className="font-medium mb-2">
                    The Power of Compound Interest
                  </h3>
                  <p className="text-sm text-gray-400 mb-3">
                    Discover how compound interest works and why starting to
                    invest early can dramatically increase your wealth.
                  </p>
                  <div className="flex justify-between">
                    <span className="text-xs text-gray-500">8 min read</span>
                    <button className="text-blue-500 text-sm">Read Now</button>
                  </div>
                </div>
                <div className="bg-[#151822] p-4 rounded-lg">
                  <h3 className="font-medium mb-2">
                    Modern Portfolio Theory Explained
                  </h3>
                  <p className="text-sm text-gray-400 mb-3">
                    A comprehensive overview of MPT and how it can help you
                    build a more efficient investment portfolio.
                  </p>
                  <div className="flex justify-between">
                    <span className="text-xs text-gray-500">15 min read</span>
                    <button className="text-blue-500 text-sm">Read Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>;
      case 'financial-planner':
        return <div className="space-y-6">
            <div className="bg-[#1A1F2E] p-6 rounded-xl">
              <h2 className="text-xl font-bold mb-4">Financial Goal Planner</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-[#151822] p-5 rounded-lg">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-medium">Retirement</h3>
                    <div className="bg-purple-500/10 p-2 rounded-full">
                      <CalendarIcon className="h-5 w-5 text-purple-500" />
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-400">Target</span>
                      <span>€750,000</span>
                    </div>
                    <div className="w-full bg-[#0B0E15] rounded-full h-2 mb-1">
                      <div className="bg-purple-500 h-2 rounded-full w-3/5"></div>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-400">Current: €450,000</span>
                      <span className="text-purple-500">60%</span>
                    </div>
                  </div>
                  <button className="w-full bg-[#0B0E15] hover:bg-[#262B3D] text-sm py-2 rounded-lg transition-colors">
                    Update Goal
                  </button>
                </div>
                <div className="bg-[#151822] p-5 rounded-lg">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-medium">Home Purchase</h3>
                    <div className="bg-blue-500/10 p-2 rounded-full">
                      <CalendarIcon className="h-5 w-5 text-blue-500" />
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-400">Target</span>
                      <span>€100,000</span>
                    </div>
                    <div className="w-full bg-[#0B0E15] rounded-full h-2 mb-1">
                      <div className="bg-blue-500 h-2 rounded-full w-2/5"></div>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-400">Current: €40,000</span>
                      <span className="text-blue-500">40%</span>
                    </div>
                  </div>
                  <button className="w-full bg-[#0B0E15] hover:bg-[#262B3D] text-sm py-2 rounded-lg transition-colors">
                    Update Goal
                  </button>
                </div>
                <div className="bg-[#151822] p-5 rounded-lg border border-dashed border-gray-700 flex flex-col items-center justify-center">
                  <PlusIcon className="h-8 w-8 text-gray-500 mb-2" />
                  <p className="text-gray-500 text-sm text-center mb-2">
                    Add New Financial Goal
                  </p>
                  <button className="bg-[#0B0E15] hover:bg-[#262B3D] text-sm px-4 py-2 rounded-lg transition-colors">
                    Create Goal
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-[#1A1F2E] p-6 rounded-xl">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Retirement Calculator</h2>
                <button className="bg-purple-500 text-white px-4 py-2 rounded-lg text-sm">
                  Generate Plan
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="mb-4">
                    <label className="text-sm text-gray-400 mb-2 block">
                      Current Age
                    </label>
                    <input type="number" className="w-full bg-[#151822] rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500" defaultValue="35" />
                  </div>
                  <div className="mb-4">
                    <label className="text-sm text-gray-400 mb-2 block">
                      Retirement Age
                    </label>
                    <input type="number" className="w-full bg-[#151822] rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500" defaultValue="65" />
                  </div>
                  <div className="mb-4">
                    <label className="text-sm text-gray-400 mb-2 block">
                      Current Savings
                    </label>
                    <input type="text" className="w-full bg-[#151822] rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500" defaultValue="€450,000" />
                  </div>
                </div>
                <div>
                  <div className="mb-4">
                    <label className="text-sm text-gray-400 mb-2 block">
                      Monthly Contribution
                    </label>
                    <input type="text" className="w-full bg-[#151822] rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500" defaultValue="€1,500" />
                  </div>
                  <div className="mb-4">
                    <label className="text-sm text-gray-400 mb-2 block">
                      Expected Annual Return (%)
                    </label>
                    <input type="number" className="w-full bg-[#151822] rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500" defaultValue="7" />
                  </div>
                  <div className="mb-4">
                    <label className="text-sm text-gray-400 mb-2 block">
                      Inflation Rate (%)
                    </label>
                    <input type="number" className="w-full bg-[#151822] rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500" defaultValue="2.5" />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#1A1F2E] p-6 rounded-xl">
              <h2 className="text-xl font-bold mb-4">
                AI Financial Recommendations
              </h2>
              <div className="bg-[#151822] p-5 rounded-lg border border-purple-500/20">
                <div className="flex items-start gap-3 mb-4">
                  <div className="bg-purple-500/10 p-2 rounded-full mt-1">
                    <BrainIcon className="h-5 w-5 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">
                      Retirement Optimization
                    </h3>
                    <p className="text-sm text-gray-400">
                      Based on your current savings rate and investment
                      allocation, you're on track to reach approximately
                      €720,000 by age 65. To reach your €750,000 goal, consider
                      increasing your monthly contribution by €125 or adjusting
                      your asset allocation for potentially higher returns.
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <button className="bg-purple-500 text-white px-3 py-1 rounded-lg text-sm">
                    Apply Recommendation
                  </button>
                  <button className="bg-[#0B0E15] text-gray-300 px-3 py-1 rounded-lg text-sm">
                    See Details
                  </button>
                </div>
              </div>
            </div>
          </div>;
      case 'portfolio-optimization':
        return <div className="space-y-6">
            <div className="bg-[#1A1F2E] p-6 rounded-xl">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Portfolio Optimization</h2>
                <button className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm">
                  Run Optimization
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-[#151822] p-5 rounded-lg">
                  <h3 className="font-medium mb-4">Current Allocation</h3>
                  <div className="relative h-40 mb-4">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-32 rounded-full border-4 border-gray-700 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-xs text-gray-400">Total</div>
                          <div className="font-medium">€24.4k</div>
                        </div>
                      </div>
                      {/* Pie chart segments */}
                      <svg className="absolute inset-0" viewBox="0 0 100 100">
                        <path d="M50,50 L50,0 A50,50 0 0,1 100,50 Z" fill="#3b82f6" />
                        <path d="M50,50 L100,50 A50,50 0 0,1 50,100 Z" fill="#10b981" />
                        <path d="M50,50 L50,100 A50,50 0 0,1 0,50 Z" fill="#eab308" />
                        <path d="M50,50 L0,50 A50,50 0 0,1 50,0 Z" fill="#8b5cf6" />
                      </svg>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                        <span>Stocks</span>
                      </div>
                      <span>45%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <span>Bonds</span>
                      </div>
                      <span>30%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <span>Real Estate</span>
                      </div>
                      <span>15%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                        <span>Alternatives</span>
                      </div>
                      <span>10%</span>
                    </div>
                  </div>
                </div>
                <div className="bg-[#151822] p-5 rounded-lg">
                  <h3 className="font-medium mb-4">Portfolio Metrics</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Expected Return</span>
                        <span className="text-green-500">7.2%</span>
                      </div>
                      <div className="w-full bg-[#0B0E15] rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full w-3/5"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Risk (Volatility)</span>
                        <span className="text-yellow-500">12.5%</span>
                      </div>
                      <div className="w-full bg-[#0B0E15] rounded-full h-2">
                        <div className="bg-yellow-500 h-2 rounded-full w-2/5"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Sharpe Ratio</span>
                        <span className="text-blue-500">0.58</span>
                      </div>
                      <div className="w-full bg-[#0B0E15] rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full w-3/5"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Diversification Score</span>
                        <span className="text-red-500">72%</span>
                      </div>
                      <div className="w-full bg-[#0B0E15] rounded-full h-2">
                        <div className="bg-red-500 h-2 rounded-full w-7/10"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#151822] p-5 rounded-lg">
                  <h3 className="font-medium mb-4">Optimization Parameters</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm text-gray-400 mb-2 block">
                        Optimization Goal
                      </label>
                      <select className="w-full bg-[#0B0E15] rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500">
                        <option>Maximize Return</option>
                        <option>Minimize Risk</option>
                        <option>Maximize Sharpe Ratio</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm text-gray-400 mb-2 block">
                        Risk Tolerance
                      </label>
                      <div className="flex items-center gap-2">
                        <span className="text-xs">Low</span>
                        <input type="range" min="1" max="10" defaultValue="6" className="w-full" />
                        <span className="text-xs">High</span>
                      </div>
                    </div>
                    <div>
                      <label className="text-sm text-gray-400 mb-2 block">
                        Time Horizon
                      </label>
                      <select className="w-full bg-[#0B0E15] rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500">
                        <option>Short-term (1-3 years)</option>
                        <option>Medium-term (4-7 years)</option>
                        <option selected>Long-term (8+ years)</option>
                      </select>
                    </div>
                    <div className="pt-2">
                      <button className="w-full bg-red-500 text-white py-2 rounded-lg text-sm font-medium">
                        Run Optimization
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#1A1F2E] p-6 rounded-xl">
              <h2 className="text-xl font-bold mb-4">Optimization Results</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#151822] p-5 rounded-lg">
                  <h3 className="font-medium mb-4">Optimized Allocation</h3>
                  <div className="relative h-40 mb-4">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-32 rounded-full border-4 border-red-500/30 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-xs text-gray-400">Total</div>
                          <div className="font-medium">€24.4k</div>
                        </div>
                      </div>
                      {/* Pie chart segments - optimized */}
                      <svg className="absolute inset-0" viewBox="0 0 100 100">
                        <path d="M50,50 L50,0 A50,50 0 0,1 85,15 Z" fill="#3b82f6" />
                        <path d="M50,50 L85,15 A50,50 0 0,1 100,50 Z" fill="#10b981" />
                        <path d="M50,50 L100,50 A50,50 0 0,1 85,85 Z" fill="#eab308" />
                        <path d="M50,50 L85,85 A50,50 0 0,1 15,85 Z" fill="#8b5cf6" />
                        <path d="M50,50 L15,85 A50,50 0 0,1 15,15 Z" fill="#ec4899" />
                        <path d="M50,50 L15,15 A50,50 0 0,1 50,0 Z" fill="#06b6d4" />
                      </svg>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                        <span>US Large Cap</span>
                      </div>
                      <span className="text-red-500">35%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <span>Int'l Developed</span>
                      </div>
                      <span className="text-red-500">15%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <span>US Bonds</span>
                      </div>
                      <span className="text-red-500">25%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                        <span>REITs</span>
                      </div>
                      <span className="text-red-500">10%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-pink-500"></div>
                        <span>Emerging Markets</span>
                      </div>
                      <span className="text-red-500">10%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-cyan-500"></div>
                        <span>Commodities</span>
                      </div>
                      <span className="text-red-500">5%</span>
                    </div>
                  </div>
                </div>
                <div className="bg-[#151822] p-5 rounded-lg">
                  <h3 className="font-medium mb-4">Performance Improvement</h3>
                  <div className="space-y-4 mb-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Expected Return</span>
                        <div>
                          <span className="text-gray-400">7.2%</span>
                          <span className="text-green-500 ml-2">→ 8.1%</span>
                        </div>
                      </div>
                      <div className="w-full bg-[#0B0E15] rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full w-4/5"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Risk (Volatility)</span>
                        <div>
                          <span className="text-gray-400">12.5%</span>
                          <span className="text-green-500 ml-2">→ 11.8%</span>
                        </div>
                      </div>
                      <div className="w-full bg-[#0B0E15] rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full w-3/5"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Sharpe Ratio</span>
                        <div>
                          <span className="text-gray-400">0.58</span>
                          <span className="text-green-500 ml-2">→ 0.69</span>
                        </div>
                      </div>
                      <div className="w-full bg-[#0B0E15] rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full w-7/10"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Diversification Score</span>
                        <div>
                          <span className="text-gray-400">72%</span>
                          <span className="text-green-500 ml-2">→ 86%</span>
                        </div>
                      </div>
                      <div className="w-full bg-[#0B0E15] rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full w-9/10"></div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-red-500/10 p-3 rounded-lg border border-red-500/30">
                    <div className="flex items-start gap-2">
                      <InfoIcon className="h-5 w-5 text-red-500 mt-0.5" />
                      <div>
                        <p className="text-sm mb-2">
                          <span className="font-medium text-red-500">
                            AI Insight:
                          </span>{' '}
                          This optimization increases expected returns while
                          reducing volatility through better diversification
                          across asset classes and regions.
                        </p>
                        <div className="flex gap-2">
                          <button className="text-xs bg-red-500 text-white px-3 py-1 rounded-lg">
                            Apply Changes
                          </button>
                          <button className="text-xs bg-[#0B0E15] text-gray-300 px-3 py-1 rounded-lg">
                            Modify Settings
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>;
      case 'sentiment-analysis':
        return <div className="space-y-6">
            <div className="bg-[#1A1F2E] p-6 rounded-xl">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Market Sentiment Analysis</h2>
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm">
                  Refresh Analysis
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-[#151822] p-5 rounded-lg">
                  <h3 className="text-sm font-medium mb-3 text-gray-400">
                    Overall Market Sentiment
                  </h3>
                  <div className="flex items-center justify-center mb-3">
                    <div className="w-32 h-32 rounded-full border-4 border-green-500 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-green-500">
                          72
                        </div>
                        <div className="text-xs text-gray-400">Bullish</div>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400 text-center">
                    Market sentiment is moderately bullish, indicating positive investor confidence.
                  </p>
                </div>
                <div className="bg-[#151822] p-5 rounded-lg">
                  <h3 className="text-sm font-medium mb-3 text-gray-400">
                    Sentiment Breakdown
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Social Media</span>
                        <span className="text-green-500">Bullish</span>
                      </div>
                      <div className="w-full bg-[#0B0E15] rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full w-4/5"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>News Sentiment</span>
                        <span className="text-yellow-500">Neutral</span>
                      </div>
                      <div className="w-full bg-[#0B0E15] rounded-full h-2">
                        <div className="bg-yellow-500 h-2 rounded-full w-3/5"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Analyst Ratings</span>
                        <span className="text-green-500">Bullish</span>
                      </div>
                      <div className="w-full bg-[#0B0E15] rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full w-7/10"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Institutional Flow</span>
                        <span className="text-blue-500">Positive</span>
                      </div>
                      <div className="w-full bg-[#0B0E15] rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full w-6/10"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#151822] p-5 rounded-lg">
                  <h3 className="text-sm font-medium mb-3 text-gray-400">
                    Key Insights
                  </h3>
                  <div className="space-y-3">
                    <div className="bg-[#0B0E15] p-3 rounded-lg border-l-4 border-green-500">
                      <div className="flex items-center gap-2">
                        <TrendingUpIcon className="h-4 w-4 text-green-500" />
                        <h4 className="text-sm font-medium">
                          Tech Sector Momentum
                        </h4>
                      </div>
                      <p className="text-xs text-gray-400 mt-1">
                        Strong positive sentiment in technology stocks.
                      </p>
                    </div>
                    <div className="bg-[#0B0E15] p-3 rounded-lg border-l-4 border-yellow-500">
                      <div className="flex items-center gap-2">
                        <AlertTriangleIcon className="h-4 w-4 text-yellow-500" />
                        <h4 className="text-sm font-medium">
                          Energy Sector Caution
                        </h4>
                      </div>
                      <p className="text-xs text-gray-400 mt-1">
                        Mixed sentiment in energy sector due to oil price volatility.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#1A1F2E] p-6 rounded-xl">
              <h2 className="text-xl font-bold mb-4">Sentiment by Sector</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-[#151822] p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium text-sm">Technology</h3>
                    <div className="bg-green-500/10 px-2 py-1 rounded text-xs text-green-500">
                      Bullish
                    </div>
                  </div>
                  <div className="w-full bg-[#0B0E15] rounded-full h-2 mb-2">
                    <div className="bg-green-500 h-2 rounded-full w-8/10"></div>
                  </div>
                  <p className="text-xs text-gray-400">85% positive sentiment</p>
                </div>
                <div className="bg-[#151822] p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium text-sm">Healthcare</h3>
                    <div className="bg-blue-500/10 px-2 py-1 rounded text-xs text-blue-500">
                      Positive
                    </div>
                  </div>
                  <div className="w-full bg-[#0B0E15] rounded-full h-2 mb-2">
                    <div className="bg-blue-500 h-2 rounded-full w-6/10"></div>
                  </div>
                  <p className="text-xs text-gray-400">62% positive sentiment</p>
                </div>
                <div className="bg-[#151822] p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium text-sm">Financial</h3>
                    <div className="bg-yellow-500/10 px-2 py-1 rounded text-xs text-yellow-500">
                      Neutral
                    </div>
                  </div>
                  <div className="w-full bg-[#0B0E15] rounded-full h-2 mb-2">
                    <div className="bg-yellow-500 h-2 rounded-full w-5/10"></div>
                  </div>
                  <p className="text-xs text-gray-400">48% positive sentiment</p>
                </div>
                <div className="bg-[#151822] p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium text-sm">Energy</h3>
                    <div className="bg-red-500/10 px-2 py-1 rounded text-xs text-red-500">
                      Bearish
                    </div>
                  </div>
                  <div className="w-full bg-[#0B0E15] rounded-full h-2 mb-2">
                    <div className="bg-red-500 h-2 rounded-full w-3/10"></div>
                  </div>
                  <p className="text-xs text-gray-400">32% positive sentiment</p>
                </div>
              </div>
            </div>
            <div className="bg-[#1A1F2E] p-6 rounded-xl">
              <h2 className="text-xl font-bold mb-4">AI-Powered Sentiment Insights</h2>
              <div className="bg-[#151822] p-5 rounded-lg border border-green-500/20">
                <div className="flex items-start gap-3 mb-4">
                  <div className="bg-green-500/10 p-2 rounded-full mt-1">
                    <BrainIcon className="h-5 w-5 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">
                      Market Sentiment Analysis
                    </h3>
                    <p className="text-sm text-gray-400">
                      Based on our AI analysis of social media, news articles, and analyst reports, 
                      the overall market sentiment is moderately bullish. Technology and healthcare 
                      sectors show strong positive sentiment, while energy sector sentiment remains 
                      cautious due to oil price volatility. Consider maintaining exposure to tech 
                      and healthcare while being selective with energy investments.
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <button className="bg-green-500 text-white px-3 py-1 rounded-lg text-sm">
                    Apply to Portfolio
                  </button>
                  <button className="bg-[#0B0E15] text-gray-300 px-3 py-1 rounded-lg text-sm">
                    View Detailed Report
                  </button>
                </div>
              </div>
            </div>
          </div>;
      case 'risk-assessment':
        return <div className="space-y-6">
            <div className="bg-[#1A1F2E] p-6 rounded-xl">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Portfolio Risk Assessment</h2>
                <button className="bg-yellow-500 text-black px-4 py-2 rounded-lg text-sm">
                  Run Analysis
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-[#151822] p-5 rounded-lg">
                  <h3 className="text-sm font-medium mb-3 text-gray-400">
                    Overall Risk Score
                  </h3>
                  <div className="flex items-center justify-center mb-3">
                    <div className="w-32 h-32 rounded-full border-4 border-yellow-500 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-yellow-500">
                          58
                        </div>
                        <div className="text-xs text-gray-400">Moderate</div>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400 text-center">
                    Your portfolio has a moderate risk level, aligned with your
                    stated risk tolerance.
                  </p>
                </div>
                <div className="bg-[#151822] p-5 rounded-lg">
                  <h3 className="text-sm font-medium mb-3 text-gray-400">
                    Risk Breakdown
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Market Risk</span>
                        <span className="text-yellow-500">Medium</span>
                      </div>
                      <div className="w-full bg-[#0B0E15] rounded-full h-2">
                        <div className="bg-yellow-500 h-2 rounded-full w-3/5"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Concentration Risk</span>
                        <span className="text-red-500">High</span>
                      </div>
                      <div className="w-full bg-[#0B0E15] rounded-full h-2">
                        <div className="bg-red-500 h-2 rounded-full w-4/5"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Liquidity Risk</span>
                        <span className="text-green-500">Low</span>
                      </div>
                      <div className="w-full bg-[#0B0E15] rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full w-1/5"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Currency Risk</span>
                        <span className="text-yellow-500">Medium</span>
                      </div>
                      <div className="w-full bg-[#0B0E15] rounded-full h-2">
                        <div className="bg-yellow-500 h-2 rounded-full w-2/5"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#151822] p-5 rounded-lg">
                  <h3 className="text-sm font-medium mb-3 text-gray-400">
                    Risk Alerts
                  </h3>
                  <div className="space-y-3">
                    <div className="bg-[#0B0E15] p-3 rounded-lg border-l-4 border-red-500">
                      <div className="flex items-center gap-2">
                        <AlertTriangleIcon className="h-4 w-4 text-red-500" />
                        <h4 className="text-sm font-medium">
                          High Tech Exposure
                        </h4>
                      </div>
                      <p className="text-xs text-gray-400 mt-1">
                        Tech sector exposure at 32% creates concentration risk.
                      </p>
                    </div>
                    <div className="bg-[#0B0E15] p-3 rounded-lg border-l-4 border-yellow-500">
                      <div className="flex items-center gap-2">
                        <AlertTriangleIcon className="h-4 w-4 text-yellow-500" />
                        <h4 className="text-sm font-medium">
                          Interest Rate Sensitivity
                        </h4>
                      </div>
                      <p className="text-xs text-gray-400 mt-1">
                        Bond portfolio duration may impact returns in rising
                        rate environment.
                      </p>
                    </div>
                    <div className="bg-[#0B0E15] p-3 rounded-lg border-l-4 border-green-500">
                      <div className="flex items-center gap-2">
                        <CheckCircleIcon className="h-4 w-4 text-green-500" />
                        <h4 className="text-sm font-medium">
                          Diversification Strength
                        </h4>
                      </div>
                      <p className="text-xs text-gray-400 mt-1">
                        Geographic diversification is well-balanced across
                        regions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#1A1F2E] p-6 rounded-xl">
              <h2 className="text-xl font-bold mb-4">
                Market Stress Test Scenarios
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-gray-400 text-sm border-b border-gray-800">
                      <th className="pb-3 font-medium">Scenario</th>
                      <th className="pb-3 font-medium">Probability</th>
                      <th className="pb-3 font-medium">Impact</th>
                      <th className="pb-3 font-medium">Portfolio Loss</th>
                      <th className="pb-3 font-medium">Recovery Time</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800">
                    <tr className="text-sm">
                      <td className="py-3">Market Correction (-10%)</td>
                      <td className="py-3">High</td>
                      <td className="py-3">
                        <span className="text-yellow-500">Moderate</span>
                      </td>
                      <td className="py-3">-7.2%</td>
                      <td className="py-3">3-5 months</td>
                    </tr>
                    <tr className="text-sm">
                      <td className="py-3">Interest Rate Hike (+1%)</td>
                      <td className="py-3">Medium</td>
                      <td className="py-3">
                        <span className="text-yellow-500">Moderate</span>
                      </td>
                      <td className="py-3">-5.8%</td>
                      <td className="py-3">4-6 months</td>
                    </tr>
                    <tr className="text-sm">
                      <td className="py-3">Tech Sector Crash (-25%)</td>
                      <td className="py-3">Low</td>
                      <td className="py-3">
                        <span className="text-red-500">Severe</span>
                      </td>
                      <td className="py-3">-14.3%</td>
                      <td className="py-3">12-18 months</td>
                    </tr>
                    <tr className="text-sm">
                      <td className="py-3">Global Recession</td>
                      <td className="py-3">Low</td>
                      <td className="py-3">
                        <span className="text-red-500">Severe</span>
                      </td>
                      <td className="py-3">-22.6%</td>
                      <td className="py-3">18-24 months</td>
                    </tr>
                    <tr className="text-sm">
                      <td className="py-3">Inflation Surge (+4%)</td>
                      <td className="py-3">Medium</td>
                      <td className="py-3">
                        <span className="text-yellow-500">Moderate</span>
                      </td>
                      <td className="py-3">-8.7%</td>
                      <td className="py-3">8-12 months</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="bg-[#1A1F2E] p-6 rounded-xl">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">
                  Risk Mitigation Recommendations
                </h2>
                <button className="bg-yellow-500 text-black px-4 py-1 rounded-lg text-sm">
                  Apply All Suggestions
                </button>
              </div>
              <div className="space-y-4">
                <div className="bg-[#151822] p-4 rounded-lg">
                  <div className="flex justify-between items-start">
                    <div className="flex items-start gap-3">
                      <div className="bg-red-500/10 p-2 rounded-full mt-1">
                        <AlertTriangleIcon className="h-5 w-5 text-red-500" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">
                          Reduce Tech Concentration
                        </h4>
                        <p className="text-sm text-gray-400 mb-3">
                          Your technology sector exposure (32%) is significantly
                          higher than recommended (20-25%) for your risk
                          profile. Consider diversifying into other sectors.
                        </p>
                        <div className="grid grid-cols-2 gap-3 mb-3">
                          <div>
                            <div className="text-xs text-gray-400 mb-1">
                              Current Tech Allocation
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="flex-1 h-2 bg-[#0B0E15] rounded-full overflow-hidden">
                                <div className="bg-red-500 h-full w-4/5"></div>
                              </div>
                              <span className="text-xs">32%</span>
                            </div>
                          </div>
                          <div>
                            <div className="text-xs text-gray-400 mb-1">
                              Recommended Allocation
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="flex-1 h-2 bg-[#0B0E15] rounded-full overflow-hidden">
                                <div className="bg-green-500 h-full w-3/5"></div>
                              </div>
                              <span className="text-xs">22%</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <button className="bg-yellow-500 text-black px-3 py-1 rounded-lg text-xs">
                            Apply Recommendation
                          </button>
                          <button className="bg-[#0B0E15] text-gray-300 px-3 py-1 rounded-lg text-xs">
                            View Details
                          </button>
                          <button className="bg-[#0B0E15] text-gray-300 px-3 py-1 rounded-lg text-xs">
                            Dismiss
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#151822] p-4 rounded-lg">
                  <div className="flex justify-between items-start">
                    <div className="flex items-start gap-3">
                      <div className="bg-yellow-500/10 p-2 rounded-full mt-1">
                        <AlertTriangleIcon className="h-5 w-5 text-yellow-500" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">
                          Adjust Bond Duration
                        </h4>
                        <p className="text-sm text-gray-400 mb-3">
                          Your bond portfolio has an average duration of 8.2
                          years, making it susceptible to interest rate
                          increases. Consider shifting 40% to shorter-duration
                          bonds.
                        </p>
                        <div className="grid grid-cols-2 gap-3 mb-3">
                          <div>
                            <div className="text-xs text-gray-400 mb-1">
                              Current Avg. Duration
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="flex-1 h-2 bg-[#0B0E15] rounded-full overflow-hidden">
                                <div className="bg-yellow-500 h-full w-4/5"></div>
                              </div>
                              <span className="text-xs">8.2 yrs</span>
                            </div>
                          </div>
                          <div>
                            <div className="text-xs text-gray-400 mb-1">
                              Recommended Duration
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="flex-1 h-2 bg-[#0B0E15] rounded-full overflow-hidden">
                                <div className="bg-green-500 h-full w-3/5"></div>
                              </div>
                              <span className="text-xs">5.5 yrs</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <button className="bg-yellow-500 text-black px-3 py-1 rounded-lg text-xs">
                            Apply Recommendation
                          </button>
                          <button className="bg-[#0B0E15] text-gray-300 px-3 py-1 rounded-lg text-xs">
                            View Details
                          </button>
                          <button className="bg-[#0B0E15] text-gray-300 px-3 py-1 rounded-lg text-xs">
                            Dismiss
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>;
      case 'backtesting-module':
        return <div className="space-y-6">
            <div className="bg-[#1A1F2E] p-6 rounded-xl">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Strategy Backtesting</h2>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm">
                  Run Backtest
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#151822] p-5 rounded-lg">
                  <h3 className="font-medium mb-4">Strategy Configuration</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm text-gray-400 mb-2 block">
                        Strategy Type
                      </label>
                      <select className="w-full bg-[#0B0E15] rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>Asset Allocation</option>
                        <option>Moving Average Crossover</option>
                        <option>Value Investing</option>
                        <option>Momentum</option>
                        <option>Dividend Growth</option>
                        <option>Custom Strategy</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm text-gray-400 mb-2 block">
                        Time Period
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="text-xs text-gray-500 mb-1 block">
                            Start Date
                          </label>
                          <input type="date" className="w-full bg-[#0B0E15] rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" defaultValue="2010-01-01" />
                        </div>
                        <div>
                          <label className="text-xs text-gray-500 mb-1 block">
                            End Date
                          </label>
                          <input type="date" className="w-full bg-[#0B0E15] rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" defaultValue="2023-01-01" />
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="text-sm text-gray-400 mb-2 block">
                        Asset Classes
                      </label>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <input type="checkbox" id="stocks" checked className="mr-2" />
                          <label htmlFor="stocks" className="text-sm">
                            Stocks
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" id="bonds" checked className="mr-2" />
                          <label htmlFor="bonds" className="text-sm">
                            Bonds
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" id="realestate" checked className="mr-2" />
                          <label htmlFor="realestate" className="text-sm">
                            Real Estate
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" id="commodities" className="mr-2" />
                          <label htmlFor="commodities" className="text-sm">
                            Commodities
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" id="crypto" className="mr-2" />
                          <label htmlFor="crypto" className="text-sm">
                            Cryptocurrencies
                          </label>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="text-sm text-gray-400 mb-2 block">
                        Advanced Settings
                      </label>
                      <div className="flex items-center mb-2">
                        <input type="checkbox" id="rebalance" checked className="mr-2" />
                        <label htmlFor="rebalance" className="text-sm">
                          Periodic Rebalancing
                        </label>
                      </div>
                      <select className="w-full bg-[#0B0E15] rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>Monthly</option>
                        <option>Quarterly</option>
                        <option selected>Annually</option>
                        <option>Custom</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="bg-[#151822] p-5 rounded-lg">
                  <h3 className="font-medium mb-4">Portfolio Allocation</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>US Stocks</span>
                        <span>40%</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <input type="range" min="0" max="100" defaultValue="40" className="w-full" />
                        <input type="number" className="w-16 bg-[#0B0E15] rounded p-1 text-sm text-center" defaultValue="40" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>International Stocks</span>
                        <span>20%</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <input type="range" min="0" max="100" defaultValue="20" className="w-full" />
                        <input type="number" className="w-16 bg-[#0B0E15] rounded p-1 text-sm text-center" defaultValue="20" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>US Bonds</span>
                        <span>25%</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <input type="range" min="0" max="100" defaultValue="25" className="w-full" />
                        <input type="number" className="w-16 bg-[#0B0E15] rounded p-1 text-sm text-center" defaultValue="25" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Real Estate</span>
                        <span>15%</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <input type="range" min="0" max="100" defaultValue="15" className="w-full" />
                        <input type="number" className="w-16 bg-[#0B0E15] rounded p-1 text-sm text-center" defaultValue="15" />
                      </div>
                    </div>
                    <div className="pt-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">
                          Total Allocation
                        </span>
                        <span className="text-sm font-medium text-blue-500">
                          100%
                        </span>
                      </div>
                      <div className="w-full bg-[#0B0E15] rounded-full h-2 mt-2">
                        <div className="bg-blue-500 h-2 rounded-full w-full"></div>
                      </div>
                    </div>
                    <div className="pt-2">
                      <button className="w-full bg-blue-500 text-white py-2 rounded-lg text-sm font-medium">
                        Run Backtest
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#1A1F2E] p-6 rounded-xl">
              <h2 className="text-xl font-bold mb-4">Backtest Results</h2>
              <div className="bg-[#151822] p-5 rounded-lg mb-6">
                <div className="h-80 relative">
                  {/* Placeholder for chart */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-full relative">
                      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-blue-500/10 to-transparent rounded-lg"></div>
                      <div className="absolute bottom-0 left-0 right-0 border-t-2 border-blue-500 border-dashed"></div>
                      {/* Chart lines */}
                      <svg className="w-full h-full" viewBox="0 0 1000 400" preserveAspectRatio="none">
                        {/* Strategy Line */}
                        <path d="M0,380 Q100,350 200,320 T400,250 T600,180 T800,120 T1000,80" fill="none" stroke="#3b82f6" strokeWidth="3" />
                        {/* Benchmark Line */}
                        <path d="M0,380 Q100,360 200,340 T400,300 T600,260 T800,220 T1000,180" fill="none" stroke="#6b7280" strokeWidth="3" strokeDasharray="5,5" />
                      </svg>
                      {/* Chart Legend */}
                      <div className="absolute top-4 right-4 bg-[#0B0E15]/80 p-3 rounded-lg backdrop-blur-sm">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                          <span className="text-sm">Your Strategy</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                          <span className="text-sm">S&P 500 Benchmark</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-[#151822] p-4 rounded-lg">
                  <h3 className="font-medium mb-3">Performance Summary</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Total Return</span>
                      <span className="text-green-500">187.4%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Annualized Return</span>
                      <span className="text-green-500">9.8%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Benchmark Return</span>
                      <span className="text-gray-300">142.1%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Alpha</span>
                      <span className="text-green-500">2.3%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Beta</span>
                      <span className="text-gray-300">0.85</span>
                    </div>
                  </div>
                </div>
                <div className="bg-[#151822] p-4 rounded-lg">
                  <h3 className="font-medium mb-3">Risk Metrics</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Volatility</span>
                      <span className="text-gray-300">12.4%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Sharpe Ratio</span>
                      <span className="text-green-500">0.78</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Max Drawdown</span>
                      <span className="text-red-500">-22.3%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Sortino Ratio</span>
                      <span className="text-green-500">1.12</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Information Ratio</span>
                      <span className="text-green-500">0.65</span>
                    </div>
                  </div>
                </div>
                <div className="bg-[#151822] p-4 rounded-lg">
                  <h3 className="font-medium mb-3">Best/Worst Periods</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="text-xs text-gray-400 mb-1">
                        Best Year
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">2019</span>
                        <span className="text-green-500 text-sm">+28.6%</span>
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 mb-1">
                        Worst Year
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">2022</span>
                        <span className="text-red-500 text-sm">-15.2%</span>
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 mb-1">
                        Best Quarter
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Q2 2020</span>
                        <span className="text-green-500 text-sm">+18.3%</span>
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 mb-1">
                        Worst Quarter
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Q1 2020</span>
                        <span className="text-red-500 text-sm">-19.6%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#151822] p-5 rounded-lg">
                <h3 className="font-medium mb-4">
                  AI Analysis & Recommendations
                </h3>
                <div className="bg-blue-500/10 p-4 rounded-lg border border-blue-500/30 mb-4">
                  <div className="flex items-start gap-2">
                    <BrainIcon className="h-5 w-5 text-blue-500 mt-0.5" />
                    <div>
                      <p className="text-sm mb-3">
                        <span className="font-medium text-blue-500">
                          Performance Analysis:
                        </span>{' '}
                        Your strategy outperformed the benchmark by 45.3% over
                        the test period, with lower volatility (12.4% vs. 15.7%
                        for the benchmark). The strategy showed resilience
                        during market downturns, particularly in 2020, where it
                        experienced a smaller drawdown than the overall market.
                      </p>
                      <p className="text-sm">
                        <span className="font-medium text-blue-500">
                          Key Insight:
                        </span>{' '}
                        The annual rebalancing frequency worked well during
                        stable market conditions but may have limited your
                        ability to capitalize on short-term opportunities during
                        volatile periods. Consider quarterly rebalancing to
                        potentially improve performance.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-[#0B0E15] p-3 rounded-lg">
                    <h4 className="text-sm font-medium mb-2 flex items-center">
                      <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2" />
                      What Worked Well
                    </h4>
                    <ul className="text-xs text-gray-400 space-y-2">
                      <li>
                        • Higher allocation to US stocks during the 2013-2019
                        bull market
                      </li>
                      <li>
                        • Inclusion of real estate provided diversification
                        benefits
                      </li>
                      <li>
                        • Annual rebalancing maintained target risk levels
                      </li>
                      <li>
                        • Lower volatility than benchmark (12.4% vs 15.7%)
                      </li>
                    </ul>
                  </div>
                  <div className="bg-[#0B0E15] p-3 rounded-lg">
                    <h4 className="text-sm font-medium mb-2 flex items-center">
                      <XCircleIcon className="h-4 w-4 text-red-500 mr-2" />
                      Areas for Improvement
                    </h4>
                    <ul className="text-xs text-gray-400 space-y-2">
                      <li>
                        • Underperformance during rapid recoveries (e.g., Q2
                        2020)
                      </li>
                      <li>
                        • Bond allocation may be too high for current rate
                        environment
                      </li>
                      <li>
                        • Limited exposure to emerging markets missed growth
                        opportunities
                      </li>
                      <li>
                        • Annual rebalancing may be too infrequent for optimal
                        results
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex justify-end mt-4">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm">
                    Save Backtest Results
                  </button>
                </div>
              </div>
            </div>
          </div>;
      case 'automated-alerts':
        return <div className="space-y-6">
            <div className="bg-[#1A1F2E] p-6 rounded-xl">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Alert Center</h2>
                <button className="bg-purple-500 text-white px-4 py-2 rounded-lg text-sm">
                  Create New Alert
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-[#151822] p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-medium">Active Alerts</h3>
                    <div className="bg-green-500/10 px-2 py-1 rounded text-xs text-green-500">
                      12 Active
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <BellIcon className="h-5 w-5 text-purple-500" />
                    <span className="text-sm">Monitoring your portfolio</span>
                  </div>
                </div>
                <div className="bg-[#151822] p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-medium">New Alerts</h3>
                    <div className="bg-red-500/10 px-2 py-1 rounded text-xs text-red-500">
                      3 New
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <BellRingIcon className="h-5 w-5 text-red-500" />
                    <span className="text-sm">Requires attention</span>
                  </div>
                </div>
                <div className="bg-[#151822] p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-medium">Triggered Today</h3>
                    <div className="bg-yellow-500/10 px-2 py-1 rounded text-xs text-yellow-500">
                      5 Today
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="h-5 w-5 text-yellow-500" />
                    <span className="text-sm">Market conditions changed</span>
                  </div>
                </div>
                <div className="bg-[#151822] p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-medium">Alert Channels</h3>
                    <div className="bg-blue-500/10 px-2 py-1 rounded text-xs text-blue-500">
                      3 Active
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      <MailIcon className="h-4 w-4 text-blue-500" />
                      <SlackIcon className="h-4 w-4 text-purple-500 -ml-1" />
                      <BellIcon className="h-4 w-4 text-green-500 -ml-1" />
                    </div>
                    <span className="text-sm">Email, Slack, Push</span>
                  </div>
                </div>
              </div>
              <div className="bg-[#151822] p-5 rounded-lg mb-6">
                <h3 className="font-medium mb-4">Recent Alerts</h3>
                <div className="space-y-3">
                  <div className="bg-red-500/10 p-4 rounded-lg border-l-4 border-red-500">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <AlertTriangleIcon className="h-4 w-4 text-red-500" />
                          <h4 className="font-medium">TSLA Price Drop Alert</h4>
                        </div>
                        <p className="text-sm text-gray-400 mb-2">
                          Tesla (TSLA) has dropped by 8.3% today, exceeding your
                          5% threshold.
                        </p>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <CalendarIcon className="h-3 w-3" />
                          <span>Today, 10:45 AM</span>
                        </div>
                      </div>
                      <div>
                        <button className="text-xs bg-[#0B0E15] hover:bg-[#262B3D] px-2 py-1 rounded transition-colors">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-yellow-500/10 p-4 rounded-lg border-l-4 border-yellow-500">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <AlertTriangleIcon className="h-4 w-4 text-yellow-500" />
                          <h4 className="font-medium">Portfolio Drift Alert</h4>
                        </div>
                        <p className="text-sm text-gray-400 mb-2">
                          Your portfolio has drifted 7.2% from your target
                          allocation, exceeding the 5% threshold.
                        </p>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <CalendarIcon className="h-3 w-3" />
                          <span>Today, 9:30 AM</span>
                        </div>
                      </div>
                      <div>
                        <button className="text-xs bg-[#0B0E15] hover:bg-[#262B3D] px-2 py-1 rounded transition-colors">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-green-500/10 p-4 rounded-lg border-l-4 border-green-500">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <CheckCircleIcon className="h-4 w-4 text-green-500" />
                          <h4 className="font-medium">Buy Opportunity Alert</h4>
                        </div>
                        <p className="text-sm text-gray-400 mb-2">
                          NVDA has reached your target buy price of $750.00.
                          Consider executing your buy order.
                        </p>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <CalendarIcon className="h-3 w-3" />
                          <span>Today, 11:15 AM</span>
                        </div>
                      </div>
                      <div>
                        <button className="text-xs bg-[#0B0E15] hover:bg-[#262B3D] px-2 py-1 rounded transition-colors">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-blue-500/10 p-4 rounded-lg border-l-4 border-blue-500">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <InfoIcon className="h-4 w-4 text-blue-500" />
                          <h4 className="font-medium">Market Event Alert</h4>
                        </div>
                        <p className="text-sm text-gray-400 mb-2">
                          Fed announcement scheduled for today at 2:00 PM.
                          Expected volatility in rate-sensitive assets.
                        </p>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <CalendarIcon className="h-3 w-3" />
                          <span>Today, 8:00 AM</span>
                        </div>
                      </div>
                      <div>
                        <button className="text-xs bg-[#0B0E15] hover:bg-[#262B3D] px-2 py-1 rounded transition-colors">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#151822] p-5 rounded-lg">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-medium">Your Alert Rules</h3>
                  <button className="bg-purple-500 text-white px-3 py-1 rounded-lg text-xs">
                    Add Rule
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="text-left text-gray-400 text-sm border-b border-gray-800">
                        <th className="pb-3 font-medium">Alert Type</th>
                        <th className="pb-3 font-medium">Condition</th>
                        <th className="pb-3 font-medium">Asset/Metric</th>
                        <th className="pb-3 font-medium">Threshold</th>
                        <th className="pb-3 font-medium">Status</th>
                        <th className="pb-3 font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800">
                      <tr className="text-sm">
                        <td className="py-3">Price Alert</td>
                        <td className="py-3">Below</td>
                        <td className="py-3">AAPL</td>
                        <td className="py-3">$170.00</td>
                        <td className="py-3">
                          <span className="bg-green-500/10 text-green-500 text-xs px-2 py-1 rounded-full">
                            Active
                          </span>
                        </td>
                        <td className="py-3 flex gap-2">
                          <button className="text-xs bg-[#0B0E15] hover:bg-[#262B3D] px-2 py-1 rounded transition-colors">
                            Edit
                          </button>
                          <button className="text-xs bg-[#0B0E15] hover:bg-[#262B3D] px-2 py-1 rounded transition-colors">
                            Delete
                          </button>
                        </td>
                      </tr>
                      <tr className="text-sm">
                        <td className="py-3">Portfolio Drift</td>
                        <td className="py-3">Exceeds</td>
                        <td className="py-3">All Assets</td>
                        <td className="py-3">5%</td>
                        <td className="py-3">
                          <span className="bg-red-500/10 text-red-500 text-xs px-2 py-1 rounded-full">
                            Triggered
                          </span>
                        </td>
                        <td className="py-3 flex gap-2">
                          <button className="text-xs bg-[#0B0E15] hover:bg-[#262B3D] px-2 py-1 rounded transition-colors">
                            Edit
                          </button>
                          <button className="text-xs bg-[#0B0E15] hover:bg-[#262B3D] px-2 py-1 rounded transition-colors">
                            Delete
                          </button>
                        </td>
                      </tr>
                      <tr className="text-sm">
                        <td className="py-3">Volatility</td>
                        <td className="py-3">Above</td>
                        <td className="py-3">VIX</td>
                        <td className="py-3">30</td>
                        <td className="py-3">
                          <span className="bg-green-500/10 text-green-500 text-xs px-2 py-1 rounded-full">
                            Active
                          </span>
                        </td>
                        <td className="py-3 flex gap-2">
                          <button className="text-xs bg-[#0B0E15] hover:bg-[#262B3D] px-2 py-1 rounded transition-colors">
                            Edit
                          </button>
                          <button className="text-xs bg-[#0B0E15] hover:bg-[#262B3D] px-2 py-1 rounded transition-colors">
                            Delete
                          </button>
                        </td>
                      </tr>
                      <tr className="text-sm">
                        <td className="py-3">News</td>
                        <td className="py-3">Contains</td>
                        <td className="py-3">NVDA</td>
                        <td className="py-3">"earnings"</td>
                        <td className="py-3">
                          <span className="bg-green-500/10 text-green-500 text-xs px-2 py-1 rounded-full">
                            Active
                          </span>
                        </td>
                        <td className="py-3 flex gap-2">
                          <button className="text-xs bg-[#0B0E15] hover:bg-[#262B3D] px-2 py-1 rounded transition-colors">
                            Edit
                          </button>
                          <button className="text-xs bg-[#0B0E15] hover:bg-[#262B3D] px-2 py-1 rounded transition-colors">
                            Delete
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="bg-[#1A1F2E] p-6 rounded-xl">
              <h2 className="text-xl font-bold mb-4">Alert Settings</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#151822] p-5 rounded-lg">
                  <h3 className="font-medium mb-4">Notification Channels</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="bg-blue-500/10 p-2 rounded-full">
                          <MailIcon className="h-5 w-5 text-blue-500" />
                        </div>
                        <div>
                          <div className="font-medium">Email</div>
                          <div className="text-xs text-gray-400">
                            user@example.com
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="text-xs bg-[#0B0E15] hover:bg-[#262B3D] px-2 py-1 rounded transition-colors">
                          Edit
                        </button>
                        <div className="w-10 h-5 bg-purple-500/20 rounded-full relative">
                          <div className="w-4 h-4 bg-purple-500 rounded-full absolute right-0.5 top-0.5"></div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="bg-purple-500/10 p-2 rounded-full">
                          <SlackIcon className="h-5 w-5 text-purple-500" />
                        </div>
                        <div>
                          <div className="font-medium">Slack</div>
                          <div className="text-xs text-gray-400">
                            Connected to #investing
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="text-xs bg-[#0B0E15] hover:bg-[#262B3D] px-2 py-1 rounded transition-colors">
                          Edit
                        </button>
                        <div className="w-10 h-5 bg-purple-500/20 rounded-full relative">
                          <div className="w-4 h-4 bg-purple-500 rounded-full absolute right-0.5 top-0.5"></div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="bg-green-500/10 p-2 rounded-full">
                          <BellIcon className="h-5 w-5 text-green-500" />
                        </div>
                        <div>
                          <div className="font-medium">Push Notifications</div>
                          <div className="text-xs text-gray-400">
                            2 devices connected
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="text-xs bg-[#0B0E15] hover:bg-[#262B3D] px-2 py-1 rounded transition-colors">
                          Edit
                        </button>
                        <div className="w-10 h-5 bg-purple-500/20 rounded-full relative">
                          <div className="w-4 h-4 bg-purple-500 rounded-full absolute right-0.5 top-0.5"></div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="bg-gray-500/10 p-2 rounded-full">
                          <MessageCircleIcon className="h-5 w-5 text-gray-500" />
                        </div>
                        <div>
                          <div className="font-medium">SMS</div>
                          <div className="text-xs text-gray-400">
                            Not configured
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="text-xs bg-purple-500 text-white px-2 py-1 rounded transition-colors">
                          Setup
                        </button>
                        <div className="w-10 h-5 bg-gray-700 rounded-full relative">
                          <div className="w-4 h-4 bg-gray-500 rounded-full absolute left-0.5 top-0.5"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#151822] p-5 rounded-lg">
                  <h3 className="font-medium mb-4">Alert Preferences</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm text-gray-400 mb-2 block">
                        Alert Frequency
                      </label>
                      <select className="w-full bg-[#0B0E15] rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500">
                        <option>Real-time (Immediate)</option>
                        <option>Hourly Digest</option>
                        <option>Daily Digest</option>
                        <option>Weekly Digest</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm text-gray-400 mb-2 block">
                        Quiet Hours
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="text-xs text-gray-500 mb-1 block">
                            From
                          </label>
                          <input type="time" className="w-full bg-[#0B0E15] rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" defaultValue="22:00" />
                        </div>
                        <div>
                          <label className="text-xs text-gray-500 mb-1 block">
                            To
                          </label>
                          <input type="time" className="w-full bg-[#0B0E15] rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" defaultValue="07:00" />
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-gray-400 mb-1 block">
                        Alert Categories
                      </label>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Price Alerts</span>
                        <div className="w-10 h-5 bg-purple-500/20 rounded-full relative">
                          <div className="w-4 h-4 bg-purple-500 rounded-full absolute right-0.5 top-0.5"></div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Portfolio Alerts</span>
                        <div className="w-10 h-5 bg-purple-500/20 rounded-full relative">
                          <div className="w-4 h-4 bg-purple-500 rounded-full absolute right-0.5 top-0.5"></div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Market News</span>
                        <div className="w-10 h-5 bg-purple-500/20 rounded-full relative">
                          <div className="w-4 h-4 bg-purple-500 rounded-full absolute right-0.5 top-0.5"></div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Technical Indicators</span>
                        <div className="w-10 h-5 bg-gray-700 rounded-full relative">
                          <div className="w-4 h-4 bg-gray-500 rounded-full absolute left-0.5 top-0.5"></div>
                        </div>
                      </div>
                    </div>
                    <div className="pt-2">
                      <button className="w-full bg-purple-500 text-white py-2 rounded-lg text-sm font-medium">
                        Save Preferences
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>;
      default:
        return <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <div className="bg-[#1A1F2E] p-6 rounded-lg inline-block mb-4">
                {getToolIcon(toolId || '')}
              </div>
              <h2 className="text-xl font-bold mb-2">
                {getToolName(toolId || '')}
              </h2>
              <p className="text-gray-400">
                This tool is available with your Metal plan. Click the button
                below to start using it.
              </p>
              <button className="mt-4 bg-yellow-500 text-black px-6 py-2 rounded-lg font-medium">
                Launch Tool
              </button>
            </div>
          </div>;
    }
  };
  return <div className="space-y-6">
      <div className="bg-[#151822] p-6 rounded-xl">
        <div className="flex items-center gap-3 mb-4">
          <Link to="/dashboard/tools" className="text-gray-400 hover:text-white">
            <ArrowRightIcon className="h-5 w-5 transform rotate-180" />
          </Link>
          <div className="bg-[#1A1F2E] p-2 rounded-lg">
            {getToolIcon(toolId || '')}
          </div>
          <h1 className="text-xl font-bold">{getToolName(toolId || '')}</h1>
        </div>
        {renderToolContent()}
      </div>
    </div>;
};