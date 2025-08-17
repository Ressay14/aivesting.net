import React, { useState } from 'react';
import { NewspaperIcon, TrendingUpIcon, TrendingDownIcon, GlobeIcon, SearchIcon, FilterIcon, BookmarkIcon, RefreshCwIcon, BarChart2Icon, ShareIcon, BellIcon, ChevronRightIcon, ChevronDownIcon, ArrowRightIcon, CheckIcon, XIcon } from 'lucide-react';
export const NewsDashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [savedArticles, setSavedArticles] = useState<string[]>([]);
  const toggleSavedArticle = (id: string) => {
    setSavedArticles(prev => prev.includes(id) ? prev.filter(articleId => articleId !== id) : [...prev, id]);
  };
  const refreshData = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };
  const categories = [{
    id: 'all',
    name: 'All News',
    color: 'gray'
  }, {
    id: 'market',
    name: 'Market Update',
    color: 'blue'
  }, {
    id: 'tech',
    name: 'Technology',
    color: 'green'
  }, {
    id: 'economy',
    name: 'Economy',
    color: 'yellow'
  }, {
    id: 'crypto',
    name: 'Crypto',
    color: 'purple'
  }];
  const articles = [{
    id: 'article1',
    category: {
      id: 'market',
      name: 'Market Update',
      color: 'blue'
    },
    time: '2 hours ago',
    title: 'Federal Reserve Signals Potential Rate Changes',
    summary: 'The Federal Reserve has indicated a possible shift in monetary policy, suggesting potential rate adjustments in response to recent economic data.',
    source: 'Bloomberg',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2940&auto=format&fit=crop'
  }, {
    id: 'article2',
    category: {
      id: 'tech',
      name: 'Technology',
      color: 'green'
    },
    time: '4 hours ago',
    title: 'Tech Sector Shows Strong Q3 Performance',
    summary: 'Major tech companies report better-than-expected earnings, driving positive sentiment in the technology sector. Analysts predict continued growth through the end of the year.',
    source: 'CNBC',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2940&auto=format&fit=crop'
  }, {
    id: 'article3',
    category: {
      id: 'economy',
      name: 'Economy',
      color: 'yellow'
    },
    time: '6 hours ago',
    title: 'Global Economic Growth Forecasts Updated',
    summary: 'International monetary organizations revise global growth projections for the coming year, citing various economic factors and ongoing geopolitical tensions.',
    source: 'Financial Times',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2815&auto=format&fit=crop'
  }, {
    id: 'article4',
    category: {
      id: 'crypto',
      name: 'Crypto',
      color: 'purple'
    },
    time: '8 hours ago',
    title: 'Bitcoin Surpasses $40,000 as Institutional Adoption Accelerates',
    summary: 'Bitcoin has broken the $40,000 barrier for the first time in six months as major financial institutions announce new cryptocurrency investment products and services.',
    source: 'CoinDesk',
    image: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=2940&auto=format&fit=crop'
  }];
  // Filter articles based on search query and category
  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || article.summary.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || article.category.id === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  return <div className="space-y-6">
      {/* News Header */}
      <div className="bg-gradient-to-br from-[#151822] to-[#1A1F2E] p-6 rounded-xl border border-gray-800/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-red-500/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 relative z-10">
          <div className="flex items-center gap-3">
            <h2 className="text-lg font-medium bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              Market News & Analysis
            </h2>
            <div className="bg-red-500/10 text-red-400 text-xs px-2 py-1 rounded-full flex items-center gap-1">
              <NewspaperIcon className="h-3 w-3" />
              {loading ? 'Updating...' : 'Updated 15m ago'}
            </div>
          </div>
          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="relative flex-grow md:flex-grow-0">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input type="text" placeholder="Search news..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="bg-[#0B0E15]/80 backdrop-blur-sm rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/50 w-full md:w-64 transition-all duration-200 border border-gray-800/30 hover:border-gray-700/50 focus:border-red-500/30 shadow-inner" />
            </div>
            <button className="bg-[#0B0E15]/80 backdrop-blur-sm p-2 rounded-lg border border-gray-800/30 hover:border-gray-700/50 hover:bg-[#1E2230] transition-all duration-200 text-gray-400 hover:text-white" onClick={() => setShowFilters(!showFilters)}>
              <FilterIcon className="h-5 w-5" />
            </button>
            <button className="bg-[#0B0E15]/80 backdrop-blur-sm p-2 rounded-lg border border-gray-800/30 hover:border-gray-700/50 hover:bg-[#1E2230] transition-all duration-200 text-gray-400 hover:text-white" onClick={refreshData}>
              <RefreshCwIcon className={`h-5 w-5 ${loading ? 'animate-spin' : ''}`} />
            </button>
          </div>
        </div>
        {/* Category filters */}
        {showFilters && <div className="flex flex-wrap gap-2 mb-6 animate-fadeIn relative z-10">
            {categories.map(category => <button key={category.id} className={`px-3 py-1 rounded-full text-sm transition-all duration-200 flex items-center gap-1 ${selectedCategory === category.id ? `bg-${category.color}-500 text-white` : `bg-[#1E2230]/80 backdrop-blur-sm text-gray-400 hover:bg-[#262B3D] hover:text-white border border-gray-800/50`}`} onClick={() => setSelectedCategory(category.id)}>
                {selectedCategory === category.id && <CheckIcon className="h-3 w-3" />}
                {category.name}
              </button>)}
            <button className="px-3 py-1 rounded-full text-sm transition-all duration-200 bg-[#0B0E15]/80 backdrop-blur-sm text-gray-400 hover:bg-[#1E2230] hover:text-white border border-gray-800/30" onClick={() => setShowFilters(false)}>
              <XIcon className="h-3 w-3" />
            </button>
          </div>}
        {/* News Articles */}
        <div className="space-y-4 relative z-10">
          {loading ? <div className="flex justify-center items-center py-12">
              <div className="flex flex-col items-center">
                <RefreshCwIcon className="h-8 w-8 text-red-500 animate-spin mb-2" />
                <p className="text-gray-400">Loading latest news...</p>
              </div>
            </div> : filteredArticles.length > 0 ? filteredArticles.map(article => <div key={article.id} className="bg-[#1A1F2E]/80 backdrop-blur-sm p-5 rounded-lg border border-gray-800/50 hover:border-gray-700/50 hover:shadow-lg transition-all duration-300 group">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="md:w-1/4 h-40 md:h-auto rounded-lg overflow-hidden">
                    <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="md:w-3/4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`bg-${article.category.color}-500/10 text-${article.category.color}-500 text-xs px-2 py-1 rounded-full`}>
                        {article.category.name}
                      </span>
                      <span className="text-xs text-gray-400">
                        {article.time}
                      </span>
                    </div>
                    <h3 className="text-lg font-medium mb-2 group-hover:text-red-400 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-3">
                      {article.summary}
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <button className={`text-xs ${savedArticles.includes(article.id) ? 'bg-red-500/20 text-red-400' : 'bg-[#0B0E15] text-gray-400 hover:text-white'} px-2 py-1 rounded transition-colors flex items-center gap-1`} onClick={() => toggleSavedArticle(article.id)}>
                          <BookmarkIcon className="h-3 w-3 inline" />
                          {savedArticles.includes(article.id) ? 'Saved' : 'Save'}
                        </button>
                        <button className="text-xs bg-[#0B0E15] hover:bg-[#151822] text-gray-400 hover:text-white px-2 py-1 rounded transition-colors flex items-center gap-1">
                          <ShareIcon className="h-3 w-3 inline" />
                          Share
                        </button>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-xs text-gray-400">
                          Source: {article.source}
                        </span>
                        <ChevronRightIcon className="h-4 w-4 text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>) : <div className="py-12 text-center">
              <div className="bg-[#1E2230]/80 backdrop-blur-sm p-6 rounded-lg inline-block">
                <SearchIcon className="h-8 w-8 text-gray-500 mx-auto mb-2" />
                <p className="text-gray-400">
                  No articles found matching "{searchQuery}"
                </p>
                <button className="mt-4 text-red-400 hover:text-red-300 transition-colors text-sm" onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
            }}>
                  Clear search and filters
                </button>
              </div>
            </div>}
        </div>
      </div>
      {/* Market Sentiment */}
      <div className="bg-gradient-to-br from-[#151822] to-[#1A1F2E] p-6 rounded-xl border border-gray-800/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-blue-500/20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
        <div className="flex justify-between items-center mb-6 relative z-10">
          <div className="flex items-center gap-3">
            <h2 className="text-lg font-medium bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              Market Sentiment Analysis
            </h2>
            <div className="bg-blue-500/10 text-blue-400 text-xs px-2 py-1 rounded-full">
              AI-Powered
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-400">
              Last updated: 15 min ago
            </span>
            <button className="bg-[#0B0E15]/80 backdrop-blur-sm p-2 rounded-lg border border-gray-800/30 hover:border-gray-700/50 hover:bg-[#1E2230] transition-all duration-200 text-gray-400 hover:text-white" onClick={refreshData}>
              <RefreshCwIcon className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
          <div className="bg-[#1A1F2E]/80 backdrop-blur-sm p-5 rounded-lg border border-gray-800/50 hover:border-green-500/30 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
            <div className="flex flex-col items-center">
              <div className="text-sm text-gray-400 mb-2">S&P 500</div>
              <div className="w-24 h-24 rounded-full border-4 border-green-500 flex items-center justify-center mb-2 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-green-500/20 group-hover:scale-105">
                <div className="text-2xl font-bold group-hover:text-green-400 transition-colors">
                  72
                </div>
              </div>
              <div className="text-green-500 font-medium">Bullish</div>
              <div className="flex items-center mt-2 text-xs text-gray-400">
                <TrendingUpIcon className="h-3 w-3 text-green-500 mr-1" />
                <span>+5 pts since yesterday</span>
              </div>
            </div>
          </div>
          <div className="bg-[#1A1F2E]/80 backdrop-blur-sm p-5 rounded-lg border border-gray-800/50 hover:border-green-500/30 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
            <div className="flex flex-col items-center">
              <div className="text-sm text-gray-400 mb-2">NASDAQ</div>
              <div className="w-24 h-24 rounded-full border-4 border-green-500 flex items-center justify-center mb-2 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-green-500/20 group-hover:scale-105">
                <div className="text-2xl font-bold group-hover:text-green-400 transition-colors">
                  81
                </div>
              </div>
              <div className="text-green-500 font-medium">Strong Buy</div>
              <div className="flex items-center mt-2 text-xs text-gray-400">
                <TrendingUpIcon className="h-3 w-3 text-green-500 mr-1" />
                <span>+8 pts since yesterday</span>
              </div>
            </div>
          </div>
          <div className="bg-[#1A1F2E]/80 backdrop-blur-sm p-5 rounded-lg border border-gray-800/50 hover:border-yellow-500/30 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
            <div className="flex flex-col items-center">
              <div className="text-sm text-gray-400 mb-2">Dow Jones</div>
              <div className="w-24 h-24 rounded-full border-4 border-yellow-500 flex items-center justify-center mb-2 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-yellow-500/20 group-hover:scale-105">
                <div className="text-2xl font-bold group-hover:text-yellow-400 transition-colors">
                  58
                </div>
              </div>
              <div className="text-yellow-500 font-medium">Neutral</div>
              <div className="flex items-center mt-2 text-xs text-gray-400">
                <TrendingDownIcon className="h-3 w-3 text-red-500 mr-1" />
                <span>-3 pts since yesterday</span>
              </div>
            </div>
          </div>
          <div className="bg-[#1A1F2E]/80 backdrop-blur-sm p-5 rounded-lg border border-gray-800/50 hover:border-blue-500/30 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
            <div className="flex flex-col items-center">
              <div className="text-sm text-gray-400 mb-2">Crypto Market</div>
              <div className="w-24 h-24 rounded-full border-4 border-blue-500 flex items-center justify-center mb-2 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/20 group-hover:scale-105">
                <div className="text-2xl font-bold group-hover:text-blue-400 transition-colors">
                  65
                </div>
              </div>
              <div className="text-blue-500 font-medium">Bullish</div>
              <div className="flex items-center mt-2 text-xs text-gray-400">
                <TrendingUpIcon className="h-3 w-3 text-green-500 mr-1" />
                <span>+12 pts since yesterday</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* News Categories */}
      <div className="bg-gradient-to-br from-[#151822] to-[#1A1F2E] p-6 rounded-xl border border-gray-800/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-purple-500/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="flex justify-between items-center mb-6 relative z-10">
          <h2 className="text-lg font-medium bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            News Categories
          </h2>
          <button className="text-purple-400 text-sm hover:text-purple-300 transition-colors flex items-center group">
            View All
            <ArrowRightIcon className="h-3 w-3 ml-1 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
          <div className="bg-[#1A1F2E]/80 backdrop-blur-sm p-4 rounded-lg border border-gray-800/50 hover:border-blue-500/30 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-gradient-to-br from-blue-500/30 to-blue-500/10 p-2 rounded-full shadow-lg group-hover:shadow-blue-500/20 transition-all duration-300 group-hover:scale-110">
                <BarChart2Icon className="h-5 w-5 text-blue-500" />
              </div>
              <h3 className="font-medium group-hover:text-blue-400 transition-colors">
                Market Updates
              </h3>
            </div>
            <p className="text-sm text-gray-400">
              Latest news and analysis on global market movements
            </p>
            <div className="flex justify-end mt-3">
              <ChevronRightIcon className="h-4 w-4 text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
          <div className="bg-[#1A1F2E]/80 backdrop-blur-sm p-4 rounded-lg border border-gray-800/50 hover:border-green-500/30 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-gradient-to-br from-green-500/30 to-green-500/10 p-2 rounded-full shadow-lg group-hover:shadow-green-500/20 transition-all duration-300 group-hover:scale-110">
                <TrendingUpIcon className="h-5 w-5 text-green-500" />
              </div>
              <h3 className="font-medium group-hover:text-green-400 transition-colors">
                Economic Indicators
              </h3>
            </div>
            <p className="text-sm text-gray-400">
              Reports on employment, inflation, GDP, and other key metrics
            </p>
            <div className="flex justify-end mt-3">
              <ChevronRightIcon className="h-4 w-4 text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
          <div className="bg-[#1A1F2E]/80 backdrop-blur-sm p-4 rounded-lg border border-gray-800/50 hover:border-yellow-500/30 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-gradient-to-br from-yellow-500/30 to-yellow-500/10 p-2 rounded-full shadow-lg group-hover:shadow-yellow-500/20 transition-all duration-300 group-hover:scale-110">
                <GlobeIcon className="h-5 w-5 text-yellow-500" />
              </div>
              <h3 className="font-medium group-hover:text-yellow-400 transition-colors">
                Global Events
              </h3>
            </div>
            <p className="text-sm text-gray-400">
              International developments affecting financial markets
            </p>
            <div className="flex justify-end mt-3">
              <ChevronRightIcon className="h-4 w-4 text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
          <div className="bg-[#1A1F2E]/80 backdrop-blur-sm p-4 rounded-lg border border-gray-800/50 hover:border-purple-500/30 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-gradient-to-br from-purple-500/30 to-purple-500/10 p-2 rounded-full shadow-lg group-hover:shadow-purple-500/20 transition-all duration-300 group-hover:scale-110">
                <NewspaperIcon className="h-5 w-5 text-purple-500" />
              </div>
              <h3 className="font-medium group-hover:text-purple-400 transition-colors">
                Industry Analysis
              </h3>
            </div>
            <p className="text-sm text-gray-400">
              Deep dives into specific sectors and industry trends
            </p>
            <div className="flex justify-end mt-3">
              <ChevronRightIcon className="h-4 w-4 text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>
        {/* Newsletter Subscription */}
        <div className="mt-6 bg-gradient-to-r from-purple-500/10 to-blue-500/10 p-4 rounded-lg border border-purple-500/20 flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <BellIcon className="h-4 w-4 text-purple-400" />
              <h3 className="font-medium text-purple-400">
                Daily Market Digest
              </h3>
            </div>
            <p className="text-sm text-gray-300">
              Get the most important market news delivered to your inbox every
              morning
            </p>
          </div>
          <div className="flex gap-2 w-full md:w-auto">
            <input type="email" placeholder="Enter your email" className="bg-[#0B0E15]/80 backdrop-blur-sm rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/50 border border-gray-800/50 focus:border-purple-500/30 flex-grow md:w-64" />
            <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-lg text-sm hover:from-purple-400 hover:to-blue-400 transition-all shadow-lg hover:shadow-purple-500/20 whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      {/* Custom animations */}
      <style jsx global>{`
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
    </div>;
};