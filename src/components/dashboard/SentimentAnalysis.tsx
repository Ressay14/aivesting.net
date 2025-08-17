import React, { useState, useEffect } from 'react'
import {
  RefreshCwIcon,
  TrendingUpIcon,
  TrendingDownIcon,
  BarChart3Icon,
  FilterIcon,
  DownloadIcon,
  BellIcon,
  SearchIcon,
  InfoIcon,
  TwitterIcon,
  NewspaperIcon,
  ArrowRightIcon,
  ChevronDownIcon,
  AlertTriangleIcon,
  CheckCircleIcon,
  XCircleIcon,
  CalendarIcon,
  ChevronRightIcon,
  ZapIcon,
} from 'lucide-react'
export const SentimentAnalysis = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('realtime')
  const [selectedSector, setSelectedSector] = useState('all')
  const [timeRange, setTimeRange] = useState('1w')
  const [searchQuery, setSearchQuery] = useState('')
  const [showTooltip, setShowTooltip] = useState<string | null>(null)
  const [showInsightModal, setShowInsightModal] = useState(false)
  const [selectedInsight, setSelectedInsight] = useState<any>(null)
  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])
  const sectors = [
    { id: 'all', name: 'All Sectors', sentiment: 'neutral' },
    { id: 'tech', name: 'Technology', sentiment: 'positive' },
    { id: 'finance', name: 'Financial', sentiment: 'negative' },
    { id: 'healthcare', name: 'Healthcare', sentiment: 'positive' },
    { id: 'energy', name: 'Energy', sentiment: 'neutral' },
    { id: 'consumer', name: 'Consumer', sentiment: 'negative' },
    { id: 'industrial', name: 'Industrial', sentiment: 'neutral' },
    { id: 'materials', name: 'Materials', sentiment: 'positive' },
    { id: 'utilities', name: 'Utilities', sentiment: 'neutral' },
    { id: 'realestate', name: 'Real Estate', sentiment: 'negative' },
    { id: 'telecom', name: 'Telecom', sentiment: 'positive' },
  ]
  const sentimentData = {
    tech: {
      overall: 0.72,
      change: 0.08,
      trending: true,
      sources: {
        news: 0.65,
        social: 0.78,
        analyst: 0.7,
      },
      topStocks: [
        { symbol: 'AAPL', name: 'Apple Inc.', sentiment: 0.82, change: 0.05 },
        { symbol: 'MSFT', name: 'Microsoft', sentiment: 0.75, change: 0.03 },
        { symbol: 'NVDA', name: 'NVIDIA', sentiment: 0.88, change: 0.12 },
        { symbol: 'GOOGL', name: 'Alphabet', sentiment: 0.65, change: -0.02 },
        {
          symbol: 'META',
          name: 'Meta Platforms',
          sentiment: 0.62,
          change: 0.07,
        },
      ],
      insights: [
        {
          id: 1,
          title: 'AI Chip Demand Driving Tech Optimism',
          source: 'Market Analysis',
          timestamp: '2 hours ago',
          sentiment: 'positive',
          summary:
            'Investor sentiment for semiconductor companies continues to rise as AI chip demand outpaces supply. Analysts project sustained growth through 2024.',
          details:
            'The technology sector is experiencing a significant sentiment boost, primarily driven by unprecedented demand for AI chips. NVIDIA, AMD, and other semiconductor manufacturers are seeing particularly positive sentiment as their order books fill up with requests from major cloud providers and AI startups. This trend appears sustainable as AI implementation across industries accelerates, with most analysts projecting supply constraints to continue for at least 12-18 months. Recent earnings reports have confirmed this trajectory, with many companies raising guidance for upcoming quarters.',
          impact: 'High',
          confidence: 0.92,
          relatedStocks: ['NVDA', 'AMD', 'INTC', 'TSM'],
          keywords: ['AI', 'Semiconductors', 'Chips', 'Supply Chain', 'Growth'],
          sources: [
            { name: 'Financial Times', url: '#', type: 'news' },
            { name: 'Bloomberg', url: '#', type: 'news' },
            { name: 'Goldman Sachs Research', url: '#', type: 'research' },
          ],
        },
        {
          id: 2,
          title: 'SaaS Companies Facing Valuation Pressure',
          source: 'Twitter Trends',
          timestamp: 'Yesterday',
          sentiment: 'negative',
          summary:
            'Software-as-a-Service companies are experiencing sentiment decline as investors worry about valuation multiples in a higher interest rate environment.',
          details:
            'Software-as-a-Service (SaaS) companies are facing increasing skepticism from investors concerned about sustainable growth rates and high valuation multiples. The narrative on social media and financial forums has shifted noticeably over the past two weeks, with many prominent investors questioning whether the sector can maintain its premium valuations in the current interest rate environment. Companies with lower gross margins or unclear paths to profitability are experiencing the most significant sentiment declines.',
          impact: 'Medium',
          confidence: 0.78,
          relatedStocks: ['CRM', 'WDAY', 'NOW', 'ZS', 'DDOG'],
          keywords: [
            'SaaS',
            'Valuation',
            'Interest Rates',
            'Growth Stocks',
            'Multiples',
          ],
          sources: [
            { name: 'Twitter Trends', url: '#', type: 'social' },
            { name: 'Reddit r/investing', url: '#', type: 'social' },
            { name: 'Morgan Stanley Note', url: '#', type: 'research' },
          ],
        },
      ],
    },
    finance: {
      overall: 0.35,
      change: -0.12,
      trending: false,
      sources: {
        news: 0.32,
        social: 0.38,
        analyst: 0.35,
      },
      topStocks: [
        {
          symbol: 'JPM',
          name: 'JPMorgan Chase',
          sentiment: 0.45,
          change: -0.08,
        },
        {
          symbol: 'BAC',
          name: 'Bank of America',
          sentiment: 0.32,
          change: -0.15,
        },
        { symbol: 'WFC', name: 'Wells Fargo', sentiment: 0.28, change: -0.18 },
        { symbol: 'C', name: 'Citigroup', sentiment: 0.3, change: -0.1 },
        { symbol: 'GS', name: 'Goldman Sachs', sentiment: 0.4, change: -0.05 },
      ],
      insights: [
        {
          id: 3,
          title: 'Banking Sector Under Pressure from Rate Uncertainty',
          source: 'Financial News',
          timestamp: 'Today',
          sentiment: 'negative',
          summary:
            'Regional banks facing sentiment decline as interest rate uncertainty and deposit competition intensifies.',
          details:
            "The banking sector, particularly regional banks, is experiencing deteriorating sentiment as investors worry about net interest margin compression and deposit competition. The Federal Reserve's unclear path forward on interest rates has created significant uncertainty, with many analysts downgrading their outlook for the sector. Social media discussions increasingly focus on potential risks in commercial real estate portfolios, further dampening sentiment. Larger banks with diversified revenue streams are faring better than their regional counterparts.",
          impact: 'High',
          confidence: 0.85,
          relatedStocks: ['KRE', 'SIVB', 'FRC', 'RF', 'KEY'],
          keywords: [
            'Banking',
            'Interest Rates',
            'Deposits',
            'Federal Reserve',
            'Regional Banks',
          ],
          sources: [
            { name: 'Wall Street Journal', url: '#', type: 'news' },
            { name: 'CNBC', url: '#', type: 'news' },
            { name: 'Bank of America Research', url: '#', type: 'research' },
          ],
        },
      ],
    },
    healthcare: {
      overall: 0.68,
      change: 0.05,
      trending: true,
      sources: {
        news: 0.7,
        social: 0.65,
        analyst: 0.68,
      },
      topStocks: [
        {
          symbol: 'JNJ',
          name: 'Johnson & Johnson',
          sentiment: 0.62,
          change: 0.02,
        },
        { symbol: 'PFE', name: 'Pfizer', sentiment: 0.58, change: -0.03 },
        { symbol: 'UNH', name: 'UnitedHealth', sentiment: 0.75, change: 0.08 },
        { symbol: 'ABBV', name: 'AbbVie', sentiment: 0.7, change: 0.06 },
        { symbol: 'LLY', name: 'Eli Lilly', sentiment: 0.82, change: 0.15 },
      ],
      insights: [
        {
          id: 4,
          title: 'Weight Loss Drugs Driving Pharmaceutical Optimism',
          source: 'Research Reports',
          timestamp: '3 days ago',
          sentiment: 'positive',
          summary:
            'GLP-1 weight loss medications creating unprecedented positive sentiment for pharmaceutical companies with strong pipelines in the space.',
          details:
            'Pharmaceutical companies with strong GLP-1 drug pipelines are experiencing a significant sentiment boost as these weight loss and diabetes medications show potential for treating multiple conditions. Eli Lilly and Novo Nordisk are leading this trend, with sentiment scores reaching multi-year highs. Analysts are projecting a potential market size exceeding $100 billion by 2030, far higher than previous estimates. The positive sentiment is also creating a halo effect for adjacent healthcare subsectors, including medical devices and healthcare technology companies that could benefit from this treatment paradigm.',
          impact: 'Very High',
          confidence: 0.94,
          relatedStocks: ['LLY', 'NVO', 'AMGN', 'PFE', 'MRK'],
          keywords: [
            'GLP-1',
            'Weight Loss',
            'Diabetes',
            'Obesity',
            'Pharmaceuticals',
          ],
          sources: [
            { name: 'Healthcare Investor Conference', url: '#', type: 'event' },
            {
              name: 'JPMorgan Healthcare Analysis',
              url: '#',
              type: 'research',
            },
            {
              name: 'Medical Journal Publications',
              url: '#',
              type: 'research',
            },
          ],
        },
      ],
    },
  }
  const getSectorData = () => {
    if (selectedSector === 'all') {
      // Aggregate data from all sectors
      return {
        overall: 0.58,
        change: 0.02,
        trending: true,
        sources: {
          news: 0.55,
          social: 0.6,
          analyst: 0.58,
        },
        topStocks: [
          { symbol: 'AAPL', name: 'Apple Inc.', sentiment: 0.82, change: 0.05 },
          { symbol: 'MSFT', name: 'Microsoft', sentiment: 0.75, change: 0.03 },
          { symbol: 'LLY', name: 'Eli Lilly', sentiment: 0.82, change: 0.15 },
          { symbol: 'NVDA', name: 'NVIDIA', sentiment: 0.88, change: 0.12 },
          {
            symbol: 'UNH',
            name: 'UnitedHealth',
            sentiment: 0.75,
            change: 0.08,
          },
        ],
        insights: [
          ...sentimentData.tech.insights,
          ...sentimentData.finance.insights,
          ...sentimentData.healthcare.insights,
        ],
      }
    }
    return (
      sentimentData[selectedSector as keyof typeof sentimentData] ||
      sentimentData.tech
    )
  }
  const currentData = getSectorData()
  const getSentimentEmoji = (sentiment: number) => {
    if (sentiment >= 0.7) return '😀'
    if (sentiment >= 0.6) return '🙂'
    if (sentiment >= 0.5) return '😐'
    if (sentiment >= 0.4) return '🙁'
    return '😞'
  }
  const getSentimentColor = (sentiment: number) => {
    if (sentiment >= 0.7) return 'text-green-500'
    if (sentiment >= 0.6) return 'text-green-400'
    if (sentiment >= 0.5) return 'text-yellow-500'
    if (sentiment >= 0.4) return 'text-yellow-400'
    if (sentiment >= 0.3) return 'text-orange-500'
    return 'text-red-500'
  }
  const getSentimentBg = (sentiment: number) => {
    if (sentiment >= 0.7) return 'bg-green-500/10'
    if (sentiment >= 0.6) return 'bg-green-400/10'
    if (sentiment >= 0.5) return 'bg-yellow-500/10'
    if (sentiment >= 0.4) return 'bg-yellow-400/10'
    if (sentiment >= 0.3) return 'bg-orange-500/10'
    return 'bg-red-500/10'
  }
  const getSentimentBorder = (sentiment: number) => {
    if (sentiment >= 0.7) return 'border-green-500/30'
    if (sentiment >= 0.6) return 'border-green-400/30'
    if (sentiment >= 0.5) return 'border-yellow-500/30'
    if (sentiment >= 0.4) return 'border-yellow-400/30'
    if (sentiment >= 0.3) return 'border-orange-500/30'
    return 'border-red-500/30'
  }
  const getSentimentText = (sentiment: number) => {
    if (sentiment >= 0.7) return 'Very Positive'
    if (sentiment >= 0.6) return 'Positive'
    if (sentiment >= 0.5) return 'Slightly Positive'
    if (sentiment >= 0.4) return 'Slightly Negative'
    if (sentiment >= 0.3) return 'Negative'
    return 'Very Negative'
  }
  const getSentimentIcon = (sentiment: string) => {
    switch (sentiment) {
      case 'positive':
        return <TrendingUpIcon className="h-4 w-4 text-green-500" />
      case 'negative':
        return <TrendingDownIcon className="h-4 w-4 text-red-500" />
      default:
        return <BarChart3Icon className="h-4 w-4 text-yellow-500" />
    }
  }
  const getChangeColor = (change: number) => {
    return change >= 0 ? 'text-green-500' : 'text-red-500'
  }
  const getChangeIcon = (change: number) => {
    return change >= 0 ? (
      <TrendingUpIcon className="h-3 w-3 text-green-500" />
    ) : (
      <TrendingDownIcon className="h-3 w-3 text-red-500" />
    )
  }
  const handleOpenInsight = (insight: any) => {
    setSelectedInsight(insight)
    setShowInsightModal(true)
  }
  const filteredSectors = sectors.filter((sector) =>
    sector.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )
  const filteredInsights =
    currentData.insights?.filter(
      (insight) =>
        insight.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        insight.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        insight.keywords.some((keyword: string) =>
          keyword.toLowerCase().includes(searchQuery.toLowerCase()),
        ),
    ) || []
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-64">
        <div className="bg-green-500/10 p-3 rounded-full">
          <RefreshCwIcon className="h-8 w-8 text-green-500 animate-spin" />
        </div>
        <p className="text-gray-400 mt-4">Loading sentiment data...</p>
      </div>
    )
  }
  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="bg-[#151822] p-6 rounded-xl border border-green-500/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 relative z-10">
          <div>
            <h1 className="text-xl font-bold mb-2 flex items-center gap-2">
              <BarChart3Icon className="h-5 w-5 text-green-500" />
              <span>Market Sentiment Analysis</span>
              <span className="bg-green-500/10 text-green-400 text-xs px-2 py-1 rounded-full">
                AI-Powered
              </span>
            </h1>
            <p className="text-gray-400">
              Real-time sentiment tracking across markets, news sources, and
              social media
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button className="bg-[#1A1F2E] hover:bg-[#262B3D] px-3 py-1 rounded-lg text-sm flex items-center gap-1 transition-all duration-200">
              <RefreshCwIcon className="h-4 w-4" />
              <span>Refresh</span>
            </button>
            <button className="bg-green-500/10 text-green-500 hover:bg-green-500/20 px-3 py-1 rounded-lg text-sm flex items-center gap-1 transition-all duration-200">
              <DownloadIcon className="h-4 w-4" />
              <span>Download Report</span>
            </button>
            <button className="bg-[#1A1F2E] hover:bg-[#262B3D] px-3 py-1 rounded-lg text-sm flex items-center gap-1 transition-all duration-200">
              <BellIcon className="h-4 w-4" />
              <span>Set Alert</span>
            </button>
          </div>
        </div>
      </div>
      {/* Search and Filter Bar */}
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div className="relative flex-grow max-w-md">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search sectors, stocks, or insights..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-[#1A1F2E] w-full rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500/50 border border-gray-800/30 hover:border-gray-700/50 focus:border-green-500/30"
          />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-1 hide-scrollbar">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="bg-[#1A1F2E] rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500/50 border border-gray-800/30 hover:border-gray-700/50 focus:border-green-500/30"
          >
            <option value="1d">1 Day</option>
            <option value="1w">1 Week</option>
            <option value="1m">1 Month</option>
            <option value="3m">3 Months</option>
            <option value="1y">1 Year</option>
          </select>
          <button className="bg-[#1A1F2E] px-3 py-2 rounded-lg text-sm flex items-center gap-1 hover:bg-[#262B3D] transition-all duration-200 border border-gray-800/30">
            <FilterIcon className="h-4 w-4" />
            <span>Filters</span>
          </button>
          <button className="bg-[#1A1F2E] px-3 py-2 rounded-lg text-sm flex items-center gap-1 hover:bg-[#262B3D] transition-all duration-200 border border-gray-800/30">
            <CalendarIcon className="h-4 w-4" />
            <span>Calendar</span>
          </button>
        </div>
      </div>
      {/* Tabs */}
      <div className="border-b border-gray-800/50">
        <div className="flex space-x-4 overflow-x-auto hide-scrollbar">
          <button
            className={`px-4 py-2 text-sm font-medium border-b-2 ${
              activeTab === 'realtime'
                ? 'border-green-500 text-green-500'
                : 'border-transparent text-gray-400 hover:text-white'
            } transition-colors duration-200`}
            onClick={() => setActiveTab('realtime')}
          >
            Real-Time Sentiment
          </button>
          <button
            className={`px-4 py-2 text-sm font-medium border-b-2 ${
              activeTab === 'heatmap'
                ? 'border-green-500 text-green-500'
                : 'border-transparent text-gray-400 hover:text-white'
            } transition-colors duration-200`}
            onClick={() => setActiveTab('heatmap')}
          >
            Sector Heatmap
          </button>
          <button
            className={`px-4 py-2 text-sm font-medium border-b-2 ${
              activeTab === 'insights'
                ? 'border-green-500 text-green-500'
                : 'border-transparent text-gray-400 hover:text-white'
            } transition-colors duration-200`}
            onClick={() => setActiveTab('insights')}
          >
            AI Insights
          </button>
          <button
            className={`px-4 py-2 text-sm font-medium border-b-2 ${
              activeTab === 'reports'
                ? 'border-green-500 text-green-500'
                : 'border-transparent text-gray-400 hover:text-white'
            } transition-colors duration-200`}
            onClick={() => setActiveTab('reports')}
          >
            Weekly Reports
          </button>
          <button
            className={`px-4 py-2 text-sm font-medium border-b-2 ${
              activeTab === 'alerts'
                ? 'border-green-500 text-green-500'
                : 'border-transparent text-gray-400 hover:text-white'
            } transition-colors duration-200`}
            onClick={() => setActiveTab('alerts')}
          >
            My Alerts
          </button>
        </div>
      </div>
      {/* Content based on active tab */}
      <div className="py-2">
        {activeTab === 'realtime' && (
          <div className="space-y-6">
            {/* Overall Sentiment Card */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#151822] p-6 rounded-xl border border-gray-800/30 hover:border-green-500/30 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium">Overall Sentiment</h3>
                  <div
                    className="text-gray-400 hover:text-white cursor-help transition-colors"
                    onMouseEnter={() => setShowTooltip('overall')}
                    onMouseLeave={() => setShowTooltip(null)}
                  >
                    <InfoIcon className="h-4 w-4" />
                    {showTooltip === 'overall' && (
                      <div className="absolute z-30 bg-[#1A1F2E]/95 backdrop-blur-md p-3 rounded-lg shadow-lg border border-gray-800/50 w-64 text-sm mt-2 right-0 animate-fadeIn">
                        <p className="text-xs text-gray-300">
                          Overall sentiment score is calculated from news
                          sources, social media, and analyst ratings. Scores
                          range from 0 (extremely negative) to 1 (extremely
                          positive).
                        </p>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex items-center justify-center mb-6">
                  <div
                    className={`text-6xl ${getSentimentColor(currentData.overall)}`}
                  >
                    {getSentimentEmoji(currentData.overall)}
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div
                    className={`text-2xl font-bold ${getSentimentColor(currentData.overall)}`}
                  >
                    {getSentimentText(currentData.overall)}
                  </div>
                  <div className="flex items-center gap-1 mt-2">
                    <span className="text-sm text-gray-400">Score:</span>
                    <span
                      className={`font-medium ${getSentimentColor(currentData.overall)}`}
                    >
                      {(currentData.overall * 100).toFixed(0)}%
                    </span>
                    <span
                      className={`flex items-center text-xs ml-2 ${getChangeColor(currentData.change)}`}
                    >
                      {getChangeIcon(currentData.change)}
                      {Math.abs(currentData.change * 100).toFixed(1)}%
                    </span>
                  </div>
                  <div className="text-xs text-gray-400 mt-1">
                    Updated 5 minutes ago
                  </div>
                </div>
              </div>
              {/* Sentiment Sources Card */}
              <div className="bg-[#151822] p-6 rounded-xl border border-gray-800/30 hover:border-green-500/30 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-medium">Sentiment Sources</h3>
                  <div
                    className="text-gray-400 hover:text-white cursor-help transition-colors"
                    onMouseEnter={() => setShowTooltip('sources')}
                    onMouseLeave={() => setShowTooltip(null)}
                  >
                    <InfoIcon className="h-4 w-4" />
                    {showTooltip === 'sources' && (
                      <div className="absolute z-30 bg-[#1A1F2E]/95 backdrop-blur-md p-3 rounded-lg shadow-lg border border-gray-800/50 w-64 text-sm mt-2 right-0 animate-fadeIn">
                        <p className="text-xs text-gray-300">
                          Sentiment is gathered from multiple sources including
                          news articles, social media posts, and professional
                          analyst ratings.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <div className="flex items-center gap-2">
                        <NewspaperIcon className="h-4 w-4 text-blue-500" />
                        <span className="text-sm">News Articles</span>
                      </div>
                      <span
                        className={`text-sm ${getSentimentColor(currentData.sources.news)}`}
                      >
                        {(currentData.sources.news * 100).toFixed(0)}%
                      </span>
                    </div>
                    <div className="w-full bg-[#1A1F2E] rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${getSentimentColor(currentData.sources.news)}`}
                        style={{ width: `${currentData.sources.news * 100}%` }}
                      ></div>
                    </div>
                    <div className="text-xs text-gray-400 mt-1">
                      Based on 324 articles from 42 sources
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <div className="flex items-center gap-2">
                        <TwitterIcon className="h-4 w-4 text-purple-500" />
                        <span className="text-sm">Social Media</span>
                      </div>
                      <span
                        className={`text-sm ${getSentimentColor(currentData.sources.social)}`}
                      >
                        {(currentData.sources.social * 100).toFixed(0)}%
                      </span>
                    </div>
                    <div className="w-full bg-[#1A1F2E] rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${getSentimentColor(currentData.sources.social)}`}
                        style={{
                          width: `${currentData.sources.social * 100}%`,
                        }}
                      ></div>
                    </div>
                    <div className="text-xs text-gray-400 mt-1">
                      Based on 12,482 posts from Twitter, Reddit, etc.
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <div className="flex items-center gap-2">
                        <BarChart3Icon className="h-4 w-4 text-yellow-500" />
                        <span className="text-sm">Analyst Ratings</span>
                      </div>
                      <span
                        className={`text-sm ${getSentimentColor(currentData.sources.analyst)}`}
                      >
                        {(currentData.sources.analyst * 100).toFixed(0)}%
                      </span>
                    </div>
                    <div className="w-full bg-[#1A1F2E] rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${getSentimentColor(currentData.sources.analyst)}`}
                        style={{
                          width: `${currentData.sources.analyst * 100}%`,
                        }}
                      ></div>
                    </div>
                    <div className="text-xs text-gray-400 mt-1">
                      Based on 87 analyst reports and ratings
                    </div>
                  </div>
                </div>
              </div>
              {/* Recent Sentiment Shifts */}
              <div className="bg-[#151822] p-6 rounded-xl border border-gray-800/30 hover:border-green-500/30 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-medium">
                    Recent Sentiment Shifts
                  </h3>
                  <div className="bg-green-500/10 text-green-400 text-xs px-2 py-1 rounded-full flex items-center gap-1">
                    <ZapIcon className="h-3 w-3" />
                    <span>Live</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-2 bg-[#1A1F2E] rounded-lg hover:bg-[#262B3D] transition-all duration-200 cursor-pointer group">
                    <div className="flex items-center gap-3">
                      <div className="bg-green-500/10 p-1 rounded-full">
                        <TrendingUpIcon className="h-4 w-4 text-green-500" />
                      </div>
                      <div>
                        <div className="text-sm group-hover:text-green-400 transition-colors">
                          Technology
                        </div>
                        <div className="text-xs text-gray-400">
                          10 minutes ago
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="text-xs text-green-500">+8.2%</span>
                      <ChevronRightIcon className="h-4 w-4 text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-[#1A1F2E] rounded-lg hover:bg-[#262B3D] transition-all duration-200 cursor-pointer group">
                    <div className="flex items-center gap-3">
                      <div className="bg-red-500/10 p-1 rounded-full">
                        <TrendingDownIcon className="h-4 w-4 text-red-500" />
                      </div>
                      <div>
                        <div className="text-sm group-hover:text-red-400 transition-colors">
                          Financial
                        </div>
                        <div className="text-xs text-gray-400">
                          25 minutes ago
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="text-xs text-red-500">-12.5%</span>
                      <ChevronRightIcon className="h-4 w-4 text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-[#1A1F2E] rounded-lg hover:bg-[#262B3D] transition-all duration-200 cursor-pointer group">
                    <div className="flex items-center gap-3">
                      <div className="bg-green-500/10 p-1 rounded-full">
                        <TrendingUpIcon className="h-4 w-4 text-green-500" />
                      </div>
                      <div>
                        <div className="text-sm group-hover:text-green-400 transition-colors">
                          Energy
                        </div>
                        <div className="text-xs text-gray-400">
                          42 minutes ago
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="text-xs text-green-500">+3.7%</span>
                      <ChevronRightIcon className="h-4 w-4 text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-[#1A1F2E] rounded-lg hover:bg-[#262B3D] transition-all duration-200 cursor-pointer group">
                    <div className="flex items-center gap-3">
                      <div className="bg-red-500/10 p-1 rounded-full">
                        <TrendingDownIcon className="h-4 w-4 text-red-500" />
                      </div>
                      <div>
                        <div className="text-sm group-hover:text-red-400 transition-colors">
                          Real Estate
                        </div>
                        <div className="text-xs text-gray-400">1 hour ago</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="text-xs text-red-500">-5.3%</span>
                      <ChevronRightIcon className="h-4 w-4 text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </div>
                <button className="w-full mt-4 text-xs text-green-500 hover:text-green-400 flex items-center justify-center gap-1 group">
                  <span>View All Changes</span>
                  <ArrowRightIcon className="h-3 w-3 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
            {/* Top Stocks by Sentiment */}
            <div className="bg-[#151822] p-6 rounded-xl border border-gray-800/30 hover:border-green-500/30 transition-all duration-300 hover:shadow-lg">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-medium">Top Stocks by Sentiment</h3>
                <select
                  value={selectedSector}
                  onChange={(e) => setSelectedSector(e.target.value)}
                  className="bg-[#1A1F2E] rounded-lg p-1 text-sm border border-gray-800/30 focus:outline-none focus:ring-2 focus:ring-green-500/30"
                >
                  <option value="all">All Sectors</option>
                  <option value="tech">Technology</option>
                  <option value="finance">Financial</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="energy">Energy</option>
                </select>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-sm text-gray-400 border-b border-gray-800/50">
                      <th className="pb-3 font-medium">Symbol</th>
                      <th className="pb-3 font-medium">Name</th>
                      <th className="pb-3 font-medium">Sentiment</th>
                      <th className="pb-3 font-medium">Score</th>
                      <th className="pb-3 font-medium">Change</th>
                      <th className="pb-3 font-medium"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentData.topStocks?.map((stock, index) => (
                      <tr
                        key={stock.symbol}
                        className="border-b border-gray-800/30 last:border-0 hover:bg-[#1A1F2E]/50 transition-colors group"
                      >
                        <td className="py-3">
                          <span className="font-medium">{stock.symbol}</span>
                        </td>
                        <td className="py-3 text-gray-300">{stock.name}</td>
                        <td className="py-3">
                          <div className="flex items-center">
                            <span
                              className={`text-lg ${getSentimentColor(stock.sentiment)}`}
                            >
                              {getSentimentEmoji(stock.sentiment)}
                            </span>
                            <span
                              className={`ml-2 text-sm ${getSentimentColor(stock.sentiment)}`}
                            >
                              {getSentimentText(stock.sentiment)}
                            </span>
                          </div>
                        </td>
                        <td className="py-3">
                          <div className="flex items-center">
                            <div className="w-16 bg-[#0B0E15] rounded-full h-2 mr-2">
                              <div
                                className={`h-2 rounded-full ${getSentimentColor(stock.sentiment)}`}
                                style={{ width: `${stock.sentiment * 100}%` }}
                              ></div>
                            </div>
                            <span
                              className={`text-sm ${getSentimentColor(stock.sentiment)}`}
                            >
                              {(stock.sentiment * 100).toFixed(0)}%
                            </span>
                          </div>
                        </td>
                        <td className="py-3">
                          <span
                            className={`flex items-center text-sm ${getChangeColor(stock.change)}`}
                          >
                            {getChangeIcon(stock.change)}
                            <span className="ml-1">
                              {Math.abs(stock.change * 100).toFixed(1)}%
                            </span>
                          </span>
                        </td>
                        <td className="py-3 text-right">
                          <button className="text-green-500 opacity-0 group-hover:opacity-100 transition-opacity hover:text-green-400">
                            <ChevronRightIcon className="h-5 w-5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            {/* Latest AI Insights */}
            <div className="bg-[#151822] p-6 rounded-xl border border-gray-800/30 hover:border-green-500/30 transition-all duration-300 hover:shadow-lg">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-medium">Latest AI Insights</h3>
                  <div className="bg-green-500/10 text-green-400 text-xs px-2 py-1 rounded-full">
                    AI-Generated
                  </div>
                </div>
                <button className="text-sm text-green-500 hover:text-green-400 flex items-center gap-1 group">
                  <span>View All</span>
                  <ArrowRightIcon className="h-3 w-3 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              <div className="space-y-4">
                {currentData.insights?.slice(0, 3).map((insight) => (
                  <div
                    key={insight.id}
                    className={`p-4 rounded-lg border ${getSentimentBorder(insight.sentiment === 'positive' ? 0.8 : insight.sentiment === 'negative' ? 0.3 : 0.5)} ${getSentimentBg(insight.sentiment === 'positive' ? 0.8 : insight.sentiment === 'negative' ? 0.3 : 0.5)} cursor-pointer hover:shadow-lg transition-all duration-300`}
                    onClick={() => handleOpenInsight(insight)}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`p-2 rounded-full ${getSentimentBg(insight.sentiment === 'positive' ? 0.8 : insight.sentiment === 'negative' ? 0.3 : 0.5)}`}
                      >
                        {getSentimentIcon(insight.sentiment)}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-medium">{insight.title}</h4>
                          <span className="text-xs text-gray-400">
                            {insight.timestamp}
                          </span>
                        </div>
                        <p className="text-sm text-gray-300 mb-2">
                          {insight.summary}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {insight.keywords
                            .slice(0, 3)
                            .map((keyword: string, idx: number) => (
                              <span
                                key={idx}
                                className="text-xs bg-[#151822]/80 px-2 py-1 rounded-full text-gray-400"
                              >
                                {keyword}
                              </span>
                            ))}
                          {insight.keywords.length > 3 && (
                            <span className="text-xs bg-[#151822]/80 px-2 py-1 rounded-full text-gray-400">
                              +{insight.keywords.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        {activeTab === 'heatmap' && (
          <div className="space-y-6">
            <div className="bg-[#151822] p-6 rounded-xl border border-gray-800/30">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-medium">
                  Sector Sentiment Heatmap
                </h3>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <span className="w-3 h-3 rounded-full bg-red-500"></span>
                    <span className="text-xs text-gray-400">Negative</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                    <span className="text-xs text-gray-400">Neutral</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="w-3 h-3 rounded-full bg-green-500"></span>
                    <span className="text-xs text-gray-400">Positive</span>
                  </div>
                </div>
              </div>
              <div className="relative w-full h-96 bg-[#1A1F2E] rounded-lg overflow-hidden border border-gray-800/30">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-gray-400">
                    <RefreshCwIcon className="h-8 w-8 mx-auto mb-2 animate-spin" />
                    <p>Loading heatmap visualization...</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {filteredSectors.map((sector) => (
                  <button
                    key={sector.id}
                    className={`p-3 rounded-lg flex flex-col items-center justify-center text-center hover:bg-[#1A1F2E] transition-colors ${selectedSector === sector.id ? 'bg-[#1A1F2E] border border-green-500/30' : ''}`}
                    onClick={() => setSelectedSector(sector.id)}
                  >
                    <div className="text-2xl mb-2">
                      {sector.sentiment === 'positive' && '😀'}
                      {sector.sentiment === 'neutral' && '😐'}
                      {sector.sentiment === 'negative' && '😞'}
                    </div>
                    <div className="text-sm font-medium">{sector.name}</div>
                    <div className="text-xs text-gray-400 mt-1">
                      {sector.sentiment === 'positive' && '+2.3%'}
                      {sector.sentiment === 'neutral' && '0.0%'}
                      {sector.sentiment === 'negative' && '-1.8%'}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
        {activeTab === 'insights' && (
          <div className="space-y-6">
            {filteredInsights.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredInsights.map((insight) => (
                  <div
                    key={insight.id}
                    className={`bg-[#151822] p-5 rounded-xl border ${getSentimentBorder(insight.sentiment === 'positive' ? 0.8 : insight.sentiment === 'negative' ? 0.3 : 0.5)} hover:shadow-lg transition-all duration-300 cursor-pointer`}
                    onClick={() => handleOpenInsight(insight)}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`p-2 rounded-full ${getSentimentBg(insight.sentiment === 'positive' ? 0.8 : insight.sentiment === 'negative' ? 0.3 : 0.5)}`}
                      >
                        {getSentimentIcon(insight.sentiment)}
                      </div>
                      <div>
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium">{insight.title}</h4>
                          <span className="text-xs text-gray-400">
                            {insight.timestamp}
                          </span>
                        </div>
                        <div className="text-xs text-gray-400 mt-1 mb-2 flex items-center gap-2">
                          <span>{insight.source}</span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <InfoIcon className="h-3 w-3" />
                            Impact: {insight.impact}
                          </span>
                        </div>
                        <p className="text-sm text-gray-300 mb-3">
                          {insight.summary}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {insight.keywords
                            .slice(0, 4)
                            .map((keyword: string, idx: number) => (
                              <span
                                key={idx}
                                className="text-xs bg-[#1A1F2E] px-2 py-1 rounded-full text-gray-400"
                              >
                                {keyword}
                              </span>
                            ))}
                          {insight.keywords.length > 4 && (
                            <span className="text-xs bg-[#1A1F2E] px-2 py-1 rounded-full text-gray-400">
                              +{insight.keywords.length - 4} more
                            </span>
                          )}
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            {insight.relatedStocks
                              .slice(0, 3)
                              .map((stock: string, idx: number) => (
                                <span
                                  key={idx}
                                  className="text-xs font-medium bg-[#1A1F2E] px-2 py-1 rounded"
                                >
                                  {stock}
                                </span>
                              ))}
                            {insight.relatedStocks.length > 3 && (
                              <span className="text-xs text-gray-400">
                                +{insight.relatedStocks.length - 3} more
                              </span>
                            )}
                          </div>
                          <button className="text-green-500 hover:text-green-400 text-sm flex items-center gap-1 group">
                            <span>Details</span>
                            <ChevronRightIcon className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <SearchIcon className="h-12 w-12 text-gray-600 mx-auto mb-4" />
                <h3 className="text-lg font-medium mb-2">No insights found</h3>
                <p className="text-gray-400">
                  Try adjusting your search query or filters
                </p>
              </div>
            )}
          </div>
        )}
        {activeTab === 'reports' && (
          <div className="space-y-6">
            <div className="bg-[#151822] p-6 rounded-xl border border-gray-800/30">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-medium">
                    Weekly Market Mood Reports
                  </h3>
                  <div className="bg-green-500/10 text-green-400 text-xs px-2 py-1 rounded-full">
                    AI-Generated
                  </div>
                </div>
                <button className="bg-green-500/10 text-green-500 hover:bg-green-500/20 px-3 py-1 rounded-lg text-sm flex items-center gap-1 transition-all duration-200">
                  <DownloadIcon className="h-4 w-4" />
                  <span>Download Latest</span>
                </button>
              </div>
              <div className="space-y-4">
                <div className="bg-[#1A1F2E] p-4 rounded-lg hover:bg-[#262B3D] transition-all duration-200 border border-gray-800/50 hover:border-green-500/30 cursor-pointer group">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="bg-green-500/10 p-2 rounded-lg">
                        <BarChart3Icon className="h-5 w-5 text-green-500" />
                      </div>
                      <div>
                        <h4 className="font-medium group-hover:text-green-400 transition-colors">
                          Market Mood Report - Week 24
                        </h4>
                        <div className="text-xs text-gray-400 mt-1">
                          June 12 - June 18, 2023
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-green-500">Positive</span>
                      <DownloadIcon className="h-4 w-4 text-gray-400 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                </div>
                <div className="bg-[#1A1F2E] p-4 rounded-lg hover:bg-[#262B3D] transition-all duration-200 border border-gray-800/50 hover:border-green-500/30 cursor-pointer group">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="bg-yellow-500/10 p-2 rounded-lg">
                        <BarChart3Icon className="h-5 w-5 text-yellow-500" />
                      </div>
                      <div>
                        <h4 className="font-medium group-hover:text-yellow-400 transition-colors">
                          Market Mood Report - Week 23
                        </h4>
                        <div className="text-xs text-gray-400 mt-1">
                          June 5 - June 11, 2023
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-yellow-500">Neutral</span>
                      <DownloadIcon className="h-4 w-4 text-gray-400 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                </div>
                <div className="bg-[#1A1F2E] p-4 rounded-lg hover:bg-[#262B3D] transition-all duration-200 border border-gray-800/50 hover:border-green-500/30 cursor-pointer group">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="bg-red-500/10 p-2 rounded-lg">
                        <BarChart3Icon className="h-5 w-5 text-red-500" />
                      </div>
                      <div>
                        <h4 className="font-medium group-hover:text-red-400 transition-colors">
                          Market Mood Report - Week 22
                        </h4>
                        <div className="text-xs text-gray-400 mt-1">
                          May 29 - June 4, 2023
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-red-500">Negative</span>
                      <DownloadIcon className="h-4 w-4 text-gray-400 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                </div>
                <div className="bg-[#1A1F2E] p-4 rounded-lg hover:bg-[#262B3D] transition-all duration-200 border border-gray-800/50 hover:border-green-500/30 cursor-pointer group">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="bg-green-500/10 p-2 rounded-lg">
                        <BarChart3Icon className="h-5 w-5 text-green-500" />
                      </div>
                      <div>
                        <h4 className="font-medium group-hover:text-green-400 transition-colors">
                          Market Mood Report - Week 21
                        </h4>
                        <div className="text-xs text-gray-400 mt-1">
                          May 22 - May 28, 2023
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-green-500">Positive</span>
                      <DownloadIcon className="h-4 w-4 text-gray-400 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                </div>
              </div>
              <button className="w-full mt-4 text-sm text-green-500 hover:text-green-400 flex items-center justify-center gap-1 group">
                <span>View All Reports</span>
                <ArrowRightIcon className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        )}
        {activeTab === 'alerts' && (
          <div className="space-y-6">
            <div className="bg-[#151822] p-6 rounded-xl border border-gray-800/30">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-medium">My Sentiment Alerts</h3>
                <button className="bg-green-500/10 text-green-500 hover:bg-green-500/20 px-3 py-1 rounded-lg text-sm flex items-center gap-1 transition-all duration-200">
                  <BellIcon className="h-4 w-4" />
                  <span>Create Alert</span>
                </button>
              </div>
              <div className="space-y-4">
                <div className="bg-[#1A1F2E] p-4 rounded-lg border border-gray-800/50 hover:border-green-500/30 transition-all duration-200">
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center gap-2">
                      <div className="bg-green-500/10 p-1 rounded-full">
                        <BellIcon className="h-4 w-4 text-green-500" />
                      </div>
                      <h4 className="font-medium">
                        Technology Sector Sentiment Flip
                      </h4>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs bg-green-500/10 text-green-400 px-2 py-1 rounded-full">
                        Active
                      </span>
                      <button className="text-gray-400 hover:text-white">
                        <ChevronDownIcon className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  <div className="pl-7">
                    <p className="text-sm text-gray-300 mb-3">
                      Alert me when technology sector sentiment changes from
                      positive to negative or vice versa
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xs bg-[#151822] px-2 py-1 rounded text-gray-400">
                          Email
                        </span>
                        <span className="text-xs bg-[#151822] px-2 py-1 rounded text-gray-400">
                          Push
                        </span>
                      </div>
                      <div className="text-xs text-gray-400">
                        Last triggered: 2 days ago
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#1A1F2E] p-4 rounded-lg border border-gray-800/50 hover:border-green-500/30 transition-all duration-200">
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center gap-2">
                      <div className="bg-green-500/10 p-1 rounded-full">
                        <BellIcon className="h-4 w-4 text-green-500" />
                      </div>
                      <h4 className="font-medium">AAPL Sentiment Alert</h4>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs bg-green-500/10 text-green-400 px-2 py-1 rounded-full">
                        Active
                      </span>
                      <button className="text-gray-400 hover:text-white">
                        <ChevronDownIcon className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  <div className="pl-7">
                    <p className="text-sm text-gray-300 mb-3">
                      Alert me when Apple Inc. sentiment drops below 60%
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xs bg-[#151822] px-2 py-1 rounded text-gray-400">
                          Email
                        </span>
                      </div>
                      <div className="text-xs text-gray-400">
                        Never triggered
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#1A1F2E] p-4 rounded-lg border border-gray-800/50 hover:border-green-500/30 transition-all duration-200">
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center gap-2">
                      <div className="bg-gray-500/10 p-1 rounded-full">
                        <BellIcon className="h-4 w-4 text-gray-500" />
                      </div>
                      <h4 className="font-medium">Banking Sector Recovery</h4>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs bg-gray-500/10 text-gray-400 px-2 py-1 rounded-full">
                        Paused
                      </span>
                      <button className="text-gray-400 hover:text-white">
                        <ChevronDownIcon className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  <div className="pl-7">
                    <p className="text-sm text-gray-300 mb-3">
                      Alert me when financial sector sentiment turns positive
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xs bg-[#151822] px-2 py-1 rounded text-gray-400">
                          Email
                        </span>
                        <span className="text-xs bg-[#151822] px-2 py-1 rounded text-gray-400">
                          Push
                        </span>
                      </div>
                      <div className="text-xs text-gray-400">
                        Last triggered: 3 weeks ago
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#151822] p-6 rounded-xl border border-gray-800/30">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-medium">
                    Popular Alert Templates
                  </h3>
                  <div className="bg-green-500/10 text-green-400 text-xs px-2 py-1 rounded-full">
                    Community
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#1A1F2E] p-4 rounded-lg border border-gray-800/50 hover:border-green-500/30 transition-all duration-200 cursor-pointer group">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-green-500/10 p-2 rounded-lg group-hover:scale-110 transition-transform">
                      <BellIcon className="h-5 w-5 text-green-500" />
                    </div>
                    <div>
                      <h4 className="font-medium group-hover:text-green-400 transition-colors">
                        Major Sector Sentiment Shift
                      </h4>
                      <div className="text-xs text-gray-400 mt-1">
                        1,245 users
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-300 mb-3">
                    Get notified when any major market sector experiences a
                    significant sentiment shift (>15% change)
                  </p>
                  <button className="text-sm text-green-500 hover:text-green-400 flex items-center gap-1 group">
                    <span>Add This Alert</span>
                    <PlusIcon className="h-4 w-4" />
                  </button>
                </div>
                <div className="bg-[#1A1F2E] p-4 rounded-lg border border-gray-800/50 hover:border-green-500/30 transition-all duration-200 cursor-pointer group">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-green-500/10 p-2 rounded-lg group-hover:scale-110 transition-transform">
                      <BellIcon className="h-5 w-5 text-green-500" />
                    </div>
                    <div>
                      <h4 className="font-medium group-hover:text-green-400 transition-colors">
                        Portfolio Sentiment Alert
                      </h4>
                      <div className="text-xs text-gray-400 mt-1">
                        876 users
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-300 mb-3">
                    Monitor sentiment for all stocks in your portfolio and get
                    alerted when overall sentiment changes
                  </p>
                  <button className="text-sm text-green-500 hover:text-green-400 flex items-center gap-1 group">
                    <span>Add This Alert</span>
                    <PlusIcon className="h-4 w-4" />
                  </button>
                </div>
                <div className="bg-[#1A1F2E] p-4 rounded-lg border border-gray-800/50 hover:border-green-500/30 transition-all duration-200 cursor-pointer group">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-green-500/10 p-2 rounded-lg group-hover:scale-110 transition-transform">
                      <BellIcon className="h-5 w-5 text-green-500" />
                    </div>
                    <div>
                      <h4 className="font-medium group-hover:text-green-400 transition-colors">
                        Crypto Sentiment Tracker
                      </h4>
                      <div className="text-xs text-gray-400 mt-1">
                        654 users
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-300 mb-3">
                    Alert me when cryptocurrency market sentiment is trending
                    again after a downturn
                  </p>
                  <button className="text-sm text-green-500 hover:text-green-400 flex items-center gap-1 group">
                    <span>Add This Alert</span>
                    <PlusIcon className="h-4 w-4" />
                  </button>
                </div>
                <div className="bg-[#1A1F2E] p-4 rounded-lg border border-gray-800/50 hover:border-green-500/30 transition-all duration-200 cursor-pointer group">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-green-500/10 p-2 rounded-lg group-hover:scale-110 transition-transform">
                      <BellIcon className="h-5 w-5 text-green-500" />
                    </div>
                    <div>
                      <h4 className="font-medium group-hover:text-green-400 transition-colors">
                        Market Sentiment Divergence
                      </h4>
                      <div className="text-xs text-gray-400 mt-1">
                        432 users
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-300 mb-3">
                    Alert when market price movement significantly diverges from
                    sentiment indicators
                  </p>
                  <button className="text-sm text-green-500 hover:text-green-400 flex items-center gap-1 group">
                    <span>Add This Alert</span>
                    <PlusIcon className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Insight Detail Modal */}
      {showInsightModal && selectedInsight && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-[#151822] rounded-xl border border-gray-800/50 w-full max-w-3xl max-h-[90vh] overflow-y-auto animate-fadeIn">
            <div className="sticky top-0 bg-[#151822] border-b border-gray-800/50 p-4 flex justify-between items-center z-10">
              <div className="flex items-center gap-2">
                <div
                  className={`p-2 rounded-full ${getSentimentBg(selectedInsight.sentiment === 'positive' ? 0.8 : selectedInsight.sentiment === 'negative' ? 0.3 : 0.5)}`}
                >
                  {getSentimentIcon(selectedInsight.sentiment)}
                </div>
                <h3 className="font-medium">{selectedInsight.title}</h3>
              </div>
              <button
                onClick={() => setShowInsightModal(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <XCircleIcon className="h-6 w-6" />
              </button>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4 text-sm text-gray-400">
                <div>{selectedInsight.source}</div>
                <div>•</div>
                <div>{selectedInsight.timestamp}</div>
                <div>•</div>
                <div className="flex items-center gap-1">
                  <InfoIcon className="h-3 w-3" />
                  Impact: {selectedInsight.impact}
                </div>
                <div>•</div>
                <div className="flex items-center gap-1">
                  <CheckCircleIcon className="h-3 w-3 text-green-500" />
                  {(selectedInsight.confidence * 100).toFixed(0)}% confidence
                </div>
              </div>
              <div className="mb-6">
                <h4 className="font-medium mb-2">Summary</h4>
                <p className="text-gray-300">{selectedInsight.summary}</p>
              </div>
              <div className="mb-6">
                <h4 className="font-medium mb-2">Detailed Analysis</h4>
                <p className="text-gray-300 whitespace-pre-line">
                  {selectedInsight.details}
                </p>
              </div>
              <div className="mb-6">
                <h4 className="font-medium mb-2">Related Stocks</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedInsight.relatedStocks.map(
                    (stock: string, idx: number) => (
                      <span
                        key={idx}
                        className="bg-[#1A1F2E] px-3 py-1 rounded-lg text-sm hover:bg-[#262B3D] transition-colors cursor-pointer"
                      >
                        {stock}
                      </span>
                    ),
                  )}
                </div>
              </div>
              <div className="mb-6">
                <h4 className="font-medium mb-2">Keywords</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedInsight.keywords.map(
                    (keyword: string, idx: number) => (
                      <span
                        key={idx}
                        className="bg-[#1A1F2E] px-3 py-1 rounded-lg text-sm text-gray-300"
                      >
                        {keyword}
                      </span>
                    ),
                  )}
                </div>
              </div>
              <div className="mb-6">
                <h4 className="font-medium mb-2">Sources</h4>
                <div className="space-y-2">
                  {selectedInsight.sources.map((source: any, idx: number) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between bg-[#1A1F2E] p-3 rounded-lg hover:bg-[#262B3D] transition-colors cursor-pointer"
                    >
                      <div className="flex items-center gap-2">
                        {source.type === 'news' && (
                          <NewspaperIcon className="h-4 w-4 text-blue-500" />
                        )}
                        {source.type === 'social' && (
                          <TwitterIcon className="h-4 w-4 text-purple-500" />
                        )}
                        {source.type === 'research' && (
                          <BarChart3Icon className="h-4 w-4 text-yellow-500" />
                        )}
                        {source.type === 'event' && (
                          <CalendarIcon className="h-4 w-4 text-green-500" />
                        )}
                        <span>{source.name}</span>
                      </div>
                      <ExternalLinkIcon className="h-4 w-4 text-gray-400" />
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-between items-center border-t border-gray-800/50 pt-4">
                <div className="flex gap-2">
                  <button className="bg-green-500/10 text-green-500 hover:bg-green-500/20 px-3 py-1 rounded-lg text-sm transition-colors">
                    Save Insight
                  </button>
                  <button className="bg-[#1A1F2E] hover:bg-[#262B3D] px-3 py-1 rounded-lg text-sm transition-colors">
                    Share
                  </button>
                </div>
                <div className="flex gap-3">
                  <button className="text-gray-400 hover:text-green-500 transition-colors">
                    <ThumbsUpIcon className="h-5 w-5" />
                  </button>
                  <button className="text-gray-400 hover:text-red-500 transition-colors">
                    <ThumbsDownIcon className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
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
      `}</style>
    </div>
  )
}
const TwitterIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
)
const PlusIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
)
