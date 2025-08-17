import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { 
  ZapIcon, 
  TrendingUpIcon, 
  TrendingDownIcon, 
  BrainIcon, 
  TargetIcon, 
  ShieldIcon, 
  BarChart3Icon, 
  PlusIcon, 
  XIcon,
  AlertTriangleIcon,
  CheckCircleIcon,
  ClockIcon,
  DollarSignIcon,
  UsersIcon,
  StarIcon,
  CalendarIcon,
  MessageCircleIcon,
  SettingsIcon,
  BellIcon,
  BookOpenIcon,
  VideoIcon,
  PhoneIcon,
  CrownIcon
} from 'lucide-react';
import { ForecastingHub } from './ForecastingHub';
import { PerformanceIQ } from './PerformanceIQ';
import { GPTTradeAlerts } from './GPTTradeAlerts';
import { CoachingPortal } from './CoachingPortal';

// Types for Ultra Plan features
interface PortfolioAsset {
  ticker: string;
  name: string;
  currentWeight: number;
  optimizedWeight: number;
  color: string;
}

interface OptimizationResult {
  method: string;
  assets: PortfolioAsset[];
  insight: string;
  riskScore: number;
  expectedReturn: number;
  sharpeRatio: number;
}

interface StressTestResult {
  scenario: string;
  impact: number;
  riskChange: string;
  recommendation: string;
}

export const UltraPlanFeatures: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState('optimizer');
  const [optimizationMethod, setOptimizationMethod] = useState('sharpe');
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizationResult, setOptimizationResult] = useState<OptimizationResult | null>(null);
  const [stressTestScenario, setStressTestScenario] = useState('');
  const [stressTestResult, setStressTestResult] = useState<StressTestResult | null>(null);

  // Mock portfolio data
  const [portfolioAssets, setPortfolioAssets] = useState<PortfolioAsset[]>([
    { ticker: 'AAPL', name: 'Apple Inc.', currentWeight: 25, optimizedWeight: 0, color: '#3b82f6' },
    { ticker: 'MSFT', name: 'Microsoft Corp.', currentWeight: 20, optimizedWeight: 0, color: '#8b5cf6' },
    { ticker: 'GOOGL', name: 'Alphabet Inc.', currentWeight: 15, optimizedWeight: 0, color: '#10b981' },
    { ticker: 'TSLA', name: 'Tesla Inc.', currentWeight: 10, optimizedWeight: 0, color: '#f59e0b' },
    { ticker: 'NVDA', name: 'NVIDIA Corp.', currentWeight: 10, optimizedWeight: 0, color: '#ef4444' },
    { ticker: 'AMZN', name: 'Amazon.com Inc.', currentWeight: 20, optimizedWeight: 0, color: '#06b6d4' },
  ]);

  // Mock data for charts
  const COLORS = ['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b', '#ef4444', '#06b6d4'];

  const handleOptimization = async () => {
    setIsOptimizing(true);
    
    // Simulate API call
    setTimeout(() => {
      const optimizedAssets = portfolioAssets.map(asset => ({
        ...asset,
        optimizedWeight: Math.max(5, Math.min(35, asset.currentWeight + (Math.random() - 0.5) * 20))
      }));

      const insights = [
        "Reduced Tech by 8% to lower beta during volatility spikes.",
        "Increased defensive positions by 12% for better risk-adjusted returns.",
        "Optimized sector allocation based on current market conditions.",
        "Balanced growth and value exposure for maximum Sharpe ratio."
      ];

      setOptimizationResult({
        method: optimizationMethod,
        assets: optimizedAssets,
        insight: insights[Math.floor(Math.random() * insights.length)],
        riskScore: 6.2,
        expectedReturn: 12.5,
        sharpeRatio: 1.8
      });
      
      setIsOptimizing(false);
    }, 2000);
  };

  const handleStressTest = () => {
    if (!stressTestScenario) return;

    const scenarios = {
      'Oil to $150': { impact: -15, riskChange: 'Moderate to High', recommendation: 'Increase bonds exposure by 10%' },
      'Recession trigger': { impact: -25, riskChange: 'Low to High', recommendation: 'Consider defensive stocks and gold' },
      'Interest rate hike': { impact: -8, riskChange: 'Moderate to High', recommendation: 'Reduce bond duration' },
      'Tech bubble burst': { impact: -30, riskChange: 'Low to High', recommendation: 'Diversify away from tech' }
    };

    const result = scenarios[stressTestScenario as keyof typeof scenarios] || {
      impact: -10,
      riskChange: 'Moderate to High',
      recommendation: 'Monitor closely and consider hedging strategies'
    };

    setStressTestResult({
      scenario: stressTestScenario,
      ...result
    });
  };

  const renderOptimizer = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-br from-[#151822]/90 to-[#1A1F2E]/90 p-6 rounded-xl border border-gray-800/30 shadow-lg">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <ZapIcon className="h-5 w-5 text-yellow-500" />
          Real-Time Optimizer Pro™
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Input Form */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Optimization Method</label>
              <select 
                value={optimizationMethod}
                onChange={(e) => setOptimizationMethod(e.target.value)}
                className="w-full bg-[#23263A] rounded-lg px-4 py-3 text-white border border-gray-800 focus:border-yellow-500 focus:outline-none"
              >
                <option value="sharpe">Sharpe Ratio Optimization</option>
                <option value="minvol">Minimum Volatility</option>
                <option value="maxret">Maximum Return</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Portfolio Assets</label>
              <div className="space-y-2">
                {portfolioAssets.map((asset, index) => (
                  <div key={asset.ticker} className="flex items-center gap-3">
                    <div className="flex-1 bg-[#23263A] rounded-lg px-3 py-2">
                      <div className="text-sm font-medium">{asset.ticker}</div>
                      <div className="text-xs text-gray-400">{asset.name}</div>
                    </div>
                    <input
                      type="number"
                      value={asset.currentWeight}
                      onChange={(e) => {
                        const newAssets = [...portfolioAssets];
                        newAssets[index].currentWeight = parseFloat(e.target.value) || 0;
                        setPortfolioAssets(newAssets);
                      }}
                      className="w-20 bg-[#23263A] rounded-lg px-3 py-2 text-white border border-gray-800 focus:border-yellow-500 focus:outline-none text-center"
                      placeholder="%"
                    />
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={handleOptimization}
              disabled={isOptimizing}
              className="w-full bg-gradient-to-r from-yellow-500 to-yellow-400 text-black font-semibold py-3 px-4 rounded-lg shadow-lg hover:from-yellow-400 hover:to-yellow-300 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isOptimizing ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-black"></div>
                  Running Optimization...
                </>
              ) : (
                <>
                  <ZapIcon className="h-4 w-4" />
                  Run Optimization
                </>
              )}
            </button>
          </div>

          {/* Results */}
          {optimizationResult && (
            <div className="space-y-4">
              <div className="bg-[#23263A] p-4 rounded-lg">
                <h3 className="font-medium mb-2">AI Insight</h3>
                <p className="text-sm text-gray-300">{optimizationResult.insight}</p>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="bg-[#23263A] p-3 rounded-lg text-center">
                  <div className="text-xs text-gray-400">Risk Score</div>
                  <div className="text-lg font-bold text-yellow-500">{optimizationResult.riskScore}</div>
                </div>
                <div className="bg-[#23263A] p-3 rounded-lg text-center">
                  <div className="text-xs text-gray-400">Expected Return</div>
                  <div className="text-lg font-bold text-green-500">{optimizationResult.expectedReturn}%</div>
                </div>
                <div className="bg-[#23263A] p-3 rounded-lg text-center">
                  <div className="text-xs text-gray-400">Sharpe Ratio</div>
                  <div className="text-lg font-bold text-blue-500">{optimizationResult.sharpeRatio}</div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Comparison Chart */}
        {optimizationResult && (
          <div className="mt-6">
            <h3 className="text-lg font-medium mb-4">Portfolio Comparison</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={optimizationResult.assets}
                    cx="25%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="currentWeight"
                  >
                    {optimizationResult.assets.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Pie
                    data={optimizationResult.assets}
                    cx="75%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="optimizedWeight"
                  >
                    {optimizationResult.assets.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} opacity={0.8} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="flex justify-center gap-8 mt-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm">Current</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full opacity-80"></div>
                  <span className="text-sm">Optimized</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Market Stress Tester */}
      <div className="bg-gradient-to-br from-[#151822]/90 to-[#1A1F2E]/90 p-6 rounded-xl border border-gray-800/30 shadow-lg">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <AlertTriangleIcon className="h-5 w-5 text-red-500" />
          Market Stress Tester
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Stress Scenario</label>
              <select 
                value={stressTestScenario}
                onChange={(e) => setStressTestScenario(e.target.value)}
                className="w-full bg-[#23263A] rounded-lg px-4 py-3 text-white border border-gray-800 focus:border-yellow-500 focus:outline-none"
              >
                <option value="">Select a scenario...</option>
                <option value="Oil to $150">Oil to $150</option>
                <option value="Recession trigger">Recession trigger</option>
                <option value="Interest rate hike">Interest rate hike</option>
                <option value="Tech bubble burst">Tech bubble burst</option>
              </select>
            </div>

            <button
              onClick={handleStressTest}
              disabled={!stressTestScenario}
              className="w-full bg-gradient-to-r from-red-500 to-red-400 text-white font-semibold py-3 px-4 rounded-lg shadow-lg hover:from-red-400 hover:to-red-300 transition-all disabled:opacity-50"
            >
              Run Stress Test
            </button>
          </div>

          {stressTestResult && (
            <div className="space-y-4">
              <div className="bg-[#23263A] p-4 rounded-lg">
                <h3 className="font-medium mb-2">Impact Analysis</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-400">Portfolio Impact:</span>
                    <span className={`font-medium ${stressTestResult.impact > 0 ? 'text-green-500' : 'text-red-500'}`}>
                      {stressTestResult.impact > 0 ? '+' : ''}{stressTestResult.impact}%
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-400">Risk Change:</span>
                    <span className="font-medium text-yellow-500">{stressTestResult.riskChange}</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#23263A] p-4 rounded-lg">
                <h3 className="font-medium mb-2">AI Recommendation</h3>
                <p className="text-sm text-gray-300">{stressTestResult.recommendation}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Feature Navigation */}
      <div className="bg-[#151822]/90 p-4 rounded-xl border border-gray-800/30">
        <div className="flex flex-wrap gap-2">
          {[
            { id: 'optimizer', label: 'Optimizer Pro™', icon: ZapIcon },
            { id: 'forecasting', label: 'Forecasting Hub', icon: TargetIcon },
            { id: 'performance', label: 'Performance IQ', icon: BrainIcon },
            { id: 'alerts', label: 'Trade Alerts', icon: BellIcon },
            { id: 'coaching', label: 'Coaching Portal', icon: UsersIcon }
          ].map((feature) => (
            <button
              key={feature.id}
              onClick={() => setActiveFeature(feature.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                activeFeature === feature.id
                  ? 'bg-gradient-to-r from-yellow-500 to-yellow-400 text-black font-medium'
                  : 'bg-[#23263A] text-gray-400 hover:text-white hover:bg-[#1E2230]'
              }`}
            >
              <feature.icon className="h-4 w-4" />
              {feature.label}
            </button>
          ))}
        </div>
      </div>

      {/* Feature Content */}
      {activeFeature === 'optimizer' && renderOptimizer()}
      {activeFeature === 'forecasting' && <ForecastingHub />}
      {activeFeature === 'performance' && <PerformanceIQ />}
      {activeFeature === 'alerts' && <GPTTradeAlerts />}
      {activeFeature === 'coaching' && <CoachingPortal />}
    </div>
  );
}; 