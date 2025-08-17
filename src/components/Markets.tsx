import React, { useState, useEffect, useRef } from 'react';
import { TrendingUpIcon, TrendingDownIcon, SearchIcon, StarIcon, BarChart2Icon, LineChartIcon, GlobeIcon, DollarSignIcon, EuroIcon, BitcoinIcon, ArrowRightIcon, NewspaperIcon } from 'lucide-react';
export const Markets = () => {
  const [activeTab, setActiveTab] = useState('stocks');
  const [search, setSearch] = useState('');
  const [favoriteMarkets, setFavoriteMarkets] = useState<string[]>(() => {
    try {
      return JSON.parse(localStorage.getItem('aivesting_favorite_markets') || '[]');
    } catch {
      return [];
    }
  });
  const [priceFlash, setPriceFlash] = useState<{ [symbol: string]: 'up' | 'down' | null }>({});
  const prevPrices = useRef<{ [symbol: string]: number }>({});
  const [showMoversModal, setShowMoversModal] = useState(false);
  const [moversTab, setMoversTab] = useState<'gainers' | 'losers'>('gainers');
  const [moverFlash, setMoverFlash] = useState<{ [symbol: string]: 'up' | 'down' | null }>({});
  const prevMoverPrices = useRef<{ [symbol: string]: number }>({});
  const [highlightedMover, setHighlightedMover] = useState<string | null>(null);

  // --- Chart Section Enhancements ---
  type ChartTimeframe = '1D' | '1W' | '1M' | '1Y';
  interface ChartPoint { x: number; sp: number; nasdaq: number; dow: number; }
  const [chartTimeframe, setChartTimeframe] = useState<ChartTimeframe>('1D');
  const [chartLoading, setChartLoading] = useState(false);
  const [showSP, setShowSP] = useState(true);
  const [showNasdaq, setShowNasdaq] = useState(true);
  const [showDow, setShowDow] = useState(true);
  const [chartTooltip, setChartTooltip] = useState<{ x: number; y: number; label: string; value: string } | null>(null);

  // Helper to generate smooth SVG path from points (Catmull-Rom to Bezier)
  function getSmoothPath(points: { x: number; y: number }[]) {
    if (points.length < 2) return '';
    let d = `M${points[0].x},${points[0].y}`;
    for (let i = 0; i < points.length - 1; i++) {
      const p0 = points[i];
      const p1 = points[i + 1];
      const midX = (p0.x + p1.x) / 2;
      d += ` Q${midX},${p0.y} ${p1.x},${p1.y}`;
    }
    return d;
  }

  // Chart data for each timeframe
  const chartTimeframes = {
    '1D': {
      points: Array.from({ length: 24 }, (_, i) => i),
      labels: Array.from({ length: 24 }, (_, i) => `${i}:00`),
    },
    '1W': {
      points: Array.from({ length: 7 }, (_, i) => i),
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    '1M': {
      points: Array.from({ length: 30 }, (_, i) => i),
      labels: Array.from({ length: 30 }, (_, i) => `${i + 1}`),
    },
    '1Y': {
      points: Array.from({ length: 12 }, (_, i) => i),
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
  };

  // Generate mock data for each index and timeframe
  function genMockSeries(len: number, base: number, variance: number) {
    let v = base;
    return Array.from({ length: len }, () => {
      v += (Math.random() - 0.5) * variance;
      return Math.max(20, v);
    });
  }
  const chartSeries = {
    '1D': {
      sp: genMockSeries(24, 120, 8),
      nasdaq: genMockSeries(24, 100, 10),
      dow: genMockSeries(24, 80, 6),
    },
    '1W': {
      sp: genMockSeries(7, 120, 10),
      nasdaq: genMockSeries(7, 100, 12),
      dow: genMockSeries(7, 80, 8),
    },
    '1M': {
      sp: genMockSeries(30, 120, 12),
      nasdaq: genMockSeries(30, 100, 14),
      dow: genMockSeries(30, 80, 10),
    },
    '1Y': {
      sp: genMockSeries(12, 120, 20),
      nasdaq: genMockSeries(12, 100, 22),
      dow: genMockSeries(12, 80, 18),
    },
  };

  const handleChartTimeframe = (tf: string) => {
    setChartLoading(true);
    setTimeout(() => {
      setChartTimeframe(tf as ChartTimeframe);
      setChartLoading(false);
    }, 600);
  };

  // --- News Section Enhancements ---
  const [showNewsModal, setShowNewsModal] = useState(false);
  const [highlightedNews, setHighlightedNews] = useState<number | null>(null);

  // Add state for selected asset and modal
  const [selectedAsset, setSelectedAsset] = useState<null | { symbol: string; name: string; type: string }>(null);
  const [assetChartTimeframe, setAssetChartTimeframe] = useState<ChartTimeframe>('1D');

  // Helper to generate mock price series for an asset
  function genAssetSeries(len: number, base: number, variance: number) {
    let v = base;
    return Array.from({ length: len }, () => {
      v += (Math.random() - 0.5) * variance;
      return Math.max(1, v);
    });
  }

  // Persist favorites
  useEffect(() => {
    localStorage.setItem('aivesting_favorite_markets', JSON.stringify(favoriteMarkets));
  }, [favoriteMarkets]);

  // Filter logic for each tab
  const getTabMarkets = () => {
    let filtered = marketIndices;
    switch (activeTab) {
      case 'stocks':
        filtered = marketIndices.filter(m => ['S&P 500', 'Nasdaq', 'Dow Jones', 'Russell 2000'].includes(m.name));
        break;
      case 'crypto':
        filtered = marketIndices.filter(m => ['Bitcoin', 'Ethereum'].includes(m.name));
        break;
      case 'forex':
        filtered = marketIndices.filter(m => m.symbol === 'EUR/USD');
        break;
      case 'indices':
        filtered = marketIndices.filter(m => ['S&P 500', 'Nasdaq', 'Dow Jones', 'Russell 2000', 'VIX'].includes(m.name));
        break;
      case 'commodities':
        filtered = marketIndices.filter(m => ['Gold'].includes(m.name));
        break;
      default:
        break;
    }
    // Search filter
    if (search.trim()) {
      filtered = filtered.filter(m => m.name.toLowerCase().includes(search.toLowerCase()) || m.symbol.toLowerCase().includes(search.toLowerCase()));
    }
    // Favorites first
    filtered = [
      ...filtered.filter(m => favoriteMarkets.includes(m.symbol)),
      ...filtered.filter(m => !favoriteMarkets.includes(m.symbol)),
    ];
    return filtered;
  };

  // Toggle favorite
  const toggleFavorite = (symbol: string) => {
    setFavoriteMarkets(favs => favs.includes(symbol) ? favs.filter(s => s !== symbol) : [...favs, symbol]);
  };

  // Animate price changes (mock, for future real data integration)
  useEffect(() => {
    getTabMarkets().forEach(m => {
      const prev = prevPrices.current[m.symbol];
      const curr = parseFloat(m.price.replace(/[^0-9.\-]/g, ''));
      if (prev !== undefined && prev !== curr) {
        setPriceFlash(f => ({ ...f, [m.symbol]: curr > prev ? 'up' : 'down' }));
        setTimeout(() => setPriceFlash(f => ({ ...f, [m.symbol]: null })), 600);
      }
      prevPrices.current[m.symbol] = curr;
    });
    // eslint-disable-next-line
  }, [activeTab, search]);

  // Animate % change for movers (mock, for future real data)
  useEffect(() => {
    [...topGainers, ...topLosers].forEach(stock => {
      const prev = prevMoverPrices.current[stock.symbol];
      const curr = parseFloat(stock.price.replace(/[^0-9.\-]/g, ''));
      if (prev !== undefined && prev !== curr) {
        setMoverFlash(f => ({ ...f, [stock.symbol]: curr > prev ? 'up' : 'down' }));
        setTimeout(() => setMoverFlash(f => ({ ...f, [stock.symbol]: null })), 600);
      }
      prevMoverPrices.current[stock.symbol] = curr;
    });
  }, []);

  // Mini sparkline mock data
  const getSparkline = (symbol: string) => {
    // For demo, randomize a little for each symbol
    const base = symbol.charCodeAt(0) % 10;
    return [10 + base, 12 + base, 11 + base, 13 + base, 12 + base, 14 + base, 13 + base];
  };

  // Remove the polyline-based chart and replace with path-based SVG for S&P 500, Nasdaq, Dow Jones
  // Define path data for each index and timeframe
  const chartPaths: Record<ChartTimeframe, { sp: string; nasdaq: string; dow: string }> = {
    '1D': {
      sp: 'M0,160 Q100,150 200,140 T400,120 T600,100',
      nasdaq: 'M0,170 Q100,160 200,150 T400,130 T600,110',
      dow: 'M0,180 Q100,170 200,160 T400,140 T600,120',
    },
    '1W': {
      sp: 'M0,150 Q100,140 200,130 T400,110 T600,90',
      nasdaq: 'M0,160 Q100,150 200,140 T400,120 T600,100',
      dow: 'M0,170 Q100,160 200,150 T400,130 T600,110',
    },
    '1M': {
      sp: 'M0,140 Q100,130 200,120 T400,100 T600,80',
      nasdaq: 'M0,150 Q100,140 200,130 T400,110 T600,90',
      dow: 'M0,160 Q100,150 200,140 T400,120 T600,100',
    },
    '1Y': {
      sp: 'M0,120 Q100,110 200,100 T400,80 T600,60',
      nasdaq: 'M0,130 Q100,120 200,110 T400,90 T600,70',
      dow: 'M0,140 Q100,130 200,120 T400,100 T600,80',
    },
  };

  // Chart rendering variables
  const tf = chartTimeframe;
  const { points, labels } = chartTimeframes[tf];
  const width = 600;
  const height = 200;
  const xStep = width / (points.length - 1);
  const yMax = 160;
  const yMin = 40;
  function scaleY(arr: number[]) {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    return arr.map(v => yMax - ((v - min) / (max - min + 1e-6)) * (yMax - yMin));
  }
  const spY = scaleY(chartSeries[tf].sp);
  const nasdaqY = scaleY(chartSeries[tf].nasdaq);
  const dowY = scaleY(chartSeries[tf].dow);
  const spPath = getSmoothPath(points.map((p: number, i: number) => ({ x: i * xStep, y: spY[i] })));
  const nasdaqPath = getSmoothPath(points.map((p: number, i: number) => ({ x: i * xStep, y: nasdaqY[i] })));
  const dowPath = getSmoothPath(points.map((p: number, i: number) => ({ x: i * xStep, y: dowY[i] })));

  // Add a key to force re-mounting the SVG on timeframe change for animation
  const chartKey = `${chartTimeframe}-${showSP}-${showNasdaq}-${showDow}`;

  return <div className="space-y-6">
    {/* Markets Overview */}
    <div className="bg-gradient-to-br from-[#151822]/90 to-[#1A1F2E]/90 p-6 rounded-xl border border-gray-800/30 shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold flex items-center gap-2">
          <BarChart2Icon className="h-6 w-6 text-blue-400" />
          Markets Overview
        </h1>
        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search markets..."
            className="bg-[#0B0E15] rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 w-64"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
      </div>
      <div className="flex overflow-x-auto pb-2 mb-6">
        <button className={`px-4 py-2 rounded-lg mr-2 whitespace-nowrap ${activeTab === 'stocks' ? 'bg-blue-500 text-white' : 'text-gray-400 hover:bg-[#1E2230]'}`} onClick={() => setActiveTab('stocks')}>
          <BarChart2Icon className="h-4 w-4 inline mr-2" /> Stocks
        </button>
        <button className={`px-4 py-2 rounded-lg mr-2 whitespace-nowrap ${activeTab === 'crypto' ? 'bg-purple-500 text-white' : 'text-gray-400 hover:bg-[#1E2230]'}`} onClick={() => setActiveTab('crypto')}>
          <BitcoinIcon className="h-4 w-4 inline mr-2" /> Crypto
        </button>
        <button className={`px-4 py-2 rounded-lg mr-2 whitespace-nowrap ${activeTab === 'forex' ? 'bg-green-500 text-white' : 'text-gray-400 hover:bg-[#1E2230]'}`} onClick={() => setActiveTab('forex')}>
          <GlobeIcon className="h-4 w-4 inline mr-2" /> Forex
        </button>
        <button className={`px-4 py-2 rounded-lg mr-2 whitespace-nowrap ${activeTab === 'indices' ? 'bg-yellow-500 text-black' : 'text-gray-400 hover:bg-[#1E2230]'}`} onClick={() => setActiveTab('indices')}>
          <LineChartIcon className="h-4 w-4 inline mr-2" /> Indices
        </button>
        <button className={`px-4 py-2 rounded-lg mr-2 whitespace-nowrap ${activeTab === 'commodities' ? 'bg-red-500 text-white' : 'text-gray-400 hover:bg-[#1E2230]'}`} onClick={() => setActiveTab('commodities')}>
          <DollarSignIcon className="h-4 w-4 inline mr-2" /> Commodities
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {getTabMarkets().map(index => (
          <div
            key={index.symbol}
            className={`bg-[#1E2230]/90 p-4 rounded-2xl border border-gray-800/40 shadow-lg group transition-all duration-300 relative overflow-hidden ${priceFlash[index.symbol] === 'up' ? 'animate-flashGreen' : priceFlash[index.symbol] === 'down' ? 'animate-flashRed' : ''} ${selectedAsset?.symbol === index.symbol ? 'ring-2 ring-blue-400' : ''}`}
            onClick={() => setSelectedAsset({ symbol: index.symbol, name: index.name, type: activeTab })}
            style={{ cursor: 'pointer' }}
          >
            {/* Glassy background effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-yellow-500/5 to-purple-500/5 blur-2xl opacity-60 pointer-events-none z-0" />
            <div className="flex justify-between items-start mb-2 relative z-10">
              <div className="flex items-center">
                <span className="font-medium text-lg text-white drop-shadow">{index.name}</span>
                <span className="text-xs text-gray-400 ml-2">{index.symbol}</span>
              </div>
              <button
                className={`text-gray-400 hover:text-yellow-500 transition-colors ${favoriteMarkets.includes(index.symbol) ? 'text-yellow-400' : ''}`}
                onClick={() => toggleFavorite(index.symbol)}
                title={favoriteMarkets.includes(index.symbol) ? 'Unfavorite' : 'Favorite'}
              >
                <StarIcon className="h-4 w-4" />
              </button>
            </div>
            <div className="text-2xl font-bold mb-2 text-white drop-shadow">{index.price}</div>
            <div className="flex justify-between items-center">
              <div className={`flex items-center ${index.change > 0 ? 'text-green-500' : index.change < 0 ? 'text-red-500' : 'text-gray-400'}`}>
                {index.change > 0 ? <TrendingUpIcon className="h-4 w-4 mr-1" /> : index.change < 0 ? <TrendingDownIcon className="h-4 w-4 mr-1" /> : null}
                <span>{index.change > 0 ? '+' : ''}{index.change}%</span>
              </div>
              <span className="text-xs text-gray-400">{index.volume}</span>
            </div>
          </div>
        ))}
      </div>
      {/* Animations for price flash */}
      <style>{`
        @keyframes flashGreen { 0% { background: #22c55e33; } 100% { background: transparent; } }
        @keyframes flashRed { 0% { background: #ef444433; } 100% { background: transparent; } }
        .animate-flashGreen { animation: flashGreen 0.6s; }
        .animate-flashRed { animation: flashRed 0.6s; }
      `}</style>
    </div>
      {/* Major Market Indices Chart */}
      <div className="bg-gradient-to-br from-[#151822]/90 to-[#1A1F2E]/90 p-6 rounded-xl border border-gray-800/30 shadow-lg relative overflow-hidden">
        {/* Glass/glow overlay */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-blue-700/20 rounded-full blur-[120px] animate-pulse" style={{animationDuration: '15s'}}></div>
          <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-yellow-500/10 rounded-full blur-[120px] animate-pulse" style={{animationDuration: '20s'}}></div>
        </div>
        <div className="flex justify-between items-center mb-6 relative z-10">
          <h2 className="text-lg font-medium flex items-center gap-2">
            <BarChart2Icon className="h-5 w-5 text-blue-400" />
            Major Market Indices
          </h2>
          <div className="flex items-center gap-2">
            {['1D', '1W', '1M', '1Y'].map(tf => (
              <button
                key={tf}
                className={`px-3 py-1 rounded-lg text-sm font-medium transition-all duration-200 ${chartTimeframe === tf ? 'bg-gradient-to-r from-blue-500 to-blue-400 text-black shadow-lg' : 'text-gray-400 hover:bg-[#1E2230]'} ${chartLoading ? 'opacity-60 pointer-events-none' : ''}`}
                onClick={() => handleChartTimeframe(tf)}
                disabled={chartLoading}
              >
                {chartLoading && chartTimeframe !== tf ? <span className="inline-block w-8 h-3 bg-gradient-to-r from-blue-400/30 to-blue-400/10 rounded animate-pulse" /> : tf}
              </button>
            ))}
          </div>
        </div>
        <div className="h-80 relative z-10">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-full relative">
              <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-blue-500/10 to-transparent rounded-lg"></div>
              <div className="absolute bottom-0 left-0 right-0 border-t-2 border-blue-500 border-dashed"></div>
              {/* Chart lines with shimmer/transition */}
              <svg
                key={chartKey}
                className="w-full h-full"
                viewBox={`0 0 ${width} ${height}`}
                preserveAspectRatio="none"
              >
                {showSP && (
                  <path
                    d={spPath}
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="3"
                    className="draw-curve"
                    style={{ opacity: chartLoading ? 0.5 : 1, transition: 'opacity 0.5s' }}
                  />
                )}
                {showNasdaq && (
                  <path
                    d={nasdaqPath}
                    fill="none"
                    stroke="#8b5cf6"
                    strokeWidth="3"
                    className="draw-curve"
                    style={{ opacity: chartLoading ? 0.5 : 1, transition: 'opacity 0.5s' }}
                  />
                )}
                {showDow && (
                  <path
                    d={dowPath}
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="3"
                    className="draw-curve"
                    style={{ opacity: chartLoading ? 0.5 : 1, transition: 'opacity 0.5s' }}
                  />
                )}
                <defs>
                  <filter id="shimmer">
                    <feGaussianBlur stdDeviation="4" />
                  </filter>
                </defs>
                <style>{`
                  .draw-curve {
                    stroke-dasharray: 1000;
                    stroke-dashoffset: 1000;
                    animation: drawLine 1.2s cubic-bezier(.4,1.6,.6,1) forwards;
                  }
                  @keyframes drawLine {
                    to { stroke-dashoffset: 0; }
                  }
                `}</style>
              </svg>
              {/* Chart Legend (interactive) */}
              <div className="absolute top-4 right-4 bg-[#1A1F2E]/80 p-3 rounded-lg backdrop-blur-sm border border-gray-800/50 flex flex-col gap-2">
                <button className="flex items-center gap-2 group" onClick={() => setShowSP(v => !v)}>
                  <div className={`w-3 h-3 rounded-full ${showSP ? 'bg-blue-500' : 'bg-gray-700'} border-2 border-blue-400 group-hover:scale-110 transition-transform`}></div>
                  <span className={`text-sm ${showSP ? 'text-white' : 'text-gray-500'} font-medium`}>S&P 500</span>
                </button>
                <button className="flex items-center gap-2 group" onClick={() => setShowNasdaq(v => !v)}>
                  <div className={`w-3 h-3 rounded-full ${showNasdaq ? 'bg-purple-500' : 'bg-gray-700'} border-2 border-purple-400 group-hover:scale-110 transition-transform`}></div>
                  <span className={`text-sm ${showNasdaq ? 'text-white' : 'text-gray-500'} font-medium`}>Nasdaq</span>
                </button>
                <button className="flex items-center gap-2 group" onClick={() => setShowDow(v => !v)}>
                  <div className={`w-3 h-3 rounded-full ${showDow ? 'bg-green-500' : 'bg-gray-700'} border-2 border-green-400 group-hover:scale-110 transition-transform`}></div>
                  <span className={`text-sm ${showDow ? 'text-white' : 'text-gray-500'} font-medium`}>Dow Jones</span>
                </button>
              </div>
              {/* Chart Tooltip */}
              {chartTooltip && (
                <div className="absolute z-20 px-4 py-2 bg-[#23263A] text-white rounded-lg shadow-lg border border-blue-500/20 text-xs left-0" style={{ left: chartTooltip.x, top: chartTooltip.y - 40 }}>
                  <div className="font-bold">{chartTooltip.label}</div>
                  <div className="">{chartTooltip.value}</div>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* For x-axis labels: */}
        <div className="flex justify-between text-xs text-gray-500 mt-2 px-2">
          {labels.map((l: string, i: number) => i % Math.ceil(labels.length / 7) === 0 ? <span key={l}>{l}</span> : <span key={l}></span>)}
        </div>
      </div>
      {/* Top Movers */}
      <div className="bg-gradient-to-br from-[#151822]/90 to-[#1A1F2E]/90 p-6 rounded-xl border border-gray-800/30 shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-medium flex items-center gap-2">
            <TrendingUpIcon className="h-5 w-5 text-green-400" />
            Top Movers Today
          </h2>
          <button className="text-blue-400 text-sm flex items-center hover:underline" onClick={() => setShowMoversModal(true)}>
            View All <ArrowRightIcon className="h-4 w-4 ml-1" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Gainers */}
          <div>
            <h3 className="text-sm text-gray-400 mb-3 flex items-center">
              <TrendingUpIcon className="h-4 w-4 text-green-500 mr-2" />
              Top Gainers
            </h3>
            <div className="space-y-3">
              {topGainers.map(stock => (
                <div
                  key={stock.symbol}
                  className={`flex justify-between items-center p-3 bg-[#1E2230]/90 rounded-xl border border-gray-800/40 hover:bg-[#262B3D] transition-colors group cursor-pointer relative overflow-hidden ${moverFlash[stock.symbol] === 'up' ? 'animate-flashGreen' : moverFlash[stock.symbol] === 'down' ? 'animate-flashRed' : ''} ${highlightedMover === stock.symbol ? 'ring-2 ring-blue-400' : ''}`}
                  onClick={() => {
                    setHighlightedMover(stock.symbol);
                    setSelectedAsset({ symbol: stock.symbol, name: stock.name, type: 'stock' });
                  }}
                  tabIndex={0}
                >
                  {/* Glassy effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-blue-500/5 to-yellow-500/5 blur-2xl opacity-60 pointer-events-none z-0" />
                  <div>
                    <div className="font-medium text-white drop-shadow">{stock.symbol}</div>
                    <div className="text-xs text-gray-400">{stock.name}</div>
                    {/* Mini sparkline */}
                    <svg width="60" height="18" viewBox="0 0 60 18" className="mt-1">
                      <polyline
                        fill="none"
                        stroke="#22c55e"
                        strokeWidth="2"
                        points={getSparkline(stock.symbol).map((v, i) => `${i * 10},${18 - v}`).join(' ')}
                      />
                    </svg>
                  </div>
                  <div className="text-right z-10">
                    <div className="font-medium text-white drop-shadow">{stock.price}</div>
                    <div className="text-xs text-green-500">+{stock.change}%</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Losers */}
          <div>
            <h3 className="text-sm text-gray-400 mb-3 flex items-center">
              <TrendingDownIcon className="h-4 w-4 text-red-500 mr-2" />
              Top Losers
            </h3>
            <div className="space-y-3">
              {topLosers.map(stock => (
                <div
                  key={stock.symbol}
                  className={`flex justify-between items-center p-3 bg-[#1E2230]/90 rounded-xl border border-gray-800/40 hover:bg-[#262B3D] transition-colors group cursor-pointer relative overflow-hidden ${moverFlash[stock.symbol] === 'up' ? 'animate-flashGreen' : moverFlash[stock.symbol] === 'down' ? 'animate-flashRed' : ''} ${highlightedMover === stock.symbol ? 'ring-2 ring-blue-400' : ''}`}
                  onClick={() => {
                    setHighlightedMover(stock.symbol);
                    setSelectedAsset({ symbol: stock.symbol, name: stock.name, type: 'stock' });
                  }}
                  tabIndex={0}
                >
                  {/* Glassy effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-blue-500/5 to-yellow-500/5 blur-2xl opacity-60 pointer-events-none z-0" />
                  <div>
                    <div className="font-medium text-white drop-shadow">{stock.symbol}</div>
                    <div className="text-xs text-gray-400">{stock.name}</div>
                    {/* Mini sparkline */}
                    <svg width="60" height="18" viewBox="0 0 60 18" className="mt-1">
                      <polyline
                        fill="none"
                        stroke="#ef4444"
                        strokeWidth="2"
                        points={getSparkline(stock.symbol).map((v, i) => `${i * 10},${18 - v}`).join(' ')}
                      />
                    </svg>
                  </div>
                  <div className="text-right z-10">
                    <div className="font-medium text-white drop-shadow">{stock.price}</div>
                    <div className="text-xs text-red-500">{stock.change}%</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Animations for price flash */}
        <style>{`
          @keyframes flashGreen { 0% { background: #22c55e33; } 100% { background: transparent; } }
          @keyframes flashRed { 0% { background: #ef444433; } 100% { background: transparent; } }
          .animate-flashGreen { animation: flashGreen 0.6s; }
          .animate-flashRed { animation: flashRed 0.6s; }
        `}</style>
        {/* Movers Modal */}
        {showMoversModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
            <div className="bg-[#181C2A] rounded-2xl shadow-2xl border border-[#23263A] p-8 w-full max-w-2xl relative animate-fadeIn">
              <button className="absolute top-4 right-4 text-gray-400 hover:text-yellow-500" onClick={() => setShowMoversModal(false)}>
                ×
              </button>
              <h2 className="text-2xl font-bold mb-6 text-white text-center flex items-center gap-2">
                <BarChart2Icon className="h-6 w-6 text-blue-400" />
                All Movers
              </h2>
              <div className="flex justify-center gap-4 mb-6">
                <button className={`px-4 py-2 rounded-lg font-medium ${moversTab === 'gainers' ? 'bg-green-500 text-white' : 'bg-[#23263A] text-gray-300 hover:bg-green-500/20'}`} onClick={() => setMoversTab('gainers')}>Gainers</button>
                <button className={`px-4 py-2 rounded-lg font-medium ${moversTab === 'losers' ? 'bg-red-500 text-white' : 'bg-[#23263A] text-gray-300 hover:bg-red-500/20'}`} onClick={() => setMoversTab('losers')}>Losers</button>
              </div>
              <div className="max-h-96 overflow-y-auto space-y-3">
                {(moversTab === 'gainers' ? topGainers : topLosers).map(stock => (
                  <div
                    key={stock.symbol}
                    className={`flex justify-between items-center p-4 bg-[#1E2230]/90 rounded-xl border border-gray-800/40 hover:bg-[#262B3D] transition-colors group cursor-pointer relative overflow-hidden ${moverFlash[stock.symbol] === 'up' ? 'animate-flashGreen' : moverFlash[stock.symbol] === 'down' ? 'animate-flashRed' : ''}`}
                    tabIndex={0}
                  >
                    <div>
                      <div className="font-medium text-white drop-shadow">{stock.symbol}</div>
                      <div className="text-xs text-gray-400">{stock.name}</div>
                      <svg width="60" height="18" viewBox="0 0 60 18" className="mt-1">
                        <polyline
                          fill="none"
                          stroke={moversTab === 'gainers' ? '#22c55e' : '#ef4444'}
                          strokeWidth="2"
                          points={getSparkline(stock.symbol).map((v, i) => `${i * 10},${18 - v}`).join(' ')}
                        />
                      </svg>
                    </div>
                    <div className="text-right z-10">
                      <div className="font-medium text-white drop-shadow">{stock.price}</div>
                      <div className={`text-xs ${moversTab === 'gainers' ? 'text-green-500' : 'text-red-500'}`}>{stock.change > 0 ? '+' : ''}{stock.change}%</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Market News */}
      <div className="bg-gradient-to-br from-[#151822]/90 to-[#1A1F2E]/90 p-6 rounded-xl border border-gray-800/30 shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-medium flex items-center gap-2">
            <NewspaperIcon className="h-5 w-5 text-blue-400" />
            Latest Market News
          </h2>
          <button className="text-blue-400 text-sm hover:underline" onClick={() => setShowNewsModal(true)}>View All</button>
        </div>
        {/* Featured News */}
        <div className="p-6 mb-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-yellow-500/10 border border-blue-500/20 shadow-xl flex flex-col md:flex-row gap-6 items-center cursor-pointer hover:scale-[1.01] transition-transform" onClick={() => setHighlightedNews(0)}>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-blue-500/10 text-blue-500 text-xs px-2 py-1 rounded-full">{marketNews[0].category.name}</span>
              <span className="text-xs text-gray-400">{marketNews[0].time}</span>
            </div>
            <h4 className="text-2xl font-bold mb-2 text-white drop-shadow">{marketNews[0].title}</h4>
            <p className="text-blue-100/90 text-base">{marketNews[0].summary}</p>
          </div>
        </div>
        {/* Other News */}
        <div className="space-y-4">
          {marketNews.slice(1).map((news, index) => (
            <div
              key={index + 1}
              className={`p-4 bg-[#1E2230]/90 rounded-lg border border-gray-800/40 shadow-md cursor-pointer transition-all duration-200 hover:bg-[#23263A] ${highlightedNews === index + 1 ? 'ring-2 ring-blue-400' : ''}`}
              onClick={() => setHighlightedNews(index + 1)}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className={`bg-${news.category.color}-500/10 text-${news.category.color}-500 text-xs px-2 py-1 rounded-full`}>
                  {news.category.name}
                </span>
                <span className="text-xs text-gray-400">{news.time}</span>
              </div>
              <h4 className="text-lg font-medium mb-2 text-white drop-shadow">{news.title}</h4>
              <p className="text-gray-400 text-sm">{news.summary}</p>
            </div>
          ))}
        </div>
        {/* News Modal */}
        {showNewsModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fadeIn">
            <div className="bg-[#181C2A] rounded-2xl shadow-2xl border border-[#23263A] p-8 w-full max-w-2xl relative">
              <button className="absolute top-4 right-4 text-gray-400 hover:text-yellow-500" onClick={() => setShowNewsModal(false)}>
                ×
              </button>
              <h2 className="text-2xl font-bold mb-6 text-white text-center flex items-center gap-2">
                <NewspaperIcon className="h-6 w-6 text-blue-400" />
                All Market News
              </h2>
              <div className="max-h-96 overflow-y-auto space-y-4">
                {marketNews.map((news, index) => (
                  <div
                    key={index}
                    className="p-4 bg-[#1E2230]/90 rounded-lg border border-gray-800/40 shadow-md cursor-pointer transition-all duration-200 hover:bg-[#23263A]"
                    onClick={() => setHighlightedNews(index)}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`bg-${news.category.color}-500/10 text-${news.category.color}-500 text-xs px-2 py-1 rounded-full`}>
                        {news.category.name}
                      </span>
                      <span className="text-xs text-gray-400">{news.time}</span>
                    </div>
                    <h4 className="text-lg font-medium mb-2 text-white drop-shadow">{news.title}</h4>
                    <p className="text-gray-400 text-sm">{news.summary}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Asset Chart Modal */}
      {selectedAsset && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[#181C2A] rounded-2xl shadow-2xl border border-[#23263A] p-8 w-full max-w-2xl relative">
            <button className="absolute top-4 right-4 text-gray-400 hover:text-yellow-500" onClick={() => setSelectedAsset(null)}>
              ×
            </button>
            <h2 className="text-2xl font-bold mb-6 text-white text-center flex items-center gap-2">
              <BarChart2Icon className="h-6 w-6 text-blue-400" />
              {selectedAsset.name} <span className="text-xs text-gray-400 ml-2">({selectedAsset.symbol})</span>
            </h2>
            <div className="flex justify-center gap-4 mb-6">
              {(['1D', '1W', '1M', '1Y'] as ChartTimeframe[]).map(tf => (
                <button
                  key={tf}
                  className={`px-4 py-2 rounded-lg font-medium ${assetChartTimeframe === tf ? 'bg-blue-500 text-white' : 'bg-[#23263A] text-gray-300 hover:bg-blue-500/20'}`}
                  onClick={() => setAssetChartTimeframe(tf)}
                >
                  {tf}
                </button>
              ))}
            </div>
            {/* Asset Chart */}
            {(() => {
              const tf = assetChartTimeframe;
              const { points, labels } = chartTimeframes[tf];
              const width = 600;
              const height = 200;
              const xStep = width / (points.length - 1);
              const yMax = 160;
              const yMin = 40;
              // Generate a unique base for each asset for demo
              const base = selectedAsset.symbol.split('').reduce((a, c) => a + c.charCodeAt(0), 0) % 100 + 50;
              const variance = selectedAsset.type === 'crypto' ? 12 : 6;
              const series = genAssetSeries(points.length, base, variance);
              const max = Math.max(...series);
              const min = Math.min(...series);
              const yArr = series.map(v => yMax - ((v - min) / (max - min + 1e-6)) * (yMax - yMin));
              const assetPath = getSmoothPath(points.map((p: number, i: number) => ({ x: i * xStep, y: yArr[i] })));
              return (
                <svg key={selectedAsset.symbol + tf} className="w-full h-48" viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none">
                  <path d={assetPath} fill="none" stroke="#fbbf24" strokeWidth="3" className="draw-curve" />
                  <style>{`
                    .draw-curve {
                      stroke-dasharray: 1000;
                      stroke-dashoffset: 1000;
                      animation: drawLine 1.2s cubic-bezier(.4,1.6,.6,1) forwards;
                    }
                    @keyframes drawLine {
                      to { stroke-dashoffset: 0; }
                    }
                  `}</style>
                </svg>
              );
            })()}
            <div className="flex justify-between text-xs text-gray-500 mt-2 px-2">
              {(() => {
                const tf = assetChartTimeframe;
                const { labels } = chartTimeframes[tf];
                return labels.map((l: string, i: number) => i % Math.ceil(labels.length / 7) === 0 ? <span key={l}>{l}</span> : <span key={l}></span>);
              })()}
            </div>
          </div>
        </div>
      )}
    </div>;
};
// Sample data for Markets page
const marketIndices = [{
  name: 'S&P 500',
  symbol: 'SPX',
  price: '4,783.45',
  change: 0.87,
  volume: '2.3B shares'
}, {
  name: 'Nasdaq',
  symbol: 'COMP',
  price: '16,742.39',
  change: 1.26,
  volume: '5.1B shares'
}, {
  name: 'Dow Jones',
  symbol: 'DJI',
  price: '38,239.98',
  change: 0.43,
  volume: '1.8B shares'
}, {
  name: 'Russell 2000',
  symbol: 'RUT',
  price: '2,008.21',
  change: -0.35,
  volume: '954M shares'
}, {
  name: 'VIX',
  symbol: 'VIX',
  price: '14.32',
  change: -5.67,
  volume: '123M contracts'
}, {
  name: 'Bitcoin',
  symbol: 'BTC/USD',
  price: '39,876.45',
  change: 2.34,
  volume: '$28.5B'
}, {
  name: 'Ethereum',
  symbol: 'ETH/USD',
  price: '2,284.12',
  change: 3.56,
  volume: '$15.2B'
}, {
  name: 'EUR/USD',
  symbol: 'EUR/USD',
  price: '1.0923',
  change: -0.25,
  volume: '$98.7B'
}, {
  name: 'Gold',
  symbol: 'XAU/USD',
  price: '1,943.20',
  change: 0.62,
  volume: '$12.3B'
}];
const topGainers = [{
  symbol: 'NVDA',
  name: 'NVIDIA Corporation',
  price: '$842.78',
  change: 4.23
}, {
  symbol: 'TSLA',
  name: 'Tesla Inc.',
  price: '$195.32',
  change: 3.87
}, {
  symbol: 'AAPL',
  name: 'Apple Inc.',
  price: '$187.45',
  change: 2.91
}, {
  symbol: 'AMZN',
  name: 'Amazon.com Inc.',
  price: '$178.92',
  change: 2.65
}, {
  symbol: 'MSFT',
  name: 'Microsoft Corp.',
  price: '$412.65',
  change: 1.89
}];
const topLosers = [{
  symbol: 'META',
  name: 'Meta Platforms Inc.',
  price: '$474.32',
  change: -2.87
}, {
  symbol: 'DIS',
  name: 'Walt Disney Co.',
  price: '$112.56',
  change: -2.45
}, {
  symbol: 'PFE',
  name: 'Pfizer Inc.',
  price: '$27.89',
  change: -2.12
}, {
  symbol: 'IBM',
  name: 'IBM Corp.',
  price: '$174.23',
  change: -1.76
}, {
  symbol: 'INTC',
  name: 'Intel Corp.',
  price: '$32.45',
  change: -1.54
}];
const marketNews = [{
  category: {
    name: 'Markets',
    color: 'blue'
  },
  time: '2 hours ago',
  title: 'Tech Stocks Rally as Fed Signals Potential Rate Cuts',
  summary: 'Major tech stocks surged today after the Federal Reserve hinted at potential interest rate cuts in the coming months, sending the Nasdaq to new record highs.'
}, {
  category: {
    name: 'Economy',
    color: 'green'
  },
  time: '5 hours ago',
  title: 'Inflation Data Shows Cooling Trend, Consumer Prices Rise 2.9%',
  summary: "The latest inflation report shows consumer prices rose 2.9% year-over-year, the smallest increase in over two years, suggesting the Fed's monetary policy is having its intended effect."
}, {
  category: {
    name: 'Crypto',
    color: 'purple'
  },
  time: '8 hours ago',
  title: 'Bitcoin Surpasses $40,000 as Institutional Adoption Accelerates',
  summary: 'Bitcoin has broken the $40,000 barrier for the first time in six months as major financial institutions announce new cryptocurrency investment products and services.'
}];