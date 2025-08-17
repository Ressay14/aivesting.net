import React, { useEffect, useState } from 'react';
import { RefreshCwIcon, TrendingUpIcon, TrendingDownIcon, BarChart3Icon, PieChartIcon, LineChartIcon, DollarSignIcon, FilterIcon, DownloadIcon, LinkIcon, PlusIcon, SearchIcon, InfoIcon, EyeIcon, EyeOffIcon, ChevronDownIcon, ChevronRightIcon, ArrowRightIcon, AlertTriangleIcon, CheckCircleIcon, GlobeIcon, BriefcaseIcon, ZapIcon, CalendarIcon, SettingsIcon, EditIcon, Trash2Icon, WalletIcon, XIcon } from 'lucide-react';
export const PortfolioTracker = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');
  const [timeRange, setTimeRange] = useState('1m');
  const [showBalance, setShowBalance] = useState(true);
  const [showConnectModal, setShowConnectModal] = useState(false);
  const [showAddAssetModal, setShowAddAssetModal] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState<string | null>(null);
  const [selectedAsset, setSelectedAsset] = useState<any | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showTooltip, setShowTooltip] = useState<string | null>(null);
  const [assetToAdd, setAssetToAdd] = useState({
    symbol: '',
    name: '',
    type: 'stock',
    price: '',
    quantity: '',
    date: new Date().toISOString().split('T')[0]
  });
  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);
  const portfolioData = {
    totalValue: 24395.28,
    change: {
      day: 235.67,
      dayPercent: 0.98,
      month: 1245.32,
      monthPercent: 5.38,
      year: 3567.89,
      yearPercent: 17.12
    },
    allocation: {
      byAssetClass: [{
        name: 'Stocks',
        value: 15632.45,
        percentage: 64.08,
        color: 'blue'
      }, {
        name: 'ETFs',
        value: 5248.36,
        percentage: 21.51,
        color: 'green'
      }, {
        name: 'Crypto',
        value: 2145.78,
        percentage: 8.8,
        color: 'purple'
      }, {
        name: 'Cash',
        value: 1368.69,
        percentage: 5.61,
        color: 'yellow'
      }],
      byGeography: [{
        name: 'North America',
        value: 14637.17,
        percentage: 60,
        color: 'blue'
      }, {
        name: 'Europe',
        value: 4879.06,
        percentage: 20,
        color: 'green'
      }, {
        name: 'Asia Pacific',
        value: 3659.29,
        percentage: 15,
        color: 'purple'
      }, {
        name: 'Other',
        value: 1219.76,
        percentage: 5,
        color: 'yellow'
      }],
      bySector: [{
        name: 'Technology',
        value: 9758.11,
        percentage: 40,
        color: 'blue'
      }, {
        name: 'Financial',
        value: 3659.29,
        percentage: 15,
        color: 'green'
      }, {
        name: 'Healthcare',
        value: 3659.29,
        percentage: 15,
        color: 'purple'
      }, {
        name: 'Consumer',
        value: 2439.53,
        percentage: 10,
        color: 'yellow'
      }, {
        name: 'Energy',
        value: 1219.76,
        percentage: 5,
        color: 'orange'
      }, {
        name: 'Industrial',
        value: 1219.76,
        percentage: 5,
        color: 'red'
      }, {
        name: 'Other',
        value: 2439.53,
        percentage: 10,
        color: 'gray'
      }],
      byRisk: [{
        name: 'High Risk',
        value: 4879.06,
        percentage: 20,
        color: 'red'
      }, {
        name: 'Medium Risk',
        value: 12197.64,
        percentage: 50,
        color: 'yellow'
      }, {
        name: 'Low Risk',
        value: 7318.58,
        percentage: 30,
        color: 'green'
      }]
    },
    accounts: [{
      id: 'acc1',
      name: 'Robinhood',
      type: 'Brokerage',
      balance: 12567.89,
      change: {
        value: 156.78,
        percentage: 1.26
      },
      connected: true,
      lastUpdated: '5 minutes ago',
      color: 'blue'
    }, {
      id: 'acc2',
      name: 'Coinbase',
      type: 'Crypto',
      balance: 2145.78,
      change: {
        value: 87.45,
        percentage: 4.25
      },
      connected: true,
      lastUpdated: '15 minutes ago',
      color: 'purple'
    }, {
      id: 'acc3',
      name: 'Vanguard',
      type: 'Retirement',
      balance: 8312.92,
      change: {
        value: -8.56,
        percentage: -0.1
      },
      connected: true,
      lastUpdated: '1 hour ago',
      color: 'green'
    }, {
      id: 'acc4',
      name: 'Manual Assets',
      type: 'Other',
      balance: 1368.69,
      change: {
        value: 0,
        percentage: 0
      },
      connected: false,
      lastUpdated: 'Just now',
      color: 'yellow'
    }],
    assets: [{
      id: 'asset1',
      symbol: 'AAPL',
      name: 'Apple Inc.',
      type: 'stock',
      price: 189.84,
      quantity: 15,
      value: 2847.6,
      cost: 2250.0,
      gain: 597.6,
      gainPercentage: 26.56,
      dayChange: 1.25,
      accountId: 'acc1',
      sector: 'Technology',
      geography: 'North America',
      risk: 'Medium Risk'
    }, {
      id: 'asset2',
      symbol: 'MSFT',
      name: 'Microsoft',
      type: 'stock',
      price: 378.92,
      quantity: 10,
      value: 3789.2,
      cost: 3200.0,
      gain: 589.2,
      gainPercentage: 18.41,
      dayChange: 2.1,
      accountId: 'acc1',
      sector: 'Technology',
      geography: 'North America',
      risk: 'Medium Risk'
    }, {
      id: 'asset3',
      symbol: 'NVDA',
      name: 'NVIDIA',
      type: 'stock',
      price: 472.18,
      quantity: 8,
      value: 3777.44,
      cost: 1800.0,
      gain: 1977.44,
      gainPercentage: 109.86,
      dayChange: 3.45,
      accountId: 'acc1',
      sector: 'Technology',
      geography: 'North America',
      risk: 'High Risk'
    }, {
      id: 'asset4',
      symbol: 'BTC',
      name: 'Bitcoin',
      type: 'crypto',
      price: 35487.23,
      quantity: 0.05,
      value: 1774.36,
      cost: 1500.0,
      gain: 274.36,
      gainPercentage: 18.29,
      dayChange: 4.2,
      accountId: 'acc2',
      sector: 'Cryptocurrency',
      geography: 'Global',
      risk: 'High Risk'
    }, {
      id: 'asset5',
      symbol: 'ETH',
      name: 'Ethereum',
      type: 'crypto',
      price: 1856.47,
      quantity: 0.2,
      value: 371.29,
      cost: 350.0,
      gain: 21.29,
      gainPercentage: 6.08,
      dayChange: -2.15,
      accountId: 'acc2',
      sector: 'Cryptocurrency',
      geography: 'Global',
      risk: 'High Risk'
    }, {
      id: 'asset6',
      symbol: 'VTI',
      name: 'Vanguard Total Stock Market ETF',
      type: 'etf',
      price: 235.67,
      quantity: 20,
      value: 4713.4,
      cost: 4200.0,
      gain: 513.4,
      gainPercentage: 12.22,
      dayChange: 0.75,
      accountId: 'acc3',
      sector: 'Diversified',
      geography: 'North America',
      risk: 'Medium Risk'
    }, {
      id: 'asset7',
      symbol: 'VXUS',
      name: 'Vanguard Total International Stock ETF',
      type: 'etf',
      price: 56.43,
      quantity: 45,
      value: 2539.35,
      cost: 2700.0,
      gain: -160.65,
      gainPercentage: -5.95,
      dayChange: -0.3,
      accountId: 'acc3',
      sector: 'Diversified',
      geography: 'International',
      risk: 'Medium Risk'
    }, {
      id: 'asset8',
      symbol: 'BND',
      name: 'Vanguard Total Bond Market ETF',
      type: 'etf',
      price: 72.68,
      quantity: 15,
      value: 1090.2,
      cost: 1125.0,
      gain: -34.8,
      gainPercentage: -3.09,
      dayChange: 0.15,
      accountId: 'acc3',
      sector: 'Bonds',
      geography: 'North America',
      risk: 'Low Risk'
    }, {
      id: 'asset9',
      symbol: 'GOLD',
      name: 'Physical Gold',
      type: 'commodity',
      price: 1868.25,
      quantity: 0.5,
      value: 934.13,
      cost: 850.0,
      gain: 84.13,
      gainPercentage: 9.9,
      dayChange: 0.45,
      accountId: 'acc4',
      sector: 'Commodities',
      geography: 'Global',
      risk: 'Medium Risk'
    }, {
      id: 'asset10',
      symbol: 'CASH',
      name: 'Cash USD',
      type: 'cash',
      price: 1.0,
      quantity: 434.56,
      value: 434.56,
      cost: 434.56,
      gain: 0,
      gainPercentage: 0,
      dayChange: 0,
      accountId: 'acc4',
      sector: 'Cash',
      geography: 'North America',
      risk: 'Low Risk'
    }],
    insights: [{
      id: 'insight1',
      type: 'warning',
      title: 'High Technology Exposure',
      description: 'Your portfolio has 40% allocation to technology stocks, which is above the recommended 25-30% for your risk profile.',
      recommendation: 'Consider diversifying into other sectors to reduce concentration risk.',
      severity: 'medium'
    }, {
      id: 'insight2',
      type: 'alert',
      title: 'Portfolio Drift Detected',
      description: 'Your asset allocation has drifted 8% from your target allocation due to recent market movements.',
      recommendation: 'Review and rebalance your portfolio to maintain your investment strategy.',
      severity: 'high'
    }, {
      id: 'insight3',
      type: 'tip',
      title: 'Tax-Loss Harvesting Opportunity',
      description: 'VXUS is currently down 5.95%, presenting a potential tax-loss harvesting opportunity.',
      recommendation: 'Consider selling and replacing with a similar ETF to capture tax benefits.',
      severity: 'low'
    }],
    monthlyChanges: [{
      month: 'Jun',
      change: {
        value: 1245.32,
        percentage: 5.38
      },
      events: [{
        type: 'market',
        description: 'Fed announced interest rate hold',
        impact: 1.2
      }, {
        type: 'dividend',
        description: 'AAPL quarterly dividend',
        impact: 0.3
      }]
    }, {
      month: 'May',
      change: {
        value: 875.45,
        percentage: 3.92
      },
      events: [{
        type: 'purchase',
        description: 'Purchased 2 shares of NVDA',
        impact: 0.8
      }, {
        type: 'market',
        description: 'Tech sector rally',
        impact: 2.5
      }]
    }, {
      month: 'Apr',
      change: {
        value: -345.67,
        percentage: -1.53
      },
      events: [{
        type: 'market',
        description: 'Market correction',
        impact: -2.1
      }, {
        type: 'sale',
        description: 'Sold 5 shares of VTI',
        impact: 0.4
      }]
    }]
  };
  const getColorClass = (color: string) => {
    const colorMap: {
      [key: string]: string;
    } = {
      blue: 'text-blue-500 bg-blue-500/10',
      green: 'text-green-500 bg-green-500/10',
      purple: 'text-purple-500 bg-purple-500/10',
      yellow: 'text-yellow-500 bg-yellow-500/10',
      red: 'text-red-500 bg-red-500/10',
      orange: 'text-orange-500 bg-orange-500/10',
      gray: 'text-gray-500 bg-gray-500/10'
    };
    return colorMap[color] || 'text-gray-500 bg-gray-500/10';
  };
  const getBorderColor = (color: string) => {
    const colorMap: {
      [key: string]: string;
    } = {
      blue: 'border-blue-500/30',
      green: 'border-green-500/30',
      purple: 'border-purple-500/30',
      yellow: 'border-yellow-500/30',
      red: 'border-red-500/30',
      orange: 'border-orange-500/30',
      gray: 'border-gray-500/30'
    };
    return colorMap[color] || 'border-gray-500/30';
  };
  const getInsightColor = (type: string) => {
    switch (type) {
      case 'warning':
        return 'text-yellow-500 bg-yellow-500/10';
      case 'alert':
        return 'text-red-500 bg-red-500/10';
      case 'tip':
        return 'text-blue-500 bg-blue-500/10';
      default:
        return 'text-gray-500 bg-gray-500/10';
    }
  };
  const getInsightIcon = (type: string) => {
    switch (type) {
      case 'warning':
        return <AlertTriangleIcon className="h-5 w-5 text-yellow-500" />;
      case 'alert':
        return <AlertTriangleIcon className="h-5 w-5 text-red-500" />;
      case 'tip':
        return <InfoIcon className="h-5 w-5 text-blue-500" />;
      default:
        return <InfoIcon className="h-5 w-5 text-gray-500" />;
    }
  };
  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case 'high':
        return <span className="text-xs bg-red-500/10 text-red-500 px-2 py-1 rounded-full">
            High Priority
          </span>;
      case 'medium':
        return <span className="text-xs bg-yellow-500/10 text-yellow-500 px-2 py-1 rounded-full">
            Medium Priority
          </span>;
      case 'low':
        return <span className="text-xs bg-blue-500/10 text-blue-500 px-2 py-1 rounded-full">
            Low Priority
          </span>;
      default:
        return null;
    }
  };
  const getChangeColor = (change: number) => {
    return change >= 0 ? 'text-green-500' : 'text-red-500';
  };
  const getChangeIcon = (change: number) => {
    return change >= 0 ? <TrendingUpIcon className="h-3 w-3 text-green-500" /> : <TrendingDownIcon className="h-3 w-3 text-red-500" />;
  };
  const getAssetIcon = (type: string) => {
    switch (type) {
      case 'stock':
        return <BarChart3Icon className="h-4 w-4" />;
      case 'etf':
        return <PieChartIcon className="h-4 w-4" />;
      case 'crypto':
        return <DollarSignIcon className="h-4 w-4" />;
      case 'commodity':
        return <BriefcaseIcon className="h-4 w-4" />;
      case 'cash':
        return <WalletIcon className="h-4 w-4" />;
      default:
        return <BarChart3Icon className="h-4 w-4" />;
    }
  };
  const getEventIcon = (type: string) => {
    switch (type) {
      case 'market':
        return <GlobeIcon className="h-4 w-4 text-blue-500" />;
      case 'dividend':
        return <DollarSignIcon className="h-4 w-4 text-green-500" />;
      case 'purchase':
        return <PlusIcon className="h-4 w-4 text-purple-500" />;
      case 'sale':
        return <TrendingUpIcon className="h-4 w-4 text-yellow-500" />;
      default:
        return <InfoIcon className="h-4 w-4 text-gray-500" />;
    }
  };
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(value);
  };
  const formatPercentage = (value: number) => {
    return `${value >= 0 ? '+' : ''}${value.toFixed(2)}%`;
  };
  const handleAccountClick = (accountId: string) => {
    setSelectedAccount(prevSelected => prevSelected === accountId ? null : accountId);
  };
  const handleAssetClick = (asset: any) => {
    setSelectedAsset(asset);
  };
  const handleAddAsset = () => {
    setShowAddAssetModal(true);
  };
  const handleCloseAddAssetModal = () => {
    setShowAddAssetModal(false);
    setAssetToAdd({
      symbol: '',
      name: '',
      type: 'stock',
      price: '',
      quantity: '',
      date: new Date().toISOString().split('T')[0]
    });
  };
  const filteredAssets = portfolioData.assets.filter(asset => {
    const matchesSearch = searchQuery === '' || asset.symbol.toLowerCase().includes(searchQuery.toLowerCase()) || asset.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesAccount = !selectedAccount || asset.accountId === selectedAccount;
    return matchesSearch && matchesAccount;
  });
  if (isLoading) {
    return <div className="flex flex-col items-center justify-center h-64">
        <div className="bg-blue-500/10 p-3 rounded-full">
          <RefreshCwIcon className="h-8 w-8 text-blue-500 animate-spin" />
        </div>
        <p className="text-gray-400 mt-4">Loading portfolio data...</p>
      </div>;
  }
  return <div className="space-y-6">
      {/* Header Section */}
      <div className="bg-[#151822] p-6 rounded-xl border border-blue-500/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 relative z-10">
          <div>
            <h1 className="text-xl font-bold mb-2 flex items-center gap-2">
              <WalletIcon className="h-5 w-5 text-blue-500" />
              <span>Portfolio Tracker</span>
            </h1>
            <p className="text-gray-400">
              Track and analyze your investments across all your accounts
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button className="bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 px-3 py-1 rounded-lg text-sm flex items-center gap-1 transition-all duration-200" onClick={() => setShowConnectModal(true)}>
              <LinkIcon className="h-4 w-4" />
              <span>Connect Account</span>
            </button>
            <button className="bg-[#1A1F2E] hover:bg-[#262B3D] px-3 py-1 rounded-lg text-sm flex items-center gap-1 transition-all duration-200" onClick={() => handleAddAsset()}>
              <PlusIcon className="h-4 w-4" />
              <span>Add Asset</span>
            </button>
            <button className="bg-[#1A1F2E] hover:bg-[#262B3D] px-3 py-1 rounded-lg text-sm flex items-center gap-1 transition-all duration-200">
              <RefreshCwIcon className="h-4 w-4" />
              <span>Refresh</span>
            </button>
          </div>
        </div>
      </div>
      {/* Portfolio Summary */}
      <div className="bg-[#151822] p-6 rounded-xl border border-gray-800/30 hover:border-blue-500/30 transition-all duration-300 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="flex items-center justify-between mb-6 relative z-10">
          <h2 className="text-lg font-medium">Portfolio Summary</h2>
          <div className="flex items-center gap-2">
            <button className="text-gray-400 hover:text-white transition-colors" onClick={() => setShowBalance(!showBalance)}>
              {showBalance ? <EyeOffIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
            </button>
            <button className="bg-[#1A1F2E] hover:bg-[#262B3D] p-1 rounded text-gray-400 hover:text-white transition-colors">
              <DownloadIcon className="h-4 w-4" />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          <div className="bg-[#1A1F2E] p-4 rounded-lg border border-gray-800/30 hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg">
            <div className="text-sm text-gray-400 mb-1">
              Total Portfolio Value
            </div>
            <div className="text-2xl font-bold">
              {showBalance ? formatCurrency(portfolioData.totalValue) : '••••••'}
            </div>
            <div className="flex items-center mt-2 gap-2">
              <span className={`flex items-center gap-1 text-sm ${getChangeColor(portfolioData.change.day)}`}>
                {getChangeIcon(portfolioData.change.day)}
                <span>
                  {showBalance ? formatCurrency(portfolioData.change.day) : '•••'}
                </span>
              </span>
              <span className={`text-sm ${getChangeColor(portfolioData.change.dayPercent)}`}>
                ({formatPercentage(portfolioData.change.dayPercent)})
              </span>
              <span className="text-xs text-gray-400">Today</span>
            </div>
          </div>
          <div className="bg-[#1A1F2E] p-4 rounded-lg border border-gray-800/30 hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg">
            <div className="text-sm text-gray-400 mb-1">Monthly Change</div>
            <div className={`text-2xl font-bold ${getChangeColor(portfolioData.change.monthPercent)}`}>
              {showBalance ? formatPercentage(portfolioData.change.monthPercent) : '••••••'}
            </div>
            <div className="flex items-center mt-2 gap-2">
              <span className={`flex items-center gap-1 text-sm ${getChangeColor(portfolioData.change.month)}`}>
                {getChangeIcon(portfolioData.change.month)}
                <span>
                  {showBalance ? formatCurrency(portfolioData.change.month) : '•••'}
                </span>
              </span>
              <span className="text-xs text-gray-400">Last 30 days</span>
            </div>
          </div>
          <div className="bg-[#1A1F2E] p-4 rounded-lg border border-gray-800/30 hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg">
            <div className="text-sm text-gray-400 mb-1">Yearly Change</div>
            <div className={`text-2xl font-bold ${getChangeColor(portfolioData.change.yearPercent)}`}>
              {showBalance ? formatPercentage(portfolioData.change.yearPercent) : '••••••'}
            </div>
            <div className="flex items-center mt-2 gap-2">
              <span className={`flex items-center gap-1 text-sm ${getChangeColor(portfolioData.change.year)}`}>
                {getChangeIcon(portfolioData.change.year)}
                <span>
                  {showBalance ? formatCurrency(portfolioData.change.year) : '•••'}
                </span>
              </span>
              <span className="text-xs text-gray-400">Last 12 months</span>
            </div>
          </div>
          <div className="bg-[#1A1F2E] p-4 rounded-lg border border-gray-800/30 hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg relative group cursor-help">
            <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 bg-[#1A1F2E]/95 backdrop-blur-sm flex items-center justify-center transition-opacity duration-200" onMouseEnter={() => setShowTooltip('risk')} onMouseLeave={() => setShowTooltip(null)}>
              <div className="text-center p-4">
                <AlertTriangleIcon className="h-6 w-6 text-yellow-500 mx-auto mb-2" />
                <p className="text-sm text-gray-300">
                  Your portfolio risk level is based on asset volatility,
                  correlation, and historical performance.
                </p>
              </div>
            </div>
            <div className="text-sm text-gray-400 mb-1">Risk Level</div>
            <div className="text-2xl font-bold text-yellow-500">Moderate</div>
            <div className="mt-2">
              <div className="w-full bg-[#151822] rounded-full h-2 mb-1">
                <div className="bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 h-2 rounded-full w-3/5"></div>
              </div>
              <div className="flex justify-between text-xs text-gray-400">
                <span>Low</span>
                <span>Medium</span>
                <span>High</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Tabs */}
      <div className="border-b border-gray-800/50">
        <div className="flex space-x-4 overflow-x-auto hide-scrollbar">
          <button className={`px-4 py-2 text-sm font-medium border-b-2 ${activeTab === 'overview' ? 'border-blue-500 text-blue-500' : 'border-transparent text-gray-400 hover:text-white'} transition-colors duration-200`} onClick={() => setActiveTab('overview')}>
            Overview
          </button>
          <button className={`px-4 py-2 text-sm font-medium border-b-2 ${activeTab === 'accounts' ? 'border-blue-500 text-blue-500' : 'border-transparent text-gray-400 hover:text-white'} transition-colors duration-200`} onClick={() => setActiveTab('accounts')}>
            Accounts
          </button>
          <button className={`px-4 py-2 text-sm font-medium border-b-2 ${activeTab === 'assets' ? 'border-blue-500 text-blue-500' : 'border-transparent text-gray-400 hover:text-white'} transition-colors duration-200`} onClick={() => setActiveTab('assets')}>
            Assets
          </button>
          <button className={`px-4 py-2 text-sm font-medium border-b-2 ${activeTab === 'allocation' ? 'border-blue-500 text-blue-500' : 'border-transparent text-gray-400 hover:text-white'} transition-colors duration-200`} onClick={() => setActiveTab('allocation')}>
            Allocation
          </button>
          <button className={`px-4 py-2 text-sm font-medium border-b-2 ${activeTab === 'performance' ? 'border-blue-500 text-blue-500' : 'border-transparent text-gray-400 hover:text-white'} transition-colors duration-200`} onClick={() => setActiveTab('performance')}>
            Performance
          </button>
          <button className={`px-4 py-2 text-sm font-medium border-b-2 ${activeTab === 'insights' ? 'border-blue-500 text-blue-500' : 'border-transparent text-gray-400 hover:text-white'} transition-colors duration-200`} onClick={() => setActiveTab('insights')}>
            AI Insights
          </button>
        </div>
      </div>
      {/* Content based on active tab */}
      <div className="py-2">
        {activeTab === 'overview' && <div className="space-y-6">
            {/* Portfolio Allocation */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Asset Class Allocation */}
              <div className="bg-[#151822] p-6 rounded-xl border border-gray-800/30 hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-medium">Asset Allocation</h3>
                  <button className="text-gray-400 hover:text-white transition-colors">
                    <ChevronDownIcon className="h-5 w-5" />
                  </button>
                </div>
                <div className="relative h-48 mb-4">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-36 h-36 rounded-full bg-gradient-to-r from-blue-500 via-green-500 to-purple-500 p-1 shadow-lg">
                      <div className="w-full h-full rounded-full bg-[#151822] flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-sm text-gray-400">Total</div>
                          <div className="font-bold">
                            {showBalance ? formatCurrency(portfolioData.totalValue) : '••••••'}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  {portfolioData.allocation.byAssetClass.map((item, index) => <div key={index} className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${getColorClass(item.color)}`}></div>
                        <span className="text-sm">{item.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm">
                          {item.percentage.toFixed(1)}%
                        </span>
                        <span className="text-xs text-gray-400">
                          {showBalance ? formatCurrency(item.value) : '•••'}
                        </span>
                      </div>
                    </div>)}
                </div>
              </div>
              {/* Geographic Allocation */}
              <div className="bg-[#151822] p-6 rounded-xl border border-gray-800/30 hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-medium">
                    Geographic Distribution
                  </h3>
                  <button className="text-gray-400 hover:text-white transition-colors">
                    <ChevronDownIcon className="h-5 w-5" />
                  </button>
                </div>
                <div className="relative h-48 mb-4">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full max-w-xs h-32 bg-[#1A1F2E] rounded-lg p-4 flex items-end justify-around">
                      <div className="w-1/4 bg-blue-500 rounded-t-lg relative group cursor-help" style={{
                    height: `${portfolioData.allocation.byGeography[0].percentage}%`
                  }}>
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="bg-[#1A1F2E]/90 backdrop-blur-sm px-2 py-1 rounded text-xs whitespace-nowrap">
                            {portfolioData.allocation.byGeography[0].name}:{' '}
                            {portfolioData.allocation.byGeography[0].percentage}
                            %
                          </div>
                        </div>
                      </div>
                      <div className="w-1/4 bg-green-500 rounded-t-lg relative group cursor-help" style={{
                    height: `${portfolioData.allocation.byGeography[1].percentage}%`
                  }}>
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="bg-[#1A1F2E]/90 backdrop-blur-sm px-2 py-1 rounded text-xs whitespace-nowrap">
                            {portfolioData.allocation.byGeography[1].name}:{' '}
                            {portfolioData.allocation.byGeography[1].percentage}
                            %
                          </div>
                        </div>
                      </div>
                      <div className="w-1/4 bg-purple-500 rounded-t-lg relative group cursor-help" style={{
                    height: `${portfolioData.allocation.byGeography[2].percentage}%`
                  }}>
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="bg-[#1A1F2E]/90 backdrop-blur-sm px-2 py-1 rounded text-xs whitespace-nowrap">
                            {portfolioData.allocation.byGeography[2].name}:{' '}
                            {portfolioData.allocation.byGeography[2].percentage}
                            %
                          </div>
                        </div>
                      </div>
                      <div className="w-1/4 bg-yellow-500 rounded-t-lg relative group cursor-help" style={{
                    height: `${portfolioData.allocation.byGeography[3].percentage}%`
                  }}>
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="bg-[#1A1F2E]/90 backdrop-blur-sm px-2 py-1 rounded text-xs whitespace-nowrap">
                            {portfolioData.allocation.byGeography[3].name}:{' '}
                            {portfolioData.allocation.byGeography[3].percentage}
                            %
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  {portfolioData.allocation.byGeography.map((item, index) => <div key={index} className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${getColorClass(item.color)}`}></div>
                        <span className="text-sm">{item.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm">
                          {item.percentage.toFixed(1)}%
                        </span>
                        <span className="text-xs text-gray-400">
                          {showBalance ? formatCurrency(item.value) : '•••'}
                        </span>
                      </div>
                    </div>)}
                </div>
              </div>
              {/* Risk Allocation */}
              <div className="bg-[#151822] p-6 rounded-xl border border-gray-800/30 hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-medium">Risk Distribution</h3>
                    <div className="bg-blue-500/10 text-blue-400 text-xs px-2 py-1 rounded-full flex items-center gap-1">
                      <ZapIcon className="h-3 w-3" />
                      <span>AI Analysis</span>
                    </div>
                  </div>
                  <button className="text-gray-400 hover:text-white transition-colors">
                    <ChevronDownIcon className="h-5 w-5" />
                  </button>
                </div>
                <div className="relative h-48 mb-4">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-32 flex items-center justify-center">
                      <div className="w-full bg-[#1A1F2E] h-8 rounded-full overflow-hidden">
                        <div className="flex h-full">
                          <div className="bg-green-500 h-full" style={{
                        width: `${portfolioData.allocation.byRisk[2].percentage}%`
                      }}></div>
                          <div className="bg-yellow-500 h-full" style={{
                        width: `${portfolioData.allocation.byRisk[1].percentage}%`
                      }}></div>
                          <div className="bg-red-500 h-full" style={{
                        width: `${portfolioData.allocation.byRisk[0].percentage}%`
                      }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  {portfolioData.allocation.byRisk.map((item, index) => <div key={index} className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${getColorClass(item.color)}`}></div>
                        <span className="text-sm">{item.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm">
                          {item.percentage.toFixed(1)}%
                        </span>
                        <span className="text-xs text-gray-400">
                          {showBalance ? formatCurrency(item.value) : '•••'}
                        </span>
                      </div>
                    </div>)}
                </div>
              </div>
            </div>
            {/* AI Insights */}
            <div className="bg-[#151822] p-6 rounded-xl border border-gray-800/30 hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-medium">AI Portfolio Insights</h3>
                  <div className="bg-blue-500/10 text-blue-400 text-xs px-2 py-1 rounded-full">
                    Powered by AI
                  </div>
                </div>
                <button className="text-sm text-blue-500 hover:text-blue-400 flex items-center gap-1 group">
                  <span>View All</span>
                  <ArrowRightIcon className="h-3 w-3 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              <div className="space-y-4">
                {portfolioData.insights.map(insight => <div key={insight.id} className={`p-4 rounded-lg ${getInsightColor(insight.type)} border ${insight.type === 'warning' ? 'border-yellow-500/30' : insight.type === 'alert' ? 'border-red-500/30' : 'border-blue-500/30'} hover:shadow-lg transition-all duration-300`}>
                    <div className="flex items-start gap-3">
                      <div className={`p-2 rounded-full ${getInsightColor(insight.type)}`}>
                        {getInsightIcon(insight.type)}
                      </div>
                      <div>
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium">{insight.title}</h4>
                          {getSeverityBadge(insight.severity)}
                        </div>
                        <p className="text-sm text-gray-300 mt-1 mb-2">
                          {insight.description}
                        </p>
                        <div className="bg-[#151822]/50 backdrop-blur-sm p-3 rounded-lg border border-gray-800/30 mb-3">
                          <div className="flex items-center gap-2">
                            <ZapIcon className="h-4 w-4 text-blue-500" />
                            <span className="text-sm font-medium">
                              AI Recommendation
                            </span>
                          </div>
                          <p className="text-sm text-gray-300 mt-1">
                            {insight.recommendation}
                          </p>
                        </div>
                        <div className="flex items-center justify-between">
                          <button className="text-sm text-blue-500 hover:text-blue-400 flex items-center gap-1 group">
                            <span>View Details</span>
                            <ChevronRightIcon className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                          </button>
                          <div className="flex gap-2">
                            <button className="text-xs bg-[#151822] px-3 py-1 rounded-lg hover:bg-[#0B0E15] transition-colors">
                              Dismiss
                            </button>
                            <button className="text-xs bg-blue-500/10 text-blue-500 px-3 py-1 rounded-lg hover:bg-blue-500/20 transition-colors">
                              Apply Suggestion
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>)}
              </div>
            </div>
            {/* What Changed This Month */}
            <div className="bg-[#151822] p-6 rounded-xl border border-gray-800/30 hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-medium">
                    What Changed This Month?
                  </h3>
                  <div className="bg-blue-500/10 text-blue-400 text-xs px-2 py-1 rounded-full flex items-center gap-1">
                    <CalendarIcon className="h-3 w-3" />
                    <span>June 2023</span>
                  </div>
                </div>
                <select className="bg-[#1A1F2E] rounded-lg p-1 text-sm border border-gray-800/30 focus:outline-none focus:ring-2 focus:ring-blue-500/30">
                  <option value="jun">June 2023</option>
                  <option value="may">May 2023</option>
                  <option value="apr">April 2023</option>
                </select>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <LineChartIcon className="h-5 w-5 text-blue-500" />
                      <h4 className="font-medium">Performance Summary</h4>
                    </div>
                    <div className={`flex items-center gap-1 ${getChangeColor(portfolioData.monthlyChanges[0].change.percentage)}`}>
                      {getChangeIcon(portfolioData.monthlyChanges[0].change.percentage)}
                      <span>
                        {formatPercentage(portfolioData.monthlyChanges[0].change.percentage)}
                      </span>
                    </div>
                  </div>
                  <div className="bg-[#1A1F2E] p-4 rounded-lg mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm">Starting Value:</span>
                      <span className="text-sm font-medium">
                        {showBalance ? formatCurrency(portfolioData.totalValue - portfolioData.monthlyChanges[0].change.value) : '••••••'}
                      </span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm">Ending Value:</span>
                      <span className="text-sm font-medium">
                        {showBalance ? formatCurrency(portfolioData.totalValue) : '••••••'}
                      </span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm">Net Change:</span>
                      <span className={`text-sm font-medium ${getChangeColor(portfolioData.monthlyChanges[0].change.value)}`}>
                        {showBalance ? formatCurrency(portfolioData.monthlyChanges[0].change.value) : '••••••'}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Percent Change:</span>
                      <span className={`text-sm font-medium ${getChangeColor(portfolioData.monthlyChanges[0].change.percentage)}`}>
                        {formatPercentage(portfolioData.monthlyChanges[0].change.percentage)}
                      </span>
                    </div>
                  </div>
                  <div className="bg-[#1A1F2E] p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-3">
                      <TrendingUpIcon className="h-5 w-5 text-green-500" />
                      <h4 className="font-medium">Top Performers</h4>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <div className="bg-blue-500/10 p-1 rounded">
                            <BarChart3Icon className="h-3 w-3 text-blue-500" />
                          </div>
                          <span className="text-sm">NVDA</span>
                        </div>
                        <span className="text-sm text-green-500">+109.86%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <div className="bg-blue-500/10 p-1 rounded">
                            <BarChart3Icon className="h-3 w-3 text-blue-500" />
                          </div>
                          <span className="text-sm">AAPL</span>
                        </div>
                        <span className="text-sm text-green-500">+26.56%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <div className="bg-purple-500/10 p-1 rounded">
                            <DollarSignIcon className="h-3 w-3 text-purple-500" />
                          </div>
                          <span className="text-sm">BTC</span>
                        </div>
                        <span className="text-sm text-green-500">+18.29%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <CalendarIcon className="h-5 w-5 text-blue-500" />
                    <h4 className="font-medium">Key Events</h4>
                  </div>
                  <div className="space-y-4">
                    {portfolioData.monthlyChanges[0].events.map((event, index) => <div key={index} className="bg-[#1A1F2E] p-4 rounded-lg border border-gray-800/30 hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg">
                          <div className="flex items-start gap-3">
                            <div className="bg-[#151822] p-2 rounded-lg">
                              {getEventIcon(event.type)}
                            </div>
                            <div>
                              <div className="text-sm font-medium">
                                {event.description}
                              </div>
                              <div className="flex items-center mt-2 gap-2">
                                <span className="text-xs text-gray-400">
                                  Impact:
                                </span>
                                <span className={`text-xs ${event.impact > 0 ? 'text-green-500' : 'text-red-500'}`}>
                                  {event.impact > 0 ? '+' : ''}
                                  {event.impact}%
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>)}
                    <div className="bg-blue-500/10 p-4 rounded-lg border border-blue-500/30">
                      <div className="flex items-start gap-3">
                        <div className="bg-[#151822] p-2 rounded-lg">
                          <ZapIcon className="h-4 w-4 text-blue-500" />
                        </div>
                        <div>
                          <div className="text-sm font-medium">AI Analysis</div>
                          <p className="text-sm text-gray-300 mt-1">
                            Your portfolio benefited from the broad technology
                            sector rally this month, with semiconductor stocks
                            like NVDA being the main driver of performance.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>}
        {activeTab === 'accounts' && <div className="space-y-6">
            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <div className="relative flex-grow max-w-md">
                <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input type="text" placeholder="Search accounts..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="bg-[#1A1F2E] w-full rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 border border-gray-800/30 hover:border-gray-700/50 focus:border-blue-500/30" />
              </div>
              <div className="flex gap-2 overflow-x-auto pb-1 hide-scrollbar">
                <button className="bg-[#1A1F2E] px-3 py-2 rounded-lg text-sm flex items-center gap-1 hover:bg-[#262B3D] transition-all duration-200 border border-gray-800/30">
                  <FilterIcon className="h-4 w-4" />
                  <span>Filters</span>
                </button>
                <button className="bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 px-3 py-2 rounded-lg text-sm flex items-center gap-1 transition-all duration-200" onClick={() => setShowConnectModal(true)}>
                  <LinkIcon className="h-4 w-4" />
                  <span>Connect Account</span>
                </button>
              </div>
            </div>
            {/* Accounts List */}
            <div className="space-y-4">
              {portfolioData.accounts.map(account => <div key={account.id} className={`bg-[#151822] p-5 rounded-xl border ${selectedAccount === account.id ? `${getBorderColor(account.color)} shadow-lg` : 'border-gray-800/30'} hover:${getBorderColor(account.color)} transition-all duration-300 cursor-pointer`} onClick={() => handleAccountClick(account.id)}>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-lg ${getColorClass(account.color)}`}>
                        {account.type === 'Brokerage' && <BarChart3Icon className="h-5 w-5" />}
                        {account.type === 'Crypto' && <DollarSignIcon className="h-5 w-5" />}
                        {account.type === 'Retirement' && <PieChartIcon className="h-5 w-5" />}
                        {account.type === 'Other' && <BriefcaseIcon className="h-5 w-5" />}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-medium">{account.name}</h4>
                          {account.connected && <span className="bg-green-500/10 text-green-500 text-xs px-2 py-0.5 rounded-full">
                              Connected
                            </span>}
                        </div>
                        <div className="text-sm text-gray-400">
                          {account.type} • Updated {account.lastUpdated}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between md:justify-end gap-6">
                      <div>
                        <div className="text-sm text-gray-400">Balance</div>
                        <div className="font-medium">
                          {showBalance ? formatCurrency(account.balance) : '••••••'}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-400">Today</div>
                        <div className={`flex items-center gap-1 ${getChangeColor(account.change.percentage)}`}>
                          {getChangeIcon(account.change.percentage)}
                          <span>
                            {formatPercentage(account.change.percentage)}
                          </span>
                        </div>
                      </div>
                      <ChevronDownIcon className={`h-5 w-5 text-gray-400 transform transition-transform ${selectedAccount === account.id ? 'rotate-180' : ''}`} />
                    </div>
                  </div>
                  {selectedAccount === account.id && <div className="mt-6 pt-6 border-t border-gray-800/30 animate-fadeIn">
                      <div className="flex justify-between items-center mb-4">
                        <h5 className="font-medium">Account Assets</h5>
                        <div className="flex gap-2">
                          <button className="text-xs bg-[#1A1F2E] px-3 py-1 rounded-lg hover:bg-[#262B3D] transition-colors flex items-center gap-1">
                            <RefreshCwIcon className="h-3 w-3" />
                            <span>Refresh</span>
                          </button>
                          {account.connected && <button className="text-xs bg-[#1A1F2E] px-3 py-1 rounded-lg hover:bg-[#262B3D] transition-colors flex items-center gap-1">
                              <SettingsIcon className="h-3 w-3" />
                              <span>Settings</span>
                            </button>}
                          {!account.connected && <button className="text-xs bg-blue-500/10 text-blue-500 px-3 py-1 rounded-lg hover:bg-blue-500/20 transition-colors flex items-center gap-1" onClick={() => setShowConnectModal(true)}>
                              <LinkIcon className="h-3 w-3" />
                              <span>Connect</span>
                            </button>}
                        </div>
                      </div>
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr className="text-left text-sm text-gray-400 border-b border-gray-800/50">
                              <th className="pb-3 font-medium">Asset</th>
                              <th className="pb-3 font-medium">Price</th>
                              <th className="pb-3 font-medium">Quantity</th>
                              <th className="pb-3 font-medium">Value</th>
                              <th className="pb-3 font-medium">Gain/Loss</th>
                              <th className="pb-3 font-medium"></th>
                            </tr>
                          </thead>
                          <tbody>
                            {portfolioData.assets.filter(asset => asset.accountId === account.id).map(asset => <tr key={asset.id} className="border-b border-gray-800/30 last:border-0 hover:bg-[#1A1F2E]/50 transition-colors group" onClick={e => {
                      e.stopPropagation();
                      handleAssetClick(asset);
                    }}>
                                  <td className="py-3">
                                    <div className="flex items-center gap-2">
                                      <div className="bg-[#1A1F2E] p-1 rounded">
                                        {getAssetIcon(asset.type)}
                                      </div>
                                      <div>
                                        <div className="font-medium">
                                          {asset.symbol}
                                        </div>
                                        <div className="text-xs text-gray-400">
                                          {asset.name}
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="py-3">
                                    <div className="font-medium">
                                      {formatCurrency(asset.price)}
                                    </div>
                                    <div className={`text-xs flex items-center gap-0.5 ${getChangeColor(asset.dayChange)}`}>
                                      {getChangeIcon(asset.dayChange)}
                                      <span>
                                        {Math.abs(asset.dayChange).toFixed(2)}%
                                      </span>
                                    </div>
                                  </td>
                                  <td className="py-3">
                                    <div>{asset.quantity}</div>
                                  </td>
                                  <td className="py-3">
                                    <div className="font-medium">
                                      {showBalance ? formatCurrency(asset.value) : '••••••'}
                                    </div>
                                  </td>
                                  <td className="py-3">
                                    <div className={`font-medium ${getChangeColor(asset.gain)}`}>
                                      {showBalance ? formatCurrency(asset.gain) : '••••••'}
                                    </div>
                                    <div className={`text-xs ${getChangeColor(asset.gainPercentage)}`}>
                                      {formatPercentage(asset.gainPercentage)}
                                    </div>
                                  </td>
                                  <td className="py-3 text-right">
                                    <button className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity hover:text-blue-400" onClick={e => {
                          e.stopPropagation();
                          handleAssetClick(asset);
                        }}>
                                      <ChevronRightIcon className="h-5 w-5" />
                                    </button>
                                  </td>
                                </tr>)}
                          </tbody>
                        </table>
                      </div>
                      {portfolioData.assets.filter(asset => asset.accountId === account.id).length === 0 && <div className="text-center py-8">
                          <BriefcaseIcon className="h-12 w-12 text-gray-600 mx-auto mb-4" />
                          <h5 className="text-lg font-medium mb-2">
                            No assets in this account
                          </h5>
                          <p className="text-gray-400 mb-4">
                            This account doesn't have any assets yet.
                          </p>
                          <button className="bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 px-4 py-2 rounded-lg text-sm flex items-center gap-2 mx-auto transition-all duration-200" onClick={handleAddAsset}>
                            <PlusIcon className="h-4 w-4" />
                            <span>Add Asset</span>
                          </button>
                        </div>}
                    </div>}
                </div>)}
            </div>
          </div>}
        {activeTab === 'assets' && <div className="space-y-6">
            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <div className="relative flex-grow max-w-md">
                <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input type="text" placeholder="Search assets by name or symbol..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="bg-[#1A1F2E] w-full rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 border border-gray-800/30 hover:border-gray-700/50 focus:border-blue-500/30" />
              </div>
              <div className="flex gap-2 overflow-x-auto pb-1 hide-scrollbar">
                <select className="bg-[#1A1F2E] rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 border border-gray-800/30 hover:border-gray-700/50 focus:border-blue-500/30" value={selectedAccount || ''} onChange={e => setSelectedAccount(e.target.value || null)}>
                  <option value="">All Accounts</option>
                  {portfolioData.accounts.map(account => <option key={account.id} value={account.id}>
                      {account.name}
                    </option>)}
                </select>
                <button className="bg-[#1A1F2E] px-3 py-2 rounded-lg text-sm flex items-center gap-1 hover:bg-[#262B3D] transition-all duration-200 border border-gray-800/30">
                  <FilterIcon className="h-4 w-4" />
                  <span>Filters</span>
                </button>
                <button className="bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 px-3 py-2 rounded-lg text-sm flex items-center gap-1 transition-all duration-200" onClick={handleAddAsset}>
                  <PlusIcon className="h-4 w-4" />
                  <span>Add Asset</span>
                </button>
              </div>
            </div>
            {/* Assets Table */}
            {filteredAssets.length > 0 ? <div className="bg-[#151822] rounded-xl border border-gray-800/30 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="text-left text-sm text-gray-400 border-b border-gray-800/50 bg-[#1A1F2E]/50">
                        <th className="p-4 font-medium">Asset</th>
                        <th className="p-4 font-medium">Type</th>
                        <th className="p-4 font-medium">Price</th>
                        <th className="p-4 font-medium">Quantity</th>
                        <th className="p-4 font-medium">Value</th>
                        <th className="p-4 font-medium">Gain/Loss</th>
                        <th className="p-4 font-medium">Account</th>
                        <th className="p-4 font-medium"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredAssets.map(asset => {
                  const account = portfolioData.accounts.find(acc => acc.id === asset.accountId);
                  return <tr key={asset.id} className="border-b border-gray-800/30 last:border-0 hover:bg-[#1A1F2E]/50 transition-colors group cursor-pointer" onClick={() => handleAssetClick(asset)}>
                            <td className="p-4">
                              <div className="flex items-center gap-2">
                                <div className="bg-[#1A1F2E] p-1 rounded">
                                  {getAssetIcon(asset.type)}
                                </div>
                                <div>
                                  <div className="font-medium">
                                    {asset.symbol}
                                  </div>
                                  <div className="text-xs text-gray-400">
                                    {asset.name}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="p-4 capitalize">{asset.type}</td>
                            <td className="p-4">
                              <div className="font-medium">
                                {formatCurrency(asset.price)}
                              </div>
                              <div className={`text-xs flex items-center gap-0.5 ${getChangeColor(asset.dayChange)}`}>
                                {getChangeIcon(asset.dayChange)}
                                <span>
                                  {Math.abs(asset.dayChange).toFixed(2)}%
                                </span>
                              </div>
                            </td>
                            <td className="p-4">
                              <div>{asset.quantity}</div>
                            </td>
                            <td className="p-4">
                              <div className="font-medium">
                                {showBalance ? formatCurrency(asset.value) : '••••••'}
                              </div>
                            </td>
                            <td className="p-4">
                              <div className={`font-medium ${getChangeColor(asset.gain)}`}>
                                {showBalance ? formatCurrency(asset.gain) : '••••••'}
                              </div>
                              <div className={`text-xs ${getChangeColor(asset.gainPercentage)}`}>
                                {formatPercentage(asset.gainPercentage)}
                              </div>
                            </td>
                            <td className="p-4">
                              <div className="flex items-center gap-2">
                                <div className={`w-2 h-2 rounded-full ${getColorClass(account?.color || 'gray')}`}></div>
                                <span className="text-sm">{account?.name}</span>
                              </div>
                            </td>
                            <td className="p-4 text-right">
                              <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button className="p-1 text-gray-400 hover:text-white transition-colors" onClick={e => {
                          e.stopPropagation();
                          // Edit asset logic
                        }}>
                                  <EditIcon className="h-4 w-4" />
                                </button>
                                <button className="p-1 text-gray-400 hover:text-red-500 transition-colors" onClick={e => {
                          e.stopPropagation();
                          // Delete asset logic
                        }}>
                                  <Trash2Icon className="h-4 w-4" />
                                </button>
                              </div>
                            </td>
                          </tr>;
                })}
                    </tbody>
                  </table>
                </div>
              </div> : <div className="bg-[#151822] p-12 rounded-xl border border-gray-800/30 text-center">
                <SearchIcon className="h-12 w-12 text-gray-600 mx-auto mb-4" />
                <h3 className="text-lg font-medium mb-2">No assets found</h3>
                <p className="text-gray-400 mb-6">
                  {searchQuery ? `No assets matching "${searchQuery}" were found.` : selectedAccount ? "This account doesn't have any assets yet." : "You haven't added any assets yet."}
                </p>
                <button className="bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 px-4 py-2 rounded-lg text-sm flex items-center gap-2 mx-auto transition-all duration-200" onClick={handleAddAsset}>
                  <PlusIcon className="h-4 w-4" />
                  <span>Add Asset</span>
                </button>
              </div>}
          </div>}
        {activeTab === 'allocation' && <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Asset Class Allocation */}
              <div className="bg-[#151822] p-6 rounded-xl border border-gray-800/30 hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-medium">
                    Asset Class Allocation
                  </h3>
                  <button className="bg-[#1A1F2E] hover:bg-[#262B3D] p-1 rounded text-gray-400 hover:text-white transition-colors">
                    <DownloadIcon className="h-4 w-4" />
                  </button>
                </div>
                <div className="relative h-64 mb-6">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-48 h-48 rounded-full bg-gradient-to-r from-blue-500 via-green-500 to-purple-500 p-1 shadow-lg">
                      <div className="w-full h-full rounded-full bg-[#151822] flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-sm text-gray-400">Total</div>
                          <div className="font-bold">
                            {showBalance ? formatCurrency(portfolioData.totalValue) : '••••••'}
                          </div>
                        </div>
                      </div>
                      {/* SVG Pie Chart Animation */}
                      <svg viewBox="0 0 100 100" className="absolute top-0 left-0 w-full h-full">
                        <circle cx="50" cy="50" r="45" fill="transparent" stroke="url(#blueGradient)" strokeWidth="10" strokeDasharray="283" strokeDashoffset="0" transform="rotate(-90, 50, 50)" className="animate-drawCircle" style={{
                      animationDelay: '0s'
                    }} />
                        <circle cx="50" cy="50" r="45" fill="transparent" stroke="url(#greenGradient)" strokeWidth="10" strokeDasharray="283" strokeDashoffset={283 - 283 * (portfolioData.allocation.byAssetClass[0].percentage / 100)} transform="rotate(-90, 50, 50)" className="animate-drawCircle" style={{
                      animationDelay: '0.2s'
                    }} />
                        <circle cx="50" cy="50" r="45" fill="transparent" stroke="url(#purpleGradient)" strokeWidth="10" strokeDasharray="283" strokeDashoffset={283 - 283 * ((portfolioData.allocation.byAssetClass[0].percentage + portfolioData.allocation.byAssetClass[1].percentage) / 100)} transform="rotate(-90, 50, 50)" className="animate-drawCircle" style={{
                      animationDelay: '0.4s'
                    }} />
                        <circle cx="50" cy="50" r="45" fill="transparent" stroke="url(#yellowGradient)" strokeWidth="10" strokeDasharray="283" strokeDashoffset={283 - 283 * ((portfolioData.allocation.byAssetClass[0].percentage + portfolioData.allocation.byAssetClass[1].percentage + portfolioData.allocation.byAssetClass[2].percentage) / 100)} transform="rotate(-90, 50, 50)" className="animate-drawCircle" style={{
                      animationDelay: '0.6s'
                    }} />
                        {/* Gradient definitions */}
                        <defs>
                          <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#3b82f6" />
                            <stop offset="100%" stopColor="#60a5fa" />
                          </linearGradient>
                          <linearGradient id="greenGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#10b981" />
                            <stop offset="100%" stopColor="#34d399" />
                          </linearGradient>
                          <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#8b5cf6" />
                            <stop offset="100%" stopColor="#a78bfa" />
                          </linearGradient>
                          <linearGradient id="yellowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#f59e0b" />
                            <stop offset="100%" stopColor="#fbbf24" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  {portfolioData.allocation.byAssetClass.map((item, index) => <div key={index} className="flex justify-between items-center p-2 hover:bg-[#1A1F2E] rounded-lg transition-all duration-200 group">
                      <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${getColorClass(item.color)}`}></div>
                        <span className="text-sm group-hover:text-white transition-colors">
                          {item.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-20 bg-[#1A1F2E] rounded-full h-1.5">
                          <div className={`h-1.5 rounded-full bg-${item.color}-500`} style={{
                      width: `${item.percentage}%`
                    }}></div>
                        </div>
                        <span className="text-sm">
                          {item.percentage.toFixed(1)}%
                        </span>
                        <span className="text-xs text-gray-400">
                          {showBalance ? formatCurrency(item.value) : '•••'}
                        </span>
                      </div>
                    </div>)}
                </div>
                <div className="mt-6 pt-4 border-t border-gray-800/30">
                  <div className="flex items-center gap-2">
                    <div className="bg-blue-500/10 p-2 rounded-lg">
                      <InfoIcon className="h-4 w-4 text-blue-500" />
                    </div>
                    <div className="text-sm text-gray-300">
                      <span className="text-blue-500 font-medium">
                        AI Insight:
                      </span>{' '}
                      Your portfolio is well-diversified across asset classes,
                      with a slight overweight to stocks compared to your target
                      allocation.
                    </div>
                  </div>
                </div>
              </div>
              {/* Sector Allocation */}
              <div className="bg-[#151822] p-6 rounded-xl border border-gray-800/30 hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-medium">Sector Allocation</h3>
                  <button className="bg-[#1A1F2E] hover:bg-[#262B3D] p-1 rounded text-gray-400 hover:text-white transition-colors">
                    <DownloadIcon className="h-4 w-4" />
                  </button>
                </div>
                <div className="relative h-64 mb-6">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Horizontal Bar Chart */}
                    <div className="w-full h-48 flex flex-col justify-between">
                      {portfolioData.allocation.bySector.map((item, index) => <div key={index} className="flex items-center gap-3 mb-2 last:mb-0">
                          <div className="w-24 text-xs text-right">
                            {item.name}
                          </div>
                          <div className="flex-1 bg-[#1A1F2E] rounded-full h-3 overflow-hidden">
                            <div className={`h-3 rounded-full bg-${item.color}-500`} style={{
                        width: `${item.percentage}%`
                      }}></div>
                          </div>
                          <div className="w-12 text-xs">{item.percentage}%</div>
                        </div>)}
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  {portfolioData.allocation.bySector.map((item, index) => <div key={index} className="flex justify-between items-center p-2 hover:bg-[#1A1F2E] rounded-lg transition-all duration-200 group">
                      <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${getColorClass(item.color)}`}></div>
                        <span className="text-sm group-hover:text-white transition-colors">
                          {item.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm">
                          {item.percentage.toFixed(1)}%
                        </span>
                        <span className="text-xs text-gray-400">
                          {showBalance ? formatCurrency(item.value) : '•••'}
                        </span>
                      </div>
                    </div>)}
                </div>
                <div className="mt-6 pt-4 border-t border-gray-800/30">
                  <div className="flex items-center gap-2">
                    <div className="bg-yellow-500/10 p-2 rounded-lg">
                      <AlertTriangleIcon className="h-4 w-4 text-yellow-500" />
                    </div>
                    <div className="text-sm text-gray-300">
                      <span className="text-yellow-500 font-medium">
                        Warning:
                      </span>{' '}
                      Your technology sector exposure (40%) is significantly
                      higher than recommended (25-30%) for your risk profile.
                    </div>
                  </div>
                </div>
              </div>
              {/* Geographic Distribution */}
              <div className="bg-[#151822] p-6 rounded-xl border border-gray-800/30 hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-medium">
                      Geographic Distribution
                    </h3>
                    <div className="bg-blue-500/10 text-blue-400 text-xs px-2 py-1 rounded-full">
                      Interactive
                    </div>
                  </div>
                  <button className="bg-[#1A1F2E] hover:bg-[#262B3D] p-1 rounded text-gray-400 hover:text-white transition-colors">
                    <DownloadIcon className="h-4 w-4" />
                  </button>
                </div>
                <div className="relative h-64 mb-6">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-gray-400">
                      <GlobeIcon className="h-12 w-12 mx-auto mb-2" />
                      <p>Interactive map visualization</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  {portfolioData.allocation.byGeography.map((item, index) => <div key={index} className="flex justify-between items-center p-2 hover:bg-[#1A1F2E] rounded-lg transition-all duration-200 group">
                      <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${getColorClass(item.color)}`}></div>
                        <span className="text-sm group-hover:text-white transition-colors">
                          {item.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-20 bg-[#1A1F2E] rounded-full h-1.5">
                          <div className={`h-1.5 rounded-full bg-${item.color}-500`} style={{
                      width: `${item.percentage}%`
                    }}></div>
                        </div>
                        <span className="text-sm">
                          {item.percentage.toFixed(1)}%
                        </span>
                        <span className="text-xs text-gray-400">
                          {showBalance ? formatCurrency(item.value) : '•••'}
                        </span>
                      </div>
                    </div>)}
                </div>
                <div className="mt-6 pt-4 border-t border-gray-800/30">
                  <div className="flex items-center gap-2">
                    <div className="bg-blue-500/10 p-2 rounded-lg">
                      <InfoIcon className="h-4 w-4 text-blue-500" />
                    </div>
                    <div className="text-sm text-gray-300">
                      <span className="text-blue-500 font-medium">
                        AI Insight:
                      </span>{' '}
                      Your portfolio has a strong North American bias. Consider
                      increasing exposure to emerging markets for better
                      diversification.
                    </div>
                  </div>
                </div>
              </div>
              {/* Risk Distribution */}
              <div className="bg-[#151822] p-6 rounded-xl border border-gray-800/30 hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-medium">Risk Distribution</h3>
                    <div className="bg-blue-500/10 text-blue-400 text-xs px-2 py-1 rounded-full flex items-center gap-1">
                      <ZapIcon className="h-3 w-3" />
                      <span>AI Analysis</span>
                    </div>
                  </div>
                  <button className="bg-[#1A1F2E] hover:bg-[#262B3D] p-1 rounded text-gray-400 hover:text-white transition-colors">
                    <DownloadIcon className="h-4 w-4" />
                  </button>
                </div>
                <div className="relative h-64 mb-6">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-32 flex items-center justify-center">
                      <div className="w-full bg-[#1A1F2E] h-8 rounded-full overflow-hidden">
                        <div className="flex h-full">
                          <div className="bg-green-500 h-full" style={{
                        width: `${portfolioData.allocation.byRisk[2].percentage}%`
                      }}></div>
                          <div className="bg-yellow-500 h-full" style={{
                        width: `${portfolioData.allocation.byRisk[1].percentage}%`
                      }}></div>
                          <div className="bg-red-500 h-full" style={{
                        width: `${portfolioData.allocation.byRisk[0].percentage}%`
                      }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  {portfolioData.allocation.byRisk.map((item, index) => <div key={index} className="flex justify-between items-center p-2 hover:bg-[#1A1F2E] rounded-lg transition-all duration-200 group">
                      <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${getColorClass(item.color)}`}></div>
                        <span className="text-sm group-hover:text-white transition-colors">
                          {item.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-20 bg-[#1A1F2E] rounded-full h-1.5">
                          <div className={`h-1.5 rounded-full bg-${item.color}-500`} style={{
                      width: `${item.percentage}%`
                    }}></div>
                        </div>
                        <span className="text-sm">
                          {item.percentage.toFixed(1)}%
                        </span>
                        <span className="text-xs text-gray-400">
                          {showBalance ? formatCurrency(item.value) : '•••'}
                        </span>
                      </div>
                    </div>)}
                </div>
                <div className="mt-6 pt-4 border-t border-gray-800/30">
                  <div className="flex items-center gap-2">
                    <div className="bg-blue-500/10 p-2 rounded-lg">
                      <CheckCircleIcon className="h-4 w-4 text-blue-500" />
                    </div>
                    <div className="text-sm text-gray-300">
                      <span className="text-blue-500 font-medium">
                        AI Insight:
                      </span>{' '}
                      Your risk distribution aligns well with your moderate risk
                      profile. Your portfolio has a balanced mix of growth
                      potential and stability.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>}
        {activeTab === 'performance' && <div className="space-y-6">
            {/* Performance Chart */}
            <div className="bg-[#151822] p-6 rounded-xl border border-gray-800/30 hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-medium">Portfolio Performance</h3>
                <div className="flex items-center gap-2">
                  <select value={timeRange} onChange={e => setTimeRange(e.target.value)} className="bg-[#1A1F2E] rounded-lg p-1 text-sm border border-gray-800/30 focus:outline-none focus:ring-2 focus:ring-blue-500/30">
                    <option value="1d">1 Day</option>
                    <option value="1w">1 Week</option>
                    <option value="1m">1 Month</option>
                    <option value="3m">3 Months</option>
                    <option value="1y">1 Year</option>
                    <option value="all">All Time</option>
                  </select>
                  <button className="bg-[#1A1F2E] hover:bg-[#262B3D] p-1 rounded text-gray-400 hover:text-white transition-colors">
                    <DownloadIcon className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <div className="relative h-64 mb-6">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full bg-[#1A1F2E] rounded-lg border border-gray-800/30 p-4 flex items-center justify-center">
                    <div className="text-center text-gray-400">
                      <LineChartIcon className="h-12 w-12 mx-auto mb-2" />
                      <p>Performance chart visualization</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-[#1A1F2E] p-4 rounded-lg">
                  <div className="text-sm text-gray-400 mb-1">Start Value</div>
                  <div className="font-medium">
                    {showBalance ? formatCurrency(portfolioData.totalValue - portfolioData.change.month) : '••••••'}
                  </div>
                </div>
                <div className="bg-[#1A1F2E] p-4 rounded-lg">
                  <div className="text-sm text-gray-400 mb-1">
                    Current Value
                  </div>
                  <div className="font-medium">
                    {showBalance ? formatCurrency(portfolioData.totalValue) : '••••••'}
                  </div>
                </div>
                <div className="bg-[#1A1F2E] p-4 rounded-lg">
                  <div className="text-sm text-gray-400 mb-1">Total Change</div>
                  <div className={`font-medium ${getChangeColor(portfolioData.change.month)}`}>
                    {showBalance ? formatCurrency(portfolioData.change.month) : '••••••'}
                  </div>
                </div>
                <div className="bg-[#1A1F2E] p-4 rounded-lg">
                  <div className="text-sm text-gray-400 mb-1">
                    Percent Change
                  </div>
                  <div className={`font-medium ${getChangeColor(portfolioData.change.monthPercent)}`}>
                    {formatPercentage(portfolioData.change.monthPercent)}
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-800/30">
                <div className="flex items-center gap-2">
                  <div className="bg-blue-500/10 p-2 rounded-lg">
                    <ZapIcon className="h-4 w-4 text-blue-500" />
                  </div>
                  <div className="text-sm text-gray-300">
                    <span className="text-blue-500 font-medium">
                      AI Insight:
                    </span>{' '}
                    Your portfolio has outperformed the S&P 500 by 2.1% over the
                    selected period, primarily due to your technology sector
                    allocation.
                  </div>
                </div>
              </div>
            </div>
            {/* Performance Comparison */}
            <div className="bg-[#151822] p-6 rounded-xl border border-gray-800/30 hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-medium">Benchmark Comparison</h3>
                <button className="bg-[#1A1F2E] hover:bg-[#262B3D] p-1 rounded text-gray-400 hover:text-white transition-colors">
                  <SettingsIcon className="h-4 w-4" />
                </button>
              </div>
              <div className="relative h-64 mb-6">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full bg-[#1A1F2E] rounded-lg border border-gray-800/30 p-4 flex items-center justify-center">
                    <div className="text-center text-gray-400">
                      <LineChartIcon className="h-12 w-12 mx-auto mb-2" />
                      <p>Benchmark comparison chart</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-sm text-gray-400 border-b border-gray-800/50">
                      <th className="pb-3 font-medium">Benchmark</th>
                      <th className="pb-3 font-medium">1D</th>
                      <th className="pb-3 font-medium">1W</th>
                      <th className="pb-3 font-medium">1M</th>
                      <th className="pb-3 font-medium">3M</th>
                      <th className="pb-3 font-medium">1Y</th>
                      <th className="pb-3 font-medium">YTD</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-800/30">
                      <td className="py-3">
                        <div className="flex items-center gap-2">
                          <div className="bg-blue-500/10 p-1 rounded">
                            <BarChart3Icon className="h-3 w-3 text-blue-500" />
                          </div>
                          <span className="font-medium">Your Portfolio</span>
                        </div>
                      </td>
                      <td className="py-3 text-green-500">+0.98%</td>
                      <td className="py-3 text-green-500">+2.34%</td>
                      <td className="py-3 text-green-500">+5.38%</td>
                      <td className="py-3 text-green-500">+8.76%</td>
                      <td className="py-3 text-green-500">+17.12%</td>
                      <td className="py-3 text-green-500">+12.45%</td>
                    </tr>
                    <tr className="border-b border-gray-800/30">
                      <td className="py-3">
                        <div className="flex items-center gap-2">
                          <div className="bg-green-500/10 p-1 rounded">
                            <BarChart3Icon className="h-3 w-3 text-green-500" />
                          </div>
                          <span>S&P 500</span>
                        </div>
                      </td>
                      <td className="py-3 text-green-500">+0.72%</td>
                      <td className="py-3 text-green-500">+1.85%</td>
                      <td className="py-3 text-green-500">+3.26%</td>
                      <td className="py-3 text-green-500">+7.45%</td>
                      <td className="py-3 text-green-500">+15.32%</td>
                      <td className="py-3 text-green-500">+10.87%</td>
                    </tr>
                    <tr className="border-b border-gray-800/30">
                      <td className="py-3">
                        <div className="flex items-center gap-2">
                          <div className="bg-purple-500/10 p-1 rounded">
                            <BarChart3Icon className="h-3 w-3 text-purple-500" />
                          </div>
                          <span>NASDAQ</span>
                        </div>
                      </td>
                      <td className="py-3 text-green-500">+1.12%</td>
                      <td className="py-3 text-green-500">+2.65%</td>
                      <td className="py-3 text-green-500">+6.12%</td>
                      <td className="py-3 text-green-500">+9.87%</td>
                      <td className="py-3 text-green-500">+21.45%</td>
                      <td className="py-3 text-green-500">+15.76%</td>
                    </tr>
                    <tr>
                      <td className="py-3">
                        <div className="flex items-center gap-2">
                          <div className="bg-yellow-500/10 p-1 rounded">
                            <BarChart3Icon className="h-3 w-3 text-yellow-500" />
                          </div>
                          <span>60/40 Portfolio</span>
                        </div>
                      </td>
                      <td className="py-3 text-green-500">+0.65%</td>
                      <td className="py-3 text-green-500">+1.45%</td>
                      <td className="py-3 text-green-500">+2.87%</td>
                      <td className="py-3 text-green-500">+5.32%</td>
                      <td className="py-3 text-green-500">+12.76%</td>
                      <td className="py-3 text-green-500">+8.65%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* Timeline of Performance */}
            <div className="bg-[#151822] p-6 rounded-xl border border-gray-800/30 hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-medium">
                    Timeline with AI Annotations
                  </h3>
                  <div className="bg-blue-500/10 text-blue-400 text-xs px-2 py-1 rounded-full flex items-center gap-1">
                    <ZapIcon className="h-3 w-3" />
                    <span>AI-Enhanced</span>
                  </div>
                </div>
                <select className="bg-[#1A1F2E] rounded-lg p-1 text-sm border border-gray-800/30 focus:outline-none focus:ring-2 focus:ring-blue-500/30">
                  <option value="3m">Last 3 Months</option>
                  <option value="6m">Last 6 Months</option>
                  <option value="1y">Last Year</option>
                  <option value="all">All Time</option>
                </select>
              </div>
              <div className="relative h-96 mb-6">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full bg-[#1A1F2E] rounded-lg border border-gray-800/30 p-4 flex items-center justify-center">
                    <div className="text-center text-gray-400">
                      <LineChartIcon className="h-12 w-12 mx-auto mb-2" />
                      <p>Interactive timeline with AI annotations</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-[#1A1F2E] p-4 rounded-lg border border-gray-800/30 hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-500/10 p-2 rounded-lg">
                      <ZapIcon className="h-5 w-5 text-blue-500" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-medium">AI Performance Analysis</h4>
                        <span className="text-xs text-gray-400">
                          Generated today
                        </span>
                      </div>
                      <p className="text-sm text-gray-300 mt-1">
                        Your portfolio has shown strong performance over the
                        past 3 months, outperforming the S&P 500 by 1.31%. The
                        technology sector, particularly semiconductor stocks
                        like NVIDIA, has been the primary driver of your
                        returns. Your decision to maintain a higher allocation
                        to growth stocks has paid off in the current market
                        environment.
                      </p>
                      <div className="mt-3 flex items-center gap-2">
                        <button className="text-xs bg-blue-500/10 text-blue-500 px-3 py-1 rounded-lg hover:bg-blue-500/20 transition-colors">
                          See Detailed Analysis
                        </button>
                        <button className="text-xs bg-[#151822] px-3 py-1 rounded-lg hover:bg-[#0B0E15] transition-colors">
                          Get Recommendations
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>}
        {activeTab === 'insights' && <div className="space-y-6">
            {/* AI Insights */}
            <div className="bg-[#151822] p-6 rounded-xl border border-gray-800/30 hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-medium">AI Portfolio Insights</h3>
                  <div className="bg-blue-500/10 text-blue-400 text-xs px-2 py-1 rounded-full flex items-center gap-1">
                    <ZapIcon className="h-3 w-3" />
                    <span>Powered by AI</span>
                  </div>
                </div>
                <button className="bg-[#1A1F2E] hover:bg-[#262B3D] p-1 rounded text-gray-400 hover:text-white transition-colors">
                  <RefreshCwIcon className="h-4 w-4" />
                </button>
              </div>
              <div className="space-y-6">
                {/* Risk Analysis */}
                <div className="bg-[#1A1F2E] p-5 rounded-xl border border-gray-800/30">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-yellow-500/10 p-2 rounded-lg">
                      <AlertTriangleIcon className="h-5 w-5 text-yellow-500" />
                    </div>
                    <h4 className="text-lg font-medium">Risk Analysis</h4>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-[#151822] p-4 rounded-lg border border-yellow-500/20">
                      <div className="flex items-start gap-3">
                        <div className="bg-yellow-500/10 p-2 rounded-full mt-1">
                          <AlertTriangleIcon className="h-4 w-4 text-yellow-500" />
                        </div>
                        <div>
                          <h5 className="font-medium mb-1">
                            High Technology Concentration
                          </h5>
                          <p className="text-sm text-gray-300 mb-3">
                            Your portfolio has a 40% allocation to the
                            technology sector, which is significantly higher
                            than the recommended 25-30% for your risk profile.
                            This concentration increases your portfolio's
                            volatility and exposes you to sector-specific risks.
                          </p>
                          <div className="bg-[#1A1F2E]/60 p-3 rounded-lg mb-3">
                            <div className="flex items-center gap-2 mb-1">
                              <ZapIcon className="h-4 w-4 text-blue-500" />
                              <span className="text-sm font-medium">
                                AI Recommendation
                              </span>
                            </div>
                            <p className="text-sm text-gray-300">
                              Consider reducing your technology exposure by
                              10-15% and reallocating to underrepresented
                              sectors like healthcare, consumer staples, or
                              utilities to improve diversification.
                            </p>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex gap-2">
                              <button className="text-xs bg-[#1A1F2E] px-3 py-1 rounded-lg hover:bg-[#262B3D] transition-colors">
                                View Details
                              </button>
                              <button className="text-xs bg-yellow-500/10 text-yellow-500 px-3 py-1 rounded-lg hover:bg-yellow-500/20 transition-colors">
                                Fix Now
                              </button>
                            </div>
                            <div className="flex gap-2">
                              <button className="text-gray-400 hover:text-white p-1 transition-colors">
                                <ThumbsUpIcon className="h-4 w-4" />
                              </button>
                              <button className="text-gray-400 hover:text-white p-1 transition-colors">
                                <ThumbsDownIcon className="h-4 w-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-[#151822] p-4 rounded-lg border border-red-500/20">
                      <div className="flex items-start gap-3">
                        <div className="bg-red-500/10 p-2 rounded-full mt-1">
                          <AlertTriangleIcon className="h-4 w-4 text-red-500" />
                        </div>
                        <div>
                          <h5 className="font-medium mb-1">
                            Portfolio Drift Detected
                          </h5>
                          <p className="text-sm text-gray-300 mb-3">
                            Your asset allocation has drifted 8% from your
                            target allocation due to recent market movements.
                            This drift has increased your portfolio's risk level
                            beyond your stated risk tolerance.
                          </p>
                          <div className="bg-[#1A1F2E]/60 p-3 rounded-lg mb-3">
                            <div className="flex items-center gap-2 mb-1">
                              <ZapIcon className="h-4 w-4 text-blue-500" />
                              <span className="text-sm font-medium">
                                AI Recommendation
                              </span>
                            </div>
                            <p className="text-sm text-gray-300">
                              Rebalance your portfolio to bring asset
                              allocations back in line with your target
                              allocations. This would involve selling some of
                              your overweight positions (primarily technology)
                              and buying underweight positions.
                            </p>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex gap-2">
                              <button className="text-xs bg-[#1A1F2E] px-3 py-1 rounded-lg hover:bg-[#262B3D] transition-colors">
                                View Details
                              </button>
                              <button className="text-xs bg-red-500/10 text-red-500 px-3 py-1 rounded-lg hover:bg-red-500/20 transition-colors">
                                Rebalance Now
                              </button>
                            </div>
                            <div className="flex gap-2">
                              <button className="text-gray-400 hover:text-white p-1 transition-colors">
                                <ThumbsUpIcon className="h-4 w-4" />
                              </button>
                              <button className="text-gray-400 hover:text-white p-1 transition-colors">
                                <ThumbsDownIcon className="h-4 w-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Optimization Opportunities */}
                <div className="bg-[#1A1F2E] p-5 rounded-xl border border-gray-800/30">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-blue-500/10 p-2 rounded-lg">
                      <ZapIcon className="h-5 w-5 text-blue-500" />
                    </div>
                    <h4 className="text-lg font-medium">
                      Optimization Opportunities
                    </h4>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-[#151822] p-4 rounded-lg border border-blue-500/20">
                      <div className="flex items-start gap-3">
                        <div className="bg-blue-500/10 p-2 rounded-full mt-1">
                          <InfoIcon className="h-4 w-4 text-blue-500" />
                        </div>
                        <div>
                          <h5 className="font-medium mb-1">
                            Tax-Loss Harvesting Opportunity
                          </h5>
                          <p className="text-sm text-gray-300 mb-3">
                            Your VXUS position is currently down 5.95%,
                            presenting a potential tax-loss harvesting
                            opportunity. By selling this position and replacing
                            it with a similar ETF, you could capture tax
                            benefits while maintaining your investment strategy.
                          </p>
                          <div className="bg-[#1A1F2E]/60 p-3 rounded-lg mb-3">
                            <div className="flex items-center gap-2 mb-1">
                              <ZapIcon className="h-4 w-4 text-blue-500" />
                              <span className="text-sm font-medium">
                                AI Recommendation
                              </span>
                            </div>
                            <p className="text-sm text-gray-300">
                              Consider selling VXUS and purchasing IXUS (iShares
                              Core MSCI Total International Stock ETF) or VEU
                              (Vanguard FTSE All-World ex-US ETF) as a
                              replacement. This could generate approximately
                              $160 in tax losses while maintaining similar
                              exposure.
                            </p>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex gap-2">
                              <button className="text-xs bg-[#1A1F2E] px-3 py-1 rounded-lg hover:bg-[#262B3D] transition-colors">
                                Compare ETFs
                              </button>
                              <button className="text-xs bg-blue-500/10 text-blue-500 px-3 py-1 rounded-lg hover:bg-blue-500/20 transition-colors">
                                Apply Strategy
                              </button>
                            </div>
                            <div className="flex gap-2">
                              <button className="text-gray-400 hover:text-white p-1 transition-colors">
                                <ThumbsUpIcon className="h-4 w-4" />
                              </button>
                              <button className="text-gray-400 hover:text-white p-1 transition-colors">
                                <ThumbsDownIcon className="h-4 w-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-[#151822] p-4 rounded-lg border border-green-500/20">
                      <div className="flex items-start gap-3">
                        <div className="bg-green-500/10 p-2 rounded-full mt-1">
                          <TrendingUpIcon className="h-4 w-4 text-green-500" />
                        </div>
                        <div>
                          <h5 className="font-medium mb-1">
                            Dividend Optimization
                          </h5>
                          <p className="text-sm text-gray-300 mb-3">
                            Your current portfolio has a dividend yield of 1.8%,
                            which is below the average for a balanced portfolio.
                            Increasing your allocation to dividend-paying stocks
                            could enhance your passive income stream.
                          </p>
                          <div className="bg-[#1A1F2E]/60 p-3 rounded-lg mb-3">
                            <div className="flex items-center gap-2 mb-1">
                              <ZapIcon className="h-4 w-4 text-blue-500" />
                              <span className="text-sm font-medium">
                                AI Recommendation
                              </span>
                            </div>
                            <p className="text-sm text-gray-300">
                              Consider allocating 5-10% of your portfolio to
                              high-quality dividend ETFs like SCHD or VYM, which
                              could increase your overall dividend yield to
                              approximately 2.3% while maintaining your risk
                              profile.
                            </p>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex gap-2">
                              <button className="text-xs bg-[#1A1F2E] px-3 py-1 rounded-lg hover:bg-[#262B3D] transition-colors">
                                View Dividend ETFs
                              </button>
                              <button className="text-xs bg-green-500/10 text-green-500 px-3 py-1 rounded-lg hover:bg-green-500/20 transition-colors">
                                Optimize Dividends
                              </button>
                            </div>
                            <div className="flex gap-2">
                              <button className="text-gray-400 hover:text-white p-1 transition-colors">
                                <ThumbsUpIcon className="h-4 w-4" />
                              </button>
                              <button className="text-gray-400 hover:text-white p-1 transition-colors">
                                <ThumbsDownIcon className="h-4 w-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Market Insights */}
                <div className="bg-[#1A1F2E] p-5 rounded-xl border border-gray-800/30">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="bg-purple-500/10 p-2 rounded-lg">
                        <GlobeIcon className="h-5 w-5 text-purple-500" />
                      </div>
                      <h4 className="text-lg font-medium">Market Insights</h4>
                    </div>
                    <div className="text-xs text-gray-400">
                      Updated 2 hours ago
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-[#151822] p-4 rounded-lg border border-purple-500/20">
                      <div className="flex items-start gap-3">
                        <div className="bg-purple-500/10 p-2 rounded-full mt-1">
                          <GlobeIcon className="h-4 w-4 text-purple-500" />
                        </div>
                        <div>
                          <h5 className="font-medium mb-1">
                            Fed Policy Impact
                          </h5>
                          <p className="text-sm text-gray-300 mb-3">
                            Recent Federal Reserve comments suggest a potential
                            pause in interest rate hikes, which could benefit
                            your growth-oriented portfolio. Technology and
                            consumer discretionary sectors typically perform
                            well in this environment.
                          </p>
                          <div className="bg-[#1A1F2E]/60 p-3 rounded-lg mb-3">
                            <div className="flex items-center gap-2 mb-1">
                              <ZapIcon className="h-4 w-4 text-blue-500" />
                              <span className="text-sm font-medium">
                                AI Recommendation
                              </span>
                            </div>
                            <p className="text-sm text-gray-300">
                              Your current allocation is well-positioned to
                              benefit from this development. Consider
                              maintaining your growth exposure while still
                              addressing the concentration risk in technology
                              stocks.
                            </p>
                          </div>
                          <div className="flex items-center justify-between">
                            <button className="text-xs bg-[#1A1F2E] px-3 py-1 rounded-lg hover:bg-[#262B3D] transition-colors">
                              Read Full Analysis
                            </button>
                            <div className="flex gap-2">
                              <button className="text-gray-400 hover:text-white p-1 transition-colors">
                                <ThumbsUpIcon className="h-4 w-4" />
                              </button>
                              <button className="text-gray-400 hover:text-white p-1 transition-colors">
                                <ThumbsDownIcon className="h-4 w-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>}
      </div>
      {/* Connect Account Modal */}
      {showConnectModal && <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-[#151822] rounded-xl border border-gray-800/50 w-full max-w-md max-h-[90vh] overflow-y-auto animate-fadeIn">
            <div className="sticky top-0 bg-[#151822] border-b border-gray-800/50 p-4 flex justify-between items-center z-10">
              <h3 className="font-medium text-lg">Connect Financial Account</h3>
              <button onClick={() => setShowConnectModal(false)} className="text-gray-400 hover:text-white transition-colors">
                <XIcon className="h-6 w-6" />
              </button>
            </div>
            <div className="p-6">
              <p className="text-gray-300 mb-6">
                Connect your financial accounts to automatically import and
                track your investments in real-time.
              </p>
              <div className="space-y-4 mb-6">
                <button className="w-full bg-[#1A1F2E] hover:bg-[#262B3D] p-4 rounded-lg flex items-center gap-3 transition-all duration-200 border border-gray-800/30 hover:border-blue-500/30 group">
                  <div className="bg-blue-500/10 p-2 rounded-lg group-hover:scale-110 transition-transform">
                    <BarChart3Icon className="h-5 w-5 text-blue-500" />
                  </div>
                  <div className="text-left">
                    <div className="font-medium group-hover:text-blue-500 transition-colors">
                      Robinhood
                    </div>
                    <div className="text-xs text-gray-400">
                      Stocks, ETFs, Options
                    </div>
                  </div>
                </button>
                <button className="w-full bg-[#1A1F2E] hover:bg-[#262B3D] p-4 rounded-lg flex items-center gap-3 transition-all duration-200 border border-gray-800/30 hover:border-blue-500/30 group">
                  <div className="bg-green-500/10 p-2 rounded-lg group-hover:scale-110 transition-transform">
                    <DollarSignIcon className="h-5 w-5 text-green-500" />
                  </div>
                  <div className="text-left">
                    <div className="font-medium group-hover:text-green-500 transition-colors">
                      Vanguard
                    </div>
                    <div className="text-xs text-gray-400">
                      Mutual Funds, ETFs, Retirement
                    </div>
                  </div>
                </button>
                <button className="w-full bg-[#1A1F2E] hover:bg-[#262B3D] p-4 rounded-lg flex items-center gap-3 transition-all duration-200 border border-gray-800/30 hover:border-blue-500/30 group">
                  <div className="bg-purple-500/10 p-2 rounded-lg group-hover:scale-110 transition-transform">
                    <DollarSignIcon className="h-5 w-5 text-purple-500" />
                  </div>
                  <div className="text-left">
                    <div className="font-medium group-hover:text-purple-500 transition-colors">
                      Coinbase
                    </div>
                    <div className="text-xs text-gray-400">Cryptocurrency</div>
                  </div>
                </button>
                <button className="w-full bg-[#1A1F2E] hover:bg-[#262B3D] p-4 rounded-lg flex items-center gap-3 transition-all duration-200 border border-gray-800/30 hover:border-blue-500/30 group">
                  <div className="bg-yellow-500/10 p-2 rounded-lg group-hover:scale-110 transition-transform">
                    <WalletIcon className="h-5 w-5 text-yellow-500" />
                  </div>
                  <div className="text-left">
                    <div className="font-medium group-hover:text-yellow-500 transition-colors">
                      Chase
                    </div>
                    <div className="text-xs text-gray-400">
                      Banking, Credit Cards, Investments
                    </div>
                  </div>
                </button>
              </div>
              <div className="flex items-center gap-2 mb-6">
                <hr className="flex-1 border-gray-800/50" />
                <span className="text-xs text-gray-400">or</span>
                <hr className="flex-1 border-gray-800/50" />
              </div>
              <button className="w-full bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 p-3 rounded-lg font-medium transition-all duration-200" onClick={() => {
            setShowConnectModal(false);
            handleAddAsset();
          }}>
                Manually Add Assets
              </button>
            </div>
          </div>
        </div>}
      {/* Add Asset Modal */}
      {showAddAssetModal && <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-[#151822] rounded-xl border border-gray-800/50 w-full max-w-md max-h-[90vh] overflow-y-auto animate-fadeIn">
            <div className="sticky top-0 bg-[#151822] border-b border-gray-800/50 p-4 flex justify-between items-center z-10">
              <h3 className="font-medium text-lg">Add New Asset</h3>
              <button onClick={handleCloseAddAssetModal} className="text-gray-400 hover:text-white transition-colors">
                <XIcon className="h-6 w-6" />
              </button>
            </div>
            <div className="p-6">
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm text-gray-400 mb-1">
                    Asset Type
                  </label>
                  <select className="w-full bg-[#1A1F2E] rounded-lg p-2 text-sm border border-gray-800/30 focus:outline-none focus:ring-2 focus:ring-blue-500/30" value={assetToAdd.type} onChange={e => setAssetToAdd({
                ...assetToAdd,
                type: e.target.value
              })}>
                    <option value="stock">Stock</option>
                    <option value="etf">ETF</option>
                    <option value="crypto">Cryptocurrency</option>
                    <option value="commodity">Commodity</option>
                    <option value="cash">Cash</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">
                    Symbol / Ticker
                  </label>
                  <input type="text" className="w-full bg-[#1A1F2E] rounded-lg p-2 text-sm border border-gray-800/30 focus:outline-none focus:ring-2 focus:ring-blue-500/30" placeholder="e.g., AAPL, BTC, VTI" value={assetToAdd.symbol} onChange={e => setAssetToAdd({
                ...assetToAdd,
                symbol: e.target.value
              })} />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">
                    Name
                  </label>
                  <input type="text" className="w-full bg-[#1A1F2E] rounded-lg p-2 text-sm border border-gray-800/30 focus:outline-none focus:ring-2 focus:ring-blue-500/30" placeholder="e.g., Apple Inc., Bitcoin" value={assetToAdd.name} onChange={e => setAssetToAdd({
                ...assetToAdd,
                name: e.target.value
              })} />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">
                    Current Price
                  </label>
                  <input type="number" step="0.01" className="w-full bg-[#1A1F2E] rounded-lg p-2 text-sm border border-gray-800/30 focus:outline-none focus:ring-2 focus:ring-blue-500/30" placeholder="e.g., 150.25" value={assetToAdd.price} onChange={e => setAssetToAdd({
                ...assetToAdd,
                price: e.target.value
              })} />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">
                    Quantity
                  </label>
                  <input type="number" step="0.0001" className="w-full bg-[#1A1F2E] rounded-lg p-2 text-sm border border-gray-800/30 focus:outline-none focus:ring-2 focus:ring-blue-500/30" placeholder="e.g., 10, 0.25" value={assetToAdd.quantity} onChange={e => setAssetToAdd({
                ...assetToAdd,
                quantity: e.target.value
              })} />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">
                    Purchase Date
                  </label>
                  <input type="date" className="w-full bg-[#1A1F2E] rounded-lg p-2 text-sm border border-gray-800/30 focus:outline-none focus:ring-2 focus:ring-blue-500/30" value={assetToAdd.date} onChange={e => setAssetToAdd({
                ...assetToAdd,
                date: e.target.value
              })} />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">
                    Account
                  </label>
                  <select className="w-full bg-[#1A1F2E] rounded-lg p-2 text-sm border border-gray-800/30 focus:outline-none focus:ring-2 focus:ring-blue-500/30">
                    {portfolioData.accounts.map(account => <option key={account.id} value={account.id}>
                        {account.name}
                      </option>)}
                  </select>
                </div>
              </div>
              <div className="flex gap-3 justify-end">
                <button className="bg-[#1A1F2E] hover:bg-[#262B3D] px-4 py-2 rounded-lg text-sm transition-all duration-200" onClick={handleCloseAddAssetModal}>
                  Cancel
                </button>
                <button className="bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200" onClick={handleCloseAddAssetModal}>
                  Add Asset
                </button>
              </div>
            </div>
          </div>
        </div>}
      {/* Asset Detail Modal */}
      {selectedAsset && <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-[#151822] rounded-xl border border-gray-800/50 w-full max-w-3xl max-h-[90vh] overflow-y-auto animate-fadeIn">
            <div className="sticky top-0 bg-[#151822] border-b border-gray-800/50 p-4 flex justify-between items-center z-10">
              <div className="flex items-center gap-3">
                <div className="bg-[#1A1F2E] p-2 rounded-lg">
                  {getAssetIcon(selectedAsset.type)}
                </div>
                <div>
                  <h3 className="font-medium">{selectedAsset.symbol}</h3>
                  <div className="text-xs text-gray-400">
                    {selectedAsset.name}
                  </div>
                </div>
              </div>
              <button onClick={() => setSelectedAsset(null)} className="text-gray-400 hover:text-white transition-colors">
                <XIcon className="h-6 w-6" />
              </button>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-[#1A1F2E] p-4 rounded-lg">
                  <div className="text-sm text-gray-400 mb-1">
                    Current Price
                  </div>
                  <div className="text-xl font-medium">
                    {formatCurrency(selectedAsset.price)}
                  </div>
                  <div className={`flex items-center gap-1 text-sm ${getChangeColor(selectedAsset.dayChange)}`}>
                    {getChangeIcon(selectedAsset.dayChange)}
                    <span>
                      {Math.abs(selectedAsset.dayChange).toFixed(2)}% today
                    </span>
                  </div>
                </div>
                <div className="bg-[#1A1F2E] p-4 rounded-lg">
                  <div className="text-sm text-gray-400 mb-1">
                    Your Position
                  </div>
                  <div className="text-xl font-medium">
                    {showBalance ? formatCurrency(selectedAsset.value) : '••••••'}
                  </div>
                  <div className="text-sm text-gray-400">
                    {selectedAsset.quantity} shares
                  </div>
                </div>
                <div className="bg-[#1A1F2E] p-4 rounded-lg">
                  <div className="text-sm text-gray-400 mb-1">Total Return</div>
                  <div className={`text-xl font-medium ${getChangeColor(selectedAsset.gain)}`}>
                    {showBalance ? formatCurrency(selectedAsset.gain) : '••••••'}
                  </div>
                  <div className={`text-sm ${getChangeColor(selectedAsset.gainPercentage)}`}>
                    {formatPercentage(selectedAsset.gainPercentage)}
                  </div>
                </div>
              </div>
              <div className="mb-6">
                <h4 className="font-medium mb-4">Performance Chart</h4>
                <div className="bg-[#1A1F2E] h-64 rounded-lg border border-gray-800/30 flex items-center justify-center">
                  <div className="text-center text-gray-400">
                    <LineChartIcon className="h-12 w-12 mx-auto mb-2" />
                    <p>Asset performance chart</p>
                  </div>
                </div>
              </div>
              <div className="mb-6">
                <h4 className="font-medium mb-4">Asset Details</h4>
                <div className="bg-[#1A1F2E] rounded-lg border border-gray-800/30 overflow-hidden">
                  <table className="w-full">
                    <tbody className="divide-y divide-gray-800/30">
                      <tr>
                        <td className="p-3 text-gray-400">Symbol</td>
                        <td className="p-3">{selectedAsset.symbol}</td>
                      </tr>
                      <tr>
                        <td className="p-3 text-gray-400">Name</td>
                        <td className="p-3">{selectedAsset.name}</td>
                      </tr>
                      <tr>
                        <td className="p-3 text-gray-400">Type</td>
                        <td className="p-3 capitalize">{selectedAsset.type}</td>
                      </tr>
                      <tr>
                        <td className="p-3 text-gray-400">Quantity</td>
                        <td className="p-3">{selectedAsset.quantity}</td>
                      </tr>
                      <tr>
                        <td className="p-3 text-gray-400">Purchase Price</td>
                        <td className="p-3">
                          {formatCurrency(selectedAsset.cost / selectedAsset.quantity)}
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 text-gray-400">Total Cost</td>
                        <td className="p-3">
                          {formatCurrency(selectedAsset.cost)}
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 text-gray-400">Current Value</td>
                        <td className="p-3">
                          {formatCurrency(selectedAsset.value)}
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 text-gray-400">Gain/Loss</td>
                        <td className={`p-3 ${getChangeColor(selectedAsset.gain)}`}>
                          {formatCurrency(selectedAsset.gain)} (
                          {formatPercentage(selectedAsset.gainPercentage)})
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 text-gray-400">Account</td>
                        <td className="p-3">
                          {portfolioData.accounts.find(acc => acc.id === selectedAsset.accountId)?.name}
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 text-gray-400">Sector</td>
                        <td className="p-3">{selectedAsset.sector}</td>
                      </tr>
                      <tr>
                        <td className="p-3 text-gray-400">Geography</td>
                        <td className="p-3">{selectedAsset.geography}</td>
                      </tr>
                      <tr>
                        <td className="p-3 text-gray-400">Risk Level</td>
                        <td className="p-3">{selectedAsset.risk}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="mb-6">
                <h4 className="font-medium mb-4">AI Insights</h4>
                <div className="bg-blue-500/10 p-4 rounded-lg border border-blue-500/30">
                  <div className="flex items-start gap-3">
                    <div className="bg-[#151822] p-2 rounded-lg">
                      <ZapIcon className="h-4 w-4 text-blue-500" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-300 mb-3">
                        {selectedAsset.symbol === 'NVDA' ? 'NVIDIA has been a top performer in your portfolio with a 109.86% gain. The company continues to benefit from strong AI chip demand, though its current valuation is stretched compared to historical averages. Consider taking partial profits to reduce concentration risk.' : selectedAsset.symbol === 'VXUS' ? 'Your VXUS position is currently down 5.95%, presenting a tax-loss harvesting opportunity. Consider selling and replacing with a similar ETF like IXUS to capture tax benefits while maintaining international exposure.' : `${selectedAsset.name} represents ${(selectedAsset.value / portfolioData.totalValue * 100).toFixed(1)}% of your portfolio. This position aligns with your ${selectedAsset.risk.toLowerCase()} risk allocation strategy.`}
                      </p>
                      <div className="flex gap-2">
                        <button className="text-xs bg-[#151822] px-3 py-1 rounded-lg hover:bg-[#0B0E15] transition-colors">
                          More Details
                        </button>
                        <button className="text-xs bg-blue-500/10 text-blue-500 px-3 py-1 rounded-lg hover:bg-blue-500/20 transition-colors">
                          Get Recommendation
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-3 justify-end">
                <button className="bg-[#1A1F2E] hover:bg-[#262B3D] px-4 py-2 rounded-lg text-sm transition-all duration-200 flex items-center gap-1">
                  <EditIcon className="h-4 w-4" />
                  <span>Edit</span>
                </button>
                <button className="bg-red-500/10 text-red-500 hover:bg-red-500/20 px-4 py-2 rounded-lg text-sm transition-all duration-200 flex items-center gap-1">
                  <Trash2Icon className="h-4 w-4" />
                  <span>Delete</span>
                </button>
              </div>
            </div>
          </div>
        </div>}
      {/* Custom styles */}
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
        @keyframes drawCircle {
          to {
            stroke-dashoffset: 0;
          }
        }
        .animate-drawCircle {
          animation: drawCircle 1.5s ease-in-out forwards;
        }
      `}</style>
    </div>;
};