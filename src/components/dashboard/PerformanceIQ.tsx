import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { BrainIcon, TrendingUpIcon, TrendingDownIcon, TargetIcon, ShieldIcon, ZapIcon, StarIcon, AwardIcon } from 'lucide-react';

interface PerformanceMetrics {
  alpha: number;
  sharpeRatio: number;
  drawdown: number;
  investorScore: number;
  beta: number;
  volatility: number;
  informationRatio: number;
  trackingError: number;
  insight: string;
  percentile: number;
}

interface PerformanceData {
  month: string;
  portfolio: number;
  benchmark: number;
  excess: number;
}

interface RiskBreakdown {
  name: string;
  value: number;
  color: string;
}

export const PerformanceIQ: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [performanceData, setPerformanceData] = useState<PerformanceData[]>([]);
  const [riskBreakdown, setRiskBreakdown] = useState<RiskBreakdown[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading performance data
    setTimeout(() => {
      setMetrics({
        alpha: 2.3,
        sharpeRatio: 1.8,
        drawdown: -8.5,
        investorScore: 87,
        beta: 1.1,
        volatility: 12.4,
        informationRatio: 0.85,
        trackingError: 3.2,
        insight: "You beat 73% of users with similar risk profiles. Your tech-heavy allocation has outperformed during the recent market rally. Consider rebalancing to maintain optimal risk-adjusted returns.",
        percentile: 73
      });

      // Mock performance data
      const data = [
        { month: 'Jan', portfolio: 5.2, benchmark: 3.1, excess: 2.1 },
        { month: 'Feb', portfolio: -2.1, benchmark: -1.8, excess: -0.3 },
        { month: 'Mar', portfolio: 8.4, benchmark: 4.2, excess: 4.2 },
        { month: 'Apr', portfolio: 3.7, benchmark: 2.9, excess: 0.8 },
        { month: 'May', portfolio: -1.2, benchmark: -0.9, excess: -0.3 },
        { month: 'Jun', portfolio: 6.8, benchmark: 3.5, excess: 3.3 },
        { month: 'Jul', portfolio: 4.1, benchmark: 2.8, excess: 1.3 },
        { month: 'Aug', portfolio: -3.2, benchmark: -2.1, excess: -1.1 },
        { month: 'Sep', portfolio: 7.5, benchmark: 4.1, excess: 3.4 },
        { month: 'Oct', portfolio: 2.9, benchmark: 1.7, excess: 1.2 },
        { month: 'Nov', portfolio: 9.2, benchmark: 5.3, excess: 3.9 },
        { month: 'Dec', portfolio: 4.6, benchmark: 3.2, excess: 1.4 }
      ];
      setPerformanceData(data);

      // Mock risk breakdown
      setRiskBreakdown([
        { name: 'Market Risk', value: 45, color: '#3b82f6' },
        { name: 'Sector Risk', value: 25, color: '#8b5cf6' },
        { name: 'Company Risk', value: 20, color: '#10b981' },
        { name: 'Currency Risk', value: 10, color: '#f59e0b' }
      ]);

      setIsLoading(false);
    }, 1500);
  }, []);

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-500';
    if (score >= 60) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getScoreLabel = (score: number) => {
    if (score >= 90) return 'Exceptional';
    if (score >= 80) return 'Excellent';
    if (score >= 70) return 'Good';
    if (score >= 60) return 'Average';
    return 'Below Average';
  };

  const formatPercentage = (value: number) => `${value > 0 ? '+' : ''}${value.toFixed(1)}%`;

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="flex items-center gap-3">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-yellow-500"></div>
          <span className="text-gray-400">Loading Performance IQ...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-br from-[#151822]/90 to-[#1A1F2E]/90 p-6 rounded-xl border border-gray-800/30 shadow-lg">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <BrainIcon className="h-5 w-5 text-purple-500" />
          Performance IQ Dashboard
        </h2>

        {metrics && (
          <>
            {/* Key Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="bg-[#23263A] p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-green-500">
                  {formatPercentage(metrics.alpha)}
                </div>
                <div className="text-sm text-gray-400">Alpha vs Benchmark</div>
                <div className="text-xs text-gray-500 mt-1">Risk-adjusted excess return</div>
              </div>
              
              <div className="bg-[#23263A] p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-blue-500">
                  {metrics.sharpeRatio.toFixed(2)}
                </div>
                <div className="text-sm text-gray-400">Sharpe Ratio</div>
                <div className="text-xs text-gray-500 mt-1">Risk-adjusted return</div>
              </div>
              
              <div className="bg-[#23263A] p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-red-500">
                  {formatPercentage(metrics.drawdown)}
                </div>
                <div className="text-sm text-gray-400">Max Drawdown</div>
                <div className="text-xs text-gray-500 mt-1">Largest peak-to-trough</div>
              </div>
              
              <div className="bg-[#23263A] p-4 rounded-lg text-center relative">
                <div className={`text-2xl font-bold ${getScoreColor(metrics.investorScore)}`}>
                  {metrics.investorScore}/100
                </div>
                <div className="text-sm text-gray-400">Investor Score</div>
                <div className="text-xs text-gray-500 mt-1">{getScoreLabel(metrics.investorScore)}</div>
                <div className="absolute top-2 right-2">
                  <StarIcon className="h-4 w-4 text-yellow-500" />
                </div>
              </div>
            </div>

            {/* AI Insight */}
            <div className="bg-[#23263A] p-4 rounded-lg mb-6">
              <div className="flex items-center gap-2 mb-3">
                <BrainIcon className="h-5 w-5 text-yellow-500" />
                <span className="font-medium">AI Performance Insight</span>
              </div>
              <p className="text-sm text-gray-300 mb-3">{metrics.insight}</p>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <span className="text-gray-400">Percentile:</span>
                  <span className="font-medium text-yellow-500">{metrics.percentile}%</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-gray-400">Information Ratio:</span>
                  <span className="font-medium text-blue-500">{metrics.informationRatio.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Performance Chart */}
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-4">Performance vs Benchmark</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={performanceData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="month" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" tickFormatter={(value) => `${value}%`} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1F2937', 
                        border: '1px solid #374151',
                        borderRadius: '8px'
                      }}
                      formatter={(value: number) => [`${value}%`, 'Return']}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="portfolio" 
                      stroke="#10B981" 
                      strokeWidth={3}
                      name="Your Portfolio"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="benchmark" 
                      stroke="#6B7280" 
                      strokeWidth={2}
                      strokeDasharray="5 5"
                      name="Benchmark"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Additional Metrics */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Risk Breakdown */}
              <div>
                <h3 className="text-lg font-medium mb-4">Risk Breakdown</h3>
                <div className="h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={riskBreakdown}
                        cx="50%"
                        cy="50%"
                        innerRadius={40}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {riskBreakdown.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#1F2937', 
                          border: '1px solid #374151',
                          borderRadius: '8px'
                        }}
                        formatter={(value: number) => [`${value}%`, 'Risk']}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {riskBreakdown.map((item, index) => (
                    <div key={index} className="flex items-center gap-1 text-xs">
                      <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: item.color }}
                      ></div>
                      <span className="text-gray-400">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional Metrics */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Additional Metrics</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-[#23263A] p-3 rounded-lg">
                    <div className="text-sm text-gray-400">Beta</div>
                    <div className="text-lg font-bold text-blue-500">{metrics.beta.toFixed(2)}</div>
                  </div>
                  <div className="bg-[#23263A] p-3 rounded-lg">
                    <div className="text-sm text-gray-400">Volatility</div>
                    <div className="text-lg font-bold text-yellow-500">{metrics.volatility.toFixed(1)}%</div>
                  </div>
                  <div className="bg-[#23263A] p-3 rounded-lg">
                    <div className="text-sm text-gray-400">Tracking Error</div>
                    <div className="text-lg font-bold text-purple-500">{metrics.trackingError.toFixed(1)}%</div>
                  </div>
                  <div className="bg-[#23263A] p-3 rounded-lg">
                    <div className="text-sm text-gray-400">Information Ratio</div>
                    <div className="text-lg font-bold text-green-500">{metrics.informationRatio.toFixed(2)}</div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}; 