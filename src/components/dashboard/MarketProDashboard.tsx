import React, { useState } from 'react';
import { BarChart3Icon, TrendingUpIcon, TrendingDownIcon, AlertTriangleIcon, DollarSignIcon, CheckCircleIcon, XCircleIcon, AlertCircleIcon, LineChartIcon, ArrowRightIcon, RefreshCwIcon, InfoIcon, ChevronRightIcon, PieChartIcon, EyeIcon, EyeOffIcon, FilterIcon, ChevronDownIcon, BrainIcon } from 'lucide-react';
export const MarketProDashboard = () => {
  const [timeframe, setTimeframe] = useState('1M');
  const [showValues, setShowValues] = useState(true);
  const [chartLoading, setChartLoading] = useState(false);
  const refreshChart = () => {
    setChartLoading(true);
    setTimeout(() => {
      setChartLoading(false);
    }, 1500);
  };
  return <div className="space-y-6">
      {/* Portfolio Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-[#151822] to-[#1A1F2E] p-6 rounded-xl border border-gray-800/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-blue-500/20 group">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-gray-400 text-sm">Portfolio Value</p>
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 group-hover:from-blue-500 group-hover:to-blue-300 transition-all duration-300">
                {showValues ? '€24,395.00' : '••••••••'}
              </h3>
            </div>
            <div className="bg-gradient-to-br from-blue-500/30 to-blue-500/10 p-2 rounded-lg shadow-lg group-hover:shadow-blue-500/20 transition-all duration-300 group-hover:scale-110">
              <BarChart3Icon className="h-5 w-5 text-blue-500" />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm">
              <span className="text-green-500 flex items-center">
                <TrendingUpIcon className="h-4 w-4 mr-1" />
                3.2%
              </span>
              <span className="text-gray-400">today</span>
            </div>
            <button onClick={() => setShowValues(!showValues)} className="text-gray-400 hover:text-white transition-colors">
              {showValues ? <EyeIcon className="h-4 w-4" /> : <EyeOffIcon className="h-4 w-4" />}
            </button>
          </div>
        </div>
        <div className="bg-gradient-to-br from-[#151822] to-[#1A1F2E] p-6 rounded-xl border border-gray-800/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-green-500/20 group">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-gray-400 text-sm">Monthly Return</p>
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 group-hover:from-green-500 group-hover:to-green-300 transition-all duration-300">
                {showValues ? '+€1,245.50' : '••••••••'}
              </h3>
            </div>
            <div className="bg-gradient-to-br from-green-500/30 to-green-500/10 p-2 rounded-lg shadow-lg group-hover:shadow-green-500/20 transition-all duration-300 group-hover:scale-110">
              <TrendingUpIcon className="h-5 w-5 text-green-500" />
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-green-500 flex items-center">
              <TrendingUpIcon className="h-4 w-4 mr-1" />
              5.1%
            </span>
            <span className="text-gray-400">vs last month</span>
          </div>
        </div>
        <div className="bg-gradient-to-br from-[#151822] to-[#1A1F2E] p-6 rounded-xl border border-gray-800/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-yellow-500/20 group">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-gray-400 text-sm">Risk Level</p>
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 group-hover:from-yellow-500 group-hover:to-yellow-300 transition-all duration-300">
                Moderate
              </h3>
            </div>
            <div className="bg-gradient-to-br from-yellow-500/30 to-yellow-500/10 p-2 rounded-lg shadow-lg group-hover:shadow-yellow-500/20 transition-all duration-300 group-hover:scale-110">
              <AlertTriangleIcon className="h-5 w-5 text-yellow-500" />
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <div className="w-full bg-[#0B0E15] rounded-full h-2 overflow-hidden">
              <div className="bg-gradient-to-r from-yellow-500 to-yellow-400 h-2 rounded-full w-3/5 group-hover:animate-pulse"></div>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-[#151822] to-[#1A1F2E] p-6 rounded-xl border border-gray-800/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-teal-500/20 group">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-gray-400 text-sm">Cash Available</p>
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 group-hover:from-teal-500 group-hover:to-teal-300 transition-all duration-300">
                {showValues ? '€3,850.00' : '••••••••'}
              </h3>
            </div>
            <div className="bg-gradient-to-br from-teal-500/30 to-teal-500/10 p-2 rounded-lg shadow-lg group-hover:shadow-teal-500/20 transition-all duration-300 group-hover:scale-110">
              <DollarSignIcon className="h-5 w-5 text-teal-500" />
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <button className="text-xs bg-[#0B0E15] hover:bg-[#1A1F2E] px-2 py-1 rounded transition-colors hover:text-teal-400">
              Deposit
            </button>
            <button className="text-xs bg-[#0B0E15] hover:bg-[#1A1F2E] px-2 py-1 rounded transition-colors hover:text-teal-400">
              Withdraw
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Portfolio Performance Chart */}
        <div className="lg:col-span-2">
          <div className="bg-gradient-to-br from-[#151822] to-[#1A1F2E] p-6 rounded-xl border border-gray-800/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-blue-500/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
            <div className="flex justify-between items-center mb-6 relative z-10">
              <div className="flex items-center gap-3">
                <h3 className="text-lg font-medium">Portfolio Performance</h3>
                <div className="bg-blue-500/10 text-blue-400 text-xs px-2 py-1 rounded-full">
                  +12.4% YTD
                </div>
              </div>
              <div className="flex items-center gap-2">
                {['1D', '1W', '1M', '3M', '1Y', 'All'].map(period => <button key={period} className={`${timeframe === period ? 'bg-gradient-to-r from-blue-500 to-blue-400 text-black' : 'text-gray-400 hover:bg-[#1E2230] hover:text-white'} 
                      text-sm px-3 py-1 rounded-lg transition-all duration-200`} onClick={() => {
                setTimeframe(period);
                refreshChart();
              }}>
                    {period}
                  </button>)}
                <button className="bg-[#0B0E15] p-1 rounded-lg text-gray-400 hover:text-white transition-colors" onClick={refreshChart}>
                  <RefreshCwIcon className={`h-4 w-4 ${chartLoading ? 'animate-spin' : ''}`} />
                </button>
              </div>
            </div>
            <div className="h-64 relative z-10">
              {/* Placeholder for chart */}
              <div className="absolute inset-0 flex items-center justify-center">
                {chartLoading ? <div className="flex flex-col items-center">
                    <RefreshCwIcon className="h-8 w-8 text-blue-500 animate-spin mb-2" />
                    <p className="text-sm text-gray-400">
                      Loading chart data...
                    </p>
                  </div> : <div className="w-full h-full relative">
                    <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-blue-500/10 to-transparent rounded-lg"></div>
                    {/* Chart lines */}
                    <svg className="w-full h-full" viewBox="0 0 1000 400" preserveAspectRatio="none">
                      {/* Portfolio Value Line - with animation */}
                      <path d="M0,300 Q50,290 100,285 T200,270 T300,250 T400,220 T500,235 T600,210 T700,190 T800,160 T900,140 T1000,120" fill="none" stroke="url(#blueGradient)" strokeWidth="3" className="animate-drawLine" strokeDasharray="1200" strokeDashoffset="1200" style={{
                    animationFillMode: 'forwards',
                    animationDuration: '1.5s'
                  }} />
                      {/* Benchmark Line - with animation */}
                      <path d="M0,320 Q50,315 100,310 T200,300 T300,290 T400,280 T500,285 T600,270 T700,260 T800,250 T900,240 T1000,230" fill="none" stroke="#6b7280" strokeWidth="2" strokeDasharray="5,5" className="animate-drawLine" style={{
                    animationDelay: '0.5s',
                    animationFillMode: 'forwards',
                    animationDuration: '1.5s'
                  }} />
                      {/* Define gradient for line */}
                      <defs>
                        <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#3b82f6" />
                          <stop offset="100%" stopColor="#60a5fa" />
                        </linearGradient>
                      </defs>
                      {/* Data points with hover effects */}
                      <circle cx="200" cy="270" r="4" fill="#3b82f6" className="chart-point" />
                      <circle cx="400" cy="220" r="4" fill="#3b82f6" className="chart-point" />
                      <circle cx="600" cy="210" r="4" fill="#3b82f6" className="chart-point" />
                      <circle cx="800" cy="160" r="4" fill="#3b82f6" className="chart-point" />
                      <circle cx="1000" cy="120" r="4" fill="#3b82f6" className="chart-point" />
                    </svg>
                    {/* Chart Legend */}
                    <div className="absolute top-4 right-4 bg-[#1A1F2E]/80 p-3 rounded-lg backdrop-blur-sm border border-gray-800/50">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"></div>
                        <span className="text-sm">Your Portfolio</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                        <span className="text-sm">S&P 500 (Benchmark)</span>
                      </div>
                    </div>
                    {/* Performance Stats */}
                    <div className="absolute top-4 left-4 bg-[#1A1F2E]/80 p-3 rounded-lg backdrop-blur-sm border border-gray-800/50">
                      <div className="text-sm text-gray-400 mb-1">
                        Performance ({timeframe})
                      </div>
                      <div className="text-xl font-bold text-green-500">
                        +12.4%
                      </div>
                      <div className="text-xs text-gray-400">
                        vs. Benchmark: +4.2%
                      </div>
                    </div>
                  </div>}
              </div>
            </div>
            {/* Time periods label */}
            <div className="flex justify-between text-xs text-gray-500 mt-2 px-2">
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
              <span>May</span>
              <span>Jun</span>
              <span>Jul</span>
            </div>
          </div>
        </div>
        {/* Asset Allocation */}
        <div className="lg:col-span-1">
          <div className="bg-gradient-to-br from-[#151822] to-[#1A1F2E] p-6 rounded-xl border border-gray-800/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-purple-500/20 h-full relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/5 rounded-full blur-3xl"></div>
            <div className="flex justify-between items-center mb-6 relative z-10">
              <h3 className="text-lg font-medium">Asset Allocation</h3>
              <button
                className="text-blue-400 text-sm hover:text-blue-300 transition-colors flex items-center group"
                onClick={() => window.location.href = '/dashboard/tools/portfolio-optimization'}
              >
                Optimize
                <ArrowRightIcon className="h-3 w-3 ml-1 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="mb-6 relative z-10">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500 p-1 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
                <div className="w-full h-full rounded-full bg-[#151822] flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-sm text-gray-400">Total</div>
                    <div className="font-bold">
                      {showValues ? '€24.4k' : '•••••'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-3 relative z-10">
              <div className="flex justify-between items-center p-2 hover:bg-[#1E2230] rounded-lg transition-all duration-200 cursor-pointer group">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-400"></div>
                  <span className="text-sm group-hover:text-blue-400 transition-colors">
                    Stocks
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm">{showValues ? '45%' : '••'}</span>
                  <ChevronRightIcon className="h-4 w-4 text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
              <div className="flex justify-between items-center p-2 hover:bg-[#1E2230] rounded-lg transition-all duration-200 cursor-pointer group">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-green-500 to-green-400"></div>
                  <span className="text-sm group-hover:text-green-400 transition-colors">
                    ETFs
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm">{showValues ? '30%' : '••'}</span>
                  <ChevronRightIcon className="h-4 w-4 text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
              <div className="flex justify-between items-center p-2 hover:bg-[#1E2230] rounded-lg transition-all duration-200 cursor-pointer group">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-400"></div>
                  <span className="text-sm group-hover:text-yellow-400 transition-colors">
                    Bonds
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm">{showValues ? '15%' : '••'}</span>
                  <ChevronRightIcon className="h-4 w-4 text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
              <div className="flex justify-between items-center p-2 hover:bg-[#1E2230] rounded-lg transition-all duration-200 cursor-pointer group">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-purple-400"></div>
                  <span className="text-sm group-hover:text-purple-400 transition-colors">
                    Crypto
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm">{showValues ? '10%' : '••'}</span>
                  <ChevronRightIcon className="h-4 w-4 text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
              <div className="mt-4 bg-gradient-to-r from-blue-500/10 to-blue-500/5 p-3 rounded-lg border border-blue-500/20 shadow-md">
                <div className="flex items-center gap-2 mb-2">
                  <InfoIcon className="h-4 w-4 text-blue-400" />
                  <span className="text-sm font-medium text-blue-400">AI Insight</span>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">
                  {/* TODO: Replace with dynamic AI insight from backend */}
                  Your portfolio could benefit from a 5% reallocation from ETFs to bonds to better balance risk in current market conditions.
                </p>
                <button
                  className="text-xs text-blue-400 mt-2 hover:text-blue-300 transition-colors"
                  onClick={() => window.location.href = '/dashboard/tools/portfolio-optimization'}
                >
                  View recommendation →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* AI Recommendations */}
      <div className="bg-gradient-to-br from-[#151822] to-[#1A1F2E] p-6 rounded-xl border border-gray-800/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-blue-500/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
        <div className="flex justify-between items-center mb-6 relative z-10">
          <div className="flex items-center gap-3">
            <h3 className="text-lg font-medium bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              AI Investment Recommendations
            </h3>
            <div className="flex items-center gap-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 px-2 py-1 rounded-full border border-blue-500/20">
              <BrainIcon className="h-3 w-3 text-blue-400" />
              <span className="text-xs text-blue-400">AI-Powered</span>
            </div>
          </div>
          <div className="text-sm text-gray-400 flex items-center gap-2">
            Updated 2 hours ago
            <button onClick={refreshChart} className="bg-[#0B0E15] p-1 rounded-lg text-gray-400 hover:text-white transition-colors">
              <RefreshCwIcon className={`h-4 w-4 ${chartLoading ? 'animate-spin' : ''}`} />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          {/* Buy recommendations */}
          <div className="bg-[#1E2230]/80 backdrop-blur-sm p-5 rounded-lg border border-gray-800/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-green-500/20 group">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-2">
                <div className="bg-gradient-to-br from-green-500/30 to-green-500/10 p-2 rounded-full shadow-lg group-hover:shadow-green-500/20 transition-all duration-300 group-hover:scale-110">
                  <CheckCircleIcon className="h-5 w-5 text-green-500" />
                </div>
                <h4 className="font-medium">Buy</h4>
              </div>
              <span className="text-xs bg-green-500/10 text-green-500 px-2 py-1 rounded-full animate-pulse">
                3 New
              </span>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-2 bg-[#151822]/70 hover:bg-[#151822] rounded-lg transition-all duration-200 cursor-pointer group">
                <div>
                  <div className="font-medium group-hover:text-green-400 transition-colors">
                    AAPL
                  </div>
                  <div className="text-xs text-gray-400">Apple Inc.</div>
                </div>
                <div className="text-green-500 flex items-center gap-1">
                  <TrendingUpIcon className="h-3 w-3" />
                  +2.3%
                </div>
              </div>
              <div className="flex justify-between items-center p-2 bg-[#151822]/70 hover:bg-[#151822] rounded-lg transition-all duration-200 cursor-pointer group">
                <div>
                  <div className="font-medium group-hover:text-green-400 transition-colors">
                    MSFT
                  </div>
                  <div className="text-xs text-gray-400">Microsoft Corp.</div>
                </div>
                <div className="text-green-500 flex items-center gap-1">
                  <TrendingUpIcon className="h-3 w-3" />
                  +1.8%
                </div>
              </div>
              <div className="flex justify-between items-center p-2 bg-[#151822]/70 hover:bg-[#151822] rounded-lg transition-all duration-200 cursor-pointer group">
                <div>
                  <div className="font-medium group-hover:text-green-400 transition-colors">
                    NVDA
                  </div>
                  <div className="text-xs text-gray-400">NVIDIA Corp.</div>
                </div>
                <div className="text-green-500 flex items-center gap-1">
                  <TrendingUpIcon className="h-3 w-3" />
                  +3.5%
                </div>
              </div>
            </div>
          </div>
          {/* Hold recommendations */}
          <div className="bg-[#1E2230]/80 backdrop-blur-sm p-5 rounded-lg border border-gray-800/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-yellow-500/20 group">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-2">
                <div className="bg-gradient-to-br from-yellow-500/30 to-yellow-500/10 p-2 rounded-full shadow-lg group-hover:shadow-yellow-500/20 transition-all duration-300 group-hover:scale-110">
                  <AlertCircleIcon className="h-5 w-5 text-yellow-500" />
                </div>
                <h4 className="font-medium">Hold</h4>
              </div>
              <span className="text-xs bg-yellow-500/10 text-yellow-500 px-2 py-1 rounded-full">
                5 Assets
              </span>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-2 bg-[#151822]/70 hover:bg-[#151822] rounded-lg transition-all duration-200 cursor-pointer group">
                <div>
                  <div className="font-medium group-hover:text-yellow-400 transition-colors">
                    AMZN
                  </div>
                  <div className="text-xs text-gray-400">Amazon.com Inc.</div>
                </div>
                <div className="text-yellow-500 flex items-center gap-1">
                  <TrendingUpIcon className="h-3 w-3" />
                  +0.5%
                </div>
              </div>
              <div className="flex justify-between items-center p-2 bg-[#151822]/70 hover:bg-[#151822] rounded-lg transition-all duration-200 cursor-pointer group">
                <div>
                  <div className="font-medium group-hover:text-yellow-400 transition-colors">
                    TSLA
                  </div>
                  <div className="text-xs text-gray-400">Tesla Inc.</div>
                </div>
                <div className="text-yellow-500 flex items-center gap-1">
                  <TrendingDownIcon className="h-3 w-3" />
                  -0.2%
                </div>
              </div>
              <div className="flex justify-between items-center p-2 bg-[#151822]/70 hover:bg-[#151822] rounded-lg transition-all duration-200 cursor-pointer group">
                <div>
                  <div className="font-medium group-hover:text-yellow-400 transition-colors">
                    GOOGL
                  </div>
                  <div className="text-xs text-gray-400">Alphabet Inc.</div>
                </div>
                <div className="text-yellow-500 flex items-center gap-1">
                  <TrendingUpIcon className="h-3 w-3" />
                  +0.3%
                </div>
              </div>
            </div>
          </div>
          {/* Sell recommendations */}
          <div className="bg-[#1E2230]/80 backdrop-blur-sm p-5 rounded-lg border border-gray-800/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-red-500/20 group">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-2">
                <div className="bg-gradient-to-br from-red-500/30 to-red-500/10 p-2 rounded-full shadow-lg group-hover:shadow-red-500/20 transition-all duration-300 group-hover:scale-110">
                  <XCircleIcon className="h-5 w-5 text-red-500" />
                </div>
                <h4 className="font-medium">Sell</h4>
              </div>
              <span className="text-xs bg-red-500/10 text-red-500 px-2 py-1 rounded-full">
                2 Assets
              </span>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-2 bg-[#151822]/70 hover:bg-[#151822] rounded-lg transition-all duration-200 cursor-pointer group">
                <div>
                  <div className="font-medium group-hover:text-red-400 transition-colors">
                    META
                  </div>
                  <div className="text-xs text-gray-400">
                    Meta Platforms Inc.
                  </div>
                </div>
                <div className="text-red-500 flex items-center gap-1">
                  <TrendingDownIcon className="h-3 w-3" />
                  -1.7%
                </div>
              </div>
              <div className="flex justify-between items-center p-2 bg-[#151822]/70 hover:bg-[#151822] rounded-lg transition-all duration-200 cursor-pointer group">
                <div>
                  <div className="font-medium group-hover:text-red-400 transition-colors">
                    DIS
                  </div>
                  <div className="text-xs text-gray-400">Walt Disney Co.</div>
                </div>
                <div className="text-red-500 flex items-center gap-1">
                  <TrendingDownIcon className="h-3 w-3" />
                  -2.1%
                </div>
              </div>
              <div className="flex justify-between items-center p-2 bg-[#151822]/70 hover:bg-[#151822] rounded-lg transition-all duration-200 cursor-pointer group opacity-50">
                <div>
                  <div className="font-medium">—</div>
                  <div className="text-xs text-gray-400">
                    No more recommendations
                  </div>
                </div>
                <div>—</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Market Sentiment */}
      <div className="bg-gradient-to-br from-[#151822] to-[#1A1F2E] p-6 rounded-xl border border-gray-800/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-purple-500/20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="flex justify-between items-center mb-6 relative z-10">
          <h3 className="text-lg font-medium bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            Market Sentiment Analysis
          </h3>
          <button
            className="text-blue-400 text-sm hover:text-blue-300 transition-colors flex items-center group"
            onClick={() => window.location.href = '/dashboard/tools/sentiment-analysis'}
          >
            View Details
            <ArrowRightIcon className="h-3 w-3 ml-1 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
          <div className="bg-[#1E2230]/80 backdrop-blur-sm p-5 rounded-lg border border-gray-800/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-blue-500/20 group cursor-pointer">
            <div className="flex flex-col items-center">
              <div className="text-sm text-gray-400 mb-2">Overall Market</div>
              <div className="w-24 h-24 rounded-full border-4 border-blue-500 flex items-center justify-center mb-2 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/20 group-hover:scale-105">
                <div className="text-2xl font-bold group-hover:text-blue-400 transition-colors">
                  65
                </div>
              </div>
              <div className="text-blue-500 font-medium">Bullish</div>
            </div>
          </div>
          <div className="bg-[#1E2230]/80 backdrop-blur-sm p-5 rounded-lg border border-gray-800/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-green-500/20 group cursor-pointer">
            <div className="flex flex-col items-center">
              <div className="text-sm text-gray-400 mb-2">Tech Sector</div>
              <div className="w-24 h-24 rounded-full border-4 border-green-500 flex items-center justify-center mb-2 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-green-500/20 group-hover:scale-105">
                <div className="text-2xl font-bold group-hover:text-green-400 transition-colors">
                  78
                </div>
              </div>
              <div className="text-green-500 font-medium">Strong Buy</div>
            </div>
          </div>
          <div className="bg-[#1E2230]/80 backdrop-blur-sm p-5 rounded-lg border border-gray-800/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-yellow-500/20 group cursor-pointer">
            <div className="flex flex-col items-center">
              <div className="text-sm text-gray-400 mb-2">Energy Sector</div>
              <div className="w-24 h-24 rounded-full border-4 border-yellow-500 flex items-center justify-center mb-2 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-yellow-500/20 group-hover:scale-105">
                <div className="text-2xl font-bold group-hover:text-yellow-400 transition-colors">
                  52
                </div>
              </div>
              <div className="text-yellow-500 font-medium">Neutral</div>
            </div>
          </div>
          <div className="bg-[#1E2230]/80 backdrop-blur-sm p-5 rounded-lg border border-gray-800/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-red-500/20 group cursor-pointer">
            <div className="flex flex-col items-center">
              <div className="text-sm text-gray-400 mb-2">Financial Sector</div>
              <div className="w-24 h-24 rounded-full border-4 border-red-500 flex items-center justify-center mb-2 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-red-500/20 group-hover:scale-105">
                <div className="text-2xl font-bold group-hover:text-red-400 transition-colors">
                  42
                </div>
              </div>
              <div className="text-red-500 font-medium">Bearish</div>
            </div>
          </div>
        </div>
      </div>
      {/* Custom animations */}
      <style>{`
        @keyframes drawLine {
          to {
            stroke-dashoffset: 0;
          }
        }
        .animate-drawLine {
          animation: drawLine 1.5s ease-in-out forwards;
        }
        .chart-point {
          transition: r 0.2s ease-in-out;
        }
        .chart-point:hover {
          r: 6;
          filter: drop-shadow(0 0 4px rgba(59, 130, 246, 0.7));
        }
      `}</style>
    </div>;
};