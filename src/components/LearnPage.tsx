import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  SearchIcon, 
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
  UsersIcon,
  BrainIcon,
  ZapIcon
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
}

interface Category {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  articleCount: number;
}

export const LearnPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [articles, setArticles] = useState<Article[]>([]);
  const [filteredArticles, setFilteredArticles] = useState<Article[]>([]);

  const categories: Category[] = [
    {
      id: 'basics',
      name: 'Investment Basics',
      description: 'Learn the fundamentals of investing',
      icon: <BookOpenIcon className="h-6 w-6" />,
      color: 'bg-blue-500',
      articleCount: 12
    },
    {
      id: 'asset-classes',
      name: 'Asset Classes',
      description: 'Stocks, bonds, ETFs, and more',
      icon: <BarChart3Icon className="h-6 w-6" />,
      color: 'bg-green-500',
      articleCount: 8
    },
    {
      id: 'planning',
      name: 'Financial Planning',
      description: 'Retirement, budgeting, and goals',
      icon: <TargetIcon className="h-6 w-6" />,
      color: 'bg-purple-500',
      articleCount: 15
    },
    {
      id: 'taxes',
      name: 'Tax Optimization',
      description: 'Minimize taxes on your investments',
      icon: <CalculatorIcon className="h-6 w-6" />,
      color: 'bg-red-500',
      articleCount: 6
    },
    {
      id: 'risk',
      name: 'Risk Management',
      description: 'Protect your portfolio',
      icon: <ShieldIcon className="h-6 w-6" />,
      color: 'bg-orange-500',
      articleCount: 10
    },
    {
      id: 'market',
      name: 'Market Analysis',
      description: 'Understanding market trends',
      icon: <TrendingUpIcon className="h-6 w-6" />,
      color: 'bg-yellow-500',
      articleCount: 9
    }
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
      tags: ['compound interest', 'wealth building', 'time value']
    },
    {
      id: 'diversification',
      title: 'Why Diversification Matters',
      excerpt: 'Discover how spreading your investments across different assets can reduce risk and improve returns.',
      category: 'risk',
      readTime: '7 min',
      difficulty: 'beginner',
      featured: true,
      tags: ['diversification', 'risk management', 'portfolio']
    },
    {
      id: 'etf-guide',
      title: 'Complete Guide to ETFs',
      excerpt: 'Everything you need to know about Exchange-Traded Funds and how to use them in your portfolio.',
      category: 'asset-classes',
      readTime: '10 min',
      difficulty: 'intermediate',
      featured: true,
      tags: ['ETFs', 'index funds', 'passive investing']
    },
    {
      id: 'retirement-planning',
      title: 'Retirement Planning 101',
      excerpt: 'Start planning your retirement early with these essential strategies and tools.',
      category: 'planning',
      readTime: '12 min',
      difficulty: 'beginner',
      tags: ['retirement', '401k', 'IRA', 'planning']
    },
    {
      id: 'tax-loss-harvesting',
      title: 'Tax Loss Harvesting Strategies',
      excerpt: 'Advanced techniques to minimize your tax burden while maintaining your investment strategy.',
      category: 'taxes',
      readTime: '8 min',
      difficulty: 'advanced',
      premium: true,
      tags: ['tax optimization', 'harvesting', 'advanced']
    },
    {
      id: 'market-cycles',
      title: 'Understanding Market Cycles',
      excerpt: 'Learn to recognize market patterns and make informed decisions during different market phases.',
      category: 'market',
      readTime: '9 min',
      difficulty: 'intermediate',
      tags: ['market cycles', 'timing', 'analysis']
    }
  ];

  useEffect(() => {
    setArticles(mockArticles);
  }, []);

  useEffect(() => {
    let filtered = articles;

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(article =>
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(article => article.category === selectedCategory);
    }

    setFilteredArticles(filtered);
  }, [searchQuery, selectedCategory, articles]);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'text-green-500 bg-green-500/10';
      case 'intermediate': return 'text-yellow-500 bg-yellow-500/10';
      case 'advanced': return 'text-red-500 bg-red-500/10';
      default: return 'text-gray-500 bg-gray-500/10';
    }
  };

  const handleArticleClick = (article: Article) => {
    if (article.premium) {
      navigate('/plans');
    } else {
      navigate(`/learn/article/${article.id}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B0E15] via-[#181C2A] to-[#23263A]">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-blue-700/20 rounded-full blur-[120px] animate-pulse" style={{animationDuration: '15s'}}></div>
        <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-yellow-500/10 rounded-full blur-[120px] animate-pulse" style={{animationDuration: '20s'}}></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center pt-20 pb-12 px-4">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="bg-gradient-to-br from-yellow-500 to-yellow-400 rounded-full p-3 shadow-lg">
              <BrainIcon className="h-8 w-8 text-black" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Learn Smart Finance
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Master the art of investing with our comprehensive library of financial education resources
              </p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search articles, topics, or concepts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#151822]/90 backdrop-blur-md border border-gray-800/30 rounded-xl pl-12 pr-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="max-w-7xl mx-auto px-4 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Explore by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`p-6 rounded-xl border-2 transition-all duration-300 text-left group hover:scale-105 ${
                  selectedCategory === category.id
                    ? 'border-yellow-500 bg-yellow-500/10'
                    : 'border-gray-700 bg-[#151822]/90 backdrop-blur-md hover:border-gray-600'
                }`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-lg ${category.color} text-white`}>
                    {category.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-1">{category.name}</h3>
                    <p className="text-sm text-gray-400">{category.description}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">{category.articleCount} articles</span>
                  <ArrowRightIcon className="h-4 w-4 text-gray-400 group-hover:text-yellow-500 transition-colors" />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Featured Articles */}
        <div className="max-w-7xl mx-auto px-4 mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">
              {selectedCategory === 'all' ? 'Featured Articles' : `${categories.find(c => c.id === selectedCategory)?.name} Articles`}
            </h2>
            <button
              onClick={() => setSelectedCategory('all')}
              className="text-yellow-500 hover:text-yellow-400 transition-colors text-sm font-medium"
            >
              View All
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <div
                key={article.id}
                onClick={() => handleArticleClick(article)}
                className="bg-[#151822]/90 backdrop-blur-md rounded-xl border border-gray-800/30 p-6 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
              >
                {article.featured && (
                  <div className="flex items-center gap-2 mb-3">
                    <StarIcon className="h-4 w-4 text-yellow-500" />
                    <span className="text-xs text-yellow-500 font-medium">Featured</span>
                  </div>
                )}
                
                {article.premium && (
                  <div className="flex items-center gap-2 mb-3">
                    <ZapIcon className="h-4 w-4 text-purple-500" />
                    <span className="text-xs text-purple-500 font-medium">Premium</span>
                  </div>
                )}

                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-yellow-500 transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <ClockIcon className="h-4 w-4 text-gray-500" />
                    <span className="text-xs text-gray-500">{article.readTime}</span>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded ${getDifficultyColor(article.difficulty)}`}>
                    {article.difficulty}
                  </span>
                </div>

                <div className="flex flex-wrap gap-1">
                  {article.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <BookOpenIcon className="h-16 w-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-400 mb-2">No articles found</h3>
              <p className="text-gray-500">Try adjusting your search or category filter</p>
            </div>
          )}
        </div>

        {/* CTA Banner */}
        <div className="max-w-7xl mx-auto px-4 mb-12">
          <div className="bg-gradient-to-r from-yellow-500/10 to-blue-500/10 border border-yellow-500/20 rounded-2xl p-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="bg-gradient-to-br from-yellow-500 to-yellow-400 rounded-full p-2">
                <BrainIcon className="h-6 w-6 text-black" />
              </div>
              <h2 className="text-2xl font-bold text-white">Want Personalized Finance Tips?</h2>
            </div>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Sign up and access your smart Financial Hub with AI-powered recommendations, 
              personalized learning paths, and advanced portfolio insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/signup')}
                className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-black font-semibold px-8 py-3 rounded-lg hover:from-yellow-400 hover:to-yellow-300 transition-all flex items-center justify-center gap-2"
              >
                <span>Get Started Free</span>
                <ArrowRightIcon className="h-4 w-4" />
              </button>
              <button
                onClick={() => navigate('/login')}
                className="bg-[#23263A] text-white font-medium px-8 py-3 rounded-lg hover:bg-[#1E2230] transition-all border border-gray-700"
              >
                Already have an account? Log in
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 