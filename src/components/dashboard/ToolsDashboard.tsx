import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookOpenIcon, CalendarIcon, ShieldIcon, BarChart2Icon, PieChartIcon, TrendingUpIcon, BellIcon, LineChartIcon, WalletIcon, FileTextIcon, UsersIcon, CalculatorIcon, SearchIcon, StarIcon, ChevronRightIcon, ClockIcon } from 'lucide-react';

const getToolConfig = (color: string) => {
  const colorMap: {
    [key: string]: string;
  } = {
    blue: 'bg-gradient-to-br from-blue-500/20 to-blue-500/5 text-blue-500',
    yellow: 'bg-gradient-to-br from-yellow-500/20 to-yellow-500/5 text-yellow-500',
    red: 'bg-gradient-to-br from-red-500/20 to-red-500/5 text-red-500',
    purple: 'bg-gradient-to-br from-purple-500/20 to-purple-500/5 text-purple-500',
    teal: 'bg-gradient-to-br from-teal-500/20 to-teal-500/5 text-teal-500',
    green: 'bg-gradient-to-br from-green-500/20 to-green-500/5 text-green-500',
    gray: 'bg-gradient-to-br from-gray-500/20 to-gray-500/5 text-gray-500'
  };
  return colorMap[color] || 'bg-gradient-to-br from-gray-500/20 to-gray-500/5 text-gray-500';
};

type OnboardingData = {
  level: string;
  goals: string[];
  timeSpent: number;
};

type Tool = {
  id: string;
  title: string;
  description: string;
  icon: any;
  color: string;
  plan: string;
};

function getRecommendedTools(onboarding: OnboardingData | null, allTools: Tool[]): string[] {
  if (!onboarding) return [];
  const recs: string[] = [];
  if (onboarding.level === 'Beginner') {
    recs.push('financial-knowledge', 'portfolio-tracker');
  }
  if (onboarding.level === 'Intermediate') {
    recs.push('sentiment-analysis', 'financial-planner', 'portfolio-optimization');
  }
  if (onboarding.level === 'Expert') {
    recs.push('portfolio-optimization', 'risk-assessment', 'backtesting-module', 'ai-advisor');
  }
  if (onboarding.goals?.includes('Save')) {
    recs.push('financial-planner');
  }
  if (onboarding.goals?.includes('Invest')) {
    recs.push('portfolio-optimization', 'sentiment-analysis');
  }
  // Remove duplicates and only include tools that exist
  return Array.from(new Set(recs)).filter(id => allTools.some((t: Tool) => t.id === id));
}

export const ToolsDashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [favoriteTools, setFavoriteTools] = useState<string[]>(() => {
    const stored = localStorage.getItem('aivesting_favorite_tools');
    return stored ? JSON.parse(stored) : [];
  });
  const [onboarding, setOnboarding] = useState<OnboardingData | null>(null);

  useEffect(() => {
    const data = localStorage.getItem('aivesting_onboarding');
    if (data) setOnboarding(JSON.parse(data));
  }, []);
  useEffect(() => {
    localStorage.setItem('aivesting_favorite_tools', JSON.stringify(favoriteTools));
  }, [favoriteTools]);

  // Basic Plan Tools
  const basicTools: Tool[] = [{
    id: 'financial-knowledge',
    title: 'Financial Knowledge',
    description: 'Learn about investing, saving, and financial planning',
    icon: BookOpenIcon,
    color: 'blue',
    plan: 'Basic'
  }, {
    id: 'financial-planner',
    title: 'Financial Planner',
    description: 'Create custom plans for your financial goals',
    icon: CalculatorIcon,
    color: 'purple',
    plan: 'Basic'
  }, {
    id: 'sentiment-analysis',
    title: 'Sentiment Analysis',
    description: 'Track market sentiment across different sectors',
    icon: BarChart2Icon,
    color: 'green',
    plan: 'Basic'
  }, {
    id: 'portfolio-tracker',
    title: 'Portfolio Tracker',
    description: 'Manually track and monitor your investment portfolio',
    icon: WalletIcon,
    color: 'teal',
    plan: 'Basic'
  }];
  // Metal Plan Tools
  const metalTools: Tool[] = [{
    id: 'portfolio-optimization',
    title: 'Portfolio Optimization',
    description: 'Optimize your asset allocation for better returns',
    icon: PieChartIcon,
    color: 'red',
    plan: 'Metal'
  }, {
    id: 'risk-assessment',
    title: 'Risk Assessment',
    description: 'Analyze your portfolio risk and get recommendations',
    icon: ShieldIcon,
    color: 'yellow',
    plan: 'Metal'
  }, {
    id: 'backtesting-module',
    title: 'Backtesting Module',
    description: 'Test investment strategies against historical data',
    icon: LineChartIcon,
    color: 'blue',
    plan: 'Metal'
  }, {
    id: 'automated-alerts',
    title: 'Automated Alerts',
    description: 'Get AI-powered alerts for market opportunities',
    icon: BellIcon,
    color: 'purple',
    plan: 'Metal'
  }];
  // Ultra Plan Tools
  const ultraTools: Tool[] = [{
    id: 'realtime-optimizer',
    title: 'Real-Time Optimizer',
    description: 'AI-powered real-time portfolio optimization',
    icon: TrendingUpIcon,
    color: 'teal',
    plan: 'Ultra'
  }, {
    id: 'forecasting-models',
    title: 'Forecasting Models',
    description: 'Advanced AI predictions for your investments',
    icon: LineChartIcon,
    color: 'blue',
    plan: 'Ultra'
  }, {
    id: 'premium-reports',
    title: 'Premium Report Access',
    description: 'Exclusive research reports and market analysis',
    icon: FileTextIcon,
    color: 'red',
    plan: 'Ultra'
  }, {
    id: 'coaching-portal',
    title: 'Coaching Portal',
    description: 'Schedule 1-on-1 sessions with financial advisors',
    icon: UsersIcon,
    color: 'green',
    plan: 'Ultra'
  }];
  // Combine all tools
  const allTools: Tool[] = [...basicTools, ...metalTools, ...ultraTools];

  // Recommended tools based on onboarding
  const recommendedToolIds = getRecommendedTools(onboarding, allTools);
  const recommendedTools = allTools.filter(tool => recommendedToolIds.includes(tool.id));

  // Reorder tools: favorites first, then recommended, then others
  function reorderTools(tools: Tool[]): Tool[] {
    return [
      ...tools.filter((tool: Tool) => favoriteTools.includes(tool.id)),
      ...tools.filter((tool: Tool) => !favoriteTools.includes(tool.id) && recommendedToolIds.includes(tool.id)),
      ...tools.filter((tool: Tool) => !favoriteTools.includes(tool.id) && !recommendedToolIds.includes(tool.id)),
    ];
  }

  // Filter tools based on search query
  const filteredBasicTools = reorderTools(basicTools.filter(tool => tool.title.toLowerCase().includes(searchQuery.toLowerCase()) || tool.description.toLowerCase().includes(searchQuery.toLowerCase())));
  const filteredMetalTools = reorderTools(metalTools.filter(tool => tool.title.toLowerCase().includes(searchQuery.toLowerCase()) || tool.description.toLowerCase().includes(searchQuery.toLowerCase())));
  const filteredUltraTools = reorderTools(ultraTools.filter(tool => tool.title.toLowerCase().includes(searchQuery.toLowerCase()) || tool.description.toLowerCase().includes(searchQuery.toLowerCase())));

  // Toggle favorite status
  const toggleFavorite = (id: string) => {
    setFavoriteTools(prev => prev.includes(id) ? prev.filter(toolId => toolId !== id) : [...prev, id]);
  };

  return <div className="space-y-6">
    {/* Recommended for you section */}
    {recommendedTools.length > 0 && (
      <div className="bg-gradient-to-br from-yellow-500/10 to-blue-500/10 p-6 rounded-xl border border-yellow-500/20 shadow-lg mb-6">
        <h2 className="text-lg font-bold mb-4 text-yellow-600 flex items-center gap-2">
          <StarIcon className="h-5 w-5 text-yellow-500" /> Recommended for you
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {recommendedTools.map(tool => (
            <Link key={tool.id} to={`/dashboard/tools/${tool.id}`} className="bg-[#1A1F2E]/80 backdrop-blur-sm rounded-xl p-5 hover:bg-[#262B3D] transition-all duration-300 border border-gray-800/50 hover:border-yellow-500/30 hover:shadow-lg group relative">
              <div className="absolute top-3 right-3 flex gap-2">
                <button onClick={e => { e.preventDefault(); toggleFavorite(tool.id); }} className={`${favoriteTools.includes(tool.id) ? 'text-yellow-500' : 'text-gray-500'} hover:text-yellow-400 transition-colors`}>
                  <StarIcon className="h-4 w-4" />
                </button>
                <span className="bg-yellow-500 text-black text-xs px-2 py-0.5 rounded-full font-semibold">Recommended</span>
              </div>
              <div className="flex flex-col items-center text-center gap-3">
                <div className={`${getToolConfig(tool.color)} p-3 rounded-lg shadow-lg group-hover:scale-110 transition-all duration-300`}>
                  <tool.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-2 group-hover:text-yellow-500 transition-colors">
                    {tool.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{tool.description}</p>
                </div>
                <div className="mt-4 flex items-center">
                  <span className="text-sm text-yellow-500 group-hover:translate-x-1 transition-transform">
                    Open Tool →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    )}
    {/* Basic Plan Tools */}
    <div className="bg-gradient-to-br from-[#151822] to-[#1A1F2E] p-6 rounded-xl border border-gray-800/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-blue-500/20 mb-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="flex items-center gap-3 mb-4 relative z-10">
          <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/5 p-2 rounded-lg shadow-lg">
            <CalculatorIcon className="h-5 w-5 text-blue-500" />
          </div>
          <h2 className="text-lg font-medium">Basic Plan Tools</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
          {filteredBasicTools.length > 0 ? filteredBasicTools.map(tool => <Link key={tool.id} to={`/dashboard/tools/${tool.id}`} className="bg-[#1A1F2E]/80 backdrop-blur-sm rounded-xl p-5 hover:bg-[#262B3D] transition-all duration-300 border border-gray-800/50 hover:border-blue-500/30 hover:shadow-lg group relative">
                <div className="absolute top-3 right-3">
                  <button onClick={e => {
              e.preventDefault();
              toggleFavorite(tool.id);
            }} className={`${favoriteTools.includes(tool.id) ? 'text-yellow-500' : 'text-gray-500'} hover:text-yellow-400 transition-colors`}>
                    <StarIcon className="h-4 w-4" />
                  </button>
                </div>
                <div className="flex flex-col items-center text-center gap-3">
                  <div className={`${getToolConfig(tool.color)} p-3 rounded-lg shadow-lg group-hover:scale-110 transition-all duration-300`}>
                    <tool.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-2 group-hover:text-blue-500 transition-colors">
                      {tool.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{tool.description}</p>
                  </div>
                  <div className="mt-4 flex items-center">
                    <span className="text-sm text-blue-500 group-hover:translate-x-1 transition-transform">
                      Open Tool →
                    </span>
                  </div>
                </div>
              </Link>) : <div className="col-span-4 py-6 text-center text-gray-400">
              No tools found matching "{searchQuery}"
            </div>}
        </div>
      </div>
      {/* Metal Plan Tools - Accessible since user has Metal plan */}
      <div className="bg-gradient-to-br from-[#151822] to-[#1A1F2E] p-6 rounded-xl border border-gray-800/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-yellow-500/20 mb-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
        <div className="flex items-center gap-3 mb-4 relative z-10">
          <div className="bg-gradient-to-br from-yellow-500/20 to-yellow-500/5 p-2 rounded-lg shadow-lg">
            <ShieldIcon className="h-5 w-5 text-yellow-500" />
          </div>
          <h2 className="text-lg font-medium">Metal Plan Tools</h2>
          <span className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-black text-xs px-2 py-1 rounded-full ml-2 shadow-sm">
            Current Plan
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
          {filteredMetalTools.length > 0 ? filteredMetalTools.map(tool => <Link key={tool.id} to={`/dashboard/tools/${tool.id}`} className="bg-[#1A1F2E]/80 backdrop-blur-sm rounded-xl p-5 hover:bg-[#262B3D] transition-all duration-300 border border-gray-800/50 hover:border-yellow-500/30 hover:shadow-lg group relative">
                <div className="absolute top-3 right-3">
                  <button onClick={e => {
              e.preventDefault();
              toggleFavorite(tool.id);
            }} className={`${favoriteTools.includes(tool.id) ? 'text-yellow-500' : 'text-gray-500'} hover:text-yellow-400 transition-colors`}>
                    <StarIcon className="h-4 w-4" />
                  </button>
                </div>
                <div className="flex flex-col items-center text-center gap-3">
                  <div className={`${getToolConfig(tool.color)} p-3 rounded-lg shadow-lg group-hover:scale-110 transition-all duration-300`}>
                    <tool.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-2 group-hover:text-yellow-500 transition-colors">
                      {tool.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{tool.description}</p>
                  </div>
                  <div className="mt-4 flex items-center">
                    <span className="text-sm text-yellow-500 group-hover:translate-x-1 transition-transform">
                      Open Tool →
                    </span>
                  </div>
                </div>
              </Link>) : <div className="col-span-4 py-6 text-center text-gray-400">
              No tools found matching "{searchQuery}"
            </div>}
        </div>
      </div>
      {/* Ultra Plan Tools - Locked */}
      <div className="bg-gradient-to-br from-[#151822] to-[#1A1F2E] p-6 rounded-xl border border-gray-800/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-purple-500/20 mb-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="flex items-center gap-3 mb-4 relative z-10">
          <div className="bg-gradient-to-br from-purple-500/20 to-purple-500/5 p-2 rounded-lg shadow-lg">
            <TrendingUpIcon className="h-5 w-5 text-purple-500" />
          </div>
          <h2 className="text-lg font-medium">Ultra Plan Tools</h2>
          <Link to="/plans" className="bg-gradient-to-r from-purple-500/20 to-purple-500/10 text-purple-400 text-xs px-3 py-1 rounded-full ml-2 hover:bg-purple-500/20 transition-all duration-300 border border-purple-500/30">
            Upgrade Required
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
          {filteredUltraTools.length > 0 ? filteredUltraTools.map(tool => <div key={tool.id} className="bg-[#1A1F2E]/50 rounded-xl p-5 relative group overflow-hidden border border-gray-800/30 hover:border-purple-500/20 transition-all duration-300">
                <div className="absolute inset-0 bg-[#0B0E15]/80 backdrop-blur-sm flex flex-col items-center justify-center z-20">
                  <div className="bg-gradient-to-br from-purple-500/20 to-purple-500/5 p-3 rounded-full mb-3 shadow-lg animate-pulse" style={{
              animationDuration: '2s'
            }}>
                    <LockIcon className="h-6 w-6 text-purple-500" />
                  </div>
                  <p className="text-sm text-gray-400 mb-3 text-center px-4">
                    Upgrade to Ultra Plan to unlock this tool
                  </p>
                  <Link to="/plans" className="bg-gradient-to-r from-purple-500 to-purple-400 text-white px-4 py-2 rounded-lg text-sm hover:from-purple-400 hover:to-purple-300 transition-all shadow-lg hover:shadow-purple-500/20 transform hover:scale-105">
                    Upgrade Now
                  </Link>
                </div>
                <div className="flex flex-col items-center text-center gap-3 opacity-50">
                  <div className={`${getToolConfig(tool.color)} p-3 rounded-lg`}>
                    <tool.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-2">{tool.title}</h3>
                    <p className="text-gray-400 text-sm">{tool.description}</p>
                  </div>
                  <div className="mt-4">
                    <span className="text-sm text-purple-500">Locked</span>
                  </div>
                </div>
              </div>) : <div className="col-span-4 py-6 text-center text-gray-400">
              No tools found matching "{searchQuery}"
            </div>}
        </div>
      </div>
      {/* Recently Used Tools */}
      <div className="bg-gradient-to-br from-[#151822] to-[#1A1F2E] p-6 rounded-xl border border-gray-800/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-blue-500/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="flex justify-between items-center mb-6 relative z-10">
          <div className="flex items-center gap-3">
            <h3 className="text-lg font-medium">Recently Used Tools</h3>
            <div className="bg-blue-500/10 text-blue-400 text-xs px-2 py-1 rounded-full flex items-center gap-1">
              <ClockIcon className="h-3 w-3" />
              Last 7 days
            </div>
          </div>
        </div>
        <div className="space-y-4 relative z-10">
          <div className="flex items-center justify-between p-4 bg-[#1E2230]/80 backdrop-blur-sm rounded-lg border border-gray-800/50 hover:border-purple-500/30 transition-all duration-300 hover:shadow-lg group">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-purple-500/20 to-purple-500/5 p-2 rounded-lg shadow-lg group-hover:shadow-purple-500/20 transition-all duration-300 group-hover:scale-110">
                <CalculatorIcon className="h-5 w-5 text-purple-500" />
              </div>
              <div>
                <div className="font-medium group-hover:text-purple-400 transition-colors">
                  Financial Planner
                </div>
                <div className="text-xs text-gray-400">Last used: Today</div>
              </div>
            </div>
            <Link to="/dashboard/tools/financial-planner" className="text-sm text-purple-500 hover:text-purple-400 transition-colors flex items-center gap-1 group">
              Continue
              <ChevronRightIcon className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="flex items-center justify-between p-4 bg-[#1E2230]/80 backdrop-blur-sm rounded-lg border border-gray-800/50 hover:border-red-500/30 transition-all duration-300 hover:shadow-lg group">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-red-500/20 to-red-500/5 p-2 rounded-lg shadow-lg group-hover:shadow-red-500/20 transition-all duration-300 group-hover:scale-110">
                <PieChartIcon className="h-5 w-5 text-red-500" />
              </div>
              <div>
                <div className="font-medium group-hover:text-red-400 transition-colors">
                  Portfolio Optimization
                </div>
                <div className="text-xs text-gray-400">
                  Last used: Yesterday
                </div>
              </div>
            </div>
            <Link to="/dashboard/tools/portfolio-optimization" className="text-sm text-red-500 hover:text-red-400 transition-colors flex items-center gap-1 group">
              Continue
              <ChevronRightIcon className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="flex items-center justify-between p-4 bg-[#1E2230]/80 backdrop-blur-sm rounded-lg border border-gray-800/50 hover:border-yellow-500/30 transition-all duration-300 hover:shadow-lg group">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-yellow-500/20 to-yellow-500/5 p-2 rounded-lg shadow-lg group-hover:shadow-yellow-500/20 transition-all duration-300 group-hover:scale-110">
                <ShieldIcon className="h-5 w-5 text-yellow-500" />
              </div>
              <div>
                <div className="font-medium group-hover:text-yellow-400 transition-colors">
                  Risk Assessment
                </div>
                <div className="text-xs text-gray-400">
                  Last used: 3 days ago
                </div>
              </div>
            </div>
            <Link to="/dashboard/tools/risk-assessment" className="text-sm text-yellow-500 hover:text-yellow-400 transition-colors flex items-center gap-1 group">
              Continue
              <ChevronRightIcon className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>;
};
const LockIcon = ({
  className
}: {
  className?: string;
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
  </svg>;