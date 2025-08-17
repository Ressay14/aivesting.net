import React, { useState, useEffect } from 'react';
import { 
  BrainIcon, 
  BookOpenIcon, 
  TrendingUpIcon, 
  DollarSignIcon, 
  ShieldIcon, 
  CalculatorIcon,
  TargetIcon,
  BarChart3Icon,
  ArrowRightIcon,
  StarIcon,
  ClockIcon,
  BookmarkIcon,
  MessageCircleIcon,
  SearchIcon,
  ZapIcon,
  SendIcon,
  UserIcon,
  BotIcon,
  EyeIcon,
  HeartIcon,
  TrophyIcon,
  AwardIcon,
  CheckIcon,
  XIcon,
  PlayIcon,
  LockIcon
} from 'lucide-react';

interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  featured?: boolean;
  premium?: boolean;
  tags: string[];
  readAt?: string;
  bookmarked?: boolean;
}

interface GPTMessage {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export const KnowledgeHub: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [articles, setArticles] = useState<Article[]>([]);
  const [filteredArticles, setFilteredArticles] = useState<Article[]>([]);
  const [recentReads, setRecentReads] = useState<Article[]>([]);
  const [bookmarkedArticles, setBookmarkedArticles] = useState<Article[]>([]);
  const [gptMessages, setGptMessages] = useState<GPTMessage[]>([]);
  const [gptInput, setGptInput] = useState('');
  const [isGptLoading, setIsGptLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<'articles' | 'gpt' | 'bookmarks' | 'mastery'>('mastery');
  const [userLevel, setUserLevel] = useState(1);
  const [userProgress, setUserProgress] = useState({
    completedModules: [],
    totalXP: 0,
    streak: 0,
    level: 1
  });
  const [userXP, setUserXP] = useState(0);

  useEffect(() => {
    // Load user progress from localStorage
    const savedProgress = localStorage.getItem('finance_mastery_progress');
    if (savedProgress) {
      setUserProgress(JSON.parse(savedProgress));
    }
  }, []);

  const categories = [
    { id: 'all', name: 'All Articles', color: 'bg-gray-500' },
    { id: 'basics', name: 'Investment Basics', color: 'bg-blue-500' },
    { id: 'asset-classes', name: 'Asset Classes', color: 'bg-green-500' },
    { id: 'planning', name: 'Financial Planning', color: 'bg-purple-500' },
    { id: 'taxes', name: 'Tax Optimization', color: 'bg-red-500' },
    { id: 'risk', name: 'Risk Management', color: 'bg-orange-500' },
    { id: 'market', name: 'Market Analysis', color: 'bg-yellow-500' }
  ];

  const mockArticles: Article[] = [
    {
      id: 'compound-interest',
      title: 'The Power of Compound Interest',
      excerpt: 'Learn how your money can grow exponentially over time and why starting early is crucial for wealth building.',
      category: 'basics',
      readTime: '5 min',
      difficulty: 'beginner',
      featured: true,
      tags: ['compound interest', 'wealth building', 'time value of money'],
      readAt: '2024-01-15T10:30:00Z'
    },
    {
      id: 'diversification',
      title: 'Diversification: Don\'t Put All Your Eggs in One Basket',
      excerpt: 'Understanding how to spread your investments across different asset classes to reduce risk.',
      category: 'risk',
      readTime: '7 min',
      difficulty: 'beginner',
      tags: ['diversification', 'risk management', 'portfolio'],
      bookmarked: true
    },
    {
      id: 'etfs-vs-mutual-funds',
      title: 'ETFs vs Mutual Funds: Which is Right for You?',
      excerpt: 'A comprehensive comparison of ETFs and mutual funds to help you choose the best investment vehicle.',
      category: 'asset-classes',
      readTime: '8 min',
      difficulty: 'intermediate',
      premium: true,
      tags: ['ETFs', 'mutual funds', 'index funds', 'expense ratios']
    },
    {
      id: 'retirement-planning',
      title: 'Retirement Planning: Start Early, Retire Comfortably',
      excerpt: 'Essential strategies for building a secure retirement, including 401(k)s, IRAs, and Social Security.',
      category: 'planning',
      readTime: '10 min',
      difficulty: 'intermediate',
      featured: true,
      tags: ['retirement', '401k', 'IRA', 'social security']
    },
    {
      id: 'tax-loss-harvesting',
      title: 'Tax-Loss Harvesting: Turn Losses into Tax Savings',
      excerpt: 'Learn how to strategically sell losing investments to offset gains and reduce your tax bill.',
      category: 'taxes',
      readTime: '6 min',
      difficulty: 'advanced',
      premium: true,
      tags: ['tax optimization', 'capital gains', 'tax-loss harvesting']
    },
    {
      id: 'market-cycles',
      title: 'Understanding Market Cycles: Bull vs Bear Markets',
      excerpt: 'How to recognize and navigate different market phases to make informed investment decisions.',
      category: 'market',
      readTime: '9 min',
      difficulty: 'intermediate',
      tags: ['market cycles', 'timing', 'analysis']
    }
  ];

  useEffect(() => {
    setArticles(mockArticles);
    setRecentReads(mockArticles.filter(article => article.readAt).slice(0, 3));
    setBookmarkedArticles(mockArticles.filter(article => article.bookmarked));
    
    // Load user progress from localStorage
    const savedProgress = localStorage.getItem('finance_quiz_progress');
    if (savedProgress) {
      const progress = JSON.parse(savedProgress);
      setUserLevel(progress.level || 1);
      setUserXP(progress.xp || 0);
    }
  }, []);

  useEffect(() => {
    let filtered = articles;

    if (searchQuery) {
      filtered = filtered.filter(article =>
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(article => article.category === selectedCategory);
    }

    setFilteredArticles(filtered);
  }, [articles, searchQuery, selectedCategory]);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-500/10 text-green-500';
      case 'intermediate': return 'bg-yellow-500/10 text-yellow-500';
      case 'advanced': return 'bg-red-500/10 text-red-500';
      default: return 'bg-gray-500/10 text-gray-500';
    }
  };

  const handleBookmark = (articleId: string) => {
    setArticles(prev => prev.map(article => 
      article.id === articleId 
        ? { ...article, bookmarked: !article.bookmarked }
        : article
    ));
  };

  const handleGPTSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!gptInput.trim()) return;

    const userMessage: GPTMessage = {
      id: Date.now().toString(),
      type: 'user',
      content: gptInput,
      timestamp: new Date()
    };

    setGptMessages(prev => [...prev, userMessage]);
    setGptInput('');
    setIsGptLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: GPTMessage = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: `I understand you're asking about "${userMessage.content}". Here's a helpful response based on financial best practices...`,
        timestamp: new Date()
      };
      setGptMessages(prev => [...prev, aiMessage]);
      setIsGptLoading(false);
    }, 2000);
  };

  const renderArticles = () => (
    <div className="space-y-6">
      {/* Recently Read */}
      {recentReads.length > 0 && (
        <div>
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <EyeIcon className="h-5 w-5 text-blue-500" />
            Recently Read
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {recentReads.map((article) => (
              <div key={article.id} className="bg-[#23263A] rounded-lg p-4 border border-gray-700">
                <h4 className="font-medium text-white mb-2">{article.title}</h4>
                <p className="text-sm text-gray-400 mb-3 line-clamp-2">{article.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{article.readTime}</span>
                  <button className="text-yellow-500 hover:text-yellow-400 text-sm">
                    Read Again
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Recommended Articles */}
      <div>
        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <StarIcon className="h-5 w-5 text-yellow-500" />
          Recommended for You
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredArticles.map((article) => (
            <div key={article.id} className="bg-[#23263A] rounded-lg p-6 border border-gray-700 hover:border-gray-600 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <span className={`px-2 py-1 rounded text-xs font-medium ${getDifficultyColor(article.difficulty)}`}>
                  {article.difficulty}
                </span>
                <button
                  onClick={() => handleBookmark(article.id)}
                  className={`p-1 rounded transition-colors ${
                    article.bookmarked 
                      ? 'text-yellow-500 hover:text-yellow-400' 
                      : 'text-gray-400 hover:text-yellow-500'
                  }`}
                >
                  <BookmarkIcon className="h-4 w-4" />
                </button>
              </div>
              
              <h4 className="font-bold text-white mb-2 line-clamp-2">{article.title}</h4>
              <p className="text-sm text-gray-400 mb-4 line-clamp-3">{article.excerpt}</p>
              
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-gray-500">{article.readTime}</span>
                {article.premium && (
                  <span className="text-xs text-yellow-500 font-medium">Premium</span>
                )}
              </div>
              
              <div className="flex flex-wrap gap-1 mb-4">
                {article.tags.slice(0, 2).map((tag) => (
                  <span key={tag} className="px-2 py-1 bg-[#1E2230] text-xs text-gray-400 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              
              <button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-400 text-black font-medium py-2 rounded-lg hover:from-yellow-400 hover:to-yellow-300 transition-all">
                Read Article
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderGPT = () => (
    <div className="space-y-6">
      {/* Chat Interface */}
      <div className="bg-[#23263A] rounded-lg border border-gray-700 h-96 flex flex-col">
        {/* Messages */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4">
          {gptMessages.length === 0 ? (
            <div className="text-center text-gray-400 mt-8">
              <BotIcon className="h-12 w-12 mx-auto mb-4 text-gray-600" />
              <p>Ask me anything about investing, financial planning, or market analysis!</p>
            </div>
          ) : (
            gptMessages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs lg:max-w-md p-3 rounded-lg ${
                    message.type === 'user'
                      ? 'bg-yellow-500 text-black'
                      : 'bg-[#1E2230] text-white'
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                  <span className="text-xs opacity-70 mt-1 block">
                    {message.timestamp.toLocaleTimeString()}
                  </span>
                </div>
              </div>
            ))
          )}
          
          {isGptLoading && (
            <div className="flex justify-start">
              <div className="bg-[#1E2230] text-white p-3 rounded-lg">
                <div className="flex items-center gap-2">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-yellow-500"></div>
                  <span className="text-sm">AI is thinking...</span>
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Input */}
        <div className="p-4 border-t border-gray-700">
          <form onSubmit={handleGPTSubmit} className="flex gap-2">
            <input
              type="text"
              value={gptInput}
              onChange={(e) => setGptInput(e.target.value)}
              placeholder="Ask about investing, financial planning..."
              className="flex-1 bg-[#1E2230] border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              disabled={isGptLoading}
            />
            <button
              type="submit"
              disabled={!gptInput.trim() || isGptLoading}
              className="bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <SendIcon className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );

  const renderBookmarks = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <BookmarkIcon className="h-5 w-5 text-yellow-500" />
          Bookmarked Articles
        </h3>
        <span className="text-sm text-gray-400">{bookmarkedArticles.length} articles</span>
      </div>
      
      {bookmarkedArticles.length === 0 ? (
        <div className="text-center text-gray-400 py-12">
          <BookmarkIcon className="h-12 w-12 mx-auto mb-4 text-gray-600" />
          <p>No bookmarked articles yet.</p>
          <p className="text-sm">Click the bookmark icon on any article to save it here.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {bookmarkedArticles.map((article) => (
            <div key={article.id} className="bg-[#23263A] rounded-lg p-6 border border-gray-700">
              <div className="flex items-start justify-between mb-3">
                <span className={`px-2 py-1 rounded text-xs font-medium ${getDifficultyColor(article.difficulty)}`}>
                  {article.difficulty}
                </span>
                <button
                  onClick={() => handleBookmark(article.id)}
                  className="text-yellow-500 hover:text-yellow-400 p-1 rounded transition-colors"
                >
                  <BookmarkIcon className="h-4 w-4" />
                </button>
              </div>
              
              <h4 className="font-bold text-white mb-2">{article.title}</h4>
              <p className="text-sm text-gray-400 mb-4 line-clamp-3">{article.excerpt}</p>
              
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">{article.readTime}</span>
                <button className="text-yellow-500 hover:text-yellow-400 text-sm">
                  Read Article
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const renderMastery = () => {
    const handleStartLearning = () => {
      // Navigate to the knowledge hub
      window.location.href = '/knowledge';
    };

    return (
      <div className="space-y-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-yellow-500/10 to-blue-500/10 border border-yellow-500/20 rounded-xl p-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="bg-gradient-to-br from-yellow-500 to-yellow-400 rounded-full p-3">
              <TrophyIcon className="h-8 w-8 text-black" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white">Finance Mastery Lite</h2>
              <p className="text-gray-400">Master the fundamentals of investing through interactive learning</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-[#23263A] p-4 rounded-lg">
              <div className="text-2xl font-bold text-yellow-500">{userProgress.totalXP}</div>
              <div className="text-sm text-gray-400">Total XP</div>
            </div>
            <div className="bg-[#23263A] p-4 rounded-lg">
              <div className="text-2xl font-bold text-blue-500">{userProgress.streak}</div>
              <div className="text-sm text-gray-400">Day Streak</div>
            </div>
            <div className="bg-[#23263A] p-4 rounded-lg">
              <div className="text-2xl font-bold text-green-500">Level {userProgress.level}</div>
              <div className="text-sm text-gray-400">Current Level</div>
            </div>
          </div>

          <button
            onClick={handleStartLearning}
            className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-black font-semibold px-8 py-3 rounded-lg hover:from-yellow-400 hover:to-yellow-300 transition-all flex items-center gap-2 mx-auto"
          >
            <PlayIcon className="h-5 w-5" />
            Start Learning Journey
          </button>
        </div>

        {/* Learning Tracks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Investor IQ Track */}
          <div className="bg-[#23263A] rounded-xl p-6 border border-gray-700">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-500/10 p-3 rounded-lg">
                <BrainIcon className="h-6 w-6 text-blue-500" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Investor IQ</h3>
                <p className="text-sm text-gray-400">Master the fundamentals of investing</p>
              </div>
            </div>
            
            <div className="space-y-3 mb-4">
              <div className="flex items-center justify-between p-3 bg-[#1E2230] rounded-lg">
                <div className="flex items-center gap-3">
                  <CheckIcon className="h-5 w-5 text-green-500" />
                  <span className="text-white">Compound Interest</span>
                </div>
                <span className="text-sm text-green-500">Completed</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-[#1E2230] rounded-lg opacity-60">
                <div className="flex items-center gap-3">
                  <LockIcon className="h-5 w-5 text-gray-500" />
                  <span className="text-gray-400">Risk vs Return</span>
                </div>
                <span className="text-sm text-gray-500">Locked</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-[#1E2230] rounded-lg opacity-60">
                <div className="flex items-center gap-3">
                  <LockIcon className="h-5 w-5 text-gray-500" />
                  <span className="text-gray-400">Diversification</span>
                </div>
                <span className="text-sm text-gray-500">Locked</span>
              </div>
            </div>

            <button
              onClick={handleStartLearning}
              className="w-full bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 px-4 py-2 rounded-lg transition-colors"
            >
              Continue Learning
            </button>
          </div>

          {/* Coming Soon Track */}
          <div className="bg-[#23263A] rounded-xl p-6 border border-gray-700 opacity-60">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-purple-500/10 p-3 rounded-lg">
                <CalculatorIcon className="h-6 w-6 text-purple-500" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Tax Optimization</h3>
                <p className="text-sm text-gray-400">Coming Soon</p>
              </div>
            </div>
            
            <div className="space-y-3 mb-4">
              <div className="flex items-center justify-between p-3 bg-[#1E2230] rounded-lg">
                <div className="flex items-center gap-3">
                  <LockIcon className="h-5 w-5 text-gray-500" />
                  <span className="text-gray-400">Tax-Loss Harvesting</span>
                </div>
                <span className="text-sm text-gray-500">Coming Soon</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-[#1E2230] rounded-lg">
                <div className="flex items-center gap-3">
                  <LockIcon className="h-5 w-5 text-gray-500" />
                  <span className="text-gray-400">Retirement Accounts</span>
                </div>
                <span className="text-sm text-gray-500">Coming Soon</span>
              </div>
            </div>

            <button className="w-full bg-gray-500/10 text-gray-500 px-4 py-2 rounded-lg cursor-not-allowed">
              Coming Soon
            </button>
          </div>
        </div>

        {/* Recent Achievements */}
        <div className="bg-[#23263A] rounded-xl p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <AwardIcon className="h-5 w-5 text-yellow-500" />
            Recent Achievements
          </h3>
          
          {userProgress.completedModules.length > 0 ? (
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-[#1E2230] rounded-lg">
                <div className="bg-green-500/10 p-2 rounded-lg">
                  <CheckIcon className="h-4 w-4 text-green-500" />
                </div>
                <div>
                  <div className="text-white font-medium">Completed Compound Interest Module</div>
                  <div className="text-sm text-gray-400">+50 XP earned</div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center text-gray-400 py-8">
              <TrophyIcon className="h-12 w-12 mx-auto mb-4 text-gray-600" />
              <p>No achievements yet.</p>
              <p className="text-sm">Complete modules to earn achievements and XP!</p>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Search and Filters */}
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="relative flex-1">
          <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search articles, topics, or concepts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#23263A] border border-gray-700 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>
        
        <div className="flex gap-2 overflow-x-auto">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                selectedCategory === category.id
                  ? 'bg-yellow-500 text-black'
                  : 'bg-[#23263A] text-gray-300 hover:text-white border border-gray-700'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Main Tabs */}
      <div className="flex border-b border-gray-700">
        <button
          onClick={() => setActiveTab('mastery')}
          className={`px-6 py-3 font-medium transition-colors flex items-center gap-2 ${
            activeTab === 'mastery'
              ? 'text-yellow-500 border-b-2 border-yellow-500'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          <TrophyIcon className="h-4 w-4" />
          Finance Mastery
        </button>
        <button
          onClick={() => setActiveTab('articles')}
          className={`px-6 py-3 font-medium transition-colors flex items-center gap-2 ${
            activeTab === 'articles'
              ? 'text-yellow-500 border-b-2 border-yellow-500'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          <BookOpenIcon className="h-4 w-4" />
          Articles
        </button>
        <button
          onClick={() => setActiveTab('gpt')}
          className={`px-6 py-3 font-medium transition-colors flex items-center gap-2 ${
            activeTab === 'gpt'
              ? 'text-yellow-500 border-b-2 border-yellow-500'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          <BotIcon className="h-4 w-4" />
          AI Assistant
        </button>
        <button
          onClick={() => setActiveTab('bookmarks')}
          className={`px-6 py-3 font-medium transition-colors flex items-center gap-2 ${
            activeTab === 'bookmarks'
              ? 'text-yellow-500 border-b-2 border-yellow-500'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          <BookmarkIcon className="h-4 w-4" />
          Bookmarks
        </button>
      </div>

      {/* Content */}
      <div className="min-h-[600px]">
        {activeTab === 'mastery' && renderMastery()}
        {activeTab === 'articles' && renderArticles()}
        {activeTab === 'gpt' && renderGPT()}
        {activeTab === 'bookmarks' && renderBookmarks()}
      </div>
    </div>
  );
}; 