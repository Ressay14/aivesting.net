import React, { useEffect, useState, useRef, Component } from 'react';
import { Link, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { LayoutDashboardIcon, WalletIcon, LineChartIcon, SettingsIcon, BellIcon, SearchIcon, UserIcon, ArrowRightIcon, MessageCircleIcon, XIcon, BarChart3Icon, PieChartIcon, TrendingUpIcon, DollarSignIcon, BrainIcon, NewspaperIcon, CalculatorIcon, TargetIcon, ShieldIcon, BarChart2Icon, HeartIcon, LogOutIcon, HelpCircleIcon, CreditCardIcon, UserCogIcon, BellOffIcon, CheckIcon, ChevronRightIcon, AlertTriangleIcon, ChevronLeftIcon, ChevronDownIcon, BarChartIcon, InfoIcon, TrendingDownIcon, ZapIcon, PlusIcon, RefreshCwIcon, MenuIcon, CrownIcon, BookOpenIcon, SparklesIcon } from 'lucide-react';
import { MarketProDashboard } from './dashboard/MarketProDashboard';
import WealthPulseDashboard from './dashboard/WealthPulseDashboard';
import { ToolsDashboard } from './dashboard/ToolsDashboard';
import { NewsDashboard } from './dashboard/NewsDashboard';
import { ToolDetail } from './dashboard/ToolDetail';
import { Markets } from './Markets';
import { PortfolioPage } from './PortfolioPage';
import { Footer } from './Footer';
import { AIAdvisor } from './dashboard/AIAdvisor';
import { UltraPlanFeatures } from './dashboard/UltraPlanFeatures';
import { KnowledgeHub } from './dashboard/KnowledgeHub';
import AICopilotDashboard from './dashboard/AICopilotDashboard';
interface OnboardingData {
  level: string;
  goals: string[];
  timeSpent: number;
}

export const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('marketpro');
  const [chatOpen, setChatOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isScrolled, setIsScrolled] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [tooltipVisible, setTooltipVisible] = useState<string | null>(null);
  const [onboardingDismissed, setOnboardingDismissed] = useState<string[]>([]);
  const [portfolioStats, setPortfolioStats] = useState({
    totalValue: '€24,395.00',
    dailyChange: '+3.2%',
    monthlyReturn: '+€1,245.50',
    riskLevel: 'Moderate',
    isLoading: false
  });
  const [onboarding, setOnboarding] = useState<OnboardingData | null>(null);
  const [showOnboardingBanner, setShowOnboardingBanner] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem('aivesting_onboarding');
    if (data) setOnboarding(JSON.parse(data));
    const dismissed = localStorage.getItem('aivesting_onboarding_banner_dismissed');
    setShowOnboardingBanner(!dismissed);
  }, []);
  const userMenuRef = useRef<HTMLDivElement>(null);
  const notificationRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();
  // Check if on mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth < 1024) {
        setSidebarCollapsed(true);
      }
    };
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);
  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setUserMenuOpen(false);
      }
      if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) {
        setNotificationsOpen(false);
      }
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setSearchOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  // Detect scroll for header effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  // Mock search functionality
  useEffect(() => {
    if (searchQuery.length > 1) {
      // Mock search results based on query
      const results = [{
        type: 'tool',
        name: 'Portfolio Optimization',
        path: '/dashboard/tools/portfolio-optimization'
      }, {
        type: 'tool',
        name: 'Risk Assessment',
        path: '/dashboard/tools/risk-assessment'
      }, {
        type: 'market',
        name: 'NASDAQ Composite',
        path: '/dashboard/markets'
      }, {
        type: 'stock',
        name: 'AAPL - Apple Inc.',
        path: '/dashboard/portfolio'
      }, {
        type: 'stock',
        name: 'TSLA - Tesla Inc.',
        path: '/dashboard/portfolio'
      }].filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()));
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);
  // Set active tab based on location
  useEffect(() => {
    const path = location.pathname;
    if (path.includes('/marketpro') || path === '/dashboard') {
      setActiveTab('marketpro');
    } else if (path.includes('/wealthpulse')) {
      setActiveTab('wealthpulse');
    } else if (path.includes('/tools')) {
      setActiveTab('tools');
    } else if (path.includes('/news')) {
      setActiveTab('news');
    }
  }, [location]);
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    navigate(`/dashboard/${tab}`);
    if (isMobile) {
      setMobileSidebarOpen(false);
    }
  };
  const handleSearchItemClick = (path: string) => {
    navigate(path);
    setSearchOpen(false);
    setSearchQuery('');
  };
  const handleLogout = () => {
    navigate('/login');
  };
  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };
  const toggleMobileSidebar = () => {
    setMobileSidebarOpen(!mobileSidebarOpen);
  };
  const dismissOnboarding = (id: string) => {
    setOnboardingDismissed([...onboardingDismissed, id]);
  };
  const onboardingTasks = [{
    id: 'connect-accounts',
    title: 'Connect your accounts',
    description: 'Link your bank accounts and investment platforms for a comprehensive view',
    icon: LinkIcon,
    color: 'blue',
    action: 'Connect now',
    path: '/dashboard/settings'
  }, {
    id: 'set-goals',
    title: 'Set your financial goals',
    description: 'Define your objectives to get personalized investment recommendations',
    icon: TargetIcon,
    color: 'green',
    action: 'Set goals',
    path: '/dashboard/advisor'
  }, {
    id: 'risk-profile',
    title: 'Complete risk profile',
    description: 'Answer a few questions to determine your investment risk tolerance',
    icon: ShieldIcon,
    color: 'yellow',
    action: 'Start assessment',
    path: '/dashboard/tools/risk-assessment'
  }].filter(task => !onboardingDismissed.includes(task.id));
  const refreshPortfolioData = () => {
    // Simulate loading
    const originalData = {
      ...portfolioStats
    };
    setPortfolioStats(prev => ({
      ...prev,
      isLoading: true
    }));
    // Simulate API call delay
    setTimeout(() => {
      setPortfolioStats({
        totalValue: '€24,395.00',
        dailyChange: '+3.2%',
        monthlyReturn: '+€1,245.50',
        riskLevel: 'Moderate',
        isLoading: false
      });
    }, 1500);
  };
  const handleDismissBanner = () => {
    setShowOnboardingBanner(false);
    localStorage.setItem('aivesting_onboarding_banner_dismissed', '1');
  };
  return <div className="min-h-screen w-full bg-[#0B0E15] text-white flex flex-col">
      {/* Dismissible floating onboarding banner */}
      {onboarding && showOnboardingBanner && (
        <div className="fixed top-8 right-8 z-50 max-w-md w-full shadow-2xl rounded-2xl bg-gradient-to-br from-yellow-500/90 to-blue-500/90 text-black p-6 animate-fadeIn flex flex-col gap-2 border-2 border-yellow-400/60">
          <button onClick={handleDismissBanner} className="absolute top-3 right-3 text-black/60 hover:text-black transition-colors"><XIcon className="h-5 w-5" /></button>
          <h2 className="text-lg font-bold mb-1">
            {onboarding.level === 'Beginner' && '👋 Welcome, Beginner!'}
            {onboarding.level === 'Intermediate' && '🚀 Welcome, Intermediate Investor!'}
            {onboarding.level === 'Expert' && '🎯 Welcome, Expert Trader!'}
          </h2>
          <p className="mb-1">
            {onboarding.level === 'Beginner' && 'Start with our educational resources and simple portfolio tools.'}
            {onboarding.level === 'Intermediate' && 'Explore analytics and optimize your investments with our advanced tools.'}
            {onboarding.level === 'Expert' && 'Access all pro features, advanced analytics, and custom strategies.'}
          </p>
          {onboarding.goals?.includes('Save') && (
            <div className="mb-1">💡 <span className="font-medium">Tip:</span> Check out the budgeting and savings tools to reach your goals faster.</div>
          )}
          {onboarding.goals?.includes('Invest') && (
            <div className="mb-1">📈 <span className="font-medium">Tip:</span> Dive into portfolio optimization and market analysis for smarter investing.</div>
          )}
          <div className="text-xs text-black/70 mt-1">
            {onboarding.timeSpent <= 5 && 'We’ll keep things concise for your busy schedule.'}
            {onboarding.timeSpent > 5 && onboarding.timeSpent <= 10 && 'You’ll see a balance of quick insights and deeper analytics.'}
            {onboarding.timeSpent > 10 && 'Enjoy detailed analytics and full access to all features!'}
          </div>
        </div>
      )}
      {/* Animated Background Element */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[40%] -left-[20%] w-[70%] h-[70%] bg-blue-900/5 rounded-full blur-[120px] animate-pulse" style={{
        animationDuration: '15s'
      }}></div>
        <div className="absolute -bottom-[30%] -right-[10%] w-[60%] h-[60%] bg-yellow-900/5 rounded-full blur-[120px] animate-pulse" style={{
        animationDuration: '25s'
      }}></div>
      </div>
      {/* Mobile Sidebar Overlay */}
      {isMobile && mobileSidebarOpen && <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden" onClick={toggleMobileSidebar}></div>}
      {/* Sidebar - Desktop & Mobile */}
      <aside className={`${isMobile ? `fixed inset-y-0 left-0 z-50 transform ${mobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out` : `fixed left-0 top-0 h-screen transform ${sidebarCollapsed ? 'w-20' : 'w-64'} transition-all duration-300 ease-in-out`} bg-[#151822]/90 backdrop-blur-md p-4 flex flex-col border-r border-gray-800/30 shadow-xl shadow-black/20 z-20`}>
        <div className={`mb-8 flex ${sidebarCollapsed && !isMobile ? 'justify-center' : 'justify-between'} items-center`}>
          <Link to="/" className={`${sidebarCollapsed && !isMobile ? 'justify-center' : ''} text-2xl font-bold flex items-center transition-transform hover:scale-[1.02] duration-200`}>
            {sidebarCollapsed && !isMobile ? <span className="text-yellow-500 bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-300">
                A
              </span> : <>
                <span className="text-yellow-500 bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-300">
                  AI
                </span>
                Vesting
                <span className="text-yellow-500 animate-pulse">.</span>
              </>}
          </Link>
          {isMobile && <button onClick={toggleMobileSidebar} className="text-gray-400 hover:text-white p-1">
              <XIcon className="h-6 w-6" />
            </button>}
        </div>
        <nav className="space-y-1 mb-4">
          <Link to="/dashboard" className={`flex ${sidebarCollapsed && !isMobile ? 'justify-center' : ''} items-center gap-3 text-yellow-500 bg-gradient-to-r from-yellow-500/10 to-yellow-500/5 px-4 py-3 rounded-lg hover:bg-yellow-500/20 transition-all duration-200 group relative overflow-hidden`}>
            <div className="absolute inset-0 bg-yellow-500/10 w-0 group-hover:w-full transition-all duration-300 ease-out"></div>
            <LayoutDashboardIcon className="h-5 w-5 relative z-10 transition-transform group-hover:scale-110 duration-200" />
            {(!sidebarCollapsed || isMobile) && <span className="relative z-10">Dashboard</span>}
          </Link>
          <Link to="/dashboard/portfolio" className={`flex ${sidebarCollapsed && !isMobile ? 'justify-center' : ''} items-center gap-3 text-gray-400 hover:bg-[#1E2230] px-4 py-3 rounded-lg transition-all duration-200 hover:text-white group`}>
            <WalletIcon className="h-5 w-5 transition-transform group-hover:scale-110 duration-200" />
            {(!sidebarCollapsed || isMobile) && <span>Portfolio</span>}
          </Link>
          <Link to="/dashboard/markets" className={`flex ${sidebarCollapsed && !isMobile ? 'justify-center' : ''} items-center gap-3 text-gray-400 hover:bg-[#1E2230] px-4 py-3 rounded-lg transition-all duration-200 hover:text-white group`}>
            <LineChartIcon className="h-5 w-5 transition-transform group-hover:scale-110 duration-200" />
            {(!sidebarCollapsed || isMobile) && <span>Markets</span>}
          </Link>
          <Link to="/dashboard/advisor" className={`flex ${sidebarCollapsed && !isMobile ? 'justify-center' : ''} items-center gap-3 text-gray-400 hover:bg-[#1E2230] px-4 py-3 rounded-lg transition-all duration-200 hover:text-white group`}>
            <BrainIcon className="h-5 w-5 transition-transform group-hover:scale-110 duration-200" />
            {(!sidebarCollapsed || isMobile) && <span>AI Advisor</span>}
          </Link>
          <button onClick={() => handleTabChange('advisor')} className={`w-full flex ${sidebarCollapsed && !isMobile ? 'justify-center' : ''} items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group relative
              ${activeTab === 'advisor' ? 'bg-gradient-to-r from-blue-500/20 to-blue-500/5 text-blue-400' : 'text-gray-400 hover:bg-[#1E2230] hover:text-white'}`}>
            <SparklesIcon className={`h-5 w-5 transition-transform group-hover:scale-110 duration-200 ${activeTab === 'advisor' ? 'animate-pulse' : ''}`} />
            {(!sidebarCollapsed || isMobile) && <span>Premium AI Assistant</span>}
            <div className="absolute -top-1 -right-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs px-1.5 py-0.5 rounded-full font-bold">
              NEW
            </div>
          </button>
          <Link to="/dashboard/knowledge" className={`flex ${sidebarCollapsed && !isMobile ? 'justify-center' : ''} items-center gap-3 text-gray-400 hover:bg-[#1E2230] px-4 py-3 rounded-lg transition-all duration-200 hover:text-white group`} title="Your personalized learning center">
            <BookOpenIcon className="h-5 w-5 transition-transform group-hover:scale-110 duration-200" />
            {(!sidebarCollapsed || isMobile) && <span>Knowledge Hub</span>}
          </Link>
          <Link to="/dashboard/ultra-plan" className={`flex ${sidebarCollapsed && !isMobile ? 'justify-center' : ''} items-center gap-3 text-gray-400 hover:bg-[#1E2230] px-4 py-3 rounded-lg transition-all duration-200 hover:text-white group relative`}>
            <CrownIcon className="h-5 w-5 transition-transform group-hover:scale-110 duration-200" />
            {(!sidebarCollapsed || isMobile) && <span>Ultra Plan™</span>}
            <div className="absolute -top-1 -right-1 bg-gradient-to-r from-yellow-500 to-yellow-400 text-black text-xs px-1.5 py-0.5 rounded-full font-bold">
              PRO
            </div>
          </Link>
          <Link to="/dashboard/settings" className={`flex ${sidebarCollapsed && !isMobile ? 'justify-center' : ''} items-center gap-3 text-gray-400 hover:bg-[#1E2230] px-4 py-3 rounded-lg transition-all duration-200 hover:text-white group`}>
            <SettingsIcon className="h-5 w-5 transition-transform group-hover:scale-110 duration-200" />
            {(!sidebarCollapsed || isMobile) && <span>Settings</span>}
          </Link>
        </nav>
        <div className="border-t border-gray-800/50 pt-4 mb-4">
          {(!sidebarCollapsed || isMobile) && <h3 className="text-xs uppercase text-gray-500 font-medium px-4 mb-2">
              Products
            </h3>}
          <nav className="space-y-1">
            <button onClick={() => handleTabChange('marketpro')} className={`w-full flex ${sidebarCollapsed && !isMobile ? 'justify-center' : ''} items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group
                ${activeTab === 'marketpro' ? 'bg-gradient-to-r from-blue-500/20 to-blue-500/5 text-blue-400' : 'text-gray-400 hover:bg-[#1E2230] hover:text-white'}`}>
              <BarChart3Icon className={`h-5 w-5 transition-transform group-hover:scale-110 duration-200 ${activeTab === 'marketpro' ? 'animate-pulse' : ''}`} />
              {(!sidebarCollapsed || isMobile) && <span>MarketPro™</span>}
            </button>
            <button onClick={() => handleTabChange('wealthpulse')} className={`w-full flex ${sidebarCollapsed && !isMobile ? 'justify-center' : ''} items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group
                ${activeTab === 'wealthpulse' ? 'bg-gradient-to-r from-purple-500/20 to-purple-500/5 text-purple-400' : 'text-gray-400 hover:bg-[#1E2230] hover:text-white'}`}>
              <PieChartIcon className={`h-5 w-5 transition-transform group-hover:scale-110 duration-200 ${activeTab === 'wealthpulse' ? 'animate-pulse' : ''}`} />
              {(!sidebarCollapsed || isMobile) && <span>WealthPulse™</span>}
            </button>
            <button onClick={() => handleTabChange('tools')} className={`w-full flex ${sidebarCollapsed && !isMobile ? 'justify-center' : ''} items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group
                ${activeTab === 'tools' ? 'bg-gradient-to-r from-green-500/20 to-green-500/5 text-green-400' : 'text-gray-400 hover:bg-[#1E2230] hover:text-white'}`}>
              <CalculatorIcon className={`h-5 w-5 transition-transform group-hover:scale-110 duration-200 ${activeTab === 'tools' ? 'animate-pulse' : ''}`} />
              {(!sidebarCollapsed || isMobile) && <span>Tools</span>}
            </button>
            <button onClick={() => handleTabChange('news')} className={`w-full flex ${sidebarCollapsed && !isMobile ? 'justify-center' : ''} items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group
                ${activeTab === 'news' ? 'bg-gradient-to-r from-red-500/20 to-red-500/5 text-red-400' : 'text-gray-400 hover:bg-[#1E2230] hover:text-white'}`}>
              <NewspaperIcon className={`h-5 w-5 transition-transform group-hover:scale-110 duration-200 ${activeTab === 'news' ? 'animate-pulse' : ''}`} />
              {(!sidebarCollapsed || isMobile) && <span>News</span>}
            </button>

          </nav>
        </div>
        {/* Sidebar Footer - User Profile */}
        <div className="mt-auto">
          {!sidebarCollapsed || isMobile ? <div className="bg-[#1E2230] rounded-lg p-4 border border-gray-800/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-gray-700/50 group">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-gradient-to-br from-yellow-500 to-yellow-400 rounded-full p-1 shadow-lg shadow-yellow-500/20 group-hover:shadow-yellow-500/40 transition-all duration-300 group-hover:scale-105">
                  <UserIcon className="h-5 w-5 text-[#151822]" />
                </div>
                <div>
                  <div className="font-medium">Yasser Ouchrif</div>
                  <div className="flex items-center text-xs">
                    <span className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-black px-1.5 py-0.5 rounded mr-1 font-medium shadow-sm">
                      Metal
                    </span>
                    <span className="text-gray-400">Plan</span>
                  </div>
                </div>
              </div>
              <Link to="/dashboard/settings" className="text-xs text-gray-400 flex items-center hover:text-yellow-500 transition-colors mt-1 group">
                <span>Account Settings</span>
                <ArrowRightIcon className="h-3 w-3 ml-1 transform group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div> : <div className="flex justify-center">
              <div className="bg-gradient-to-br from-yellow-500 to-yellow-400 rounded-full p-2 shadow-lg shadow-yellow-500/20 hover:shadow-yellow-500/40 transition-all duration-300 hover:scale-105 cursor-pointer">
                <UserIcon className="h-5 w-5 text-[#151822]" />
              </div>
            </div>}
        </div>
        {/* Sidebar Toggle Button */}
        {!isMobile && <button className="absolute -right-3 top-20 bg-[#151822] border border-gray-800/50 rounded-full p-1 text-gray-400 hover:text-white transition-colors shadow-md hover:shadow-lg" onClick={toggleSidebar}>
            {sidebarCollapsed ? <ChevronRightIcon className="h-4 w-4" /> : <ChevronLeftIcon className="h-4 w-4" />}
          </button>}
      </aside>
      {/* Main content */}
      <main className={`${isMobile ? 'ml-0' : sidebarCollapsed ? 'ml-20' : 'ml-64'} flex-1 flex flex-col min-h-screen relative z-10 transition-all duration-300`}>
        {/* Floating KPI Header */}
        <div className={`fixed ${isMobile ? 'left-0' : sidebarCollapsed ? 'left-20' : 'left-64'} right-0 top-0 z-30 transition-all duration-300 transform ${isScrolled ? 'translate-y-0' : '-translate-y-full'}`}>
          <div className="bg-[#151822]/90 backdrop-blur-md border-b border-gray-800/30 shadow-lg">
            <div className="container mx-auto p-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="relative group">
                    <div className="bg-[#1A1F2E] p-2 rounded-lg">
                      <div className="text-xs text-gray-400">Total Value</div>
                      <div className="font-medium flex items-center gap-1">
                        {portfolioStats.isLoading ? <RefreshCwIcon className="h-3 w-3 animate-spin text-blue-500" /> : portfolioStats.totalValue}
                      </div>
                    </div>
                    <div className="absolute left-0 top-full mt-2 bg-[#1A1F2E]/95 backdrop-blur-md rounded-lg p-3 shadow-lg border border-gray-800/50 text-sm w-64 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 z-10">
                      <h4 className="font-medium mb-1">
                        Total Portfolio Value
                      </h4>
                      <p className="text-gray-400 text-xs mb-2">
                        Your combined assets across all connected accounts
                      </p>
                      <div className="flex items-center gap-2 text-xs">
                        <ZapIcon className="h-3 w-3 text-blue-500" />
                        <span>Last updated: 15 minutes ago</span>
                      </div>
                    </div>
                  </div>
                  <div className="relative group">
                    <div className="bg-[#1A1F2E] p-2 rounded-lg">
                      <div className="text-xs text-gray-400">Daily Change</div>
                      <div className="font-medium flex items-center gap-1 text-green-500">
                        {portfolioStats.isLoading ? <RefreshCwIcon className="h-3 w-3 animate-spin" /> : <>
                            <TrendingUpIcon className="h-3 w-3" />
                            {portfolioStats.dailyChange}
                          </>}
                      </div>
                    </div>
                    <div className="absolute left-0 top-full mt-2 bg-[#1A1F2E]/95 backdrop-blur-md rounded-lg p-3 shadow-lg border border-gray-800/50 text-sm w-64 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 z-10">
                      <h4 className="font-medium mb-1">Today's Performance</h4>
                      <p className="text-gray-400 text-xs">
                        Your portfolio has gained 3.2% (€780.64) since market
                        open
                      </p>
                    </div>
                  </div>
                  {!isMobile && <>
                      <div className="relative group">
                        <div className="bg-[#1A1F2E] p-2 rounded-lg">
                          <div className="text-xs text-gray-400">
                            Monthly Return
                          </div>
                          <div className="font-medium flex items-center gap-1 text-green-500">
                            {portfolioStats.isLoading ? <RefreshCwIcon className="h-3 w-3 animate-spin" /> : portfolioStats.monthlyReturn}
                          </div>
                        </div>
                        <div className="absolute left-0 top-full mt-2 bg-[#1A1F2E]/95 backdrop-blur-md rounded-lg p-3 shadow-lg border border-gray-800/50 text-sm w-64 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 z-10">
                          <h4 className="font-medium mb-1">
                            Monthly Performance
                          </h4>
                          <p className="text-gray-400 text-xs">
                            Your portfolio has gained €1,245.50 (5.1%) in the
                            past 30 days
                          </p>
                        </div>
                      </div>
                      <div className="relative group">
                        <div className="bg-[#1A1F2E] p-2 rounded-lg">
                          <div className="text-xs text-gray-400">
                            Risk Level
                          </div>
                          <div className="font-medium flex items-center gap-1 text-yellow-500">
                            {portfolioStats.isLoading ? <RefreshCwIcon className="h-3 w-3 animate-spin" /> : portfolioStats.riskLevel}
                          </div>
                        </div>
                        <div className="absolute left-0 top-full mt-2 bg-[#1A1F2E]/95 backdrop-blur-md rounded-lg p-3 shadow-lg border border-gray-800/50 text-sm w-64 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 z-10">
                          <h4 className="font-medium mb-1">Risk Analysis</h4>
                          <p className="text-gray-400 text-xs mb-2">
                            Your portfolio has a moderate risk level with a
                            volatility of 12.4%
                          </p>
                          <div className="w-full bg-[#151822] rounded-full h-1.5 mb-1">
                            <div className="bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 h-1.5 rounded-full w-3/5"></div>
                          </div>
                          <div className="flex justify-between text-xs text-gray-400">
                            <span>Low</span>
                            <span>Moderate</span>
                            <span>High</span>
                          </div>
                        </div>
                      </div>
                    </>}
                </div>
                <button onClick={refreshPortfolioData} className="bg-[#1A1F2E] p-1 rounded text-gray-400 hover:text-white transition-colors" title="Refresh data">
                  <RefreshCwIcon className={`h-4 w-4 ${portfolioStats.isLoading ? 'animate-spin text-blue-500' : ''}`} />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Header */}
        <header className={`bg-[#151822]/80 backdrop-blur-md border-b border-gray-800/30 p-4 sticky top-0 z-20 shadow-md transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              {isMobile && <button onClick={toggleMobileSidebar} className="p-2 rounded-lg bg-[#1A1F2E] mr-2 text-gray-400 hover:text-white">
                  <MenuIcon className="h-5 w-5" />
                </button>}
              <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                {activeTab === 'marketpro' && 'MarketPro™ Dashboard'}
                {activeTab === 'wealthpulse' && 'WealthPulse™ Dashboard'}
                {activeTab === 'tools' && 'Financial Tools'}
                {activeTab === 'news' && 'Market News & Analysis'}
              </h1>
              {activeTab === 'marketpro' && <div className="bg-blue-500/10 text-blue-400 text-xs px-2 py-1 rounded-full flex items-center gap-1 cursor-help" onMouseEnter={() => setTooltipVisible('marketpro')} onMouseLeave={() => setTooltipVisible(null)}>
                  <InfoIcon className="h-3 w-3" />
                  <span>AI-Powered</span>
                  {tooltipVisible === 'marketpro' && <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-[#1A1F2E]/95 backdrop-blur-md rounded-lg p-3 shadow-lg border border-gray-800/50 text-sm w-64 z-30 animate-fadeIn">
                      <h4 className="font-medium mb-1">MarketPro™</h4>
                      <p className="text-gray-400 text-xs">
                        Our premium market analysis tool uses AI to provide
                        real-time insights, trading signals, and portfolio
                        recommendations.
                      </p>
                    </div>}
                </div>}
              {activeTab === 'wealthpulse' && <div className="bg-purple-500/10 text-purple-400 text-xs px-2 py-1 rounded-full flex items-center gap-1 cursor-help" onMouseEnter={() => setTooltipVisible('wealthpulse')} onMouseLeave={() => setTooltipVisible(null)}>
                  <InfoIcon className="h-3 w-3" />
                  <span>Financial Health</span>
                  {tooltipVisible === 'wealthpulse' && <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-[#1A1F2E]/95 backdrop-blur-md rounded-lg p-3 shadow-lg border border-gray-800/50 text-sm w-64 z-30 animate-fadeIn">
                      <h4 className="font-medium mb-1">WealthPulse™</h4>
                      <p className="text-gray-400 text-xs">
                        Track your spending, monitor budgets, and visualize your
                        complete financial picture with our comprehensive wealth
                        management tool.
                      </p>
                    </div>}
                </div>}
            </div>
            <div className="flex items-center gap-2 md:gap-4">
              {/* Search Component */}
              <div className="relative" ref={searchRef}>
                <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input type="text" placeholder="Search..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} onFocus={() => setSearchOpen(true)} className="bg-[#0B0E15]/80 backdrop-blur-sm rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500/50 w-40 md:w-64 transition-all duration-200 border border-gray-800/30 hover:border-gray-700/50 focus:border-yellow-500/30 shadow-inner" />
                {/* Search Results Dropdown */}
                {searchOpen && <div className="absolute top-full mt-2 w-full bg-[#1A1F2E]/95 backdrop-blur-md rounded-lg shadow-xl border border-gray-800/50 overflow-hidden z-30 transition-all duration-300 animate-fadeIn">
                    {searchResults.length > 0 ? <div className="max-h-72 overflow-y-auto custom-scrollbar">
                        {searchResults.map((result, index) => <div key={index} onClick={() => handleSearchItemClick(result.path)} className="px-4 py-3 hover:bg-[#151822] cursor-pointer flex items-center gap-3 border-b border-gray-800/30 last:border-b-0 transition-colors duration-150">
                            {result.type === 'tool' && <CalculatorIcon className="h-4 w-4 text-green-500" />}
                            {result.type === 'market' && <LineChartIcon className="h-4 w-4 text-blue-500" />}
                            {result.type === 'stock' && <TrendingUpIcon className="h-4 w-4 text-yellow-500" />}
                            <div>
                              <div className="text-sm">{result.name}</div>
                              <div className="text-xs text-gray-400 capitalize">
                                {result.type}
                              </div>
                            </div>
                            <ChevronRightIcon className="h-4 w-4 text-gray-500 ml-auto transform group-hover:translate-x-1 transition-transform" />
                          </div>)}
                      </div> : <div className="p-4 text-center text-gray-400 text-sm">
                        {searchQuery.length > 0 ? 'No results found' : 'Type to search'}
                      </div>}
                  </div>}
              </div>
              {/* Premium AI Assistant Button */}
              <button 
                onClick={() => navigate('/ai-assistant')}
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl"
              >
                <SparklesIcon className="h-4 w-4" />
                <span className="hidden md:inline">AI Assistant</span>
              </button>
              {/* Notifications Button */}
              <div className="relative" ref={notificationRef}>
                <button className="relative p-2 bg-[#0B0E15]/80 backdrop-blur-sm rounded-lg hover:bg-[#1A1F2E] transition-colors duration-200 border border-gray-800/30 hover:border-gray-700/50 group shadow-sm hover:shadow-md" onClick={() => setNotificationsOpen(!notificationsOpen)}>
                  <BellIcon className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors duration-200" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-yellow-500 rounded-full ring-2 ring-[#0B0E15] animate-pulse"></span>
                </button>
                {/* Notifications Dropdown */}
                {notificationsOpen && <div className="absolute right-0 mt-2 w-80 bg-[#1A1F2E]/95 backdrop-blur-md rounded-lg shadow-xl border border-gray-800/50 overflow-hidden z-30 animate-fadeIn">
                    <div className="p-4 border-b border-gray-800/30 flex justify-between items-center">
                      <h3 className="font-medium">Notifications</h3>
                      <div className="flex gap-2">
                        <button className="text-xs bg-[#151822] px-2 py-1 rounded text-gray-400 hover:text-white transition-colors duration-200 hover:bg-[#0B0E15]">
                          Mark all read
                        </button>
                        <button className="text-xs bg-[#151822] p-1 rounded text-gray-400 hover:text-white transition-colors duration-200 hover:bg-[#0B0E15]">
                          <BellOffIcon className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                    <div className="max-h-80 overflow-y-auto custom-scrollbar">
                      <div className="p-4 border-b border-gray-800/30 hover:bg-[#151822] cursor-pointer transition-colors duration-150">
                        <div className="flex gap-3">
                          <div className="bg-yellow-500/10 p-2 rounded-full">
                            <TrendingUpIcon className="h-4 w-4 text-yellow-500" />
                          </div>
                          <div>
                            <p className="text-sm">AAPL is up 3.2% today</p>
                            <p className="text-xs text-gray-400 mt-1">
                              15 minutes ago
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="p-4 border-b border-gray-800/30 hover:bg-[#151822] cursor-pointer transition-colors duration-150">
                        <div className="flex gap-3">
                          <div className="bg-red-500/10 p-2 rounded-full">
                            <AlertTriangleIcon className="h-4 w-4 text-red-500" />
                          </div>
                          <div>
                            <p className="text-sm">
                              Portfolio allocation drift detected
                            </p>
                            <p className="text-xs text-gray-400 mt-1">
                              2 hours ago
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="p-4 hover:bg-[#151822] cursor-pointer transition-colors duration-150">
                        <div className="flex gap-3">
                          <div className="bg-blue-500/10 p-2 rounded-full">
                            <BrainIcon className="h-4 w-4 text-blue-500" />
                          </div>
                          <div>
                            <p className="text-sm">
                              New AI insights available for your portfolio
                            </p>
                            <p className="text-xs text-gray-400 mt-1">
                              Yesterday
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 border-t border-gray-800/30 text-center">
                      <button className="text-sm text-yellow-500 hover:text-yellow-400 transition-colors duration-200 hover:underline">
                        View all notifications
                      </button>
                    </div>
                  </div>}
              </div>
              {/* User Menu Button */}
              <div className="relative" ref={userMenuRef}>
                <button className="flex items-center gap-2 p-1 hover:bg-[#1A1F2E] rounded-lg transition-colors duration-200 group" onClick={() => setUserMenuOpen(!userMenuOpen)}>
                  <div className="bg-gradient-to-br from-yellow-500 to-yellow-400 rounded-full p-1 shadow-lg shadow-yellow-500/10 group-hover:shadow-yellow-500/30 transition-all duration-300 group-hover:scale-105">
                    <UserIcon className="h-5 w-5 text-[#151822]" />
                  </div>
                </button>
                {/* User Menu Dropdown */}
                {userMenuOpen && <div className="absolute right-0 mt-2 w-64 bg-[#1A1F2E]/95 backdrop-blur-md rounded-lg shadow-xl border border-gray-800/50 overflow-hidden z-30 animate-fadeIn">
                    <div className="p-4 border-b border-gray-800/30">
                      <div className="flex items-center gap-3">
                        <div className="bg-gradient-to-br from-yellow-500 to-yellow-400 rounded-full p-2 shadow-lg shadow-yellow-500/10">
                          <UserIcon className="h-6 w-6 text-[#151822]" />
                        </div>
                        <div>
                          <div className="font-medium">Yasser Ouchrif</div>
                          <div className="text-xs text-gray-400">
                            yasser@example.com
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="py-2">
                      <button onClick={() => {
                    navigate('/dashboard/settings');
                    setUserMenuOpen(false);
                  }} className="w-full text-left px-4 py-2 hover:bg-[#151822] transition-colors duration-150 flex items-center gap-3 group">
                        <UserCogIcon className="h-4 w-4 text-gray-400 group-hover:text-white transition-colors duration-200" />
                        <span>Account Settings</span>
                      </button>
                      <button onClick={() => {
                    navigate('/dashboard/settings');
                    setUserMenuOpen(false);
                  }} className="w-full text-left px-4 py-2 hover:bg-[#151822] transition-colors duration-150 flex items-center gap-3 group">
                        <CreditCardIcon className="h-4 w-4 text-gray-400 group-hover:text-white transition-colors duration-200" />
                        <span>Billing</span>
                      </button>
                      <button className="w-full text-left px-4 py-2 hover:bg-[#151822] transition-colors duration-150 flex items-center gap-3 group">
                        <HelpCircleIcon className="h-4 w-4 text-gray-400 group-hover:text-white transition-colors duration-200" />
                        <span>Help & Support</span>
                      </button>
                    </div>
                    <div className="p-2 border-t border-gray-800/30">
                      <button onClick={handleLogout} className="w-full text-left px-4 py-2 hover:bg-[#151822] transition-colors duration-150 flex items-center gap-3 text-red-400 hover:text-red-300 group">
                        <LogOutIcon className="h-4 w-4 transition-transform group-hover:translate-x-1 duration-200" />
                        <span>Log out</span>
                      </button>
                    </div>
                  </div>}
              </div>
            </div>
          </div>
        </header>
        {/* Dashboard Content */}
        <div className="p-4 md:p-6 flex-grow">
          {/* Onboarding Tasks */}
          {onboardingTasks.length > 0 && <div className="mb-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {onboardingTasks.map(task => <div key={task.id} className={`bg-[#151822] rounded-xl border border-${task.color}-500/20 p-4 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group`}>
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-${task.color}-500/5 rounded-full blur-xl`}></div>
                    <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-300 transition-colors z-10" onClick={() => dismissOnboarding(task.id)}>
                      <XIcon className="h-4 w-4" />
                    </button>
                    <div className="flex items-start gap-3 relative z-10">
                      <div className={`bg-${task.color}-500/10 p-2 rounded-lg`}>
                        <task.icon className={`h-5 w-5 text-${task.color}-500`} />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">{task.title}</h3>
                        <p className="text-sm text-gray-400 mb-3">
                          {task.description}
                        </p>
                        <Link to={task.path} className={`inline-flex items-center gap-1 text-sm text-${task.color}-500 font-medium group-hover:underline`}>
                          {task.action}
                          <ArrowRightIcon className="h-3 w-3 transform group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>)}
              </div>
            </div>}
          {/* Main Dashboard Content */}
          <Routes>
            <Route path="/" element={<MarketProDashboard />} />
            <Route path="/marketpro" element={<MarketProDashboard />} />
            <Route path="/wealthpulse" element={<WealthPulseDashboard />} />
            <Route path="/tools" element={<ToolsDashboard />} />
            <Route path="/tools/:toolId" element={<ToolDetail />} />
            <Route path="/news" element={<NewsDashboard />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/markets" element={<Markets />} />
            <Route path="/advisor" element={<AIAdvisor />} />
            <Route path="/knowledge" element={<KnowledgeHub />} />
            <Route path="/ultra-plan" element={<UltraPlanFeatures />} />
            <Route path="/ai-assistant" element={<AICopilotDashboard />} />
          </Routes>
        </div>
        {/* Footer */}
        <Footer />
      </main>
      {/* AI Assistant Chat */}
      <div className={`fixed bottom-6 right-6 z-20 transition-all duration-500 ${chatOpen ? 'w-80' : 'w-auto'}`}>
        {chatOpen ? <div className="bg-[#151822]/95 backdrop-blur-md rounded-xl shadow-2xl overflow-hidden flex flex-col border border-gray-800/30 animate-fadeIn">
            <div className="bg-[#1A1F2E] p-3 flex justify-between items-center border-b border-gray-800/30">
              <div className="flex items-center gap-2">
                <div className="bg-gradient-to-br from-yellow-500 to-yellow-400 rounded-full p-1 shadow-lg">
                  <BrainIcon className="h-4 w-4 text-[#151822]" />
                </div>
                <h3 className="font-medium">AI Financial Assistant</h3>
              </div>
              <button onClick={() => setChatOpen(false)} className="text-gray-400 hover:text-white transition-colors duration-200">
                <XIcon className="h-5 w-5" />
              </button>
            </div>
            <div className="h-80 p-4 overflow-y-auto flex flex-col gap-3 bg-[#0B0E15]/80 backdrop-blur-sm custom-scrollbar">
              <div className="bg-[#1E2230] p-3 rounded-lg max-w-[80%] shadow-md animate-fadeInLeft" style={{
            animationDelay: '0.1s'
          }}>
                <p className="text-sm">
                  Hello Yasser! How can I help with your finances today?
                </p>
              </div>
              <div className="bg-gradient-to-r from-yellow-500/20 to-yellow-500/10 p-3 rounded-lg max-w-[80%] self-end shadow-md animate-fadeInRight" style={{
            animationDelay: '0.3s'
          }}>
                <p className="text-sm">
                  What's my current portfolio risk level?
                </p>
              </div>
              <div className="bg-[#1E2230] p-3 rounded-lg max-w-[80%] shadow-md animate-fadeInLeft" style={{
            animationDelay: '0.5s'
          }}>
                <p className="text-sm">
                  Your portfolio currently has a{' '}
                  <span className="text-yellow-500 font-medium">
                    moderate risk level
                  </span>
                  . Your equity allocation is slightly higher than recommended
                  for your risk tolerance. Would you like me to suggest some
                  adjustments?
                </p>
              </div>
            </div>
            <div className="p-3 border-t border-gray-800/30 flex gap-2">
              <input type="text" placeholder="Ask about your finances..." className="flex-1 bg-[#0B0E15]/80 backdrop-blur-sm rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500/50 border border-gray-800/30 focus:border-yellow-500/30 transition-all duration-200 shadow-inner" />
              <button className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-black rounded-lg p-2 shadow-lg hover:shadow-yellow-500/20 hover:from-yellow-400 hover:to-yellow-300 transition-all duration-300 transform hover:scale-105">
                <ArrowRightIcon className="h-5 w-5" />
              </button>
            </div>
          </div> : <button onClick={() => setChatOpen(true)} className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-black rounded-full p-3 shadow-lg hover:shadow-yellow-500/30 hover:from-yellow-400 hover:to-yellow-300 transition-all duration-300 transform hover:scale-110 animate-bounce" style={{
        animationDuration: '2s'
      }}>
            <MessageCircleIcon className="h-6 w-6" />
          </button>}
      </div>
      {/* Custom Scrollbar Styles */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
          height: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #1a1f2e;
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #2d3748;
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #4a5568;
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
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
        .animate-fadeInLeft {
          animation: fadeInLeft 0.3s ease-out forwards;
        }
        .animate-fadeInRight {
          animation: fadeInRight 0.3s ease-out forwards;
        }
      `}</style>
    </div>;
};
// Additional icons
const LinkIcon = ({
  className
}: {
  className?: string;
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
  </svg>;