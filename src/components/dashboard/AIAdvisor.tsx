import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BrainIcon, BarChart2Icon, ShieldIcon, TargetIcon, RefreshCwIcon, TrendingUpIcon, ArrowRightIcon, AlertTriangleIcon, LineChartIcon, PieChartIcon, UserIcon, MessageSquareIcon, SettingsIcon, CheckCircleIcon, XCircleIcon, MicIcon, SendIcon, ThumbsUpIcon, ThumbsDownIcon, InfoIcon, MinusIcon, PlusIcon, SparklesIcon } from 'lucide-react';
export const AIAdvisor = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [chatExpanded, setChatExpanded] = useState(false);
  const [selectedGoal, setSelectedGoal] = useState('retirement');
  const navigate = useNavigate();
  return <div className="space-y-6">
      {/* Header */}
      <div className="bg-[#151822] p-6 rounded-xl">
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-yellow-500/20 p-3 rounded-full">
              <BrainIcon className="h-6 w-6 text-yellow-500" />
            </div>
            <div>
              <h1 className="text-xl font-bold">AI Advisor</h1>
              <p className="text-gray-400 text-sm">
                Personalized financial guidance
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <button className={`px-3 py-1 rounded-lg text-sm ${activeTab === 'overview' ? 'bg-yellow-500 text-black' : 'bg-[#1A1F2E] text-gray-300 hover:bg-[#262B3D]'}`} onClick={() => setActiveTab('overview')}>
              Overview
            </button>
            <button className={`px-3 py-1 rounded-lg text-sm ${activeTab === 'goals' ? 'bg-yellow-500 text-black' : 'bg-[#1A1F2E] text-gray-300 hover:bg-[#262B3D]'}`} onClick={() => setActiveTab('goals')}>
              Goals
            </button>
            <button className={`px-3 py-1 rounded-lg text-sm ${activeTab === 'insights' ? 'bg-yellow-500 text-black' : 'bg-[#1A1F2E] text-gray-300 hover:bg-[#262B3D]'}`} onClick={() => setActiveTab('insights')}>
              Insights
            </button>
            <button className={`px-3 py-1 rounded-lg text-sm ${activeTab === 'risk' ? 'bg-yellow-500 text-black' : 'bg-[#1A1F2E] text-gray-300 hover:bg-[#262B3D]'}`} onClick={() => setActiveTab('risk')}>
              Risk Analysis
            </button>
          </div>
        </div>
      </div>
      {activeTab === 'overview' && <>
          {/* AI Summary */}
          <div className="bg-[#151822] p-6 rounded-xl">
            <div className="flex items-start gap-4">
              <div className="bg-gradient-to-br from-yellow-500/20 to-yellow-500/5 p-3 rounded-lg">
                <BrainIcon className="h-6 w-6 text-yellow-500" />
              </div>
              <div className="flex-1">
                <h2 className="text-lg font-medium mb-2">
                  Your AI Advisor Summary
                </h2>
                <p className="text-gray-300 mb-4">
                  Based on your portfolio analysis, market conditions, and
                  financial goals, here are your key insights and
                  recommendations for today.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-[#1A1F2E] p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="bg-green-500/10 p-2 rounded-full">
                        <TrendingUpIcon className="h-5 w-5 text-green-500" />
                      </div>
                      <h3 className="font-medium">Portfolio Health</h3>
                    </div>
                    <div className="bg-[#0B0E15] rounded-full h-2 mb-2">
                      <div className="bg-gradient-to-r from-green-500 to-green-400 h-2 rounded-full w-4/5"></div>
                    </div>
                    <p className="text-sm text-gray-400">
                      Your portfolio is performing well with a 82/100 health
                      score.
                    </p>
                  </div>
                  <div className="bg-[#1A1F2E] p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="bg-blue-500/10 p-2 rounded-full">
                        <TargetIcon className="h-5 w-5 text-blue-500" />
                      </div>
                      <h3 className="font-medium">Goal Progress</h3>
                    </div>
                    <div className="bg-[#0B0E15] rounded-full h-2 mb-2">
                      <div className="bg-gradient-to-r from-blue-500 to-blue-400 h-2 rounded-full w-3/5"></div>
                    </div>
                    <p className="text-sm text-gray-400">
                      You're 64% of the way to your retirement goal.
                    </p>
                  </div>
                  <div className="bg-[#1A1F2E] p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="bg-yellow-500/10 p-2 rounded-full">
                        <ShieldIcon className="h-5 w-5 text-yellow-500" />
                      </div>
                      <h3 className="font-medium">Risk Level</h3>
                    </div>
                    <div className="bg-[#0B0E15] rounded-full h-2 mb-2">
                      <div className="bg-gradient-to-r from-yellow-500 to-yellow-400 h-2 rounded-full w-3/5"></div>
                    </div>
                    <p className="text-sm text-gray-400">
                      Your portfolio has a moderate risk level of 58/100.
                    </p>
                  </div>
                </div>
                <div className="bg-[#1A1F2E] p-5 rounded-lg border border-yellow-500/20">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-yellow-500/20 p-2 rounded-full">
                      <MessageSquareIcon className="h-5 w-5 text-yellow-500" />
                    </div>
                    <h3 className="font-medium">Today's AI Recommendation</h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Based on the recent market volatility and your retirement
                    goals, I recommend rebalancing your tech exposure and adding
                    more to your bond allocation. This will help maintain your
                    target risk level while still pursuing your long-term
                    objectives.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <button className="bg-yellow-500 text-black px-4 py-2 rounded-lg text-sm font-medium">
                      Apply Recommendation
                    </button>
                    <button className="bg-[#151822] hover:bg-[#0B0E15] px-4 py-2 rounded-lg text-sm">
                      View Details
                    </button>
                    <div className="ml-auto flex items-center gap-2">
                      <button className="text-gray-400 hover:text-white p-1">
                        <ThumbsUpIcon className="h-4 w-4" />
                      </button>
                      <button className="text-gray-400 hover:text-white p-1">
                        <ThumbsDownIcon className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Premium AI Assistant CTA */}
                <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-5 rounded-lg border border-blue-500/20 mt-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-gradient-to-br from-blue-500 to-purple-500 p-2 rounded-full">
                      <SparklesIcon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium text-white">Experience Premium AI Assistant</h3>
                      <p className="text-xs text-gray-400">Advanced portfolio analysis & insights</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4 text-sm">
                    Get deeper insights with our premium AI financial assistant featuring real-time analysis, 
                    advanced portfolio visualization, and personalized investment recommendations.
                  </p>
                  <button 
                    onClick={() => navigate('/ai-assistant')}
                    className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center gap-2"
                  >
                    <SparklesIcon className="h-4 w-4" />
                    Launch Premium AI Assistant
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Action Items */}
          <div className="bg-[#151822] p-6 rounded-xl">
            <h2 className="text-lg font-medium mb-4">Actionable Insights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#1A1F2E] p-5 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-blue-500/10 p-2 rounded-full">
                    <RefreshCwIcon className="h-5 w-5 text-blue-500" />
                  </div>
                  <h3 className="font-medium">Smart Rebalancing</h3>
                </div>
                <p className="text-sm text-gray-400 mb-4">
                  Your portfolio has drifted 8% from your target allocation.
                  Consider rebalancing to maintain your desired risk level and
                  improve potential returns.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-[#151822] p-3 rounded-lg">
                    <div className="text-xs text-gray-400 mb-1">Current</div>
                    <div className="flex items-center justify-between">
                      <span>Stocks</span>
                      <span className="font-medium">53%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Bonds</span>
                      <span className="font-medium">22%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Alternatives</span>
                      <span className="font-medium">25%</span>
                    </div>
                  </div>
                  <div className="bg-[#151822] p-3 rounded-lg border border-blue-500/20">
                    <div className="text-xs text-gray-400 mb-1">Target</div>
                    <div className="flex items-center justify-between">
                      <span>Stocks</span>
                      <span className="font-medium text-blue-400">45%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Bonds</span>
                      <span className="font-medium text-blue-400">30%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Alternatives</span>
                      <span className="font-medium text-blue-400">25%</span>
                    </div>
                  </div>
                </div>
                <button className="w-full bg-blue-500 text-white py-2 rounded-lg text-sm font-medium">
                  View Rebalancing Plan
                </button>
              </div>
              <div className="bg-[#1A1F2E] p-5 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-red-500/10 p-2 rounded-full">
                    <AlertTriangleIcon className="h-5 w-5 text-red-500" />
                  </div>
                  <h3 className="font-medium">Risk Mitigation Alert</h3>
                </div>
                <p className="text-sm text-gray-400 mb-3">
                  Your tech sector exposure has increased to 32% of your
                  portfolio, creating concentration risk that exceeds your risk
                  profile parameters.
                </p>
                <div className="bg-[#151822] p-3 rounded-lg mb-4">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm">Tech Sector Risk</span>
                    <span className="text-sm text-red-500">High</span>
                  </div>
                  <div className="w-full bg-[#0B0E15] rounded-full h-2 mb-3">
                    <div className="bg-red-500 h-2 rounded-full w-4/5"></div>
                  </div>
                  <p className="text-xs text-gray-400">
                    Recommendation: Reduce tech exposure by 7-10% and
                    redistribute to defensive sectors.
                  </p>
                </div>
                <button className="w-full bg-red-500 text-white py-2 rounded-lg text-sm font-medium">
                  View Risk Reduction Plan
                </button>
              </div>
              <div className="bg-[#1A1F2E] p-5 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-purple-500/10 p-2 rounded-full">
                    <UserIcon className="h-5 w-5 text-purple-500" />
                  </div>
                  <h3 className="font-medium">Behavioral Insights</h3>
                </div>
                <p className="text-sm text-gray-400 mb-3">
                  You've shown hesitation in volatile markets. In the last
                  downtrend, you sold 15% of your equity positions, potentially
                  missing the subsequent 7% recovery.
                </p>
                <div className="bg-[#151822] p-3 rounded-lg mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <InfoIcon className="h-4 w-4 text-purple-400" />
                    <span className="text-sm">Investment Pattern Analysis</span>
                  </div>
                  <p className="text-xs text-gray-400 mb-2">
                    Your behavior suggests a lower risk tolerance than your
                    stated profile indicates. Consider adjusting your risk
                    profile or setting up automated investing to reduce
                    emotional decisions.
                  </p>
                </div>
                <button className="w-full bg-purple-500 text-white py-2 rounded-lg text-sm font-medium">
                  View Behavioral Analysis
                </button>
              </div>
              <div className="bg-[#1A1F2E] p-5 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-green-500/10 p-2 rounded-full">
                    <TargetIcon className="h-5 w-5 text-green-500" />
                  </div>
                  <h3 className="font-medium">Goal-Based Planning</h3>
                </div>
                <p className="text-sm text-gray-400 mb-3">
                  You're currently on track to reach your retirement goal by age
                  67. Increasing your monthly contribution by €200 could help
                  you reach this goal 3 years earlier.
                </p>
                <div className="bg-[#151822] p-3 rounded-lg mb-4">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm">Retirement Progress</span>
                    <span className="text-sm text-green-500">64%</span>
                  </div>
                  <div className="w-full bg-[#0B0E15] rounded-full h-2 mb-3">
                    <div className="bg-green-500 h-2 rounded-full w-3/5"></div>
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>Current: €452k</span>
                    <span>Target: €700k</span>
                  </div>
                </div>
                <button className="w-full bg-green-500 text-white py-2 rounded-lg text-sm font-medium">
                  Optimize Goal Strategy
                </button>
              </div>
            </div>
          </div>
        </>}
      {activeTab === 'goals' && <div className="bg-[#151822] p-6 rounded-xl">
          <h2 className="text-lg font-medium mb-6">
            Goal-Based Investment Planning
          </h2>
          <div className="mb-6">
            <label className="text-sm text-gray-400 mb-2 block">
              Select Primary Financial Goal
            </label>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
              <button className={`p-4 rounded-lg flex flex-col items-center ${selectedGoal === 'retirement' ? 'bg-yellow-500/20 border border-yellow-500/50' : 'bg-[#1A1F2E] hover:bg-[#262B3D]'}`} onClick={() => setSelectedGoal('retirement')}>
                <div className={`p-3 rounded-full mb-2 ${selectedGoal === 'retirement' ? 'bg-yellow-500/20' : 'bg-[#151822]'}`}>
                  <TargetIcon className={`h-6 w-6 ${selectedGoal === 'retirement' ? 'text-yellow-500' : 'text-gray-400'}`} />
                </div>
                <span className={selectedGoal === 'retirement' ? 'text-yellow-500' : 'text-gray-300'}>
                  Retirement
                </span>
              </button>
              <button className={`p-4 rounded-lg flex flex-col items-center ${selectedGoal === 'growth' ? 'bg-yellow-500/20 border border-yellow-500/50' : 'bg-[#1A1F2E] hover:bg-[#262B3D]'}`} onClick={() => setSelectedGoal('growth')}>
                <div className={`p-3 rounded-full mb-2 ${selectedGoal === 'growth' ? 'bg-yellow-500/20' : 'bg-[#151822]'}`}>
                  <TrendingUpIcon className={`h-6 w-6 ${selectedGoal === 'growth' ? 'text-yellow-500' : 'text-gray-400'}`} />
                </div>
                <span className={selectedGoal === 'growth' ? 'text-yellow-500' : 'text-gray-300'}>
                  High Growth
                </span>
              </button>
              <button className={`p-4 rounded-lg flex flex-col items-center ${selectedGoal === 'income' ? 'bg-yellow-500/20 border border-yellow-500/50' : 'bg-[#1A1F2E] hover:bg-[#262B3D]'}`} onClick={() => setSelectedGoal('income')}>
                <div className={`p-3 rounded-full mb-2 ${selectedGoal === 'income' ? 'bg-yellow-500/20' : 'bg-[#151822]'}`}>
                  <LineChartIcon className={`h-6 w-6 ${selectedGoal === 'income' ? 'text-yellow-500' : 'text-gray-400'}`} />
                </div>
                <span className={selectedGoal === 'income' ? 'text-yellow-500' : 'text-gray-300'}>
                  Passive Income
                </span>
              </button>
              <button className={`p-4 rounded-lg flex flex-col items-center ${selectedGoal === 'preservation' ? 'bg-yellow-500/20 border border-yellow-500/50' : 'bg-[#1A1F2E] hover:bg-[#262B3D]'}`} onClick={() => setSelectedGoal('preservation')}>
                <div className={`p-3 rounded-full mb-2 ${selectedGoal === 'preservation' ? 'bg-yellow-500/20' : 'bg-[#151822]'}`}>
                  <ShieldIcon className={`h-6 w-6 ${selectedGoal === 'preservation' ? 'text-yellow-500' : 'text-gray-400'}`} />
                </div>
                <span className={selectedGoal === 'preservation' ? 'text-yellow-500' : 'text-gray-300'}>
                  Preservation
                </span>
              </button>
            </div>
          </div>
          <div className="bg-[#1A1F2E] p-6 rounded-lg mb-6">
            <h3 className="font-medium mb-4">Retirement Planning</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="mb-4">
                  <label className="text-sm text-gray-400 mb-2 block">
                    Current Age
                  </label>
                  <input type="number" className="w-full bg-[#151822] rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500" defaultValue="42" />
                </div>
                <div className="mb-4">
                  <label className="text-sm text-gray-400 mb-2 block">
                    Target Retirement Age
                  </label>
                  <input type="number" className="w-full bg-[#151822] rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500" defaultValue="67" />
                </div>
                <div className="mb-4">
                  <label className="text-sm text-gray-400 mb-2 block">
                    Current Retirement Savings
                  </label>
                  <input type="text" className="w-full bg-[#151822] rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500" defaultValue="€452,000" />
                </div>
                <div className="mb-4">
                  <label className="text-sm text-gray-400 mb-2 block">
                    Monthly Contribution
                  </label>
                  <input type="text" className="w-full bg-[#151822] rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500" defaultValue="€1,500" />
                </div>
              </div>
              <div className="bg-[#151822] p-4 rounded-lg">
                <h4 className="font-medium mb-3">AI Retirement Analysis</h4>
                <div className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-400">
                      Retirement Progress
                    </span>
                    <span className="text-sm">64%</span>
                  </div>
                  <div className="w-full bg-[#0B0E15] rounded-full h-2">
                    <div className="bg-gradient-to-r from-yellow-500 to-green-500 h-2 rounded-full w-3/5"></div>
                  </div>
                </div>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">
                      Estimated Retirement Age
                    </span>
                    <span>67 years</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">
                      Target Retirement Savings
                    </span>
                    <span>€700,000</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">
                      Estimated Monthly Income
                    </span>
                    <span>€4,200</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">
                      Income Replacement Ratio
                    </span>
                    <span>78%</span>
                  </div>
                </div>
                <div className="bg-yellow-500/10 p-3 rounded-lg border border-yellow-500/30">
                  <div className="flex items-start gap-2">
                    <BrainIcon className="h-5 w-5 text-yellow-500 mt-0.5" />
                    <div>
                      <p className="text-sm mb-2">
                        <span className="font-medium text-yellow-500">
                          AI Suggestion:
                        </span>{' '}
                        Increasing your monthly contribution by €200 could help
                        you retire 3 years earlier, or increase your retirement
                        income by €650 per month.
                      </p>
                      <button className="text-xs bg-yellow-500 text-black px-3 py-1 rounded-lg">
                        See Detailed Plan
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="font-medium mb-4">
                Recommended Portfolio Allocation
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-[#151822] p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-medium">Current Allocation</h4>
                    <span className="text-xs text-gray-400">
                      Risk: Moderate-High
                    </span>
                  </div>
                  <div className="relative h-40 mb-4">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-32 rounded-full border-4 border-gray-700 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-xs text-gray-400">Total</div>
                          <div className="font-medium">€452k</div>
                        </div>
                      </div>
                      {/* Pie chart segments */}
                      <svg className="absolute inset-0" viewBox="0 0 100 100">
                        <path d="M50,50 L50,0 A50,50 0 0,1 100,50 L50,50" fill="#3b82f6" />
                        <path d="M50,50 L100,50 A50,50 0 0,1 50,100 L50,50" fill="#10b981" />
                        <path d="M50,50 L50,100 A50,50 0 0,1 0,50 L50,50" fill="#eab308" />
                        <path d="M50,50 L0,50 A50,50 0 0,1 50,0 L50,50" fill="#8b5cf6" />
                      </svg>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                        <span>Stocks</span>
                      </div>
                      <span>53%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <span>Bonds</span>
                      </div>
                      <span>22%</span>
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
                <div className="bg-[#151822] p-4 rounded-lg border border-yellow-500/30">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-medium text-yellow-500">
                      AI Recommended
                    </h4>
                    <span className="text-xs text-gray-400">
                      Risk: Moderate
                    </span>
                  </div>
                  <div className="relative h-40 mb-4">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-32 rounded-full border-4 border-yellow-500/30 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-xs text-gray-400">Total</div>
                          <div className="font-medium">€452k</div>
                        </div>
                      </div>
                      {/* Pie chart segments */}
                      <svg className="absolute inset-0" viewBox="0 0 100 100">
                        <path d="M50,50 L50,0 A50,50 0 0,1 93.3,75 L50,50" fill="#3b82f6" />
                        <path d="M50,50 L93.3,75 A50,50 0 0,1 25,93.3 L50,50" fill="#10b981" />
                        <path d="M50,50 L25,93.3 A50,50 0 0,1 6.7,25 L50,50" fill="#eab308" />
                        <path d="M50,50 L6.7,25 A50,50 0 0,1 50,0 L50,50" fill="#8b5cf6" />
                      </svg>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                        <span>Stocks</span>
                      </div>
                      <span className="text-yellow-500">45%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <span>Bonds</span>
                      </div>
                      <span className="text-yellow-500">30%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <span>Real Estate</span>
                      </div>
                      <span className="text-yellow-500">15%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                        <span>Alternatives</span>
                      </div>
                      <span className="text-yellow-500">10%</span>
                    </div>
                  </div>
                </div>
                <div className="bg-[#151822] p-4 rounded-lg">
                  <h4 className="font-medium mb-3">Key Adjustments</h4>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-400">Stocks</span>
                        <span className="text-red-500">-8%</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-2 bg-[#0B0E15] rounded-full overflow-hidden">
                          <div className="bg-red-500 h-full w-8/12"></div>
                        </div>
                        <span className="text-xs">53% → 45%</span>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-400">Bonds</span>
                        <span className="text-green-500">+8%</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-2 bg-[#0B0E15] rounded-full overflow-hidden">
                          <div className="bg-green-500 h-full w-8/12"></div>
                        </div>
                        <span className="text-xs">22% → 30%</span>
                      </div>
                    </div>
                    <div className="pt-3 border-t border-gray-700">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">
                          Expected Impact
                        </span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-400">Risk Reduction</span>
                          <span className="text-green-500">-12%</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-400">Return Change</span>
                          <span className="text-red-500">-1.2%</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-400">Volatility</span>
                          <span className="text-green-500">-3.5%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <button className="bg-yellow-500 text-black px-6 py-2 rounded-lg font-medium">
                Apply AI Recommended Allocation
              </button>
            </div>
          </div>
        </div>}
      {activeTab === 'risk' && <div className="bg-[#151822] p-6 rounded-xl">
          <h2 className="text-lg font-medium mb-6">
            Risk Analysis & Mitigation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-[#1A1F2E] p-4 rounded-lg">
              <h3 className="text-sm font-medium mb-3 text-gray-400">
                Overall Risk Score
              </h3>
              <div className="flex items-center justify-center mb-3">
                <div className="w-32 h-32 rounded-full border-4 border-yellow-500 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-500">58</div>
                    <div className="text-xs text-gray-400">Moderate</div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-400 text-center">
                Your portfolio has a moderate risk level, aligned with your
                stated risk tolerance.
              </p>
            </div>
            <div className="bg-[#1A1F2E] p-4 rounded-lg">
              <h3 className="text-sm font-medium mb-3 text-gray-400">
                Risk Breakdown
              </h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Market Risk</span>
                    <span className="text-yellow-500">Medium</span>
                  </div>
                  <div className="w-full bg-[#151822] rounded-full h-2">
                    <div className="bg-yellow-500 h-2 rounded-full w-3/5"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Concentration Risk</span>
                    <span className="text-red-500">High</span>
                  </div>
                  <div className="w-full bg-[#151822] rounded-full h-2">
                    <div className="bg-red-500 h-2 rounded-full w-4/5"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Liquidity Risk</span>
                    <span className="text-green-500">Low</span>
                  </div>
                  <div className="w-full bg-[#151822] rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full w-1/5"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Currency Risk</span>
                    <span className="text-yellow-500">Medium</span>
                  </div>
                  <div className="w-full bg-[#151822] rounded-full h-2">
                    <div className="bg-yellow-500 h-2 rounded-full w-2/5"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#1A1F2E] p-4 rounded-lg">
              <h3 className="text-sm font-medium mb-3 text-gray-400">
                Risk Alerts
              </h3>
              <div className="space-y-3">
                <div className="bg-[#151822] p-3 rounded-lg border-l-4 border-red-500">
                  <div className="flex items-center gap-2">
                    <AlertTriangleIcon className="h-4 w-4 text-red-500" />
                    <h4 className="text-sm font-medium">High Tech Exposure</h4>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">
                    Tech sector exposure at 32% creates concentration risk.
                  </p>
                </div>
                <div className="bg-[#151822] p-3 rounded-lg border-l-4 border-yellow-500">
                  <div className="flex items-center gap-2">
                    <AlertTriangleIcon className="h-4 w-4 text-yellow-500" />
                    <h4 className="text-sm font-medium">
                      Interest Rate Sensitivity
                    </h4>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">
                    Bond portfolio duration may impact returns in rising rate
                    environment.
                  </p>
                </div>
                <div className="bg-[#151822] p-3 rounded-lg border-l-4 border-green-500">
                  <div className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-green-500" />
                    <h4 className="text-sm font-medium">
                      Diversification Strength
                    </h4>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">
                    Geographic diversification is well-balanced across regions.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#1A1F2E] p-6 rounded-lg mb-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-medium">Risk Mitigation Recommendations</h3>
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
                        higher than recommended (20-25%) for your risk profile.
                        Consider diversifying into other sectors.
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
                        <button className="bg-red-500 text-white px-3 py-1 rounded-lg text-xs">
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
                      <h4 className="font-medium mb-1">Adjust Bond Duration</h4>
                      <p className="text-sm text-gray-400 mb-3">
                        Your bond portfolio has an average duration of 8.2
                        years, making it susceptible to interest rate increases.
                        Consider shifting 40% to shorter-duration bonds.
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
              <div className="bg-[#151822] p-4 rounded-lg">
                <div className="flex justify-between items-start">
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-500/10 p-2 rounded-full mt-1">
                      <ShieldIcon className="h-5 w-5 text-blue-500" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Add Defensive Assets</h4>
                      <p className="text-sm text-gray-400 mb-3">
                        Adding 5-7% allocation to defensive assets like consumer
                        staples, utilities, or gold could improve portfolio
                        resilience during market downturns.
                      </p>
                      <div className="bg-[#0B0E15] p-3 rounded-lg mb-3">
                        <div className="text-xs text-gray-400 mb-1">
                          Projected Impact on Risk Score
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex-1 h-2 bg-[#151822] rounded-full overflow-hidden">
                            <div className="bg-green-500 h-full w-3/5"></div>
                          </div>
                          <span className="text-xs text-green-500">
                            -8 points
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <button className="bg-blue-500 text-white px-3 py-1 rounded-lg text-xs">
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
          <div className="bg-[#1A1F2E] p-6 rounded-lg">
            <h3 className="font-medium mb-4">Market Stress Test Scenarios</h3>
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
        </div>}
      {activeTab === 'insights' && <div className="bg-[#151822] p-6 rounded-xl">
          <h2 className="text-lg font-medium mb-6">Behavioral Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-[#1A1F2E] p-5 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-purple-500/10 p-2 rounded-full">
                  <UserIcon className="h-5 w-5 text-purple-500" />
                </div>
                <h3 className="font-medium">Your Investment Style</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Risk Tolerance</span>
                    <span>Moderate</span>
                  </div>
                  <div className="w-full bg-[#151822] rounded-full h-2">
                    <div className="bg-yellow-500 h-2 rounded-full w-3/5"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Active vs Passive</span>
                    <span>Moderately Active</span>
                  </div>
                  <div className="w-full bg-[#151822] rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full w-7/10"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Emotional Reactivity</span>
                    <span>Medium-High</span>
                  </div>
                  <div className="w-full bg-[#151822] rounded-full h-2">
                    <div className="bg-red-500 h-2 rounded-full w-4/5"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Long-term Focus</span>
                    <span>Strong</span>
                  </div>
                  <div className="w-full bg-[#151822] rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full w-4/5"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#1A1F2E] p-5 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-yellow-500/10 p-2 rounded-full">
                  <BrainIcon className="h-5 w-5 text-yellow-500" />
                </div>
                <h3 className="font-medium">AI Behavioral Analysis</h3>
              </div>
              <div className="space-y-4">
                <div className="bg-[#151822] p-3 rounded-lg">
                  <h4 className="text-sm font-medium mb-1">
                    Market Volatility Response
                  </h4>
                  <p className="text-xs text-gray-400">
                    You tend to react emotionally to market downturns, selling
                    15-20% of equity positions during recent volatility periods.
                    This behavior has reduced your returns by approximately 2.3%
                    annually.
                  </p>
                </div>
                <div className="bg-[#151822] p-3 rounded-lg">
                  <h4 className="text-sm font-medium mb-1">
                    Decision Patterns
                  </h4>
                  <p className="text-xs text-gray-400">
                    You frequently check your portfolio (avg. 4x daily) during
                    market volatility, which correlates with higher trading
                    frequency and potentially emotion-driven decisions.
                  </p>
                </div>
                <div className="bg-[#151822] p-3 rounded-lg">
                  <h4 className="text-sm font-medium mb-1">Strengths</h4>
                  <p className="text-xs text-gray-400">
                    Strong commitment to regular contributions and excellent
                    long-term goal focus. You consistently invest 12% of income
                    monthly regardless of market conditions.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#1A1F2E] p-6 rounded-lg mb-6">
            <h3 className="font-medium mb-4">Behavioral Pattern Recognition</h3>
            <div className="relative h-80 mb-4">
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Placeholder for behavioral pattern chart */}
                <div className="w-full h-full relative">
                  {/* Chart background */}
                  <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-purple-500/10 to-transparent rounded-lg"></div>
                  {/* Chart lines */}
                  <svg className="w-full h-full" viewBox="0 0 1000 400" preserveAspectRatio="none">
                    {/* Market Line */}
                    <path d="M0,200 Q100,180 200,220 T400,180 T600,240 T800,140 T1000,180" fill="none" stroke="#6b7280" strokeWidth="2" strokeDasharray="5,5" />
                    {/* Portfolio Value Line */}
                    <path d="M0,200 Q100,190 200,230 T400,190 T600,260 T800,120 T1000,200" fill="none" stroke="#8b5cf6" strokeWidth="3" />
                    {/* Trading Activity Points */}
                    <circle cx="200" cy="230" r="6" fill="#ef4444" />
                    <circle cx="400" cy="190" r="6" fill="#ef4444" />
                    <circle cx="600" cy="260" r="6" fill="#ef4444" />
                    <circle cx="800" cy="120" r="6" fill="#ef4444" />
                  </svg>
                  {/* Annotations */}
                  <div className="absolute top-[230px] left-[200px] transform -translate-x-1/2 -translate-y-12 bg-[#151822]/90 p-2 rounded text-xs">
                    Sold during dip
                  </div>
                  <div className="absolute top-[260px] left-[600px] transform -translate-x-1/2 -translate-y-12 bg-[#151822]/90 p-2 rounded text-xs">
                    Sold during dip
                  </div>
                  {/* Chart Legend */}
                  <div className="absolute top-4 right-4 bg-[#151822]/80 p-3 rounded-lg backdrop-blur-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <span className="text-sm">Portfolio Value</span>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                      <span className="text-sm">Market Index</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <span className="text-sm">Trading Activity</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-[#151822] p-4 rounded-lg">
                <h4 className="text-sm font-medium mb-2">Pattern Identified</h4>
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangleIcon className="h-4 w-4 text-red-500" />
                  <span className="text-sm text-red-500">Panic Selling</span>
                </div>
                <p className="text-xs text-gray-400">
                  You've shown a pattern of selling during market downturns,
                  typically 2-3 days after significant drops.
                </p>
              </div>
              <div className="bg-[#151822] p-4 rounded-lg">
                <h4 className="text-sm font-medium mb-2">Financial Impact</h4>
                <div className="text-xl font-bold text-red-500 mb-2">
                  -€8,450
                </div>
                <p className="text-xs text-gray-400">
                  Estimated opportunity cost from emotional selling over the
                  past 24 months.
                </p>
              </div>
              <div className="bg-[#151822] p-4 rounded-lg">
                <h4 className="text-sm font-medium mb-2">AI Recommendation</h4>
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircleIcon className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Automated Investment Plan</span>
                </div>
                <p className="text-xs text-gray-400 mb-2">
                  Consider setting up automated rebalancing and dollar-cost
                  averaging to reduce emotional decision-making.
                </p>
                <button className="w-full bg-purple-500 text-white py-1 rounded-lg text-xs">
                  Setup Automation
                </button>
              </div>
            </div>
          </div>
          <div className="bg-[#1A1F2E] p-6 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-medium">
                Personalized Behavioral Strategies
              </h3>
              <button className="bg-yellow-500 text-black px-4 py-1 rounded-lg text-sm">
                Apply All Strategies
              </button>
            </div>
            <div className="space-y-4">
              <div className="bg-[#151822] p-4 rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="bg-green-500/10 p-2 rounded-full mt-1">
                    <CheckCircleIcon className="h-5 w-5 text-green-500" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">
                      Market Volatility Shield
                    </h4>
                    <p className="text-sm text-gray-400 mb-3">
                      Set up automatic investments during market downturns to
                      take advantage of lower prices and avoid emotional
                      selling.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <button className="bg-green-500 text-white px-3 py-1 rounded-lg text-xs">
                        Enable Strategy
                      </button>
                      <button className="bg-[#0B0E15] text-gray-300 px-3 py-1 rounded-lg text-xs">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#151822] p-4 rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-500/10 p-2 rounded-full mt-1">
                    <RefreshCwIcon className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Automated Rebalancing</h4>
                    <p className="text-sm text-gray-400 mb-3">
                      Schedule quarterly portfolio rebalancing to maintain your
                      target allocation regardless of market conditions.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <button className="bg-blue-500 text-white px-3 py-1 rounded-lg text-xs">
                        Enable Strategy
                      </button>
                      <button className="bg-[#0B0E15] text-gray-300 px-3 py-1 rounded-lg text-xs">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#151822] p-4 rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="bg-purple-500/10 p-2 rounded-full mt-1">
                    <XCircleIcon className="h-5 w-5 text-purple-500" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">
                      Portfolio Check Limiter
                    </h4>
                    <p className="text-sm text-gray-400 mb-3">
                      Enable restrictions that limit portfolio checking to once
                      per week during high volatility periods to reduce
                      emotional reactions.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <button className="bg-purple-500 text-white px-3 py-1 rounded-lg text-xs">
                        Enable Strategy
                      </button>
                      <button className="bg-[#0B0E15] text-gray-300 px-3 py-1 rounded-lg text-xs">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>}
      {/* Premium AI Financial Assistant Launcher */}
      <div className={`fixed ${chatExpanded ? 'bottom-6 right-6 w-80 h-96' : 'bottom-24 right-6 w-80'} bg-[#151822] rounded-xl shadow-xl transition-all duration-300 z-20 border border-yellow-500/20`}>
        <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 p-3 rounded-t-xl flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-br from-yellow-500 to-orange-500 p-1 rounded-full">
              <SparklesIcon className="h-4 w-4 text-white" />
            </div>
            <h3 className="text-sm font-medium text-white">Premium AI Assistant</h3>
          </div>
          <button onClick={() => setChatExpanded(!chatExpanded)} className="text-gray-400 hover:text-white">
            {chatExpanded ? <MinusIcon className="h-4 w-4" /> : <PlusIcon className="h-4 w-4" />}
          </button>
        </div>
        {chatExpanded && <>
            <div className="h-72 p-4 overflow-y-auto flex flex-col gap-3">
              <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-4 rounded-lg border border-blue-500/20">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <BrainIcon className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">AI Financial Assistant</h4>
                    <p className="text-xs text-gray-400">Powered by GPT-4</p>
                  </div>
                </div>
                <p className="text-sm text-gray-300 mb-4">
                  Experience our premium AI financial assistant with advanced portfolio analysis, 
                  real-time insights, and personalized investment recommendations.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Real-time portfolio analysis
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Advanced AI insights
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    Personalized recommendations
                  </div>
                </div>
                <button 
                  onClick={() => navigate('/ai-assistant')}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-lg font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <SparklesIcon className="h-4 w-4" />
                  Launch Full Assistant
                </button>
              </div>
              
              <div className="bg-[#1A1F2E] p-3 rounded-lg">
                <p className="text-sm text-gray-300">
                  💡 <strong>Quick Tip:</strong> The full AI assistant provides advanced features like:
                </p>
                <ul className="text-xs text-gray-400 mt-2 space-y-1">
                  <li>• Asset allocation visualization</li>
                  <li>• Risk assessment tools</li>
                  <li>• Market trend analysis</li>
                  <li>• Investment recommendations</li>
                </ul>
              </div>
            </div>
          </>}
        {!chatExpanded && <div className="p-4">
            <div className="text-sm mb-3 text-center">
              <div className="bg-gradient-to-br from-blue-500 to-purple-500 p-2 rounded-lg mb-2">
                <SparklesIcon className="h-6 w-6 text-white mx-auto" />
              </div>
              <span className="text-white font-medium">Premium AI Assistant</span>
            </div>
            <button 
              onClick={() => navigate('/ai-assistant')}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-lg font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <SparklesIcon className="h-4 w-4" />
              Launch Assistant
            </button>
            <div className="mt-3 space-y-1">
              <button className="w-full bg-[#1A1F2E] text-left p-2 rounded text-sm hover:bg-[#262B3D] transition-colors text-gray-300">
                Portfolio Analysis
              </button>
              <button className="w-full bg-[#1A1F2E] text-left p-2 rounded text-sm hover:bg-[#262B3D] transition-colors text-gray-300">
                Risk Assessment
              </button>
              <button className="w-full bg-[#1A1F2E] text-left p-2 rounded text-sm hover:bg-[#262B3D] transition-colors text-gray-300">
                Investment Ideas
              </button>
            </div>
          </div>}
      </div>
    </div>;
};