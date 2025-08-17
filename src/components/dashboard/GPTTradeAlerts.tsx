import React, { useState, useEffect } from 'react';
import { BellIcon, SettingsIcon, TrendingUpIcon, TrendingDownIcon, AlertTriangleIcon, CheckCircleIcon, ClockIcon, StarIcon, FilterIcon, PlusIcon } from 'lucide-react';

interface TradeAlert {
  id: string;
  symbol: string;
  name: string;
  reason: string;
  action: string;
  confidence: number;
  timestamp: string;
  priority: 'high' | 'medium' | 'low';
  sector: string;
  priceChange: number;
  volume: string;
  marketCap: string;
}

interface AlertPreferences {
  sectors: string[];
  riskLevel: 'conservative' | 'moderate' | 'aggressive';
  frequency: 'realtime' | 'daily' | 'weekly';
  minConfidence: number;
}

export const GPTTradeAlerts: React.FC = () => {
  const [alerts, setAlerts] = useState<TradeAlert[]>([]);
  const [preferences, setPreferences] = useState<AlertPreferences>({
    sectors: ['Technology', 'Healthcare', 'Finance'],
    riskLevel: 'moderate',
    frequency: 'daily',
    minConfidence: 70
  });
  const [showPreferences, setShowPreferences] = useState(false);
  const [filteredAlerts, setFilteredAlerts] = useState<TradeAlert[]>([]);
  const [activeFilter, setActiveFilter] = useState<'all' | 'high' | 'medium' | 'low'>('all');

  useEffect(() => {
    // Mock trade alerts data
    const mockAlerts: TradeAlert[] = [
      {
        id: '1',
        symbol: 'AAPL',
        name: 'Apple Inc.',
        reason: '3-day breakout + earnings surprise potential',
        action: 'Consider 5% allocation increase',
        confidence: 85,
        timestamp: '2 hours ago',
        priority: 'high',
        sector: 'Technology',
        priceChange: 3.2,
        volume: '45.2M',
        marketCap: '2.8T'
      },
      {
        id: '2',
        symbol: 'TSLA',
        name: 'Tesla Inc.',
        reason: 'Technical resistance breakthrough at $250',
        action: 'Hold position, monitor $250 support',
        confidence: 72,
        timestamp: '4 hours ago',
        priority: 'medium',
        sector: 'Automotive',
        priceChange: -1.8,
        volume: '32.1M',
        marketCap: '850B'
      },
      {
        id: '3',
        symbol: 'NVDA',
        name: 'NVIDIA Corp.',
        reason: 'AI sector momentum + institutional buying surge',
        action: 'Increase allocation by 3%',
        confidence: 91,
        timestamp: '6 hours ago',
        priority: 'high',
        sector: 'Technology',
        priceChange: 5.4,
        volume: '28.7M',
        marketCap: '1.2T'
      },
      {
        id: '4',
        symbol: 'JPM',
        name: 'JPMorgan Chase',
        reason: 'Interest rate environment favorable for banks',
        action: 'Consider entry at current levels',
        confidence: 68,
        timestamp: '8 hours ago',
        priority: 'medium',
        sector: 'Finance',
        priceChange: 1.2,
        volume: '12.3M',
        marketCap: '450B'
      },
      {
        id: '5',
        symbol: 'MRNA',
        name: 'Moderna Inc.',
        reason: 'FDA approval catalyst + pipeline updates',
        action: 'Watch for breakout above $120',
        confidence: 78,
        timestamp: '12 hours ago',
        priority: 'medium',
        sector: 'Healthcare',
        priceChange: 2.1,
        volume: '8.9M',
        marketCap: '45B'
      },
      {
        id: '6',
        symbol: 'AMZN',
        name: 'Amazon.com Inc.',
        reason: 'Holiday season momentum + AWS growth',
        action: 'Accumulate on dips below $140',
        confidence: 82,
        timestamp: '1 day ago',
        priority: 'high',
        sector: 'Technology',
        priceChange: 1.7,
        volume: '22.4M',
        marketCap: '1.5T'
      }
    ];

    setAlerts(mockAlerts);
    setFilteredAlerts(mockAlerts);
  }, []);

  useEffect(() => {
    // Filter alerts based on active filter
    const filtered = alerts.filter(alert => {
      if (activeFilter === 'all') return true;
      return alert.priority === activeFilter;
    });
    setFilteredAlerts(filtered);
  }, [alerts, activeFilter]);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-500 bg-red-500/10 border-red-500/20';
      case 'medium': return 'text-yellow-500 bg-yellow-500/10 border-yellow-500/20';
      case 'low': return 'text-green-500 bg-green-500/10 border-green-500/20';
      default: return 'text-gray-500 bg-gray-500/10 border-gray-500/20';
    }
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'high': return <AlertTriangleIcon className="h-4 w-4" />;
      case 'medium': return <ClockIcon className="h-4 w-4" />;
      case 'low': return <CheckCircleIcon className="h-4 w-4" />;
      default: return <BellIcon className="h-4 w-4" />;
    }
  };

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 80) return 'text-green-500';
    if (confidence >= 60) return 'text-yellow-500';
    return 'text-red-500';
  };

  const formatMarketCap = (marketCap: string) => {
    const num = parseFloat(marketCap.replace(/[^0-9.]/g, ''));
    if (marketCap.includes('T')) return `€${num}T`;
    if (marketCap.includes('B')) return `€${num}B`;
    if (marketCap.includes('M')) return `€${num}M`;
    return marketCap;
  };

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-br from-[#151822]/90 to-[#1A1F2E]/90 p-6 rounded-xl border border-gray-800/30 shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <BellIcon className="h-5 w-5 text-yellow-500" />
            GPT Trade Alerts
          </h2>
          <button
            onClick={() => setShowPreferences(!showPreferences)}
            className="flex items-center gap-2 px-3 py-2 bg-[#23263A] rounded-lg hover:bg-[#1E2230] transition-colors"
          >
            <SettingsIcon className="h-4 w-4" />
            <span className="text-sm">Preferences</span>
          </button>
        </div>

        {/* Preferences Panel */}
        {showPreferences && (
          <div className="bg-[#23263A] p-4 rounded-lg mb-6">
            <h3 className="font-medium mb-4">Alert Preferences</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Risk Level</label>
                <select
                  value={preferences.riskLevel}
                  onChange={(e) => setPreferences(prev => ({ ...prev, riskLevel: e.target.value as any }))}
                  className="w-full bg-[#1E2230] rounded-lg px-3 py-2 text-white border border-gray-800 focus:border-yellow-500 focus:outline-none"
                >
                  <option value="conservative">Conservative</option>
                  <option value="moderate">Moderate</option>
                  <option value="aggressive">Aggressive</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Frequency</label>
                <select
                  value={preferences.frequency}
                  onChange={(e) => setPreferences(prev => ({ ...prev, frequency: e.target.value as any }))}
                  className="w-full bg-[#1E2230] rounded-lg px-3 py-2 text-white border border-gray-800 focus:border-yellow-500 focus:outline-none"
                >
                  <option value="realtime">Real-time</option>
                  <option value="daily">Daily</option>
                  <option value="weekly">Weekly</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Min Confidence</label>
                <input
                  type="range"
                  min="50"
                  max="95"
                  value={preferences.minConfidence}
                  onChange={(e) => setPreferences(prev => ({ ...prev, minConfidence: parseInt(e.target.value) }))}
                  className="w-full"
                />
                <div className="text-xs text-gray-400 mt-1">{preferences.minConfidence}%</div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Sectors</label>
                <div className="space-y-1">
                  {['Technology', 'Healthcare', 'Finance', 'Energy', 'Consumer'].map(sector => (
                    <label key={sector} className="flex items-center gap-2 text-sm">
                      <input
                        type="checkbox"
                        checked={preferences.sectors.includes(sector)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setPreferences(prev => ({ ...prev, sectors: [...prev.sectors, sector] }));
                          } else {
                            setPreferences(prev => ({ ...prev, sectors: prev.sectors.filter(s => s !== sector) }));
                          }
                        }}
                        className="rounded border-gray-600 bg-[#1E2230]"
                      />
                      {sector}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Filter Tabs */}
        <div className="flex gap-2 mb-6">
          {[
            { id: 'all', label: 'All Alerts', count: alerts.length },
            { id: 'high', label: 'High Priority', count: alerts.filter(a => a.priority === 'high').length },
            { id: 'medium', label: 'Medium Priority', count: alerts.filter(a => a.priority === 'medium').length },
            { id: 'low', label: 'Low Priority', count: alerts.filter(a => a.priority === 'low').length }
          ].map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id as any)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-yellow-500 to-yellow-400 text-black font-medium'
                  : 'bg-[#23263A] text-gray-400 hover:text-white hover:bg-[#1E2230]'
              }`}
            >
              {filter.label}
              <span className="bg-black/20 px-2 py-1 rounded text-xs">
                {filter.count}
              </span>
            </button>
          ))}
        </div>

        {/* Alerts List */}
        <div className="space-y-4">
          {filteredAlerts.map((alert) => (
            <div key={alert.id} className="bg-[#23263A] p-4 rounded-lg border border-gray-800/40 hover:border-gray-700/60 transition-all">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-lg">{alert.symbol}</span>
                    <span className={`px-2 py-1 rounded text-xs font-medium border ${getPriorityColor(alert.priority)}`}>
                      {getPriorityIcon(alert.priority)}
                    </span>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">{alert.name}</div>
                    <div className="text-xs text-gray-500">{alert.sector}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`font-medium ${alert.priceChange > 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {alert.priceChange > 0 ? '+' : ''}{alert.priceChange}%
                  </div>
                  <div className="text-xs text-gray-400">{alert.timestamp}</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                <div>
                  <div className="text-sm text-gray-400 mb-1">AI Reason:</div>
                  <div className="text-sm">{alert.reason}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1">Recommended Action:</div>
                  <div className="text-sm font-medium text-yellow-500">{alert.action}</div>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <span className="text-gray-400">Confidence:</span>
                    <span className={`font-medium ${getConfidenceColor(alert.confidence)}`}>
                      {alert.confidence}%
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-gray-400">Volume:</span>
                    <span className="font-medium">{alert.volume}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-gray-400">Market Cap:</span>
                    <span className="font-medium">{formatMarketCap(alert.marketCap)}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="px-3 py-1 bg-green-500/20 text-green-400 rounded text-sm hover:bg-green-500/30 transition-colors">
                    Follow
                  </button>
                  <button className="px-3 py-1 bg-[#1E2230] text-gray-400 rounded text-sm hover:bg-[#262B3D] transition-colors">
                    Dismiss
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-6 pt-4 border-t border-gray-800/30">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-lg font-bold text-green-500">{alerts.length}</div>
              <div className="text-sm text-gray-400">Total Alerts</div>
            </div>
            <div>
              <div className="text-lg font-bold text-red-500">
                {alerts.filter(a => a.priority === 'high').length}
              </div>
              <div className="text-sm text-gray-400">High Priority</div>
            </div>
            <div>
              <div className="text-lg font-bold text-yellow-500">
                {Math.round(alerts.reduce((sum, a) => sum + a.confidence, 0) / alerts.length)}%
              </div>
              <div className="text-sm text-gray-400">Avg Confidence</div>
            </div>
            <div>
              <div className="text-lg font-bold text-blue-500">
                {alerts.filter(a => a.priceChange > 0).length}
              </div>
              <div className="text-sm text-gray-400">Positive Signals</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 