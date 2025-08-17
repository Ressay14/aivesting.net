import React, { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip, Legend } from 'recharts';
import { ZapIcon, SettingsIcon, PlusIcon, InfoIcon, PieChartIcon } from 'lucide-react';
import { optimizePortfolio } from '../../lib/optimizePortfolio';
import { supabase } from '../../lib/supabaseClient';

export interface Allocation {
  asset: string;
  percent: number;
}
export interface Portfolio {
  userId: string;
  allocations: Allocation[];
  method: string;
  timestamp: string;
  insight: string;
}
export interface Insight {
  summary: string;
  tips: string[];
  improvedMetrics: Record<string, string>;
}

const COLORS = ['#3b82f6', '#10b981', '#eab308', '#8b5cf6', '#ef4444', '#f59e42', '#6366f1', '#14b8a6'];

const defaultAssets = [
  { asset: 'US Stocks', percent: 45 },
  { asset: 'Bonds', percent: 30 },
  { asset: 'Real Estate', percent: 15 },
  { asset: 'Alternatives', percent: 10 },
];

const optimizationMethods = [
  { value: 'max-sharpe', label: 'Max Sharpe Ratio', tooltip: 'Best risk-adjusted return' },
  { value: 'min-volatility', label: 'Min Volatility', tooltip: 'Lowest portfolio risk' },
  { value: 'max-return', label: 'Max Return', tooltip: 'Highest possible return' },
];

export const PortfolioOptimization: React.FC = () => {
  const [allocations, setAllocations] = useState<Allocation[]>(defaultAssets);
  const [method, setMethod] = useState(optimizationMethods[0].value);
  const [customAsset, setCustomAsset] = useState('');
  const [aiInsight, setAiInsight] = useState<Insight | null>(null);
  const [optimized, setOptimized] = useState<Allocation[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [riskTolerance, setRiskTolerance] = useState(6);
  const [timeHorizon, setTimeHorizon] = useState('long');
  const [region, setRegion] = useState('us');

  const total = allocations.reduce((sum, a) => sum + a.percent, 0);

  const handleSlider = (idx: number, value: number) => {
    const updated = allocations.map((a, i) => i === idx ? { ...a, percent: value } : a);
    setAllocations(updated);
  };

  const handleAddAsset = () => {
    if (customAsset && !allocations.find(a => a.asset === customAsset)) {
      setAllocations([...allocations, { asset: customAsset, percent: 0 }]);
      setCustomAsset('');
    }
  };

  const handleOptimize = async () => {
    setLoading(true);
    setError(null);
    setAiInsight(null);
    setOptimized(null);
    try {
      const { optimizedAllocations, insight } = await optimizePortfolio({
        allocations,
        method,
        riskTolerance,
        timeHorizon,
        region,
      });
      setOptimized(optimizedAllocations);
      setAiInsight(insight);
    } catch (e: any) {
      setError(e.message || 'AI optimization failed.');
    }
    setLoading(false);
  };

  const handleApply = async () => {
    const user = supabase.auth.getUser();
    if (!user) return setError('Not logged in.');
    const portfolio: Portfolio = {
      userId: (await user).data.user?.id || '',
      allocations: optimized || allocations,
      method,
      timestamp: new Date().toISOString(),
      insight: aiInsight?.summary || '',
    };
    await supabase.from('portfolios').insert([portfolio]);
  };

  return (
    <div className="relative min-h-[80vh] flex flex-col gap-10">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#23263A]/80 via-[#181C2A]/90 to-[#0B0E15]/90 rounded-3xl shadow-2xl p-10 flex flex-col md:flex-row items-center gap-10 overflow-hidden border border-blue-500/10">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] animate-pulse" style={{animationDuration: '18s'}}></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-yellow-500/20 rounded-full blur-[120px] animate-pulse" style={{animationDuration: '22s'}}></div>
        {/* Donut Chart */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center z-10">
          <div className="bg-white/10 rounded-2xl shadow-xl p-6 backdrop-blur-xl border border-blue-500/20">
            <h2 className="text-2xl font-extrabold text-blue-500 mb-4 flex items-center gap-2">
              <PieChartIcon className="h-7 w-7 text-blue-500 animate-pulse" /> Portfolio Allocation
            </h2>
            <ResponsiveContainer width={320} height={320}>
              <PieChart>
                <Pie
                  data={optimized || allocations}
                  dataKey="percent"
                  nameKey="asset"
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={120}
                  paddingAngle={3}
                  isAnimationActive={true}
                  label={({ asset, percent }) => `${asset} ${(percent).toFixed(0)}%`}
                >
                  {(optimized || allocations).map((entry, idx) => (
                    <Cell key={`cell-${idx}`} fill={COLORS[idx % COLORS.length]} />
                  ))}
                </Pie>
                <RechartsTooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        {/* Hero Info & AI Badge */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start gap-6 z-10">
          <div className="flex items-center gap-3 mb-2">
            <span className="bg-gradient-to-r from-yellow-400 to-blue-400 text-black px-4 py-2 rounded-full font-bold shadow-lg animate-pulse">AI Powered</span>
            <InfoIcon className="h-7 w-7 text-yellow-400 animate-bounce" />
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white drop-shadow-lg mb-2">Portfolio Optimization</h1>
          <p className="text-lg text-blue-100/80 max-w-md mb-4">Let AI optimize your asset allocation for maximum returns and minimum risk. Adjust your preferences and see real-time, animated results.</p>
          <div className="flex flex-col gap-2 w-full">
            <label className="font-semibold text-blue-200 mb-1">Optimization Method</label>
            <div className="flex gap-3 flex-wrap">
              {optimizationMethods.map(opt => (
                <label key={opt.value} className="flex items-center gap-2 bg-[#151822]/80 px-4 py-2 rounded-lg cursor-pointer border border-blue-500/20 hover:border-blue-500/40 transition-all">
                  <input type="radio" name="method" value={opt.value} checked={method === opt.value} onChange={() => setMethod(opt.value)} className="accent-blue-500" />
                  <span className="font-medium text-white">{opt.label}</span>
                  <span className="text-xs text-blue-300" title={opt.tooltip}>ⓘ</span>
                </label>
              ))}
            </div>
          </div>
          <button onClick={handleOptimize} disabled={loading || total !== 100} className="mt-4 bg-gradient-to-r from-blue-500 to-yellow-400 text-black font-bold py-3 px-8 rounded-xl shadow-xl hover:from-yellow-400 hover:to-blue-500 hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-lg flex items-center gap-2 disabled:opacity-60">
            <ZapIcon className="h-5 w-5 animate-pulse" /> {loading ? 'Optimizing...' : 'Run Optimization'}
          </button>
          {total !== 100 && <div className="text-red-400 font-semibold mt-2">Total allocation must be 100% (currently {total}%)</div>}
        </div>
      </div>
      {/* Interactive Allocation Sliders */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-[#181C2A]/90 rounded-2xl shadow-xl p-8 border border-blue-500/10 flex flex-col gap-6">
          <h3 className="text-xl font-bold text-blue-400 mb-4">Adjust Your Allocation</h3>
          {allocations.map((asset, idx) => (
            <div key={asset.asset} className="mb-4">
              <div className="flex justify-between items-center mb-1">
                <span className="font-medium text-white">{asset.asset}</span>
                <span className="font-bold text-blue-400">{asset.percent}%</span>
              </div>
              <input type="range" min={0} max={100} value={asset.percent} onChange={e => handleSlider(idx, Number(e.target.value))} className="w-full accent-blue-500 h-2 rounded-lg appearance-none cursor-pointer bg-gradient-to-r from-blue-500/30 to-blue-500/10" />
            </div>
          ))}
          <div className="flex gap-2 mt-2">
            <input type="text" placeholder="Add asset (e.g., TSLA)" value={customAsset} onChange={e => setCustomAsset(e.target.value)} className="bg-[#151822] rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 border border-gray-800/30 w-40" />
            <button onClick={handleAddAsset} className="bg-blue-500/90 text-white px-4 py-2 rounded-lg font-semibold shadow hover:bg-blue-600 transition-all flex items-center gap-1"><PlusIcon className="h-4 w-4" /> Add</button>
          </div>
          <button onClick={() => setShowAdvanced(v => !v)} className="mt-4 bg-gradient-to-r from-blue-500 to-yellow-400 text-black font-bold py-2 px-6 rounded-lg shadow-lg hover:from-yellow-400 hover:to-blue-500 hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 flex items-center gap-2">
            <SettingsIcon className="h-5 w-5" /> Advanced Settings
          </button>
          {showAdvanced && (
            <div className="mt-4 space-y-4 animate-fadeIn">
              <div>
                <label className="block text-sm font-medium text-blue-200 mb-1">Risk Tolerance</label>
                <input type="range" min={1} max={10} value={riskTolerance} onChange={e => setRiskTolerance(Number(e.target.value))} className="w-full accent-yellow-500" />
                <div className="flex justify-between text-xs text-blue-200 mt-1">
                  <span>Low</span><span>High</span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-blue-200 mb-1">Time Horizon</label>
                <select value={timeHorizon} onChange={e => setTimeHorizon(e.target.value)} className="w-full bg-[#151822] rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/30 border border-gray-800/30">
                  <option value="short">Short-term (1-3 years)</option>
                  <option value="medium">Medium-term (4-7 years)</option>
                  <option value="long">Long-term (8+ years)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-blue-200 mb-1">Region</label>
                <select value={region} onChange={e => setRegion(e.target.value)} className="w-full bg-[#151822] rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/30 border border-gray-800/30">
                  <option value="us">US</option>
                  <option value="eu">EU</option>
                  <option value="global">Global</option>
                </select>
              </div>
            </div>
          )}
        </div>
        {/* AI Insight Card */}
        <div className="relative flex flex-col items-center justify-center">
          <div className="absolute -top-8 -right-8 w-32 h-32 bg-yellow-400/10 rounded-full blur-2xl animate-pulse" style={{animationDuration: '12s'}}></div>
          <div className="backdrop-blur-xl bg-gradient-to-br from-[#23263A]/80 via-[#181C2A]/90 to-[#0B0E15]/90 border border-blue-500/20 shadow-2xl rounded-2xl p-7 flex flex-col gap-4 items-center max-w-md animate-fadeIn relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-yellow-400/10 rounded-full blur-2xl animate-pulse" style={{animationDuration: '10s'}}></div>
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl animate-pulse" style={{animationDuration: '14s'}}></div>
            </div>
            <div className="flex items-center gap-2 mb-2 z-10">
              <span className="bg-gradient-to-r from-yellow-400 to-blue-400 p-2 rounded-full shadow-lg animate-pulse">
                <InfoIcon className="h-6 w-6 text-yellow-400 animate-bounce" />
              </span>
              <span className="font-bold text-lg text-white tracking-wide drop-shadow">AI Insight</span>
            </div>
            <div className="text-base font-medium text-center animate-typewriter min-h-[60px] text-blue-100 z-10">
              {aiInsight ? (
                <>
                  <div>{aiInsight.summary}</div>
                  {aiInsight.tips && aiInsight.tips.length > 0 && (
                    <ul className="mt-2 text-sm text-blue-200/90 list-disc list-inside">
                      {aiInsight.tips.map((tip, i) => <li key={i}>{tip}</li>)}
                    </ul>
                  )}
                  {aiInsight.improvedMetrics && (
                    <div className="mt-2 text-xs text-blue-300/80">
                      {Object.entries(aiInsight.improvedMetrics).map(([k, v]) => <div key={k}><span className="font-semibold">{k}:</span> {v}</div>)}
                    </div>
                  )}
                </>
              ) : loading ? 'AI is analyzing your portfolio...' : 'Run optimization to get AI-powered insights.'}
            </div>
            <div className="flex gap-2 mt-2 z-10">
              <button onClick={handleApply} className="bg-blue-500/80 hover:bg-blue-500/90 text-white px-4 py-2 rounded-lg font-semibold shadow hover:shadow-lg transition-all disabled:opacity-60" disabled={!optimized}>Apply Changes</button>
              <button className="bg-[#181C2A]/80 text-blue-300 px-4 py-2 rounded-lg font-semibold shadow hover:bg-blue-900/80 transition-all">Modify Settings</button>
            </div>
            {error && <div className="text-red-400 text-sm mt-2 z-10 font-medium bg-red-500/10 px-3 py-2 rounded-lg border border-red-500/20">{error}</div>}
          </div>
        </div>
      </div>
      {/* Subtle animated background for depth */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.7s cubic-bezier(0.4,0,0.2,1) both; }
        @keyframes typewriter {
          from { width: 0; }
          to { width: 100%; }
        }
        .animate-typewriter {
          overflow: hidden;
          white-space: nowrap;
          border-right: 2px solid #fff;
          width: 0;
          animation: typewriter 2.5s steps(40, end) 0.5s 1 normal both;
        }
      `}</style>
    </div>
  );
}; 