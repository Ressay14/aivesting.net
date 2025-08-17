import React, { useState, useEffect, useRef } from 'react';
import { 
  SendIcon, 
  BotIcon, 
  TrendingUpIcon, 
  TrendingDownIcon, 
  DollarSignIcon,
  BarChart3Icon,
  PieChartIcon,
  ShieldIcon,
  TargetIcon,
  ClockIcon,
  StarIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
  SearchIcon,
  SettingsIcon,
  BellIcon,
  UserIcon,
  BrainIcon,
  ZapIcon,
  SparklesIcon,
  ArrowUpRightIcon,
  ArrowDownRightIcon,
  CircleIcon,
  SquareIcon,
  TriangleIcon
} from 'lucide-react';

interface Message {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  isTyping?: boolean;
  insights?: {
    type: 'positive' | 'negative' | 'neutral';
    title: string;
    value: string;
    change?: string;
    icon: React.ReactNode;
  }[];
  recommendations?: {
    title: string;
    description: string;
    confidence: number;
    action: string;
  }[];
}

interface AssetClass {
  name: string;
  allocation: number;
  performance: number;
  color: string;
  icon: React.ReactNode;
}

export const AIFinancialAssistant: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'assistant',
      content: 'Hello! I\'m your AI financial assistant. I can help you analyze your portfolio, provide investment insights, and answer any financial questions. What would you like to know?',
      timestamp: new Date(),
      insights: [
        {
          type: 'positive',
          title: 'Portfolio Performance',
          value: '+12.4%',
          change: '+2.1% today',
          icon: <TrendingUpIcon className="h-4 w-4" />
        },
        {
          type: 'neutral',
          title: 'Risk Level',
          value: 'Moderate',
          icon: <ShieldIcon className="h-4 w-4" />
        }
      ]
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [avatarGlow, setAvatarGlow] = useState(false);
  const [selectedContext, setSelectedContext] = useState('general');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const contextSuggestions = [
    { id: 'stocks', label: 'Stocks', icon: <TrendingUpIcon className="h-3 w-3" /> },
    { id: 'crypto', label: 'Crypto', icon: <ZapIcon className="h-3 w-3" /> },
    { id: 'bonds', label: 'Bonds', icon: <ShieldIcon className="h-3 w-3" /> },
    { id: 'etfs', label: 'ETFs', icon: <BarChart3Icon className="h-3 w-3" /> },
    { id: 'real-estate', label: 'Real Estate', icon: <SquareIcon className="h-3 w-3" /> },
    { id: 'risk', label: 'Risk Analysis', icon: <TargetIcon className="h-3 w-3" /> }
  ];

  const assetClasses: AssetClass[] = [
    { name: 'US Stocks', allocation: 45, performance: 12.4, color: '#3B82F6', icon: <TrendingUpIcon className="h-4 w-4" /> },
    { name: 'International', allocation: 25, performance: 8.2, color: '#10B981', icon: <GlobeIcon className="h-4 w-4" /> },
    { name: 'Bonds', allocation: 20, performance: 3.1, color: '#F59E0B', icon: <ShieldIcon className="h-4 w-4" /> },
    { name: 'Real Estate', allocation: 10, performance: 6.8, color: '#8B5CF6', icon: <SquareIcon className="h-4 w-4" /> }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);
    setAvatarGlow(true);

    // Simulate AI response with typing animation
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: generateAIResponse(inputValue),
        timestamp: new Date(),
        insights: generateInsights(),
        recommendations: generateRecommendations()
      };

      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
      setAvatarGlow(false);
    }, 2000 + Math.random() * 1000);
  };

  const generateAIResponse = (input: string): string => {
    const responses = [
      "Based on your portfolio analysis, I can see some interesting patterns. Your tech sector allocation has been performing exceptionally well, but there might be some rebalancing opportunities.",
      "Looking at the current market conditions, I'd recommend considering a defensive position in utilities and consumer staples. These sectors typically perform well during economic uncertainty.",
      "Your risk tolerance assessment suggests you're comfortable with moderate volatility. I'd suggest diversifying into emerging markets for potential growth opportunities.",
      "The recent market volatility presents both challenges and opportunities. Your current bond allocation provides good stability, but you might want to consider adding some inflation-protected securities."
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const generateInsights = () => {
    return [
      {
        type: 'positive' as const,
        title: 'Portfolio Growth',
        value: '+€2,847',
        change: '+3.2% this week',
        icon: <TrendingUpIcon className="h-4 w-4" />
      },
      {
        type: 'negative' as const,
        title: 'Volatility',
        value: 'High',
        change: 'Above average',
        icon: <TargetIcon className="h-4 w-4" />
      }
    ];
  };

  const generateRecommendations = () => {
    return [
      {
        title: 'Rebalance Portfolio',
        description: 'Consider reducing tech exposure and increasing defensive positions',
        confidence: 85,
        action: 'Review Allocation'
      },
      {
        title: 'Add Emerging Markets',
        description: 'Diversify with emerging market ETFs for growth potential',
        confidence: 72,
        action: 'Explore Options'
      }
    ];
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0A0F] via-[#1A1A2E] to-[#16213E] text-white overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/3 to-purple-500/3 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 flex h-screen">
        {/* Left Sidebar - Asset Classes */}
        <div className="w-80 bg-black/20 backdrop-blur-xl border-r border-white/10 p-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
              <PieChartIcon className="h-4 w-4 text-white" />
            </div>
            <h2 className="text-lg font-semibold">Asset Allocation</h2>
          </div>

          <div className="space-y-4">
            {assetClasses.map((asset, index) => (
              <div key={asset.name} className="group">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10 hover-lift asset-progress">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{backgroundColor: asset.color + '20'}}>
                        <div style={{color: asset.color}}>{asset.icon}</div>
                      </div>
                      <div>
                        <h3 className="font-medium text-sm">{asset.name}</h3>
                        <p className="text-xs text-gray-400">{asset.allocation}%</p>
                      </div>
                    </div>
                    <div className={`text-sm font-medium ${asset.performance >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                      {asset.performance >= 0 ? '+' : ''}{asset.performance}%
                    </div>
                  </div>
                  
                  {/* Progress Ring */}
                  <div className="relative w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className="h-full rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: `${asset.allocation}%`,
                        backgroundColor: asset.color,
                        boxShadow: `0 0 20px ${asset.color}40`
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Portfolio Summary */}
          <div className="mt-8 p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl border border-white/10">
            <h3 className="text-sm font-medium mb-3">Portfolio Summary</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Total Value</span>
                <span className="font-medium">€124,395</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Today's Change</span>
                <span className="text-green-400 font-medium">+€2,847 (+2.3%)</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Risk Level</span>
                <span className="text-yellow-400 font-medium">Moderate</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <div className="bg-black/20 backdrop-blur-xl border-b border-white/10 p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center transition-all duration-500 ${avatarGlow ? 'shadow-lg shadow-blue-500/50 scale-110' : ''}`}>
                  <BotIcon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-semibold">AI Financial Assistant</h1>
                  <p className="text-sm text-gray-400">Powered by GPT-4 • Real-time Analysis</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 px-3 py-2 bg-white/5 rounded-lg border border-white/10">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-300">Live</span>
                </div>
                <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                  <SettingsIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Context Suggestions */}
          <div className="bg-black/10 backdrop-blur-sm border-b border-white/5 p-4">
            <div className="flex gap-2 overflow-x-auto scrollbar-hide">
              {contextSuggestions.map((suggestion) => (
                <button
                  key={suggestion.id}
                  onClick={() => setSelectedContext(suggestion.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap context-chip ${
                    selectedContext === suggestion.id
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/25'
                      : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
                  }`}
                >
                  {suggestion.icon}
                  {suggestion.label}
                </button>
              ))}
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-2xl ${message.type === 'user' ? 'order-2' : 'order-1'}`}>
                                     {/* Avatar */}
                   {message.type === 'assistant' && (
                     <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-3 ai-avatar-glow glow">
                       <BotIcon className="h-5 w-5 text-white" />
                     </div>
                   )}
                  
                                     {/* Message Content */}
                   <div className={`rounded-2xl p-6 backdrop-blur-sm border message-bubble ${
                     message.type === 'user' 
                       ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-500/30 neon-blue' 
                       : 'bg-white/5 border-white/10 glass-card'
                   }`}>
                    <div className="prose prose-invert max-w-none">
                      <p className="text-white leading-relaxed">{message.content}</p>
                    </div>
                    
                    {/* Insights Cards */}
                    {message.insights && (
                      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                                                 {message.insights.map((insight, index) => (
                           <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all duration-300 hover-lift magnetic">
                            <div className="flex items-center gap-3 mb-2">
                              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                                insight.type === 'positive' ? 'bg-green-500/20' : 
                                insight.type === 'negative' ? 'bg-red-500/20' : 'bg-yellow-500/20'
                              }`}>
                                <div className={insight.type === 'positive' ? 'text-green-400' : 
                                               insight.type === 'negative' ? 'text-red-400' : 'text-yellow-400'}>
                                  {insight.icon}
                                </div>
                              </div>
                              <div>
                                <h4 className="text-sm font-medium">{insight.title}</h4>
                                <p className="text-lg font-bold">{insight.value}</p>
                              </div>
                            </div>
                            {insight.change && (
                              <p className="text-xs text-gray-400">{insight.change}</p>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {/* Recommendations */}
                    {message.recommendations && (
                      <div className="mt-4 space-y-3">
                                                 {message.recommendations.map((rec, index) => (
                           <div key={index} className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-xl p-4 border border-blue-500/20 hover-lift tool-card">
                            <div className="flex items-start justify-between mb-2">
                              <h4 className="font-medium">{rec.title}</h4>
                              <div className="flex items-center gap-2">
                                <div className="w-16 h-2 bg-white/10 rounded-full overflow-hidden">
                                  <div 
                                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000"
                                    style={{width: `${rec.confidence}%`}}
                                  ></div>
                                </div>
                                <span className="text-xs text-gray-400">{rec.confidence}%</span>
                              </div>
                            </div>
                            <p className="text-sm text-gray-300 mb-3">{rec.description}</p>
                            <button className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
                              {rec.action} →
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
            
            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="max-w-2xl">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-3">
                    <BotIcon className="h-5 w-5 text-white" />
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                    <div className="flex items-center gap-2">
                      <div className="waveform">
                        <div className="waveform-bar"></div>
                        <div className="waveform-bar"></div>
                        <div className="waveform-bar"></div>
                        <div className="waveform-bar"></div>
                        <div className="waveform-bar"></div>
                      </div>
                      <span className="text-sm text-gray-400">AI is thinking...</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="bg-black/20 backdrop-blur-xl border-t border-white/10 p-6">
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me about your portfolio, investment strategies, or market analysis..."
                  className="w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-6 py-4 pr-16 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 input-focus focus-glow"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isTyping}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center hover:from-blue-600 hover:to-purple-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed send-button"
                >
                  <SendIcon className="h-5 w-5 text-white" />
                </button>
              </div>
              
              {/* Quick Actions */}
              <div className="flex gap-2 mt-4 overflow-x-auto scrollbar-hide">
                <button className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-full text-sm border border-white/10 transition-colors whitespace-nowrap quick-action">
                  Analyze Portfolio
                </button>
                <button className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-full text-sm border border-white/10 transition-colors whitespace-nowrap quick-action">
                  Market Trends
                </button>
                <button className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-full text-sm border border-white/10 transition-colors whitespace-nowrap quick-action">
                  Risk Assessment
                </button>
                <button className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-full text-sm border border-white/10 transition-colors whitespace-nowrap quick-action">
                  Investment Ideas
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar - Tools */}
        <div className="w-80 bg-black/20 backdrop-blur-xl border-l border-white/10 p-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
              <SparklesIcon className="h-4 w-4 text-white" />
            </div>
            <h2 className="text-lg font-semibold">AI Tools</h2>
          </div>

          <div className="space-y-4">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10 cursor-pointer tool-card">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <BarChart3Icon className="h-4 w-4 text-blue-400" />
                </div>
                <h3 className="font-medium">Portfolio Analyzer</h3>
              </div>
              <p className="text-sm text-gray-400">Deep analysis of your holdings and performance</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10 cursor-pointer tool-card">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <TargetIcon className="h-4 w-4 text-green-400" />
                </div>
                <h3 className="font-medium">Risk Assessment</h3>
              </div>
              <p className="text-sm text-gray-400">Evaluate your portfolio's risk exposure</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10 cursor-pointer tool-card">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <BrainIcon className="h-4 w-4 text-purple-400" />
                </div>
                <h3 className="font-medium">AI Predictions</h3>
              </div>
              <p className="text-sm text-gray-400">Market forecasts and trend analysis</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10 cursor-pointer tool-card">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                  <ClockIcon className="h-4 w-4 text-yellow-400" />
                </div>
                <h3 className="font-medium">Market Timing</h3>
              </div>
              <p className="text-sm text-gray-400">Optimal entry and exit strategies</p>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="mt-8">
            <h3 className="text-sm font-medium mb-4">Recent Activity</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-gray-300">Portfolio rebalanced</span>
                <span className="text-gray-500 text-xs">2h ago</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-gray-300">New AI insights available</span>
                <span className="text-gray-500 text-xs">4h ago</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span className="text-gray-300">Risk assessment updated</span>
                <span className="text-gray-500 text-xs">1d ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper component for Globe icon
const GlobeIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
); 