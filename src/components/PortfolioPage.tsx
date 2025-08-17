import React, { useState } from 'react';
import { TrendingUpIcon, TrendingDownIcon, BarChart3Icon, PieChartIcon, LineChartIcon, AlertTriangleIcon, DollarSignIcon, ArrowRightIcon, FilterIcon, EyeIcon, EyeOffIcon, PlusIcon, MinusIcon, SettingsIcon } from 'lucide-react';
export const PortfolioPage = () => {
  const [showBalance, setShowBalance] = useState(true);
  const [timeframe, setTimeframe] = useState('1M');
  return <div className="space-y-6">
      {/* Portfolio Summary */}
      <div className="bg-[#151822] p-6 rounded-xl">
        <div className="flex flex-wrap justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <h1 className="text-xl font-bold">My Portfolio</h1>
            <button onClick={() => setShowBalance(!showBalance)} className="text-gray-400 hover:text-white">
              {showBalance ? <EyeIcon className="h-5 w-5" /> : <EyeOffIcon className="h-5 w-5" />}
            </button>
          </div>
          <div className="flex items-center gap-3">
            <button className="bg-[#1E2230] hover:bg-[#262B3D] p-2 rounded-lg">
              <FilterIcon className="h-5 w-5 text-gray-400" />
            </button>
            <button className="bg-[#1E2230] hover:bg-[#262B3D] p-2 rounded-lg">
              <SettingsIcon className="h-5 w-5 text-gray-400" />
            </button>
            <button className="bg-yellow-500 text-black px-4 py-2 rounded-lg flex items-center gap-2">
              <PlusIcon className="h-4 w-4" />
              Add Asset
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-[#1E2230] p-6 rounded-xl">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-gray-400 text-sm">Total Value</p>
                <h3 className="text-2xl font-bold">
                  {showBalance ? '€24,395.00' : '•••••••'}
                </h3>
              </div>
              <div className="bg-blue-500/10 p-2 rounded-lg">
                <BarChart3Icon className="h-5 w-5 text-blue-500" />
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-green-500 flex items-center">
                <TrendingUpIcon className="h-4 w-4 mr-1" />
                3.2%
              </span>
              <span className="text-gray-400">vs last month</span>
            </div>
          </div>
          <div className="bg-[#1E2230] p-6 rounded-xl">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-gray-400 text-sm">Unrealized Gains</p>
                <h3 className="text-2xl font-bold">
                  {showBalance ? '+€2,845.50' : '•••••••'}
                </h3>
              </div>
              <div className="bg-green-500/10 p-2 rounded-lg">
                <TrendingUpIcon className="h-5 w-5 text-green-500" />
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-green-500 flex items-center">
                <TrendingUpIcon className="h-4 w-4 mr-1" />
                13.2%
              </span>
              <span className="text-gray-400">all time</span>
            </div>
          </div>
          <div className="bg-[#1E2230] p-6 rounded-xl">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-gray-400 text-sm">Risk Level</p>
                <h3 className="text-2xl font-bold">Moderate</h3>
              </div>
              <div className="bg-yellow-500/10 p-2 rounded-lg">
                <AlertTriangleIcon className="h-5 w-5 text-yellow-500" />
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-full bg-[#151822] rounded-full h-2">
                <div className="bg-yellow-500 h-2 rounded-full w-3/5"></div>
              </div>
            </div>
          </div>
          <div className="bg-[#1E2230] p-6 rounded-xl">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-gray-400 text-sm">Cash Available</p>
                <h3 className="text-2xl font-bold">
                  {showBalance ? '€3,850.00' : '•••••••'}
                </h3>
              </div>
              <div className="bg-teal-500/10 p-2 rounded-lg">
                <DollarSignIcon className="h-5 w-5 text-teal-500" />
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <button className="text-xs bg-[#151822] hover:bg-[#0B0E15] px-2 py-1 rounded transition-colors">
                Deposit
              </button>
              <button className="text-xs bg-[#151822] hover:bg-[#0B0E15] px-2 py-1 rounded transition-colors">
                Withdraw
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Portfolio Performance Chart */}
      <div className="bg-[#151822] p-6 rounded-xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-medium">Portfolio Performance</h2>
          <div className="flex items-center gap-2">
            <button className={`text-sm px-3 py-1 rounded-lg ${timeframe === '1W' ? 'bg-yellow-500 text-black' : 'text-gray-400 hover:bg-[#1E2230]'}`} onClick={() => setTimeframe('1W')}>
              1W
            </button>
            <button className={`text-sm px-3 py-1 rounded-lg ${timeframe === '1M' ? 'bg-yellow-500 text-black' : 'text-gray-400 hover:bg-[#1E2230]'}`} onClick={() => setTimeframe('1M')}>
              1M
            </button>
            <button className={`text-sm px-3 py-1 rounded-lg ${timeframe === '3M' ? 'bg-yellow-500 text-black' : 'text-gray-400 hover:bg-[#1E2230]'}`} onClick={() => setTimeframe('3M')}>
              3M
            </button>
            <button className={`text-sm px-3 py-1 rounded-lg ${timeframe === '1Y' ? 'bg-yellow-500 text-black' : 'text-gray-400 hover:bg-[#1E2230]'}`} onClick={() => setTimeframe('1Y')}>
              1Y
            </button>
            <button className={`text-sm px-3 py-1 rounded-lg ${timeframe === 'All' ? 'bg-yellow-500 text-black' : 'text-gray-400 hover:bg-[#1E2230]'}`} onClick={() => setTimeframe('All')}>
              All
            </button>
          </div>
        </div>
        <div className="h-80 relative">
          {/* Placeholder for chart */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-full relative">
              <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-yellow-500/10 to-transparent rounded-lg"></div>
              {/* Chart lines */}
              <svg className="w-full h-full" viewBox="0 0 1000 400" preserveAspectRatio="none">
                {/* Portfolio Value Line */}
                <path d="M0,300 Q50,290 100,285 T200,270 T300,250 T400,220 T500,235 T600,210 T700,190 T800,160 T900,140 T1000,120" fill="none" stroke="#eab308" strokeWidth="3" />
                {/* Benchmark Line */}
                <path d="M0,320 Q50,315 100,310 T200,300 T300,290 T400,280 T500,285 T600,270 T700,260 T800,250 T900,240 T1000,230" fill="none" stroke="#6b7280" strokeWidth="2" strokeDasharray="5,5" />
                {/* Data points */}
                <circle cx="200" cy="270" r="4" fill="#eab308" />
                <circle cx="400" cy="220" r="4" fill="#eab308" />
                <circle cx="600" cy="210" r="4" fill="#eab308" />
                <circle cx="800" cy="160" r="4" fill="#eab308" />
                <circle cx="1000" cy="120" r="4" fill="#eab308" />
              </svg>
              {/* Chart Legend */}
              <div className="absolute top-4 right-4 bg-[#1A1F2E]/80 p-3 rounded-lg backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span className="text-sm">Your Portfolio</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                  <span className="text-sm">S&P 500 (Benchmark)</span>
                </div>
              </div>
              {/* Performance Stats */}
              <div className="absolute top-4 left-4 bg-[#1A1F2E]/80 p-3 rounded-lg backdrop-blur-sm">
                <div className="text-sm text-gray-400 mb-1">
                  Performance ({timeframe})
                </div>
                <div className="text-xl font-bold text-green-500">+12.4%</div>
                <div className="text-xs text-gray-400">
                  vs. Benchmark: +4.2%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Portfolio Holdings */}
      <div className="bg-[#151822] p-6 rounded-xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-medium">Holdings</h2>
          <div className="flex items-center gap-3">
            <div className="text-sm text-gray-400">
              {showBalance ? '€24,395.00' : '•••••••'} Total
            </div>
            <button className="text-blue-400 text-sm flex items-center">
              View All <ArrowRightIcon className="h-4 w-4 ml-1" />
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-gray-400 text-sm border-b border-gray-800">
                <th className="pb-3 font-medium">Asset</th>
                <th className="pb-3 font-medium">Price</th>
                <th className="pb-3 font-medium">24h</th>
                <th className="pb-3 font-medium">Holdings</th>
                <th className="pb-3 font-medium">Value</th>
                <th className="pb-3 font-medium">Allocation</th>
                <th className="pb-3 font-medium">P/L</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {portfolioHoldings.map(holding => <tr key={holding.symbol} className="text-sm hover:bg-[#1E2230]">
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <div className={`bg-${holding.color}-500/10 p-2 rounded-lg`}>
                        <holding.icon className={`h-5 w-5 text-${holding.color}-500`} />
                      </div>
                      <div>
                        <div className="font-medium">{holding.symbol}</div>
                        <div className="text-xs text-gray-400">
                          {holding.name}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4">{holding.price}</td>
                  <td className={`py-4 ${holding.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                    <div className="flex items-center">
                      {holding.change >= 0 ? <TrendingUpIcon className="h-4 w-4 mr-1" /> : <TrendingDownIcon className="h-4 w-4 mr-1" />}
                      {holding.change >= 0 ? '+' : ''}
                      {holding.change}%
                    </div>
                  </td>
                  <td className="py-4">
                    {showBalance ? holding.holdings : '•••••'}
                  </td>
                  <td className="py-4">
                    {showBalance ? holding.value : '•••••••'}
                  </td>
                  <td className="py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-16 bg-[#0B0E15] rounded-full h-2">
                        <div className={`bg-${holding.color}-500 h-2 rounded-full`} style={{
                      width: `${holding.allocation}%`
                    }}></div>
                      </div>
                      <span>{holding.allocation}%</span>
                    </div>
                  </td>
                  <td className={`py-4 ${holding.profitLoss >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {showBalance ? (holding.profitLoss >= 0 ? '+' : '') + holding.profitLoss + '%' : '•••••'}
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
      </div>
      {/* Asset Allocation */}
      <div className="bg-[#151822] p-6 rounded-xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-medium">Asset Allocation</h2>
          <button className="text-blue-400 text-sm">Optimize</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <div className="relative w-48 h-48 mx-auto">
              <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500 p-1">
                <div className="w-full h-full rounded-full bg-[#151822] flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-sm text-gray-400">Total</div>
                    <div className="font-bold">
                      {showBalance ? '€24.4k' : '•••••'}
                    </div>
                  </div>
                </div>
              </div>
              {/* Pie chart segments - these would be properly calculated in a real chart */}
              <svg className="absolute inset-0" viewBox="0 0 100 100">
                {/* Blue segment - 45% */}
                <path d="M50,50 L50,0 A50,50 0 0,1 97.5,65.5 L50,50" fill="#3b82f6" />
                {/* Green segment - 30% */}
                <path d="M50,50 L97.5,65.5 A50,50 0 0,1 29.5,95.5 L50,50" fill="#10b981" />
                {/* Yellow segment - 25% */}
                <path d="M50,50 L29.5,95.5 A50,50 0 0,1 50,0 L50,50" fill="#eab308" />
              </svg>
            </div>
          </div>
          <div className="md:col-span-2">
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-[#1E2230] rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                  <div>
                    <div className="font-medium">Stocks</div>
                    <div className="text-xs text-gray-400">
                      US & International Equities
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-medium">
                    {showBalance ? '€10,977.75' : '•••••••'}
                  </div>
                  <div className="text-xs text-gray-400">45% of portfolio</div>
                </div>
              </div>
              <div className="flex justify-between items-center p-3 bg-[#1E2230] rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-green-500"></div>
                  <div>
                    <div className="font-medium">Crypto</div>
                    <div className="text-xs text-gray-400">
                      Bitcoin, Ethereum & Altcoins
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-medium">
                    {showBalance ? '€7,318.50' : '•••••••'}
                  </div>
                  <div className="text-xs text-gray-400">30% of portfolio</div>
                </div>
              </div>
              <div className="flex justify-between items-center p-3 bg-[#1E2230] rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
                  <div>
                    <div className="font-medium">Bonds & Cash</div>
                    <div className="text-xs text-gray-400">
                      Fixed Income & Liquid Assets
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-medium">
                    {showBalance ? '€6,098.75' : '•••••••'}
                  </div>
                  <div className="text-xs text-gray-400">25% of portfolio</div>
                </div>
              </div>
              <div className="p-4 bg-[#1A1F2E] rounded-lg border border-dashed border-blue-500/30">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-500/10 p-2 rounded-full mt-1">
                    <AlertTriangleIcon className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">
                      Allocation Recommendation
                    </h4>
                    <p className="text-sm text-gray-400 mb-3">
                      Your portfolio is slightly overweight in crypto assets
                      compared to your risk profile. Consider rebalancing to
                      reduce volatility.
                    </p>
                    <button className="text-sm bg-blue-500 text-white px-3 py-1 rounded-lg">
                      View Suggestions
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
// Sample data for Portfolio page
const portfolioHoldings = [{
  symbol: 'AAPL',
  name: 'Apple Inc.',
  price: '$187.45',
  change: 1.24,
  holdings: '12.5 shares',
  value: '€2,343.13',
  allocation: 9.6,
  profitLoss: 24.5,
  icon: BarChart3Icon,
  color: 'blue'
}, {
  symbol: 'MSFT',
  name: 'Microsoft Corp.',
  price: '$412.65',
  change: 0.89,
  holdings: '8 shares',
  value: '€3,301.20',
  allocation: 13.5,
  profitLoss: 32.8,
  icon: BarChart3Icon,
  color: 'blue'
}, {
  symbol: 'GOOGL',
  name: 'Alphabet Inc.',
  price: '$142.34',
  change: -0.32,
  holdings: '15 shares',
  value: '€2,135.10',
  allocation: 8.8,
  profitLoss: 15.2,
  icon: BarChart3Icon,
  color: 'blue'
}, {
  symbol: 'BTC',
  name: 'Bitcoin',
  price: '$39,876.45',
  change: 2.34,
  holdings: '0.12 BTC',
  value: '€4,785.17',
  allocation: 19.6,
  profitLoss: 43.7,
  icon: PieChartIcon,
  color: 'green'
}, {
  symbol: 'ETH',
  name: 'Ethereum',
  price: '$2,284.12',
  change: 3.56,
  holdings: '1.1 ETH',
  value: '€2,512.53',
  allocation: 10.3,
  profitLoss: -8.3,
  icon: PieChartIcon,
  color: 'green'
}, {
  symbol: 'VGIT',
  name: 'Vanguard Intermediate-Term Treasury ETF',
  price: '$58.32',
  change: -0.18,
  holdings: '45 shares',
  value: '€2,624.40',
  allocation: 10.8,
  profitLoss: 3.2,
  icon: LineChartIcon,
  color: 'yellow'
}, {
  symbol: 'CASH',
  name: 'EUR Cash',
  price: '€1.00',
  change: 0,
  holdings: '€3,850.00',
  value: '€3,850.00',
  allocation: 15.8,
  profitLoss: 0,
  icon: DollarSignIcon,
  color: 'yellow'
}];