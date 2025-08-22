import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BrainIcon, TargetIcon, ZapIcon, EyeIcon, 
  TrendingUpIcon, TrendingDownIcon, CheckCircleIcon,
  AlertCircleIcon, ClockIcon, BarChart3Icon,
  PieChartIcon, LineChartIcon, SettingsIcon,
  PlayIcon, PauseIcon, RefreshCwIcon
} from 'lucide-react';
import { useAICopilot } from '../../lib/context/AICopilotContext';
import { AIRec, Signal } from '../../lib/types/aiCopilot';

export default function AICopilotDashboard() {
  const { state, runOptimization, runRiskAssessment, executeAction } = useAICopilot();
  const [activeTab, setActiveTab] = useState<'vision' | 'strategy' | 'execution'>('vision');
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [isAssessingRisk, setIsAssessingRisk] = useState(false);

  const handleOptimization = async () => {
    setIsOptimizing(true);
    try {
      await runOptimization();
    } finally {
      setIsOptimizing(false);
    }
  };

  const handleRiskAssessment = async () => {
    setIsAssessingRisk(true);
    try {
      await runRiskAssessment();
    } finally {
      setIsAssessingRisk(false);
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'from-red-500 to-orange-500';
      case 'Medium': return 'from-yellow-500 to-orange-500';
      case 'Low': return 'from-green-500 to-teal-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Portfolio': return <BarChart3Icon className="w-4 h-4" />;
      case 'Spending': return <PieChartIcon className="w-4 h-4" />;
      case 'Goal': return <TargetIcon className="w-4 h-4" />;
      case 'Risk': return <AlertCircleIcon className="w-4 h-4" />;
      case 'Tax': return <SettingsIcon className="w-4 h-4" />;
      default: return <BrainIcon className="w-4 h-4" />;
    }
  };

  const getSignalColor = (strength: number) => {
    if (strength > 0.5) return 'text-green-400';
    if (strength < -0.5) return 'text-red-400';
    return 'text-yellow-400';
  };

  return (
    <div className="min-h-screen bg-[#0B0E17] text-white p-6">
      {/* AI Co-Pilot Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
            <BrainIcon className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">AI Co-Pilot</h1>
            <p className="text-gray-400">Unified intelligence across MarketPro × WealthPulse × Tools</p>
          </div>
        </div>
      </div>

      {/* AI Efficiency Score - Shared Top Rail */}
      <motion.div 
        className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-2xl p-6 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">AI Efficiency Score</h2>
            <p className="text-gray-400">How efficiently your money works toward goals</p>
          </div>
          <div className="text-right">
            <div className="text-5xl font-bold text-green-400 mb-2">
              {state.aiEfficiency.overall}%
            </div>
            <div className="text-gray-400 text-sm">
              {state.aiEfficiency.peerComparison.rank} • {state.aiEfficiency.peerComparison.improvement}
            </div>
          </div>
        </div>

        {/* Three Sub-Gauges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400 mb-2">
              {state.aiEfficiency.goalAlignment}%
            </div>
            <div className="text-sm text-gray-400 mb-2">Goal Alignment</div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <motion.div 
                className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"
                initial={{ width: 0 }}
                animate={{ width: `${state.aiEfficiency.goalAlignment}%` }}
                transition={{ duration: 1, delay: 0.2 }}
              />
            </div>
          </div>

          <div className="text-center">
            <div className="text-2xl font-bold text-green-400 mb-2">
              {state.aiEfficiency.spendingEfficiency}%
            </div>
            <div className="text-sm text-gray-400 mb-2">Spending Efficiency</div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <motion.div 
                className="h-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-500"
                initial={{ width: 0 }}
                animate={{ width: `${state.aiEfficiency.spendingEfficiency}%` }}
                transition={{ duration: 1, delay: 0.4 }}
              />
            </div>
          </div>

          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400 mb-2">
              {state.aiEfficiency.investmentOptimization}%
            </div>
            <div className="text-sm text-gray-400 mb-2">Investment Optimization</div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <motion.div 
                className="h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                initial={{ width: 0 }}
                animate={{ width: `${state.aiEfficiency.investmentOptimization}%` }}
                transition={{ duration: 1, delay: 0.6 }}
              />
            </div>
          </div>
        </div>

        {/* AI Insights */}
        <div className="bg-gray-800/30 rounded-lg p-4">
          <h3 className="font-semibold mb-3">AI Insights</h3>
          <div className="space-y-2">
            {state.aiEfficiency.insights.slice(0, 2).map((insight, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-2 text-sm text-gray-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <CheckCircleIcon className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span>{insight}</span>
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
          { id: 'execution', label: 'Execution', icon: ZapIcon }
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
            {/* Goal Timeline */}
            <motion.div 
              className="bg-gradient-to-br from-[#1A1F2E] to-[#151822] rounded-2xl p-6 border border-gray-800/30"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <TargetIcon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Goal Timeline</h3>
                  <p className="text-gray-400 text-sm">Your financial journey mapped out</p>
                </div>
              </div>

              <div className="space-y-4">
                {state.wealthPulse.goals.map((goal, index) => (
                  <motion.div
                    key={goal.id}
                    className="bg-gray-800/30 rounded-lg p-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold">{goal.category}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        goal.priority === 'High' ? 'bg-red-500/20 text-red-400' :
                        goal.priority === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-green-500/20 text-green-400'
                      }`}>
                        {goal.priority}
                      </span>
                    </div>
                    
                    <div className="mb-3">
                      <div className="flex justify-between text-sm text-gray-400 mb-1">
                        <span>Progress</span>
                        <span>{goal.currentProgress}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <motion.div 
                          className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                          initial={{ width: 0 }}
                          animate={{ width: `${goal.currentProgress}%` }}
                          transition={{ duration: 1, delay: 0.2 * index }}
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-400">Target:</span>
                        <div className="font-medium">€{goal.targetAmount.toLocaleString()}</div>
                      </div>
                      <div>
                        <span className="text-gray-400">Monthly:</span>
                        <div className="font-medium">€{goal.monthlyContribution}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Risk Profile & Constraints */}
            <motion.div 
              className="bg-gradient-to-br from-[#1A1F2E] to-[#151822] rounded-2xl p-6 border border-gray-800/30"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                  <AlertCircleIcon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Risk Profile & Constraints</h3>
                  <p className="text-gray-400 text-sm">Your investment boundaries and preferences</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-4">Risk Profile</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Level:</span>
                      <span className="font-medium">{state.portfolio.riskProfile.level}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Time Horizon:</span>
                      <span className="font-medium">{state.portfolio.riskProfile.timeHorizon} years</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Max Drawdown:</span>
                      <span className="font-medium">{state.portfolio.riskProfile.maxDrawdown}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Liquidity Needs:</span>
                      <span className="font-medium">{state.portfolio.riskProfile.liquidityNeeds} months</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-4">Constraints</h4>
                  <div className="space-y-2">
                    {state.portfolio.riskProfile.constraints?.map((constraint, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span className="text-gray-300">{constraint}</span>
                      </div>
                    )) || (
                      <div className="text-gray-400 text-sm">No specific constraints set</div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Cashflow Analysis */}
            <motion.div 
              className="bg-gradient-to-br from-[#1A1F2E] to-[#151822] rounded-2xl p-6 border border-gray-800/30"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                  <TrendingUpIcon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Cashflow Analysis</h3>
                  <p className="text-gray-400 text-sm">Current vs. potential investment capacity</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">
                    €{state.wealthPulse.cashFlowMonthly.toLocaleString()}
                  </div>
                  <div className="text-gray-400 text-sm mb-4">Current Monthly Cash Flow</div>
                  <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-3">
                    <div className="text-sm text-green-400">
                      Positive cash flow • Good for goals
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">
                    €{state.wealthPulse.spending.reduce((sum, cat) => sum + (cat.optimizationPotential || 0), 0).toLocaleString()}
                  </div>
                  <div className="text-gray-400 text-sm mb-4">Potential Monthly Savings</div>
                  <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-3">
                    <div className="text-sm text-blue-400">
                      From spending optimization
                    </div>
                  </div>
                </div>
              </div>
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
            {/* Target Allocation */}
            <motion.div 
              className="bg-gradient-to-br from-[#1A1F2E] to-[#151822] rounded-2xl p-6 border border-gray-800/30"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <PieChartIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Target Allocation</h3>
                    <p className="text-gray-400 text-sm">AI-optimized portfolio weights</p>
                  </div>
                </div>
                <button
                  onClick={handleOptimization}
                  disabled={isOptimizing}
                  className="px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg font-medium transition-all duration-200 hover:scale-105 disabled:opacity-50"
                >
                  {isOptimizing ? (
                    <RefreshCwIcon className="w-4 h-4 animate-spin" />
                  ) : (
                    'Run Optimization'
                  )}
                </button>
              </div>

              {state.lastOptimization ? (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-4">Target Weights</h4>
                      <div className="space-y-2">
                        {Object.entries(state.lastOptimization.targetWeights).map(([symbol, weight]) => (
                          <div key={symbol} className="flex justify-between items-center">
                            <span className="font-medium">{symbol}</span>
                            <span className="text-gray-400">{(weight * 100).toFixed(1)}%</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-4">Expected Metrics</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Sharpe Ratio:</span>
                          <span className="font-medium">{state.lastOptimization.metrics.sharpe.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Max Drawdown:</span>
                          <span className="font-medium">{state.lastOptimization.metrics.drawdown.toFixed(1)}%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Expected Return:</span>
                          <span className="font-medium">{state.lastOptimization.metrics.expectedReturn.toFixed(1)}%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8 text-gray-400">
                  Click "Run Optimization" to see AI-recommended allocation
                </div>
              )}
            </motion.div>

            {/* Scenario Simulator */}
            <motion.div 
              className="bg-gradient-to-br from-[#1A1F2E] to-[#151822] rounded-2xl p-6 border border-gray-800/30"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                  <LineChartIcon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Scenario Simulator</h3>
                  <p className="text-gray-400 text-sm">What-if analysis for market events</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { name: 'Fed Rate Cut -50bps', impact: '+2.1%', color: 'from-green-500 to-emerald-600' },
                  { name: 'Oil Shock +30%', impact: '-1.8%', color: 'from-red-500 to-orange-600' },
                  { name: 'EURUSD 0.95', impact: '+0.9%', color: 'from-blue-500 to-cyan-600' }
                ].map((scenario, index) => (
                  <motion.div
                    key={scenario.name}
                    className={`p-4 rounded-lg border ${scenario.color} border-opacity-30`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <h4 className="font-medium text-sm mb-2">{scenario.name}</h4>
                    <div className="text-center">
                      <div className="text-lg font-bold">{scenario.impact}</div>
                      <div className="text-xs text-gray-400">Portfolio Impact</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Risk Assessment */}
            <motion.div 
              className="bg-gradient-to-br from-[#1A1F2E] to-[#151822] rounded-2xl p-6 border border-gray-800/30"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center">
                    <AlertCircleIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Risk Assessment</h3>
                    <p className="text-gray-400 text-sm">Portfolio risk analysis and exposures</p>
                  </div>
                </div>
                <button
                  onClick={handleRiskAssessment}
                  disabled={isAssessingRisk}
                  className="px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg font-medium transition-all duration-200 hover:scale-105 disabled:opacity-50"
                >
                  {isAssessingRisk ? (
                    <RefreshCwIcon className="w-4 h-4 animate-spin" />
                  ) : (
                    'Assess Risk'
                  )}
                </button>
              </div>

              {state.lastRiskAssessment ? (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-4">Sector Exposure</h4>
                      <div className="space-y-2">
                        {Object.entries(state.lastRiskAssessment.exposures.sector).map(([sector, weight]) => (
                          <div key={sector} className="flex justify-between items-center">
                            <span className="text-sm">{sector}</span>
                            <span className="text-gray-400">{(weight * 100).toFixed(1)}%</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-4">Hidden Risks</h4>
                      <div className="space-y-2">
                        {state.lastRiskAssessment.hiddenRisks.slice(0, 3).map((risk, index) => (
                          <div key={index} className="flex items-start gap-2 text-sm">
                            <AlertCircleIcon className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300">{risk}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8 text-gray-400">
                  Click "Assess Risk" to analyze portfolio exposures
                </div>
              )}
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
            {/* AI Recommendations */}
            <motion.div 
              className="bg-gradient-to-br from-[#1A1F2E] to-[#151822] rounded-2xl p-6 border border-gray-800/30"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                  <BrainIcon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">AI Recommendations</h3>
                  <p className="text-gray-400 text-sm">Next best actions ranked by impact</p>
                </div>
              </div>

              <div className="space-y-4">
                {state.pendingActions.length > 0 ? (
                  state.pendingActions.map((rec, index) => (
                    <motion.div
                      key={rec.id}
                      className="bg-gray-800/30 rounded-lg p-4 border border-gray-700/50"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index }}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 bg-gradient-to-r ${getPriorityColor(rec.priority)} rounded-lg flex items-center justify-center`}>
                            {getCategoryIcon(rec.category)}
                          </div>
                          <div>
                            <h4 className="font-semibold">{rec.action}</h4>
                            <div className="flex items-center gap-2 text-sm text-gray-400">
                              <span>Confidence: {(rec.confidence * 100).toFixed(0)}%</span>
                              <span>•</span>
                              <span>{rec.horizonDays} days</span>
                            </div>
                          </div>
                        </div>
                        <button
                          onClick={() => executeAction(rec.id)}
                          className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105"
                        >
                          Execute
                        </button>
                      </div>

                      <div className="mb-3">
                        <h5 className="font-medium text-sm mb-2">Rationale:</h5>
                        <ul className="space-y-1 text-sm text-gray-300">
                          {rec.rationale.map((point, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {rec.expectedImpact && (
                        <div className="mb-3">
                          <h5 className="font-medium text-sm mb-2">Expected Impact:</h5>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                            {rec.expectedImpact.expectedReturn && (
                              <div className="text-center bg-green-500/10 rounded p-2">
                                <div className="font-medium text-green-400">+{rec.expectedImpact.expectedReturn}%</div>
                                <div className="text-xs text-gray-400">Return</div>
                              </div>
                            )}
                            {rec.expectedImpact.drawdownDelta && (
                              <div className="text-center bg-blue-500/10 rounded p-2">
                                <div className="font-medium text-blue-400">{rec.expectedImpact.drawdownDelta > 0 ? '+' : ''}{rec.expectedImpact.drawdownDelta}%</div>
                                <div className="text-xs text-gray-400">Drawdown</div>
                              </div>
                            )}
                            {rec.expectedImpact.goalTimeDeltaMonths && (
                              <div className="text-center bg-purple-500/10 rounded p-2">
                                <div className="font-medium text-purple-400">{rec.expectedImpact.goalTimeDeltaMonths > 0 ? '+' : ''}{rec.expectedImpact.goalTimeDeltaMonths}m</div>
                                <div className="text-xs text-gray-400">Goal Time</div>
                              </div>
                            )}
                            {rec.expectedImpact.cashFlowImpact && (
                              <div className="text-center bg-cyan-500/10 rounded p-2">
                                <div className="font-medium text-cyan-400">+€{rec.expectedImpact.cashFlowImpact}</div>
                                <div className="text-xs text-gray-400">Cash Flow</div>
                              </div>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Signals */}
                      {rec.signals.length > 0 && (
                        <div>
                          <h5 className="font-medium text-sm mb-2">Driving Signals:</h5>
                          <div className="flex flex-wrap gap-2">
                            {rec.signals.slice(0, 3).map((signal: Signal) => (
                              <div
                                key={signal.id}
                                className={`px-2 py-1 rounded text-xs ${getSignalColor(signal.strength)} bg-gray-800/50`}
                                title={signal.evidence}
                              >
                                {signal.type}: {signal.evidence}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </motion.div>
                  ))
                ) : (
                  <div className="text-center py-8 text-gray-400">
                    No pending recommendations. Run optimization to generate new actions.
                  </div>
                )}
              </div>
            </motion.div>

            {/* Auto-Pilot Controls */}
            <motion.div 
              className="bg-gradient-to-br from-[#1A1F2E] to-[#151822] rounded-2xl p-6 border border-gray-800/30"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                  <SettingsIcon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Auto-Pilot Controls</h3>
                  <p className="text-gray-400 text-sm">Automated portfolio management</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-800/30 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium">Auto-Rebalance</h4>
                    <button className="w-12 h-6 bg-green-500 rounded-full relative">
                      <div className="w-4 h-4 bg-white rounded-full absolute right-1 top-1"></div>
                    </button>
                  </div>
                                      <p className="text-xs text-gray-400">Automatically rebalance when allocations drift &gt;5%</p>
                </div>

                <div className="bg-gray-800/30 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium">Cash Sweep</h4>
                    <button className="w-12 h-6 bg-gray-600 rounded-full relative">
                      <div className="w-4 h-4 bg-white rounded-full absolute left-1 top-1"></div>
                    </button>
                  </div>
                                      <p className="text-xs text-gray-400">Auto-invest excess cash &gt;€1,000 into T-Bills</p>
                </div>

                <div className="bg-gray-800/30 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium">Risk Guard</h4>
                    <button className="w-12 h-6 bg-green-500 rounded-full relative">
                      <div className="w-4 h-4 bg-white rounded-full absolute right-1 top-1"></div>
                    </button>
                  </div>
                                      <p className="text-xs text-gray-400">Pause trading if drawdown &gt;15%</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 