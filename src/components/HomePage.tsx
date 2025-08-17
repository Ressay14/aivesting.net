import React, { useState } from 'react';
import { Navigation } from './Navigation';
import { ArrowRightIcon, PlayIcon, UsersIcon, LineChartIcon, ClockIcon, BrainIcon, StarIcon, BarChart2Icon, PieChartIcon, ShieldIcon, TrendingUpIcon, LightbulbIcon, TargetIcon, BellIcon, CloudIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Footer } from './Footer';

// Dashboard image path
const dashboardImagePath = '/wealthpulse-dashboard.png';

function FeaturesSection() {
  return (
    <section id="features" className="relative py-20 px-6 md:px-16 lg:px-24 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center mb-10 drop-shadow-lg">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-gradient-to-br from-[#181C2A]/80 to-[#23263A]/80 rounded-2xl shadow-xl p-8 border border-blue-500/10 flex flex-col items-center text-center backdrop-blur-xl">
            <PieChartIcon className="h-10 w-10 text-blue-400 mb-4 animate-pulse" />
            <h3 className="text-xl font-bold text-white mb-2">AI Portfolio Optimization</h3>
            <p className="text-blue-100/90">Let advanced AI optimize your asset allocation for maximum returns and minimum risk, with real-time, animated insights.</p>
          </div>
          {/* Feature 2 */}
          <div className="bg-gradient-to-br from-[#181C2A]/80 to-[#23263A]/80 rounded-2xl shadow-xl p-8 border border-yellow-500/10 flex flex-col items-center text-center backdrop-blur-xl">
            <BellIcon className="h-10 w-10 text-yellow-400 mb-4 animate-bounce" />
            <h3 className="text-xl font-bold text-white mb-2">Real-Time Alerts</h3>
            <p className="text-blue-100/90">Get instant, AI-powered alerts for market opportunities, portfolio changes, and risk events—never miss a beat.</p>
          </div>
          {/* Feature 3 */}
          <div className="bg-gradient-to-br from-[#181C2A]/80 to-[#23263A]/80 rounded-2xl shadow-xl p-8 border border-green-500/10 flex flex-col items-center text-center backdrop-blur-xl">
            <BarChart2Icon className="h-10 w-10 text-green-400 mb-4 animate-pulse" />
            <h3 className="text-xl font-bold text-white mb-2">Sentiment Analysis</h3>
            <p className="text-blue-100/90">Track market sentiment across sectors and assets, powered by real-time news and social data.</p>
          </div>
          {/* Feature 4 */}
          <div className="bg-gradient-to-br from-[#181C2A]/80 to-[#23263A]/80 rounded-2xl shadow-xl p-8 border border-purple-500/10 flex flex-col items-center text-center backdrop-blur-xl">
            <BrainIcon className="h-10 w-10 text-purple-400 mb-4 animate-bounce" />
            <h3 className="text-xl font-bold text-white mb-2">Personalized Insights</h3>
            <p className="text-blue-100/90">Receive actionable, plain-English insights tailored to your goals, risk, and experience level.</p>
          </div>
          {/* Feature 5 */}
          <div className="bg-gradient-to-br from-[#181C2A]/80 to-[#23263A]/80 rounded-2xl shadow-xl p-8 border border-teal-500/10 flex flex-col items-center text-center backdrop-blur-xl">
            <CloudIcon className="h-10 w-10 text-teal-400 mb-4 animate-pulse" />
            <h3 className="text-xl font-bold text-white mb-2">Secure Cloud Sync</h3>
            <p className="text-blue-100/90">Your data is encrypted and securely synced across devices, with full privacy and control.</p>
          </div>
          {/* Feature 6 */}
          <div className="bg-gradient-to-br from-[#181C2A]/80 to-[#23263A]/80 rounded-2xl shadow-xl p-8 border border-pink-500/10 flex flex-col items-center text-center backdrop-blur-xl">
            <ArrowRightIcon className="h-10 w-10 text-pink-400 mb-4 animate-bounce" />
            <h3 className="text-xl font-bold text-white mb-2">Easy Onboarding</h3>
            <p className="text-blue-100/90">Get started in minutes with a friendly, guided onboarding flow—no finance background required.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomePage() {
  const navigate = useNavigate();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  const handleGetStarted = () => {
    navigate('/login');
  };
  return <div className="min-h-screen w-full bg-[#0B0E15] text-white">
      <Navigation />
      {/* Hero Section */}
      <section className="relative py-24 px-6 md:px-16 lg:px-24 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/10 to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative z-10">
              <div className="mb-6">
                <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">
                  <span>Track.</span>
                  <span className="text-yellow-500 block md:inline">
                    {' '}
                    Optimize.
                  </span>
                  <span className="block md:inline"> Invest.</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed mt-6">
                  Plan smarter, invest wiser, and improve your financial
                  wellness with AI-powered tools.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 mt-10">
                <button onClick={handleGetStarted} className="bg-yellow-500 text-black font-medium px-10 py-4 rounded-lg hover:bg-yellow-400 transition-all shadow-lg shadow-yellow-500/20 flex items-center gap-2 text-lg">
                  Get Started
                  <ArrowRightIcon size={20} />
                </button>
                <button className="border border-gray-700 bg-[#151822]/50 backdrop-blur-sm text-white font-medium px-10 py-4 rounded-lg hover:bg-[#1A1F2E] transition-all flex items-center gap-2 text-lg">
                  See Demo
                  <PlayIcon size={20} />
                </button>
              </div>
              <div className="mt-12">
                <div className="flex flex-wrap items-center gap-2 text-sm text-gray-400">
                  <StarIcon className="h-4 w-4 text-yellow-500" />
                  <StarIcon className="h-4 w-4 text-yellow-500" />
                  <StarIcon className="h-4 w-4 text-yellow-500" />
                  <StarIcon className="h-4 w-4 text-yellow-500" />
                  <StarIcon className="h-4 w-4 text-yellow-500" />
                  <span className="ml-1">Trusted by 150+ users worldwide</span>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* Dashboard Preview */}
              <div 
                onClick={handleGetStarted}
                className="relative z-10 rounded-xl overflow-hidden shadow-2xl shadow-blue-500/10 border border-gray-700/50 hover:shadow-blue-500/20 hover:border-blue-500/30 transition-all duration-300 cursor-pointer group"
              >
                <div className="bg-[#151822] p-4 border-b border-gray-700/50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="text-sm text-gray-400">WealthPulse™ Dashboard</div>
                  </div>
                </div>
                {!imageLoaded && !imageError && (
                  <div className="flex items-center justify-center p-12 bg-[#1A1F2E] rounded-b-xl">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-yellow-500"></div>
                    <span className="ml-3 text-gray-400">Loading dashboard preview...</span>
                  </div>
                )}
                <img 
                  src={dashboardImagePath} 
                  alt="WealthPulse Dashboard Preview" 
                  className={`w-full h-auto rounded-b-xl transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                  onLoad={() => {
                    console.log('Dashboard image loaded successfully');
                    setImageLoaded(true);
                  }}
                  onError={(e) => {
                    console.error('Failed to load dashboard image:', e.currentTarget.src);
                    setImageError(true);
                    e.currentTarget.style.display = 'none';
                    // Show fallback content
                    const fallback = e.currentTarget.parentElement?.querySelector('.dashboard-fallback');
                    if (fallback) {
                      (fallback as HTMLElement).style.display = 'flex';
                    }
                  }}
                />
                {/* Fallback content if image fails to load */}
                <div className="dashboard-fallback hidden flex-col items-center justify-center p-12 bg-[#1A1F2E] rounded-b-xl">
                  <div className="bg-blue-500/20 p-6 rounded-full mb-4">
                    <BarChart2Icon className="h-12 w-12 text-blue-400" />
                  </div>
                  <h4 className="text-white font-semibold mb-2">WealthPulse™ Dashboard</h4>
                  <p className="text-gray-400 text-center text-sm mb-4">
                    Track your portfolio performance, monitor investments, and get AI-powered insights
                  </p>
                  <div className="grid grid-cols-2 gap-4 w-full max-w-xs">
                    <div className="bg-[#23263A] p-3 rounded-lg text-center">
                      <div className="text-green-500 font-bold text-lg">€24,395</div>
                      <div className="text-gray-400 text-xs">Portfolio Value</div>
                    </div>
                    <div className="bg-[#23263A] p-3 rounded-lg text-center">
                      <div className="text-yellow-500 font-bold text-lg">+12.4%</div>
                      <div className="text-gray-400 text-xs">Performance</div>
                    </div>
                  </div>
                </div>
                {/* Overlay with "Live Preview" badge */}
                <div className="absolute top-6 right-6">
                  <div className="bg-green-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    Live Preview
                  </div>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/20">
                    <div className="text-white font-medium flex items-center gap-2">
                      <ArrowRightIcon size={20} />
                      Click to Get Started
                    </div>
                  </div>
                </div>
                {/* Glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500/30 to-blue-500/30 rounded-xl blur opacity-30"></div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
              <div className="absolute -top-6 -left-6 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Dashboard Preview CTA */}
      <section className="py-16 px-6 md:px-16 lg:px-24 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-[#151822]/80 to-[#23263A]/80 rounded-2xl p-8 border border-gray-700/50 backdrop-blur-sm">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Experience Your <span className="text-yellow-500">Financial Future</span>
            </h3>
            <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
              Get a glimpse of your personalized WealthPulse™ Dashboard above. Track your portfolio, 
              monitor performance, and make informed decisions with AI-powered insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleGetStarted} 
                className="bg-yellow-500 text-black font-medium px-8 py-3 rounded-lg hover:bg-yellow-400 transition-all shadow-lg shadow-yellow-500/20 flex items-center justify-center gap-2"
              >
                <ArrowRightIcon size={18} />
                Start Your Dashboard
              </button>
              <button className="border border-gray-600 bg-[#1A1F2E]/50 text-white font-medium px-8 py-3 rounded-lg hover:bg-[#23263A] transition-all flex items-center justify-center gap-2">
                <PlayIcon size={18} />
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-12 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#151822] via-[#1A1F2E] to-[#151822] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6">
            <div className="bg-[#1A1F2E]/80 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6 flex items-center gap-4 hover:border-yellow-500/30 transition-all group">
              <div className="bg-gradient-to-br from-yellow-500/20 to-yellow-500/5 p-3 rounded-lg">
                <UsersIcon className="text-yellow-500 h-6 w-6" />
              </div>
              <div>
                <div className="text-2xl font-bold group-hover:text-yellow-500 transition-colors">
                  150+
                </div>
                <div className="text-gray-400 text-sm">Active Users</div>
              </div>
            </div>
            <div className="bg-[#1A1F2E]/80 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6 flex items-center gap-4 hover:border-blue-500/30 transition-all group">
              <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/5 p-3 rounded-lg">
                <LineChartIcon className="text-blue-500 h-6 w-6" />
              </div>
              <div>
                <div className="text-2xl font-bold group-hover:text-blue-500 transition-colors">
                  €100M+
                </div>
                <div className="text-gray-400 text-sm">Assets Tracked</div>
              </div>
            </div>
            <div className="bg-[#1A1F2E]/80 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6 flex items-center gap-4 hover:border-purple-500/30 transition-all group">
              <div className="bg-gradient-to-br from-purple-500/20 to-purple-500/5 p-3 rounded-lg">
                <ClockIcon className="text-purple-500 h-6 w-6" />
              </div>
              <div>
                <div className="text-2xl font-bold group-hover:text-purple-500 transition-colors">
                  Real-time
                </div>
                <div className="text-gray-400 text-sm">Market Insights</div>
              </div>
            </div>
            <div className="bg-[#1A1F2E]/80 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6 flex items-center gap-4 hover:border-green-500/30 transition-all group">
              <div className="bg-gradient-to-br from-green-500/20 to-green-500/5 p-3 rounded-lg">
                <BrainIcon className="text-green-500 h-6 w-6" />
              </div>
              <div>
                <div className="text-2xl font-bold group-hover:text-green-500 transition-colors">
                  GPT-4
                </div>
                <div className="text-gray-400 text-sm">Powered Models</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Products Section */}
      <section className="py-24 px-6 md:px-16 lg:px-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 relative z-10">
            <h2 className="text-4xl font-bold mb-4 tracking-tight">
              Choose Your Path to{' '}
              <span className="text-yellow-500">Financial Success</span>
            </h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto font-light">
              Two powerful platforms designed for your unique financial journey
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
            <div className="bg-[#151822] rounded-xl p-8 border border-gray-800/50 hover:border-blue-500/30 transition-all group shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/5 p-3 rounded-lg">
                  <BarChart2Icon className="h-6 w-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold group-hover:text-blue-500 transition-colors">
                    MarketPro™
                  </h3>
                  <p className="text-gray-400">Advanced Investing Tools</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div>
                  <div className="bg-[#1A1F2E]/50 p-3 rounded-lg inline-block mb-3">
                    <LineChartIcon className="h-6 w-6 text-blue-400" />
                  </div>
                  <h4 className="text-lg font-medium mb-2">
                    Portfolio Analytics
                  </h4>
                  <p className="text-gray-400 text-sm">
                    AI-driven insights and performance tracking
                  </p>
                </div>
                <div>
                  <div className="bg-[#1A1F2E]/50 p-3 rounded-lg inline-block mb-3">
                    <TrendingUpIcon className="h-6 w-6 text-blue-400" />
                  </div>
                  <h4 className="text-lg font-medium mb-2">
                    Market Predictions
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Advanced forecasting and trend analysis
                  </p>
                </div>
                <div>
                  <div className="bg-[#1A1F2E]/50 p-3 rounded-lg inline-block mb-3">
                    <ShieldIcon className="h-6 w-6 text-blue-400" />
                  </div>
                  <h4 className="text-lg font-medium mb-2">Risk Assessment</h4>
                  <p className="text-gray-400 text-sm">
                    Real-time risk monitoring and alerts
                  </p>
                </div>
                <div>
                  <div className="bg-[#1A1F2E]/50 p-3 rounded-lg inline-block mb-3">
                    <LightbulbIcon className="h-6 w-6 text-blue-400" />
                  </div>
                  <h4 className="text-lg font-medium mb-2">AI Advisor</h4>
                  <p className="text-gray-400 text-sm">
                    Personalized investment recommendations
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#151822] rounded-xl p-8 border border-gray-800/50 hover:border-purple-500/30 transition-all group shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-br from-purple-500/20 to-purple-500/5 p-3 rounded-lg">
                  <PieChartIcon className="h-6 w-6 text-purple-500" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold group-hover:text-purple-500 transition-colors">
                    WealthPulse™
                  </h3>
                  <p className="text-gray-400">Financial Wellness Platform</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div>
                  <div className="bg-[#1A1F2E]/50 p-3 rounded-lg inline-block mb-3">
                    <LineChartIcon className="h-6 w-6 text-purple-400" />
                  </div>
                  <h4 className="text-lg font-medium mb-2">Financial Health</h4>
                  <p className="text-gray-400 text-sm">
                    Comprehensive wellness tracking
                  </p>
                </div>
                <div>
                  <div className="bg-[#1A1F2E]/50 p-3 rounded-lg inline-block mb-3">
                    <PieChartIcon className="h-6 w-6 text-purple-400" />
                  </div>
                  <h4 className="text-lg font-medium mb-2">Smart Budgeting</h4>
                  <p className="text-gray-400 text-sm">
                    AI-powered expense management
                  </p>
                </div>
                <div>
                  <div className="bg-[#1A1F2E]/50 p-3 rounded-lg inline-block mb-3">
                    <TargetIcon className="h-6 w-6 text-purple-400" />
                  </div>
                  <h4 className="text-lg font-medium mb-2">Goal Setting</h4>
                  <p className="text-gray-400 text-sm">
                    Personalized financial objectives
                  </p>
                </div>
                <div>
                  <div className="bg-[#1A1F2E]/50 p-3 rounded-lg inline-block mb-3">
                    <TrendingUpIcon className="h-6 w-6 text-purple-400" />
                  </div>
                  <h4 className="text-lg font-medium mb-2">
                    Savings Automation
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Intelligent saving strategies
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="py-24 px-6 md:px-16 lg:px-24 relative bg-[#151822]">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-purple-900/5 to-blue-900/10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 tracking-tight">
              Trusted by <span className="text-yellow-500">Investors</span>{' '}
              Worldwide
            </h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto font-light">
              See what our users say about their experience with AIVesting
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#1A1F2E] p-8 rounded-xl border border-gray-800/50 hover:border-yellow-500/30 transition-all">
              <div className="flex items-center gap-1 mb-4">
                <StarIcon className="h-5 w-5 text-yellow-500" />
                <StarIcon className="h-5 w-5 text-yellow-500" />
                <StarIcon className="h-5 w-5 text-yellow-500" />
                <StarIcon className="h-5 w-5 text-yellow-500" />
                <StarIcon className="h-5 w-5 text-yellow-500" />
              </div>
              <p className="text-gray-300 mb-6">
                "AIVesting has transformed how I approach investing. The
                AI-powered insights help me make informed decisions, and I've
                seen a significant improvement in my portfolio performance."
              </p>
              <div>
                <div className="font-medium">Alex Thompson</div>
                <div className="text-sm text-gray-400">Individual Investor</div>
              </div>
            </div>
            <div className="bg-[#1A1F2E] p-8 rounded-xl border border-gray-800/50 hover:border-yellow-500/30 transition-all">
              <div className="flex items-center gap-1 mb-4">
                <StarIcon className="h-5 w-5 text-yellow-500" />
                <StarIcon className="h-5 w-5 text-yellow-500" />
                <StarIcon className="h-5 w-5 text-yellow-500" />
                <StarIcon className="h-5 w-5 text-yellow-500" />
                <StarIcon className="h-5 w-5 text-yellow-500" />
              </div>
              <p className="text-gray-300 mb-6">
                "The portfolio optimization feature is incredible. It suggested
                adjustments that I wouldn't have considered, and my returns have
                improved by 12% since implementing them."
              </p>
              <div>
                <div className="font-medium">Sarah Johnson</div>
                <div className="text-sm text-gray-400">Financial Advisor</div>
              </div>
            </div>
            <div className="bg-[#1A1F2E] p-8 rounded-xl border border-gray-800/50 hover:border-yellow-500/30 transition-all">
              <div className="flex items-center gap-1 mb-4">
                <StarIcon className="h-5 w-5 text-yellow-500" />
                <StarIcon className="h-5 w-5 text-yellow-500" />
                <StarIcon className="h-5 w-5 text-yellow-500" />
                <StarIcon className="h-5 w-5 text-yellow-500" />
                <StarIcon className="h-5 w-5 text-gray-500" />
              </div>
              <p className="text-gray-300 mb-6">
                "As someone new to investing, AIVesting has been an educational
                tool as much as an investment platform. The AI assistant answers
                all my questions and helps me learn."
              </p>
              <div>
                <div className="font-medium">Michael Chen</div>
                <div className="text-sm text-gray-400">Beginner Investor</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-24 px-6 md:px-16 lg:px-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-900/5 to-transparent pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6 tracking-tight">
            Ready to <span className="text-yellow-500">Transform</span> Your
            Financial Future?
          </h2>
          <p className="text-gray-300 text-xl mb-10 font-light">
            Join thousands of investors using AIVesting to optimize their
            portfolios and achieve their financial goals.
          </p>
          <button onClick={handleGetStarted} className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-black font-medium px-12 py-4 rounded-lg hover:from-yellow-400 hover:to-yellow-300 transition-all shadow-lg shadow-yellow-500/20 text-lg">
            Start Your Free Trial
          </button>
          <p className="text-gray-400 mt-4 text-sm">No credit card required</p>
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </div>;
};